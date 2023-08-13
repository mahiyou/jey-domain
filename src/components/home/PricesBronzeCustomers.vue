<template>
    <div class="prices-bronze-customers-container">
        <v-tabs
            v-model="tab"
            show-arrows
            color="#4f80ff"
            align-tabs="center"
            style="border-bottom: 1px solid rgb(215, 215, 215)"
            class="mb-6">
            <v-tab value="1" class="tab-style">دامنه های تجاری</v-tab>
            <v-tab value="2" class="tab-style">دامنه های ارزان قیمت</v-tab>
            <v-tab value="3" class="tab-style">دامنه های رند</v-tab>
            <v-tab value="4" class="tab-style">دامنه های ملی</v-tab>
            <v-tab value="5" class="tab-style">دامنه های بین المللی</v-tab>
            <v-tab value="6" class="tab-style">دامنه های کشوری</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item value="1">
                <v-table>
                    <thead id="theadborder">
                        <tr>
                            <th class="text-center no-border">پسوند دامنه</th>
                            <th class="text-center">ثبت دامنه</th>
                            <th class="text-center">تمدید دامنه</th>
                            <th class="text-center">انتقال دامنه</th>
                            <th class="text-center">سفارش</th>
                        </tr>
                    </thead>
                    <tbody id="tbodyborder">
                        <tr v-for="index in tldsTypes.commercial.length" :key="index">
                            {{
                                getTldInfo(tldsTypes.commercial[index - 1])
                            }}
                            <td dir="ltr" :class="getBackground(index)">
                                {{ `.${tldsTypes.commercial[index - 1]}` }}
                            </td>
                            <td class="td-color" :class="getBackground(index)">
                                {{ persianNumber(currentRegistration.toLocaleString()) }}
                            </td>
                            <td class="td-color" :class="getBackground(index)">
                                {{ persianNumber(currentExtend.toLocaleString()) }}
                            </td>
                            <td class="td-color" :class="getBackground(index)">
                                {{ persianNumber(currentTransfer.toLocaleString()) }}
                            </td>
                            <td :class="getBackground(index)">
                                <v-btn class="order-btn" href="/order/domain">سفارش</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-window-item>
            <v-window-item value="2">
                <v-table>
                    <thead id="theadborder">
                        <tr>
                            <th class="text-center no-border">پسوند دامنه</th>
                            <th class="text-center">ثبت دامنه</th>
                            <th class="text-center">تمدید دامنه</th>
                            <th class="text-center">انتقال دامنه</th>
                            <th class="text-center">سفارش</th>
                        </tr>
                    </thead>
                    <tbody id="tbodyborder">
                        <tr v-for="index in tldsTypes.cheap.length" :key="index">
                            {{
                                getTldInfo(tldsTypes.cheap[index - 1])
                            }}
                            <td dir="ltr" :class="getBackground(index)">
                                {{ `.${tldsTypes.cheap[index - 1]}` }}
                            </td>
                            <td class="td-color" :class="getBackground(index)">
                                {{ persianNumber(currentRegistration.toLocaleString()) }}
                            </td>
                            <td class="td-color" :class="getBackground(index)">
                                {{ persianNumber(currentExtend.toLocaleString()) }}
                            </td>
                            <td class="td-color" :class="getBackground(index)">
                                {{ persianNumber(currentTransfer.toLocaleString()) }}
                            </td>
                            <td :class="getBackground(index)">
                                <v-btn class="order-btn" href="/order/domain">سفارش</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-window-item>
            <v-window-item value="3">
                <v-table>
                    <thead id="theadborder">
                        <tr>
                            <th class="text-center no-border">پسوند دامنه</th>
                            <th class="text-center">ثبت دامنه</th>
                            <th class="text-center">تمدید دامنه</th>
                            <th class="text-center">انتقال دامنه</th>
                            <th class="text-center">سفارش</th>
                        </tr>
                    </thead>
                    <tbody id="tbodyborder">
                        <tr v-for="index in tldsTypes.round.length" :key="index">
                            {{
                                getTldInfo(tldsTypes.round[index - 1])
                            }}
                            <td dir="ltr" :class="getBackground(index)">
                                {{ `.${tldsTypes.round[index - 1]}` }}
                            </td>
                            <td class="td-color" :class="getBackground(index)">
                                {{ persianNumber(currentRegistration.toLocaleString()) }}
                            </td>
                            <td class="td-color" :class="getBackground(index)">
                                {{ persianNumber(currentExtend.toLocaleString()) }}
                            </td>
                            <td class="td-color" :class="getBackground(index)">
                                {{ persianNumber(currentTransfer.toLocaleString()) }}
                            </td>
                            <td :class="getBackground(index)">
                                <v-btn class="order-btn" href="/order/domain">سفارش</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-window-item>
            <v-window-item value="4">
                <v-table>
                    <thead id="theadborder">
                        <tr>
                            <th class="text-center no-border">پسوند دامنه</th>
                            <th class="text-center">ثبت دامنه</th>
                            <th class="text-center">تمدید دامنه</th>
                            <th class="text-center">انتقال دامنه</th>
                            <th class="text-center">سفارش</th>
                        </tr>
                    </thead>
                    <tbody id="tbodyborder">
                        <tr v-for="index in tldsTypes.national.length" :key="index">
                            {{
                                getTldInfo(tldsTypes.national[index - 1])
                            }}
                            <td dir="ltr" :class="getBackground(index)">
                                {{ `.${tldsTypes.national[index - 1]}` }}
                            </td>
                            <td class="td-color" :class="getBackground(index)">
                                {{ persianNumber(currentRegistration.toLocaleString()) }}
                            </td>
                            <td class="td-color" :class="getBackground(index)">
                                {{ persianNumber(currentExtend.toLocaleString()) }}
                            </td>
                            <td class="td-color" :class="getBackground(index)">
                                {{ persianNumber(currentTransfer.toLocaleString()) }}
                            </td>
                            <td :class="getBackground(index)">
                                <v-btn class="order-btn" href="/order/domain">سفارش</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-window-item>
            <v-window-item value="5">
                <v-table>
                    <thead id="theadborder">
                        <tr>
                            <th class="text-center no-border">پسوند دامنه</th>
                            <th class="text-center">ثبت دامنه</th>
                            <th class="text-center">تمدید دامنه</th>
                            <th class="text-center">انتقال دامنه</th>
                            <th class="text-center">سفارش</th>
                        </tr>
                    </thead>
                    <tbody id="tbodyborder">
                        <tr v-for="index in tldsTypes.international.length" :key="index">
                            {{
                                getTldInfo(tldsTypes.international[index - 1])
                            }}
                            <td dir="ltr" :class="getBackground(index)">
                                {{ `.${tldsTypes.international[index - 1]}` }}
                            </td>
                            <td class="td-color" :class="getBackground(index)">
                                {{ persianNumber(currentRegistration.toLocaleString()) }}
                            </td>
                            <td class="td-color" :class="getBackground(index)">
                                {{ persianNumber(currentExtend.toLocaleString()) }}
                            </td>
                            <td class="td-color" :class="getBackground(index)">
                                {{ persianNumber(currentTransfer.toLocaleString()) }}
                            </td>
                            <td :class="getBackground(index)">
                                <v-btn class="order-btn" href="/order/domain">سفارش</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-window-item>
            <v-window-item value="6">
                <v-table>
                    <thead id="theadborder">
                        <tr>
                            <th class="text-center no-border">پسوند دامنه</th>
                            <th class="text-center">ثبت دامنه</th>
                            <th class="text-center">تمدید دامنه</th>
                            <th class="text-center">انتقال دامنه</th>
                            <th class="text-center">سفارش</th>
                        </tr>
                    </thead>
                    <tbody id="tbodyborder">
                        <tr v-for="index in tldsTypes.country.length" :key="index">
                            {{
                                getTldInfo(tldsTypes.country[index - 1])
                            }}
                            <td dir="ltr" :class="getBackground(index)">
                                {{ `.${tldsTypes.country[index - 1]}` }}
                            </td>
                            <td class="td-color" :class="getBackground(index)">
                                {{ persianNumber(currentRegistration.toLocaleString()) }}
                            </td>
                            <td class="td-color" :class="getBackground(index)">
                                {{ persianNumber(currentExtend.toLocaleString()) }}
                            </td>
                            <td class="td-color" :class="getBackground(index)">
                                {{ persianNumber(currentTransfer.toLocaleString()) }}
                            </td>
                            <td :class="getBackground(index)">
                                <v-btn class="order-btn" href="/order/domain">سفارش</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-window-item>
        </v-window>
    </div>
