<template>
  <v-container class="dashboard-container">
      <div>پیشخوان</div>
      <v-card class="card">
          <v-row>
              <v-col md="8" cols="12" class="align-center">
                  <div>برای راه اندازی وبسایت خود اولین قدم را با ثبت دامنه بردارید<v-icon
                      class="mr-2">mdi-arrow-left-thin</v-icon></div>
                  <v-btn variant="flat" color="#faa930" class="start-btn">شروع کنید!</v-btn>
              </v-col>
              <v-col md="4" cols="12"><v-img height="170px" src="@/assets/pics/Domain-names-pana.svg"></v-img></v-col>
          </v-row>
      </v-card>
      <v-row>
          <v-col md="6" cols="12" class="my-0 py-0">
              <v-card class="sub-card">
                  <v-row>
                      <v-col sm="8" cols="12">
                          <div class="title">تعداد دامنه های ثبت شده</div>
                          <div class="content"> 0 دامنه ثبت شده</div>
                      </v-col>
                      <v-col sm="4" cols="12" class="pr-0">
                          <div class="hidden-xs rounded-circle background">
                              <v-icon class="icon" color="primary">mdi-newspaper-variant-outline</v-icon>
                          </div>
                          <v-btn variant="tonal" rounded="pill" color="#0AB39C" class="btn mt-sm-13 mt-0" prepend-icon="mdi-plus">خرید دامنه ی جدید</v-btn>
                      </v-col>
                  </v-row>
              </v-card>
              <v-card class="sub-card">
                  <v-row>
                      <v-col sm="8" cols="12">
                          <div class="title">موجودی کاربری</div>
                          <div class="content"> 0 تومان</div>
                          <div class="text-primary"><v-icon color="primary" style="opacity: 1;">mdi-circle-medium</v-icon>هیچ صورت حساب پرداخت نشده ای ندارید!</div>
                      </v-col>
                      <v-col sm="4" cols="12" class="pr-0">
                          <div class="hidden-xs rounded-circle background">
                              <v-icon class="icon" color="primary">mdi-wallet-outline</v-icon>
                          </div>
                          <v-btn variant="tonal" rounded="pill" color="#0AB39C" class="btn mt-sm-13 mt-0" prepend-icon="mdi-plus">افزایش موجودی</v-btn>
                      </v-col>
                  </v-row>
              </v-card>
          </v-col>
          <v-col md="6" cols="12" class="my-0 py-0">
              <v-card class="sub-card">
                  <v-row>
                      <v-col sm="8" cols="12">
                          <div class="title">فوری</div>
                          <div class="content red-text">1 دامنه در حال انقضا</div>
                      </v-col>
                      <v-col sm="4" cols="12" class="pr-0">
                          <div class="hidden-xs rounded-circle background background-red">
                              <v-icon class="icon red-text">mdi-exclamation-thick</v-icon>
                          </div>
                          <v-btn variant="tonal" rounded="pill" color="#0AB39C" class="btn mt-sm-13 mt-0" prepend-icon="mdi-chevron-left">مشاهده دامنه</v-btn>
                      </v-col>
                  </v-row>
              </v-card>
              <v-card class="sub-card">
                  <v-row>
                      <v-col sm="8" cols="12">
                          <div class="title">نیاز به رسیدگی</div>
                          <div class="content">2 تیکت خوانده نشده</div>
                      </v-col>
                      <v-col sm="4" cols="12" class="pr-0">
                          <div class="hidden-xs rounded-circle background">
                              <v-icon class="icon" color="primary">mdi-ticket-outline</v-icon>
                          </div>
                          <v-btn variant="tonal" rounded="pill" color="#0AB39C" class="btn mt-sm-13 mt-0" prepend-icon="mdi-chevron-left">مشاهده تیکت ها</v-btn>
                      </v-col>
                  </v-row>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>
<style lang="scss">
.dashboard-container {
  .card {
      padding: 20px 20px 0px 20px;
      margin: 20px auto;
      .start-btn {
          color: white;
          margin: 20px 0px 0px 0px;
          font-weight: 600;
          font-size: 13px;
          width: 130px;
      }
  }
  .v-card--variant-elevated {
      box-shadow: 0px 1px 0px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.1)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.02)), 0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.1));
  }
  .sub-card{
      padding: 20px;
      margin: 20px 0px;
      .title{
          color:#9599AD;
          font-size: 13px;
      }
      .content{
          color:#495057;
          font-size: 26px;
          font-weight: 900;
          margin: 15px 0px 5px 0px;
      }
      .circle{
          background-color: #4f80ff;
          width: 30px;
          height: 30px;
      }
      .red-text{
          color:#F06548;
      }
      .background{
          background-color: rgba(79, 128, 255, 0.12);
          width:50px;
          height:50px;
          padding: 14px;
          float: left;
          text-align: center;
          justify-content: center;
      }
      .background-red{
          background-color: rgba(240, 101, 72, 0.12);
      }
      .btn{
          width: 380px;
          height: 30px;
          font-weight: 900;
          font-size: 11px;
          margin-top: 52px;
          padding: 5px;
          .v-btn__prepend{
              margin-left: 0px;
          }
      }
      
  }
      @media(max-width:960px){
          .align-center{
              text-align: center;
          }   
          .sub-card{
              margin: 10px 0px;
          }
      }
}
</style>