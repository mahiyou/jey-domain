<template>
  <v-container class="toolbar-container">
    <v-toolbar density="compact" color="white">
      <v-row>
        <v-col sm="2" cols="6">
          <div class="logo-size">
            <v-img
              FIXME
              src="@/assets/pics/JeyDomain.svg"
              class="mt-4 mt-sm-2"
            ></v-img>
          </div>
        </v-col>
        <v-col sm="7" cols="1">
          <div class="visible">
            <v-row>
              <v-col cols="2">
                <v-btn class="toolbar-btn" :to="{ name: 'home' }">
                  صفحه ی اصلی
                </v-btn>
              </v-col>
              <v-col cols="2">
                <v-btn class="toolbar-btn" href="#"> تعرفه ها </v-btn>
              </v-col>
              <v-col cols="2">
                <v-btn class="toolbar-btn" href="#">
                  سوالات متداول
                </v-btn>
              </v-col>
              <v-col cols="2">
                <v-btn class="toolbar-btn" :to="{ name: 'contact-us' }">
                  تماس با ما
                </v-btn>
              </v-col>
              <v-col cols="2">
                <v-btn class="toolbar-btn" href="#"> بلاگ </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col sm="3" cols="5">
          <v-app-bar-nav-icon
            class="float-left nav-icon-visible"
            @click="$emit('clickOnNavBtn')"
          ></v-app-bar-nav-icon>
          <div class="float-left visible">
            <v-btn class="toolbar-btn" href="#"> ورود </v-btn>
            <v-btn
              class="toolbar-btn"
              color="primary"
              rounded="xl"
              variant="flat"
              href="#"
            >
              ثبت نام
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-toolbar>
  </v-container>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["clickOnNavBtn"],
});
</script>
<style lang="scss">
.toolbar-container {
  .logo-size {
    width: 110px;
  }
  .toolbar-btn {
    letter-spacing: 0;
    font-size: 12px;
  }
  .visible { // FIXME
    display: block;
  }
  .nav-icon-visible {
    display: none;
  }
  @media (max-width: 960px) {
    .visible {
      display: none;
    }
    .nav-icon-visible {
      display: block;
    }
  }
}
</style>