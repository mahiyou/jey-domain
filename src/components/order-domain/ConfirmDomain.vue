<template>
  <v-container class="confirm-domain-container">
    <div class="title">
      شما می توانید در زیر وضعیت دامنه ی مورد نظر خود و سایر پسوندها ار مشاهده
      کنید:
    </div>
    <div v-if="!cartItems && !error" align="center">
      <v-progress-circular indeterminate color="primary"> </v-progress-circular>
    </div>
    <div v-if="cartItems">
      <v-table class="table mb-15">
        <thead>
          <tr>
            <th id="t-title">سفارشات</th>
            <th id="t-title"></th>
            <th id="t-title">برای مدت</th>
            <th id="t-title">تخفیف</th>
            <th id="t-title">قیمت</th>
            <th id="t-title"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="index in cartItems.length" :key="index">
            <th id="t-body">
              ثبت دامنه <strong>{{ cartItems[index - 1].domain }}</strong>
            </th>
            <th id="t-body"><a href="#" class="link">ویرایش</a></th>
            <th id="t-body">
              {{ persianNumber(cartItems[index - 1].duration) }} ماه
            </th>
            <th id="t-body">۰ تومان</th>
            <th id="t-body">
              {{
                persianNumber(cartItems[index - 1].cost.amount.toLocaleString())
              }}
              {{ cartItems[index - 1].cost.currency.title }}
            </th>
            <th id="t-body">
              <v-btn variant="text">
                <v-icon
                  color="#dd3f4e"
                  @click="deletCartItemForUser(cartItems[index - 1].id)">
                  mdi-trash-can-outline</v-icon>
              </v-btn>
            </th>
          </tr>
        </tbody>
      </v-table>
      <v-row>
        <v-col md="6" cols="12">
          <div class="mb-2 mt-3">کد تخفیف</div>
          <div align="center">
            <v-form v-model="valid" lazy-validation @submit.prevent="onSubmit">
              <v-text-field
                variant="outlined"
                class="text-field"
                v-model="discountCode"
                :rules="discountRules"/>
              <v-btn
                type="submit"
                variant="outlined"
                :loading="loading"
                width="100%"
                height="38px"
                class="btn-discount">
                اعمال کد تخفیف
              </v-btn>
            </v-form>
          </div>
        </v-col>
        <v-col md="6" cols="12">
          <div class="gray-border px-4 py-6">
            <v-row class="border-bottom pb-1">
              <v-col cols="6">قیمت کل:</v-col>
              <v-col cols="6" class="align-left">
                {{ `${persianNumber(costOfCartItems())} ${currency}` }}
              </v-col>
            </v-row>
            <v-row class="border-bottom pb-1">
              <v-col cols="6">تخفیف:</v-col>
              <v-col cols="6" class="align-left">
                {{ `${persianNumber(discount)} ${currency}` }}
              </v-col>
            </v-row>
            <v-row class="bold-green-text">
              <v-col cols="6">مبلغ قابل پرداخت</v-col>
              <v-col cols="6" class="align-left">{{
                `${persianNumber(costWithDiscount())} ${currency}`
              }}</v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
      <div align="center">
        <v-btn
          variant="text"
          rounded="pill"
          min-width="40%"
          class="btns back"
          prepend-icon="mdi-chevron-right">
          بازگشت
        </v-btn>
        <v-btn
          variant="flat"
          color="#5cb85c"
          rounded="pill"
          min-width="40%"
          class="btns confirm"
          prepend-icon="mdi-check">
          تایید نهایی
        </v-btn>
      </div>
    </div>
    <v-snackbar v-model="snackbar" multi-line
      >خطای سرور
      <template v-slot:actions>
        <v-btn color="red" variant="text" @click="snackbar = false">
          بستن
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { getCartItems } from "@/mocks/Cart";
import { deletCartItem } from "@/mocks/Cart";
import { applyDiscount } from "@/mocks/Cart";
import { call } from "@/mocks/API";

export default defineComponent({
  data() {
    return {
      cartItems: undefined,
      error: false,
      snackbar: false,
      loading: false,
      valid: false,
      totalCost: 0,
      discount: 0,
      discountCode: "",
      currency: "",
      discountRules: [
        (value) => {
          if (value?.length <= 5) return true;
          return "کد تخفف باید کمتر از ۵ کاراکتر باشد.";
        },
      ],
    };
  },
  methods: {
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
    deletCartItemForUser(id) {
      if (this.cartItems) {
        const itemWithId = this.cartItems.findIndex((item) => item.id === id);
        this.cartItems.splice(itemWithId, 1);
        deletCartItem(id);
      }
    },
    costOfCartItems() {
      if (this.cartItems.length > 0) {
        let sum = 0;
        for (let i = 0; i < this.cartItems.length; i++) {
          sum = sum + this.cartItems[i].cost.amount;
        }
        this.totalCost = sum;
        console.log(this.totalCost);
        return sum;
      } else {
        this.totalCost = 0;
        this.discount = 0;
        console.log(this.totalCost);
        return 0;
      }
    },
    costWithDiscount() {
      if (this.totalCost != 0 && this.totalCost > this.discount) {
        return this.totalCost - this.discount;
      } else {
        return 0;
      }
    },
    onSubmit() {
      if (!this.discountCode || !this.valid || this.loading) {
        return;
      }
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        if (this.totalCost != 0) {
          this.discount = applyDiscount(this.discountCode);
        }
      }, 2000);
    },
  },
  async mounted() {
    try {
      const response = await call(getCartItems, []);
      this.cartItems = response;
      this.error = false;
      this.currency = this.cartItems[0].cost.currency.title;
    } catch (e) {
      this.error = true;
      this.snackbar = true;
    }
  },
});
</script>
<style lang="scss">
.confirm-domain-container {
  padding: 25px 30px;
  font-size: 13px;
  .title {
    margin-bottom: 60px;
    font-size: 14px;
  }
  .bold {
    font-weight: 900;
  }
  #t-title {
    color: black;
    border: none;
    font-weight: 900;
    font-size: 15px;
    text-align: center;
  }
  #t-body {
    border-bottom: 1px dashed #aeaeae;
    text-align: center;
    font-size: 13px;
  }
  .link {
    color: #4f80ff;
    text-decoration: none;
  }
  .border-bottom {
    border-bottom: 1px dashed #aeaeae;
  }
  .gray-border {
    padding: 10px;
    border: 1px solid #aeaeae;
    border-radius: 5px;
    margin: 6px auto;
    width: 90%;
  }
  .bold-green-text {
    font-weight: 900;
    color: #5cb85c;
  }
  .align-left {
    text-align: left;
  }
  .btn-discount {
    font-family: IRANSans;
    font-size: 13px;
    letter-spacing: 0;
    padding: 10px;
    border-color: #bbbcbf;
    margin-top: 5px;
  }
  .btns {
    font-family: IRANSans;
    font-size: 15px;
    letter-spacing: 0;
    padding: 7px;
    margin: 60px 10px;
  }
  .back {
    border: 1px solid #aeaeae;
  }
  .confirm {
    color: white;
  }
  .v-field {
    margin: 5px 0px 0px 0px;
    --v-field-padding-top: 0px;
    --v-input-padding-top: 0px;
    --v-field-padding-bottom: 0px;
    --v-input-control-height: 40px;
  }
}
</style>