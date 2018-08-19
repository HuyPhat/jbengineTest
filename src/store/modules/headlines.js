import { getLatestHeadlines } from "../../api/index";

export const NAMESPACE = 'headline';
const TYPE = {
    REQUEST_LATEST_HEADLINES: "requestLatestHeadlines",
    REQUEST_LATEST_HEADLINES_SUCCESS: "requestLatestHeadlinesSuccess",
    REQUEST_LATEST_HEADLINES_FAILURE: "requestLatestHeadlinesFailure",
};
export const SET_CURRENT_SOURCE = 'setCurrentSource';

const headlineModule = {
    namespaced: true,
    state: {
        networkStatus: "idle",
        articles: [],
        networkError: null,
        currentSource: null
    },
    getters: {
        currentSourceName: state => {
            const { currentSource } = state;
            return currentSource ? currentSource.name : 'Filter'
        },
        articlesFromSource: (state) => {
            const { currentSource, articles } = state;
            if (!currentSource) {
                return articles;
            } else {
                return articles.filter(item => item.source.id === currentSource.id)
            }
        }
    },
    mutations: {
        [TYPE.REQUEST_LATEST_HEADLINES](state) {
            state.networkStatus = "loading";
        },
        [TYPE.REQUEST_LATEST_HEADLINES_SUCCESS](state, articles) {
            state.networkStatus = "loaded";
            state.articles = articles;
        },
        [TYPE.REQUEST_LATEST_HEADLINES_FAILURE](state, error) {
            state.networkStatus = "loaded";
            state.networkError = error;
        },
        [SET_CURRENT_SOURCE](state, source) {
            state.currentSource = source;
        },
    },
    actions: {
        async requestLatestHeadlines(context) {
            try {
                context.commit(TYPE.REQUEST_LATEST_HEADLINES);
                const response = await getLatestHeadlines();
                // console.log(response);
                if (response.status === 200) {
                    context.commit(
                        TYPE.REQUEST_LATEST_HEADLINES_SUCCESS,
                        response.data.articles
                    );
                } else {
                    context.commit(
                        TYPE.REQUEST_LATEST_HEADLINES_FAILURE,
                        response.data.error
                    );
                }
            } catch (networkError) {
                context.commit(TYPE.REQUEST_LATEST_HEADLINES_FAILURE, networkError);
            }
        }
    }
};

export default {...headlineModule };