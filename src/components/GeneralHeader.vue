<template>
  <div class="contact-us-container">
    <div class="title"><slot name="title"></slot></div>
    <slot name="content"></slot>
  </div>
</template>
  <style lang="scss">
.contact-us-container {
  background: #4f80ff;
  text-align: center;
  padding: 50px 0px;
  color: white;
  font-size: 14px;
  line-height: 40px;
  .title {
    font-size: 30px;
    font-weight: 900;
  }
}
</style>