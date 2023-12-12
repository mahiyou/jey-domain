<template >
    <div class="text-center ma-10"><v-progress-circular v-if="loading" indeterminate color="primary"></v-progress-circular>
    </div>
    <div v-if="error" class="domain-search-error">
        <P>خطای سرور رخ داده است. لطفا دوباره تلاش کنید.</P>
    </div>
    <HomeSlider />
    <DomainRegistration v-if="!loading && !error" color="primary" :tlds="tlds" :offers="tlds" v-model="domain" />
    <CustomerSlabs v-if="!loading && !error" :slabs="slabs" />
    <SuitableDomain />
    <PanelFeatures />
    <BuyDomain />
    <FaqList :items="faq" />
    <NewArticle v-if="!loading && !error" :posts="posts" />
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
import { IFAQ, ISlabs, ITLD, IPostSummarized, call } from "@/mocks/API";
import { getData } from "@/mocks/Home"
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
            domain:"",
            loading: true,
            error: false,
            tlds: [] as ITLD[],
            slabs: [] as ISlabs,
            posts: [] as IPostSummarized[],
            faq: [
                {
                    question: "دامنه چیست و چرا به آن نیاز دارم؟",
                    answer: "لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است."
                },
                {
                    question: "منظور از پسوند دامنه چیست؟ کدام پسوند برای من مناسبتر است؟",
                    answer: "لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است."
                },
                {
                    question: "منظور از پسوند دامنه چیست؟ کدام پسوند برای من مناسبتر است؟",
                    answer: "لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است."
                },
                {
                    question: "منظور از پسوند دامنه چیست؟ کدام پسوند برای من مناسبتر است؟",
                    answer: "لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است."
                }
            ] as Array<IFAQ>,
        };

        return data;
    },
    async mounted() {
        try {
            const res = await call(getData, []);
            this.slabs = res.slabs;
            this.tlds = res.slabs[0].tlds;
            this.posts = res.posts;
        }
        catch {
            this.error = true;
        }
        finally {
            this.loading = false;
        }
    },
});
</script>
<style lang="scss">
.domain-search-error {
    padding: 30px;
    text-align: center;
    margin: 40px;
    border: 1px dashed #dd3f4e;
    color: #dd3f4e;
    font-size: 14px;
    font-weight: 800;
}
</style>
