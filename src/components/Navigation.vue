<template>
  <v-navigation-drawer
    :model-value="modelValue"
    @update:model-value="onUpdate"
    temporary
    class="transition nav-container">
    <v-list density="compact" nav>
      <div class="img-logo">
        <v-img src="@/assets/pics/JeyDomain.svg"></v-img>
      </div>
      <v-list-item
        prepend-icon="mdi-home"
        title="صفحه اصلی"
        value="home"
        href="#">
      </v-list-item>
      <v-list-item
        prepend-icon="mdi-currency-usd"
        title="تعرفه ها"
        value="prices"
        href="#">
      </v-list-item>
      <v-list-item
        prepend-icon="mdi-chat-question-outline"
        title="سوالات متداول"
        value="questions"
        href="#">
      </v-list-item>
      <v-list-item
        prepend-icon="mdi-post-outline"
        title="بلاگ"
        value="blog"
        href="#">
      </v-list-item>
      <v-divider></v-divider>
      <div class="mr-2">
        <v-list-item title="ورود" value="log-in" href="#"></v-list-item>
        <v-list-item
          title="ثبت نام"
          value="sign-up"
          href="#"
          class="signup-btn">
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      require: true,
    },
  },
  emits: ["update:model-value"],
  methods: {
    onUpdate(newValue) {
      this.$emit("update:model-value", newValue);
    },
  },
});
</script>
<style lang="scss">
.nav-container {
  font-family: IRANSans;
  .transition {
    transition: 1s;
  }
  .signup-btn {
    background: #4f80ff;
    border-radius: 25px;
    color: white;
    padding: 10px;
    text-align: center;
    width: 80px;
  }
  .img-logo {
    width: 120px;
    margin: 20px 15px;
  }
}
</style>