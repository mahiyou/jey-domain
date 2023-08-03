<template>
    <v-container class="prices-container">
        <div class="prices-title">تعرفه های ثبت دامنه</div>
        <div>
            تعرفه های دامنه بسته به تعداد دامنه های ثبت شده مشتربان گرامی در پنل جی
            سرور قیمت گذاری می شوند.
        </div>
        <div>
            هرچه تعداد دامنه های ثبت شده شما بیشتر باشد هزینه ثبت دامنه شامل تخفیف
            بیتر یخواهد شد.
        </div>
        <div class="tab-in-small-screen">
            <v-tabs
                v-model="tab"
                direction="vertical"
                align-tabs="center"
                class="mb-5 mt-5 customer-tab">  
                <v-tab value="1">
                    <div class="customer-tab-title">مشتریان <span class="bronze-color">برنزی</span></div>
                </v-tab>
                <v-tab value="2">
                    <div class="customer-tab-title">مشتریان <span class="silver-color">نقره ای</span></div>
                </v-tab>
                <v-tab value="3">
                    <div class="customer-tab-title">مشتریان <span class="golden-color">طلایی</span></div>
                </v-tab>
            </v-tabs>
        </div>
        <div class="tab-in-big-screen">
            <v-tabs
                v-model="tab"
                show-arrows
                align-tabs="center"
                class=" mb-12  mt-15 customer-tab">
                <v-row>
                    <v-col cols="4">      
                        <v-tab value="1">
                            <div>
                                <div class="customer-tab-title">مشتریان <span class="bronze-color">برنزی</span></div>
                                <div class="customer-tab-sen ">
                                    ثبت ۱ تا ۹۹ دامنه در پنل جی دامین
                                </div>
                            </div>
                        </v-tab>
                    </v-col>
                    <v-col cols="4">
                        <v-tab value="2" >
                            <div>
                                <div class="customer-tab-title">مشتریان <span class="silver-color">نقره ای</span></div>
                                <div class="customer-tab-sen ">
                                    ثبت ۱۰۰ تا ۹۹۹ دامنه در پنل جی دامین
                                </div>
                            </div>
                        </v-tab>
                    </v-col>
                    <v-col cols="4"> 
                        <v-tab value="3" >
                            <div>
                                <div class="customer-tab-title">مشتریان <span class="golden-color">طلایی</span></div>
                                <div class="customer-tab-sen ">
                                    ثبت بیشتر از ۹۹۹ دامنه در پنل جی دامین
                                </div>
                            </div>
                        </v-tab>
                    </v-col>
                </v-row> 
            </v-tabs>
        </div>
        <v-window v-model="tab">
            <v-window-item value="1">
                <PricesBronzeCustomers />
            </v-window-item>
            <v-window-item value="2">
                <PricesSilverCustomers />
            </v-window-item>
            <v-window-item value="3">
                <PricesGoldenCustomers />
            </v-window-item>
        </v-window>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PricesBronzeCustomers from "@/components/home/PricesBronzeCustomers.vue";
import PricesSilverCustomers from "@/components/home/PricesSilverCustomers.vue";
import PricesGoldenCustomers from "@/components/home/PricesGoldenCustomers.vue";
export default defineComponent({
    components:{
        PricesBronzeCustomers,
        PricesSilverCustomers,
        PricesGoldenCustomers
    },
    data: () => ({
        tab: null,
    }),
});
</script>
<style lang="scss">
.prices-container {
  max-width: 90%;
  text-align: center;
  margin-bottom: 50px;
  .prices-title {
    font-weight: 900;
    font-size: 28px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .customer-tab{ 
    --v-tabs-height: 220px;
    .v-slide-group__content{
      justify-content: center;
    }
    .v-btn{
      border: 0px;
    }
    .v-tab--selected{
      border: 3px solid #4f80ff;
    }
    .v-tab--selected .v-tab__slider{
      opacity: 0;
    }
    .v-btn--size-default{
      padding: 0px 40px;
      border-radius: 20px;
      background: white;
    }  
    .customer-tab-title {
      font-weight: 900;
      font-size: 25px;
      line-height: 70px;
    }
    .bronze-color{
      color: #e08d50;
    }
    .silver-color{
      color: #9fa0ab;
    }
    .golden-color{
      color: #f4d327;
    }
    .customer-tab-sen {
      color: #3e415f;
    }
  }
  .tab-in-big-screen{
    display: block;
  }
  .tab-in-small-screen{
    display: none;
  }
  @media (max-width: 500px) {
    max-width: 100%;
    padding: 20px;
  }
  @media (max-width: 960px) {
    .customer-tab{ 
      --v-tabs-height: 180px;
      .customer-tab-title {
        font-size: 22px;
      }
      .v-btn--size-default{
        padding: 0px 30px;
      }
    }
  }
  @media (max-width: 600px) {
    .customer-tab{ 
      --v-tabs-height: 70px;
      text-align: center;
      .customer-tab-title {
        font-size: 15px;
      }
      .v-btn--size-default{
        margin: 6px;
      }
      .v-slide-group__content > :last-child {
        &:last-child{
          margin-inline-end: 0px;
        }
        &:first-child{
          margin-inline-start: 0px;
        }  
      }
    }
    .v-slide-group--vertical .v-tab {
      justify-content: center;
    }
    .tab-in-big-screen{
      display: none;
     }
    .tab-in-small-screen{
      display: block;
    }
  }
}
</style>