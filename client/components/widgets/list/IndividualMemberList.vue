<template>
  <v-card-text class="pa-0">
    <v-list two-line class="pa-0" >
      <template v-for="(item, index) in items">
        <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
        <v-divider v-else-if="item.divider" :key="index"></v-divider>
      </template>
    </v-list>
    <v-list two-line height="300px">
      <v-list-item-group active-class="pink--text" multiple >
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <!--TODO: 알림시간   -->
                <v-list-item-subtitle v-text="item.date"></v-list-item-subtitle>
                <!--TODO: 알람내용   -->
                  <v-list-item-subtitle
                    class="text--primary"
                    v-text="item.notify">
                  </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon
                  v-if="!active"
                  color="yellow darken-3"
                >
                  mdi-star
                </v-icon>
                <v-icon
                  v-else
                  color="grey lighten-1"
                >
                  mdi-star-outline
                </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>
          <v-divider
            v-if="index < items.length - 1"
            :key="index"
          ></v-divider>
        </template>

      </v-list-item-group>
    </v-list>

  </v-card-text>
</template>

<script>
import notify from '@/utils/notifyData.js';
export default {
  name: "IndividualMemberList",
  data:()=>({
    items:notify,
    selected:0
  })
}
</script>

<style scoped>

</style>
