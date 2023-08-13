<template>
  <v-locale-provider rtl>
    <Toolbar @clickOnNavBtn="navigation = true" />
    <Navigation v-model="navigation" />
    <GeneralHeader>
      <template v-slot:title>
        <p>تماس با ما</p>
      </template>
      <template v-slot:content>
        <p>به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.</p>
      </template>
    </GeneralHeader>
    <div style="background: #fafbff">
      <SendMessage />
    </div>
    <GeneralFooter />
  </v-locale-provider>
</template>

<script lang="ts">
import Toolbar from "@/components/Navbar.vue";
import GeneralHeader from "@/components/GeneralHeader.vue";
import SendMessage from "@/components/contact-us/SendMessage.vue";
import Navigation from "@/components/Navigation.vue";
import GeneralFooter from "@/components/GeneralFooter.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Toolbar,
    GeneralHeader,
    SendMessage,
    Navigation,
    GeneralFooter,
  },
  data() {
    return {
      navigation: false,
    };
  },
});
</script>