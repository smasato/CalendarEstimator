(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{234:function(e,t,n){"use strict";n.r(t);var r=n(276),o=n(359),l=n(367),c=n(366),v=n(358),m=n(363),_=n(355),d=(n(22),n(0).a.extend({props:{suprises:{type:Array,required:!0}},data:function(){return{units:[],eventTypes:[]}},methods:{insertSuprise:function(e){this.suprises.splice(e+1,0,{name:"",range:[0,10],unit:"minute(s)",eventType:"slower",probability:[0,1]})},removesuprise:function(e){this.suprises.length>1&&this.suprises.splice(e,1)}},mounted:function(){var e=this.$constants;this.units=e.units,this.eventTypes=e.eventTypes}})),y=n(56),component=Object(y.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t(l.a,[t(v.a,[t("div",{staticClass:"text-h5"},[e._v("\n      2. Consider surprise events which could slow you down or speed you up\n    ")])]),e._v(" "),e._l(e.suprises,(function(n,d){return t("div",[t(l.a,[t(v.a,{attrs:{align:"center"}},[t("span",[e._v(e._s(d+1)+".")]),e._v(" "),t(o.a,{attrs:{cols:"3"}},[t(_.a,{attrs:{label:"Name (Optional)"},model:{value:n.name,callback:function(t){e.$set(n,"name",t)},expression:"suprise.name"}})],1),e._v(" "),t(o.a,{attrs:{cols:"3"}},[t(v.a,[t(c.a,{attrs:{"hide-details":""},model:{value:n.range,callback:function(t){e.$set(n,"range",t)},expression:"suprise.range"}})],1),e._v(" "),t(v.a,[t("span",[e._v("\n              from "+e._s(n.range[0])+" to "+e._s(n.range[1])+"\n              "+e._s(n.unit)+"\n            ")])])],1),e._v(" "),t(o.a,{attrs:{cols:"2"}},[t(m.a,{attrs:{"hide-details":"",items:e.units},model:{value:n.unit,callback:function(t){e.$set(n,"unit",t)},expression:"suprise.unit"}})],1),e._v(" "),t(o.a,{attrs:{cols:"2"}},[t(m.a,{attrs:{"hide-details":"",items:e.eventTypes},model:{value:n.eventType,callback:function(t){e.$set(n,"eventType",t)},expression:"suprise.eventType"}})],1),e._v(" "),t(o.a,{attrs:{cols:"1"}},[t(v.a,[t(r.a,{attrs:{"x-small":""},on:{click:function(t){return e.insertSuprise(d)}}},[e._v("+")]),e._v(" "),t(r.a,{attrs:{"x-small":""},on:{click:function(t){return e.removesuprise(d)}}},[e._v("X")])],1)],1)],1),e._v(" "),t(v.a,{attrs:{align:"center"}},[t("span",[e._v("it happens")]),e._v(" "),t(o.a,{attrs:{cols:"auto"}},[t(_.a,{attrs:{type:"number",min:"0",max:"1000"},model:{value:n.probability[0],callback:function(t){e.$set(n.probability,0,t)},expression:"suprise.probability[0]"}})],1),e._v(" "),t(o.a,{attrs:{cols:"auto"}},[t("p",[e._v("time(s) out of")])]),e._v(" "),t(o.a,{attrs:{cols:"auto"}},[t(_.a,{attrs:{type:"number",min:"1",max:"1000"},model:{value:n.probability[1],callback:function(t){e.$set(n.probability,1,t)},expression:"suprise.probability[1]"}})],1)],1)],1)],1)}))],2)}),[],!1,null,null,null);t.default=component.exports}}]);