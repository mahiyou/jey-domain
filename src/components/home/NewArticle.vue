<template>
    <v-container class="new-articles-container">
        <v-row>
            <v-col md="6" cols="12">
                <p class="title">جدیدترین مقالات</p>
                <p class="content">
                    اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید.
                </p>
                <a href="#" class="link">
                    <v-card class="card">
                        <v-img :src="articles[0].picture" width="530px">
                            <v-card class="inside-card">
                                <p class="mb-3">{{ articles[0].title }}</p>
                                <v-row>
                                    <v-col cols="6">
                                        <p class="text-grey-darken-1">
                                            <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-account-outline</v-icon>
                                            {{ articles[0].author.name }}
                                        </p>
                                    </v-col>
                                    <v-col cols="6">
                                        <p class="text-grey-darken-1">
                                            <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-calendar-month-outline</v-icon>
                                            {{ articles[0].date }}
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-img>
                    </v-card>
                </a>
            </v-col>
            <v-col md="6" cols="12">
                <a href="#" class="link">
                    <v-card class="side-card card-responsive-mood">
                        <v-row>
                            <v-col sm="4" cols="12">
                                <v-img :src="articles[0].picture"></v-img>
                            </v-col>
                            <v-col sm="8" cols="12">
                                <p class="mb-4">
                                    {{ articles[0].title }}
                                </p>
                                <v-row>
                                    <v-col cols="6">
                                        <p class="text-grey-darken-1">
                                            <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-account-outline</v-icon>
                                            {{ articles[0].author.name }}
                                        </p>
                                    </v-col>
                                    <v-col cols="6">
                                        <p class="text-grey-darken-1">
                                            <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-calendar-month-outline</v-icon>
                                            {{ articles[0].date }}
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </a>
                <a
                    href="#"
                    class="link"
                    v-for="article in articles.length - 1"
                    :key="article">
                    <v-card class="side-card">
                        <v-row>
                            <v-col sm="4" cols="12">
                                <v-img :src="articles[article].picture"></v-img>
                            </v-col>
                            <v-col sm="8" cols="12">
                                <p class="mb-4">{{ articles[article].title }}</p>
                                <v-row>
                                    <v-col cols="6">
                                        <p class="text-grey-darken-1">
                                            <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-account-outline</v-icon>
                                            {{ articles[article].author.name }}
                                        </p>
                                    </v-col>
                                    <v-col cols="6">
                                        <p class="text-grey-darken-1">
                                            <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-calendar-month-outline</v-icon>
                                            {{ articles[article].date }}
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </a>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts">
import { defineComponent} from "vue";
import DefaultBlogImage from "@/assets/pics/blog1.png";
export default defineComponent({
    data(){
        return{
            articles:[
                {
                    id:1,
                    permalink:"",
                    title:"۱. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.",
                    author:{id:1 ,name:"کاربر تست"},
                    picture: DefaultBlogImage,
                    date:"۲۶ خرداد ۱۴۰۲"
                },
                {
                    id:2,
                    permalink:"",
                    title:"۲. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.",
                    author:{id:"2" ,name:"کاربر تست"},
                    picture: DefaultBlogImage,
                    date:"۲۶ خرداد ۱۴۰۲"
                },
                {
                    id:3,
                    permalink:"",
                    title:"۳. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.",
                    author:{id:"2" ,name:"کاربر تست"},
                    picture: DefaultBlogImage,
                    date:"۲۶ خرداد ۱۴۰۲"
                },
                {
                    id:4,
                    permalink:"",
                    title:"۴. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.",
                    author:{id:"2" ,name:"کاربر تست"},
                    picture: DefaultBlogImage,
                    date:"۲۶ خرداد ۱۴۰۲"
                }
            ]
        };
    }
});
</script>
<style lang="scss">
.new-articles-container {
  max-width: 90%;
  margin-bottom: 50px;
  .title {
    font-weight: 900;
    font-size: 28px;
    margin-bottom: 12px;
  }
  .content {
    font-size: 14px;
    margin-bottom: 32px;
  }
  .card {
    box-shadow: none;
    margin: auto;
  }
  .side-card {
    margin: 16px;
    max-width: 700px;
    padding: 14px;
    box-shadow: none;
    font-size: 14px;
  }
  .inside-card {
    width: 65%;
    bottom: 0px;
    box-shadow: none;
    font-size: 14px;
    position: absolute;
    bottom: 0px;
    padding: 20px;
    border-radius: 0px;
  }
  .link {
    text-decoration: none;
  }
  .card-responsive-mood {
    display: none;
  }
  @media (max-width: 960px) {
    .side-card {
      margin: auto;
      margin-bottom: 10px;
    }
    .card {
      display: none;
    }
    .card-responsive-mood {
      display: block;
    }
  }
  @media (max-width: 600px) {
    .title {
      text-align: center;
    }
  }
  @media (max-width: 500px) {
    max-width: 100%;
    padding: 20px;
  }
}
</style>