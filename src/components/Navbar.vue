<template>
  <v-container class="navbar-container" id="nav-container">
    <v-toolbar density="compact" color="white">
      <div class="mt-5">
        <v-icon size="small" color="#faa930">mdi-bullseye</v-icon>
        <v-btn class="nav-btn" :to="{ name: '' }">پشتیبانی آنلاین</v-btn>
        <v-icon size="small" class="mr-2" color="primary">mdi-headset</v-icon>
        <v-btn class="nav-btn" :to="{ name: '' }">۰۳۱-۳۴۴۲۰۳۰۱</v-btn>
      </div>
      <v-form class="search-form">
        <v-text-field
          placeholder="جستجو"
          variant="plain"
          bg-color="#f3f3f9"
          color="#a6a9ba"
          class="search"
          rounded="pill"
          density="compact">
          <template v-slot:prepend-inner>
            <v-btn type="submit" variant="text" rounded="pill">
              <v-icon color="#a6a9ba">mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-form>
      <v-spacer></v-spacer>
      <div class="mt-5">
        <v-btn>
          <v-icon size="large" color="#495057">mdi-shopping-outline</v-icon>
          <span class="rounded-circle text-white bg-primary circle">{{
            persianNumber(user.numberOfBasletItems)
          }}</span>
        </v-btn>
        <v-btn>
          <v-icon size="large" color="#495057">mdi-bell-outline</v-icon>
          <span class="rounded-circle text-white bg-customYellow circle">{{
            persianNumber(user.numberOfNotifications)
          }}</span>
        </v-btn>
        <v-btn class="nav-btn mr-2">
          <v-img
            class="rounded-circle"
            :src="user.avatar"
            width="27px"
            height="27px"></v-img>
          <span class="mr-2">{{ user.name }}</span>
          <v-icon class="mr-2">mdi-chevron-down</v-icon>
        </v-btn>
      </div>
    </v-toolbar>
    <v-toolbar class="mt-6" color="white">
      <div class="logo-size">
        <v-img
          :src="JeyDomain"
          class="mt-4 mt-sm-2"></v-img>
      </div>
      <v-spacer></v-spacer>
      <v-btn class="toolbar-btn nav-btn-md" :to="{ name: 'home' }"> صفحه ی اصلی </v-btn>
      <v-btn class="toolbar-btn nav-btn-md" href="#"> تعرفه ها </v-btn>
      <v-btn class="toolbar-btn nav-btn-md" href="#"> سوالات متداول </v-btn>
      <v-btn class="toolbar-btn nav-btn-md" :to="{ name: 'contact-us' }">
        تماس با ما
      </v-btn>
      <v-btn class="toolbar-btn nav-btn-md" href="#"> بلاگ </v-btn>
      <v-btn class="toolbar-btn nav-btn-md" href="#"> ورود </v-btn>
      <v-btn class="toolbar-btn nav-btn-md" :to="{ name: 'register' }"> ثبت نام </v-btn>
      <v-app-bar-nav-icon class="nav-icon-xs-sm" @click="$emit('clickOnNavBtn')"> </v-app-bar-nav-icon>
    </v-toolbar>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultUserImage from "@/assets/pics/user.jpg";
import JeyDomain from "@/assets/pics/JeyDomain.svg";
export default defineComponent({
  emits: ["clickOnNavBtn"],
  data() {
    return {
      JeyDomain:JeyDomain,
      user: {
        id: 1,
        name: "کاربر تست",
        avatar: DefaultUserImage,
        numberOfNotifications: 3,
        numberOfBasletItems: 7,
      },
    };
  },
  methods: {
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
});
</script>

<style lang="scss">
#nav-container{
  padding-bottom: 4px;
  padding-top: 7px;
}
.navbar-container {
  .nav-btn {
    letter-spacing: 0;
    --v-theme-overlay-multiplier: 0;
    color: #31486c;
    font-size: 12.5px;
    margin-right: -10px;
    --v-theme-overlay-multiplier: 0;
  }
  .circle {
    width: 20px;
    height: 20px;
    font-size: 10px;
    padding: 3px 2px 2px 4px;
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
  .toolbar-btn {
    letter-spacing: 0;
    font-size: 14px;
    margin: auto 15px;
    font-weight: 500;
    --v-theme-overlay-multiplier: 0;
  }
  .nav-btn-md {
    display: block;
  }
  .nav-icon-xs-sm {
    display: none;
  }
  @media (max-width: 960px) {
    .nav-btn-md {
      display: none;
    }
    .nav-icon-xs-sm {
      display: block;
    }
  }
}
</style>