<template >
    <HomeSlider />
    <DomainRegistration color="primary" :tlds="tlds" :offers="tlds" v-model="domain" />
    <CustomerSlabs :slabs="slabs" />
    <SuitableDomain />
    <PanelFeatures />
    <BuyDomain />
    <FaqList :items="faq" />
    <NewArticle :posts="posts"/>
</template>

<script lang="ts">
import HomeSlider from "@/components/home/HomeSlider.vue";
import DomainRegistration from "@/components/home/DomainRegistration.vue";
import CustomerSlabs from "@/components/CustomerSlabs/index.vue";
import SuitableDomain from "@/components/home/SuitableDomain.vue";
import PanelFeatures from "@/components/home/PanelFeatures.vue";
import BuyDomain from "@/components/home/BuyDomain.vue";
import FaqList from "@/components/home/FaqList.vue";
import NewArticle from "@/components/home/NewArticle.vue";
import { defineComponent } from "vue";
import { IFAQ, ISlabs, ITLD, IPostSummarized } from "@/mocks/API";

export default defineComponent({
    components: {
        HomeSlider,
        DomainRegistration,
        CustomerSlabs,
        SuitableDomain,
        PanelFeatures,
        BuyDomain,
        FaqList,
        NewArticle,
    },
    data() {
        const data = {
            domain: "",
            tlds: [] as ITLD[],
            slabs: [
                {
                    slug: "bronze",
                    tlds: [
                        {
                            suffix: "ir",
                            costs: {
                                register: 5560000,
                                renew: 5560000,
                                transfer: 5560000,
                            }
                        },
                        {
                            suffix: "co.ir",
                            costs: {
                                register: 5560000,
                                renew: 5560000,
                                transfer: 5560000,
                            }
                        },
                        {
                            suffix: "com",
                            costs: {
                                register: 5560000,
                                renew: 5560000,
                                transfer: 5560000,
                            }
                        },
                        {
                            suffix: "net",
                            costs: {
                                register: 5560000,
                                renew: 5560000,
                                transfer: 5560000,
                            }
                        },
                        {
                            suffix: "org",
                            costs: {
                                register: 5560000,
                                renew: 5560000,
                                transfer: 5560000,
                            }
                        },
                    ]
                },
                {
                    slug: "silver",
                    tlds: [
                        {
                            suffix: "com",
                            costs: {
                                register: 5060000,
                                renew: 5060000,
                                transfer: 5060000,
                            }
                        },
                        {
                            suffix: "net",
                            costs: {
                                register: 5060000,
                                renew: 5060000,
                                transfer: 5060000,
                            }
                        },
                        {
                            suffix: "org",
                            costs: {
                                register: 5060000,
                                renew: 5060000,
                                transfer: 5060000,
                            }
                        },
                    ]
                },
                {
                    slug: "golden",
                    tlds: [
                        {
                            suffix: "com",
                            costs: {
                                register: 4060000,
                                renew: 4060000,
                                transfer: 4060000,
                            }
                        },
                        {
                            suffix: "net",
                            costs: {
                                register: 4060000,
                                renew: 4060000,
                                transfer: 4060000,
                            }
                        },
                        {
                            suffix: "org",
                            costs: {
                                register: 4060000,
                                renew: 4060000,
                                transfer: 4060000,
                            }
                        },
                    ]
                }
            ] as ISlabs,
            faq: [
                {
                    question: "سوالی دارم",
                    answer: "بپرس"
                },
                {
                    question: "پاسخ محاسبه 5+6*5 چقدر می‌شود؟",
                    answer: "کاری نداره که 55"
                }
            ] as Array<IFAQ>,
            posts: [
                {
                    post: {
                        id: 1,
                        permalink: "",
                        title: "۱. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.",
                        description: "۱. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.",
                        author: { id: 1, name: "کاربر تست" },
                        picture: "https://www.jeyserver.com/packages/blog/storage/public/files/3287dc7390dc3017bc0de096840c7a36.jpg",
                        date: 1696345697934,
                    },
                },
                {
                    post: {
                        id: 1,
                        permalink: "",
                        title: "2. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.",
                        description: "۱. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.",
                        author: { id: 1, name: "کاربر تست" },
                        picture: "https://www.jeyserver.com/packages/blog/storage/public/files/3287dc7390dc3017bc0de096840c7a36.jpg",
                        date: 1696345697934,
                    },
                },
                {
                    post: {
                        id: 1,
                        permalink: "",
                        title: "3. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.",
                        description: "۱. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.",
                        author: { id: 1, name: "کاربر تست" },
                        picture: "https://www.jeyserver.com/packages/blog/storage/public/files/3287dc7390dc3017bc0de096840c7a36.jpg",
                        date: 1696345697934,
                    },
                },
                {
                    post: {
                        id: 1,
                        permalink: "",
                        title: "4. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.",
                        description: "۱. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.",
                        author: { id: 1, name: "کاربر تست" },
                        picture: "https://www.jeyserver.com/packages/blog/storage/public/files/3287dc7390dc3017bc0de096840c7a36.jpg",
                        date: 1696345697934,
                    },
                },
                {
                    post: {
                        id: 1,
                        permalink: "",
                        title: "5. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.",
                        description: "۱. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است.",
                        author: { id: 1, name: "کاربر تست" },
                        picture: "https://www.jeyserver.com/packages/blog/storage/public/files/3287dc7390dc3017bc0de096840c7a36.jpg",
                        date: 1696345697934,
                    },
                },
            ] as Array<IPostSummarized>
        };
        data.tlds = data.slabs[0].tlds;
        return data;
    },
});
</script>
<style lang="scss"></style>
