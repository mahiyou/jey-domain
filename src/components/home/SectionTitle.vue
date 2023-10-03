<template>
	<div class="section-title">
		<p class="title" v-text="title" />
		<p class="content" v-text="content"/>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		}
	}
});
</script>
<style lang="scss" scoped>
.section-title {
	text-align: center;
}
.title {
	font-weight: 900;
	font-size: 28px;
	margin-bottom: 10px;
}
.content {
	margin-bottom: 30px;
}
</style>