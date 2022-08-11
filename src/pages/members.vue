<template>
	<div>
		<p v-for="member of data?.Members" :key="member.id">
			{{ member.name }} - {{ member.discord }} -
			<i :class="member.badge.icon">{{ member.badge.name }}</i>
		</p>
	</div>
</template>

<script lang="ts" setup>
	useGqlCors({ credentials: "same-origin" });

	const { data } = await useAsyncGql({
		operation: "members"
	});
</script>

<script lang="ts">
	export default {
		head() {
			return {
				title: "Members"
			};
		}
	};
</script>
