<template>
    <v-container class="domain-container">
        <v-card :color="color" class="py-10" rounded="xl">
            <v-card-item  class="text-center">
                <v-card-title>
                    همین حالا <span class="text-secondary">دامنه</span> مورد نظرتان را ثبت
                    کنید!
                </v-card-title>

                <v-card-subtitle>
                    نام انتخابی خود برای دامنه را در کادر زیر وارد و جستجو نمایید. پس از چند لحظه می توانید وضعیت دامنه را با پسوندهای مختلف مشاهده نمایید.
                </v-card-subtitle>
            </v-card-item>
            <v-card-text>
                <v-form @submit="(e) => $emit('submit', e)" v-model="valid" class="search-domain-form">
                    <DomainInput
                        :tlds="tlds.map((t) => t.suffix)"
                        :modelValue="modelValue"
                        @update:modelValue="(v) => $emit('update:modelValue', v)"
                        :disabled="!valid || disabled"
                        :loading="loading"/>
                </v-form>
                <div v-if="offers" class="featured-tlds">
                    <div class="prices">
                        <div class="price" v-for="tld in offers" :key="tld.suffix">
                            <strong class="suffix">{{ `.${tld.suffix}` }}</strong>
                            <span class="cost">{{ formatMoney(tld.costs.register, "IRT") }}</span>
                        </div>
                    </div>
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script lang="ts">
import { formatMoney } from "@/utilities";
import { defineComponent } from "vue";
import DomainInput from "@/components/DomainInput.vue";
import type { PropType } from "vue";
import type { ITLD } from "@/mocks/API";

export default defineComponent({
    components: {
        DomainInput
    },
    props: {
        color: {
            type: String,
            default: "primary"
        },
        selectDomainBackGround: String,
        modelValue: String,
        loading: Boolean,
        disabled: Boolean,
        tlds: {
            type: Array as PropType<ITLD[]>,
            required: true,
        },
        offers: {
            type: Array as PropType<ITLD[]>,
        }
    },
    emits: ["submit", "update:modelValue"],
    setup() {
        return {
            formatMoney
        };
    },
    data() {
        return {
            valid: false,
        };
    }
});
</script>

<style lang="scss">
.domain-container {
    .search-domain-form {
        max-width: 600px;
        margin:0 auto;
        .v-input--error:not(.v-input--disabled) .v-input__details .v-messages {
            color: rgb(var(--v-theme-secondary));
        }
    }
    .featured-tlds {
        width: 100%;
    }
    .prices {
        width: 480px;
        overflow-x: scroll;
        white-space: nowrap;
        height: 3em;
        font-size: 15px;
        direction: ltr;
        text-align: center;
        margin:0 auto;
    }
    .price {
        display: inline-block;
        border-right: 1px solid;
        padding: 0 10px;
        &:last-child {
            border-right: 0;
            padding-right: 0;
        }
        .suffix {
            margin-right: 1em;
        }
    }
}
</style>