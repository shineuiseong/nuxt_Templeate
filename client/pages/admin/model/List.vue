<template>
	<v-app>
		<app-drawer :menus="menu" :title="drawerTitle"></app-drawer>

		<!--
    <v-row class="shrink mt-3 ml-3" >
      <v-col cols="12"  >
       <h2>전체 3D 콘텐츠</h2>
      </v-col>
    </v-row>


    <v-row class="shrink">
      <v-col cols="12" class="ml-7">
        <v-tabs class="" v-model="active_tab">
          <v-tab v-for="item in contentTab" :key="item.id">
            {{item.name}}
          </v-tab>
        </v-tabs>
      </v-col>
      <v-divider></v-divider>
    </v-row>


    <v-row class="shrink" >
      <v-col cols="9" ></v-col>

      <v-col cols="1" align-self="center">
        <v-combobox :items="comboItems" outlined dense >
        </v-combobox>
      </v-col>

      <v-col cols="2">
        <v-text-field
          flat
          rounded
          solo-inverted
          reverse
          label="검색"
        >
        </v-text-field>
      </v-col>
    </v-row>

    <template>
      <v-row class="shrink pa-3 " align="center">
        <v-col cols="1" >
          <p align="right">정렬</p>
        </v-col>
        <v-col cols="1" align-self="center">
          <v-combobox :items="alignItems"  outlined dense>
          </v-combobox>
        </v-col>
      </v-row>
    </template>-->

		<div class="sub-title-wrap">
			<h1>{{ meta.title }}</h1>

			<div class="sub-container-wrap">
				<div class="table-search-wrap">
					<div class="form-wrap column-02">
						<div class="search-dl-table">
							<v-tabs class="" v-model="active_tab">
								<v-tab v-for="item in contentTab" :key="item.id">
									{{ item.name }}
								</v-tab>
							</v-tabs>
						</div>
					</div>
				</div>

				<div class="table-top space-between">
					<v-spacer></v-spacer>
					<div class="list-options">
						<v-combobox id="select-view" :items="comboItems" outlined dense></v-combobox>
					</div>
					<div>
						<v-text-field flat rounded solo-inverted reverse label="검색"> </v-text-field>
					</div>
				</div>

				<v-row class="shrink pa-3" align="center">
					<v-col cols="1">
						<p align="right">정렬</p>
					</v-col>
					<v-col cols="1" align-self="center">
						<v-combobox id="combo" :items="alignItems" outlined dense> </v-combobox>
					</v-col>
					<v-col cols="1">
						<p align="right">정렬</p>
					</v-col>
					<v-col cols="1" align-self="center">
						<v-combobox id="combo" :items="alignItems" outlined dense> </v-combobox>
					</v-col>
				</v-row>
			</div>
		</div>
	</v-app>
</template>

<script>
import AppDrawer from '@/components/common/AppDrawer.vue';
import menuItem from '@/utils/menuItem.js';
export default {
	name: 'List',
	meta: {
		theme: 'model',
		requiresAuth: true,
	},
	head() {
		return {
			title: this.meta.title,
			titleTemplate: '%s | finiview b2c admin',
			meta: [
				{
					hid: 'og:title',
					property: 'og:title',
					content: this.meta.title,
					template: (chunk) => `${chunk} | finiview b2c admin`,
				},
			],
		};
	},
	data: () => ({
		meta: {
			title: '전체 3D 콘텐츠 목록',
		},
		menu: menuItem.content,
		drawerTitle: '3D 콘텐츠 관리',
		active_tab: null,
		contentTab: [
			{ id: 0, title: 'model', name: '모델 관리' },
			{ id: 1, title: 'style', name: '스타일링 관리' },
		],
		comboItems: ['test1', 'test2', 'test3'],
		alignItems: [10, 20, 30],
	}),
	components: {
		AppDrawer,
	},
};
</script>
<style scoped>
::v-deep #combo {
	max-width: 70px;
}
</style>
