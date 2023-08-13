<template>
    <GeneralHeader>
        <template v-slot:title>
            <p>ورود به پنل کاربری</p>
        </template>
        <template v-slot:content>
            <p>صفحه اصلی > ورود</p>
        </template>
    </GeneralHeader>
    <LogInForm />
</template>
<script lang="ts">
import GeneralHeader from "@/components/GeneralHeader.vue";
import LogInForm from "@/components/log-in/LogInForm.vue";

import { defineComponent } from "vue";

export default defineComponent({
    components: {
        GeneralHeader,
        LogInForm,
    },
});
</script>