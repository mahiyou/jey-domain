<template>
    <div class="logInForm-container">
        <div class="top-blue-frame"></div>
        <v-row>
            <v-col md="6" offset-md="3" sm="10" offset-sm="1" xs="12">
                <v-form
                    @submit.prevent="onSubmit"
                    v-model="valid"
                    class="form elevation-15 rounded-xl">
                    <div class="title">ورود به پنل کاربری</div>
                    <div>
                        برای ورود به پنل کاربری،اطلاعات مورد نیاز زیر را وارد نمایید یا از
                        طریق اکانت های گوگل یا لینکدین و یا فیسبوک خود وارد شوید.
                    </div>
                    <div align="right" class="text-field-title">
                        شماره موبایل یا ایمیل<span class="star-color">*</span>
                    </div>
                    <v-text-field
                        variant="outlined"
                        v-model="username"
                        :rules="usernameRules"
                        required>
                        <template v-slot:append-inner>
                            <v-icon color="#a2a2a2" class="text-field-icon">mdi-email-outline</v-icon>
                        </template>
                    </v-text-field>
                    <div align="right" class="text-field-title">
                        کلمه عبور<span class="star-color">*</span>
                    </div>
                    <v-text-field
                        variant="outlined"
                        v-model="password"
                        :rules="passwordRules"
                        required>
                        <template v-slot:append-inner>
                            <v-icon color="#a2a2a2" class="text-field-icon">mdi-lock-outline</v-icon>
                        </template>
                    </v-text-field>
                    <div align="right" class="mt-4">
                        <a href="#" class="link">رمز خود را فراموش کرده اید؟</a>
                    </div>
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
                        ورود به حساب
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
                    <div>
                        هنوز حساب کاربری ندارید؟<a class="mr-2 link" href="/register">ثبت نام کنید</a>
                    </div>
                </v-form>
            </v-col>
        </v-row>
        <v-snackbar v-model="snackbar" multi-line
        >خطای سرور
            <template v-slot:actions>
                <v-btn color="red" variant="text" @click="snackbar = false">
                    بستن
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {useUserState} from "@/stores/UserState";

export default defineComponent({
    setup(){
        return{
            store : useUserState()
        };
    },
    data() {
        return {
            valid: false,
            username: "",
            password: "",
            snackbar: false,
            loading: false,
            usernameRules: [
                (value) => {
                    if (value) return true;
                    return "وارد کردن ایمیل و یا شماره تلفن الزامی است.";
                },
            ],
            passwordRules: [
                (value) => {
                    if (value) return true;
                    return "وارد کردن رمز عبور الزامی است.";
                },
                (value) => {
                    if (value?.length >= 10) return true;
                    return "رمز عبور شما باید بیشتر از 10 کاراکتر باشد.";
                },
            ],
        };
    },
    methods: {
        async onSubmit() {
            if (this.loading || !this.valid) {
                return;
            }
            this.loading = true; 
            const loginPromis = this.store.login({username:this.username , password:this.password});
            loginPromis.catch(()=>{
                this.snackbar = true;
            }).finally(()=>{
                this.loading = false;
            });
        },
    },
});
</script>
<style lang="scss">
.logInForm-container {
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
    .v-field {
      margin: 10px 0px 0px 0px;
      --v-field-padding-top: 0px;
      --v-input-padding-top: 0px;
      --v-field-padding-bottom: 0px;
      --v-input-control-height: 40px;
      .text-field-icon {
        border-right: 1px solid #a2a2a2;
        height: 100%;
        width: 30px;
        padding-right: 8px;
      }
    }
    .link {
      text-decoration: none;
      margin: 1px 5px 0px 5px;
      color: #4f80ff;
      font-weight: 600;
    }
    .btn-continue {
      font-family: IRANSans;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0;
      color: white;
      padding: 6px;
      margin: 40px auto;
    }
  }
  .social-media-btn {
    margin: 20px 10px 40px 10px;
    border: 2px solid #ebebeb;
  }
}
</style>