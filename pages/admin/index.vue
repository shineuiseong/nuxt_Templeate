<template>
  <v-app>
    <app-drawer :menus="menu" :title="drawerTitle"></app-drawer>

    <page-nation></page-nation>
  </v-app>
</template>

<script>
import AppDrawer from '@/components/common/AppDrawer.vue'
import PageNation from "@/components/widgets/common/PageNation.vue";
export default {
  name: "admin",
  data:()=>({
    menu: [],
    drawerTitle: '관리자 메인'
  }),
  components:{
    PageNation,
    AppDrawer
  },
  mounted() {
    // this.$router.push('/login')
   // this.CheckLogin()

  },
  methods:{
  }
}
</script>

<style scoped>

</style>
