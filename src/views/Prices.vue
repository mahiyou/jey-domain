<template>
    <v-locale-provider rtl>
        <Navbar @clickOnNavBtn="navigation = true" />
        <Navigation v-model="navigation" />
        <GeneralHeader>
            <template v-slot:title>
                <p>تعرفه ها</p>
            </template>
            <template v-slot:content>
                <p>صفحه اصلی > تعرفه ها</p>
            </template>
        </GeneralHeader>
        <div class="general-background">
            <div class="bg-white mb-10">
                <v-container class="domain-prices-container">
                    <v-row class="mb-2">
                        <v-col md="7" cols="12">
                            <p class="header-title">
                                ثبت دامنه اولین قدم برای حضور در ؟؟؟
                            </p>
                            <div class="header-content">
                                <p>
                                    اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن
                                    های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا
                                    طرح‌نما متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن
                                    فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و
                                    گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح استفاده
                                    می‌کنند.
                                </p>
                                <p>- گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن
                                    های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. </p>
                                <p>- گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن
                                    های برخورده اید که با نام لورم</p>
                                <p>- گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن </p>
                            </div>
                        </v-col>
                        <v-col md="5" cols="12">
                            <v-img src="@/assets/pics/world.svg" width="430px" class="center">
                            </v-img>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
            <DomainRegistration :backgroundColor="DomainRegistrationBgColor"
                                :selectDomainBackGround="DomainRegistrationSelectDomainBg" />
            <Prices />
            <BuyDomain />
            <v-container class="domain-prices-container">
                <div class="domain-type">
                    <p class="general-title">انواع دامنه</p>
                    <p class="text-center mb-12">با انواع دامنه های ملی و بین المللی بیشتر آشنا شوید.</p>
                    <v-row class="bg-white px-3 mb-md-8 mb-15" justify="center" align="center">
                        <v-col md="2" sm="9" cols="12">
                            <div class="frame">Domain.ir</div>
                        </v-col>
                        <v-col md="10" sm="9" cols="12">
                            <p class="title">دامنه های ملی</p>
                            <p class="justify-center">تمامی دامین هایی که انتهای آنها پسوند <span dir="ltr">.ir</span>
                                میباشد را دامین های ایرانی مینامیم. این دامین ها با قیمت های بسیار مقرون به صرفه و توسط
                                سازمان فیزیک نظری ویا همان ایرنیک که تنها مرجع ثبت دامنه های ایرانی میباشد، ثبت میشوند.</p>
                        </v-col>
                    </v-row>
                    <v-row class="bg-white mb-md-8 mb-15 px-3" justify="center" align="center">
                        <v-col md="2" sm="9" cols="12">
                            <div class="frame">Domain.com</div>
                        </v-col>
                        <v-col md="10" sm="9" cols="12">
                            <p class="title">دامنه های بین المللی</p>
                            <p class="justify-center">تمامی دامین های بین المللی خود را با همکاری شرکت هگزونت (hexonet) که
                                شرکتی با سابقه و آلمانی می باشد به ثبت میرساند. پیشنهاد می شود همواره دامین اصلی کسب و کار
                                خود را از بین دامین های بین المللی انتخاب کنید. پسوند های بین المللی شامل <span
                                    dir="ltr">.org , .net , .com</span> و... می باشد.</p>
                        </v-col>
                    </v-row>
                    <v-row class="bg-white mb-md-8 mb-15 px-3" justify="center" align="center">
                        <v-col md="2" sm="9" cols="12">
                            <div dir="ltr" class="frame">دامین.com</div>
                        </v-col>
                        <v-col md="10" sm="9" cols="12">
                            <p class="title">دامنه های حروف فارسی و یا IDN</p>
                            <p class="justify-center">چنانچه علاقه مند به خرید دامنه با حروف فارسی و پسوند <span
                                dir="ltr">.com , .net</span> هستید، جی دامین این امکان را با همکاری شرکن هگزونت آلماه
                                برایتان مهیا کرده است. دامین های IDN مانند نمونه زیر میباشد: <span dir="ltr"> www.جی
                                    دامین.com</span></p>
                        </v-col>
                    </v-row>
                </div>
                <div class="steps">
                    <p class="general-title mb-7">مراحل ثبت تمدید و انتقال دامنه ها</p>
                    <v-row justify="center">
                        <v-col md="6" sm="10" cols="12" class="px-0" align="center">
                            <div class="frame">
                                <p class="title">ثبت و تمدید دامنه های ملی و بین المللی</p>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                                    است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                    فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                                    کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                                    طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
                                    فرهنگ پیشرو واری مورد نیاز شامل .</p>
                            </div>
                        </v-col>
                        <v-col md="6" sm="10" cols="12" class="px-0" align="center">
                            <div class="frame">
                                <p class="title">ثبت و تمدید دامنه های ملی و بین المللی</p>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                                    است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                    فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                                    کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                                    طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
                                    فرهنگ پیشرو واری مورد نیاز شامل .</p>
                            </div>
                        </v-col>
                    </v-row>
                </div>
                <div class="tips">
                    <p class="general-title">نکات مهم در هنگام ثبت دامنه</p>
                    <p class="text-center mb-12">نکات زیر شما را در انتخاب و ثبت سریع تر دامنه کمک خواهند کرد.</p>
                    <p class="my-4"><v-icon class="ml-2" color="primary">mdi-check-circle-outline</v-icon>کاراکترهای مجازی
                        که می تواند در نام دامنه استفاده شود عبارتند از حروف a تا z، ارقام 0 تا 9 و خط تیره ( - )</p>
                    <p class="my-4"><v-icon class="ml-2" color="primary">mdi-check-circle-outline</v-icon>نام دامنه نمی
                        تواند با خط تیره ( - ) شروع شود یا خاتمه یابد.</p>
                    <p class="my-4"><v-icon class="ml-2" color="primary">mdi-check-circle-outline</v-icon>نام دامنه باید
                        حداقل از 3 کاراکتر نشکیل شده باشد.</p>
                    <p class="my-4"><v-icon class="ml-2" color="primary">mdi-check-circle-outline</v-icon>ثبت دامنه با حروف
                        فارسی مانند (com.علی) فقط برای دامنه های این لیست ممکن است.</p>
                </div>
            </v-container>
            <Questions />
            <v-container class="domain-prices-container">
                <div class="more-questions">
                    <p class="title">هنوز هم سوال دارید؟</p>
                    <v-row>
                        <v-col md="10" cols="12">
                            <p>اگر هنوز سوالاتی دارید که پاسخ آن ها را در اینجا پیدا نکردید می توانید با ثبت نام در سایت در
                                قسمت پشتیبانی از کارشناسان ما بپرسید و راهنمایی بگیرید!</p>
                        </v-col>
                        <v-col md="2" cols="12" align="center">
                            <v-btn variant="flat" rounded="pill" color="primary" class="suport-btn"
                                   :to="{ name: 'contact-us' }">پشتیبانی</v-btn>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </div>
        <GeneralFooter />
    </v-locale-provider>
