(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{7347:function(e,t,n){"use strict";var a=n("a34a"),r=n.n(a);function o(e,t,n,a,r,o,i){try{var s=e[o](i),l=s.value}catch(c){return void n(c)}s.done?t(l):Promise.resolve(l).then(a,r)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function s(e){o(i,a,r,s,l,"next",e)}function l(e){o(i,a,r,s,l,"throw",e)}s(void 0)}))}}var s,l,c={props:["filters","api"],data:function(){return{resources:{total:0,items:[],pages:0},loading:!0}},watch:{filters:{handler:function(){this.getResources()}},deep:!0},created:function(){var e=this;return i(r.a.mark((function t(){return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getResources();case 2:case"end":return t.stop()}}),t)})))()},methods:{getResources:function(){var e=this;return i(r.a.mark((function t(){var n;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.api.fetch(e.filters);case 4:n=t.sent,e.resources.items=n.data,e.resources.pages=n.meta.last_page,e.resources.total=n.meta.total,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.log(t.t0);case 13:e.loading=!1;case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()}},render:function(){return this.$scopedSlots.default({resources:this.resources,loading:this.loading})}},u=c,p=n("0c7c"),d=Object(p["a"])(u,s,l,!1,null,null,null);t["a"]=d.exports},e27e:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-form",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{"prepend-icon":"mdi-account-search",label:"Name",required:""},on:{keyup:function(t){return t.stopPropagation(),e.performSearch(t)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-select",{attrs:{items:[{text:"Name (A-Z)",value:"name"},{text:"Name (Z-A)",value:"-name"}],"item-text":"text","item-select":"value","prepend-icon":"mdi-sort",label:"Order by"},on:{change:e.performSearch},model:{value:e.order,callback:function(t){e.order=t},expression:"order"}})],1)],1)],1)],1),n("fetch-json",{staticClass:"mb-8",attrs:{api:e.api,filters:e.filters},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.resources,r=t.loading;return n("div",{},[r?n("div",{staticClass:"text-center"},[n("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1):e._e(),r?e._e():n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{dense:""}},e._l(a.items,(function(t){return n("v-col",{key:t.id,attrs:{cols:"6"}},[n("v-card",[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[e._v(e._s(t.name)+" ")]),n("v-list-item-subtitle",[e._v(e._s(t.email))])],1)],1),n("v-card-actions",[n("v-spacer"),e.$root.user&&!e.$root.user.isLawyer()?n("v-btn",{on:{click:function(n){return e.openDialog(t)}}},[e._v(" Request an appointment")]):e._e(),e.$root.user?e._e():n("span",[e._v("Please sign in to make an appointment")])],1)],1)],1)})),1),e.$root.user&&!e.$root.user.isLawyer()?n("BookAppointmentModal",{attrs:{appointment:e.selectedAppointment,dialog:e.dialog},on:{"update:dialog":function(t){e.dialog=t}}}):e._e()],1),a.total>0?n("v-pagination",{staticClass:"mt-5",attrs:{length:a.pages},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}):e._e()],1)}}])})],1)],1)],1)},r=[],o=n("8945"),i=n("7347"),s=n("e351"),l={name:"Index",components:{FetchJson:i["a"],BookAppointmentModal:s["a"]},data:function(){return{api:o["a"],dialog:!1,selectedAppointment:this.nullAppointment(),page:1,name:"",order:""}},computed:{filters:function(){return{page:this.page,name:this.name,order:this.order,refresh:this.refresh}}},methods:{openDialog:function(e){this.$set(this.selectedAppointment,"lawyer",e),this.dialog=!0},nullAppointment:function(){return{id:null,lawyer:null,citizen:null,scheduled_raw:null}},performSearch:function(){this.page=1,this.refresh=(new Date).getTime()}}},c=l,u=n("0c7c"),p=Object(u["a"])(c,a,r,!1,null,null,null);t["default"]=p.exports},e880:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-form",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{"prepend-icon":"mdi-account-search",label:"Search by name"},on:{keyup:function(t){return t.stopPropagation(),e.performSearch(t)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-select",{attrs:{items:e.statuses,"item-text":"text","item-select":"value","prepend-icon":"mdi-list-status",label:"Status",multiple:""},on:{change:e.performSearch},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-select",{attrs:{items:[{text:"Farthest from now",value:"-scheduled_for"},{text:"Closest to now",value:"scheduled_for"}],"item-text":"text","item-select":"value","prepend-icon":"mdi-sort",label:"Order by"},on:{change:e.performSearch},model:{value:e.order,callback:function(t){e.order=t},expression:"order"}})],1)],1)],1)],1),n("fetch-json",{staticClass:"mb-8",attrs:{api:e.api,filters:e.filters},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.resources,r=t.loading;return n("div",{},[r?n("div",{staticClass:"text-center"},[n("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1):e._e(),r?e._e():n("v-container",{attrs:{fluid:""}},[n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[e.$root.user.isLawyer()?n("th",[e._v("Citizen")]):e._e(),e.$root.user.isLawyer()?e._e():n("th",{staticClass:"text-left"},[e._v("Lawyer")]),n("th",{staticClass:"text-left"},[e._v("Status")]),n("th",{staticClass:"text-left"},[e._v("Date")]),n("th",{staticClass:"text-left"},[e._v("Actions")])])]),n("tbody",e._l(a.items,(function(t){return n("appointment-row-item",{key:t.id,attrs:{appointment:t},on:{action:e.appointmantActions}})})),1)]},proxy:!0}],null,!0)})],1),a.total>0?n("v-pagination",{staticClass:"mt-5",attrs:{length:a.pages},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}):e._e()],1)}}])})],1),e.$root.user.isLawyer()?e._e():n("BookAppointmentModal",{attrs:{appointment:e.selectedAppointment,dialog:e.rescheduleDialog},on:{"update:dialog":function(t){e.rescheduleDialog=t}}}),e.$root.user.isLawyer()?n("EditAppointmentModal",{attrs:{appointment:e.selectedAppointment,dialog:e.editDialog},on:{"update:appointment":function(t){e.selectedAppointment=t},"update:dialog":function(t){e.editDialog=t}}}):e._e()],1)],1)},r=[],o=n("e351"),i=n("36dd"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("td",[e._v(e._s(e.appointment.id)+" | "+e._s(e.person))]),n("td",[e._v(e._s(e.appointment.status.name))]),n("td",[e._v(e._s(e.appointment.scheduled))]),n("td",[e.canDelete?n("v-btn",{staticClass:"ma-2",attrs:{loading:e.loading,disabled:e.loading,color:"error"},on:{click:e.remove}},[e._v(" Delete ")]):e._e(),e.canRescheduleRejectedAppointment?n("v-btn",{attrs:{depressed:""},on:{click:function(t){return t.preventDefault(),e.$emit("action",{name:"reschedule",appointment:e.appointment})}}},[e._v(" Reschedule ")]):e._e(),e.$root.user.isLawyer()?n("v-btn",{attrs:{depressed:""},on:{click:function(t){return t.preventDefault(),e.$emit("action",{name:"edit",appointment:e.appointment})}}},[e._v(" Edit ")]):e._e()],1)])},l=[],c=n("a34a"),u=n.n(c),p=n("9fb8"),d=n("1a81");function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}var h=function(){function e(t){m(this,e),this.user=t}return v(e,[{key:"canRescheduleRejectedAppointment",value:function(e){return!this.user.isLawyer()&&e.status.id==d["a"].REJECTED.value}},{key:"canDeleteAppointment",value:function(e){return this.user.isLawyer()&&e.lawyer.id==this.user.id}}]),e}(),g=new h(p["a"].data()),w=n("f2d5"),_=n("11b3");function b(e,t,n,a,r,o,i){try{var s=e[o](i),l=s.value}catch(c){return void n(c)}s.done?t(l):Promise.resolve(l).then(a,r)}function x(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function i(e){b(o,a,r,i,s,"next",e)}function s(e){b(o,a,r,i,s,"throw",e)}i(void 0)}))}}var y={props:["appointment"],data:function(){return{loading:!1}},computed:{person:function(){return this.$root.isLogged?this.$root.user.isLawyer()?this.appointment.citizen.name:this.appointment.lawyer.name:""},canDelete:function(){return g.canDeleteAppointment(this.appointment)},canRescheduleRejectedAppointment:function(){return g.canRescheduleRejectedAppointment(this.appointment)}},methods:{remove:function(){var e=this;return x(u.a.mark((function t(){var n;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,w["a"].delete(e.appointment);case 4:_["a"].$emit("appointment:updated"),t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](1),n=t.t0.response,_["a"].$emit("notification",{text:n.data.message,status:"error"});case 11:e.loading=!1;case 12:case"end":return t.stop()}}),t,null,[[1,7]])})))()}}},A=y,k=n("0c7c"),D=Object(k["a"])(A,s,l,!1,null,null,null),$=D.exports,C=n("7347"),R={name:"Index",components:{FetchJson:C["a"],AppointmentRowItem:$,BookAppointmentModal:o["a"],EditAppointmentModal:i["a"]},watch:{rescheduleDialog:function(e){0==e&&(this.selectedAppointment=this.nullAppointment)},editDialog:function(e){0==e&&(this.selectedAppointment=this.nullAppointment)}},data:function(){return{api:w["a"],selectedAppointment:this.nullAppointment,editDialog:!1,rescheduleDialog:!1,page:1,name:"",order:"",status:[],refresh:null}},computed:{filters:function(){return{page:this.page,name:this.name,order:this.order,status:this.status}},statuses:function(){return Object.values(d["a"])},nullAppointment:function(){return{id:null,lawyer:null,citizen:null}}},methods:{appointmantActions:function(e){var t=this,n=e.name,a=e.appointment,r={reschedule:function(){t.selectedAppointment=a,t.rescheduleDialog=!0},edit:function(){t.selectedAppointment=a,t.editDialog=!0}};Object.prototype.hasOwnProperty.call(r,n)&&r[n]()},performSearch:function(){this.page=1,this.refresh=(new Date).getTime()}},mounted:function(){var e=this;_["a"].$on("appointment:updated",(function(){return e.performSearch()}))}},S=R,j=Object(k["a"])(S,a,r,!1,null,null,null);t["default"]=j.exports}}]);
//# sourceMappingURL=about.1239de1b.js.map