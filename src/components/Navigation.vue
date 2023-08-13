<template>
  <div class="nav-container">
    <v-navigation-drawer
      :model-value="modelValue"
      @update:model-value="onUpdate"
      temporary>
      <v-list density="compact" nav class="px-0">
        <v-row>
          <v-col cols="9">        
            <a href="/"><div class="img-logo">
              <v-img :src="JeyDomain"></v-img>
            </div></a>
          </v-col>
          <v-col cols="3" class="mt-2">
            <v-btn variant="text" icon="mdi-close" @click="onUpdate(false)"></v-btn>
          </v-col>
        </v-row>
        <v-list-item
          prepend-icon="mdi-home"
          title="صفحه اصلی"
          value="home"
          :to="{ name: 'home' }">
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-currency-usd"
          title="تعرفه ها"
          value="prices"
          href="#">
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-chat-question-outline"
          title="سوالات متداول"
          value="questions"
          :to="{ name: 'questions' }">
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-account-box-outline"
          title="تماس با ما"
          value="contact-us"
          :to="{ name: 'contact-us' }">
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-face-agent"
          title="پشتیبانی"
          value="support"
          href="#">
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-post-outline"
          title="بلاگ"
          value="blog"
          :to="{ name: 'blog' }"
          class="mb-4">
        </v-list-item>
        <v-divider></v-divider>
        <div v-if="!userState">
          <v-list-item 
            title="ورود" 
            value="log-in" 
            :to="{ name: 'logIn' }" 
            class="mt-4 text-primary"
            prepend-icon="mdi-login-variant">
          </v-list-item>
          <v-list-item
            title="ثبت نام"
            value="register"
            :to="{ name: 'register' }"
            class="text-primary"
            prepend-icon="mdi-account-plus-outline">
          </v-list-item>
        </div>
        <div v-if="userState"
        class="mt-2 mb-4"> 
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title> 
              <v-row>
                <v-col cols="3">  
                  <v-img
                    class="rounded-circle"
                    :src="user.avatar">
                  </v-img>
                  </v-col>
                <v-col cols="9" class="mt-2 px-0"> <span class="">{{ user.name }}</span></v-col>
              </v-row>         
            </v-expansion-panel-title>
            <v-expansion-panel-text class="bg-color">
              <v-list-item 
                title="پنل کاربری" 
                value="user-panel"
                href=""
                prepend-icon="mdi-chevron-left">
              </v-list-item>
              <v-list-item 
                title="مشاهده پروفایل" 
                value="profile"
                href=""
                prepend-icon="mdi-chevron-left">
              </v-list-item>
              <v-list-item 
                title="خروج از حساب" 
                value="log-out"
                href=""
                prepend-icon="mdi-chevron-left">
              </v-list-item>

            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels> 
        </div>
        <v-list-item
          value="cart"
          href="#"
          prepend-icon="mdi-shopping-outline">
          <v-list-item-title>سبد سفارشات        
            <span class="rounded-circle bg-primary circle">{{
              persianNumber(user.cartItems)
            }}</span></v-list-item-title>
        </v-list-item>
        <v-list-item
          title="پشتیبانی آنلاین"
          value="online-support"
          href="#"
          prepend-icon="mdi-bullseye">
        </v-list-item>
        <v-list-item
          title="پشتیبانی تلفنی"
          value="phone-support"
          href="#"
          class="mt-5 bg-color"
          prepend-icon="mdi-headset">
          <span>۰۳۱-۳۴۴۲۰۳۰۱</span>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import DefaultUserImage from "@/assets/pics/user.jpg";
import JeyDomain from "@/assets/pics/JeyDomain.svg";
import {useUserState} from "@/stores/UserState"
import { mapState } from "pinia";  

export default defineComponent({
  emits: ["update:model-value"],
  props: {
    modelValue: {
      type: Boolean,
      require: true,
    },
  },
  data(){
    return{
      JeyDomain:JeyDomain,
      user: {
        id: 1,
        name: "کاربر تست",
        avatar: DefaultUserImage,
        numberOfNotifications: 3,
        cartItems: 7,
      },
    }
  },
  methods: {
    onUpdate(newValue) {
      this.$emit("update:model-value", newValue);
    },
    persianNumber(n) {
      n = n.toString();
      const nlength = n.length;
      const farsiNum = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < nlength; j++) {
          const istring = i.toString();
          n = n.replace(istring, farsiNum[i]);
        }
      }
      return n;
    },
  },
  computed:{
   ...mapState (useUserState,{userState: "userState"})
  }
});
</script>
<style lang="scss">
.nav-container {
  .v-navigation-drawer{
    transition-duration:1s ;
    
  }
  .v-list-item{
    --v-theme-overlay-multiplier: 0;
    padding-right: 13px;
  }
  .v-list-item__prepend > .v-icon {
    margin-inline-end: 15px;
    --v-medium-emphasis-opacity: 0.9;
  }
  .v-list-item--nav .v-list-item-title {
    font-size: 15px;
    line-height: 35px;
  }
  .transition {
    transition: 2s;
  }
  .img-logo {
    width: 150px;
    margin: 20px 15px;
  }
  .v-expansion-panel__shadow {
      box-shadow: none;
      border: 0px;
  }
  .circle {
    margin-right: 5px;
    font-size: 12px;
    padding: 2px 8px;
    color: white !important;
  }
  .bg-color{
    background: #edf2ff;
    margin: 0px;
    padding-top: 5px;
    padding-bottom: 10px;
  }
}
</style>