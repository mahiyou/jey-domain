<template>
  <div class="check-domain-container">
    <v-row>
      <v-col>
        شما می توانید در زیر وضعیت دامنه مورد نظر خود و سایر پسوندها را مشاهده
        کنید:
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="search-domain">
      <v-col cols="11" sm="9">
        <v-form
          v-model="valid"
          @submit.prevent="onSubmit"
          ref="checkDomainBox"
          class="justify-center pt-7">
          <v-text-field
            placeholder="نام دامنه مورد نظر خود را وارد کنید"
            variant="plain"
            bg-color="white"
            rounded="pill"
            class="text-field"
            v-model="domain"
            :rules="[validateInputDomain]">
            <template v-slot:append-inner>
              <v-btn
                type="submit"
                flat
                color="primary"
                density="comfortable"
                class="btn-confirm"
                rounded="pill"
                :loading="loading">
                جستجو
              </v-btn>
            </template>
          </v-text-field>
        </v-form>
      </v-col>
    </v-row>
    <div class="domain-search-resault">
      <P class="mb-5"> دامنه ی rion.com در دسترس است.</P>
      <div>
        <span class="price">۶۰۳,۰۰۰ تومان</span>
        <v-btn variant="flat" color="#5cb85c" rounded="pill" class="buy-btn">خرید دامنه</v-btn>
      </div>
    </div>
    <div class="domain-sugestion">
      <div class="domain-sugestion-title">دامنه های پیشنهادی</div>
      <div>
        <v-row
          class="sugestions"
          v-for="(suggestion, index) of suggestions.slice(0, maxSuggestion)"
          :key="index">
          <v-col md="8" cols="6">
            {{ suggestion.domain.name }}
            <strong>.{{ suggestion.domain.tld }}</strong>
          </v-col>
          <v-col md="2" cpls="3">
            {{ suggestion.registerCost.amount.toLocaleString() }}
            {{ suggestion.registerCost.currency }}
          </v-col>
          <v-col md="2" cols="3">
            <v-btn
              variant="flat"
              color="#4f80ff"
              rounded="pill"
              class="buy-btn-2"
              @click="buySuggestion(suggestion)">
              خرید دامنه
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <div
        class="domain-sugestion-last"
        v-if="suggestions.length > 5 && maxSuggestion">
        <a class="link" @click="maxSuggestion = undefined">
          مشاهده ی دامنه های پیشنهادی دیگر
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

interface Suggestion {
  domain: {
    name: string;
    tld: string;
  };
  registerCost: {
    amount: number;
    currency: string;
  };
}

export default defineComponent({
  setup() {
    return {
      checkDomainBox: ref<HTMLElement>(),
    };
  },
  data() {
    return {
      domains: [".ir", ".org", ".net"],
      domain: "",
      loading: false,
      valid: false,
      suggestions: [
        {
          domain: {
            name: "rion",
            tld: "ir",
          },
          registerCost: {
            amount: 48000,
            currency: "تومان",
          },
        },
        {
          domain: {
            name: "rion",
            tld: "ir",
          },
          registerCost: {
            amount: 48000,
            currency: "تومان",
          },
        },
        {
          domain: {
            name: "rion",
            tld: "ir",
          },
          registerCost: {
            amount: 48000,
            currency: "تومان",
          },
        },
        {
          domain: {
            name: "rion",
            tld: "ir",
          },
          registerCost: {
            amount: 48000,
            currency: "تومان",
          },
        },
        {
          domain: {
            name: "rion",
            tld: "ir",
          },
          registerCost: {
            amount: 48000,
            currency: "تومان",
          },
        },
        {
          domain: {
            name: "rion",
            tld: "ir",
          },
          registerCost: {
            amount: 48000,
            currency: "تومان",
          },
        },] as Suggestion[],
      maxSuggestion: 5 as number | undefined,
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      setTimeout(() => {this.loading = false;}, 2000);
    },
    validateInputDomain(input: string) {
      if (!/^[a-zA-Z0-9-]+\.[a-zA-Z]+/.test(input)) {
        return "دامنه وارد شده معتبر نمی باشد";
      }
      return true;
    },
    buySuggestion(suggestion: Suggestion) {
      this.domain = suggestion.domain.name + "." + suggestion.domain.tld;
      this.onSubmit();
      this.checkDomainBox?.scrollIntoView();
    },
  },
});
</script>
<style lang="scss">
.check-domain-container {
  .search-domain {
    background-image: url("@/assets/pics/globe.svg");
    background-position: 98% -2%;
    background-size: 217px;
    border-radius: 5px;
    background-color: #f5f5f5;
    .text-field {
      .v-field {
        --v-field-padding-top: 0px;
        --v-input-padding-top: 10px;
        --v-field-padding-bottom: 10px;
        --v-field-input-padding-bottom: 8px;
        --v-field-padding-start: 10px;
        font-size: 14px;
        input {
          text-align: center;
          direction: ltr;
        }
      }
    }
    .btn-confirm {
      height: calc(var(--v-btn-height) + -4px);
      margin-left: 10px;
    }
  }

  .domain-search-resault {
    padding: 30px;
    text-align: center;
    margin: 40px 0px;
    border: 1px dashed #aeaeae;
    color: #5cb85c;
    font-size: 14px;
    font-weight: 800;
    .price {
      color: black;
      font-weight: 900;
      font-size: 16px;
    }
    .buy-btn {
      letter-spacing: 0;
      width: 110px;
      margin-right: 20px;
      color: white;
      font-size: 12px;
    }
    @media (max-width: 400px) {
      .price {
        font-weight: 700;
        font-size: 14px;
      }
      .buy-btn {
        width: 90px;
      }
    }
  }
  .domain-sugestion {
    .domain-sugestion-title {
      background: #f5f5f5;
      padding: 14px;
      border-radius: 7px 7px 0px 0px;
      border-bottom: 1px solid #5cb85c;
      font-weight: 500;
      margin-bottom: 15px;
    }
    .domain-sugestion-last {
      background: #f5f5f5;
      padding: 14px;
      font-weight: 500;
      text-align: center;
      margin-top: 10px;
      margin-bottom: 40px;
      .link {
        text-decoration: none;
        color: #4f80ff;
        font-weight: 600;
      }
    }
    .buy-btn-2 {
      color: white;
      letter-spacing: 0;
      padding: 3px;
      width: 90px;
      margin-top: -7px;
      font-size: 11px;
      font-weight: 600;
    }
    .sugestions {
      padding: 3px 14px 0px 14px;
      font-size: 15px;
      border-bottom: 1px dashed #aeaeae;
      &:last-child {
        border-bottom: 0;
      }
    }
  }
  @media (max-width: 600px) {
    .select-domain {
      width: 70px;
    }
  }
}
</style>