<template >
    <v-locale-provider rtl>
        <Navbar @clickOnNavBtn="navigation = true" />
        <Navigation v-model="navigation" />
        <div class="general-background">
            <HomeSlider />
            <DomainRegistration :backgroundColor="DomainRegistrationBgColor" :selectDomainBackGround="DomainRegistrationSelectDomainBg"/>
            <Prices />
            <SuitableDomain />
            <PanelFeatures />
            <BuyDomain />
            <Questions />
            <NewArticle />
        </div>
        <GeneralFooter />
    </v-locale-provider>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import HomeSlider from "@/components/home/HomeSlider.vue";
import DomainRegistration from "@/components/home/DomainRegistration.vue";
import Prices from "@/components/home/Prices.vue";
import SuitableDomain from "@/components/home/SuitableDomain.vue";
import PanelFeatures from "@/components/home/PanelFeatures.vue";
import BuyDomain from "@/components/home/BuyDomain.vue";
import Questions from "@/components/home/Questions.vue";
import NewArticle from "@/components/home/NewArticle.vue";
import GeneralFooter from "@/components/GeneralFooter.vue";
import Navigation from "@/components/Navigation.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        Navbar,
        HomeSlider,
        DomainRegistration,
        Prices,
        SuitableDomain,
        PanelFeatures,
        BuyDomain,
        Questions,
        NewArticle,
        GeneralFooter,
        Navigation,
    },
    data() {
        return {
            navigation: false,
            DomainRegistrationBgColor: "primary",
            DomainRegistrationSelectDomainBg: "grey-lighten-4"
        };
    },
});
</script>
<style lang="scss">
  .general-background{
    background: #fafbff;
  }
</style>