</template>
<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import GeneralHeader from "@/components/GeneralHeader.vue";
import Navigation from "@/components/Navigation.vue";
import DomainRegistration from "@/components/home/DomainRegistration.vue";
import Prices from "@/components/home/Prices.vue";
import BuyDomain from "@/components/home/BuyDomain.vue";
import Questions from "@/components/home/Questions.vue";
import GeneralFooter from "@/components/GeneralFooter.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        Navbar,
        GeneralHeader,
        Navigation,
        DomainRegistration,
        Prices,
        BuyDomain,
        Questions,
        GeneralFooter,
    },
    data() {
        return {
            navigation: false,
            DomainRegistrationBgColor: "#fafbff",
            DomainRegistrationSelectDomainBg: "primary"
        };
    }
});
</script>
<style lang="scss">
.general-background {
    background: #fafbff;
}

.domain-prices-container {
    .header-title {
        font-size: 30px;
        font-weight: 900;
        margin-bottom: 20px;
        padding-top: 40px;
    }

    .header-content {
        font-size: 14px;
        line-height: 30px;
    }

    .center {
        margin: auto;
    }

    .steps {
        margin-bottom: 70px;

        .frame {
            background: white;
            border-radius: 20px;
            padding: 30px 50px;
            text-align: center;
            width: 90%;
            line-height: 30px;
            font-size: 13px;

            .title {
                font-size: 15px;
                font-weight: 700;
                margin-bottom: 30px;
            }
        }
    }

    .domain-type {
        margin-bottom: 70px;

        .frame {
            background-color: #4f80ff;
            border-radius: 20px;
            margin: 5px 23px;
            padding: 45px 1px;
            font-size: 18px;
            font-weight: 900;
            color: white;
            text-align: center;
        }

        .title {
            font-size: 19px;
            font-weight: 900;
            margin-bottom: 10px;
        }
    }

    .tips {
        margin-bottom: 70px;
        line-height: 30px;
    }

    .more-questions {
        background: #e9efff;
        margin: -50px auto 30px auto;
        padding: 30px;
        line-height: 30px;

        .title {
            font-weight: 900;
        }

        .suport-btn {
            letter-spacing: 0px;
            font-weight: 800;
            font-size: 13px;
            padding: 9px 40px;
            height: 40px;
        }
    }

    .general-title {
        font-weight: 900;
        font-size: 28px;
        margin-bottom: 10px;
        text-align: center;
    }

    @media(max-width:600px) {
        .steps {
            margin-bottom: 70px;

            .frame {
                padding: 30px 15px;
            }
        }

        .header-title {
            text-align: center;
        }

    }

    @media(max-width:1279.5px) {
        .domain-type {
            margin-bottom: 70px;

            .frame {
                margin: 5px;
            }
        }
    }

    @media(max-width:960px) {
        .domain-type {
            .frame {
                margin: 0px;
                padding: 15px 0px;
            }
        }
    }
}</style>