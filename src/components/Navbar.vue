<template>
  <v-container class="toolbar-container">
    <v-toolbar density="compact" color="white">
      <v-toolbar-title>
        <router-link :to="{ name: 'home' }">
          <v-img src="@/assets/pics/JeyDomain.svg" max-width="150" />
        </router-link>
      </v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn :to="{ name: 'prices' }"> تعرفه ها </v-btn>
        <v-btn :to="{ name: 'questions' }"> سوالات متداول </v-btn>
        <v-btn :to="{ name: 'contact-us' }">تماس با ما</v-btn>
        <v-btn :to="{ name: 'blog' }">بلاگ</v-btn>
      </v-toolbar-items>
      <v-spacer />

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="toolbar-btn" :to="{ name: 'logIn' }"> ورود </v-btn>
        <v-btn class="toolbar-btn" color="primary" rounded="xl" variant="flat" :to="{ name: 'register' }">
          ثبت نام
        </v-btn>
      </v-toolbar-items>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="$emit('clickOnNavBtn')"> </v-app-bar-nav-icon>
    </v-toolbar>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["clickOnNavBtn"],
});
</script>
