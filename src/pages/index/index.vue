<template>
  <view class="container">
    <view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
    <text class="intro">详见：</text>
	<text :show="systemStore.isLoading">{{title}}</text>
  {{systemStore.isLoading}}
    <uni-link :href="href" :text="href"></uni-link>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
  import { systemStoreWithOut } from '@/stores/modules/system';
const href = ref('https://uniapp.dcloud.io/component/README?id=uniui')
const title = ref('2222')
  const systemStore = systemStoreWithOut();
</script>

<style>
.container {
  padding: 20px;
  font-size: 14px;
  line-height: 24px;
}
</style>
