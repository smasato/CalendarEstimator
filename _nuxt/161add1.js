(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{114:function(t,e,n){"use strict";var r=n(150),o=n(151);Object.defineProperty(e,"__esModule",{value:!0});var c=["minute(s)","hour(s)","day(s)"],l=["slower","faster"],f={name:"Example 1",subTasks:[{name:"getting ready to leave",range:[5,10],unit:"minute(s)"},{name:"going to the grocery store",range:[10,15],unit:"minute(s)"},{name:"finding the necessary items",range:[1,5],unit:"minute(s)"},{name:"paying for the items",range:[2,5],unit:"minute(s)"},{name:"getting back home",range:[10,15],unit:"minute(s)"}],surprises:[{name:"I use a self-service cash register",range:[5,10],unit:"minute(s)",eventType:"faster",probability:[0,10]},{name:"there is a long queue at the checkout",range:[10,15],unit:"minute(s)",eventType:"slower",probability:[3,10]},{name:"the store was recently rearranged",range:[5,10],unit:"minute(s)",eventType:"slower",probability:[1,10]},{name:"I meet someone I know on the way",range:[10,15],unit:"minute(s)",eventType:"slower",probability:[1,10]},{name:"I plan ahead and know what to buy",range:[2,3],unit:"minute(s)",eventType:"faster",probability:[3,5]},{name:"I cannot find my wallet or my keys",range:[5,10],unit:"minute(s)",eventType:"slower",probability:[1,5]}]},d=r((function t(){o(this,t),this.UNITS=c,this.EVENT_TYPES=l,this.EXAMPLE_1=f}));e.default=function(t,e){e("constants",new d)}},115:function(t,e,n){"use strict";var r=n(151),o=n(150);n(209),n(30),n(23),n(40),n(39),n(12),n(34);var c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var l=n(210),f=c(n(211)),d=l.jStat.normal.inv(.975,0,1);function m(t,e){return t+e}function v(t){var e=0;return t.forEach((function(t){var n=_(t.range,t.unit);e+=y(n)})),e}function h(t){var e=0;return t.forEach((function(t){if(l.jStat.uniform.sample(0,1)<=t.probability[0]/t.probability[1]){var n=y(_(t.range,t.unit));"slower"==t.eventType?e+=n:e-=n}})),e}function y(t){var e=w(t.low),n=w(t.up);return l.jStat.lognormal.sample(Math.log(function(t,e){return Math.exp((Math.log(t)+Math.log(e))/2)}(e,n)),Math.log(function(t,e){return Math.exp((Math.log(e)-Math.log(t))/d/2)}(e,n)))}function w(t){return Math.max(.1,t)}function _(t,e){switch(e){case"minute(s)":return{low:t[0],up:t[1]};case"hour(s)":return{low:60*t[0],up:60*t[1]};case"day(s)":return{low:60*t[0]*24,up:60*t[1]*24}}}function k(t){var e=l.jStat.max(t),n=l.jStat.min(t),r=1+Math.floor(Math.log2(t.length)),o=(e-n)/r;return{x:Array.from(Array(r).keys()).map((function(i){return n+i*o})),y:l.jStat.histogram(t,r)}}var T=function(){function t(){r(this,t)}return o(t,[{key:"estimate",value:function(t){return function(t){f.default("time",{global:!0}),l.jStat.setRandom(Math.random);for(var e=0,n=[],i=9999;i>=0;i--){var r=Math.max(v(t.subTasks)+h(t.surprises),0);n.push(r),e=e<r?r:e}return{mean:n.reduce(m)/1e4,median:l.jStat.median(n),max:l.jStat.max(n),min:l.jStat.min(n),sd:l.jStat.stdev(n),samples:n.sort(),histogram:k(n)}}(t)}}]),t}();e.default=function(t,e){t.app;e("estimate",new T)}},116:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(220));e.default=function(t){var e=t.store;new o.default({storage:window.localStorage,restoreState:function(t,e){return JSON.parse(e.getItem(t),(function(t,e){return"start"===t||"end"===t?new Date(e):e}))},modules:["task","event"]}).plugin(e)}},148:function(t,e,n){"use strict";n(117),Object.defineProperty(e,"__esModule",{value:!0}),e.actions=e.mutations=e.getters=e.state=void 0;var r=n(76);e.state=function(){return{tasks:[]}},e.getters=r.getterTree(e.state,{tasks:function(t){return t.tasks},lastTaskId:function(t){var e=t.tasks[t.tasks.length-1];return e?e.id:-1}}),e.mutations=r.mutationTree(e.state,{addTask:function(t,e){t.tasks.push(e)},updateTask:function(t,e){var n=t.tasks.findIndex((function(t){return t.id===e.id}));t.tasks[n]=e},resetTasks:function(t){t.tasks=[]},initialiseStore:function(){console.log("initialised task store")}}),e.actions=r.actionTree({state:e.state,getters:e.getters,mutations:e.mutations},{})},149:function(t,e,n){"use strict";n(117),Object.defineProperty(e,"__esModule",{value:!0}),e.actions=e.mutations=e.getters=e.state=void 0;var r=n(76);e.state=function(){return{events:[],colors:["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"]}},e.getters=r.getterTree(e.state,{events:function(t){return t.events},colors:function(t){return t.colors},lastEventId:function(t){var e=t.events[t.events.length-1];return e?e.id:-1}}),e.mutations=r.mutationTree(e.state,{addEvent:function(t,e){t.events.push(e)},updateEvent:function(t,e){var n=t.events.findIndex((function(t){return t.id===e.id}));t.events[n]=e},resetEvents:function(t){t.events=[]},initialiseStore:function(){console.log("initialised event store")}}),e.actions=r.actionTree({state:e.state,getters:e.getters,mutations:e.mutations},{})},170:function(t,e,n){n(171),t.exports=n(172)},199:function(t,e,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),c=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.accessorType=e.actions=e.mutations=e.getters=e.state=void 0;var l=n(76),f=c(n(148)),d=c(n(149));e.state=function(){return{debug:!1}},e.getters={debug:function(t){return t.debug}},e.mutations={setDebug:function(t,e){t.debug=e}},e.actions={},e.accessorType=l.getAccessorType({state:e.state,getters:e.getters,mutations:e.mutations,actions:e.actions,modules:{task:f,event:d}})},219:function(t,e){}},[[170,22,6,23]]]);