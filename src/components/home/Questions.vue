<template>
  <v-container class="questions-container">
    <p class="title">سوالات متداول</p>
    <p class="content">پاسخ سوالات شما پیرامون خدمات ثبت دامنه جین دامین</p>
    <v-expansion-panels>
      <v-expansion-panel
        class="panel"
        title="دامنه چیست و چرا به آن نیاز داریم؟"
        text="اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های
                برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما
                متنی ساختگی و بدون معنی است که برای امتحان
                فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود.
                طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح
                استفاده می‌کنند."
      >
      </v-expansion-panel>
      <v-expansion-panel
        class="panel"
        title="منظور از پسوند دامنه چیست؟کدام پسوند برای من مناسبتر است؟"
        text="اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های
                برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما
                متنی ساختگی و بدون معنی است که برای امتحان
                فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود.
                طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح
                استفاده می‌کنند."
      >
      </v-expansion-panel>
      <v-expansion-panel
        class="panel"
        title="چگونه می توانم آزاد بودن یک دامنه را بررسی کنم؟"
        text="اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های
                برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما
                متنی ساختگی و بدون معنی است که برای امتحان
                فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود.
                طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح
                استفاده می‌کنند."
      >
      </v-expansion-panel>
      <v-expansion-panel
        class="panel"
        title="چقدر طول می کشد تا دامنه ی خریداری شده ثبت شود؟"
        text="اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های
                برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما
                متنی ساختگی و بدون معنی است که برای امتحان
                فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود.
                طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح
                استفاده می‌کنند."
      >
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>
<style lang="scss">
.questions-container {
  max-width: 90%;
  text-align: center;
  margin-bottom: 50px;
  .title {
    font-weight: 900;
    font-size: 28px;
    margin-bottom: 10px;
  }
  .content {
    font-size: 14px;
    margin-bottom: 30px;
  }
  .panel {
    padding: 6px;
    margin: 8px;
    font-size: 14px;
    line-height: 22px;
    text-align: right;
    .v-expansion-panel-title {
      line-height: 25px;
      font-size: 15px;
      font-weight: 500;
    }
    .v-expansion-panel__shadow {
      box-shadow: none;
      border: 0px;
    }
    .v-expansion-panel-text__wrapper {
      padding: 20px 28px;
    }
    .v-expansion-panel-title--active {
      background: #4f80ff;
      color: white;
    }
    .v-expansion-panel--before-active {
      border: 0px;
    }
    .v-expansion-panel-title__overlay {
      background-color: transparent;
    }
    
  }
  .v-expansion-panel{
    --v-border-opacity: 0;
  }
  @media (max-width: 500px) {
    max-width: 100%;
    padding: 20px;
  }
}
</style>