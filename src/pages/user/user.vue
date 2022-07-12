<template>
	<view>
   <button @click="goLogin">去登陆</button>
	 <Login></Login>
	 222
	</view>
</template>

<script lang="ts" setup>
import Login from '@/components/login.vue';
import { ref } from 'vue';
const loginShow = ref(false)
const goLogin =()=>{
	loginShow.value=true
	/* #ifdef MP-TOUTIAO */
		tt.login({ //调用官网的登录api
	  force: true,
	  success(res) {
	    console.log(`login 调用成功${res.code} ${res.anonymousCode}`);
	  },
	  fail(res) {
	    console.log(`login 调用失败`);
	  },
	});
	/* #endif */


}
</script>

<style>

</style>
