<template>
    <v-navigation-drawer
        permanent
        location="right"
        class="pa-3 bg-primary panel-nav">
        <div>منو</div>
        <v-list density="compact" nav>
            <div v-for="index in tabs.length" :key="index">
                <v-list-item v-if="tabs[index-1].options.length == 0" :prepend-icon="tabs[index-1].icon" :title="tabs[index-1].title" :value="tabs[index-1].value" :href = "tabs[index-1].value"></v-list-item>
                <v-list-item v-else>
                    <v-expansion-panels>
                        <v-expansion-panel class="bg-primary">
                            <v-expansion-panel-title class="pa-0" expand-icon="mdi-chevron-left"><v-icon class="ml-8">{{tabs[index-1].icon}}</v-icon>{{tabs[index-1].title}}</v-expansion-panel-title>
                            <v-expansion-panel-text class="mr-8">
                                <v-list-item v-for="option in tabs[index-1].options.length" :key="option" :title="tabs[index-1].options[option-1].title" :value="tabs[index-1].options[option-1].value"></v-list-item>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>   
                </v-list-item>
            </div>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return{
            tabs: [
                {
                    value:"dashboard",
                    title:"پیشخوان",
                    icon:"mdi-view-dashboard",
                    options:[]
                },
                {
                    value:"files",
                    title:"فایل ها",
                    icon:"mdi-file-document-multiple-outline",
                    options:[]
                },
                {
                    value:"support",
                    title:"پشتیبانی",
                    icon:"mdi-deskphone",
                    options:[]
                },
                {
                    value:"bills",
                    title:"صورت حساب ها",
                    icon:"mdi-cash-multiple",
                    options:[]
                },
                {
                    value:"services",
                    title:"سرویس ها",
                    icon:"mdi-note-text-outline",
                    options:[]
                },
                {
                    value:"accesses",
                    title:"دسترسی ها",
                    icon:"mdi-access-point",
                    options:[]
                },
                {
                    value:"settings",
                    title:"تنظیمات",
                    icon:"mdi-wrench-cog",
                    options:
                        [
                            {
                                value:"settings1",
                                title:"1تنظیمات",
                            },
                            {
                                value:"settings2",
                                title:"2تنظیمات",
                            },
                        ]
                },
                {
                    value:"users",
                    title:"کاربران",
                    icon:"mdi-account-circle-outline",
                    options:[]
                }
            ]  
        };

    },
});
</script>
<style lang="scss">
    .panel-nav{
        .v-expansion-panel-title__overlay{
            opacity: 0;
        }
        .v-list-item__prepend > .v-icon{
            --v-medium-emphasis-opacity:1;
        }
        --v-activated-opacity: 0;
    }
    
        
</style>
