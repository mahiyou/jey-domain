<template>
    <Navbar @clickOnNavBtn="navigation = true" />
    <Navigation v-model="navigation" />
    <v-main>
        <router-view/>
    </v-main>
    <GeneralFooter />
</template>


<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import Navigation from "@/components/Navigation.vue";
import GeneralFooter from "@/components/GeneralFooter.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        Navbar,
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
  