<template>
    <v-locale-provider rtl>
        <Navbar @clickOnNavBtn="navigation = true"/>
        <div class="general-background">
            <Navigation v-model="navigation" />
            <PanelNavigation/>
            <Dashboard />
        </div>
        <GeneralFooter />
    </v-locale-provider>
</template>
<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import Navigation from "@/components/Navigation.vue";
import PanelNavigation from "@/components/user-panel/PanelNavigation.vue";
import Dashboard from "@/components/user-panel/Dashboard.vue";
import GeneralFooter from "@/components/GeneralFooter.vue";

import { defineComponent } from "vue";

export default defineComponent({
    components: {
        Navbar,
        Navigation,
        PanelNavigation,
        Dashboard,
        GeneralFooter,
    },
    data() {
        return {
            navigation: false,
        };
    },
});
</script>
<style lang="scss">
  .general-background{
    background: #fafbff;
  }
</style>
