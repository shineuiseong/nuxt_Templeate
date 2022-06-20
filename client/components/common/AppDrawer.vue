<template>
  <!--DATE: 2022-06-15 오후 3:00 AUTHOR: Euiseong 수정완료 -->
  <v-navigation-drawer id="appDrawer"
   :mini-variant.sync="mini" width="268"
    fixed dark  v-model="drawer"  app clipped
    :disable-route-watcher="true"
   >
    <!--TODO: 네비게이션 바 리스트 아이템   -->
    <v-toolbar  dark >
      <v-toolbar-title class="ml-0 pr-3 flex text-center">
        <span class="hidden-sm-and-down" style="font-size: large">{{title}}</span>
      </v-toolbar-title>
    </v-toolbar>
    <!--HINT: PerfectScrollbar 라이브러리 적용 -->
    <PerfectScrollbar >
      <v-list shaped class="mt-10" >
        <v-list-item-group v-model="selectedItem" >
          <!--HINT: Props: menus 부모로부터 받아옴 -> pages(contents,tag,user) -->
          <v-list-item v-for="item in menus" :key="item.title">
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </PerfectScrollbar>
  </v-navigation-drawer>
</template>
<script>
import {PerfectScrollbar} from 'vue2-perfect-scrollbar'
export default {
  name: "AppDrawer",
  components:{
    PerfectScrollbar
  },
  props: {
    menus:{
      default:[],
    },
    title:''
  },
  computed:{
    drawer: {
      get(){
        return this.$store.state.drawer

      },
      set(val){
        this.$store.commit('drawer',val)
      }
    }
  },
  data: () => ({
    mini: false,
    selectedItem:0
  }),

}
</script>

<style lang="stylus" scoped>
#appDrawer {
  overflow: hidden;
  .drawer-menu--scroll {
    height: calc(100vh - 48px);
    overflow: auto;
  }
}
.v-navigation-drawer__content {
  overflow-y: hidden;
}

</style>
