(window.webpackJsonp=window.webpackJsonp||[]).push([[7,11,12,17],{235:function(t,e,n){"use strict";n.r(e);var r=n(236),o=n.n(r);for(var l in r)["default"].indexOf(l)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},236:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(0));e.default=o.default.extend({props:{subTasks:{type:Array,required:!0}},data:function(){return{units:[]}},methods:{insertSubTask:function(t){this.subTasks.splice(t+1,0,{name:"",range:[0,10],unit:"minute(s)"})},removeSubTask:function(t){this.subTasks.length>1&&this.subTasks.splice(t,1)}},mounted:function(){this.units=this.$constants.units}})},237:function(t,e,n){"use strict";n.r(e);var r=n(238),o=n.n(r);for(var l in r)["default"].indexOf(l)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},238:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(0));e.default=o.default.extend({props:{suprises:{type:Array,required:!0}},data:function(){return{units:[],eventTypes:[]}},methods:{insertSuprise:function(t){this.suprises.splice(t+1,0,{name:"",range:[0,10],unit:"minute(s)",eventType:"slower",probability:[0,1]})},removesuprise:function(t){this.suprises.length>1&&this.suprises.splice(t,1)}},mounted:function(){var t=this.$constants;this.units=t.units,this.eventTypes=t.eventTypes}})},277:function(t,e,n){"use strict";n.r(e);var r=n(278),o=n.n(r);for(var l in r)["default"].indexOf(l)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},278:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(0));e.default=o.default.extend({props:{value:Boolean},data:function(){return{task:{name:"",subTasks:[{name:"",range:[0,10],unit:"minute(s)"}],surprises:[{name:"",range:[0,10],unit:"minute(s)",eventType:"slower",probability:[0,1]}]}}},methods:{addTask:function(){this.$accessor.task.addTask(this.task),this.resetTask(),this.$emit("close-dialog")},resetTask:function(){this.task={name:"",subTasks:[{name:"",range:[0,10],unit:"minute(s)"}],surprises:[{name:"",range:[0,10],unit:"minute(s)",eventType:"slower",probability:[0,1]}]}},setExample1:function(){this.task=this.$constants.example1},onClickOutside:function(){this.$emit("close-dialog")}}})},314:function(t,e,n){var content=n(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("b5e43e10",content,!0,{sourceMap:!1})},315:function(t,e,n){var r=n(90)((function(i){return i[1]}));r.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;outline:none;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{animation-duration:.15s;animation-name:animate-dialog;animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),r.locals={},t.exports=r},317:function(t,e,n){var content=n(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("ab2149b8",content,!0,{sourceMap:!1})},318:function(t,e,n){var r=n(90)((function(i){return i[1]}));r.push([t.i,".theme--light.v-overlay{color:rgba(0,0,0,.87)}.theme--dark.v-overlay{color:#fff}.v-overlay{align-items:center;border-radius:inherit;display:flex;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;transition:.3s cubic-bezier(.25,.8,.5,1),z-index 1ms}.v-overlay__content{position:relative}.v-overlay__scrim{border-radius:inherit;bottom:0;height:100%;left:0;position:absolute;right:0;top:0;transition:inherit;width:100%;will-change:opacity}.v-overlay--absolute{position:absolute}.v-overlay--active{pointer-events:auto}",""]),r.locals={},t.exports=r},321:function(t,e,n){var content=n(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("2c4fe830",content,!0,{sourceMap:!1})},322:function(t,e,n){var r=n(90)((function(i){return i[1]}));r.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;overflow-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),r.locals={},t.exports=r},326:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return m}));var r=n(491),o=n(1378),l=n(1382),c=n(1377),d=n(1381),v=n(473),h=n(1371),f=(n(17),function(){var t=this,e=t._self._c;t._self._setupProxy;return e(l.a,[e(c.a,[e(o.a,[e("div",{staticClass:"text-h5"},[t._v("1. Break the task down into steps")])])],1),t._v(" "),t._l(t.subTasks,(function(n,l){return e(c.a,{key:l,attrs:{align:"baseline"}},[e(o.a,{attrs:{cols:"auto"}},[e("span",[t._v(t._s(l+1)+".")])]),t._v(" "),e(o.a,{attrs:{cols:"4"}},[e(h.a,{attrs:{label:"Name (Optional)","hide-details":""},model:{value:n.name,callback:function(e){t.$set(n,"name",e)},expression:"subTask.name"}})],1),t._v(" "),e(o.a,{attrs:{cols:"6"}},[e(c.a,{attrs:{align:"baseline"}},[e(o.a,{attrs:{cols:"auto"}},[e("span",{staticClass:"mr-1"},[t._v("from")])]),t._v(" "),e(o.a,{attrs:{cols:"2"}},[e(h.a,{staticClass:"mr-1",attrs:{max:"200",type:"number","hide-details":""},model:{value:n.range[0],callback:function(e){t.$set(n.range,0,e)},expression:"subTask.range[0]"}})],1),t._v(" "),e(o.a,{attrs:{cols:"auto"}},[e("span",{staticClass:"mr-1"},[t._v("to")])]),t._v(" "),e(o.a,{attrs:{cols:"2"}},[e(h.a,{attrs:{min:"1",max:"200",type:"number","hide-details":""},model:{value:n.range[1],callback:function(e){t.$set(n.range,1,e)},expression:"subTask.range[1]"}})],1),t._v(" "),e(o.a,{attrs:{cols:"3"}},[e(d.a,{attrs:{"hide-details":"",items:t.units},model:{value:n.unit,callback:function(e){t.$set(n,"unit",e)},expression:"subTask.unit"}})],1)],1)],1),t._v(" "),e(v.a),t._v(" "),e(o.a,{attrs:{cols:"1"}},[e(c.a,[e(r.a,{attrs:{"x-small":""},on:{click:function(e){return t.insertSubTask(l)}}},[t._v("+")]),t._v(" "),e(r.a,{attrs:{"x-small":""},on:{click:function(e){return t.removeSubTask(l)}}},[t._v("X")])],1)],1)],1)}))],2)}),m=[]},327:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return m}));var r=n(491),o=n(1378),l=n(1382),c=n(1377),d=n(1381),v=n(473),h=n(1371),f=(n(17),function(){var t=this,e=t._self._c;t._self._setupProxy;return e(l.a,[e(c.a,[e(o.a,[e("div",{staticClass:"text-h5"},[t._v("\n        2. Consider surprise events which could slow you down or speed you up\n      ")])])],1),t._v(" "),t._l(t.suprises,(function(n,l){return e(c.a,{key:l},[e(o.a,{attrs:{cols:"11"}},[e(c.a,{attrs:{align:"baseline"}},[e(o.a,{attrs:{cols:"auto"}},[e("span",[t._v(t._s(l+1)+".")])]),t._v(" "),e(o.a,{attrs:{cols:"4"}},[e(h.a,{attrs:{label:"Name (Optional)","hide-details":""},model:{value:n.name,callback:function(e){t.$set(n,"name",e)},expression:"suprise.name"}})],1),t._v(" "),e(o.a,{staticClass:"flex-shrink-0 flex-grow-1",attrs:{cols:"3"}},[e(c.a,{attrs:{align:"baseline"}},[e(o.a,{staticClass:"flex-shrink-1 flex-grow-0",attrs:{cols:"3"}},[e("p",[t._v("from")])]),t._v(" "),e(o.a,{staticClass:"flex-shrink-0 flex-grow-1",attrs:{cols:"3"}},[e(h.a,{attrs:{dense:"",max:"200",type:"number","hide-details":""},model:{value:n.range[0],callback:function(e){t.$set(n.range,0,e)},expression:"suprise.range[0]"}})],1),t._v(" "),e(o.a,{staticClass:"flex-shrink-1 flex-grow-0",attrs:{cols:"2"}},[e("p",[t._v("to")])]),t._v(" "),e(o.a,{staticClass:"flex-shrink-0 flex-grow-1",attrs:{cols:"3"}},[e(h.a,{attrs:{dense:"",min:"1",max:"200",type:"number","hide-details":""},model:{value:n.range[1],callback:function(e){t.$set(n.range,1,e)},expression:"suprise.range[1]"}})],1)],1)],1),t._v(" "),e(o.a,{staticClass:"flex-shrink-1 flex-grow-0",attrs:{cols:"2"}},[e(d.a,{attrs:{"hide-details":"",items:t.units},model:{value:n.unit,callback:function(e){t.$set(n,"unit",e)},expression:"suprise.unit"}})],1),t._v(" "),e(o.a,{staticClass:"flex-shrink-1 flex-grow-0",attrs:{cols:"2"}},[e(d.a,{attrs:{"hide-details":"",items:t.eventTypes},model:{value:n.eventType,callback:function(e){t.$set(n,"eventType",e)},expression:"suprise.eventType"}})],1)],1),t._v(" "),e(c.a,{staticClass:"mt-n4",attrs:{align:"baseline"}},[e(o.a,{attrs:{cols:"auto"}},[e("span",[t._v("it happens")])]),t._v(" "),e(o.a,{attrs:{cols:"auto"}},[e(h.a,{attrs:{dense:"","hide-details":"",type:"number",min:"0",max:"1000"},model:{value:n.probability[0],callback:function(e){t.$set(n.probability,0,e)},expression:"suprise.probability[0]"}})],1),t._v(" "),e(o.a,{attrs:{cols:"auto"}},[e("span",[t._v("time(s) out of")])]),t._v(" "),e(o.a,{attrs:{cols:"auto"}},[e(h.a,{attrs:{dense:"","hide-details":"",type:"number",min:"1",max:"1000"},model:{value:n.probability[1],callback:function(e){t.$set(n.probability,1,e)},expression:"suprise.probability[1]"}})],1),t._v(" "),e(v.a)],1)],1),t._v(" "),e(o.a,{attrs:{cols:"auto"}},[e(c.a,[e(r.a,{attrs:{"x-small":""},on:{click:function(e){return t.insertSuprise(l)}}},[t._v("+")]),t._v(" "),e(r.a,{attrs:{"x-small":""},on:{click:function(e){return t.removesuprise(l)}}},[t._v("X")])],1)],1)],1)}))],2)}),m=[]},343:function(t,e,n){"use strict";n.r(e);var r=n(326),o=n(235);for(var l in o)["default"].indexOf(l)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(l);var c=n(55),component=Object(c.a)(o.default,r.a,r.b,!1,null,null,null);e.default=component.exports},344:function(t,e,n){"use strict";n.r(e);var r=n(327),o=n(237);for(var l in o)["default"].indexOf(l)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(l);var c=n(55),component=Object(c.a)(o.default,r.a,r.b,!1,null,null,null);e.default=component.exports},403:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return m}));var r=n(491),o=n(485),l=n(1378),c=n(1382),d=n(489),v=n(1377),h=n(1371),f=(n(17),function(){var t=this,e=t._self._c;t._self._setupProxy;return e(d.a,{attrs:{"max-width":"70%"},on:{"click:outside":t.onClickOutside},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[e(o.a,[e(c.a,[e(v.a,[e(l.a,[e(r.a,{on:{click:t.setExample1}},[t._v("Example 1")])],1),t._v(" "),e(l.a,[e(r.a,{on:{click:t.resetTask}},[t._v("Try if yourself")])],1)],1),t._v(" "),e(v.a,[e(l.a,[e(h.a,{attrs:{"hide-details":"",label:"Name (Optional)"},model:{value:t.task.name,callback:function(e){t.$set(t.task,"name",e)},expression:"task.name"}})],1)],1),t._v(" "),e(v.a,[e("SubTaskContainer",{attrs:{subTasks:t.task.subTasks}})],1),t._v(" "),e(v.a,[e("SurprisesContainer",{attrs:{suprises:t.task.surprises}})],1),t._v(" "),e(v.a,[e(l.a,[e(r.a,{on:{click:t.addTask}},[t._v("Create Task")])],1)],1)],1)],1)],1)}),m=[]},481:function(t,e,n){"use strict";n.r(e);var r=n(403),o=n(277);for(var l in o)["default"].indexOf(l)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(l);var c=n(55),component=Object(c.a)(o.default,r.a,r.b,!1,null,null,null);e.default=component.exports,installComponents(component,{SubTaskContainer:n(343).default,SurprisesContainer:n(344).default})},485:function(t,e,n){"use strict";n(25),n(23),n(30),n(46),n(47);var r=n(16),o=(n(147),n(321),n(311)),l=n(345),c=n(295),d=n(207);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},489:function(t,e,n){"use strict";var r=n(250),o=n(16),l=(n(147),n(36),n(31),n(148),n(25),n(23),n(30),n(46),n(47),n(314),n(1380)),c=n(319),d=n(316),v=n(340),h=(n(317),n(219)),f=n(215),m=n(249),y=n(207);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var _=Object(y.a)(h.a,f.a,m.a).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var data=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",data)},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),k=_,w=n(9),O=n(0).default.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new k({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(w.p)(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(w.a)(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[w.r.up,w.r.pageup],n=[w.r.down,w.r.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!n.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var style=window.getComputedStyle(t);return(["auto","scroll"].includes(style.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(style.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var n,r,o=e.shiftKey||e.deltaX?"x":"y",l="y"===o?e.deltaY:e.deltaX||e.deltaY;return"y"===o?(n=0===t.scrollTop,r=t.scrollTop+t.clientHeight===t.scrollHeight):(n=0===t.scrollLeft,r=t.scrollLeft+t.clientWidth===t.scrollWidth),!(n||!(l<0))||(!(r||!(l>0))||!(!n&&!r)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var path=Object(w.f)(t);if("keydown"===t.type&&path[0]===document.body){var dialog=this.$refs.dialog,e=window.getSelection().anchorNode;return!(dialog&&this.hasScrollbar(dialog)&&this.isInside(e,dialog))||!this.shouldScroll(dialog,t)}for(var n=0;n<path.length;n++){var r=path[n];if(r===document)return!0;if(r===document.documentElement)return!0;if(r===this.$refs.content)return!0;if(this.hasScrollbar(r))return!this.shouldScroll(r,t)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(w.b)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),C=n(341),j=n(342),$=n(320),T=n(26);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var P=Object(y.a)(d.a,v.a,O,C.a,j.a,c.a);e.a=P.extend({name:"v-dialog",directives:{ClickOutside:$.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(t,"v-dialog--active",this.isActive),Object(o.a)(t,"v-dialog--persistent",this.persistent),Object(o.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(t,"v-dialog--scrollable",this.scrollable),Object(o.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(T.d)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):O.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){var e,n;(null===(e=t.$refs.dialog)||void 0===e?void 0:e.contains(document.activeElement))||(t.previousActiveElement=document.activeElement,null===(n=t.$refs.dialog)||void 0===n||n.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===w.r.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),o=Object(r.a)(n).find((function(t){return!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')}));o&&o.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(l.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:E({role:"dialog","aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=E(E({},data.style),{},{maxWidth:Object(w.g)(this.maxWidth),width:Object(w.g)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})}}]);