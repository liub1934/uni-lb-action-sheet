(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demos-demo6-demo6"],{"0689":function(e,t,i){"use strict";i.r(t);var n=i("a048"),a=i("d188");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("4b09");var r,l=i("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"a13a0016",null,!1,n["a"],r);t["default"]=s.exports},"4b09":function(e,t,i){"use strict";var n=i("88ee"),a=i.n(n);a.a},"4ebe":function(e,t,i){"use strict";i.r(t);var n=i("9507"),a=i("9c6a");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);var r,l=i("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);t["default"]=s.exports},"52e1":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{full:!1,actions:[{name:"aixin",label:"爱心",icon:"aixin"},{name:"biaoqing",label:"表情",icon:"biaoqing"},{name:"biaoqian",label:"标签",icon:"biaoqian"},{name:"gerenzhongxin",label:"个人中心",icon:"gerenzhongxin"},{name:"shuidi",label:"水滴",icon:"shuidi"},{name:"liaotian",label:"聊天",icon:"liaotian"},{name:"dingwei",label:"定位",icon:"dingwei"},{name:"dianhua",label:"电话",icon:"dianhua"},{name:"bianji",label:"编辑",icon:"bianji"},{name:"shijian",label:"时间",icon:"shijian"}]}},methods:{handleClick:function(){this.full=!1,this.$refs.actionSheet.show()},handleClick2:function(){this.full=!0,this.$refs.actionSheet.show()},actionClick:function(e){console.log(e),uni.showToast({title:e.label,icon:"none"})}}};t.default=n},5952:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.lb-action-sheet[data-v-a13a0016]{position:relative}.lb-action-sheet-mask[data-v-a13a0016]{background-color:initial;position:fixed;top:0;right:0;left:0;bottom:0}.lb-action-sheet-mask-animation[data-v-a13a0016]{-webkit-transition-property:background-color;transition-property:background-color;-webkit-transition-duration:.3s;transition-duration:.3s}.lb-action-sheet-container[data-v-a13a0016]{position:relative;background-color:#fff;margin:10px}.lb-action-sheet-container-full[data-v-a13a0016]{margin:0}.lb-action-sheet-container-fixed[data-v-a13a0016]{position:fixed;left:0;right:0;bottom:0;-webkit-transform:translateY(100%);transform:translateY(100%);\r\noverflow:hidden\n}.lb-action-sheet-container-inline[data-v-a13a0016]{margin:0}.lb-action-sheet-container-animation[data-v-a13a0016]{-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:.3s;transition-duration:.3s}.lb-action-sheet-container-show[data-v-a13a0016]{-webkit-transform:translateY(0);transform:translateY(0)}.lb-action-sheet-header[data-v-a13a0016]{position:relative;height:45px;background-color:#fff;\r\n\r\n\r\nbox-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}\n.lb-action-sheet-header[data-v-a13a0016]::after{content:"";position:absolute;left:0;bottom:0;right:0;height:1px;clear:both;border-bottom:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}\n.lb-action-sheet-content[data-v-a13a0016]{position:relative;padding:10px 16px;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.lb-action-sheet-grid[data-v-a13a0016]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.lb-action-sheet-grid-item[data-v-a13a0016]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.lb-action-sheet-grid-disabled[data-v-a13a0016]{opacity:.4}.lb-action-sheet-grid-container[data-v-a13a0016]{min-width:0;-webkit-box-flex:1;-webkit-flex:1;flex:1}.lb-action-sheet-grid-content[data-v-a13a0016]{position:relative}.lb-action-sheet-grid-icon[data-v-a13a0016]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.lb-action-sheet-grid-image[data-v-a13a0016]{position:relative;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.lb-action-sheet-grid-label[data-v-a13a0016]{position:relative;margin-top:5px;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.lb-action-sheet-grid-text[data-v-a13a0016]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.lb-action-sheet-open-type-button[data-v-a13a0016]{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;opacity:0}.lb-action-sheet-dots[data-v-a13a0016]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.lb-action-sheet-dot-item[data-v-a13a0016]{border-radius:9999px;margin:0 2px;-webkit-transition-property:width,color,background-color;transition-property:width,color,background-color;-webkit-transition-duration:.3s;transition-duration:.3s}.lb-action-sheet-cancel-button[data-v-a13a0016]{border-radius:0}.lb-action-sheet-cancel-button[data-v-a13a0016]::after{border-radius:0;border-left:0;border-right:0;border-bottom:0}',""]),e.exports=t},"88ee":function(e,t,i){var n=i("5952");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("6fcd7cf7",n,!0,{sourceMap:!1,shadowMode:!1})},9507:function(e,t,i){"use strict";var n={lbActionSheet:i("0689").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClick.apply(void 0,arguments)}}},[e._v("点击弹出")]),i("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClick2.apply(void 0,arguments)}}},[e._v("点击弹出全屏")]),i("lb-action-sheet",{ref:"actionSheet",attrs:{"icon-prefix":"t-icon",actions:e.actions,full:e.full},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.actionClick.apply(void 0,arguments)}}})],1)},o=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},"9c6a":function(e,t,i){"use strict";i.r(t);var n=i("52e1"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},a048:function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.visible||e.inline?i("v-uni-view",{class:[e.className]},[e.inline?e._e():i("v-uni-view",{class:[e.className+"-mask",e.animation?e.className+"-mask-animation":""],style:{backgroundColor:e.maskBgColor,zIndex:e.zIndex-1},on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.moveHandle.apply(void 0,arguments)},click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.handleMaskTap.apply(void 0,arguments)}}}),i("v-uni-view",{class:[e.className+"-container",e.inline?e.className+"-container-inline":e.className+"-container-fixed",e.full?e.className+"-container-full":"",e.animation?e.className+"-container-animation":"",e.containerVisible?e.className+"-container-show":""],style:{borderRadius:e.full?e.radius+" "+e.radius+" 0 0":e.radius,zIndex:e.zIndex}},[i("v-uni-view",{class:[e.className+"-content"]},[i("v-uni-swiper",{class:[e.className+"-swiper"],style:{height:e.gridHeight*e.realRowNum+"px"},attrs:{current:e.activeIndex,"indicator-dots":!1,autoplay:!1},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.handleSwiperChange.apply(void 0,arguments)}}},e._l(e.actionsList,(function(t,n){return i("v-uni-swiper-item",{key:n},[i("v-uni-view",{class:[e.className+"-grid"],attrs:{border:!1,"column-num":e.columnNum}},e._l(t,(function(t){return i("v-uni-view",{key:t.name,class:[e.className+"-grid-item",t.disabled?e.className+"-grid-disabled":""],style:{width:100/e.columnNum+"%",height:e.gridHeight+"px"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.handleTap(t)}}},[i("v-uni-view",{class:[e.className+"-grid-container"]},[i("v-uni-view",{class:[e.className+"-grid-content"]},[t.image?i("v-uni-view",{class:[e.className+"-grid-image"]},[i("v-uni-image",{class:[e.className+"-grid-img"],style:{width:t.imageWidth||e.imageWidth,height:t.imageHeight||e.imageHeight||t.imageWidth||e.imageWidth},attrs:{src:t.image}})],1):e._e(),t.icon?i("v-uni-view",{class:[e.className+"-grid-icon"]},[i("v-uni-text",{class:[e.className+"-grid-icon-con",e.iconPrefix?e.iconPrefix:"",t.icon],style:{color:t.iconColor||e.iconColor,fontSize:t.iconSize||e.iconSize,width:t.iconSize||e.iconSize,height:t.iconSize||e.iconSize}})],1):e._e(),i("v-uni-view",{class:[e.className+"-grid-label"]},[i("v-uni-text",{class:[e.className+"-grid-text"],style:{color:e.labelColor,fontSize:e.labelSize}},[e._v(e._s(t.label))])],1),t.openType?i("v-uni-button",{class:[e.className+"-open-type-button"],attrs:{"open-type":t.openType,"form-type":t.formType,"app-parameter":t.appParameter,lang:t.lang,"session-from":t.sessionFrom,"send-message-title":t.sendMessageTitle,"send-message-path":t.sendMessagePath,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard},on:{getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.getphonenumber.apply(void 0,arguments)},getuserinfo:function(t){arguments[0]=t=e.$handleEvent(t),e.getuserinfo.apply(void 0,arguments)},error:function(t){arguments[0]=t=e.$handleEvent(t),e.error.apply(void 0,arguments)},opensetting:function(t){arguments[0]=t=e.$handleEvent(t),e.opensetting.apply(void 0,arguments)},launchapp:function(t){arguments[0]=t=e.$handleEvent(t),e.launchapp.apply(void 0,arguments)}}}):e._e()],1)],1)],1)})),1)],1)})),1),e.indicatorDots&&e.actionsList.length>1?i("v-uni-view",{class:[e.className+"-dots"]},e._l(e.actionsList,(function(t,n){return i("v-uni-view",{key:n,class:[e.className+"-dot-item",n===e.activeIndex?e.className+"-dot-active":""],style:{width:e.indicatorSize,height:e.indicatorSize,backgroundColor:n===e.activeIndex?e.indicatorActiveColor:e.indicatorColor}})})),1):e._e()],1),e.inline?e._e():i("v-uni-view",{class:[e.className+"-footer"],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleCancel.apply(void 0,arguments)}}},[e._t("footer",[i("v-uni-button",{class:[e.className+"-cancel-button"],style:{color:e.cancelColor,fontSize:e.cancelSize}},[e._v(e._s(e.cancelText))])])],2)],1)],1):e._e()},o=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},b1eb:function(e,t,i){"use strict";i("4160"),i("a9e3"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{actions:Array,full:Boolean,columnNum:{type:Number,default:4},rowNum:{type:Number,default:1},gridHeight:{type:Number,default:80},imageWidth:{type:String,default:"30px"},imageHeight:String,iconPrefix:String,iconSize:{type:String,default:"30px"},iconColor:String,labelColor:{type:String,default:"#303133"},labelSize:{type:String,default:"14px"},radius:{type:String,default:"10px"},cancelText:{type:String,default:"取消"},cancelColor:{type:String,default:"#606266"},cancelSize:{type:String,default:"16px"},closeOnClick:{type:Boolean,default:!0},closeOnClickMask:{type:Boolean,default:!0},maskColor:{type:String,default:"rgba(0, 0, 0, 0.4)"},indicatorDots:{type:Boolean,default:!0},indicatorColor:{type:String,default:"#c0c4cc"},indicatorSize:{type:String,default:"8px"},indicatorActiveColor:{type:String,default:"#909399"},animation:{type:Boolean,default:!0},inline:Boolean,zIndex:{type:Number,default:99}},data:function(){return{className:"lb-action-sheet",visible:!1,containerVisible:!1,maskBgColor:"",activeIndex:0}},computed:{realRowNum:function(){var e=this.actions||[];return e.length>this.columnNum?this.rowNum:1},actionsList:function(){var e=this,t=[];return this.actions&&this.actions.length&&this.actions.forEach((function(i,n){var a=Math.ceil((n+1)/(e.columnNum*e.realRowNum));a-=1,t[a]||(t[a]=[]),t[a].push(i)})),t}},methods:{show:function(){var e=this;this.visible=!0,setTimeout((function(){e.maskBgColor=e.maskColor,e.containerVisible=!0,e.$emit("show")}),20)},hide:function(){var e=this;this.maskBgColor="",this.containerVisible=!1,setTimeout((function(){e.visible=!1,e.$emit("hide")}),200)},handleMaskTap:function(){this.closeOnClickMask&&this.hide()},moveHandle:function(){},handleTap:function(e){e.disabled||(this.$emit("click",e),this.closeOnClick&&!this.inline&&this.hide())},handleSwiperChange:function(e){this.activeIndex=e.detail.current,this.$emit("change",e)},handleCancel:function(){this.$emit("cancel"),this.hide()},getphonenumber:function(e){this.$emit("getphonenumber",e)},getuserinfo:function(e){this.$emit("getuserinfo",e)},error:function(e){this.$emit("error",e)},opensetting:function(e){this.$emit("opensetting",e)},launchapp:function(e){this.$emit("launchapp",e)}}};t.default=n},d188:function(e,t,i){"use strict";i.r(t);var n=i("b1eb"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a}}]);