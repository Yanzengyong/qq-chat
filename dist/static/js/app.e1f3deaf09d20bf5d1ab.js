webpackJsonp([1],{"+g8z":function(t,a){},"3niY":function(t,a,e){"use strict";function s(t){e("9Ku0")}var n=e("XYK0"),i=e("vHK9"),o=e("VU/8"),c=s,r=o(n.a,i.a,!1,c,"data-v-f57ab678",null);a.a=r.exports},"9Ku0":function(t,a){},CwAS:function(t,a,e){"use strict";function s(t){e("KDs0")}var n=e("bjQc"),i=e("aJn7"),o=e("VU/8"),c=s,r=o(n.a,i.a,!1,c,"data-v-2024a2e6",null);a.a=r.exports},EFwi:function(t,a,e){"use strict";var s=e("G2s1");a.a={install:function(t){t.use(s.a)},directive:s.a}},G2s1:function(t,a,e){"use strict";var s=function(t){t.directive("move",{bind:function(t,a,e){function s(a){var e=a.target.nodeName,s=a.clientX-t.offsetLeft,i=a.clientY-t.offsetTop;document.onmousemove=function(t){n(t,s,i)},"DIV"!==e&&(document.onmousemove=null,document.onmouseup=null),document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}}function n(a,e,s){var n=a.clientX-e,i=a.clientY-s,o=document.documentElement.clientWidth,c=document.documentElement.clientHeight,r=o-t.offsetWidth,u=c-t.offsetHeight;a.stopPropagation(),n<0?n=0:n>r&&(n=r),i<0?i=0:i>u&&(i=u),t.style.left=n+"px",t.style.top=i+"px"}t.onmousedown=s},update:function(t,a){},unbind:function(t,a){}})};a.a={install:s}},HFLR:function(t,a){},IcnI:function(t,a,e){"use strict";var s=e("7+uW"),n=e("NYxO");s.a.use(n.a);var i=new n.a.Store({state:{you:{name:"夜喵",avatar:"./static/images/avatar_2.jpg",msg:""},me:{name:"地瓜",avatar:"./static/images/avatar_1.png",msg:""}},getters:{getYouName:function(t){return t.you.name},getYouAvatar:function(t){return t.you.avatar},getYouMsg:function(t){return t.you.msg},getMeName:function(t){return t.me.name},getMeAvatar:function(t){return t.me.avatar},getMeMsg:function(t){return t.me.msg}},actions:{updateYouName:function(t,a){t.commit("UPDATE_YOU_NAME",a)},updateYouAvatar:function(t,a){t.commit("UPDATE_YOU_AVATAR",a)},updateYouMsg:function(t,a){t.commit("UPDATE_YOU_MSG",a)},updateMeName:function(t,a){t.commit("UPDATE_ME_NAME",a)},updateMeAvatar:function(t,a){t.commit("UPDATE_ME_AVATAR",a)},updateMeMsg:function(t,a){t.commit("UPDATE_ME_MSG",a)}},mutations:{UPDATE_YOU_NAME:function(t,a){t.you.name=a},UPDATE_YOU_AVATAR:function(t,a){t.you.avatar=a},UPDATE_YOU_MSG:function(t,a){t.you.msg=a},UPDATE_ME_NAME:function(t,a){t.me.name=a},UPDATE_ME_AVATAR:function(t,a){t.me.avatar=a},UPDATE_ME_MSG:function(t,a){t.me.msg=a}}});a.a=i},KDs0:function(t,a){},M93x:function(t,a,e){"use strict";function s(t){e("HFLR")}var n=e("xJD8"),i=e("sSM7"),o=e("VU/8"),c=s,r=o(n.a,i.a,!1,c,null,null);a.a=r.exports},Mrdv:function(t,a,e){"use strict";var s=e("EFwi"),n=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).use(s.a.directive)};"undefined"!=typeof window&&window.Vue&&n(window.Vue),a.a=n},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),n=e("M93x"),i=e("YaEn"),o=e("IcnI"),c=e("+g8z"),r=(e.n(c),e("Mrdv"));s.a.use(r.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:i.a,store:o.a,template:"<App/>",components:{App:n.a}})},Nlm9:function(t,a,e){"use strict";function s(t){e("f1Wd")}var n=e("mIch"),i=e("O5Vd"),o=e("VU/8"),c=s,r=o(n.a,i.a,!1,c,"data-v-378e65aa",null);a.a=r.exports},O5Vd:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{directives:[{name:"move",rawName:"v-move"}],staticClass:"chat-room"},[e("div",{staticClass:"head"}),t._v(" "),t._m(0)])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mainpanel"},[e("div",{staticClass:"left"},[e("div",{staticClass:"content"}),t._v(" "),e("div",{staticClass:"message"})]),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"notice"}),t._v(" "),e("div",{staticClass:"apps"}),t._v(" "),e("div",{staticClass:"member"})])])}],i={render:s,staticRenderFns:n};a.a=i},TN2z:function(t,a,e){"use strict";const s={tools:[{name:"音频",src:"./static/images/tools/toobar_audio.png"},{name:"视频",src:"./static/images/tools/toobar_video.png"},{name:"远程演示",src:"./static/images/tools/toobar_screen_share.png"},{name:"传送文件",src:"./static/images/tools/toobar_send.png"},{name:"远程控制",src:"./static/images/tools/toobar_remote.png"},{name:"发起多人聊天",src:"./static/images/tools/toobar_add.png"},{name:"应用",src:"./static/images/tools/toobar_app.png"}],menu:[{name:"设置",src:"./static/images/menu/setting.png"},{name:"缩小",src:"./static/images/menu/min.png"},{name:"放大",src:"./static/images/menu/max.png"},{name:"关闭",src:"./static/images/menu/close.png"}],msgTools:[{name:"字体",src:"./static/images/msg-tools/font.png"},{name:"表情",src:"./static/images/msg-tools/face.png"},{name:"GIF",src:"./static/images/msg-tools/gif.png"},{name:"窗口抖动",src:"./static/images/msg-tools/twitter.png"},{name:"语音消息",src:"./static/images/msg-tools/record.png"},{name:"图片",src:"./static/images/msg-tools/sendpic.png"},{name:"音乐",src:"./static/images/msg-tools/music.png"},{name:"截图",src:"./static/images/msg-tools/cut.png"},{name:"红包",src:"./static/images/msg-tools/hb.png"}],more:"./static/images/tools/more.png"};a.a=s},XYK0:function(t,a,e){"use strict";var s=e("Dd8w"),n=e.n(s),i=e("NYxO"),o=e("ZbWx"),c=e("TN2z");a.a={data:function(){return{res:c.a,you:{name:"夜喵。"},me:{name:"地瓜",msg:"喵？"},msgList:o.a}},computed:n()({},Object(i.b)({youName:"getYouName",youAvatar:"getYouAvatar",youMsg:"getYouMsg",meAvatar:"getMeAvatar"})),watch:{youName:function(t){this.you.name=t},youMsg:function(t){this.msgList.push({text:t,who:"you"})},msgList:function(t){this.scrollBottom()}},mounted:function(){var t=this;this.$nextTick(function(){t.scrollBottom()})},methods:{sendMsg:function(){this.msgList.push({text:this.me.msg,who:"me"}),this.me.msg=""},scrollBottom:function(){var t=this;setTimeout(function(){t.$refs.msgContent.scrollTop=t.$refs.msgContent.scrollHeight})}}}},YaEn:function(t,a,e){"use strict";var s=e("7+uW"),n=e("/ocq"),i=e("3niY"),o=e("Nlm9");s.a.use(n.a),a.a=new n.a({routes:[{path:"/",redirect:"/personal"},{path:"/personal",name:"personal",component:i.a},{path:"/group",name:"group",component:o.a}]})},ZbWx:function(t,a,e){"use strict";const s=[{text:"喵喵喵，喵？",who:"you"},{text:"喵喵，喵喵喵？",who:"me"},{text:"喵喵喵，喵喵喵喵喵喵喵？",who:"you"},{text:"喵喵喵喵喵喵喵喵喵喵喵喵，喵喵……",who:"me"},{text:"喵喵，喵喵喵，喵喵喵喵喵喵喵喵喵喵喵！！！",who:"you"},{text:"喵喵喵，喵喵喵喵喵！",who:"you"},{text:"喵，喵喵喵喵喵喵喵，喵喵喵喵喵喵喵……",who:"me"},{text:"喵喵喵喵，喵喵喵喵喵喵喵喵？",who:"you"},{text:"喵喵，喵喵喵喵喵喵喵喵",who:"me"},{text:"喵，喵喵喵，喵喵喵喵喵喵喵喵",who:"you"},{text:"喵喵，喵喵喵喵！！",who:"me"}];a.a=s},aJn7:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"route-panel"},t._l(t.routeList,function(a,s){return e("router-link",{key:s,attrs:{to:a.name,"active-class":"active"}},[t._v(t._s(a.label))])})),t._v(" "),e("div",{staticClass:"config"},[e("div",{staticClass:"config-panel"},[e("h1",[t._v("对方")]),t._v(" "),e("ul",{staticClass:"config-list"},[e("li",{staticClass:"config-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.youName,expression:"youName"}],attrs:{type:"text",placeholder:"昵称"},domProps:{value:t.youName},on:{input:function(a){a.target.composing||(t.youName=a.target.value)}}})]),t._v(" "),e("li",{staticClass:"config-item avatar"},[e("span",[t._v("头像：")]),t._v(" "),e("img",{attrs:{src:t.youAvatar}}),t._v(" "),t._m(0),t._v(" "),e("input",{attrs:{type:"file",id:"youAvatar"},on:{change:t.updateYouAvatar}})]),t._v(" "),e("li",{staticClass:"config-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.youMsg,expression:"youMsg"}],attrs:{type:"text",placeholder:"输入一条新消息"},domProps:{value:t.youMsg},on:{input:function(a){a.target.composing||(t.youMsg=a.target.value)}}})]),t._v(" "),e("li",{staticClass:"config-item"},[e("button",{on:{click:function(a){t.sendMsg("you")}}},[t._v("发送")])])])]),t._v(" "),e("div",{staticClass:"config-panel"},[e("h1",[t._v("自己")]),t._v(" "),e("ul",{staticClass:"config-list"},[t._m(1),t._v(" "),e("li",{staticClass:"config-item avatar"},[e("span",[t._v("头像：")]),t._v(" "),e("img",{attrs:{src:t.myAvatar}}),t._v(" "),t._m(2),t._v(" "),e("input",{attrs:{type:"file",id:"myAvatar"},on:{change:t.updateMyAvatar}})])])])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"avatar-mask",attrs:{for:"youAvatar"}},[e("span",[t._v("修改头像")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"config-item"},[e("input",{attrs:{type:"text",placeholder:"昵称"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{staticClass:"avatar-mask",attrs:{for:"myAvatar"}},[e("span",[t._v("修改头像")])])}],i={render:s,staticRenderFns:n};a.a=i},bjQc:function(t,a,e){"use strict";var s=e("Dd8w"),n=e.n(s),i=e("NYxO");a.a={data:function(){return{routeList:[{label:"个人版",name:"personal"},{label:"QQ群",name:"group"}],youMsg:"",youAvatar:"./static/images/avatar_2.jpg",myAvatar:"./static/images/avatar_1.png"}},computed:n()({},Object(i.b)(["getYouName"]),{youName:{get:function(){return this.getYouName},set:function(t){console.log(t),"地瓜"===t&&(t="对不起，不能修改为主人的名字"),this.$store.dispatch("updateYouName",t)}}}),methods:{sendMsg:function(t){this.$store.dispatch("updateYouMsg",this.youMsg),this.youMsg=""},updateYouAvatar:function(t){var a=this,e=new FileReader,s=t.target.files[0];e.readAsDataURL(s),e.onloadend=function(){a.youAvatar=e.result,a.$store.dispatch("updateYouAvatar",e.result)}},updateMyAvatar:function(t){var a=this,e=new FileReader,s=t.target.files[0];e.readAsDataURL(s),e.onloadend=function(){a.myAvatar=e.result,a.$store.dispatch("updateMeAvatar",e.result)}}}}},f1Wd:function(t,a){},mIch:function(t,a,e){"use strict";a.a={data:function(){return{}}}},sSM7:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view",{staticClass:"app-main"}),t._v(" "),e("side-bar",{staticClass:"app-sidebar"})],1)},n=[],i={render:s,staticRenderFns:n};a.a=i},vHK9:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{directives:[{name:"move",rawName:"v-move"}],staticClass:"chat-room"},[e("div",{staticClass:"head"},[e("div",{staticClass:"info"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.youAvatar,draggable:"false"}})]),t._v(" "),e("p",{staticClass:"name"},[t._v(t._s(t.youName))])]),t._v(" "),e("div",{staticClass:"tools"},[e("ul",{staticClass:"list"},t._l(t.res.tools,function(t,a){return e("li",{key:a,staticClass:"item"},[e("img",{attrs:{src:t.src,alt:t.name}})])}))]),t._v(" "),e("div",{staticClass:"menu"},[e("ul",{staticClass:"list"},t._l(t.res.menu,function(t,a){return e("li",{key:a,staticClass:"item"},[e("img",{attrs:{src:t.src,alt:t.name}})])}))])]),t._v(" "),e("div",{ref:"msgContent",staticClass:"content"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"msg-panel"},t._l(t.msgList,function(a,s){return e("div",{key:s,class:["msg-item",a.who]},[e("div",{staticClass:"avatar"},["you"===a.who?e("img",{attrs:{src:t.youAvatar}}):e("img",{attrs:{src:t.meAvatar}})]),t._v(" "),e("div",{staticClass:"text"},[e("p",[t._v(t._s(a.text))])])])}))])]),t._v(" "),e("div",{staticClass:"message"},[e("div",{staticClass:"tools"},[e("ul",{staticClass:"list left"},t._l(t.res.msgTools,function(t,a){return e("li",{key:a,staticClass:"item"},[e("img",{attrs:{src:t.src,alt:t.name}})])})),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"textarea"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.me.msg,expression:"me.msg"}],staticClass:"msg-content",attrs:{spellcheck:"false",name:"yourmsg"},domProps:{value:t.me.msg},on:{input:function(a){a.target.composing||t.$set(t.me,"msg",a.target.value)}}}),t._v(" "),e("div",{staticClass:"execute"},[e("button",{staticClass:"btn",on:{click:function(a){t.sendMsg("me")}}},[t._v("发送(S)")]),t._v(" "),e("button",{staticClass:"btn"},[t._v("关闭(C)")])])])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"read-more"},[e("p",[t._v("查看更多消息")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"moremsg"},[e("span",[t._v("消息记录")])])}],i={render:s,staticRenderFns:n};a.a=i},xJD8:function(t,a,e){"use strict";var s=e("CwAS");a.a={name:"app",components:{sideBar:s.a}}}},["NHnr"]);
//# sourceMappingURL=app.e1f3deaf09d20bf5d1ab.js.map