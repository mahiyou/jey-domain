<template>
  <v-locale-provider rtl>
    <Navbar @clickOnNavBtn="navigation = true" />
    <Navigation v-model="navigation" />
    <GeneralHeader>
      <template v-slot:title>
        <p>تماس با ما</p>
      </template>
      <template v-slot:content>
        <p>به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.</p>
      </template>
    </GeneralHeader>
    <ContactUsSlider />
    <div style="background: #fafbff">
      <SendMessage />
    </div>
    <ContactUsMap />
    <GeneralFooter />
  </v-locale-provider>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import GeneralHeader from "@/components/GeneralHeader.vue";
import SendMessage from "@/components/contact-us/SendMessage.vue";
import ContactUsSlider from "@/components/contact-us/ContactUsSlider.vue";
import Navigation from "@/components/Navigation.vue";
import ContactUsMap from "@/components/contact-us/ContactUsMap.vue"
import GeneralFooter from "@/components/GeneralFooter.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Navbar,
    GeneralHeader,
    SendMessage,
    ContactUsSlider,
    Navigation,
    GeneralFooter,
    ContactUsMap,
  },
  data() {
    return {
      navigation: false,
    };
  },
});
</script>