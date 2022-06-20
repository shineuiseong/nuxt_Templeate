<template>
  <v-app light>

    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>
    <v-footer light :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

  </v-app>
</template>

<script>
import AppDrawer from "~/components/common/AppDrawer.vue";
import PageHeader from "~/components/common/PageHeader.vue";

export default {
  name: "admin",
  data: ()=>({
    expanded: true,
    fixed:false,
    menus:[]
    }),
  components:{
    AppDrawer,
    PageHeader,
  }
}
</script>

<style scoped>

</style>
