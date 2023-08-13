<template>
  <v-container class="form-con">
    <v-row>
      <v-col md="5" cols="12">
        <div class="form-style">
          <div class="title">پیامی برای ما بگذارید!</div>
          <v-form>
            <div>
              <p class="input-title">نام و نام خانوادگی</p>
              <input class="inputs" type="text" />
            </div>
            <div>
              <p class="input-title">شماره تماس</p>
              <input
                dir="ltr"
                class="inputs"
                type="phone"
                placeholder="+989120000000"
              />
            </div>
            <div>
              <p class="input-title">چگونه می توانیم به شما کمک کنیم؟</p>
              <textarea class="inputs" rows="4" placeholder="پیام شما">
              </textarea>
            </div>
            <input class="submit-btn" type="submit" value="ارسال پیام" />
          </v-form>
        </div>
      </v-col>
      <v-col md="7" cols="12">
        <v-img
          src="@/assets/pics/man-contactus.svg"
          class="contact-img"
          max-width="640">
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss">
.form-con {
  max-width: 95%;
  @media (max-width: 500px) {
    max-width: 100%;
  }
  .form-style {
    margin: 20px;
    background: white;
    border-radius: 10px;
    padding: 50px 20px;
  }
  .title {
    font-size: 25px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 40px;
  }
  .input-title {
    font-size: 14px;
    font-weight: 600;
  }
  .inputs {
    border: 1px solid #a2a2a2;
    color: #a2a2a2;
    font-size: 14px;
    border-radius: 5px;
    width: 100%;
    padding: 10px;
    margin: 15px 0px 35px 0px;
  }
  .submit-btn {
    width: 100%;
    color: white;
    padding: 10px;
    border-radius: 50px;
    text-align: center;
    font-size: 15px;
    background: #4f80ff;
    margin-top: 15px;
  }
  .contact-img {
    margin: 90px auto 10px auto;
  }
  @media (max-width: 960px) {
    .contact-img {
      margin: 0px auto 40px auto;
    }
    .form-style {
      max-width: 500px;
      margin: auto;
    }
  }
}
</style>