<template >
    <HomeSlider />
    <DomainRegistration color="primary" :tlds="tlds" :offers="tlds" v-model="domain" />
    <CustomerSlabs :slabs="slabs" />
    <SuitableDomain />
    <PanelFeatures />
    <BuyDomain />
    <FaqList :items="faq" />
    <NewArticle />
</template>

<script lang="ts">
import HomeSlider from "@/components/home/HomeSlider.vue";
import DomainRegistration from "@/components/home/DomainRegistration.vue";
import CustomerSlabs from "@/components/CustomerSlabs/index.vue";
import SuitableDomain from "@/components/home/SuitableDomain.vue";
import PanelFeatures from "@/components/home/PanelFeatures.vue";
import BuyDomain from "@/components/home/BuyDomain.vue";
import FaqList from "@/components/home/FaqList.vue";
import NewArticle from "@/components/home/NewArticle.vue";
import { defineComponent } from "vue";
import { IFAQ, ISlabs, ITLD } from "@/mocks/API";

export default defineComponent({
    components: {
        HomeSlider,
        DomainRegistration,
        CustomerSlabs,
        SuitableDomain,
        PanelFeatures,
        BuyDomain,
        FaqList,
        NewArticle,
    },
    data() {
        const data = {
            domain: "",
            tlds: [] as ITLD[],
            slabs: [
                {
                    slug: "bronze",
                    tlds: [
                        {
                            suffix: "ir",
                            costs: {
                                register: 5560000,
                                renew: 5560000,
                                transfer: 5560000,
                            }
                        },
                        {
                            suffix: "co.ir",
                            costs: {
                                register: 5560000,
                                renew: 5560000,
                                transfer: 5560000,
                            }
                        },
                        {
                            suffix: "com",
                            costs: {
                                register: 5560000,
                                renew: 5560000,
                                transfer: 5560000,
                            }
                        },
                        {
                            suffix: "net",
                            costs: {
                                register: 5560000,
                                renew: 5560000,
                                transfer: 5560000,
                            }
                        },
                        {
                            suffix: "org",
                            costs: {
                                register: 5560000,
                                renew: 5560000,
                                transfer: 5560000,
                            }
                        },
                    ]
                },
                {
                    slug: "silver",
                    tlds: [
                        {
                            suffix: "com",
                            costs: {
                                register: 5060000,
                                renew: 5060000,
                                transfer: 5060000,
                            }
                        },
                        {
                            suffix: "net",
                            costs: {
                                register: 5060000,
                                renew: 5060000,
                                transfer: 5060000,
                            }
                        },
                        {
                            suffix: "org",
                            costs: {
                                register: 5060000,
                                renew: 5060000,
                                transfer: 5060000,
                            }
                        },
                    ]
                },
                {
                    slug: "golden",
                    tlds: [
                        {
                            suffix: "com",
                            costs: {
                                register: 4060000,
                                renew: 4060000,
                                transfer: 4060000,
                            }
                        },
                        {
                            suffix: "net",
                            costs: {
                                register: 4060000,
                                renew: 4060000,
                                transfer: 4060000,
                            }
                        },
                        {
                            suffix: "org",
                            costs: {
                                register: 4060000,
                                renew: 4060000,
                                transfer: 4060000,
                            }
                        },
                    ]
                }
            ] as ISlabs,
            faq: [
                {
                    question: "سوالی دارم",
                    answer: "بپرس"
                },
                {
                    question: "پاسخ محاسبه 5+6*5 چقدر می‌شود؟",
                    answer: "کاری نداره که 55"
                }
            ] as Array<IFAQ>
        };
        data.tlds = data.slabs[0].tlds;
        return data;
    },
});
</script>
<style lang="scss">
</style>
