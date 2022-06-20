<template>
  <v-app light>

    <!-- TODO: 헤더 부분  -->
         <page-header />
    <!-- TODO: 컨텐츠 중앙  -->
<!--        <v-main app>-->
<!--          <v-container fluid>-->
<!--            <div class="page-wrapper">-->
<!--              <nuxt/>-->
<!--            </div>-->
<!--            <v-footer height="auto"  class="white pa-3 app&#45;&#45;footer">-->
<!--              <span class="caption">&copy; {{ new Date().getFullYear() }} , finiviewCo., Ltd. All Rights Reserved.​</span>-->
<!--            </v-footer>-->
<!--          </v-container>-->
<!--        </v-main>-->
    <v-main>
      <nuxt/>
    </v-main>

  </v-app>
</template>

<script>
import PageHeader from "@/components/common/PageHeader.vue";
export default {
  name: "default",
  components:{
    PageHeader,
  },
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
