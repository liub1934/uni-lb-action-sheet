<template>
  <view>
    <button @click="handleClick">点击弹出</button>
    <button @click="handleClick2">点击弹出全屏</button>
    <lb-action-sheet ref="actionSheet"
      icon-prefix="t-icon"
      :actions="actions"
      :full="full"
      @click="actionClick">
    </lb-action-sheet>
  </view>
</template>

<script>
export default {
	data () {
		return {
			full: false,
			actions: [
        {
					name: 'aixin',
					label: '爱心',
					icon: 'aixin'
				},
				{
					name: 'biaoqing',
					label: '表情',
					icon: 'biaoqing'
				},
				{
					name: 'biaoqian',
					label: '标签',
					icon: 'biaoqian'
				},
				{
					name: 'gerenzhongxin',
					label: '个人中心',
					icon: 'gerenzhongxin'
				},
				{
					name: 'shuidi',
					label: '水滴',
					icon: 'shuidi'
				},
				{
					name: 'liaotian',
					label: '聊天',
					icon: 'liaotian'
				},
				{
					name: 'dingwei',
					label: '定位',
					icon: 'dingwei'
				},
				{
					name: 'dianhua',
					label: '电话',
					icon: 'dianhua'
				},
				{
					name: 'bianji',
					label: '编辑',
					icon: 'bianji'
				},
				{
					name: 'shijian',
					label: '时间',
					icon: 'shijian'
				}
      ]
		}
	},
	methods: {
		handleClick () {
			this.full = false
			this.$refs.actionSheet.show()
		},
		handleClick2 () {
			this.full = true
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
