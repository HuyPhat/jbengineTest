<template>
  <v-menu offset-y max-height="260px">
    <v-btn slot="activator" color="primary mr-0" dark>
      {{filterName}}
    </v-btn>
    <v-list>
      <v-list-tile @click="filterHeadlineItems(defaultSourceFilter.id)">
        <v-list-tile-title>{{ defaultSourceFilter.name }}</v-list-tile-title>
      </v-list-tile>
      <v-list-tile v-for="item in sourceFilter.sourceItems" :key="item.id" @click="filterHeadlineItems(item)">
        <v-list-tile-title>{{ item.name }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>
<script>
import { mapActions, mapState, mapMutations, mapGetters } from "vuex";
import { NAMESPACE as NAMESPACE_SOURCE_LIST } from "@/store/modules/sourcelist";
import {
  NAMESPACE as NAMESPACE_HEADLINE,
  SET_CURRENT_SOURCE
} from "@/store/modules/headlines";

export default {
  data() {
    return {
      defaultSourceFilter: {
        id: null,
        name: "Filter"
      },
      currentHeadline: null
    };
  },
  computed: {
    ...mapState({
      sourceFilter: state => state.sourceList
    }),
    ...mapGetters(NAMESPACE_HEADLINE, {
      filterName: "currentSourceName" // map `this.filterName` to `this.$store.getters.currentSourceName`
    })
  },
  methods: {
    ...mapActions(NAMESPACE_SOURCE_LIST, ["getSourceItems"]),
    ...mapMutations(NAMESPACE_HEADLINE, {
      filterHeadlineItems: SET_CURRENT_SOURCE // map `this.add()` to `this.$store.commit('setCurrentSource')`
    })
  },
  created() {
    this.getSourceItems();
  },
  mounted() {
    console.log("sourceItems: ", this.sourceFilter.sourceItems);
  }
};
</script>
