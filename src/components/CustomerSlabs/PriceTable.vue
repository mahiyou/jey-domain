<template>
    <div class="slab-price-table">
        <v-tabs v-model="tab" show-arrows color="primary" align-tabs="center" class="mb-6">
            <v-tab v-for="(group, slug) in groups" :key="slug" :value="slug" class="px-8" v-text="group.title" />
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item v-for="(group, slug) in groups" :key="slug" :value="slug">
                <v-table>
                    <thead>
                        <tr>
                            <th class="no-border">پسوند دامنه</th>
                            <th>ثبت دامنه</th>
                            <th>تمدید دامنه</th>
                            <th>انتقال دامنه</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="tld in group.tlds" :key="tld.suffix">
                            <td class="suffix-col" v-text="`.${tld.suffix}`" />
                            <td v-text="formatMoney(tld.costs.register, 'IRT')" />
                            <td v-text="formatMoney(tld.costs.renew, 'IRT')" />
                            <td v-text="tld.costs.transfer ? formatMoney(tld.costs.transfer, 'IRT') : '-'" />

                        </tr>
                    </tbody>
                </v-table>
            </v-window-item>
        </v-window>
    </div>
</template>
<script lang="ts">
import { formatMoney } from "../../utilities";
import { PropType, defineComponent } from "vue";
import { ITLD } from "../../mocks/API";

export interface ITldGroup {
    title: string;
    tlds: ITLD[];
}

export type ITldGroups = Record<string,ITldGroup>;

export default defineComponent({
    setup() {
        return {
            formatMoney
        }
    },
    props: {
        groups: {
            type: Object as PropType<ITldGroups>,
            required: true,
        },
    },
    data() {
        return {
            tab: "",
        };
    },
});
</script>
<style lang="scss">
.slab-price-table {
    .v-tabs {
        border-bottom: 1px solid rgb(215, 215, 215);
    }
    .suffix-col {
        direction: ltr;
    }
    .v-table .v-table__wrapper > table {
        > thead > tr > th {
            text-align: center;
        }
        > tbody > tr {
            &:not(:last-child) {
                td, th {
                    border: 0 none;
                }
            }
            &:nth-child(2n) {
                td, th {
                    background-color: #f5f5f5;
                }
            }
        }
    }
}
</style>