<template>
  <div class="login-wrap">
    <div class="login-form">
      <v-container fluid >
        <v-layout align-center justify-center>
          <v-flex >
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <h1>어드민 로그인</h1>
                </div>
                <v-form v-model="valid" ref="loginForm" lazy-validation>
                  <!--TODO: 이메일-->
                  <v-row>
                    <v-col cols="12">
                      <v-text-field v-model="form.email" :rules="loginEmailRules" label="E-mail" required clearable> </v-text-field>
                    </v-col>
                  </v-row>
                  <!--TODO: 비밀번호-->
                  <v-row>
                    <v-col cols="12">
                      <v-text-field  v-model="form.password"
                                     :rules="[rules.required, rules.min]"
                                     label="password"
                                     hint="At least 8 characters"
                                     clearable
                                     counter
                                     required
                                     maxlength="15"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <!--TODO: 로그인유지 체크박스-->
                  <div>
                    <v-row align="center">
                      <v-col cols="1">
                        <v-checkbox></v-checkbox>
                      </v-col>
                      <v-col cols="3">
                        <label>로그인유지</label>
                      </v-col>
                    </v-row>
                  </div>
                  <!--TODO: 로그인 버튼-->
                  <v-row>
                    <v-col>
                      <v-btn  block :disabled="!valid"  @click="validate" :loading="loading"> 로그인 </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  layout:'login',
  // meta info
  head() {
    return {
      title: this.meta.title,
      titleTemplate: "%s | finiview b2c admin",
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.meta.title,
          template: chunk => `${chunk} | finiview b2c admin`,
        }
      ],
    }
  },
  data(){
    return{
      meta:{
        title:"로그인"
      },
      form:{
        email: 'abcde@finiview.com',
        password:'password',
      },
      valid: true,
      loading:false,
      loginEmailRules: [
        v => !!v || "Required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      rules: {
        required: value => !!value || "Required.",
        min: v => (v && v.length >= 8) || "Min 8 characters"
      },
      token: {
        accessToken:'ddddddddddd',
        refreshToken:'dfsfefsfsF'
      }
    }
  },

  methods: {

    async validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
        try{
          this.loading = true;
          const user = {
            email: this.form.email,
            password: this.form.password
          }
          const rs = await this.$store.dispatch('modules/login/login',user)
          if(rs.result.error){

          }
        }catch (err){

        }

        this.$store.commit('modules/login/loginToken',this.token)

        setTimeout(() => {
          this.$router.push('/admin/model/List');
        }, 1000);
      }
    },
  }
}
</script>

<style scoped>

</style>
