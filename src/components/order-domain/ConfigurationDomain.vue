<template>
    <v-containr class="config-domain-container">
        <div>
            شما می توانید در زیر وضعیت دامنه مورد نظر خود و سایر پسوندها را مشاهده کنید.
        </div>
        <div v-if="cartItemDomain" class="sentence-2">
            {{ cartItemDomain }}
            <a class="link" href="#"> ثبت یکساله </a>
            <div class="dotted-line"></div>
        </div>
        <div class="gray-box">
            برای ثبت این دامنه به مالکیت شما نیاز است تا بعد از پرداخت صورتحساب
            بازگزدید و پنل ثبت کننده دامنه را (از طریق دکمه پیکربندی مقابل محصول
            دامنه) مشخص کنید.
        </div>
        <v-form @submit.prevent="onSubmit" v-model="valid" class="form">
            <div class="title">Name Server ها</div>
            <div>
                اگر مایل به استفاده از Name Server های سرویس دیگری هستید آنها را در
                اینجا وارد کنید. به صورت پیش فرض روی دامنه های جدید، Name Server های ما
                تنظیم می شود.
            </div>
            <v-row class="mt-7">
                <v-col sm="6" cols="12">
                    <div>Name Server 1</div>
                    <v-text-field variant="outlined" class="text-field" v-model="nameServer1" :rules="nameServerRules"
                        required />
                </v-col>
                <v-col sm="6" cols="12">
                    <div>Name Server 2</div>
                    <v-text-field variant="outlined" class="text-field" v-model="nameServer2" :rules="nameServerRules"
                        required />
                </v-col>
            </v-row>
            <v-row class="mt-3 border-bottom">
                <v-col sm="6" cols="12">
                    <div>Name Server 3</div>
                    <v-text-field variant="outlined" class="text-field" v-model="nameServer3" :rules="nameServerRules"
                        required />
                </v-col>
                <v-col sm="6" cols="12">
                    <div>Name Server 4</div>
                    <v-text-field variant="outlined" class="text-field" v-model="nameServer4" :rules="nameServerRules"
                        required />
                </v-col>
            </v-row>
            <div>
                شما می توانید در این قسمت اطلاعات مربوط به WHOIS دامنه ی خود را مشخص
                کنید:
            </div>
            <div class="yellow-box">
                توجه داشته باشید اطلاعات زیر را حتما به صورت انگلیسی وارد نمایید!
            </div>
            <v-row class="mt-3">
                <v-col sm="6" cols="12">
                    <div>نام<span class="star-color">*</span></div>
                    <v-text-field variant="outlined" class="text-field" v-model="name" :rules="[nameValidation]" required />
                </v-col>
                <v-col sm="6" cols="12">
                    <div>نام خانوادگی<span class="star-color">*</span></div>
                    <v-text-field variant="outlined" class="text-field" v-model="lastName" :rules="[lastNameValidation]"
                        required />
                </v-col>
            </v-row>
            <v-row class="mt-6">
                <v-col sm="6" cols="12">
                    <div>شرکت</div>
                    <v-text-field variant="outlined" class="text-field" v-model="company"
                        :rules="[companyNameValidation]" />
                </v-col>
                <v-col sm="6" cols="12">
                    <div>ایمیل<span class="star-color">*</span></div>
                    <v-text-field variant="outlined" class="text-field" v-model="email" :rules="[emailValidation]" required />
                </v-col>
            </v-row>
            <div class="text-center">
                <v-btn type="submit" :loading="loading" variant="flat" color="#5cb85c" rounded="pill" width="45%"
                    class="btn-continue">
                    <v-icon>mdi-chevron-left</v-icon>
                    ادامه
                </v-btn>
            </div>
        </v-form>
    </v-containr>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useCartStore, WhoisData, CartItemType } from "@/stores/Cart";

export default defineComponent({
    setup() {
        return {
            store: useCartStore()
        };
    },
    props: {
        cartItem: Object,
        cartItemDomain: String,
        cost: Object,
    },
    data() {
        return {
            loading: false,
            valid: false,
            nameServer1: "",
            nameServer2: "",
            nameServer3: "",
            nameServer4: "",
            name: "",
            lastName: "",
            company: "",
            email: "",
            nameServerRules: [],
        };
    },
    methods: {
        onSubmit() {
            if (!this.valid || this.loading) {
                return;
            }
            this.loading = true;
            setTimeout(() => {
                this.orderNextStep(12,
                    {
                        name: this.name,
                        lastName: this.lastName,
                        company: this.company,
                        email: this.email,
                    },
                    [this.nameServer1, this.nameServer2, this.nameServer3, this.nameServer4]);
                this.$emit('tabValue', {
                    tab: 'confirmDomain',
                    cartItem: this.cartItemDomain,
                });
                this.loading = false;
                this.$router.push({ name: 'order-domain', params: { step: 'orderConfirmation' } })
            }, 2000);
        },
        orderNextStep(duration: number, whoisData: WhoisData, nameServers: string[]) {
            this.store.addCartItem({
                domain: this.cartItemDomain,
                cost: this.cost,
                type: CartItemType.REGISTER,
                duration: duration,
                whoisData: whoisData,
                nameServers: nameServers
            })
        },
        nameValidation(value: string) {
            if (!value) {
                return "وارد کردن نام الزامی است.";
            }
            else if (value.length > 20) {
                return "نام شما باید کمتر از 20 کاراکتر باشد.";
            } else {
                return true
            };
        },
        lastNameValidation(value: string) {
            if (!value) {
                return "وارد کردن نام خانوادگی الزامی است.";
            }
            else if (value.length > 20) {
                return "نام خانوادگی شما باید کمتر از 20 کاراکتر باشد.";
            } else {
                return true
            };
        },
        companyNameValidation(value: string) {
            if (value?.length <= 30) return true;
            return "نام شرکت شما باید کمتر از 30 کاراکتر باشد.";
        },
        emailValidation(value: string) {
            if (
                !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                    value
                )
            ) {
                return "ایمیل وارد شده معتبر نمی باشد";
            }
            return true;
        }
    },
});
</script>

<style lang="scss">
.config-domain-container {
    font-size: 14px;

    .sentence-2 {
        margin-top: 15px;
        font-weight: 900;
        font-size: 15px;

        .dotted-line {
            height: 2px;
            width: 100%;
            margin-top: -10px;
            margin-right: 135px;
            border-top: 1px dashed #aeaeae;
        }

        .link {
            text-decoration: none;
            color: #4f80ff;
            margin-right: 5px;
            font-size: 12px;
            font-weight: 100;
        }
    }

    .gray-box {
        background: #f5f5f5;
        padding: 22px;
        margin: 30px 0px 40px 0px;
    }

    .yellow-box {
        background: #fef5a9;
        padding: 22px;
        margin: 25px 0px 30px 0px;
    }

    .form {
        margin-top: 40px;
        padding-bottom: 60px;

        .title {
            font-weight: 900;
            font-size: 16px;
            margin-bottom: 5px;
        }

        .star-color {
            color: #fab348;
        }

        .v-field {
            border-color: #e1e1e1;
            margin: 10px 0px 0px 0px;
            --v-field-padding-top: 0px;
            --v-input-padding-top: 0px;
            --v-field-padding-bottom: 0px;
            --v-input-control-height: 40px;
        }

        .border-bottom {
            border-bottom: 1px dashed #aeaeae;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }

        .text-center {
            text-align: center;
        }

        .btn-continue {
            font-size: 16px;
            color: white;
            padding: 7px;
            margin: 60px auto 0px auto;
        }
    }
}
</style>