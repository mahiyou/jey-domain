<template>
    <v-container class="new-posts-container">
        <v-row>
            <v-col md="6" cols="12">
                <p class="title">جدیدترین مقالات</p>
                <p class="content">
                    اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید.
                </p>
                <a href="#" class="link hidden-sm-and-down">
                    <v-card class="card">
                        <v-img :src="posts[0].post.picture" width="540px">
                            <v-card class="inside-card">
                                <p class="mb-3">{{ posts[0].post.title }}</p>
                                <v-row>
                                    <v-col cols="6">
                                        <p class="text-grey-darken-1">
                                            <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-account-outline</v-icon>
                                            {{ posts[0].post.author.name }}
                                        </p>
                                    </v-col>
                                    <v-col cols="6">
                                        <p class="text-grey-darken-1">
                                            <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-calendar-month-outline</v-icon>
                                            {{ getDate(posts[0].post.date) }}
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
                    <v-card class="side-card hidden-md-and-up">
                        <v-row>
                            <v-col sm="4" cols="12">
                                <v-img :src="posts[0].post.picture"></v-img>
                            </v-col>
                            <v-col sm="8" cols="12">
                                <p class="mb-4">
                                    {{ posts[0].post.title }}
                                </p>
                                <v-row>
                                    <v-col cols="6">
                                        <p class="text-grey-darken-1">
                                            <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-account-outline</v-icon>
                                            {{ posts[0].post.author.name }}
                                        </p>
                                    </v-col>
                                    <v-col cols="6">
                                        <p class="text-grey-darken-1">
                                            <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-calendar-month-outline</v-icon>
                                            {{ getDate(posts[0].post.date) }}
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </a>
                <a href="#" class="link" v-for="article in 3" :key="article">
                    <v-card class="side-card">
                        <v-row>
                            <v-col sm="4" cols="12" class="my-auto">
                                <v-img :src="posts[article].post.picture"></v-img>
                            </v-col>
                            <v-col sm="8" cols="12">
                                <p class="mb-4">{{ posts[article].post.title }}</p>
                                <v-row>
                                    <v-col cols="6">
                                        <p class="text-grey-darken-1">
                                            <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-account-outline</v-icon>
                                            {{ posts[article].post.author.name }}
                                        </p>
                                    </v-col>
                                    <v-col cols="6">
                                        <p class="text-grey-darken-1">
                                            <v-icon class="ml-1 mb-1" color="#4f80ff">mdi-calendar-month-outline</v-icon>
                                            {{ getDate(posts[article].post.date) }}
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
import { defineComponent } from "vue";
import type { IPostSummarized } from '@/mocks/API';
import type { PropType } from 'vue';
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
export default defineComponent({
    props: {
        posts: {
            type: Array as PropType<IPostSummarized[]>,
            required: true,
        },
    },
    methods: {
        getDate(rawDate: number): DateObject {
            const date = new DateObject({
                calendar: persian,
                locale: persian_fa,
                date: rawDate
            });
            return date;
        }
    }
});
</script>
<style lang="scss">
.new-posts-container {
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

    @media (max-width: 960px) {
        .side-card {
            margin: auto;
            margin-bottom: 10px;
        }
    }

    @media (max-width: 600px) {
        .title {
            text-align: center;
        }
    }
}
</style>