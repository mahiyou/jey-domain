<template>
    <PanelNavigation/>
    <router-view />
</template>
<script lang="ts">
import PanelNavigation from "@/components/user-panel/PanelNavigation.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        PanelNavigation,
    },
});
</script>