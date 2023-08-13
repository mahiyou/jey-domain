<template>
  <v-container class="complete-order-container">
    <div>
      برای تکمیل سفارش خرید دامنه خود نیاز است مشخصات خود را وارد نمایید:
    </div>
    <v-radio-group v-model="authType" class="mt-3">
      <v-radio
        label="کاربر جدید هستم"
        value="newUser"
        color="primary"
      ></v-radio>
      <v-radio
        label="قبلا ثبت نام کرده ام"
        value="oldUser"
        color="primary"
      ></v-radio>
    </v-radio-group>
    <div v-if="authType == 'newUser'">
        <OrdeRegisterForm />
    </div>
    <div v-if="authType == 'oldUser'">
        <OrderLoginForm />
    </div>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import OrdeRegisterForm from "@/components/order-domain/OrdeRegisterForm.vue";
import OrderLoginForm from "@/components/order-domain/OrderLoginForm.vue";
export default defineComponent({
    components:{
      OrdeRegisterForm,
      OrderLoginForm,
    },
  data() {
    return {
      authType: "newUser",
    };
  },
  methods:{

  }
});
</script>

<style lang="scss">
.complete-order-container {
    .v-label {
    --v-medium-emphasis-opacity: 1;
    font-size: 12.5px;
  }
  .v-selection-control__input > .v-icon {
    font-size: 17px;
  }
}
</style>