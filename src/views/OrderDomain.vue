<template>
    <v-locale-provider rtl>
        <Navbar @clickOnNavBtn="navigation = true" />
        <Navigation v-model="navigation" />
        <GeneralHeader>
            <template v-slot:title>
                <p>{{ texts[step].title }}</p>
            </template>
            <template v-slot:content>
                <p>{{ texts[step].subtitle }}</p>
            </template>
        </GeneralHeader>
        <div style="background: #fafbff">
            <OrderNavigation v-model="step" />
        </div>
        <GeneralFooter />
    </v-locale-provider>
</template>
<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import GeneralHeader from "@/components/GeneralHeader.vue";
import OrderNavigation from "@/components/order-domain/OrderNavigation.vue";
import Navigation from "@/components/Navigation.vue";
import GeneralFooter from "@/components/GeneralFooter.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        Navbar,
        GeneralHeader,
        OrderNavigation,
        Navigation,
        GeneralFooter,
    },
    setup() {
        return {
            texts: {
                checkDomain: {
                    title: "بررسی دامنه",
                    subtitle:
                        "به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.",
                },
                configuration: {
                    title: "پیکربندی دامنه",
                    subtitle:
                        "به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.",
                },
                confirmDomain: {
                    title: "تایید دامنه",
                    subtitle:
                        "به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.",
                },
                completeOrder: {
                    title: "تکمیل سفارش",
                    subtitle:
                        "به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.",
                },
            },
        };
    },
    data() {
        return {
            navigation: false,
            step: "checkDomain",
        };
    },
});
</script>