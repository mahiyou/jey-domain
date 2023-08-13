<template>
  <v-containr class="config-domain-container">
    <div>
      شما می توانید در زیر وضعیت دامنهمورد نظر خود و سایر پسوندهارا مشاهده کنید.
    </div>
    <div class="sentence-2">
      {{ domain }}
      <a class="link" href="#"> ثبت یکساله </a>
      <div class="dotted-line"></div>
    </div>
    <div class="gray-box">
      برای ثبت این دامنه به مالکیت شما نیاز است تا بعد از پرداخت صورتحساب
      بازگزدید و پنل ثبت کننده دامنه را (از طریق دکمه پیکربندی مقابل محصول
      دامنه) مشخص کنید.
    </div>
    <v-form @submit.prevent="onSubmit" v-model="valid" class="form">
      <div class="title">Name Server ها</div>
      <div>
        اگر مایل به استفاده از Name Server های سرویس دیگری هستید آنها را در
        اینجا وارد کنید. به صورت پیش فرض روی دامنه های جدید، Name Server های ما
        تنظیم می شود.
      </div>
      <v-row class="mt-7">
        <v-col sm="6" cols="12">
          <div>Name Server 1</div>
          <v-text-field
            variant="outlined"
            class="text-field"
            v-model="nameServer1"
            :rules="nameServerRules"
            required/>
        </v-col>
        <v-col sm="6" cols="12">
          <div>Name Server 2</div>
          <v-text-field
            variant="outlined"
            class="text-field"
            v-model="nameServer2"
            :rules="nameServerRules"
            required/>
        </v-col>
      </v-row>
      <v-row class="mt-3 border-bottom">
        <v-col sm="6" cols="12">
          <div>Name Server 3</div>
          <v-text-field
            variant="outlined"
            class="text-field"
            v-model="nameServer3"
            :rules="nameServerRules"
            required/>
        </v-col>
        <v-col sm="6" cols="12">
          <div>Name Server 4</div>
          <v-text-field
            variant="outlined"
            class="text-field"
            v-model="nameServer4"
            :rules="nameServerRules"
            required/>
        </v-col>
      </v-row>
      <div>
        شما می توانید در این قسمت اطلاعات مربوط به WHOIS دامنه ی خود را مشخص
        کنید:
      </div>
      <div class="yellow-box">
        توجه داشته باشید اطلاعات زیر را حتما به صورت انگلیسی وارد نمایید!
      </div>
      <v-row class="mt-3">
        <v-col sm="6" cols="12">
          <div>نام<span class="star-color">*</span></div>
          <v-text-field
            variant="outlined"
            class="text-field"
            v-model="name"
            :rules="nameRules"
            required/>
        </v-col>
        <v-col sm="6" cols="12">
          <div>نام خانوادگی<span class="star-color">*</span></div>
          <v-text-field
            variant="outlined"
            class="text-field"
            v-model="lastName"
            :rules="lastNameRules"
            required/>
        </v-col>
      </v-row>
      <v-row class="mt-6">
        <v-col sm="6" cols="12">
          <div>شرکت</div>
          <v-text-field
            variant="outlined"
            class="text-field"
            v-model="company"/>
        </v-col>
        <v-col sm="6" cols="12">
          <div>ایمیل<span class="star-color">*</span></div>
          <v-text-field
            variant="outlined"
            class="text-field"
            v-model="email"
            :rules="emailRules"
            required/>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-btn
          type="submit"
          :loading="loading"
          variant="flat"
          color="#5cb85c"
          rounded="pill"
          width="45%"
          class="btn-continue">
          <v-icon>mdi-chevron-left</v-icon>
          ادامه
        </v-btn>
      </div>
    </v-form>
  </v-containr>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      domain: "rion.com",
      loading: false,
      valid: false,
      nameServer1: "",
      nameServer2: "",
      nameServer3: "",
      nameServer4: "",
      name: "",
      lastName: "",
      company: "",
      email: "",
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
      nameServerRules: [],
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
      companyRules: [
        (value) => {
          if (value?.length <= 30) return true;
          return "نام شرکت شما باید کمتر از 30 کاراکتر باشد.";
        },
      ],
      emailRules: [
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
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
});
</script>

<style lang="scss">
.config-domain-container {
  font-size: 14px;
  .sentence-2 {
    margin-top: 15px;
    font-weight: 900;
    font-size: 15px;
    .dotted-line {
      height: 2px;
      width: 100%;
      margin-top: -10px;
      margin-right: 135px;
      border-top: 1px dashed #aeaeae;
    }
    .link {
      text-decoration: none;
      color: #4f80ff;
      margin-right: 5px;
      font-size: 12px;
      font-weight: 100;
    }
  }
  .gray-box {
    background: #f5f5f5;
    padding: 22px;
    margin: 30px 0px 40px 0px;
  }
  .yellow-box {
    background: #fef5a9;
    padding: 22px;
    margin: 25px 0px 30px 0px;
  }
  .form {
    margin-top: 40px;
    padding-bottom: 60px;
    .title {
      font-weight: 900;
      font-size: 16px;
      margin-bottom: 5px;
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
    .border-bottom {
      border-bottom: 1px dashed #aeaeae;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .text-center {
      text-align: center;
    }
    .btn-continue {
      font-family: IRANSans;
      font-size: 16px;
      letter-spacing: 0;
      color: white;
      padding: 7px;
      margin: 60px auto 0px auto;
    }
  }
}
</style>