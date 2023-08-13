<template>
    <v-container class="buy-domain-container">
        <p class="title">چگونه می توانیم دامنه بخریم؟</p>
        <p class="content">مراحل ثبت دامنه های ملی و بین المللی در پنل جی دامین</p>
        <v-row>
            <v-col md="4" cols="12">
                <v-card class="card center">
                    <div class="img-background">
                        <v-img class="card-img" src="@/assets/pics/domainname.svg"></v-img>
                    </div>

                    <p class="card-title">انتخاب نام دامنه</p>
                    <p class="card-content">
                        پس از انتخاب نام دامنه مورد نظر خود بایستی آن را جستجو کرده تا از
                        دسترس بودن آن اطمینان یابید. در این مرحله حتما باید به پسوند انتخاب
                        شده توجه کنید.
                    </p>
                </v-card>
            </v-col>
            <v-col md="4" cols="12">
                <v-card class="card center">
                    <div class="img-background">
                        <v-img
                            class="card-img"
                            src="@/assets/pics/configuration.svg">
                        </v-img>
                    </div>
                    <p class="card-title">پیکربندی دامنه</p>
                    <p class="card-content">
                        پس از انتخاب نام دامنه مورد نظر خود بایستی آن را جستجو کرده تا از
                        دسترس بودن آن اطمینان یابید. در این مرحله حتما باید به پسوند انتخاب
                        شده توجه کنید.
                    </p>
                </v-card>
            </v-col>
            <v-col md="4" cols="12">
                <v-card class="card center">
                    <div class="img-background">
                        <v-img class="card-img" src="@/assets/pics/price.svg"></v-img>
                    </div>
                    <p class="card-title">پرداخت هزینه و ثبت دامنه</p>
                    <p class="card-content">
                        پس از انتخاب نام دامنه مورد نظر خود بایستی آن را جستجو کرده تا از
                        دسترس بودن آن اطمینان یابید. در این مرحله حتما باید به پسوند انتخاب
                        شده توجه کنید.
                    </p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<style lang="scss">
.buy-domain-container {
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
  .card {
    text-align: center;
    align-content: center;
    padding: 30px 30px;
    box-shadow: none;
  }
  .card-img {
    width: 47px;
    height: 47px;
  }
  .card-title {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 12px;
  }
  .card-content {
    font-weight: 400;
    font-size: 14px;
  }
  .img-background {
    width: 67px;
    height: 62px;
    background: #4f80ff;
    border-radius: 14px;
    padding: 12px;
    margin-right: 37%;
    margin-bottom: 40px;
  }
  .center {
    margin: auto;
  }
  @media (max-width: 960px) {
    .card {
      max-width: 350px;
    }
  }
  @media (max-width: 500px) {
    max-width: 100%;
  }
}
</style>