<template>
    <v-container class="navbar-container" id="nav-container">
        <v-toolbar class="hidden-sm-and-down  mb-6" color="white">
            <div class="mt-5">
                <v-icon size="small" color="#faa930">mdi-bullseye</v-icon>
                <v-btn color="secondary" class="nav-btn" :to="{ name: '' }">پشتیبانی آنلاین</v-btn>
                <v-icon size="small" class="mr-2" color="primary">mdi-headset</v-icon>
                <v-btn color="secondary" class="nav-btn" :to="{ name: '' }">۰۳۱-۳۴۴۲۰۳۰۱</v-btn>
            </div>
            <v-form class="search-form">
                <v-text-field placeholder="جستجو" variant="plain" bg-color="#f3f3f9" color="#a6a9ba" class="search" rounded="pill"
                              density="compact">
                    <template v-slot:prepend-inner>
                        <v-btn color="secondary" type="submit" variant="text" rounded="pill">
                            <v-icon color="#a6a9ba">mdi-magnify</v-icon>
                        </v-btn>
                    </template>
                </v-text-field>
            </v-form>
            <v-spacer></v-spacer>
            <div v-if="userState" class="mt-5">
                <v-btn color="secondary" class="overlay-btn" :to="{ path:'/order/domain/cartReview' }">
                    <v-icon size="large" color="#495057">mdi-shopping-outline</v-icon>
                    <span class="rounded-circle text-white bg-primary circle">{{
                        persianNumber(cartStore.items.length)
                    }}</span>
                </v-btn>
                <v-btn color="secondary" class="overlay-btn">
                    <v-icon size="large" color="#495057">mdi-bell-outline</v-icon>
                    <span class="rounded-circle text-white bg-customYellow circle">{{
                        persianNumber(numberOfNotifications)
                    }}</span>
                </v-btn>
                <v-menu offset-y class="nav-dropdown-menu">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" color="secondary" class="nav-btn mr-2">
                            <v-img class="rounded-circle" :src="user.avatar" width="27px" height="27px"></v-img>
                            <span class="mr-2">{{ userStore.user.name}}</span>
                            <v-icon class="mr-2">mdi-chevron-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, index) in items" :key="index" :href="item.href">
                            <v-list-item-title id="menu-item"><v-icon class="ml-2">mdi-chevron-left</v-icon>{{ item.title
                            }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
            <div v-if="!userState" class="mt-5">
                <v-btn color="secondary" class="overlay-btn" :to="{ path:'/order/domain/cartReview' }">
                    <v-icon size="large" color="#495057">mdi-shopping-outline</v-icon>
                    <span class="rounded-circle text-white bg-primary circle">{{
                        persianNumber(cartStore.items.length)
                    }}</span>
                </v-btn>
                <v-btn color="secondary" class="login-register-btn" :to="{ name: 'logIn' }"> ورود </v-btn>
                <v-btn density="comfortable" variant="flat" rounded="pill" color="primary" class="login-register-btn ml-8"
                       :to="{ name: 'register' }"> ثبت نام </v-btn>
            </div>
        </v-toolbar>
        <v-toolbar color="white">
            <a href="/">
                <div class="logo-size">
                    <v-img :src="JeyDomain"></v-img>
                </div>
            </a>
            <v-spacer></v-spacer>
            <v-btn color="secondary" class="toolbar-btn hidden-sm-and-down" :to="{ name: 'home' }"> صفحه اصلی </v-btn>
            <v-btn color="secondary" class="toolbar-btn hidden-sm-and-down" :to="{ name: 'prices' }"> تعرفه ها </v-btn>
            <v-btn color="secondary" class="toolbar-btn hidden-sm-and-down" :to="{ name: 'questions' }"> سوالات متداول </v-btn>
            <v-btn color="secondary" class="toolbar-btn hidden-sm-and-down" :to="{ name: 'contact-us' }">
                تماس با ما
            </v-btn>
            <v-btn color="secondary" class="toolbar-btn hidden-sm-and-down" :to="{ name: 'blog' }"> بلاگ </v-btn>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="$emit('clickOnNavBtn')"> </v-app-bar-nav-icon>
        </v-toolbar>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultUserImage from "@/assets/pics/user.jpg";
import JeyDomain from "@/assets/pics/JeyDomain.svg";
import { useUserState } from "@/stores/UserState";
import { mapState } from "pinia";
import { persianNumber } from "@/utilities";
import { useCartStore } from "@/stores/Cart";

export default defineComponent({
    emits: ["clickOnNavBtn"],
    setup(){
        return{
            persianNumber,
            cartStore: useCartStore(),
            userStore: useUserState()
        }
    },
    data() {
        return {
            JeyDomain: JeyDomain,
            items: [
                { title: 'پنل کاربری', href: '/user-panel/dashboard' },
                { title: 'مشاهده پروفایل', href: '' },
                { title: 'خروج از حساب', href: '' },
            ],
            user: {
                avatar: DefaultUserImage,
            },
            numberOfNotifications: 3,
        };
    },
    computed: {
        ...mapState(useUserState, { userState: "userState" })
    },
});
</script>

<style lang="scss">
#nav-container {
  padding-bottom: 0px;
  padding-top: 0px;
}
.nav-dropdown-menu {
  .v-list-item-title {
    font-size: 12px;
  }
}
.navbar-container { 
  .nav-btn {
    --v-theme-overlay-multiplier: 0;
    font-size: 12.5px;
    margin-right: -10px;
    --v-theme-overlay-multiplier: 0;
  }
  .circle {
    width: 20px;
    height: 20px;
    padding: 1.5px;
    font-size: 10px;
    text-align: center;
    color: white !important;
    margin: -33px -10px 0px 0px;
  }
  .search-form {
    width: 200px;
    height: 30px;
    padding: 5px;
    margin: 10px 30px;
    .v-fiels {
      height: 10px;
    }
    .v-field--variant-plain.v-field {
      --v-field-padding-top: 0px;
      --v-field-input-padding-top: 0px;
      font-size: 12px;
    }
    .v-input--density-compact {
      --v-input-padding-top: 8px;
      --v-field-padding-top: 0px;
    }
    .v-field.v-field--variant-plain {
      .v-field__prepend-inner {
        padding-top: 0px;
      }
    }
  }
  .logo-size {
    width: 170px;
  }
  .login-register-btn {
    font-size: 13px;
    font-weight: 300;
    --v-theme-overlay-multiplier: 0;
  }
  .toolbar-btn {
    font-size: 13px;
    margin: auto 15px;
    font-weight: 600;
    --v-theme-overlay-multiplier: 0;
  }
  .overlay-btn{
    --v-theme-overlay-multiplier: 0;
  }
}
</style>