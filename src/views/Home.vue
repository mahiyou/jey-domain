<template >
  <v-locale-provider rtl>
    <Toolbar @clickOnNavBtn="navigation = true;"/>
    <Navigation v-model="navigation"/>
    <div style="background: #fafbff" FIXME>
      <HomeSlider />
      <DomainRegistration />
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

<script FIXME>
import Toolbar from "@/components/Navbar.vue";
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


import { defineComponent } from "vue"

export default defineComponent({
  components:{
    Toolbar,
    HomeSlider,
    DomainRegistration,
    Prices,
    SuitableDomain,
    PanelFeatures,
    BuyDomain,
    Questions,
    NewArticle,
    GeneralFooter,
    Navigation
  },
  data(){
    return{
      navigation : false
    }
  }
})

</script>
