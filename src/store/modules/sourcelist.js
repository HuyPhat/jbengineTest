import { getListOfSources } from "../../api/index";

export const NAMESPACE = 'sourceList';
const REQUEST_SOURCE_LIST = "requestSourceList";
const REQUEST_SOURCE_LIST_SUCCESS = "requestSourceListSuccess";
const REQUEST_SOURCE_LIST_FAILURE = "requestSourceListFailure";

const state = {
    requestStatus: "idle",
    sourceItems: [],
    requestError: null,
    currentSource: null
};

const getters = {};

const mutations = {
    requestSourceList(state) {
        state.requestStatus = "loading";
    },
    requestSourceListSuccess(state, sourceItems) {
        state.requestStatus = "loaded";
        state.sourceItems = sourceItems;
    },
    requestSourceListFailure(state, networkError) {
        state.requestStatus = "loaded";
        state.requestError = networkError;
    },
};

const actions = {
    async getSourceItems(context) {
        try {
            context.commit(REQUEST_SOURCE_LIST);
            const response = await getListOfSources();
            console.log("response: ", response);
            if (response.status === 200) {
                context.commit(REQUEST_SOURCE_LIST_SUCCESS, response.data.sources);
            } else {
                context.commit(REQUEST_SOURCE_LIST_FAILURE, response.data.error);
            }
        } catch (networkError) {
            context.commit(REQUEST_SOURCE_LIST_FAILURE, networkError);
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};