<template>
  <v-container class="header-container">
    <v-row align="center">
      <v-col md="6" cols="12">
        <h1 class="my-8">
          بزرگترین مرکز ثبت <span class="text-primary">دامنه</span> در ایران
        </h1>
        <p class="header-content">
          اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن
          های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا
          طرح‌نما متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن
          فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و
          گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح استفاده
          می‌کنند.
        </p>
        <v-btn class="mt-5" color="primary" elevation="0" rounded="xl" :to="{ name: 'prices' }">مشاهده ی تعرفه ها</v-btn>
      </v-col>
      <v-col md="6" cols="12">
        <v-img src="@/assets/pics/girl.svg" max-width="430px" class="mx-auto" />
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss">
.header-container {
  background: url(@/assets/pics/headerEllipse.svg) right center no-repeat;
}
</style>