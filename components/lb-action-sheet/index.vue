<template>
  <view v-if="visible || inline"
    :class="[className]">
    <view v-if="!inline"
      :class="[
        `${className}-mask`,
        animation ? `${className}-mask-animation` : ''
      ]"
      :style="{
        backgroundColor: maskBgColor,
        zIndex: zIndex - 1
      }"
      @tap.stop="handleMaskTap"
      @touchmove.stop.prevent="moveHandle">
    </view>

    <view :class="[
        `${className}-container`,
        inline
          ? `${className}-container-inline`
          : `${className}-container-fixed`,
        full ? `${className}-container-full` : '',
        animation ? `${className}-container-animation` : '',
        containerVisible ? `${className}-container-show` : ''
      ]"
      :style="{
        borderRadius: full ? `${radius} ${radius} 0 0` : radius,
        zIndex: zIndex
      }">
      <view :class="[`${className}-content`]">
        <swiper :class="[`${className}-swiper`]"
          :current="activeIndex"
          :indicator-dots="false"
          :autoplay="false"
          :style="{ height: `${gridHeight * realRowNum}px` }"
          @change="handleSwiperChange">
          <swiper-item v-for="(swiper, index) in actionsList"
            :key="index">
            <view :class="[`${className}-grid`]"
              :border="false"
              :column-num="columnNum">
              <view v-for="grid in swiper"
                :key="grid.name"
                :class="[
                  `${className}-grid-item`,
                  grid.disabled ? `${className}-grid-disabled` : ''
                ]"
                :style="{
                  width: `${100 / columnNum}%`,
                  height: `${gridHeight}px`
                }"
                @click="handleTap(grid)">
                <view :class="[`${className}-grid-container`]">
                  <view :class="[`${className}-grid-content`]">
                    <view v-if="grid.image"
                      :class="[`${className}-grid-image`]">
                      <image :src="grid.image"
                        :class="[`${className}-grid-img`]"
                        :style="{
                          width: grid.imageWidth || imageWidth,
                          height: grid.imageHeight || imageHeight || grid.imageWidth || imageWidth
                        }">
                      </image>
                    </view>

                    <view v-if="grid.icon"
                      :class="[`${className}-grid-icon`]">
                      <text :class="[
                          `${className}-grid-icon-con`,
                          iconPrefix ? iconPrefix : '',
                          grid.icon
                        ]"
                        :style="{
                          color: grid.iconColor || iconColor,
                          fontSize: grid.iconSize || iconSize
                        }">
                      </text>
                    </view>
                    <view :class="[`${className}-grid-label`]">
                      <text :class="[`${className}-grid-text`]"
                        :style="{
                          color: labelColor,
                          fontSize: labelSize
                        }">
                        {{ grid.label }}
                      </text>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </swiper-item>
        </swiper>

        <view v-if="indicatorDots && actionsList.length > 1"
          :class="[`${className}-dots`]">
          <view v-for="(item, index) in actionsList"
            :key="index"
            :class="[
              `${className}-dot-item`,
              index === activeIndex ? `${className}-dot-active` : ''
            ]"
            :style="{
              width: indicatorSize,
              height: indicatorSize,
              backgroundColor: index === activeIndex ? indicatorActiveColor : indicatorColor
            }">
          </view>
        </view>
      </view>

      <view v-if="!inline"
        :class="[`${className}-footer`]"
        @tap="handleCancel">
        <slot name="footer">
          <button :class="[`${className}-cancel-button`]"
            :style="{
              color: cancelColor,
              fontSize: cancelSize
            }">
            {{ cancelText }}
          </button>
        </slot>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    actions: Array,
    full: Boolean,
    columnNum: {
      type: Number,
      default: 4
    },
    rowNum: {
      type: Number,
      default: 1
    },
    gridHeight: {
      type: Number,
      default: 80
    },
    imageWidth: {
      type: String,
      default: '30px'
    },
    imageHeight: String,
    iconPrefix: String,
    iconSize: {
      type: String,
      default: '30px'
    },
    iconColor: String,
    labelColor: {
      type: String,
      default: '#303133'
    },
    labelSize: {
      type: String,
      default: '14px'
    },
    radius: {
      type: String,
      default: '10px'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    cancelColor: {
      type: String,
      default: '#606266'
    },
    cancelSize: {
      type: String,
      default: '16px'
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
    maskColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    indicatorDots: {
      type: Boolean,
      default: true
    },
    indicatorColor: {
      type: String,
      default: '#c0c4cc'
    },
    indicatorSize: {
      type: String,
      default: '8px'
    },
    indicatorActiveColor: {
      type: String,
      default: '#909399'
    },
    animation: {
      type: Boolean,
      default: true
    },
    inline: Boolean,
    zIndex: {
      type: Number,
      default: 99
    }
  },
  data () {
    return {
      className: 'lb-action-sheet',
      visible: false,
      containerVisible: false,
      maskBgColor: '',
      activeIndex: 0
    }
  },
  computed: {
    realRowNum () {
      const actions = this.actions || []
      return actions.length > this.columnNum ? this.rowNum : 1
    },
    actionsList () {
      let actions = []
      if (this.actions && this.actions.length) {
        this.actions.forEach((item, index) => {
          let ceil = Math.ceil((index + 1) / (this.columnNum * this.realRowNum))
          ceil = ceil - 1
          if (!actions[ceil]) {
            actions[ceil] = []
          }
          actions[ceil].push(item)
        })
      }
      return actions
    }
  },
  mounted () {
    console.log(this.$refs)
  },
  methods: {
    show () {
      this.visible = true
      setTimeout(() => {
        this.maskBgColor = this.maskColor
        this.containerVisible = true
        this.$emit('show')
      }, 20)
    },
    hide () {
      this.maskBgColor = ''
      this.containerVisible = false
      setTimeout(() => {
        this.visible = false
        this.$emit('hide')
      }, 200)
    },
    handleMaskTap () {
      if (this.closeOnClickMask) {
        this.hide()
      }
    },
    moveHandle () {},
    handleTap (grid) {
      if (grid.disabled) return
      this.$emit('click', grid)
      if (this.closeOnClick && !this.inline) {
        this.hide()
      }
    },
    handleSwiperChange (e) {
      this.activeIndex = e.detail.current
      this.$emit('change', e)
    },
    handleCancel () {
      this.$emit('cancel')
      this.hide()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
