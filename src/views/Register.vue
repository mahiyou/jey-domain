<template>
    <v-locale-provider rtl>
        <Navbar @clickOnNavBtn="navigation = true" />
        <Navigation v-model="navigation" />
        <GeneralHeader>
        <template v-slot:title>
            <p>ثبت نام</p>
        </template>
        <template v-slot:content>
            <p>صفحه اصلی > ثبت نام</p>
        </template>
        </GeneralHeader>
        <RegisterForm />
        <GeneralFooter />
    </v-locale-provider>
</template>
<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import GeneralHeader from "@/components/GeneralHeader.vue";
import Navigation from "@/components/Navigation.vue";
import GeneralFooter from "@/components/GeneralFooter.vue";
import RegisterForm from "@/components/register/RegisterForm.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Navbar,
    GeneralHeader,
    RegisterForm,
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