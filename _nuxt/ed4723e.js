(window.webpackJsonp=window.webpackJsonp||[]).push([[22,13],{251:function(t,e,r){"use strict";r.r(e);var o=r(252),n=r.n(o);for(var c in o)["default"].indexOf(c)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(c);e.default=n.a},252:function(t,e,r){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=o(r(1));e.default=n.default.extend({name:"Header",data:function(){return{}}})},253:function(t,e,r){"use strict";r.r(e);var o=r(254),n=r.n(o);for(var c in o)["default"].indexOf(c)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(c);e.default=n.a},254:function(t,e,r){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=o(r(1));e.default=n.default.extend({methods:{}})},278:function(t,e,r){"use strict";r(293);var o=r(249);e.a=o.a.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,r=t.top,o=t.right,footer=t.footer,n=t.insetFooter,c=t.bottom,l=t.left;return{paddingTop:"".concat(r+e,"px"),paddingRight:"".concat(o,"px"),paddingBottom:"".concat(footer+n+c,"px"),paddingLeft:"".concat(l,"px")}}},render:function(t){var data={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,data,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},279:function(t,e,r){var content=r(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(96).default)("270d4fe5",content,!0,{sourceMap:!1})},280:function(t,e,r){var o=r(95)((function(i){return i[1]}));o.push([t.i,".theme--light.v-footer{background-color:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-footer{background-color:#272727;color:#fff}.v-sheet.v-footer{border-radius:0}.v-sheet.v-footer:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-footer.v-sheet--shaped{border-radius:24px 0}.v-footer{align-items:center;display:flex;flex:0 1 auto!important;flex-wrap:wrap;padding:6px 16px;position:relative;transition-duration:.2s;transition-property:background-color,left,right;transition-timing-function:cubic-bezier(.4,0,.2,1)}.v-footer:not([data-booted=true]){transition:none!important}.v-footer--absolute,.v-footer--fixed{z-index:3}.v-footer--absolute{position:absolute}.v-footer--absolute:not(.v-footer--inset){width:100%}.v-footer--fixed{position:fixed}.v-footer--padless{padding:0}",""]),o.locals={},t.exports=o},291:function(t,e,r){var content=r(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(96).default)("79aebad6",content,!0,{sourceMap:!1})},292:function(t,e,r){var o=r(95)((function(i){return i[1]}));o.push([t.i,".theme--light.v-application{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-application .text--primary{color:rgba(0,0,0,.87)!important}.theme--light.v-application .text--secondary{color:rgba(0,0,0,.6)!important}.theme--light.v-application .text--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-application{background:#121212;color:#fff}.theme--dark.v-application .text--primary{color:#fff!important}.theme--dark.v-application .text--secondary{color:hsla(0,0%,100%,.7)!important}.theme--dark.v-application .text--disabled{color:hsla(0,0%,100%,.5)!important}.v-application{display:flex;position:relative}.v-application a{cursor:pointer}.v-application--is-rtl{direction:rtl}.v-application--wrap{flex:1 1 auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:flex;flex-direction:column;min-height:100vh;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-application,.v-application--wrap{display:block}}}",""]),o.locals={},t.exports=o},293:function(t,e,r){var content=r(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(96).default)("408994f2",content,!0,{sourceMap:!1})},294:function(t,e,r){var o=r(95)((function(i){return i[1]}));o.push([t.i,".v-main{display:flex;flex:1 0 auto;max-width:100%;transition:.2s cubic-bezier(.4,0,.2,1)}.v-main:not([data-booted=true]){transition:none!important}.v-main__wrap{flex:1 1 auto;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-main{display:block}}}",""]),o.locals={},t.exports=o},296:function(t,e,r){"use strict";r(26),r(23),r(31),r(49),r(50);var o=r(16),n=(r(157),r(247),r(279),r(256)),c=r(263),l=r(249),f=r(226),d=r(9);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(f.a)(n.a,Object(c.a)("footer",["height","inset"]),l.a).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return h(h({},n.a.options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return h(h({},n.a.options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(d.i)(t),left:Object(d.i)(this.computedLeft),right:Object(d.i)(this.computedRight),bottom:Object(d.i)(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var data=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,data,this.$slots.default)}})},307:function(t,e,r){"use strict";r(26),r(23),r(31),r(49),r(50);var o=r(16),n=(r(291),r(227)),c=r(226);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(n.a).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:f({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},336:function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return d}));var o=r(417),n=r(315),c=r(354),l=r(309),f=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(o.a,{attrs:{app:""}},[e(l.c,{on:{click:function(e){return t.$router.push("/")}}},[t._v("Calendar Estimator")]),t._v(" "),e(c.a),t._v(" "),e(n.a,{attrs:{depressed:""},on:{click:function(e){return t.$router.push("/experiment")}}},[t._v("Experiment")]),t._v(" "),t.$accessor.debug.isDebug?e("div",[e(n.a,{attrs:{depressed:""},on:{click:function(e){return t.$router.push("/tasks")}}},[t._v("Tasks")]),t._v(" "),e(n.a,{attrs:{depressed:""},on:{click:function(e){return t.$router.push("/events")}}},[t._v("Events")]),t._v(" "),e(n.a,{attrs:{depressed:""},on:{click:function(e){return t.$router.push("/debug")}}},[t._v("Debug")])],1):t._e()],1)},d=[]},337:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return c}));var o=r(296),n=function(){var t=this._self._c;this._self._setupProxy;return t(o.a,{attrs:{app:""}})},c=[]},339:function(t,e,r){"use strict";r.r(e);var o=r(336),n=r(251);for(var c in n)["default"].indexOf(c)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(c);var l=r(56),component=Object(l.a)(n.default,o.a,o.b,!1,null,null,null);e.default=component.exports},342:function(t,e,r){"use strict";r.r(e);var o=r(337),n=r(253);for(var c in n)["default"].indexOf(c)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(c);var l=r(56),component=Object(l.a)(n.default,o.a,o.b,!1,null,null,null);e.default=component.exports},564:function(t,e,r){"use strict";r.r(e);var o=r(565),n=r.n(o);for(var c in o)["default"].indexOf(c)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(c);e.default=n.a},565:function(t,e,r){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=o(r(1));e.default=n.default.extend({name:"Tasks",data:function(){return{tasks:[]}},mounted:function(){var t=this;this.tasks=this.$accessor.task.tasks,this.$store.watch((function(t){return t.task.tasks}),(function(e){t.tasks=e}))},methods:{calc:function(t){return this.$estimate.estimate(t).histogram},resetTasks:function(){this.$accessor.task.resetTasks()}}})},610:function(t,e,r){"use strict";r.d(e,"a",(function(){return v})),r.d(e,"b",(function(){return h}));var o=r(307),n=r(315),c=r(416),l=r(369),f=r(278),d=r(415),v=(r(17),function(){var t=this,e=t._self._c;t._self._setupProxy;return e(o.a,[e("Header"),t._v(" "),e(f.a,[e(l.a,[e(d.a,[e(c.a,[e(n.a,{on:{click:t.resetTasks}},[t._v("Reset Tasks")])],1)],1),t._v(" "),e(d.a,[e(c.a,[t._v("index")]),t._v(" "),e(c.a,[t._v("name")]),t._v(" "),e(c.a,[t._v("subTasks")]),t._v(" "),e(c.a,[t._v("surprises")]),t._v(" "),e(c.a,[t._v("histogram")])],1),t._v(" "),t._l(t.tasks,(function(r,o){return e("div",{key:o},[e(d.a,[e(c.a,[e("span",[t._v(t._s(o))])]),t._v(" "),e(c.a,[e("span",[t._v(t._s(r.name))])]),t._v(" "),e(c.a,[e("span",[t._v(t._s(r.subTasks))])]),t._v(" "),e(c.a,[e("span",[t._v(t._s(r.surprises))])]),t._v(" "),e(c.a,[e("span",[t._v(t._s(t.calc(r)))])])],1)],1)}))],2)],1),t._v(" "),e("Footer")],1)}),h=[]},615:function(t,e,r){"use strict";r.r(e);var o=r(610),n=r(564);for(var c in n)["default"].indexOf(c)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(c);var l=r(56),component=Object(l.a)(n.default,o.a,o.b,!1,null,null,null);e.default=component.exports,installComponents(component,{Header:r(339).default,Footer:r(342).default})}}]);