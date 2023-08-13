<template>
  <v-containr class="config-domain-container">
    <div>
      شما می توانید در زیر وضعیت دامنهمورد نظر خود و سایر پسوندهارا مشاهده کنید.
    </div>
    <div class="sentence-2">
      rion.com
      <a class="link" href="#"> ثبت یکساله </a>
    </div>
    <div class="gray-box">
      برای ثبت این دامنه به مالکیت شما نیاز است تا بعد از پرداخت صورتحساب
      بازگزدید و پنل ثبت کننده دامنه را (از طریق دکمه پیکربندی مقابل محصول
      دامنه) مشخص کنید.
    </div>
    <div class="name-servers">
      <div class="title">Name Server ها</div>
      <div>
        اگر مایل به استفاده از Name Server های سرویس دیگری هستید آنها را در
        اینجا وارد کنید. به صورت پیش فرض روی دامنه های جدید، Name Server های ما
        تنظیم می شود.
      </div>
      <v-row class="mt-6">
        <v-col cols="6">
          <div>Name Server 1</div>
          <input class="inputs" type="text" />
        </v-col>
        <v-col cols="6">
          <div>Name Server 2</div>
          <input class="inputs" type="text" />
        </v-col>
      </v-row>
      <v-row class="mt-6 border-bottom">
        <v-col cols="6">
          <div>Name Server 3</div>
          <input class="inputs" type="text" />
        </v-col>
        <v-col cols="6">
          <div>Name Server 4</div>
          <input class="inputs" type="text" />
        </v-col>
      </v-row>
      <v-row class="mt-6">
        <v-col cols="6">
          <div>Name Server 1</div>
          <input class="inputs" type="text" />
        </v-col>
        <v-col cols="6">
          <div>Name Server 2</div>
          <input class="inputs" type="text" />
        </v-col>
      </v-row>
      <v-row class="mt-6">
        <v-col cols="6">
          <div>Name Server 3</div>
          <input class="inputs" type="text" />
        </v-col>
        <v-col cols="6">
          <div>Name Server 4</div>
          <input class="inputs" type="text" />
        </v-col>
      </v-row>
      <div class="text-center">
        <v-btn
          variant="flat"
          color="#5cb85c"
          rounded="pill"
          width="45%"
          class="btn-continue">
          ادامه
        </v-btn>
      </div>
    </div>
  </v-containr>
</template>
<style lang="scss">
.config-domain-container {
  padding: 25px 30px;
  font-size: 14px;
  .sentence-2 {
    margin-top: 15px;
    font-weight: 900;
    font-size: 15px;
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
    margin-top: 15px;
  }
  .name-servers {
    margin-top: 40px;
    padding-bottom: 60px;
    .title {
      font-weight: 900;
      font-size: 16px;
      margin-bottom: 5px;
    }
    .inputs {
      padding: 10px;
      border: 1px solid #aeaeae;
      border-radius: 5px;
      margin-top: 6px;
      width: 90%;
    }
    .border-bottom {
      border-bottom: 1px dashed #aeaeae;
      padding-bottom: 60px;
      margin-bottom: 60px;
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