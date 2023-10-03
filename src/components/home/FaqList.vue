<template>
    <v-container class="faq-container">
        <SectionTitle
            title="سوالات متداول"
            content="پاسخ سوالات شما پیرامون خدمات ثبت دامنه جین دامین"/>
        <v-expansion-panels class="mt-10" multiple>
            <v-expansion-panel
                v-for="(item, i) in items"
                :key="i"
                elevation="0"
                class="mb-4">
                <v-expansion-panel-title collapse-icon="mdi-menu-down" v-text="item.question" />
                <v-expansion-panel-text v-text="item.answer" class="pa-5" />
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>
<script lang="ts">
import type { IFAQ } from '@/mocks/API';
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import SectionTitle from "@/components/home/SectionTitle.vue";

export default defineComponent({
    components: {
        SectionTitle,
    },
    props: {
        items: {
            type: Array as PropType<IFAQ[]>,
            required: true,
        },
    }
});
</script>
<style lang="scss">
.faq-container {
    .v-expansion-panel {
        &--active {
            > .v-expansion-panel-title {
                background: rgb(var(--v-theme-primary));
                color: rgb(var(--v-theme-on-primary));
            }
        }
        &:not(:first-child)::after{
            display: none;
        }
    }
}
</style>