<template >
    <div>
        <HomeSlider />
        <DomainRegistration :backgroundColor="DomainRegistrationBgColor" :selectDomainBackGround="DomainRegistrationSelectDomainBg"/>
        <Prices />
        <SuitableDomain />
        <PanelFeatures />
        <BuyDomain />
        <Questions />
        <NewArticle />
    </div>
</template>

<script lang="ts">
import HomeSlider from "@/components/home/HomeSlider.vue";
import DomainRegistration from "@/components/home/DomainRegistration.vue";
import Prices from "@/components/home/Prices.vue";
import SuitableDomain from "@/components/home/SuitableDomain.vue";
import PanelFeatures from "@/components/home/PanelFeatures.vue";
import BuyDomain from "@/components/home/BuyDomain.vue";
import Questions from "@/components/home/Questions.vue";
import NewArticle from "@/components/home/NewArticle.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        HomeSlider,
        DomainRegistration,
        Prices,
        SuitableDomain,
        PanelFeatures,
        BuyDomain,
        Questions,
        NewArticle,
    },
    data() {
        return {
            DomainRegistrationBgColor: "primary",
            DomainRegistrationSelectDomainBg: "grey-lighten-4"
        };
    },
});
</script>
<style lang="scss">
</style>
