<template>
    <v-container class="prices-container">
        <div class="prices-title">تعرفه های ثبت دامنه</div>
        <div>
            تعرفه های دامنه بسته به تعداد دامنه های ثبت شده مشتربان گرامی در پنل جی
            سرور قیمت گذاری می شوند.
        </div>
        <div>
            هرچه تعداد دامنه های ثبت شده شما بیشتر باشد هزینه ثبت دامنه شامل تخفیف
            بیشتری یخواهد شد.
        </div>
        <div class="tab-in-small-screen">
            <v-tabs
                v-model="tab"
                direction="vertical"
                align-tabs="center"
                class="mb-5 mt-5 customer-tab">  
                <v-tab v-for="slab in slabs" :key="slab.slug" :value="slab.slug">
                    <div class="customer-tab-title">مشتریان <span :class="`${slab.slug}-color`">{{ getSlabTitle(slab.slug) }}</span></div>
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
                    <v-col v-for="slab in slabs" :key="slab.slug">      
                        <v-tab :value="slab.slug">
                            <div>
                                <div class="customer-tab-title">مشتریان <span :class="`${slab.slug}-color`">{{ getSlabTitle(slab.slug) }}</span></div>
                                <div class="customer-tab-sen" v-text="getSlabDescription(slab.slug)" />
                            </div>
                        </v-tab>
                    </v-col>
                </v-row> 
            </v-tabs>
        </div>
        <v-window v-model="tab">
            <v-window-item v-for="slab in slabs" :key="slab.slug" :value="slab.slug">
                <PriceTable :groups="getGroupedTlds(slab)" />
            </v-window-item>
        </v-window>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PriceTable, { ITldGroups, ITldGroup } from "./PriceTable.vue";
import type { PropType } from "vue";
import type { ISlab, ISlabs } from "../../mocks/API";
export default defineComponent({
    components:{
        PriceTable
    },
    props: {
        slabs: {
            type: Array as PropType<ISlabs>,
            required: true,
            validator(slabs: ISlabs): boolean {
                for (const slab of slabs) {
                    if (!["bronze", "silver", "golden"].includes(slab.slug)) {
                        return false;
                    }
                }
                return true;
            }
        }
    },
    methods: {
        getSlabTitle(slab: string): string {
            const titles: Record<string,string> = {
                "bronze": "برنزی",
                "silver": "نقره ای",
                "golden": "طلایی",
            };
            return titles[slab];
        },
        getSlabDescription(slab: string): string {
            const titles: Record<string, string> = {
                "bronze": "با ثبت ۱ تا ۹۹ دامنه در جی دامین",
                "silver": "با ثبت ۱۰۰ تا ۹۹۹ دامنه در جی دامین",
                "golden": "با ثبت بیش از ۱۰۰۰ دامنه در جی دامین",
            };
            return titles[slab];
        },
        getGroupedTlds(slab: ISlab): ITldGroups {
            const commercials = ["com", "net", "org", "biz", "work", "agency"];
            const groups: ITldGroups = {
                commercial: {
                    title: "دامنه های تجاری",
                    tlds: slab.tlds.filter(({suffix}) => commercials.includes(suffix)),
                },
                cheap: {
                    title: "دامنه های ارزان",
                    tlds: slab.tlds.filter((t) => t.costs.register < 200000),
                },
                national: {
                    title: "دامنه های ملی",
                    tlds: slab.tlds.filter(({suffix}) => suffix == "ir" || suffix.endsWith(".ir")),
                },
                international: {
                    title: "دامنه های بین المللی",
                    tlds: []
                },
                country: {
                    title: "دامنه های کشوری",
                    tlds: [],
                },
            };
            groups.country.tlds = slab.tlds.filter((tld) => (
                (
                    tld.suffix.length === 2 ||
                    tld.suffix.lastIndexOf(".") === tld.suffix.length - 3
                ) &&
                !groups.national.tlds.includes(tld)
            ));
            for (const tld of slab.tlds) {
                if (!groups.country.tlds.includes(tld) && !groups.national.tlds.includes(tld)) {
                    groups.international.tlds.push(tld);
                }
            }

            return groups;
        },
    },
    data: () => ({
        tab: null,
    }),
});
</script>
<style lang="scss">
.prices-container {
  text-align: center;
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