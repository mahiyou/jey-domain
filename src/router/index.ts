// Composables
import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/default/Default.vue"
import HomeView from "@/views/Home.vue"
import ContactusView from "@/views/ContactUs.vue"
import OrderDomain from "@/views/OrderDomain.vue"
import Register from "@/views/Register.vue"
import LogIn from "@/views/LogIn.vue"
import Questions from "@/views/Questions.vue"
import Conditions from "@/views/Conditions.vue"
import Prices from "@/views/Prices.vue"
import Blog from "@/views/Blog.vue"
import Post from "@/views/Post.vue"
import UserPanelLayout from "@/layouts/UserPanelLayout.vue"
import Dashboard from "@/views/user-panel/Dashboard.vue"
import Files from "@/views/user-panel/Files.vue"
import NotFound from "@/views/NotFound.vue"


const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "",
                name: "home",
                component: HomeView,
            },
            {
                path: "/contact-us",
                name: "contact-us",
                component: ContactusView,
            },
            {
                path: "/order/domain/:step",
                name: "order-domain",
                component: OrderDomain,

            },
            {
                path: "/register",
                name: "register",
                component: Register,
            },
            {
                path: "/log-in",
                name: "logIn",
                component: LogIn
            },
            {
                path: "/questions",
                name: "questions",
                component: Questions
            },
            {
                path: "/conditions",
                name: "conditions",
                component: Conditions
            },
            {
                path: "/prices",
                name: "prices",
                component: Prices
            },
            {
                path: "/blog",
                name: "blog",
                component: Blog
            },
            {
                path: "/post/:postId",
                name: "post",
                component: Post
            },
            {
                path: "",
                name: "user-panel",
                component: UserPanelLayout,
                children: [
                    {
                        path: "/user-panel/dashboard",
                        name: "dashboard",
                        component: Dashboard
                    },
                    {
                        path: "/user-panel/files",
                        name: "files",
                        component: Files
                    },
                ]
            },
            {
                path: '/:pathMatch(.*)*', 
                name: "notFound",
                component: NotFound
            }
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
