<template>
  <view>
    <button @click="handleClick">点击弹出</button>
    <button @click="handleClick2">点击弹出全屏</button>
    <lb-action-sheet
      ref="actionSheet"
      :actions="actions"
      :full="full"
      @click="actionClick"
    >
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
          name: 'wx',
          label: '微信',
          image: '/static/wx.png'
        },
        {
          name: 'qq',
          label: 'QQ',
          image: '/static/qq.png'
        },
        {
          name: 'zfb',
          label: '支付宝',
          image: '/static/zfb.png'
        },
        {
          name: 'tt',
          label: '头条',
          image: '/static/tt.png'
        },
        {
          name: 'dy',
          label: '抖音',
          image: '/static/dy.png'
        },
        {
          name: 'jd',
          label: '京东',
          image: '/static/jd.png'
        },
        {
          name: 'tm',
          label: '天猫',
          image: '/static/tm.png'
        },
        {
          name: 'tb',
          label: '淘宝',
          image: '/static/tb.png'
        },
        {
          name: 'pdd',
          label: '拼多多',
          image: '/static/pdd.png'
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
