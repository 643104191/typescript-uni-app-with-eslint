<template>
<view class="content">
  <image class="logo" :src="'../../static/logo.png'"></image>
  <view>
    <view v-for="(title, key) in titles" :key="key" class="title">{{title}}</view>
  </view>
</view>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  titles: string[] = ['title1', 'title2'];
  onLoad() {
    console.log(this.titles)
  }
}
</script>

<style>
.content {
  text-align: center;
  height: 400upx;
}
.logo{
    height: 200upx;
    width: 200upx;
    margin-top: 200upx;
}
.title {
  font-size: 36upx;
  color: #8f8f94;
}
</style>
