"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{226:function(t,r,n){n.d(r,{i:function(){return a}});var e=n(439),u=n(791),a=function(t,r){var n=(0,u.useState)(),a=(0,e.Z)(n,2),c=a[0],i=a[1];return(0,u.useEffect)((function(){t(r).then((function(t){return i(t)}))}),[r,t]),[c,i]}},134:function(t,r,n){n.r(r);var e=n(439),u=n(791),a=n(390),c=n(87),i=n(689),o=n(226),s=n(184);r.default=function(){var t=(0,c.lr)(),r=(0,e.Z)(t,2),n=r[0],f=r[1],p=n.get("query")||"",v=(0,o.i)(a.mv,p),d=(0,e.Z)(v,1)[0],l=(0,i.TH)(),h=(0,u.useState)(""),m=(0,e.Z)(h,2),x=m[0],b=m[1];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("input",{value:x,onChange:function(t){return b(t.target.value)},type:"text"}),(0,s.jsx)("button",{onClick:function(){f(x?{query:x}:{})},children:"Search movies..."})]}),(0,s.jsx)("ul",{children:null===d||void 0===d?void 0:d.map((function(t){return(0,s.jsx)("li",{children:(0,s.jsxs)(c.rU,{state:{from:l},to:t.id.toString(),children:[" ",t.original_title]})},t.id)}))})]})}},390:function(t,r,n){n.d(r,{Bm:function(){return v},Mc:function(){return f},Tg:function(){return s},ZC:function(){return i},cH:function(){return p},mv:function(){return d}});var e=n(861),u=n(757),a=n.n(u),c=n(340),i="https://image.tmdb.org/t/p/w500";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o={params:{api_key:"85e6bdfb8ec7cb55f85ebb0c0a551952"}},s=function(){var t=(0,e.Z)(a().mark((function t(){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day",o);case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(a().mark((function t(r){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r),o);case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(a().mark((function t(r){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/credits"),o);case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(a().mark((function t(r){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/reviews"),o);case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(a().mark((function t(r){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(r),o);case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=134.ea35a4b7.chunk.js.map