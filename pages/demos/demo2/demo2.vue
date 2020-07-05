<template>
  <view>
    <button @click="handleClick">点击弹出</button>
    <lb-action-sheet ref="actionSheet"
      :actions="actions"
      icon-prefix="iconfont"
      @click="actionClick">
    </lb-action-sheet>
  </view>
</template>

<script>
export default {
	data () {
		return {
			actions: [
        {
					name: 'wx',
					label: '微信',
					icon: 'iconfont-wx',
					iconColor: '#3baf34'
				},
				{
					name: 'qq',
					label: 'QQ',
					icon: 'iconfont-qq',
					iconColor: '#12b7f5'
				},
				{
					name: 'zfb',
					label: '支付宝',
					icon: 'iconfont-zfb',
					iconColor: '#1989fa'
				},
				{
					name: 'tt',
					label: '头条',
					icon: 'iconfont-tt',
					iconColor: '#e72a1f'
				},
				{
					name: 'dy',
					label: '抖音',
					icon: 'iconfont-dy',
					iconColor: '#000000'
				},
				{
					name: 'jd',
					label: '京东',
					icon: 'iconfont-dy'
				},
				{
					name: 'tm',
					label: '天猫',
					icon: 'iconfont-tm',
					iconColor: '#ee0f23'
				},
				{
					name: 'tb',
					label: '淘宝',
					icon: 'iconfont-tb',
					iconColor: '#ff440b'
				},
				{
					name: 'pdd',
					label: '拼多多',
					icon: 'iconfont-pdd',
					iconColor: '#ed291e'
        }
      ]
		}
	},
	methods: {
		handleClick () {
			this.$refs.actionSheet.show()
		},
		actionClick (item) {
			console.log(item)
			uni.showToast({
				title: item.label,
				icon: 'none'
			})
		}
	}
}

</script>

<style lang="scss" scoped>
</style>
