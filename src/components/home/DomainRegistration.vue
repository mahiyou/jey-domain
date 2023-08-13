<template>
  <v-container class="domain-container">
    <p class="sentence1">
      همین حالا <span style="color: #ffa200">دامنه</span> مورد نظرتان را ثبت
      کنید
    </p>
    <p class="mb-8">
      همین حالا دامنه ی مورد نظرتان را جستجو و در صورت آزاد بودن، اقدام به ثبت
      آن کنید.
    </p>
    <v-row class="justify-center">
      <v-col md="9" cols="12">
        <v-form>
          <v-text-field
            bg-color="white"
            variant="plain"
            rounded="pill"
            density="compact"
            class="text-field"
            placeholder="نام دامنه مورد نظر خود را وارد کنید">
            <template v-slot:append-inner>
              <v-btn
                type="submit"
                variant="flat"
                color="#ffa200"
                rounded="pill"
                density="comfortable"
                float="left"
                width="100px"
                height="44px"
                class="btn-confirm">
                جستجو
              </v-btn>
            </template>
            <template v-slot:prepend-inner>
              <select v-model="selected" class="select-domain" dir="ltr">
                <option
                  :value="tlds[tld-1].tld"
                  v-for="tld in tlds.length"
                  :key="tld">
                  <v-btn>{{ `.${tlds[tld-1].tld}` }}</v-btn>
                </option>
              </select>
            </template>
          </v-text-field>
        </v-form>
      </v-col>
    </v-row>
    <div class="featured-tlds">
      <div dir="ltr" class="prices">
        <div class="price" v-for="tld in tlds.length" :key="tld">
          {{`.${tlds[tld-1].tld}`}}
          <span>{{ persianNumber(tlds[tld-1].registration.toLocaleString()) }}</span>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      tlds:[
        {tld:"com",registration:603000},
        {tld:"ir",registration:48000},
        {tld:"org",registration:503000},
        {tld:"net",registration:703000},
      ],
      selected: "com",
    };
  },
  methods:{
    persianNumber(n) {
      n = n.toString();
      const nlength = n.length;
      const farsiNum = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < nlength; j++) {
          const istring = i.toString();
          n = n.replace(istring, farsiNum[i]);
        }
      }
      return n;
    },
  }
});
</script>

<style lang="scss">
.domain-container {
  max-width: 90%;
  background: #4f80ff;
  border-radius: 15px;
  padding: 40px;
  color: white;
  text-align: center;
  margin-bottom: 50px;
  .sentence1 {
    font-weight: 900;
    font-size: 20px;
    margin-bottom: 15px;
  }
  .select-domain {
    background: rgb(235, 235, 235);
    padding: 14px;
    border-radius: 0px 40px 40px 0px;
    width: 110px;
    float: right;
    color: black;
    text-align: center;
  }
  .btn-confirm {
    font-family: IRANSans;
    color: white;
    padding: 10px;
    letter-spacing: 0;
    font-weight: 800;
    font-size: 14px;
    margin: 5px 7px;
  }
  .text-field {
    .v-field {
      input {
        text-align: center;
        direction: ltr;
      }
    }
  }
  .v-input--density-compact {
    --v-input-padding-top: 8px;
    --v-field-padding-top: 0px;
  }
  .v-field.v-field--variant-plain {
    .v-field__prepend-inner {
      padding-top: 0px;
    }
    .v-field__append-inner {
      padding-top: 0px;
    }
  }
  .featured-tlds {
    width: 100%;
    overflow: auto;
  }
  .prices {
    width: 480px;
    height: 3em;
    word-spacing: 12px;
    font-size: 15px;
    margin: auto;
  }
  .price {
    display: inline-block;
    border-right: 1px solid white;
    padding: 0 10px;
    &:last-child {
      border-right: 0;
      padding-right: 0;
    }
  }
  @media (max-width: 600px) {
    .select-domain {
      width: 70px;
    }
  }
  @media (max-width: 500px) {
    max-width: 100%;
    border-radius: 0px;
    padding: 30px 20px;
  }
}
</style>