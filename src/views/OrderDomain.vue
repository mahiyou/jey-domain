<template>
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
</template>
<script lang="ts">
import GeneralHeader from "@/components/GeneralHeader.vue";
import OrderNavigation from "@/components/order-domain/OrderNavigation.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        GeneralHeader,
        OrderNavigation,
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
            step: 'checkDomain',
        };
    },
    mounted(){
        if(this.$route.params.step == 'order'){
            this.step= 'checkDomain'
        }else if(this.$route.params.step == 'cartReview'){
            this.step= 'confirmDomain'
        }
    }
});
</script>