<template>
  <v-app light>
    <v-main>
      <nuxt/>
    </v-main>

  </v-app>
</template>

<script>
export default {
  name: "default",

  data(){
    return{
      fixed: false,
    }
  }
}
</script>

<style lang="stylus" scoped>

.page-wrapper{
  min-height: calc(100vh - 64px - 50px - 81px);
  margin-bottom 50px;
}
.app--footer{
  position absolute;
  bottom 0;
  justify-content center;
  width 100%
}
</style>
