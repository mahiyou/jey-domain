<template>
  <v-container class="contact-us-slider-container">
    <v-row>
      <v-col md="7" cols="12">
        <p class="title">ما سالهاست در کنار شما هستیم</p>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </p>
      </v-col>
      <v-col md="5" cols="12">
        <v-img
          src="@/assets/pics/man-contactus.svg"
          class="contact-img"
          max-width="540">
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss">
.contact-us-slider-container{
  max-width: 95%;
  line-height: 30px;
  @media (max-width: 500px) {
    max-width: 100%;
  }
  .title{
    font-size: 30px;
    font-weight: 900;
    margin: 18% auto 20px auto;
  }
  .contact-img {
    margin: 20px auto 10px auto;
  }
  @media (max-width: 960px) {
    .contact-img {
      margin: 0px auto 40px auto;
    }
    .title{
      text-align: center;
    }
  }
}

</style>