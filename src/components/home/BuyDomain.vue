<template>
    <v-container class="buy-domain-container">
        <SectionTitle 
            title="چگونه می توانیم دامنه بخریم؟"
            content="مراحل ثبت دامنه های ملی و بین المللی در پنل جی دامین"
            />
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
<script lang="ts">
import { defineComponent } from 'vue';
import SectionTitle from "@/components/home/SectionTitle.vue";

export default defineComponent({
    components: {
        SectionTitle
    }
});
</script>
<style lang="scss">
.buy-domain-container {
  text-align: center;
  margin-bottom: 50px;
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
}
</style>