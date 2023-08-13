<template>
  <div class="panel-features-container">
    <p class="title">امکانات پنل مدیریت دامنه</p>
    <div class="content">
        <v-row>
          <v-col sm="3" cols="6">امکان ثبت دامنه فارسی IDN</v-col> 
          <v-col sm="3" cols="6">امکان قفل دامین برای امنیت هرچه بیشتر</v-col>
          <v-col sm="3" cols="6">امکان عدم نمایش اطلاعات مالک دامنه در Whois</v-col>
          <v-col sm="3" cols="6">امکان تغییر Name Server های دامین توسط کاربر</v-col>
        </v-row>
        <v-row>
          <v-col sm="3" cols="6">ارائه ی کنترل پنل مدیریت دامین</v-col> 
          <v-col sm="3" cols="6">ثبت دامین به نام متقاضی و با مالکیت 100 درصد</v-col>
          <v-col sm="3" cols="6">امکان ثبت و ایجاد Name Server های اختصاصی</v-col>
          <v-col sm="3" cols="6">امکان ثبت دامنه در تمامی ساعات شبانه روز</v-col>
        </v-row>
    </div>
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
  
  .title {
    font-weight: 900;
    font-size: 25px;
    margin-bottom: 55px;

  }
  .content{
    font-size: 12px;
    font-weight: 700;
  }
  @media (max-width: 500px) {
    max-width: 100%;
    padding: 30px 20px;
  }
}
</style>