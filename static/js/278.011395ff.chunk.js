"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{377:function(A,o,t){t.d(o,{Pd:function(){return p},XL:function(){return K},k0:function(){return u},kh:function(){return f},z6:function(){return s}});var n=t(861),i=t(757),e=t.n(i),r=t(243);r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a="003c13e6e40e640c229ce092669f5920";function K(){return c.apply(this,arguments)}function c(){return(c=(0,n.Z)(e().mark((function A(){var o;return e().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,r.Z.get("trending/movie/day?api_key=".concat(a));case 3:return o=A.sent,A.abrupt("return",o.data.results);case 7:A.prev=7,A.t0=A.catch(0),console.error(A.t0);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})))).apply(this,arguments)}function p(A){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(e().mark((function A(o){var t;return e().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,r.Z.get("search/movie?api_key=".concat(a,"&language=en-US&query=").concat(o,"&page=1&include_adult=false"));case 3:return t=A.sent,A.abrupt("return",t.data.results);case 7:A.prev=7,A.t0=A.catch(0),console.error(A.t0);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})))).apply(this,arguments)}function u(A){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(e().mark((function A(o){var t;return e().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,r.Z.get("movie/".concat(o,"?api_key=").concat(a,"&language=en-US"));case 3:return t=A.sent,A.abrupt("return",t.data);case 7:A.prev=7,A.t0=A.catch(0),console.error(A.t0);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})))).apply(this,arguments)}function s(A){return S.apply(this,arguments)}function S(){return(S=(0,n.Z)(e().mark((function A(o){var t;return e().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,r.Z.get("movie/".concat(o,"/credits?api_key=").concat(a,"&language=en-US"));case 3:return t=A.sent,A.abrupt("return",t.data.cast);case 7:A.prev=7,A.t0=A.catch(0),console.error(A.t0);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})))).apply(this,arguments)}function f(A){return C.apply(this,arguments)}function C(){return(C=(0,n.Z)(e().mark((function A(o){var t;return e().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,r.Z.get("movie/".concat(o,"/reviews?api_key=").concat(a,"&language=en-US&page=1"));case 3:return t=A.sent,A.abrupt("return",t.data.results);case 7:A.prev=7,A.t0=A.catch(0),console.error(A.t0);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})))).apply(this,arguments)}},278:function(A,o,t){t.r(o),t.d(o,{default:function(){return c}});var n,i=t(168),e=t(867).default.h1(n||(n=(0,i.Z)(["\n  text-align: center;\n  font-weight: 600;\n  font-size: 35px;\n  margin-bottom: 40px;\n  color: #551f78;\n"]))),r=t(184),a=function(A){var o=A.text;return(0,r.jsx)(e,{children:o})},K=t(47),c=function(){return(0,r.jsxs)("main",{children:[(0,r.jsx)(a,{text:"Trending today"}),(0,r.jsx)(K.e,{})]})}},47:function(A,o,t){t.d(o,{e:function(){return h}});var n,i,e,r=t(861),a=t(439),K=t(757),c=t.n(K),p=t(791),g=t(689),u=t(87),l=t(377),s=t(859),S=t(206),f=t(168),C=t(867),F=C.default.ul(n||(n=(0,f.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),B=C.default.li(i||(i=(0,f.Z)(["\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),k=C.default.img(e||(e=(0,f.Z)(["\n  width: 100%;\n  height: 360px;\n"]))),U=t(184),h=function(A){var o=A.list,t=(0,p.useState)([]),n=(0,a.Z)(t,2),i=n[0],e=n[1],K=(0,g.TH)(),f="/"===K.pathname?"movies/":"";function C(){return(C=(0,r.Z)(c().mark((function A(){var o;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,(0,l.XL)();case 2:if(o=A.sent){A.next=5;break}return A.abrupt("return");case 5:e(o);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}return(0,p.useEffect)((function(){o?e(o):function(){C.apply(this,arguments)}()}),[o]),(0,U.jsx)("div",{children:(0,U.jsx)(F,{children:i.map((function(A){var o=A.id,t=A.poster_path,n=A.title;A.release_date,A.vote_average;return(0,U.jsx)(B,{children:(0,U.jsx)(u.OL,{to:"".concat(f).concat(o),state:{from:K},children:(0,U.jsx)(k,{src:t?s.X+t:S,alt:n})})},o)}))})})}},859:function(A,o,t){t.d(o,{X:function(){return n}});var n="https://image.tmdb.org/t/p/w500"},206:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=278.011395ff.chunk.js.map