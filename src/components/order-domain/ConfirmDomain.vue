<template>
  <v-container class="confirm-domain-container">
    <div class="title">
      شما می توانید در زیر وضعیت دامنه ی مورد نظر خود و سایر پسوندها ار مشاهده
      کنید:
    </div>
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
        <tr>
          <th id="t-body">ثبت دامنه rion.com</th>
          <th id="t-body"><a href="#" class="link">ویرایش</a></th>
          <th id="t-body">۱ سال</th>
          <th id="t-body">۰ تومان</th>
          <th id="t-body">۶۰۳,۰۰۰ تومان</th>
          <th id="t-body">
            <v-btn variant="text">
              <v-icon color="#dd3f4e">mdi-trash-can-outline</v-icon>
            </v-btn>
          </th>
        </tr>
        <tr>
          <th>ثبت دامنه rion.com</th>
          <th><a href="#" class="link">ویرایش</a></th>
          <th>۱ سال</th>
          <th>۰ تومان</th>
          <th>۶۰۳,۰۰۰ تومان</th>
          <th>
            <v-btn variant="text">
              <v-icon color="#dd3f4e">mdi-trash-can-outline</v-icon>
            </v-btn>
          </th>
        </tr>
      </tbody>
    </v-table>
    <v-row>
      <v-col md="6" cols="12">
        <div class="mb-2 mt-5">کد تخفیف</div>
        <div align="center">
          <input
            class="gray-border"
            placeholder="کد تخفیف خود ر وارد کنید."
            type="text"
          />
          <button class="gray-border">اعمال کد تخفیف</button>
        </div>
      </v-col>
      <v-col md="6" cols="12">
        <div class="gray-border px-4 py-6">
          <v-row class="border-bottom pb-1">
            <v-col cols="6">قیمت کل:</v-col>
            <v-col cols="6" class="align-left">۶۰۳,۰۰۰ تومان</v-col>
          </v-row>
          <v-row class="border-bottom pb-1">
            <v-col cols="6">تخفیف:</v-col>
            <v-col cols="6" class="align-left">۰ تومان</v-col>
          </v-row>
          <v-row class="bold-green-text">
            <v-col cols="6">مبلغ قابل پرداخت</v-col>
            <v-col cols="6" class="align-left">۱,۲۱۶,۰۰۰ تومان</v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <div align="center">
      <v-btn variant="text" rounded="pill" min-width="40%" class="btns back">
        بازگشت
      </v-btn>
      <v-btn
        variant="flat"
        color="#5cb85c"
        rounded="pill"
        min-width="40%"
        class="btns confirm">
        تایید نهایی
      </v-btn>
    </div>
  </v-container>
</template>
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
    font-size: 14px;
  }
  #t-body {
    border-bottom: 1px dashed #aeaeae;
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
}
</style>