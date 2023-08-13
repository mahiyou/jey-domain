<template>
  <v-form
    class="order-register-form"
    @submit.prevent="onSubmit"
    v-model="valid"
  >
    <div class="title">فرم ثبت نام</div>
    <div class="dotted-line"></div>
    <v-row class="mt-7">
      <v-col sm="6" cols="12">
        <div>نام<span class="star-color">*</span></div>
        <v-text-field
          variant="outlined"
          class="text-field"
          v-model="name"
          :rules="nameRules"
          required
        />
      </v-col>
      <v-col sm="6" cols="12">
        <div>نام خانوادگی<span class="star-color">*</span></div>
        <v-text-field
          variant="outlined"
          class="text-field"
          v-model="lastName"
          :rules="lastNameRules"
          required
        />
      </v-col>
    </v-row>
    <v-row class="mt-2">
      <v-col sm="6" cols="12">
        <div>شماره همراه<span class="star-color">*</span></div>
        <v-text-field
          variant="outlined"
          class="text-field"
          v-model="phone"
          :rules="phoneRules"
          required>
        </v-text-field>
        
      </v-col>
      <v-col sm="6" cols="12">
        <div>ایمیل<span class="star-color">*</span></div>
        <v-text-field
          variant="outlined"
          class="text-field"
          v-model="email"
          :rules="emailRules"
          required
        />
      </v-col>
    </v-row>
    <v-row class="mt-2">
      <v-col sm="6" cols="12">
        <div>کلمه عبور<span class="star-color">*</span></div>
        <v-text-field
          variant="outlined"
          class="text-field"
          v-model="password"
          :rules="passwordRules"
          required
        />
      </v-col>
      <v-col sm="6" cols="12">
        <div>تکرار کلمه عبور<span class="star-color">*</span></div>
        <v-text-field
          variant="outlined"
          class="text-field"
          v-model="passwordConfirm"
          :rules="passwordConfirmRules"
          required
        />
      </v-col>
    </v-row>
    <v-checkbox v-model="Checkbox" color="primary" :rules="checkboxRules">
      <template v-slot:label>همه ی 
        <v-btn variant="text" color="primary" class="rights-btn" :to="{ name: 'conditions' }">قوانین و شرایط</v-btn>
        را خوانده وپذیرفته ام.
      </template>
    </v-checkbox>

    <div class="text-center">
      <v-btn
        type="submit"
        :loading="loading"
        variant="flat"
        color="#5cb85c"
        rounded="pill"
        width="45%"
        class="btn-confirm"
      >
        <v-icon class="ml-1">mdi-check</v-icon>
        تایید نهایی
      </v-btn>
    </div>
  </v-form>
  <v-snackbar v-model="serverErrorSnackbar" multi-line
    >خطای سرور
    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="serverErrorSnackbar = false">
        بستن
      </v-btn>
    </template>
  </v-snackbar>
  <v-snackbar v-model="passwordSnackbar" multi-line
    >تکرار رمز عبور مطابقت ندارد
    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="passwordSnackbar = false">
        بستن
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useUserState } from "@/stores/UserState";

export default defineComponent({
  setup() {
    return {
      store: useUserState(),
    };
  },
  data() {
    return {
      authType: "newUser",
      valid: false,
      name: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      passwordConfirm: "",
      loading: false,
      Checkbox: false,
      passwordSnackbar: false,
      serverErrorSnackbar: false,
      nameRules: [
        (value) => {
          if (value) return true;
          return "وارد کردن نام الزامی است.";
        },
        (value) => {
          if (value?.length <= 20) return true;
          return "نام شما باید کمتر از 20 کاراکتر باشد.";
        },
      ],
      lastNameRules: [
        (value) => {
          if (value) return true;
          return "وارد کردن نام خانوادگی الزامی است.";
        },
        (value) => {
          if (value?.length <= 20) return true;
          return "نام خانوادگی شما باید کمتر از 20 کاراکتر باشد.";
        },
      ],
      phoneRules: [
        (value) => {
          if (value) return true;
          return "وارد کردن  شماره همراه  الزامی است.";
        },
        (value) => {
          if (value?.length == 11) return true;
          return " شماره همراه شما باید 11 کاراکتر باشد.";
        },
      ],

      passwordRules: [
        (value) => {
          if (value) return true;
          return "وارد کردن رمز عبور الزامی است.";
        },
        (value) => {
          if (value?.length >= 10) return true;
          return "رمز عبور شما باید بیشتر از 10 کاراکتر باشد.";
        },
      ],
      passwordConfirmRules: [
        (value) => {
          if (value) return true;
          return "وارد کردن تکرار رمز عبور الزامی است.";
        },
        (value) => {
          if (value?.length >= 10) return true;
          return "تکرار رمز عبور باید بیشتر از 10 کاراکتر باشد.";
        },
      ],
      emailRules: [
        (value) => {
          if (value) return true;
          return "وارد کردن  ایمیل الزامی است.";
        },
        (value) => {
          if (
            !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
              value
            )
          ) {
            return "ایمیل وارد شده معتبر نمی باشد";
          }
          return true;
        },
      ],
      checkboxRules: [
        (value) => {
          if (value) return true;
          return "برای ثبت نام در سایت باید قوانین را بپذیرید.";
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      if (this.loading || !this.valid) {
        return;
      }
      if (this.password != this.passwordConfirm) {
        this.passwordSnackbar = true;
        return;
      }
      this.loading = true;
      const registerPromis = this.store.register(
        { username: this.phone, password: this.password },
        this.email,
        this.name,
        this.lastName,
        this.phone
      );
      registerPromis
        .catch(() => {
          this.serverErrorSnackbar = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});
</script>
<style lang="scss">
.order-register-form {
  .title {
    font-weight: 900;
  }
  .dotted-line {
    height: 2px;
    width: 100%;
    margin-top: -10px;
    margin-right: 80px;
    border-top: 1px dashed #aeaeae;
  }
  .star-color {
    color: #fab348;
  }
  .v-field {
    border-color: #e1e1e1;
    margin: 10px 0px 0px 0px;
    --v-field-padding-top: 0px;
    --v-input-padding-top: 0px;
    --v-field-padding-bottom: 0px;
    --v-input-control-height: 40px;
  }
  .link {
    text-decoration: none;
    margin: 1px 5px 0px 5px;
    color: #4f80ff;
  }
  .rights-btn{
    font-family: IRANSans;
    font-weight: 800;
    letter-spacing: 0;
    padding: 0px 3px;
  }
  .btn-confirm {
    font-family: IRANSans;
    font-size: 16px;
    letter-spacing: 0;
    color: white;
    padding: 5px;
    margin: 20px auto 50px auto;
  }
}
</style>