<template>
  <v-container class="header-container">
    <v-row>
      <v-col md="6" cols="12">
        <div class="background">
          <p class="header-title">
            بزرگترین مرکز ثبت <span style="color: #4f80ff">دامنه</span> در ایران
          </p>
          <p class="header-content">
            اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن
            های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا
            طرح‌نما متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن
            فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و
            گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح استفاده
            می‌کنند.
          </p>
          <div class="price-btn">
            <v-btn class="header-btn">مشاهده ی تعرفه ها</v-btn>
          </div>
        </div>
      </v-col>
      <v-col md="6" cols="12">
        <v-img src="@/assets/pics/girl1.gif" width="430px" class="center">
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss">
.header-container {
  max-width: 90%;
  .background {
    background-image: url(@/assets/pics/headerEllipse.svg);
    background-position: right;
    background-size: 420px;
    margin-top: 50px;
    margin-right: -110px;
  }
  .header-title {
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 20px;
    padding-top: 40px;
    margin-right: 110px;
  }
  .header-content {
    font-size: 14px;
    line-height: 30px;
    margin-right: 110px;
  }
  .header-btn {
    background: #4f80ff;
    border-radius: 25px;
    color: white;
    letter-spacing: 0;
    margin: 20px 0px 60px 0px;
    margin-right: 110px;
  }
  .center {
    margin: auto;
  }
  .price-btn {
    text-align: right;
  }
  @media (max-width: 600px) {
    .header-title {
      text-align: center;
      padding-top: 20px;
    }
    .price-btn {
      text-align: center;
    }
  }
  @media (max-width: 960px) {
    .header-title {
      padding-top: 20px;
    }
    .background {
      background-size: 350px;
    }
  }
  @media (max-width: 500px) {
    max-width: 100%;
    padding: 20px;
    .header-btn {
      margin-bottom: 20px;
    }
  }
}
</style>