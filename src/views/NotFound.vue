<template>
    <v-container class="not-found my-15" align="center">
        <div class="rounded-circle circle">
            <div class="text-primary title">404</div> 
            <div class="content">
                <p class="text-primary mb-4 title-of-content">صفحه ی مورد نظر پیدا نشد!</p>
                <p class="mb-5">متاسفیم که صفحه مورد نظر شما پیدا نشد. ممکن است که به آدرس دیگری منتقل شده یا بطور کل حذف شده باشد.</p> 
                <v-btn variant="flat" color="primary" rounded="pill" prepend-icon="mdi-home" class="back-btn" :to="{ name: 'home' }">بازگشت به صفحه ی اصلی</v-btn>
            </div>
            <v-img class="img" src="@/assets/pics/404.svg" max-width="460px"></v-img>
        </div>
    </v-container>
</template>
<style lang="scss">
.not-found{
    .title{
        font-size: 180px;
        font-weight: 900;
        position: absolute;
        top:-100px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .circle{
        max-width: 550px;
        height: 400px;
        background: #e7eeff;
        position: relative;
    }
    .img{
        position: absolute;
        bottom: -20px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .back-btn{
        font-weight: 900;
    }
    .content{
        position: absolute;
        width: 80%;
        left: 0;
        right: 0;
        top:30%;
        margin: 0 auto;
        .title-of-content{
            font-weight: 900;
            font-size: 20px;
        }
    }
    @media(max-width:600px){
        .title{
            font-size: 130px;
            top:-75px;
        }
        .back-btn{
            font-size: 12px;
            }
    }

}
</style>
