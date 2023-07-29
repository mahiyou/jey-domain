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
            <v-container class="blog-container" align="center">
                <v-form class="search-form">
                    <v-text-field
                        placeholder="جستجو"
                        variant="plain"
                        bg-color="white"
                        rounded="pill"
                        density="compact">
                        <template v-slot:prepend-inner>
                            <v-btn type="submit" variant="text" rounded="pill" icon="mdi-magnify" color="#a6a9ba" density="comfortable" />
                        </template>
                    </v-text-field>
                </v-form>
                <div class="mt-15" v-if="!posts && !error" align="center">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                </div> 
                <v-tabs v-model="tab"  align-tabs="center" show-arrows class="article-tab">  
                    <v-tab v-for="tabindex in tabs" :value="tabindex" :key="tabindex">{{ tabindex.name }}</v-tab>
                </v-tabs>
                <v-snackbar v-model="serverSnackbar" multi-line>خطای سرور
                    <template v-slot:actions>
                        <v-btn color="red" variant="text" @click="serverSnackbar = false">
                            بستن
                        </v-btn>
                    </template>
                </v-snackbar>
                <v-window v-model="tab">
                    <v-window-item v-for="tabindex in tabs" :key="tabindex" :value="tabindex">
                        <v-row class="mb-10">
                            <template v-for="(post, key) in getPostsForTab(tabindex)" :key="key">
                                <v-col v-if="!key" cols="12">
                                    <a :href="'/post/'+ post.post.id" class="link">
                                        <div class="card">
                                            <v-row justify="center">
                                                <v-col md="6" sm="9" cols="12" class="px-6"><v-img class="img" :src="post.post.picture" ></v-img></v-col>
                                                <v-col md="6" sm="9" cols="12" class="px-6">
                                                    <p class="title">{{ post.post.title }}</p>
                                                    <p class="content">{{ post.post.description }}</p>
                                                </v-col>
                                            </v-row>  
                                        </div>
                                    </a>
                                </v-col>
                                <v-col v-else md="4" sm="9" cols="12" class="card px-10">  
                                    <a :href="'/post/'+ post.post.id" class="link">
                                        <v-img class="img" :src="post.post.picture"></v-img>
                                        <div>
                                            <p class="title sub-card-title">{{ post.post.title }}</p>
                                            <p class="content sub-card-content">{{ post.post.description }}</p>
                                        </div>
                                        <v-row class="mt-1">
                                            <v-col sm="6" align="right">
                                                <p class="text-grey-darken-3">
                                                    <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-account-outline</v-icon>
                                                    {{ post.post.author.name }}
                                                </p>
                                            </v-col>
                                            <v-col sm="6" align="right">
                                                <p class="text-grey-darken-3">
                                                    <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-calendar-month-outline</v-icon>
                                                    {{ new Date(post.post.date).toLocaleDateString('fa-IR') }}
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </a>
                                </v-col>
                            </template>
                        </v-row>
                    </v-window-item>
                </v-window>
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
import { call } from "@/mocks/API";
import {getBlogIndex} from "@/mocks/Blog";
import { defineComponent } from "vue";
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
            tab:undefined,
            posts:undefined,
            tabs:undefined,
            serverSnackbar:false,
            error:false,
            
        };
    },
    methods: {
        getPostsForTab(tab) {
            if(this.posts){
                if (tab.value === "all") {
                    return this.posts;
                }
                return this.posts.filter((p) => p.post.postCategory.includes(tab.value));  
            }   
        },
    },
    async mounted(){
        try {
            const response = await call(getBlogIndex,[]);
            this.posts = response[1];
            this.tabs = response[0];
            this.tab = response[0][0];
        } catch (e) {
            this.serverSnackbar = true;
            this.error = true;
        }
    }
});
</script>
<style lang="scss">
.blog-container {
    .search-form {
        width: 50%;
        height: 30px;
        padding: 15px;
        margin-top: -60px;
        .v-field {
            height: 50px;
        }
        .v-field--variant-plain.v-field {
            --v-field-padding-top: 0px;
            --v-field-input-padding-top: 0px;
            padding: 8px;

        }
        .v-input--density-compact {
            --v-input-padding-top: 8px;
            --v-field-padding-top: 0px;
        }
        .v-field__prepend-inner {
            padding-top: 0px;
        }
        .mdi-set {
            font-size: 26px;
        }
    }
    .article-tab {
        --v-tabs-height: 30px;
        color: #747474;
        margin-top: 100px;
        margin-bottom: 30px;
        .v-slide-group__content {
            justify-content: center;
        }
        .v-btn {
            border: 0px;
            letter-spacing: 0;
        }
        .v-tab--selected {
            background-color: #4f80ff;
            color: white
        }
        .v-tab--selected .v-tab__slider {
            opacity: 0;
        }
        .v-btn--size-default {
            padding: 0px 20px;
            border-radius: 50px;
        }
    }
    .card {
        box-shadow: none;
        padding: 20px;
        .img {
            border-radius: 10px;
        }
        .title {
            font-size: 25px;
            font-weight: 800;
            color: #242849;
            text-align: right;
            margin-top: 15px;
        }
        .sub-card-title {
            font-size: 15px;
            font-weight: 900;
            margin-top: 33px;
        }
        .content {
            font-size: 13px;
            color: #31486c;
            text-align: right;
            margin-top: 15px;
            line-height: 25px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
        .sub-card-content {
            color: #575757;
        }
    }
    .link {
        text-decoration: none;
    }
    @media(max-width:960px) {
        .card {
            margin-bottom: 30px;
            margin: auto auto 30px auto;

            .title {
                font-size: 18px;
            }
        }
    }
    @media(max-width:600px) {
        .search-form {
            width: 80%;
        }
    }
}
.general-background {
    background-color: #fafbff;
}
</style>