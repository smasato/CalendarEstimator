(window.webpackJsonp=window.webpackJsonp||[]).push([[6,9,10],{234:function(t,e,n){"use strict";n.r(e);var r=n(235),l=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=l.a},235:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var l=r(n(0));e.default=l.default.extend({props:{subTasks:{type:Array,required:!0}},data:function(){return{units:[]}},methods:{insertSubTask:function(t){this.subTasks.splice(t+1,0,{name:"",range:[0,10],unit:"minute(s)"})},removeSubTask:function(t){this.subTasks.length>1&&this.subTasks.splice(t,1)}},mounted:function(){this.units=this.$constants.units}})},236:function(t,e,n){"use strict";n.r(e);var r=n(237),l=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=l.a},237:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var l=r(n(0));e.default=l.default.extend({props:{suprises:{type:Array,required:!0}},data:function(){return{units:[],eventTypes:[]}},methods:{insertSuprise:function(t){this.suprises.splice(t+1,0,{name:"",range:[0,10],unit:"minute(s)",eventType:"slower",probability:[0,1]})},removesuprise:function(t){this.suprises.length>1&&this.suprises.splice(t,1)}},mounted:function(){var t=this.$constants;this.units=t.units,this.eventTypes=t.eventTypes}})},274:function(t,e,n){"use strict";n.r(e);var r=n(275),l=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=l.a},275:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var l=r(n(0));e.default=l.default.extend({props:{value:Boolean},data:function(){return{task:{name:"",subTasks:[{name:"",range:[0,10],unit:"minute(s)"}],surprises:[{name:"",range:[0,10],unit:"minute(s)",eventType:"slower",probability:[0,1]}]}}},methods:{addTask:function(){this.$accessor.task.addTask(this.task),this.resetTask(),this.$emit("close-dialog")},resetTask:function(){this.task={name:"",subTasks:[{name:"",range:[0,10],unit:"minute(s)"}],surprises:[{name:"",range:[0,10],unit:"minute(s)",eventType:"slower",probability:[0,1]}]}},setExample1:function(){this.task=this.$constants.example1},onClickOutside:function(){this.$emit("close-dialog")}}})},311:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return _}));var r=n(469),l=n(1363),o=n(1369),c=n(1362),f=n(1367),d=n(1364),v=n(1357),m=(n(17),function(){var t=this,e=t._self._c;t._self._setupProxy;return e(o.a,[e(c.a,[e(l.a,[e("div",{staticClass:"text-h5"},[t._v("1. Break the task down into steps")])])],1),t._v(" "),t._l(t.subTasks,(function(n,o){return e(c.a,{key:o,attrs:{align:"baseline"}},[e(l.a,{attrs:{cols:"auto"}},[e("span",[t._v(t._s(o+1)+".")])]),t._v(" "),e(l.a,{attrs:{cols:"4"}},[e(v.a,{attrs:{label:"Name (Optional)","hide-details":""},model:{value:n.name,callback:function(e){t.$set(n,"name",e)},expression:"subTask.name"}})],1),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e(c.a,{attrs:{align:"baseline"}},[e(l.a,{attrs:{cols:"auto"}},[e("span",{staticClass:"mr-1"},[t._v("from")])]),t._v(" "),e(l.a,{attrs:{cols:"2"}},[e(v.a,{staticClass:"mr-1",attrs:{max:"200",type:"number","hide-details":""},model:{value:n.range[0],callback:function(e){t.$set(n.range,0,e)},expression:"subTask.range[0]"}})],1),t._v(" "),e(l.a,{attrs:{cols:"auto"}},[e("span",{staticClass:"mr-1"},[t._v("to")])]),t._v(" "),e(l.a,{attrs:{cols:"2"}},[e(v.a,{attrs:{min:"1",max:"200",type:"number","hide-details":""},model:{value:n.range[1],callback:function(e){t.$set(n.range,1,e)},expression:"subTask.range[1]"}})],1),t._v(" "),e(l.a,{attrs:{cols:"3"}},[e(f.a,{attrs:{"hide-details":"",items:t.units},model:{value:n.unit,callback:function(e){t.$set(n,"unit",e)},expression:"subTask.unit"}})],1)],1)],1),t._v(" "),e(d.a),t._v(" "),e(l.a,{attrs:{cols:"1"}},[e(c.a,[e(r.a,{attrs:{"x-small":""},on:{click:function(e){return t.insertSubTask(o)}}},[t._v("+")]),t._v(" "),e(r.a,{attrs:{"x-small":""},on:{click:function(e){return t.removeSubTask(o)}}},[t._v("X")])],1)],1)],1)}))],2)}),_=[]},312:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return _}));var r=n(469),l=n(1363),o=n(1369),c=n(1362),f=n(1367),d=n(1364),v=n(1357),m=(n(17),function(){var t=this,e=t._self._c;t._self._setupProxy;return e(o.a,[e(c.a,[e(l.a,[e("div",{staticClass:"text-h5"},[t._v("\n        2. Consider surprise events which could slow you down or speed you up\n      ")])])],1),t._v(" "),t._l(t.suprises,(function(n,o){return e(c.a,{key:o},[e(l.a,{attrs:{cols:"11"}},[e(c.a,{attrs:{align:"baseline"}},[e(l.a,{attrs:{cols:"auto"}},[e("span",[t._v(t._s(o+1)+".")])]),t._v(" "),e(l.a,{attrs:{cols:"4"}},[e(v.a,{attrs:{label:"Name (Optional)","hide-details":""},model:{value:n.name,callback:function(e){t.$set(n,"name",e)},expression:"suprise.name"}})],1),t._v(" "),e(l.a,{staticClass:"flex-shrink-0 flex-grow-1",attrs:{cols:"3"}},[e(c.a,{attrs:{align:"baseline"}},[e(l.a,{staticClass:"flex-shrink-1 flex-grow-0",attrs:{cols:"3"}},[e("p",[t._v("from")])]),t._v(" "),e(l.a,{staticClass:"flex-shrink-0 flex-grow-1",attrs:{cols:"3"}},[e(v.a,{attrs:{dense:"",max:"200",type:"number","hide-details":""},model:{value:n.range[0],callback:function(e){t.$set(n.range,0,e)},expression:"suprise.range[0]"}})],1),t._v(" "),e(l.a,{staticClass:"flex-shrink-1 flex-grow-0",attrs:{cols:"2"}},[e("p",[t._v("to")])]),t._v(" "),e(l.a,{staticClass:"flex-shrink-0 flex-grow-1",attrs:{cols:"3"}},[e(v.a,{attrs:{dense:"",min:"1",max:"200",type:"number","hide-details":""},model:{value:n.range[1],callback:function(e){t.$set(n.range,1,e)},expression:"suprise.range[1]"}})],1)],1)],1),t._v(" "),e(l.a,{staticClass:"flex-shrink-1 flex-grow-0",attrs:{cols:"2"}},[e(f.a,{attrs:{"hide-details":"",items:t.units},model:{value:n.unit,callback:function(e){t.$set(n,"unit",e)},expression:"suprise.unit"}})],1),t._v(" "),e(l.a,{staticClass:"flex-shrink-1 flex-grow-0",attrs:{cols:"2"}},[e(f.a,{attrs:{"hide-details":"",items:t.eventTypes},model:{value:n.eventType,callback:function(e){t.$set(n,"eventType",e)},expression:"suprise.eventType"}})],1)],1),t._v(" "),e(c.a,{staticClass:"mt-n4",attrs:{align:"baseline"}},[e(l.a,{attrs:{cols:"auto"}},[e("span",[t._v("it happens")])]),t._v(" "),e(l.a,{attrs:{cols:"auto"}},[e(v.a,{attrs:{dense:"","hide-details":"",type:"number",min:"0",max:"1000"},model:{value:n.probability[0],callback:function(e){t.$set(n.probability,0,e)},expression:"suprise.probability[0]"}})],1),t._v(" "),e(l.a,{attrs:{cols:"auto"}},[e("span",[t._v("time(s) out of")])]),t._v(" "),e(l.a,{attrs:{cols:"auto"}},[e(v.a,{attrs:{dense:"","hide-details":"",type:"number",min:"1",max:"1000"},model:{value:n.probability[1],callback:function(e){t.$set(n.probability,1,e)},expression:"suprise.probability[1]"}})],1),t._v(" "),e(d.a)],1)],1),t._v(" "),e(l.a,{attrs:{cols:"auto"}},[e(c.a,[e(r.a,{attrs:{"x-small":""},on:{click:function(e){return t.insertSuprise(o)}}},[t._v("+")]),t._v(" "),e(r.a,{attrs:{"x-small":""},on:{click:function(e){return t.removesuprise(o)}}},[t._v("X")])],1)],1)],1)}))],2)}),_=[]},329:function(t,e,n){"use strict";n.r(e);var r=n(311),l=n(234);for(var o in l)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return l[t]}))}(o);var c=n(55),component=Object(c.a)(l.default,r.a,r.b,!1,null,null,null);e.default=component.exports},330:function(t,e,n){"use strict";n.r(e);var r=n(312),l=n(236);for(var o in l)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return l[t]}))}(o);var c=n(55),component=Object(c.a)(l.default,r.a,r.b,!1,null,null,null);e.default=component.exports},386:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return _}));var r=n(469),l=n(1319),o=n(1363),c=n(1369),f=n(1356),d=n(1362),v=n(1357),m=(n(17),function(){var t=this,e=t._self._c;t._self._setupProxy;return e(f.a,{attrs:{"max-width":"70%"},on:{"click:outside":t.onClickOutside},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[e(l.a,[e(c.a,[e(d.a,[e(o.a,[e(r.a,{on:{click:t.setExample1}},[t._v("Example 1")])],1),t._v(" "),e(o.a,[e(r.a,{on:{click:t.resetTask}},[t._v("Try if yourself")])],1)],1),t._v(" "),e(d.a,[e(o.a,[e(v.a,{attrs:{"hide-details":"",label:"Name (Optional)"},model:{value:t.task.name,callback:function(e){t.$set(t.task,"name",e)},expression:"task.name"}})],1)],1),t._v(" "),e(d.a,[e("SubTaskContainer",{attrs:{subTasks:t.task.subTasks}})],1),t._v(" "),e(d.a,[e("SurprisesContainer",{attrs:{suprises:t.task.surprises}})],1),t._v(" "),e(d.a,[e(o.a,[e(r.a,{on:{click:t.addTask}},[t._v("Create Task")])],1)],1)],1)],1)],1)}),_=[]},461:function(t,e,n){"use strict";n.r(e);var r=n(386),l=n(274);for(var o in l)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return l[t]}))}(o);var c=n(55),component=Object(c.a)(l.default,r.a,r.b,!1,null,null,null);e.default=component.exports,installComponents(component,{SubTaskContainer:n(329).default,SurprisesContainer:n(330).default})}}]);