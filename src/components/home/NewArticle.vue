<template>
  <v-container class="new-articles-container">
    <v-row>
      <v-col md="6" cols="12">
        <p class="title">جدیدترین مقالات</p>
        <p class="content">
          اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید.
        </p>
        <a href="#" class="link">
          <v-card class="card">
            <v-img src="@/assets/pics/blog1.png" width="530px">
              <v-card class="inside-card">
                <p class="mb-3">
                  ۱. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.
                </p>
                <v-row>
                  <v-col cols="6">
                    <p class="text-grey-darken-1">
                      <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-account-outline</v-icon>
                      کاربر تست
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <p class="text-grey-darken-1">
                      <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-calendar-month-outline</v-icon>
                      ۲۶ خرداد ۱۴۰۲
                    </p>
                  </v-col>
                </v-row>
              </v-card>
            </v-img>
          </v-card>
        </a>
      </v-col>
      <v-col md="6" cols="12">
        <a href="#" class="link">
          <v-card class="side-card card-responsive-mood">
            <v-row>
              <v-col sm="4" cols="12">
                <v-img src="@/assets/pics/blog1.png"></v-img>
              </v-col>
              <v-col sm="8" cols="12">
                <p class="mb-4">
                  ۱. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.
                </p>
                <v-row>
                  <v-col cols="6">
                    <p class="text-grey-darken-1">
                      <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-account-outline</v-icon>
                      کاربر تست
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <p class="text-grey-darken-1">
                      <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-calendar-month-outline</v-icon>
                      ۲۶ خرداد ۱۴۰۲
                    </p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </a>
        <a href="#" class="link">
          <v-card class="side-card">
            <v-row>
              <v-col sm="4" cols="12">
                <v-img src="@/assets/pics/blog1.png"></v-img>
              </v-col>
              <v-col sm="8" cols="12">
                <p class="mb-4">
                  ۲. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.
                </p>
                <v-row>
                  <v-col cols="6">
                    <p class="text-grey-darken-1">
                      <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-account-outline</v-icon>
                      کاربر تست
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <p class="text-grey-darken-1">
                      <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-calendar-month-outline</v-icon>
                      ۲۶ خرداد ۱۴۰۲
                    </p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </a>
        <a href="#" class="link">
          <v-card class="side-card">
            <v-row>
              <v-col sm="4" cols="12">
                <v-img src="@/assets/pics/blog1.png"></v-img>
              </v-col>
              <v-col sm="8" cols="12">
                <p class="mb-4">
                  ۳. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.
                </p>
                <v-row>
                  <v-col cols="6">
                    <p class="text-grey-darken-1">
                      <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-account-outline</v-icon>
                      کاربر تست
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <p class="text-grey-darken-1">
                      <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-calendar-month-outline</v-icon>
                      ۲۶ خرداد ۱۴۰۲
                    </p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </a>
        <a href="#" class="link">
          <v-card class="side-card">
            <v-row>
              <v-col sm="4" cols="12">
                <v-img src="@/assets/pics/blog1.png"></v-img>
              </v-col>
              <v-col sm="8" cols="12">
                <p class="mb-4">
                  ۴. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.
                </p>
                <v-row>
                  <v-col cols="6">
                    <p class="text-grey-darken-1">
                      <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-account-outline</v-icon>
                      کاربر تست
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <p class="text-grey-darken-1">
                      <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-calendar-month-outline</v-icon>
                      ۲۶ خرداد ۱۴۰۲
                    </p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss">
.new-articles-container {
  max-width: 90%;
  margin-bottom: 50px;
  .title {
    font-weight: 900;
    font-size: 28px;
    margin-bottom: 12px;
  }
  .content {
    font-size: 14px;
    margin-bottom: 32px;
  }
  .card {
    box-shadow: none;
    margin: auto;
  }
  .side-card {
    margin: 16px;
    max-width: 700px;
    padding: 14px;
    box-shadow: none;
    font-size: 14px;
  }
  .inside-card {
    width: 65%;
    bottom: 0px;
    box-shadow: none;
    font-size: 14px;
    position: absolute;
    bottom: 0px;
    padding: 20px;
    border-radius: 0px;
  }
  .link {
    text-decoration: none;
  }
  .card-responsive-mood {
    display: none;
  }
  @media (max-width: 960px) {
    .side-card {
      margin: auto;
      margin-bottom: 10px;
    }
    .card {
      display: none;
    }
    .card-responsive-mood {
      display: block;
    }
  }
  @media (max-width: 600px) {
    .title {
      text-align: center;
    }
  }
  @media (max-width: 500px) {
    max-width: 100%;
    padding: 20px;
  }
}
</style>