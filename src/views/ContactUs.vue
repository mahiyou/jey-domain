<template>
    <GeneralHeader>
        <template v-slot:title>
            <p>تماس با ما</p>
        </template>
        <template v-slot:content>
            <p>به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.</p>
        </template>
    </GeneralHeader>
    <ContactUsSlider />
    <div style="background: #fafbff">
        <SendMessage />
    </div>
    <ContactUsMap />
</template>

<script lang="ts">
import GeneralHeader from "@/components/GeneralHeader.vue";
import SendMessage from "@/components/contact-us/SendMessage.vue";
import ContactUsSlider from "@/components/contact-us/ContactUsSlider.vue";
import ContactUsMap from "@/components/contact-us/ContactUsMap.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        GeneralHeader,
        SendMessage,
        ContactUsSlider,
        ContactUsMap,
    },
});
</script>