<template>
  <div id="page-pagination">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <v-widget title="default">
            <div slot="widget-content" class="text-xs-center">
              <v-pagination v-model="page" :length="15"></v-pagination>
            </div>
          </v-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from "@/components/widgets/VWidget.vue";
export default {
  name: "PageNation",
  components:{
    VWidget,
  },
  data:()=>({
    page:1
  })
}
</script>

<style scoped>

</style>
