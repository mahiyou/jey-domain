<template>
    <v-container class="order-nav-container">
        <v-row>
            <v-col sm="4" cols="12">
                <v-tabs center-active :align-tabs="alignTabs" :model-value="modelValue" @update:model-value="() => onTabChanged"
                    :direction="tabsDirection" hide-slider color="primary" class="nav-tabs" disabled:string="true">
                    <v-tab value="checkDomain" class="order-tabs-handler" :border="false" rounded="lg" variant="flat">
                        <span class="num-border">۱</span>
                        بررسی دامنه
                    </v-tab>
                    <v-tab value="configuration" class="order-tabs-handler" :border="false" rounded="lg" variant="flat">
                        <span class="num-border">۲</span>
                        پیکربندی
                    </v-tab>
                    <v-tab value="confirmDomain" class="order-tabs-handler" :border="false" rounded="lg" variant="flat">
                        <span class="num-border">۳</span>
                        تایید دامنه
                    </v-tab>
                    <v-tab value="completeOrder" class="order-tabs-handler" :border="false" rounded="lg" variant="flat">
                        <span class="num-border">۴</span>
                        تکمیل سفارش
                    </v-tab>
                </v-tabs>
            </v-col>
            <v-col sm="8" cols="12">
                <v-window :touch="false" :model-value="modelValue" @update:model-value="onTabChanged">
                    <v-window-item value="checkDomain">
                        <CheckDomain @tabValue="onTabChanged" />
                    </v-window-item>
                    <v-window-item value="configuration">
                        <ConfigurationDomain @tabValue="onTabChanged" :cartItemDomain="cartItem" :cost="cost" />
                    </v-window-item>
                    <v-window-item value="confirmDomain">
                        <ConfirmDomain @tabValue="onTabChanged" :cartItemDomain="cartItem" />
                    </v-window-item>
                    <v-window-item value="completeOrder">
                        <CompleteOrder />
                    </v-window-item>
                </v-window>
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss">
.order-nav-container {
    min-width: 90%;
    padding-top: 50px;

    .nav-tabs {

        .v-btn--disabled.v-btn--variant-elevated,
        .v-btn--disabled.v-btn--variant-flat {
            color: rgb(var(--v-theme-on-surface));

            .v-btn__overlay {
                opacity: 0;
            }
        }
    }

    .order-tabs-handler {
        margin-bottom: 1em;
        margin-right: 15px;
    }

    .num-border {
        border-left: 1px solid;
        margin-left: 10px;
        padding-left: 10px;
    }
}
</style>
<script lang="ts">
import CheckDomain from "@/components/order-domain/CheckDomain.vue";
import ConfigurationDomain from "@/components/order-domain/ConfigurationDomain.vue";
import ConfirmDomain from "@/components/order-domain/ConfirmDomain.vue";
import CompleteOrder from "@/components/order-domain/CompleteOrder.vue";
import { defineComponent } from "vue";
import { useDisplay } from "vuetify";
import { Cost } from "@/stores/Cart";

interface tabValue{
    tab: string
    cartItem: string
    cost: Cost
}

export default defineComponent({
    setup() {
        const display = useDisplay();
        return {
            display,
        };
    },
    components: {
        CheckDomain,
        ConfigurationDomain,
        ConfirmDomain,
        CompleteOrder
    },
    props: {
        modelValue: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            cartItem: '',
            cost: { amount: 0, currency: { title: "تومان" } }
        }

    },
    methods: {
        onTabChanged(newTab:tabValue) {
            this.$emit("update:modelValue", newTab.tab);
            this.cartItem = newTab.cartItem;
            this.cost = newTab.cost;
        },
    },
    computed: {
        tabsDirection() {
            return this.display.name.value == "xs" ? "horizontal" : "vertical";
        },
        alignTabs() {
            return this.display.name.value == "xs" ? "center" : undefined;
        },
    },
});
</script>