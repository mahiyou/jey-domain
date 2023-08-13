<template>
  <v-container class="prices-container">
    <div class="prices-title">تعرفه ها</div>
    <div class="prices-content">پسوندهای دامنه</div>
    <v-tabs
      v-model="tab"
      show-arrows
      color="#4f80ff"
      align-tabs="center"
      style="border-bottom: 1px solid rgb(215, 215, 215)"
      class="mb-6"
    >
      <v-tab :value="1" class="tab-style">دامنه های تجاری</v-tab>
      <v-tab :value="2" class="tab-style">دامنه های ارزان قیمت</v-tab>
      <v-tab :value="3" class="tab-style">دامنه های رند</v-tab>
      <v-tab :value="4" class="tab-style">دامنه های ملی</v-tab>
      <v-tab :value="5" class="tab-style">دامنه های بین المللی</v-tab>
      <v-tab :value="6" class="tab-style">دامنه های کشوری</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="n in 6" :key="n" :value="n">
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
            <tr>
              <td dir="ltr" class="td-background">.com</td>
              <td class="td-background td-color">۶۰۳,۰۰۰</td>
              <td class="td-background td-color">۶۰۳,۰۰۰</td>
              <td class="td-background td-color">۶۰۳,۰۰۰</td>
              <td class="td-background">
                <v-btn class="order-btn" href="/order/domain">سفارش</v-btn>
              </td>
            </tr>
            <tr>
              <td dir="ltr">.ir</td>
              <td class="td-color">۴۸,۰۰۰</td>
              <td class="td-color">۴۸,۰۰۰</td>
              <td class="td-color">۴۸,۰۰۰</td>
              <td><v-btn class="order-btn" href="/order/domain">سفارش</v-btn></td>
            </tr>
            <tr>
              <td dir="ltr" class="td-background">.com</td>
              <td class="td-background td-color">۶۰۳,۰۰۰</td>
              <td class="td-background td-color">۶۰۳,۰۰۰</td>
              <td class="td-background td-color">۶۰۳,۰۰۰</td>
              <td class="td-background">
                <v-btn class="order-btn" href="/order/domain">سفارش</v-btn>
              </td>
            </tr>
            <tr>
              <td dir="ltr">.ir</td>
              <td class="td-color">۴۸,۰۰۰</td>
              <td class="td-color">۴۸,۰۰۰</td>
              <td class="td-color">۴۸,۰۰۰</td>
              <td><v-btn class="order-btn" href="/order/domain">سفارش</v-btn></td>
            </tr>
            <tr>
              <td dir="ltr" class="td-background">.com</td>
              <td class="td-background td-color">۶۰۳,۰۰۰</td>
              <td class="td-background td-color">۶۰۳,۰۰۰</td>
              <td class="td-background td-color">۶۰۳,۰۰۰</td>
              <td class="td-background">
                <v-btn class="order-btn" href="/order/domain">سفارش</v-btn>
              </td>
            </tr>
            <tr>
              <td dir="ltr">.ir</td>
              <td class="td-color">۴۸,۰۰۰</td>
              <td class="td-color">۴۸,۰۰۰</td>
              <td class="td-color">۴۸,۰۰۰</td>
              <td><v-btn class="order-btn" href="/order/domain">سفارش</v-btn></td>
            </tr>
            <tr>
              <td dir="ltr" class="td-background">.com</td>
              <td class="td-background td-color">۶۰۳,۰۰۰</td>
              <td class="td-background td-color">۶۰۳,۰۰۰</td>
              <td class="td-background td-color">۶۰۳,۰۰۰</td>
              <td class="td-background">
                <v-btn class="order-btn" href="/order/domain">سفارش</v-btn>
              </td>
            </tr>
            <tr>
              <td dir="ltr">.ir</td>
              <td class="td-color">۴۸,۰۰۰</td>
              <td class="td-color">۴۸,۰۰۰</td>
              <td class="td-color">۴۸,۰۰۰</td>
              <td><v-btn class="order-btn" href="/order/domain">سفارش</v-btn></td>
            </tr>
          </tbody>
        </v-table>
      </v-window-item>
    </v-window>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    tab: null,
  }),
};
</script>
<style lang="scss">
.prices-container {
  max-width: 90%;
  text-align: center;
  margin-bottom: 50px;
  .prices-title {
    color: #4f80ff;
    font-size: 12px;
  }
  .prices-content {
    font-weight: 900;
    font-size: 28px;
    margin-top: 15px;
    margin-bottom: 25px;
  }
  .order-btn {
    background: #4f80ff;
    border-radius: 25px;
    color: white;
    letter-spacing: 0;
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
    font-size: 17px;
  }
  .td-color {
    color: #4f80ff;
  }
  .tab-style {
    font-family: IRANSans;
    letter-spacing: 0;
    margin-left: 10px;
    font-weight: 900;
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
  @media (max-width: 500px) {
    max-width: 100%;
    padding: 20px;
  }
}
</style>