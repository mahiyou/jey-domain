<template>
    <div class="panel-features-container">
        <v-row align="center">
            <v-col md="4" cols="12">
                <p class="title">امکانات پنل مدیریت دامنه</p>
            </v-col>
            <v-col md="4" sm="6" cols="12" class="py-0">
                <div><v-icon class="icon">mdi-check-circle</v-icon>امکان قفل دامین برای امنیت هرچه بیشتر</div>
                <div><v-icon class="icon">mdi-check-circle</v-icon>ثبت دامین به نام متقاضی و با مالکیت 100 درصد</div>
                <div><v-icon class="icon">mdi-check-circle</v-icon>امکان تغییر Name Server های دامین توسط کاربر</div>
                <div><v-icon class="icon">mdi-check-circle</v-icon>امکان ثبت دامنه در تمامی ساعات شبانه روز</div>
            </v-col>
            <v-col md="4" sm="6" cols="12" class="py-0">
                <div><v-icon class="icon">mdi-check-circle</v-icon>امکان عدم نمایش اطلاعات مالک دامنه در Whois</div>
                <div><v-icon class="icon">mdi-check-circle</v-icon>امکان ثبت و ایجاد Name Server های اختصاصی</div>
                <div><v-icon class="icon">mdi-check-circle</v-icon>امکان ثبت دامنه فارسی IDN</div>
                <div><v-icon class="icon">mdi-check-circle</v-icon>ارائه ی کنترل پنل مدیریت دامین</div>
            </v-col>
        </v-row>
    </div>
</template>
<style lang="scss">
.panel-features-container {
  width: 100%;
  text-align: center;
  background: #4f80ff;
  color: white;
  padding: 50px;
  margin-bottom: 50px;  
  line-height: 45px;
  text-align: right;
  font-size: 13px;
  .title {
    font-weight: 900;
    font-size: 25px;
    text-align: center;
  }
  .icon{
    font-size: 20px;
    margin-left: 8px;
  }
  @media (max-width: 600px) {
    max-width: 100%;
    padding: 50px 20px;
    .title {
      margin-bottom: 15px;
    }
  }
}
</style>