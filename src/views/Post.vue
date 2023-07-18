<template>
    <v-locale-provider rtl>
        <Navbar @clickOnNavBtn="navigation = true" />
        <Navigation v-model="navigation" />
        <GeneralHeader>
            <template v-slot:title>
                <p>بلاگ</p>
            </template>
            <template v-slot:content>
                <p>صفحه اصلی > بلاگ</p>
            </template>
        </GeneralHeader>
        <div class="general-background">
            <div class="ma-15" v-if="!post && !error" align="center">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </div> 
            <v-snackbar v-model="serverSnackbar" multi-line>خطای سرور
                <template v-slot:actions>
                    <v-btn color="red" variant="text" @click="serverSnackbar = false">
                    بستن
                    </v-btn>
                </template>
            </v-snackbar>
            <v-container class="post-container" v-if="post">
                <div class="title">{{ post.post.title }}</div>
                <v-row class="mb-4">
                    <v-col sm="8" cols="6">
                        <v-row>
                            <v-col lg="2" md="3" cols="12">
                                <p class="text-grey-darken-1">
                                <v-icon class="ml-1" color="#4f80ff">mdi-account-outline</v-icon>
                                {{ post.post.author.name }}
                                </p>
                            </v-col>
                            <v-col lg="2" md="3" cols="12">
                                <p class="text-grey-darken-1">
                                <v-icon class="ml-1" color="#4f80ff">mdi-calendar-month-outline</v-icon>
                                {{ new Date(post.post.date).toLocaleDateString('fa-IR') }}
                                </p>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col sm="4" cols="6" class="align">
                        <v-row>
                            <v-col lg="4" md="5" cols="12" class="mr-auto" align="left">
                                <span>اشتراک گذاری در</span>
                            </v-col>
                            <v-col lg="4" md="5" cols="12" align="left">
                                <v-btn variant="text" density="compact" rounded="pill" color="primary" icon="mdi-pinterest" class="sm-btn d-inline"></v-btn>
                                <v-btn variant="text" density="compact" rounded="pill" color="primary" icon="mdi-twitter" class="sm-btn"></v-btn>
                                <v-btn variant="text" density="compact" rounded="pill" color="primary" icon="mdi-facebook" class="sm-btn"></v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <p v-html="post.post.content"></p>
                <div v-if="post.categories.length>0" class="mt-5">
                    <v-btn v-for="index in post.categories.length" :key="index" variant="flat" rounded="pill" color="#e9efff" class="letter-spacing-btn ma-1 px-5" href="#">{{ post.categories[index-1].title }}</v-btn>
                </div>
                
                <div class="my-10">
                    <span>اشتراک گذاری در</span>
                    <v-btn variant="text" density="compact" rounded="pill" color="primary" icon="mdi-pinterest" class="sm-btn d-inline"></v-btn>
                    <v-btn variant="text" density="compact" rounded="pill" color="primary" icon="mdi-twitter" class="sm-btn"></v-btn>
                    <v-btn variant="text" density="compact" rounded="pill" color="primary" icon="mdi-facebook" class="sm-btn"></v-btn>
                </div>
                <v-divider :thickness="2"></v-divider>
                <div class="mt-8">
                    <p class="comments-title mb-6">نظرات ({{ post.comments.length }})</p>
                    <div v-if="post.comments.length>0">
                        <v-row class="my-10" v-for="comment in post.comments.length" :key="comment">
                                <v-col md="1" cols="2" v-if="comment%2!=0" align="left">
                                    <v-img v-if="post.comments[comment-1].author.avatar" class="rounded-circle"  :src="post.comments[comment-1].author.avatar" width="60px"></v-img>
                                    <v-img v-if="!post.comments[comment-1].author.avatar" class="rounded-circle"  :src="defaultUserImage" width="60px"></v-img>
                                </v-col>
                                <v-col md="11" cols="10" class="comment-frame" v-if="comment%2!=0">
                                    <p class="comment-author">{{post.comments[comment-1].author.name}}</p>
                                    <p class="text-grey-darken-1">{{ new Date(post.comments[comment-1].date).toLocaleDateString('fa-IR')}}</p>
                                    <p>{{post.comments[comment-1].content}}</p>
                                    <v-btn variant="text" rounded="pill" color="primary" class="letter-spacing-btn float-left" prepend-icon=" mdi-comment-multiple-outline" href="#">پاسخ دادن</v-btn>
                                </v-col>
                                <v-col md="11" cols="10" class="comment-frame" v-if="comment%2==0">
                                    <p class="comment-author">{{post.comments[comment-1].author.name}}</p>
                                    <p class="text-grey-darken-1">{{ new Date(post.comments[comment-1].date).toLocaleDateString('fa-IR')}}</p>
                                    <p>{{post.comments[comment-1].content}}</p>
                                    <v-btn variant="text" rounded="pill" color="primary" class="letter-spacing-btn float-left" prepend-icon=" mdi-comment-multiple-outline" href="#">پاسخ دادن</v-btn>
                                </v-col>
                                <v-col md="1" cols="2" v-if="comment%2==0">
                                    <v-img v-if="post.comments[comment-1].author.avatar" class="rounded-circle"  :src="post.comments[comment-1].author.avatar" width="60px"></v-img>
                                    <v-img v-if="!post.comments[comment-1].author.avatar" class="rounded-circle"  :src="defaultUserImage" width="60px"></v-img>
                                </v-col>
                        </v-row>
                    </div>
                </div>
                <v-form @submit.prevent="onSubmit"  v-model="valid" class="mb-15">
                    <div class="form-title">افزودن دیدگاه</div>
                    <div>آدرس ایمیل شما منتشر نخواهد شد. قسمت های ضروری که با <span class="mr-1 star-color">*</span> مشخص شده اند را کامل کنید. </div>
                    <div class="mt-8 mb-4">
                    <p class="input-title">دیدگاه شما<span class="mr-1 star-color">*</span></p>
                    <v-textarea
                        class="my-3"
                        rows="2"
                        v-model="comment"
                        variant="outlined"
                        :rules="commentRules">
                    </v-textarea>
                    </div>
                    <v-row>
                        <v-col sm="4" cols=12>
                            <p class="input-title">نام<span class="mr-1 star-color">*</span></p>
                            <v-text-field
                                variant="outlined"
                                class="my-3"
                                v-model="name"
                                :rules="nameRules"
                                required/>
                        </v-col>
                        <v-col sm="4" cols=12>
                            <p class="input-title">ایمیل<span class="mr-1 star-color">*</span></p>
                            <v-text-field
                                variant="outlined"
                                class="my-3"
                                v-model="email"
                                :rules="emailRules"
                                required/>
                        </v-col>
                        <v-col sm="4" cols=12>
                            <p class="input-title">وبسایت</p>
                            <v-text-field
                            variant="outlined"
                            class="my-3"
                            v-model="site"
                            required/>
                        </v-col>
                    </v-row>
                    <div class="btn-align">
                        <v-btn
                            :loading="loading"
                            variant="flat"
                            color="#4f80ff"
                            rounded="pill"
                            class="submit-btn"
                            height="42px"
                            type="submit"
                            prepend-icon="mdi-check">ارسال نظر
                        </v-btn>
                    </div>
                </v-form>
                <span class="related-article-title">مقاله های مرتبط</span>
                <v-divider :thickness="2" class="border-bottom"></v-divider>
                <v-row v-if="post.relatedPosts.length>0" class="mt-5 mb-12">
                    <v-col v-for="index in 3" :key="index" sm="4" cols="12" class="card px-7 mt-6">
                        <a :href="'/post/'+ post.relatedPosts[index-1].post.id" class="link">
                                <v-img class="img" :src="post.relatedPosts[index-1].post.picture"></v-img>
                                <div>
                                    <p class="card-title">{{ post.relatedPosts[index-1].post.title }}</p>
                                    <p class="card-content">{{ post.relatedPosts[index-1].post.description }}</p>
                                </div>
                                <v-row class="mt-1">
                                    <v-col sm="6" align="right">
                                        <p class="text-grey-darken-3">
                                        <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-account-outline</v-icon>
                                        {{ post.relatedPosts[index-1].post.author.name }}
                                        </p>
                                    </v-col>
                                    <v-col sm="6" align="right">
                                        <p class="text-grey-darken-3">
                                        <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-calendar-month-outline</v-icon>
                                        {{ new Date(post.relatedPosts[index-1].post.date).toLocaleDateString('fa-IR') }}
                                        </p>
                                    </v-col>
                                </v-row>
                            </a>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <GeneralFooter />
    </v-locale-provider> 
