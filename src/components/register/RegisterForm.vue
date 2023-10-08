<template>
    <div class="registerForm-container">
        <div class="top-blue-frame"></div>
        <v-row>
            <v-col md="6" offset-md="3" sm="10" offset-sm="1" xs="12">
                <v-form
                    @submit.prevent="onSubmit"
                    v-model="valid"
                    class="form elevation-15 rounded-xl">
                    <div class="title">ثبت نام در جی دامین</div>
                    <div>
                        برای ثبت نام، اطلاعات مورد نیاز زیر را وارد نمایید یا از طریق اکانت
                        های گوگل یا لینکدین و یا فیسبوک خود وارد شوید.
                    </div>
                    <div align="right" class="text-field-title">
                     ایمیل یا شماره موبایل<span class="star-color">*</span>
                    </div>
                    <v-text-field
                        variant="outlined"
                        v-model="username"
                        :rules="[usernameValidation]"
                        required>
                        <template v-slot:append-inner>
                            <v-icon
                                color="#a2a2a2"
                                class="text-field-icon">mdi-email-outline
                            </v-icon>
                        </template>
                    </v-text-field>
                    <div align="right" class="text-field-title">
                        کلمه عبور<span class="star-color">*</span>
                    </div>
                    <v-text-field
                        variant="outlined"
                        v-model="password"
                        :rules="[passwordVlidation]"
                        required>
                        <template v-slot:append-inner>
                            <v-icon
                                color="#a2a2a2"
                                class="text-field-icon">mdi-lock-outline
                            </v-icon>
                        </template></v-text-field>
                    <div align="right" class="text-field-title">
                        تکرار کلمه عبور<span class="star-color">*</span>
                    </div>
                    <v-text-field
                        variant="outlined"
                        v-model="passwordConfirm"
                        :rules="[passwordVlidation]"
                        required>
                        <template v-slot:append-inner>
                            <v-icon
                                color="#a2a2a2"
                                class="text-field-icon">mdi-lock-outline
                            </v-icon>
                        </template></v-text-field>
                    <v-checkbox
                        v-model="Checkbox"
                        class="mt-2"
                        color="primary"
                        :rules="[checkboxValidation]">
                        <template v-slot:label>همه ی <v-btn variant="text" color="primary" class="rights-btn" :to="{ name: 'conditions' }">قوانین و شرایط</v-btn>
                            را خوانده وپذیرفته ام.
                        </template>
                    </v-checkbox>
                    <v-btn
                        type="submit"
                        :loading="loading"
                        variant="flat"
                        color="#47bd47"
                        rounded="pill"
                        width="80%"
                        height="45px"
                        class="btn-continue"
                        prepend-icon="mdi-arrow-left-thin">
                        ثبت نام
                    </v-btn>
                    <div>ورود با</div>
                    <v-btn
                        variant="outlined"
                        width="60px"
                        rounded="lg"
                        class="social-media-btn"
                        color="primary"
                        icon="x-larg mdi-facebook">
                    </v-btn>
                    <v-btn
                        variant="outlined"
                        width="60px"
                        rounded="lg"
                        class="social-media-btn"
                        color="primary"
                        icon="mdi-linkedin">
                    </v-btn>
                    <v-btn
                        variant="outlined"
                        width="60px"
                        rounded="lg"
                        class="social-media-btn"
                        color="primary"
                        icon="mdi-google">
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
        <v-snackbar v-model="serverErrorSnackbar" multi-line
        >خطای سرور
            <template v-slot:actions>
                <v-btn color="red" variant="text" @click="serverErrorSnackbar = false">
                    بستن
                </v-btn>
            </template>
        </v-snackbar>
        <v-snackbar v-model="passwordSnackbar" multi-line
        >تکرار رمز عبور مطابقت ندارد 
            <template v-slot:actions>
                <v-btn color="red" variant="text" @click="passwordSnackbar = false">
                    بستن
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {useUserState} from "@/stores/UserState";
import { passwordVlidation, usernameValidation, checkboxValidation } from "@/utilities";

export default defineComponent({
    setup(){
        return{
            store : useUserState(),
            passwordVlidation,
            usernameValidation,
            checkboxValidation
        };
    },
    data() {
        return { 
            valid: false,
            serverErrorSnackbar : false,
            passwordSnackbar : false,
            username: "",
            password: "",
            passwordConfirm: "",
            loading: false,
            Checkbox: false,
        };
    },
    methods: {
        onSubmit() {
            if (this.loading || !this.valid) {
                return;
            }
            if(this.password != this.passwordConfirm){
                this.passwordSnackbar = true;
                return;
            }
            this.loading = true;
            const registerPromis = this.store.register({username:this.username , password:this.password},"mahi@gmai;","mai","you","09100000000");
            registerPromis.catch(()=>{
                this.serverErrorSnackbar = true;
            }).finally(()=>{
                this.loading = false;
            });
        },
    },
});
</script>
<style lang="scss">
.registerForm-container {
  .top-blue-frame {
    height: 120px;
    background: #4f80ff;
  }
  .title {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 20px;
  }
  .form {
    @media (max-width: 600px) {
        padding: 50px 15px;
        margin-right: 10px;
        margin-left: 12px;
    }
    background: white;
    margin-top: -115px;
    margin-bottom: 80px;
    padding: 50px;
    text-align: center;
    .text-field-title {
      color: #646464;
      font-size: 13px;
      margin-top: 17px;
    }
    .star-color {
      color: #dd3f4e;
    }
    .link {
      text-decoration: none;
      margin: 1px 5px 0px 5px;
      color: #4f80ff;
    }
    .v-field {
      margin: 10px 0px 0px 0px;
      --v-field-padding-top: 0px;
      --v-input-padding-top: 0px;
      --v-field-padding-bottom: 0px;
      --v-input-control-height: 40px;
      .text-field-icon{
        border-right: 1px solid #a2a2a2;
        height: 100%;
        width: 30px;
        padding-right: 8px;
      }
    }
    .v-label {
      --v-medium-emphasis-opacity: 1;
      font-size: 13px;
    }
    .rights-btn{
      font-weight: 800;
      padding: 0px 3px;
    }
    .btn-continue {
      font-size: 16px;
      font-weight: 700;
      color: white;
      padding: 6px;
      margin: 40px auto;
    }
  }
  .social-media-btn{
    margin: 20px 10px;
    border:2px solid #ebebeb;
  }
}
</style>