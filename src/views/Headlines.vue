<template>
  <div>
    <v-container fluid>
      <v-layout align-center>
        <v-flex>
          <h1 class='display-1'>Headlines</h1>
        </v-flex>
        <v-flex>
          <v-layout justify-end>
            <source-filter/>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <div class='headline-cards'>
      <v-container fluid grid-list-md>
        <div v-if="headline.networkStatus === 'loading'">
          <div class="text-xs-center">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </div>
        </div>
        <div v-else>
          <v-layout column align-center v-if="articles.length === 0">
            <div class="display-1">No articles found for {{currentSourceName}}</div>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12 sm6 md4 v-for="article in articles" :key="article.title">
              <v-card>
                <v-card-media :src="article.urlToImage" height="200px"></v-card-media>
                <v-card-title primary-title>
                  <div>
                    <span class="grey--text">{{formatPublishedDate(article.publishedAt)}}</span><br>
                    <h3 class="headline mb-0">{{article.title}}</h3>
                    <div>{{article.description}}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat color='primary' :href="article.url" target='_blank'>Read Article</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import SourceFilter from "@/components/SourceFilter.vue";
import { NAMESPACE as NAMESPACE_HEADLINE } from "@/store/modules/headlines";

export default {
  components: { SourceFilter },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      headline: state => state.headline,
      currentSource: state => state.sourceList
    }),
    ...mapGetters(NAMESPACE_HEADLINE, {
      articles: "articlesFromSource", // map `this.articles` to `this.$store.getters.articlesFromSource`
      currentSourceName: "currentSourceName"
    })
  },
  methods: {
    formatPublishedDate(date) {
      const rawDate = new Date(date);
      let dd = rawDate.getDate();
      let mm = rawDate.getMonth() + 1;
      const yyyy = rawDate.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      return `${dd}.${mm}.${yyyy}`;
    },
    ...mapActions("headline", ["requestLatestHeadlines"])
  },
  created() {
    console.log(this);
    // this.$store.dispatch("headline/requestLatestHeadlines");
    this.requestLatestHeadlines();
  },
  mounted() {
    console.log("headline: ", this.headline.articles); // I'm text inside the component.
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content-card-container {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>