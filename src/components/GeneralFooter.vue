<template>
  <div class="f-container">
    <v-row>
      <v-col sm="4" cols="12">
        <div>
          <v-img
            src="@/assets/pics/dark-JeyDomain.svg"
            width="170px"
            class="footer-img1"
          ></v-img>
        </div>

        <div class="footer-sen">
          بزرگترین مرکز ثبت <span style="color: #4f80ff">دامنه</span> در ایران
        </div>
      </v-col>
      <v-col sm="4" cols="6">
        <v-row>
          <v-col sm="6" cols="12">
            <div class="mb-7">
              <a href="#" class="link-style">جستجو دامنه</a>
            </div>
            <div class="mb-7">
              <a href="#" class="link-style">لیست دامنه ها</a>
            </div>
            <div><a href="#" class="link-style">پشتیبانی</a></div>
          </v-col>
          <v-col sm="6" cols="12">
            <div class="mb-7">
              <a href="/contact-us" class="link-style">تماس با ما</a>
            </div>
            <div class="mb-7">
              <a href="#" class="link-style">سوالات متداول</a>
            </div>
            <div><a href="#" class="link-style">بلاگ</a></div>
          </v-col>
        </v-row>
      </v-col>
      <v-col sm="4" cols="6">
        <v-img src="@/assets/pics/Enamad.png" class="footer-img2"></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss">
.f-container {
  background: #242849;
  color: white;
  padding: 45px 45px 30px 45px;
  border-radius: 60px 0px 0px 0px;
  font-weight: 700;
  font-size: 13px;
  .footer-sen {
    font-weight: 900;
    font-size: 18px;
    margin-top: 20px;
  }
  .footer-img1 {
    margin-top: 5%;
  }
  .footer-img2 {
    width: 110px;
    height: 140px;
    border-radius: 10px;
    margin: auto;
  }
  .link-style {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 960px) {
    .footer-sen {
      font-weight: 600;
      font-size: 12px;
    }
  }
  @media (max-width: 600px) {
    padding: 45px 30px 80px 30px;
    .footer-sen {
      margin: 30px 0;
      text-align: center;
    }
    .footer-img1 {
      margin: auto;
    }
    .footer-img2 {
      margin-top: 25%;
    }
  }
}
</style>