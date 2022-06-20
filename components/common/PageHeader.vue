<template>
  <!--DATE: 2022-06-15 오후 2:57 AUTHOR: Euiseong 수정완료 -->
    <v-app-bar dense fixed app class="white" clipped-left>
      <v-app-bar-title style="width: 210px"  class="ml-8 pl-3 " >
        <nuxt-link to="/admin">
          <img  class="" src="/images/common/header-logo.svg">
        </nuxt-link>
      </v-app-bar-title>
      <!--TODO:로그인 여부체크 ->GNB 보여지는 부분체크-->
      <!--HINT: v-if -->
      <template v-if="ConfirmLogin">
        <v-app-bar-nav-icon @click.stop="toggleDrawer()"  ></v-app-bar-nav-icon>

        <!--TODO: 상단 메뉴탭-->
        <!--HINT: menuTab: data , optional: 탭선택 비활성화 -->
        <v-tabs class="offset-1 ml-3 " color="dark"  v-bind:optional="optional" >
          <v-tab ripple class="font-weight-bold"  v-for="item in menuTab" :key="item.id" :to="item.href?item.href:null">
            {{item.name}} 관리
          </v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
              <!--TODO: 상단 오른쪽 알람버튼 -> 알람메뉴창 활성화-->
        <v-menu
          offset-y
          origin="center center"
          class="elevation-1"
          :nudge-right="140"
          :nudge-bottom="14"
          transition="scale-transition"
          :close-on-content-click="false"
        >
          <template v-slot:activator="{ on,attrs }" >
            <v-btn icon v-on="on" v-bind="attrs" @click.prevent="">
              <!--TODO: 알람갯수 -> 알람 존재여부에 따라 바뀌어야한다.->알람목록 갯수 가져오기 -->
              <v-badge v-bind:color="notifyColor ? 'red' : ''" overlap>
                <span slot="badge">{{notifyLength}}</span>
                <v-icon medium>notifications</v-icon>
              </v-badge>
            </v-btn>
          </template>
          <!--TODO: 알람 리스트 컴포넌트  -->
          <NotificationList/>
        </v-menu>
        <!--TODO: 로그인 유저 이름 (관리자) -> 추후 role 로 이름 대신?-->
        <div>
          <v-card flat tile  width="80px" align="center"  class="justify-center align-center" >
            관리자
          </v-card>
        </div>
        <v-btn rounded dark @click.prevent="ClickLoginButton"  >
          {{ConfirmLogin ? '로그아웃' : '로그인'}}
        </v-btn>
      </template>
    </v-app-bar>
</template>
<script>
import NotificationList from "@/components/widgets/list/NotificationList.vue";
import mixin from '@/mixin/global.js'
export default {
  name: "PageHeader",
  components:{
    NotificationList,
  },
  mixins:[mixin],
  data:()=>({
    optional:true, // 탭 메뉴 활성화 여부
    notifyLength: 3, // 알람 갯수
    notifyColor:  true, // 알람 갯수색깔
    active_tab:0,
    confirm:false,
  }),

  mounted() {
      this.optional = true
      this.toggleDrawer()

  },
  computed:{
    // NOTE: 로그인체크 -> store state -> userId
    ConfirmLogin(){
      return this.$store.getters["modules/login/getToken"]

    },
  },

  methods:{

    // NOTE: 토글버튼 활성화(Appdrawerbar)
    toggleDrawer(){
      this.$store.commit('modules/toggle/toggleDrawer')
    },
    // NOTE: 로그인버튼 이벤트
    ClickLoginButton(){

    },
    // NOTE: 로그아웃 이벤트
    Logout(){

    },
  }
}
</script>
