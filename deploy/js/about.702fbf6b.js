(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"00fd":function(t,e,n){var r=n("9e69"),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,s=r?r.toStringTag:void 0;function c(t){var e=o.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(c){}var a=i.call(t);return r&&(e?t[s]=n:delete t[s]),a}t.exports=c},1310:function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},"1a8c":function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},"29f3":function(t,e){var n=Object.prototype,r=n.toString;function a(t){return r.call(t)}t.exports=a},"2b3e":function(t,e,n){var r=n("585a"),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();t.exports=o},3729:function(t,e,n){var r=n("9e69"),a=n("00fd"),o=n("29f3"),i="[object Null]",s="[object Undefined]",c=r?r.toStringTag:void 0;function u(t){return null==t?void 0===t?s:i:c&&c in Object(t)?a(t):o(t)}t.exports=u},"408c":function(t,e,n){var r=n("2b3e"),a=function(){return r.Date.now()};t.exports=a},"585a":function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("c8ba"))},7347:function(t,e,n){"use strict";var r=n("a34a"),a=n.n(r),o=n("b047"),i=n.n(o);function s(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,a)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){s(o,r,a,i,c,"next",t)}function c(t){s(o,r,a,i,c,"throw",t)}i(void 0)}))}}var u,l,p={mounted:function(){},props:["filters","api"],data:function(){return{resources:{total:0,items:[],pages:0},loading:!1}},watch:{filters:{handler:function(){this.getResources()}},deep:!0},created:function(){var t=this;return c(a.a.mark((function e(){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getResources();case 2:case"end":return e.stop()}}),e)})))()},methods:{debouncer:i()(function(){var t=c(a.a.mark((function t(e){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),100),getResources:function(){var t=this;return c(a.a.mark((function e(){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.debouncer(c(a.a.mark((function e(){var n;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.api.fetch(t.filters);case 4:n=e.sent,t.resources.items=n.data,t.resources.pages=n.meta.last_page,t.resources.total=n.meta.total,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0);case 13:t.loading=!1;case 14:case"end":return e.stop()}}),e,null,[[1,10]])}))));case 1:case"end":return e.stop()}}),e)})))()}},render:function(){return this.$scopedSlots.default({resources:this.resources,loading:this.loading})}},d=p,f=n("0c7c"),m=Object(f["a"])(d,u,l,!1,null,null,null);e["a"]=m.exports},"9e69":function(t,e,n){var r=n("2b3e"),a=r.Symbol;t.exports=a},b047:function(t,e,n){var r=n("1a8c"),a=n("408c"),o=n("b4b0"),i="Expected a function",s=Math.max,c=Math.min;function u(t,e,n){var u,l,p,d,f,m,v=0,h=!1,g=!1,b=!0;if("function"!=typeof t)throw new TypeError(i);function w(e){var n=u,r=l;return u=l=void 0,v=e,d=t.apply(r,n),d}function x(t){return v=t,f=setTimeout(k,e),h?w(t):d}function y(t){var n=t-m,r=t-v,a=e-n;return g?c(a,p-r):a}function _(t){var n=t-m,r=t-v;return void 0===m||n>=e||n<0||g&&r>=p}function k(){var t=a();if(_(t))return A(t);f=setTimeout(k,y(t))}function A(t){return f=void 0,b&&u?w(t):(u=l=void 0,d)}function j(){void 0!==f&&clearTimeout(f),v=0,u=m=l=f=void 0}function $(){return void 0===f?d:A(a())}function D(){var t=a(),n=_(t);if(u=arguments,l=this,m=t,n){if(void 0===f)return x(m);if(g)return clearTimeout(f),f=setTimeout(k,e),w(m)}return void 0===f&&(f=setTimeout(k,e)),d}return e=o(e)||0,r(n)&&(h=!!n.leading,g="maxWait"in n,p=g?s(o(n.maxWait)||0,e):p,b="trailing"in n?!!n.trailing:b),D.cancel=j,D.flush=$,D}t.exports=u},b4b0:function(t,e,n){var r=n("1a8c"),a=n("ffd6"),o=NaN,i=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;function p(t){if("number"==typeof t)return t;if(a(t))return o;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=c.test(t);return n||u.test(t)?l(t.slice(2),n?2:8):s.test(t)?o:+t}t.exports=p},e27e:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-form",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{"prepend-icon":"mdi-account-search",label:"Name",required:""},on:{keyup:function(e){return e.stopPropagation(),t.performSearch(e)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-select",{attrs:{items:[{text:"Name (A-Z)",value:"name"},{text:"Name (Z-A)",value:"-name"}],"item-text":"text","item-select":"value","prepend-icon":"mdi-sort",label:"Order by"},on:{change:t.performSearch},model:{value:t.order,callback:function(e){t.order=e},expression:"order"}})],1)],1)],1)],1),n("fetch-json",{staticClass:"mb-8",attrs:{api:t.api,filters:t.filters},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.resources,a=e.loading;return n("div",{},[a?n("div",{staticClass:"text-center"},[n("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1):t._e(),a?t._e():n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{dense:""}},t._l(r.items,(function(e){return n("v-col",{key:e.id,attrs:{cols:"6"}},[n("v-card",[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[t._v(t._s(e.name)+" ")]),n("v-list-item-subtitle",[t._v(t._s(e.email))])],1)],1),n("v-card-actions",[n("v-spacer"),t.$root.user&&!t.$root.user.isLawyer()?n("v-btn",{on:{click:function(n){return t.openDialog(e)}}},[t._v(" Request an appointment")]):t._e(),t.$root.user?t._e():n("span",[t._v("Please sign in to make an appointment")])],1)],1)],1)})),1),t.$root.user&&!t.$root.user.isLawyer()?n("BookAppointmentModal",{attrs:{appointment:t.selectedAppointment,dialog:t.dialog},on:{"update:dialog":function(e){t.dialog=e}}}):t._e()],1),r.total>0?n("v-pagination",{staticClass:"mt-5",attrs:{length:r.pages},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1)}}])})],1)],1)],1)},a=[],o=n("8945"),i=n("7347"),s=n("e351"),c={name:"Index",components:{FetchJson:i["a"],BookAppointmentModal:s["a"]},data:function(){return{api:o["a"],dialog:!1,selectedAppointment:this.nullAppointment(),page:1,name:"",order:""}},computed:{filters:function(){return{page:this.page,name:this.name,order:this.order,refresh:this.refresh}}},methods:{openDialog:function(t){this.$set(this.selectedAppointment,"lawyer",t),this.dialog=!0},nullAppointment:function(){return{id:null,lawyer:null,citizen:null,scheduled_raw:null}},performSearch:function(){this.page=1,this.refresh=(new Date).getTime()}}},u=c,l=n("0c7c"),p=Object(l["a"])(u,r,a,!1,null,null,null);e["default"]=p.exports},e880:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-form",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{"prepend-icon":"mdi-account-search",label:"Search by name"},on:{keyup:function(e){return e.stopPropagation(),t.performSearch(e)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-select",{attrs:{items:t.statuses,"item-text":"text","item-select":"value","prepend-icon":"mdi-list-status",label:"Status",multiple:""},on:{change:t.performSearch},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-select",{attrs:{items:[{text:"Farthest from now",value:"-scheduled_for"},{text:"Closest to now",value:"scheduled_for"}],"item-text":"text","item-select":"value","prepend-icon":"mdi-sort",label:"Order by"},on:{change:t.performSearch},model:{value:t.order,callback:function(e){t.order=e},expression:"order"}})],1)],1)],1)],1),n("fetch-json",{staticClass:"mb-8",attrs:{api:t.api,filters:t.filters},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.resources,a=e.loading;return n("div",{},[a?n("div",{staticClass:"text-center"},[n("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1):t._e(),a?t._e():n("v-container",{attrs:{fluid:""}},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[t.$root.user.isLawyer()?n("th",[t._v("Citizen")]):t._e(),t.$root.user.isLawyer()?t._e():n("th",{staticClass:"text-left"},[t._v("Lawyer")]),n("th",{staticClass:"text-left"},[t._v("Status")]),n("th",{staticClass:"text-left"},[t._v("Date")]),n("th",{staticClass:"text-left"},[t._v("Actions")])])]),n("tbody",t._l(r.items,(function(e){return n("appointment-row-item",{key:e.id,attrs:{appointment:e},on:{action:t.appointmantActions}})})),1)]},proxy:!0}],null,!0)})],1),r.total>0?n("v-pagination",{staticClass:"mt-5",attrs:{length:r.pages},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1)}}])})],1),t.$root.user.isLawyer()?t._e():n("BookAppointmentModal",{attrs:{appointment:t.selectedAppointment,dialog:t.rescheduleDialog},on:{"update:dialog":function(e){t.rescheduleDialog=e}}}),t.$root.user.isLawyer()?n("EditAppointmentModal",{attrs:{appointment:t.selectedAppointment,dialog:t.editDialog},on:{"update:appointment":function(e){t.selectedAppointment=e},"update:dialog":function(e){t.editDialog=e}}}):t._e()],1)],1)},a=[],o=n("e351"),i=n("36dd"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v(t._s(t.appointment.id)+" | "+t._s(t.person))]),n("td",[t._v(t._s(t.appointment.status.name))]),n("td",[t._v(t._s(t.appointment.scheduled))]),n("td",[t.canDelete?n("v-btn",{staticClass:"ma-2",attrs:{loading:t.loading,disabled:t.loading,color:"error"},on:{click:t.remove}},[t._v(" Delete ")]):t._e(),t.canRescheduleRejectedAppointment?n("v-btn",{attrs:{depressed:""},on:{click:function(e){return e.preventDefault(),t.$emit("action",{name:"reschedule",appointment:t.appointment})}}},[t._v(" Reschedule ")]):t._e(),t.$root.user.isLawyer()?n("v-btn",{attrs:{depressed:""},on:{click:function(e){return e.preventDefault(),t.$emit("action",{name:"edit",appointment:t.appointment})}}},[t._v(" Edit ")]):t._e()],1)])},c=[],u=n("a34a"),l=n.n(u),p=n("9fb8"),d=n("1a81");function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e,n){return e&&m(t.prototype,e),n&&m(t,n),t}var h=function(){function t(e){f(this,t),this.user=e}return v(t,[{key:"canRescheduleRejectedAppointment",value:function(t){return!this.user.isLawyer()&&t.status.id==d["a"].REJECTED.value}},{key:"canDeleteAppointment",value:function(t){return this.user.isLawyer()&&t.lawyer.id==this.user.id}}]),t}(),g=new h(p["a"].data()),b=n("f2d5"),w=n("11b3");function x(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,a)}function y(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){x(o,r,a,i,s,"next",t)}function s(t){x(o,r,a,i,s,"throw",t)}i(void 0)}))}}var _={props:["appointment"],data:function(){return{loading:!1}},computed:{person:function(){return this.$root.isLogged?this.$root.user.isLawyer()?this.appointment.citizen.name:this.appointment.lawyer.name:""},canDelete:function(){return g.canDeleteAppointment(this.appointment)},canRescheduleRejectedAppointment:function(){return g.canRescheduleRejectedAppointment(this.appointment)}},methods:{remove:function(){var t=this;return y(l.a.mark((function e(){var n;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,b["a"].delete(t.appointment);case 4:w["a"].$emit("appointment:updated"),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](1),n=e.t0.response,w["a"].$emit("notification",{text:n.data.message,status:"error"});case 11:t.loading=!1;case 12:case"end":return e.stop()}}),e,null,[[1,7]])})))()}}},k=_,A=n("0c7c"),j=Object(A["a"])(k,s,c,!1,null,null,null),$=j.exports,D=n("7347"),S={name:"Index",components:{FetchJson:D["a"],AppointmentRowItem:$,BookAppointmentModal:o["a"],EditAppointmentModal:i["a"]},watch:{rescheduleDialog:function(t){0==t&&(this.selectedAppointment=this.nullAppointment)},editDialog:function(t){0==t&&(this.selectedAppointment=this.nullAppointment)}},data:function(){return{api:b["a"],selectedAppointment:this.nullAppointment,editDialog:!1,rescheduleDialog:!1,page:1,name:"",order:"",status:[],refresh:null}},computed:{filters:function(){return{page:this.page,name:this.name,order:this.order,status:this.status,refresh:this.refresh}},statuses:function(){return Object.values(d["a"])},nullAppointment:function(){return{id:null,lawyer:null,citizen:null}}},methods:{appointmantActions:function(t){var e=this,n=t.name,r=t.appointment,a={reschedule:function(){e.selectedAppointment=r,e.rescheduleDialog=!0},edit:function(){e.selectedAppointment=r,e.editDialog=!0}};Object.prototype.hasOwnProperty.call(a,n)&&a[n]()},performSearch:function(){this.refresh=(new Date).getTime(),this.page=1}},mounted:function(){var t=this;w["a"].$on("appointment:updated",(function(){t.performSearch()}))}},O=S,C=Object(A["a"])(O,r,a,!1,null,null,null);e["default"]=C.exports},ffd6:function(t,e,n){var r=n("3729"),a=n("1310"),o="[object Symbol]";function i(t){return"symbol"==typeof t||a(t)&&r(t)==o}t.exports=i}}]);
//# sourceMappingURL=about.702fbf6b.js.map