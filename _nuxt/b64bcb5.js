(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1215:function(t,n,e){"use strict";e.r(n);var r=e(1216),o=e.n(r);for(var l in r)["default"].indexOf(l)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(l);n.default=o.a},1216:function(t,n,e){"use strict";e(328);var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var o=r(e(3));n.default=o.default.extend({props:{subTasks:{type:Array,required:!0}},data:function(){return{units:[]}},methods:{insertSubTask:function(t){this.subTasks.splice(t+1,0,{name:"",range:[0,10],unit:"minute(s)"})},removeSubTask:function(t){this.subTasks.length>1&&this.subTasks.splice(t,1)},updatedRangeUpper:function(t,n){var e=Number(n);this.subTasks[t].range[0]>e&&(this.subTasks[t].range[0]=e)}},mounted:function(){this.units=this.$constants.UNITS}})},1256:function(t,n,e){"use strict";e.d(n,"a",(function(){return m})),e.d(n,"b",(function(){return _}));var r=e(1319),o=e(1397),l=e(1401),c=e(1396),d=e(1400),f=e(1301),v=e(1390),m=(e(31),function(){var t=this,n=t._self._c;t._self._setupProxy;return n(l.a,[n(c.a,[n(o.a,[n("div",{staticClass:"text-h5"},[t._v("1. Break the task down into steps")])])],1),t._v(" "),t._l(t.subTasks,(function(e,l){return n(c.a,{key:l,attrs:{align:"baseline"}},[n(o.a,{attrs:{cols:"auto"}},[n("span",[t._v(t._s(l+1)+".")])]),t._v(" "),n(o.a,{attrs:{cols:"4"}},[n(v.a,{attrs:{label:"Name (Optional)","hide-details":""},model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"subTask.name"}})],1),t._v(" "),n(o.a,{attrs:{cols:"6"}},[n(c.a,{attrs:{align:"baseline"}},[n(o.a,{attrs:{cols:"auto"}},[n("span",{staticClass:"mr-1"},[t._v("from")])]),t._v(" "),n(o.a,{attrs:{cols:"2"}},[n(v.a,{staticClass:"mr-1",attrs:{min:"0",max:e.range[1],type:"number","hide-details":""},model:{value:e.range[0],callback:function(n){t.$set(e.range,0,n)},expression:"subTask.range[0]"}})],1),t._v(" "),n(o.a,{attrs:{cols:"auto"}},[n("span",{staticClass:"mr-1"},[t._v("to")])]),t._v(" "),n(o.a,{attrs:{cols:"2"}},[n(v.a,{attrs:{min:"0",max:"200",type:"number","hide-details":""},on:{input:function(n){return t.updatedRangeUpper(l,n)}},model:{value:e.range[1],callback:function(n){t.$set(e.range,1,n)},expression:"subTask.range[1]"}})],1),t._v(" "),n(o.a,{attrs:{cols:"3"}},[n(d.a,{attrs:{"hide-details":"",items:t.units},model:{value:e.unit,callback:function(n){t.$set(e,"unit",n)},expression:"subTask.unit"}})],1)],1)],1),t._v(" "),n(f.a),t._v(" "),n(o.a,{attrs:{cols:"1"}},[n(c.a,[n(r.a,{attrs:{"x-small":""},on:{click:function(n){return t.insertSubTask(l)}}},[t._v("+")]),t._v(" "),n(r.a,{attrs:{"x-small":""},on:{click:function(n){return t.removeSubTask(l)}}},[t._v("X")])],1)],1)],1)}))],2)}),_=[]},1266:function(t,n,e){"use strict";e.r(n);var r=e(1256),o=e(1215);for(var l in o)["default"].indexOf(l)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(l);var c=e(107),component=Object(c.a)(o.default,r.a,r.b,!1,null,null,null);n.default=component.exports}}]);