(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{300:function(e,t,n){var content=n(312);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("20ca34e5",content,!0,{sourceMap:!1})},311:function(e,t,n){"use strict";var c=n(300);n.n(c).a},312:function(e,t,n){(t=n(11)(!1)).push([e.i,"header h1{color:#00f}",""]),e.exports=t},358:function(e,t,n){"use strict";n.r(t);n(68);var c=n(23),o=n(80),r=n.n(o),l={name:"Cases",props:["cases"]},h=n(37),d={components:{Cases:Object(h.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"case"},[n("ul",e._l(e.cases,(function(t){return n("li",{key:t.did},[e._v("\n      "+e._s(t.date)+": "+e._s(t.count)+"\n    ")])})),0)])}),[],!1,null,null,null).exports},data:function(){return{cases:[]}},created:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"},crossdomain:!0},t.prev=1,"https://colombia19-api.herokuapp.com/api/cases/",t.next=5,r.a.get("https://colombia19-api.herokuapp.com/api/cases/",n);case 5:c=t.sent,e.cases=c.data,t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("ERROR:"),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},head:function(){return{title:"About Colombia19",meta:[{hid:"COVID19",name:"covid19",content:"best place"}]}}},f=(n(311),Object(h.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("h1",[this._v("Proyección de casos por día en Colombia")]),this._v(" "),t("Cases",{attrs:{cases:this.cases}})],1)}),[],!1,null,null,null));t.default=f.exports}}]);