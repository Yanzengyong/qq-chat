webpackJsonp([1],{"+g8z":function(t,a){},"2zFk":function(t,a,s){"use strict";var e=s("Dd8w"),n=s.n(e),i=s("NYxO");a.a={data:function(){return{res:{tools:[{name:"音频",src:"./static/images/tools/toobar_audio.png"},{name:"视频",src:"./static/images/tools/toobar_video.png"},{name:"远程演示",src:"./static/images/tools/toobar_screen_share.png"},{name:"传送文件",src:"./static/images/tools/toobar_send.png"},{name:"远程控制",src:"./static/images/tools/toobar_remote.png"},{name:"发起多人聊天",src:"./static/images/tools/toobar_add.png"},{name:"应用",src:"./static/images/tools/toobar_app.png"}],menu:[{name:"设置",src:"./static/images/menu/setting.png"},{name:"缩小",src:"./static/images/menu/min.png"},{name:"放大",src:"./static/images/menu/max.png"},{name:"关闭",src:"./static/images/menu/close.png"}],msgTools:[{name:"字体",src:"./static/images/msg-tools/font.png"},{name:"表情",src:"./static/images/msg-tools/face.png"},{name:"GIF",src:"./static/images/msg-tools/gif.png"},{name:"窗口抖动",src:"./static/images/msg-tools/twitter.png"},{name:"语音消息",src:"./static/images/msg-tools/record.png"},{name:"图片",src:"./static/images/msg-tools/sendpic.png"},{name:"音乐",src:"./static/images/msg-tools/music.png"},{name:"截图",src:"./static/images/msg-tools/cut.png"},{name:"红包",src:"./static/images/msg-tools/hb.png"}],more:"./static/images/tools/more.png"},you:{name:"夜喵。",avatar:"./static/images/avatar_2.jpg",msg:"待发送的消息"},me:{name:"地瓜",avatar:"./static/images/avatar_1.png",msg:"斯蒂芬"},msgList:[{text:"喵喵喵，喵？",who:"you"},{text:"喵喵，喵喵喵？",who:"me"},{text:"喵喵喵，喵喵喵喵喵喵喵？",who:"you"},{text:"喵喵喵喵喵喵喵喵喵喵喵喵，喵喵……",who:"me"},{text:"喵喵，喵喵喵，喵喵喵喵喵喵喵喵喵喵喵！！！",who:"you"},{text:"喵喵喵，喵喵喵喵喵！",who:"you"},{text:"喵，喵喵喵喵喵喵喵，喵喵喵喵喵喵喵……",who:"me"},{text:"喵喵喵喵，喵喵喵喵喵喵喵喵？",who:"you"},{text:"喵喵，喵喵喵喵喵喵喵喵",who:"me"},{text:"喵，喵喵喵，喵喵喵喵喵喵喵喵",who:"you"},{text:"喵喵，喵喵喵喵！！",who:"me"}]}},computed:n()({},Object(i.b)({youName:"getYouName",youMsg:"getYouMsg"})),watch:{youName:function(t){this.you.name=t},youMsg:function(t){this.msgList.push({text:t,who:"you"})}},mounted:function(){var t=this;this.$nextTick(function(){t.$refs.msgContent.scrollTop=t.$refs.msgContent.scrollHeight})},methods:{sendMsg:function(){this.msgList.push({text:this.me.msg,who:"me"}),this.me.msg=""}}}},CwAS:function(t,a,s){"use strict";function e(t){s("KDs0")}var n=s("bjQc"),i=s("aJn7"),o=s("VU/8"),c=e,r=o(n.a,i.a,!1,c,"data-v-2024a2e6",null);a.a=r.exports},GQMZ:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement;return(t._self._c||a)("div")},n=[],i={render:e,staticRenderFns:n};a.a=i},HFLR:function(t,a){},IcnI:function(t,a,s){"use strict";var e=s("7+uW"),n=s("NYxO");e.a.use(n.a);var i=new n.a.Store({state:{you:{name:"夜喵",avatar:"",msg:""},me:{name:"",avatar:"",msg:""}},getters:{getYouName:function(t){return t.you.name},getYouAvatar:function(t){return t.you.avatar},getYouMsg:function(t){return t.you.msg},getMeName:function(t){return t.me.name},getMeAvatar:function(t){return t.me.avatar},getMeMsg:function(t){return t.me.msg}},actions:{updateYouName:function(t,a){t.commit("UPDATE_YOU_NAME",a)},updateYouAvatar:function(t,a){t.commit("UPDATE_YOU_AVATAR)",a)},updateYouMsg:function(t,a){t.commit("UPDATE_YOU_MSG",a)},updateMeName:function(t,a){t.commit("UPDATE_ME_NAME",a)},updateMeAvatar:function(t,a){t.commit("UPDATE_ME_AVATAR",a)},updateMeMsg:function(t,a){t.commit("UPDATE_ME_MSG",a)}},mutations:{UPDATE_YOU_NAME:function(t,a){t.you.name=a},UPDATE_YOU_AVATAR:function(t,a){t.you.avatar=a},UPDATE_YOU_MSG:function(t,a){t.you.msg=a},UPDATE_ME_NAME:function(t,a){t.me.name=a},UPDATE_ME_AVATAR:function(t,a){t.me.avatar=a},UPDATE_ME_MSG:function(t,a){t.me.msg=a}}});a.a=i},JleS:function(t,a,s){"use strict";a.a={data:function(){return{}}}},KDs0:function(t,a){},M93x:function(t,a,s){"use strict";function e(t){s("HFLR")}var n=s("xJD8"),i=s("sSM7"),o=s("VU/8"),c=e,r=o(n.a,i.a,!1,c,null,null);a.a=r.exports},MvLk:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{attrs:{id:"chat-room"}},[s("div",{staticClass:"head"},[s("div",{staticClass:"info"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:t.you.avatar,draggable:"false"}})]),t._v(" "),s("p",{staticClass:"name"},[t._v(t._s(t.youName))])]),t._v(" "),s("div",{staticClass:"tools"},[s("ul",{staticClass:"list"},t._l(t.res.tools,function(t,a){return s("li",{key:a,staticClass:"item"},[s("img",{attrs:{src:t.src,alt:t.name}})])}))]),t._v(" "),s("div",{staticClass:"menu"},[s("ul",{staticClass:"list"},t._l(t.res.menu,function(t,a){return s("li",{key:a,staticClass:"item"},[s("img",{attrs:{src:t.src,alt:t.name}})])}))])]),t._v(" "),s("div",{ref:"msgContent",staticClass:"content"},[s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("div",{staticClass:"msg-panel"},t._l(t.msgList,function(a,e){return s("div",{key:e,class:["msg-item",a.who]},[s("div",{staticClass:"avatar"},["you"===a.who?s("img",{attrs:{src:t.you.avatar}}):s("img",{attrs:{src:t.me.avatar}})]),t._v(" "),s("div",{staticClass:"text"},[s("p",[t._v(t._s(a.text))])])])}))])]),t._v(" "),s("div",{staticClass:"message"},[s("div",{staticClass:"tools"},[s("ul",{staticClass:"list left"},t._l(t.res.msgTools,function(t,a){return s("li",{key:a,staticClass:"item"},[s("img",{attrs:{src:t.src,alt:t.name}})])})),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"textarea"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.me.msg,expression:"me.msg"}],staticClass:"msg-content",attrs:{spellcheck:"false",name:"yourmsg"},domProps:{value:t.me.msg},on:{input:function(a){a.target.composing||t.$set(t.me,"msg",a.target.value)}}}),t._v(" "),s("div",{staticClass:"execute"},[s("button",{staticClass:"btn",on:{click:function(a){t.sendMsg("me")}}},[t._v("发送(S)")]),t._v(" "),s("button",{staticClass:"btn"},[t._v("关闭(C)")])])])])])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"read-more"},[s("p",[t._v("查看更多消息")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"moremsg"},[s("span",[t._v("消息记录")])])}],i={render:e,staticRenderFns:n};a.a=i},N4dJ:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),n=s("M93x"),i=s("YaEn"),o=s("IcnI"),c=s("+g8z");s.n(c);e.a.config.productionTip=!1,new e.a({el:"#app",router:i.a,store:o.a,template:"<App/>",components:{App:n.a}})},YaEn:function(t,a,s){"use strict";var e=s("7+uW"),n=s("/ocq"),i=s("wja1"),o=s("an6I");e.a.use(n.a),a.a=new n.a({routes:[{path:"/",redirect:"/qq"},{path:"/qq",name:"qq",component:i.a},{path:"/tim",name:"tim",component:o.a}]})},aJn7:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bg"},[s("div",{staticClass:"container"},[s("div",{staticClass:"route-panel"},t._l(t.routeList,function(a,e){return s("router-link",{key:e,attrs:{to:a.name,"active-class":"active"}},[t._v(t._s(a.label))])})),t._v(" "),s("div",{staticClass:"config"},[s("div",{staticClass:"config-panel"},[s("h1",[t._v("对方")]),t._v(" "),s("ul",{staticClass:"config-list"},[s("li",{staticClass:"config-item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.youName,expression:"youName"}],attrs:{type:"text",placeholder:"昵称"},domProps:{value:t.youName},on:{change:t.updateYouName,input:function(a){a.target.composing||(t.youName=a.target.value)}}})]),t._v(" "),t._m(0),t._v(" "),s("li",{staticClass:"config-item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.youMsg,expression:"youMsg"}],attrs:{type:"text",placeholder:"输入一条新消息"},domProps:{value:t.youMsg},on:{input:function(a){a.target.composing||(t.youMsg=a.target.value)}}})]),t._v(" "),s("li",{staticClass:"config-item"},[s("button",{on:{click:function(a){t.sendMsg("you")}}},[t._v("发送")])])])]),t._v(" "),t._m(1)])])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"config-item"},[s("input",{attrs:{type:"text",placeholder:"头像"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"config-panel"},[s("h1",[t._v("自己")]),t._v(" "),s("ul",{staticClass:"config-list"},[s("li",{staticClass:"config-item"},[s("input",{attrs:{type:"text",placeholder:"昵称"}})]),t._v(" "),s("li",{staticClass:"config-item"},[s("input",{attrs:{type:"text",placeholder:"头像"}})])])])}],i={render:e,staticRenderFns:n};a.a=i},an6I:function(t,a,s){"use strict";function e(t){s("N4dJ")}var n=s("JleS"),i=s("GQMZ"),o=s("VU/8"),c=e,r=o(n.a,i.a,!1,c,"data-v-65d29078",null);a.a=r.exports},bjQc:function(t,a,s){"use strict";var e=s("Dd8w"),n=s.n(e),i=s("NYxO");a.a={data:function(){return{routeList:[{label:"QQ",name:"qq"},{label:"TIM",name:"tim"}],youMsg:""}},computed:n()({},Object(i.b)({youName:"getYouName"})),methods:{updateYouName:function(t){this.$store.dispatch("updateYouName",t.target.value)},sendMsg:function(t){this.$store.dispatch("updateYouMsg",this.youMsg),this.youMsg=""}}}},sSM7:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("router-view",{staticClass:"app-main"}),t._v(" "),s("side-bar",{staticClass:"app-sidebar"})],1)},n=[],i={render:e,staticRenderFns:n};a.a=i},vlBw:function(t,a){},wja1:function(t,a,s){"use strict";function e(t){s("vlBw")}var n=s("2zFk"),i=s("MvLk"),o=s("VU/8"),c=e,r=o(n.a,i.a,!1,c,"data-v-3e6804b8",null);a.a=r.exports},xJD8:function(t,a,s){"use strict";var e=s("CwAS");a.a={name:"app",components:{sideBar:e.a}}}},["NHnr"]);
//# sourceMappingURL=app.0c4276a56ca77b5928a4.js.map