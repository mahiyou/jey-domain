<template>
    <v-navigation-drawer :model-value="modelValue" @update:model-value="onUpdate" temporary>
        <v-list density="compact" nav>
            <div class="my-5">
                <router-link :to="{ name: 'home' }">
                    <v-img class="img-logo" src="@/assets/pics/jey-domain-logo.svg" height="30" />
                </router-link>
            </div>
            <v-list-item
                prepend-icon="mdi-home"
                title="صفحه اصلی"
                value="home"
                :to="{ name: 'home' }"/>
            <v-list-item
                prepend-icon="mdi-currency-usd"
                title="تعرفه ها"
                value="prices"
                :to="{ name: 'prices' }" />
            <v-list-item
                prepend-icon="mdi-chat-question-outline"
                title="سوالات متداول"
                value="questions"
                :to="{ name: 'questions' }" />
            <v-list-item
                prepend-icon="mdi-account-box-outline"
                title="تماس با ما"
                value="contact-us"
                :to="{ name: 'contact-us' }" />
            <v-list-item
                prepend-icon="mdi-face-agent"
                title="پشتیبانی"
                value="support"
                href="#" />
            <v-list-item
                prepend-icon="mdi-post-outline"
                title="بلاگ"
                value="blog"
                :to="{ name: 'blog' }" />

            <v-divider class="my-3"/>

            <div v-if="!userStore.userState">
                <v-list-item 
                    title="ورود" 
                    value="log-in" 
                    :to="{ name: 'logIn' }"
                    prepend-icon="mdi-login-variant">
                </v-list-item>
                <v-list-item
                    title="ثبت نام"
                    value="register"
                    :to="{ name: 'register' }"
                    prepend-icon="mdi-account-plus-outline">
                </v-list-item>
            </div>
            <div v-if="userStore.userState" class="mt-2 mb-4"> 
                <v-expansion-panels>
                    <v-expansion-panel elevation="0">
                        <v-expansion-panel-title> 
                            <v-row>
                                <v-col cols="3">  
                                    <v-img class="rounded-circle" :src="userStore.user.avatar" />
                                </v-col>
                                <v-col cols="9" class="mt-2 px-0"> <span class="">{{ userStore.user.name }}</span></v-col>
                            </v-row>         
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="bg-color">
                            <v-list-item 
                                title="پنل کاربری" 
                                value="user-panel"
                                :to="{name: 'dashboard'}"
                                prepend-icon="mdi-chevron-left" />
                            <v-list-item 
                                title="مشاهده پروفایل" 
                                value="profile"
                                href=""
                                prepend-icon="mdi-chevron-left" />
                            <v-list-item 
                                title="خروج از حساب" 
                                value="log-out"
                                href=""
                                prepend-icon="mdi-chevron-left" />
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels> 
            </div>
            <v-list-item
                value="cart"
                :to="{name: 'order-domain', params: {step: 'cartReview'}}"
                title="سبد خرید"
                prepend-icon="mdi-shopping-outline">
                <template v-slot:append>
                    <v-badge color="primary" :content="persianNumber(cartStore.items.length)" inline />
                </template>
            </v-list-item>
            <v-list-item
                title="پشتیبانی آنلاین"
                value="online-support"
                href="#"
                prepend-icon="mdi-bullseye" />
            <v-list-item
                title="پشتیبانی تلفنی"
                value="phone-support"
                href="tel:03134420301"
                class="mt-5 bg-color"
                prepend-icon="mdi-headset">
                ۰۳۱-۳۴۴۲۰۳۰۱
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {useUserState} from "@/stores/UserState";
import { persianNumber } from "@/utilities";
import { useCartStore } from "@/stores/Cart";


export default defineComponent({
    emits: ["update:modelValue"],
    props: {
        modelValue: {
            type: Boolean,
            require: true,
        },
    },
    setup(){
        return{
            persianNumber,
            cartStore: useCartStore(),
            userStore: useUserState(),
        }
    },
    methods: {
        onUpdate(newValue: boolean) {
            this.$emit("update:modelValue", newValue);
        },
    },
});
</script>
