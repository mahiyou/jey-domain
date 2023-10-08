<template>
	<v-input class="v-domain-input" :model-value="modelValue" :rules="[rule]">
		<template #prepend>
			<select
				:value="tld"
				@change="onTldUpdate"
				class="domain-tld-select bg-grey-lighten-4">
				<option v-for="tld in tlds" :value="tld" :key="tld"> 
					.{{ tld }}
				</option>
			</select>
		</template>
		<input
			class="v-domain-name-input"
			type="text"
			:value="name"
			@input="onNameUpdate"
			@keydown="onNameTyping"
			placeholder="نام مورد نظر شما"/>
		<v-btn
			type="submit"
			variant="flat"
			color="secondary"
			rounded="xl"
			density="default"
			prepend-icon="mdi-magnify"
			text="جستجو"
			class="v-domain-input-submit"
			:loading="loading"
			:disabled="disabled"
			:to="{name: 'order-domain', params: {step: 'checkDomain'}}"/>

	</v-input>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { defineComponent } from 'vue';
import { useCartStore } from "@/stores/Cart";

export default defineComponent({
	setup(){
        return{
            cartStore: useCartStore(),
        }
    },
	props: {
		tlds: {
			type: Array as PropType<string[]>,
			required: true,
		},
		modelValue: String,
		loading: Boolean,
		disabled: Boolean
	},
	emits: ["update:modelValue"],
	methods: {
		onNameTyping(e: KeyboardEvent) {
			if (e.key === "." || e.code === "NumpadDecimal") {
				e.preventDefault();
			}
		},
		onNameUpdate(e: Event) {
			const newValue = (e.target as HTMLInputElement).value;
			this.$emit("update:modelValue", newValue + "." + this.tld);
			this.cartStore.setSugestedDomain(newValue + "." + this.tld);
		},
		onTldUpdate(e: Event) {
			const newValue = (e.target as HTMLSelectElement).value;
			console.log(this.name + "." + newValue);
			this.$emit("update:modelValue", this.name + "." + newValue);
			this.cartStore.setSugestedDomain(this.name + "." + newValue);
		},
		rule() {
			if (!this.modelValue || !/^[a-z0-9\-]+[a-z0-9](?:\.[a-z]+)+$/i.test(this.modelValue)) {
				return "نام دامنه وارد شده معتبر نمی‌باشد.";
			}
			return true;
		}
	},
	computed: {
		name(): string {
			if (!this.modelValue) {
				return "jeydomain";
			}
			const dot = this.modelValue.indexOf(".");
			return this.modelValue.substring(0, dot >= 0 ? dot : undefined);
		},
		tld(): string {
			let tld = "";
			if(this.modelValue) {
				const dot = this.modelValue.indexOf(".");
				if (dot !== -1) {
					tld = this.modelValue.substring(dot + 1);
				}
			}
			if (!tld) {
				tld = this.tlds[0];
			}
			return tld;
		}
	}
});
</script>
<style lang="scss">
@use 'vuetify/settings';
@use "sass:map";

.v-domain-input {
	position: relative;
	&.v-input--horizontal .v-input__prepend {
		margin-inline-end: 0;
	}
	&.v-input--error:not(.v-input--disabled) .v-input__details {
		padding: 10px 0 10px 100px;
		text-align: center; 
	}
}
.domain-tld-select {
	direction: ltr;
	height: 50px;
	min-width: 70px;
	padding-right: 10px;
	padding-left: 10px;
	border-top-right-radius: map.get(settings.$rounded, 'xl');
	border-bottom-right-radius: map.get(settings.$rounded, 'xl');
}
.v-domain-name-input {
	direction: ltr;
	width: 100%;
	background: rgb(var(--v-theme-surface));
	border-top-left-radius: map.get(settings.$rounded, 'xl');
	border-bottom-left-radius: map.get(settings.$rounded, 'xl');
	text-align: center;
	padding-left: 110px;

	&:focus {
		outline: none;
	}
}
.v-domain-input-submit {
	position: absolute;
	left: 0.6rem;
	top: 7px;
}

</style>