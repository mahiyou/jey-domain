<template>
  <v-container class="domain-container" :class="`bg-${backgroundColor}`">
    <p class="sentence1">
      همین حالا <span style="color: #ffa200">دامنه</span> مورد نظرتان را ثبت
      کنید!
    </p>
    <p class="mb-8">
      نام انتخابی خود برای دامنه را در کادر زیر وارد و جستجو نمایید. پس از چند لحظه می توانید وضعیت دامنه را با پسوندهای مختلف مشاهده نمایید.
    </p>
    <v-row class="justify-center">
      <v-col md="9" cols="12">
        <v-form>
          <select v-model="selected" class="select-domain" :class="`bg-${selectDomainBackGround}`">
            <option
              :value="tlds[tld-1].tld"
              v-for="tld in tlds.length"
              :key="tld"> 
              <v-btn>{{ `${tlds[tld-1].tld}.` }}</v-btn>
            </option><span>gg</span>
          </select>
          <v-text-field
            bg-color="white"
            variant="plain"
            density="compact"
            class="text-field"
            placeholder="دامنه مورد نظر">
            <template v-slot:append-inner>
              <v-btn
                type="submit"
                variant="flat"
                color="#ffa200"
                rounded="pill"
                density="comfortable"
                float="left"
                height="44px"
                class="btn-confirm"
                prepend-icon="mdi-magnify">
                جستجو
              </v-btn>
            </template>
            <template v-slot:prepend-inner>
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
  props:{
    backgroundColor: String,
    selectDomainBackGround: String,
  },
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
    persianNumber(n : string) {
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
  border-radius: 15px;
  padding: 40px;
  text-align: center;
  margin-bottom: 20px;
  .sentence1 {
    font-weight: 900;
    font-size: 20px;
    margin-bottom: 15px;
  }
  .select-domain {
    appearance: auto;
    padding: 14px;
    border-radius: 0px 40px 40px 0px;
    width: 90px;
    float: right;
    color: black;
    text-align: center;
    height: 55.5px;
    font-size: 18px;
    border: 1px solid #4f80ff;
    border-left: none;
  }
  .btn-confirm {
    font-family: IRANSans;
    color: white;
    padding: 10px;
    letter-spacing: 0;
    font-weight: 800;
    font-size: 14px;
    margin: 5px 7px;
    width: 110px;
  }
  .text-field {
    .v-field {
      border: 1px solid #4f80ff;
      border-right: none;
      border-radius:50px 0px 0px 50px;
      input {
        text-align: center;
        direction: ltr;
        padding: 12px;
      }
    }
  }
  .v-input--density-compact {
    --v-input-padding-top: 0px;
    --v-field-padding-top: 0px;
    --v-field-padding-top--plain-underlined:0px
  }
  .v-field.v-field--variant-plain {
    .v-field__prepend-inner {
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
    border-right: 1px solid;
    padding: 0 10px;
    &:last-child {
      border-right: 0;
      padding-right: 0;
    }
  }
  @media (max-width: 600px) {
    .select-domain {
      width: 70px;
      font-size: 15px;
    }      
    .btn-confirm {
      padding: 0px;
      font-size: 13px;
      width: 90px;
    } 
  }
  @media (max-width: 500px) {
    max-width: 100%;
    border-radius: 0px;
    padding: 30px 20px;
  }
}
</style>