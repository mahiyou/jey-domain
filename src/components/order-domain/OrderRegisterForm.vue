<template>
    <v-form class="order-register-form" @submit.prevent="onSubmit" v-model="valid">
        <div class="title">فرم ثبت نام</div>
        <div class="dotted-line"></div>
        <v-row class="mt-7">
            <v-col sm="6" cols="12">
                <div>نام<span class="star-color">*</span></div>
                <v-text-field variant="outlined" class="text-field" v-model="name" :rules="[nameValidation]" required />
            </v-col>
            <v-col sm="6" cols="12">
                <div>نام خانوادگی<span class="star-color">*</span></div>
                <v-text-field variant="outlined" class="text-field" v-model="lastName" :rules="[lastNameValidation]"
                    required />
            </v-col>
        </v-row>
        <v-row class="mt-2">
            <v-col sm="6" cols="12">
                <div>شماره همراه<span class="star-color">*</span></div>
                <v-text-field variant="outlined" class="text-field" v-model="phone" :rules="[phoneValidation]" required>
                </v-text-field>

            </v-col>
            <v-col sm="6" cols="12">
                <div>ایمیل<span class="star-color">*</span></div>
                <v-text-field variant="outlined" class="text-field" v-model="email" :rules="[emailValidation]" required />
            </v-col>
        </v-row>
        <v-row class="mt-2">
            <v-col sm="6" cols="12">
                <div>کلمه عبور<span class="star-color">*</span></div>
                <v-text-field variant="outlined" class="text-field" v-model="password" :rules="[passwordVlidation]"
                    required />
            </v-col>
            <v-col sm="6" cols="12">
                <div>تکرار کلمه عبور<span class="star-color">*</span></div>
                <v-text-field variant="outlined" class="text-field" v-model="passwordConfirm" :rules="[passwordVlidation]"
                    required />
            </v-col>
        </v-row>
        <v-checkbox v-model="Checkbox" color="primary" :rules="[checkboxValidation]">
            <template v-slot:label>همه ی
                <v-btn variant="text" color="primary" class="rights-btn" :to="{ name: 'conditions' }">قوانین و شرایط</v-btn>
                را خوانده وپذیرفته ام.
            </template>
        </v-checkbox>

        <div class="text-center">
            <v-btn type="submit" :loading="loading" variant="flat" color="#5cb85c" rounded="pill" width="45%"
                class="btn-confirm">
                <v-icon class="ml-1">mdi-check</v-icon>
                تایید نهایی
            </v-btn>
        </div>
    </v-form>
    <v-snackbar v-model="serverErrorSnackbar" multi-line>خطای سرور هنگام ورود کاربر
        <template v-slot:actions>
            <v-btn color="red" variant="text" @click="serverErrorSnackbar = false">
                بستن
            </v-btn>
        </template>
    </v-snackbar>
    <v-snackbar v-model="passwordSnackbar" multi-line>تکرار رمز عبور مطابقت ندارد
        <template v-slot:actions>
            <v-btn color="red" variant="text" @click="passwordSnackbar = false">
                بستن
            </v-btn>
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
import { nameValidation, lastNameValidation, phoneValidation, emailValidation, passwordVlidation, checkboxValidation } from "@/utilities";

export default defineComponent({
    setup() {
        return {
            userStore: useUserState(),
            cartStore: useCartStore(),
            nameValidation,
            lastNameValidation,
            phoneValidation,
            emailValidation,
            passwordVlidation,
            checkboxValidation
        };
    },
    data() {
        return {
            authType: "newUser",
            valid: false,
            name: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            passwordConfirm: "",
            loading: false,
            Checkbox: false,
            passwordSnackbar: false,
            serverErrorSnackbar: false,
            requestToSnackbar: false,
            logInSnakbar: false,
        };
    },
    methods: {
        onSubmit() {
            if (this.loading || !this.valid) {
                return;
            }
            if (this.password != this.passwordConfirm) {
                this.passwordSnackbar = true;
                return;
            }
            this.loading = true;
            const registerPromis = this.userStore.register(
                { username: this.phone, password: this.password },
                this.email,
                this.name,
                this.lastName,
                this.phone
            );
            registerPromis
                .then(() => {
                    this.logInSnakbar = true;
                    this.sendRequestToServer();
                })
                .catch(() => {
                    this.serverErrorSnackbar = true;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        async sendRequestToServer() {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/order/domain?ajax=1`, {
                    method: "POST",
                    body: JSON.stringify({
                        cart: this.cartStore.items,
                        userCridentionals: {
                            username: this.phone,
                            password: this.password,
                        }
                    }),
                });
            } catch (e) {
                this.requestToSnackbar = true;
            }
        },

    },
});
</script>
<style lang="scss">
.order-register-form {
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

    .rights-btn {
        font-weight: 800;
        padding: 0px 3px;
    }

    .btn-confirm {
        font-size: 16px;
        color: white;
        padding: 5px;
        margin: 20px auto 50px auto;
    }
}
</style>