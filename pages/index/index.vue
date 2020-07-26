<template>
  <view class="list">
    <view class="list-item"
      v-for="(item, index) in demoList"
      :key="index"
      @tap="handleTap(item)">
      <view class="item-title">{{ item.title }}</view>
    </view>
  </view>
</template>


<script>
	export default {
		data() {
			return {
				demoList: [
					{
						title: '使用图片图标',
						path: '/pages/demos/demo1/demo1'
					},
					{
						title: '使用iconfont图标',
						path: '/pages/demos/demo2/demo2'
					},
					{
						title: '使用iconfont彩色图标',
						path: '/pages/demos/demo6/demo6'
					},
					{
						title: '图标部分禁用',
						path: '/pages/demos/demo3/demo3'
					},
					{
						title: '行数列数调整',
						path: '/pages/demos/demo4/demo4'
					},
					{
						title: 'inline模式',
						path: '/pages/demos/demo5/demo5'
					}
				]
			}
		},
		methods: {
			handleTap ({ path }) {
				uni.navigateTo({
					url: path
				})
			}
		}
	}
</script>

<style lang="scss">
.list {
  background-color: $uni-bg-color-grey;
}
.list-item {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  align-items: center;
  height: 44px;
  background-color: $uni-bg-color;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.item-title {
  flex: 1;
  font-size: 16px;
}
</style>
