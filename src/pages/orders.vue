<template>
	<div>
		<span v-for="order of data?.Orders" :key="order.id">
			#{{ order.id }} - {{ order.customer.name }}
			<ul>
				<li>{{ order.product.quantity }} - {{ order.product.name }}</li>
			</ul>
		</span>
	</div>
</template>

<script lang="ts" setup>
	const { data } = await useAsyncGql({
		operation: "orders",
		options: {
			initialCache: false
		}
	});
</script>

<script lang="ts">
	export default {
		head() {
			return {
				title: "Orders"
			};
		}
	};
</script>

<style></style>
