<template>
    <GeneralHeader>
        <template v-slot:title>
            <p>ثبت نام</p>
        </template>
        <template v-slot:content>
            <p>صفحه اصلی > ثبت نام</p>
        </template>
    </GeneralHeader>
    <RegisterForm />
</template>
<script lang="ts">
import GeneralHeader from "@/components/GeneralHeader.vue";
import RegisterForm from "@/components/register/RegisterForm.vue";

import { defineComponent } from "vue";

export default defineComponent({
    components: {
        GeneralHeader,
        RegisterForm,
    },
});
</script>