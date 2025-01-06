<template>
  <div class="footer">
    <v-row>
      <v-col md="6" cols="12">
        <v-row>
          <v-col sm="1" class="pl-0 logo-visibility">
            <v-img src="@/assets/pics/jeydomainlogo.svg" width="40px"></v-img>
          </v-col>
          <v-col md="4" sm="3" cols="6" class="pl-0">
            <a href="/"><v-img src="@/assets/pics/footer-logo.svg" width="170px" class="footer-img1"> </v-img></a>
          </v-col>
          <v-col md="7" sm="8" cols="6">
            <div class="footer-sen">
              بزرگترین مرکز ثبت <span style="color: #4f80ff">دامنه</span>
            </div>
          </v-col>
        </v-row>
        <div class="mt-3 px-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
        </div>
      </v-col>
      <v-row class="features-btn-visibility-small-screen my-6 px-1">
        <v-col cols="12">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title disable-icon-rotate>
                <div class="features-title pr-5">دامنه</div>
                <template v-slot:actions>
                  <v-icon color="primary" icon="mdi-chevron-left">
                  </v-icon>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-btn rounded="pill" variant="text" class="btn-features pl-6"><v-icon color="primary">mdi-chevron-left</v-icon>سرور مجازی ابری آلمان</v-btn>
                <v-btn rounded="pill" variant="text" class="btn-features pl-6"><v-icon color="primary">mdi-chevron-left</v-icon>سرور مجازی ابری فنلاند</v-btn>
                <v-btn rounded="pill" variant="text" class="btn-features pl-6"><v-icon color="primary">mdi-chevron-left</v-icon>سرور اختصاصی آلمان</v-btn>
                <v-btn rounded="pill" variant="text" class="btn-features pl-6"><v-icon color="primary">mdi-chevron-left</v-icon>سرور اختصاصی فرانسه</v-btn>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel class="mt-2">
              <v-expansion-panel-title disable-icon-rotate>
                <div class="features-title pr-5">هاست</div>
                <template v-slot:actions>
                  <v-icon color="primary" icon="mdi-chevron-left">
                  </v-icon>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-btn rounded="pill" variant="text" class="btn-features pl-6"><v-icon color="primary">mdi-chevron-left</v-icon>هاست اشتراکی لینوکس</v-btn>
                <v-btn rounded="pill" variant="text" class="btn-features pl-6"><v-icon color="primary">mdi-chevron-left</v-icon>هاست اختصاصی لینوکس</v-btn>
                <v-btn rounded="pill" variant="text" class="btn-features pl-6"><v-icon color="primary">mdi-chevron-left</v-icon>هاست دانلود</v-btn>
                <v-btn rounded="pill" variant="text" class="btn-features pl-6"><v-icon color="primary">mdi-chevron-left</v-icon>نمایندگی هاست اشتراکی لینوکس</v-btn>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel class="mt-2">
              <v-expansion-panel-title disable-icon-rotate>
                <div class="features-title pr-5">سرور</div>
                <template v-slot:actions>
                  <v-icon color="primary" icon="mdi-chevron-left">
                  </v-icon>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-btn rounded="pill" variant="text" class="btn-features pl-6"><v-icon color="primary">mdi-chevron-left</v-icon>سرور مجازی ابری آلمان</v-btn>
                <v-btn rounded="pill" variant="text" class="btn-features pl-6"><v-icon color="primary">mdi-chevron-left</v-icon>سرور مجازی ابری فنلاند</v-btn>
                <v-btn rounded="pill" variant="text" class="btn-features pl-6"><v-icon color="primary">mdi-chevron-left</v-icon>سرور اختصاصی آلمان</v-btn>
                <v-btn rounded="pill" variant="text" class="btn-features pl-6"><v-icon color="primary">mdi-chevron-left</v-icon>سرور اختصاصی فرانسه</v-btn>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel class="mt-2">
              <v-expansion-panel-title disable-icon-rotate>
                <div class="features-title pr-5">جی دامین</div>
                <template v-slot:actions>
                  <v-icon color="primary" icon="mdi-chevron-left">
                  </v-icon>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-btn rounded="pill" variant="text" class="btn-features pl-6"><v-icon color="primary">mdi-chevron-left</v-icon>پشتیبانی</v-btn>
                <v-btn rounded="pill" variant="text" class="btn-features pl-6" :to="{ name: 'questions' }"><v-icon color="primary">mdi-chevron-left</v-icon>سوالات متداول</v-btn>
                <v-btn rounded="pill" variant="text" class="btn-features pl-6" :to="{ name: 'blog' }"><v-icon color="primary">mdi-chevron-left</v-icon>بلاگ</v-btn>
                <v-btn rounded="pill" variant="text" class="btn-features pl-6" :to="{ name: 'contact-us' }"><v-icon color="primary">mdi-chevron-left</v-icon>تماس با ما</v-btn>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
      <v-col md="6" cols="12">
        <v-row align="center">
          <v-col sm="4" cols="12">
            <div class="footer-sen2">همچنین ما را دنبال کنید در:</div>
          </v-col>
          <v-col sm="4" cols="7" class="px-0">
            <v-btn href="https://www.jeyserver.com" variant="flat" rounded="pill" color="#fafbff" class="btn-sites mb-4">
              <v-row>
                <v-col cols="6" class="px-0">جی سرور</v-col>
                <v-col cols="6" class="mt-1" dir="ltr"><span class="text-primary">Jey </span>server</v-col>
              </v-row>
            </v-btn>
            <v-btn href="https://jeodns.ir" variant="flat" rounded="pill" color="#fafbff" class="btn-sites mb-4">
              <v-row>
                <v-col cols="6" class="pr-0 pl-9">جئو آیپی</v-col>
                <v-col cols="6" class="mt-1" dir="ltr"><span class="text-primary">Jeo </span>IP</v-col>
              </v-row>
            </v-btn>
            <v-btn href="https://jeodns.com" variant="flat" rounded="pill" color="#fafbff" class="btn-sites">
              <v-row>
                <v-col cols="6" class="px-0">جئو دی ان اس</v-col>
                <v-col cols="6" class="mt-1"><span class="text-primary">Jeo </span>DNS</v-col>
              </v-row>
            </v-btn>
          </v-col>
          <v-col sm="4" cols="5">
            <a href="https://trustseal.enamad.ir/?id=22081&Code=ulnW1nDLAeYM3cL2l9U3"><v-img src="@/assets/pics/Enamad.png" height="110px" class="footer-img2"></v-img></a>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mt-12 mb-12 features-btn-visibility-big-screen footer-links">
      <v-col cols="3">
        <div class="features-title pr-5">دامنه</div>
        <v-btn rounded="pill" variant="text" class="btn-features pl-6"><v-icon color="primary">mdi-chevron-left</v-icon>سرور مجازی ابری آلمان</v-btn>
        <v-btn rounded="pill" variant="text" class="btn-features pl-6"><v-icon color="primary">mdi-chevron-left</v-icon>سرور مجازی ابری فنلاند</v-btn>
        <v-btn rounded="pill" variant="text" class="btn-features pl-6"><v-icon color="primary">mdi-chevron-left</v-icon>سرور اختصاصی آلمان</v-btn>
        <v-btn rounded="pill" variant="text" class="btn-features pl-6"><v-icon color="primary">mdi-chevron-left</v-icon>سرور اختصاصی فرانسه</v-btn>
      </v-col>
      <v-col cols="3">
        <div class="features-title pr-5">هاست</div>
        <a :href="getJeyserverURL('hosting/linux/standard')"><v-icon color="primary">mdi-chevron-left</v-icon> هاست اشتراکی لینوکس</a>
        <a :href="getJeyserverURL('hosting/linux/dedicated')"><v-icon color="primary">mdi-chevron-left</v-icon> هاست اختصاصی لینوکس</a>
        <a :href="getJeyserverURL('hosting/linux/file')"><v-icon color="primary">mdi-chevron-left</v-icon> هاست دانلود</a>
        <a :href="getJeyserverURL('reseller/hosting/linux')"><v-icon color="primary">mdi-chevron-left</v-icon> نمایندگی هاست اشتراکی لینوکس</a>
      </v-col>
      <v-col cols="3">
        <div class="features-title pr-5">سرور</div>
        <a :href="getJeyserverURL('server/vps/cloud#server_vps_cloud_de')"><v-icon color="primary">mdi-chevron-left</v-icon> سرور مجازی ابری آلمان</a>
        <a :href="getJeyserverURL('server/vps/cloud#server_vps_cloud_fi')"><v-icon color="primary">mdi-chevron-left</v-icon> سرور مجازی ابری فلاند</a>
        <a :href="getJeyserverURL('server/dedicated/germany')"><v-icon color="primary">mdi-chevron-left</v-icon> سرور اختصاصی آلمان</a>
        <a :href="getJeyserverURL('server/dedicated/frace')"><v-icon color="primary">mdi-chevron-left</v-icon> سرور اختصاصی فرانسه</a>
      </v-col>
      <v-col cols="3">
        <div class="features-title pr-5">جی دامین</div>
        <router-link to=""><v-icon color="primary">mdi-chevron-left</v-icon>پشتیبانی</router-link>
        <router-link :to="{ name: 'questions' }"><v-icon color="primary">mdi-chevron-left</v-icon> سوالات متداول</router-link>
        <router-link :to="{ name: 'blog' }"><v-icon color="primary">mdi-chevron-left</v-icon> بلاگ</router-link>
        <router-link :to="{ name: 'contact-us' }"><v-icon color="primary">mdi-chevron-left</v-icon>تماس با ما</router-link>
      </v-col>
    </v-row>
    <div class="rights-sen">
      کلیه ی حقوق مادی و معنوی این سایت متعلق به شرکت داده نگار جی می باشد.
      <router-link :to="{ name: 'conditions' }">قوانین/خط مشی ها</router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {};
    },
    methods: {
      getJeyserverURL(path: string): string {
        return `https://www.jeyserver.com/fa/${path}`;
      }
    }
});
</script>
<style lang="scss" scoped>
.footer-links {
  a,router-link {
    text-decoration: none;
    padding: 12px 0;
    margin: 5px 0;
    display: block;
    color: inherit;
  }
}
</style>
<style lang="scss">
.footer {
  background-color: rgb(var(--v-theme-surface));
  padding: 65px 45px 0px 45px;
  border-top: 10px solid #4f80ff;
  color: #242849;
  font-size: 13px;
  line-height: 22px;
  .footer-sen {
    font-weight: 900;
    font-size: 14px;
    margin-top: 12px;
  }
  .footer-sen2{
    font-weight: 900;
  }
  .footer-img1 {
    margin-top: 5px;
  }
  .btn-sites{
    font-size: 13px;
    width: 95%;
  }
  .features-title{
    font-weight: 900;
    font-size: 18px;
  }
  .btn-features{
    font-size: 13px;
    width: 100%;
    justify-content: right;
    margin-top: 14px;
    --v-theme-overlay-multiplier: 0;
  }
  .rights-sen{
    background:#f3f5fd ;
    margin: auto -45px;
    padding: 5px 45px;
    font-size: 12px;
  }
  .rights-btn{
    font-size: 13px;
    padding: 0px 3px;
    font-size: 12px;
    --v-theme-overlay-multiplier: 0;
  }
  .v-expansion-panel{
    --v-border-opacity: 0;
  }
  .v-expansion-panel-title {
    background: #fafbff ;
    border-radius: 120px;
  }
  .v-expansion-panel__shadow {
    box-shadow: none;
    border: 0px;
    border-radius: 100px;
  }
  .v-expansion-panel-title__overlay {
    background-color: transparent;
  }
  .features-btn-visibility-small-screen{
    display: none;
  }
  @media(max-width: 960px) {
    padding: 40px 20px 0px 20px;
    .btn-features{
      font-size: 12px;
      margin-top: 6px;
      }
  }
  @media(max-width: 600px) {
    padding: 40px 12px 0px 12px;
  
    .logo-visibility{
      display: none;
    }
    .footer-sen {
      font-size: 12px;
      margin-top: 10px;
    }
  }
  @media(max-width: 800px) {
    .features-btn-visibility-big-screen{
      display: none;
    }
    .features-btn-visibility-small-screen{
      display: block;
    }
    .features-title{
      font-weight: 900;
      font-size: 15px;
    }
    .btn-features{
      font-size: 14px;
    }
    .rights-sen{
      margin-top: 50px;
    }
  }
}
</style>