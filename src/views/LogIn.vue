<template>
    <v-locale-provider rtl>
        <Navbar @clickOnNavBtn="navigation = true" />
        <Navigation v-model="navigation" />
        <GeneralHeader>
        <template v-slot:title>
            <p>ورود به پنل کاربری</p>
        </template>
        <template v-slot:content>
            <p>صفحه اصلی > ورود</p>
        </template>
        </GeneralHeader>
        <LogInForm />
        <GeneralFooter />
    </v-locale-provider>
</template>
<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import GeneralHeader from "@/components/GeneralHeader.vue";
import Navigation from "@/components/Navigation.vue";
import GeneralFooter from "@/components/GeneralFooter.vue";
import LogInForm from "@/components/log-in/LogInForm.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Navbar,
    GeneralHeader,
    LogInForm,
    Navigation,
    GeneralFooter,
  },
  data() {
    return {
      navigation: false,
    };
  },
})
</script>