<template>
    <v-form class="order-login-form" @submit.prevent="onSubmit" v-model="valid">
        <div class="title">ورود به پنل</div>
        <div class="dotted-line"></div>
        <v-row class="mt-7">
            <v-col sm="6" cols="12">
                <div>شماره موبایل یا ایمیل<span class="star-color">*</span></div>
                <v-text-field variant="outlined" class="text-field" v-model="username" :rules="usernameRules" required />
            </v-col>
            <v-col sm="6" cols="12">
                <div>رمز عبور<span class="star-color">*</span></div>
                <v-text-field variant="outlined" class="text-field" v-model="password" :rules="passwordRules" required />
            </v-col>
        </v-row>
        <div align="right" class="mt-4">
            <a href="#" class="link">رمز خود را فراموش کرده اید؟</a>
        </div>
        <div class="text-center">
            <v-btn type="submit" :loading="loading" variant="flat" color="#5cb85c" rounded="pill" width="45%"
                class="btn-confirm">
                <v-icon class="ml-1">mdi-check</v-icon>
                تایید نهایی
            </v-btn>
        </div>
    </v-form>
    <v-snackbar v-model="snackbar" multi-line>خطای سرور هنگام ورود کاربر
        <template v-slot:actions>
            <v-btn color="red" variant="text" @click="snackbar = false"> بستن </v-btn>
        </template>
    </v-snackbar>
    <v-snackbar v-model="requestToSnackbar" multi-line>اطلاعات سبد خرید شما به سرور ارسال نشد.
        <template v-slot:actions>
            <v-btn color="red" variant="text" @click="requestToSnackbar = false"> بستن </v-btn>
        </template>
    </v-snackbar>
    <v-snackbar v-model="logInSnakbar" multi-line>با موفقیت وارد شدید.
        <template v-slot:actions>
            <v-btn color="green" variant="text" @click="logInSnakbar = false"> بستن </v-btn>
        </template>
    </v-snackbar>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useUserState } from "@/stores/UserState";
import { useCartStore } from "@/stores/Cart";

export default defineComponent({
    setup() {
        return {
            userStore: useUserState(),
            cartStore: useCartStore()
        };
    },
    data() {
        return {
            valid: false,
            username: "",
            password: "",
            snackbar: false,
            requestToSnackbar: false,
            logInSnakbar: false,
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
            const loginPromis = this.userStore.login({
                username: this.username,
                password: this.password,
            });
            loginPromis
                .then(() => {
                    this.logInSnakbar = true;
                    this.sendRequestToServer();
                })
                .catch(() => {
                    this.snackbar = true;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        async sendRequestToServer(){
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/order/domain?ajax=1`, {
                    method: "POST",
                    body: JSON.stringify({
                        cart: this.cartStore.items,
                        userCridentionals: {
                            username: this.username,
                            password: this.password,
                        }
                    }),
                });
            } catch (e) {
                this.requestToSnackbar = true;
            }
        }
    },
});
</script>
<style lang="scss">
.order-login-form {
    .title {
        font-weight: 900;
    }

    .dotted-line {
        height: 2px;
        width: 100%;
        margin-top: -10px;
        margin-right: 80px;
        border-top: 1px dashed #aeaeae;
    }

    .star-color {
        color: #fab348;
    }

    .v-field {
        border-color: #e1e1e1;
        margin: 10px 0px 0px 0px;
        --v-field-padding-top: 0px;
        --v-input-padding-top: 0px;
        --v-field-padding-bottom: 0px;
        --v-input-control-height: 40px;
    }

    .link {
        text-decoration: none;
        margin: 1px 5px 0px 5px;
        color: #4f80ff;
    }

    .btn-confirm {
        font-size: 16px;
        color: white;
        padding: 5px;
        margin: 50px auto;
    }
}
</style>
