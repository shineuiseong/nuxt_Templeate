<template>
  <v-card class="elevation-0" width="300px" >
    <!--TODO: 탭 메뉴    -->
    <v-tabs grow v-model="active_tab" centered color="dark">
      <v-tab v-for="(item) in menuTab" :key="item.id" @click="moveTabs(item.title)">
      {{item.name}}
      </v-tab>
    </v-tabs>
    <v-divider></v-divider>
    <!--TODO: 탭 메뉴 선택시 해당 컴포넌트 활성화  -->
    <PerfectScrollbar>
    <component :is="currentView" />
    </PerfectScrollbar>
  </v-card>
</template>

<script>
import {PerfectScrollbar} from 'vue2-perfect-scrollbar'
import IndividualMember from "~/components/widgets/list/IndividualMemberList.vue";
import Tag from "~/components/widgets/list/TagList.vue";
import Content from "~/components/widgets/list/ContentList.vue";
import mixin from '@/mixin/global.js'
export default {
  name:'NotificationList',
  components:{
    PerfectScrollbar,
    IndividualMember,
    Tag,
    Content
  },
  mixins:[mixin],
  data:()=>({
    currentView:'IndividualMember',
    active_tab:0
  }),
  async created() {
    this.currentView = 'IndividualMember'
  },
  mounted() {
    this.active_tab = 0;
  },
  methods:{
    moveTabs(id){
      this.currentView = id
    }
  }


};
</script>
