<template>
	<view>
   <button @click="goLogin">去登陆</button>
	 <!-- <Login></Login> -->
	 222
	</view>
</template>

<script lang="ts" setup>
const goLogin =()=>{
	uni.navigateTo({
		url:'/subpages/login/login'
	})
}
</script>

<style>

</style>