</template>
<script lang="ts">
import { persianNumber } from "@/utilities";
import { defineComponent } from "vue";
export default defineComponent({
    setup(){
        return{
            persianNumber
        }
    },
    data: () => ({
        tab: null,
        tlds: [
            { tld: "com", registration: 603000, extend: 603000, transfer: 603000 },
            { tld: "ir", registration: 48000, extend: 48000 },
            { tld: "org", registration: 503000, extend: 503000, transfer: 503000 },
            { tld: "net", registration: 703000, extend: 703000, transfer: 703000 },
            { tld: "biz", registration: 603000, extend: 603000, transfer: 603000 },
            { tld: "work", registration: 48000, extend: 48000 },
            { tld: "gg", registration: 43000, extend: 53000, transfer: 53000 },
            { tld: "cc", registration: 18000, transfer: 28000 },
        ],
        tldsTypes: {
            commercial: ["com", "net", "org", "biz", "work"],
            cheap: [],
            round: [],
            national: ["ir"],
            international: ["com", "net", "org"],
            country: ["gg", "cc"],
        },
        tldType: "commercial",
        currentRegistration: undefined,
        currentExtend: undefined,
        currentTransfer: undefined,
    }),
    methods: {
        getTldInfo(mytld: string) {
            const searchTld = this.tlds.find((tld) => tld.tld == mytld);
            if (searchTld) {
                this.currentRegistration = searchTld.registration
                    ? searchTld.registration
                    : "-";
                this.currentExtend = searchTld.extend ? searchTld.extend : "-";
                this.currentTransfer = searchTld.transfer ? searchTld.transfer : "-";
            }
        },
        getBackground(index: number) {
            if (index % 2 == 0) {
                return "";
            } else {
                return "td-background";
            }
        },
    },
});
</script>
<style lang="scss">
.prices-bronze-customers-container {
  .order-btn {
    background: #4f80ff;
    border-radius: 25px;
    color: white;
    font-size: 14px;
    width: 100px;
    height: 30px;
  }
  .no-border {
    border-bottom: none;
  }
  .td-background {
    background: rgb(241, 241, 241);
  }
  #theadborder th {
    border-bottom: none;
    color: black;
    font-size: 15px;
  }
  #tbodyborder td {
    border-bottom: none;
    font-weight: 600;
    font-size: 16px;
  }
  .td-color {
    color: #4f80ff;
  }
  .tab-style {
    margin-left: 10px;
    font-weight: 900;
    padding-bottom: 15px;
  }
  @media (max-width: 600px) {
    #theadborder th {
      font-size: 12px;
    }
    #tbodyborder td {
      font-size: 14px;
    }
    .order-btn {
      font-size: 11px;
      width: 80px;
      height: 30px;
    }
    .tab-style {
      font-size: 12px;
      margin-left: -13px;
      font-weight: 600;
    }
  }
}
</style>