</template>
<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import GeneralHeader from "@/components/GeneralHeader.vue";
import Navigation from "@/components/Navigation.vue";
import GeneralFooter from "@/components/GeneralFooter.vue";
import DefaultUserImage from "@/assets/pics/unknownUser.jpg";

import { defineComponent } from "vue";
import { call } from "@/mocks/API";
import {getPost} from "@/mocks/Blog"

export default defineComponent({
    components: {
        Navbar,
        GeneralHeader,
        Navigation,
        GeneralFooter,
    },
    data() {
        return {
            navigation: false,
            serverSnackbar:false,
            valid:false,
            error:false,
            loading:false,
            post:undefined,
            defaultUserImage:DefaultUserImage,
            name:"",
            email:"",
            site:"",
            comment:"",
            commentRules:[
                (value) => {
                if (value) return true;
                return "وارد کردن دیدگاه الزامی است.";
                },
            ],
            nameRules: [
                (value) => {
                if (value) return true;
                return "وارد کردن نام الزامی است.";
                },
                (value) => {
                if (value?.length <= 20) return true;
                return "نام شما باید کمتر از 20 کاراکتر باشد.";
                },
            ],
            emailRules: [
                (value) => {
                if (value) return true;
                return "وارد کردن ایمیل الزامی است.";
                },
                (value) => {
                if (
                    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                    value
                    )
                ) {
                    return "ایمیل وارد شده معتبر نمی باشد";
                }
                return true;
                },
            ],
        }
    },
    methods:{
        onSubmit() {
            if (this.loading || !this.valid) {
                return;
            }
            this.loading = true;
            setTimeout(()=>{
                this.loading = false;
            }
            ,2000)
        }
    },
    async mounted(){
        try {
            const response = await call(getPost,[this.$route.params.postId]);
            this.post = response;
        } catch (e) {
            this.serverSnackbar = true;
            this.error = true;
        }
    }
})
</script>
<style lang="scss">
    .post-container{
        font-size: 13px;
        color:#242849;
        .title{
            font-size: 25px;
            font-weight: 900;
            text-align: center;
            margin: 60px auto 50px auto;
            color: #242849;
        }
        .sm-btn{
            font-size: 15px;
            margin-right: 5px;
        }
        .post-img{
            margin: auto;
        }
        .comments-title{
            color: #2b2f4f;
            font-weight: 900;
            font-size: 18px;
        }
        .comment-frame{
            background-color: #e9efff;
            border-radius: 3px;
            padding: 20px 30px;
            line-height: 30px;
        }
        .comment-author{
            color: #2b2f4f;
            font-weight: 900;
            font-size: 14px;
        }
        .letter-spacing-btn{
            letter-spacing: 0;
        }
        .form-title{
            color: #2b2f4f;
            font-weight: 900;
            font-size: 18px;
            margin: 25px auto 8px auto;
        }
        .input-title {
            font-size: 13px;
            font-weight: 400;
            color:#5c5b5c;
        }
        .star-color {
            color: #ff9534;
        }
        .submit-btn {
            width: 160px;
            padding: 8px;
            text-align: center;
            font-size: 15px;
            font-weight: 800;
            margin-top: 15px;
            margin-bottom: 30px;
            font-family: IRANSans;
            color: white;
            letter-spacing: 0;
        }
        .related-article-title{
            color: #2b2f4f;
            font-weight: 900;
            font-size: 18px;
            margin-bottom: 15px;
            padding-bottom: 7px ;
            border-bottom:2px solid #2b2f4f;
        }
        .border-bottom{
            margin-top: 8px;
        }
        .card {
            box-shadow: none;
            padding: 15px;
            .img {
                border-radius: 10px;
            }
            .card-title {
                font-size: 16px;
                font-weight: 800;
                color: #242849;
                text-align: right;
                margin-top: 20px;
            }
            .card-content {
                font-size: 13px;
                color: #31486c;
                text-align: right;
                margin-top: 15px;
                line-height: 25px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                color: #575757;
            }
        }
    .link {
        text-decoration: none;
    }
        @media(max-width:600px) {
            .btn-align{
                text-align: center;
            }
            .submit-btn {
                margin-right: auto;
            }
        }
    }
</style>