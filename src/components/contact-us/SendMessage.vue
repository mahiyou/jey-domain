<template>
    <v-container class="form-con">
        <v-row>
            <v-col md="4" cols="12" class="text-style">
                <v-row class="mb-4">
                    <v-col md="2" cols="1">
                        <v-icon size="large" color="primary">mdi-headset</v-icon>
                    </v-col>
                    <v-col md="10" cols="11">
                        <p>شماره پشتیبانی</p>
                        <p>۰۳۱-۳۴۴۲۰۳۰۱</p>
                    </v-col>
                </v-row>
                <v-row class="mb-4">
                    <v-col md="2" cols="1">
                        <v-icon size="large" color="primary">mdi-map-marker</v-icon>
                    </v-col>
                    <v-col md="10" cols="11">
                        <p>دفتر مرکزی</p>
                        <p>اصفهان، خیابان سید رضی، مجتمع شمشاد</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="2" cols="1">
                        <v-icon size="large" color="primary">mdi-email-outline</v-icon>
                    </v-col>
                    <v-col md="10" cols="11">
                        <p>پست الکترونیک</p>
                        <p>infoexample@dnj.ir</p>
                    </v-col>
                </v-row>
            </v-col>
            <v-col md="8" cols="12">
                <div class="form-style">
                    <div class="title">پیامی برای ما بگذارید!</div>
                    <v-form @submit.prevent="onSubmit"  v-model="valid">
                        <div class="mb-4">
                            <p class="input-title">نام و نام خانوادگی</p>
                            <v-text-field
                                variant="outlined"
                                class="text my-3"
                                v-model="name"
                                :rules="nameRules"
                                required/>
                        </div>
                        <div class="mb-4">
                            <p class="input-title">شماره تماس</p>
                            <v-text-field
                                variant="outlined"
                                class="text my-3"
                                v-model="phone"
                                placeholder="+989120000000"
                                dir="ltr"
                                :rules="phoneRules"
                                required/>
                        </div>
                        <div class="mb-4">
                            <p class="input-title">چگونه می توانیم به شما کمک کنیم؟</p>
                            <v-textarea
                                class="text my-3"
                                v-model="comment"
                                variant="outlined"
                                :rules="commentRules"
                                placeholder="پیام شما ...">
                            </v-textarea>
                        </div>
                        <v-btn
                            variant="flat"
                            color="#4f80ff"
                            rounded="pill"
                            class="submit-btn"
                            height="42px"
                            type="submit"
                            :loading="loading">
                            <v-icon class="ml-1">mdi-check</v-icon>ارسال پیام</v-btn>
                    </v-form>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            loading: false,
            valid: false,
            name: "",
            phone: "",
            comment: "",
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
            phoneRules: [
                (value) => {
                    if (value) return true;
                    return "وارد کردن شماره تماس الزامی است.";
                },
                (value) => {
                    if (value?.length == 13) return true;
                    return "شماره تماس باید ۱۳ کارکتر باشد";
                },
            ],
            commentRules: [
                (value) => {
                    if (value) return true;
                    return "پرکردن این قسمت الزامی است.";
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
.form-con {
  max-width: 95%;
  @media (max-width: 500px) {
    max-width: 100%;
    
  }
  .form-style {
    margin: 20px;
    background: white;
    border-radius: 10px;
    padding: 40px 30px;
  }
  .v-field{
    --v-field-input-padding-top: calc(var(--v-field-padding-top, 0px) + var(--v-input-padding-top, 0));
    --v-field-input-padding-bottom: var(--v-field-padding-bottom, 0px);
  }
  .title {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 35px;
  }
  .input-title {
    font-size: 14px;
    font-weight: 600;
  }
  .inputs {
    border: 1px solid #a2a2a2;
    color: #a2a2a2;
    font-size: 14px;
    border-radius: 5px;
    width: 100%;
    padding: 10px;
    margin: 15px 0px 35px 0px;
  }
  .submit-btn {
    width: 100%;
    padding: 8px;
    text-align: center;
    font-size: 15px;
    margin-top: 15px;
    font-family: IRANSans;
    color: white;
    letter-spacing: 0;
  }
  .contact-img {
    margin: 90px auto 10px auto;
  }
  .text-style {
    color: #31486c;
    padding-top: 20%;
    line-height: 25px;
  }
  @media (max-width: 960px) {
    .title {
      text-align: center;
    }
    .contact-img {
      margin: 0px auto 40px auto;
    }
    .form-style {
      max-width: 500px;
      margin: auto;
    }
    .text-style {
      padding-top: 20px;
      max-width: 350px;
      margin: auto;
      text-align: center;
    }
  }
}
</style>