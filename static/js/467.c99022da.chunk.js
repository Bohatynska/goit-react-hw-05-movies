"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[467],{377:function(o,t,n){n.d(t,{Pd:function(){return u},XL:function(){return K},k0:function(){return s},kh:function(){return S},z6:function(){return g}});var e=n(861),r=n(757),A=n.n(r),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a="003c13e6e40e640c229ce092669f5920";function K(){return c.apply(this,arguments)}function c(){return(c=(0,e.Z)(A().mark((function o(){var t;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,i.Z.get("trending/movie/day?api_key=".concat(a));case 3:return t=o.sent,o.abrupt("return",t.data.results);case 7:o.prev=7,o.t0=o.catch(0),console.error(o.t0);case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))).apply(this,arguments)}function u(o){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(A().mark((function o(t){var n;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,i.Z.get("search/movie?api_key=".concat(a,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:return n=o.sent,o.abrupt("return",n.data.results);case 7:o.prev=7,o.t0=o.catch(0),console.error(o.t0);case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))).apply(this,arguments)}function s(o){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(A().mark((function o(t){var n;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,i.Z.get("movie/".concat(t,"?api_key=").concat(a,"&language=en-US"));case 3:return n=o.sent,o.abrupt("return",n.data);case 7:o.prev=7,o.t0=o.catch(0),console.error(o.t0);case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))).apply(this,arguments)}function g(o){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(A().mark((function o(t){var n;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(a,"&language=en-US"));case 3:return n=o.sent,o.abrupt("return",n.data.cast);case 7:o.prev=7,o.t0=o.catch(0),console.error(o.t0);case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))).apply(this,arguments)}function S(o){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(A().mark((function o(t){var n;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(a,"&language=en-US&page=1"));case 3:return n=o.sent,o.abrupt("return",n.data.results);case 7:o.prev=7,o.t0=o.catch(0),console.error(o.t0);case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))).apply(this,arguments)}},467:function(o,t,n){n.r(t),n.d(t,{default:function(){return w}});var e,r,A,i,a=n(861),K=n(439),c=n(757),u=n.n(c),p=n(791),s=n(87),l=n(377),g=n(168),f=n(867),S=f.default.form(e||(e=(0,g.Z)(["\n  /* overflow: hidden; */\n  width: 700px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n"]))),h=f.default.input(r||(r=(0,g.Z)(["\n  height: 40px;\n  width: 100%;\n  background-color: #4d2f61;\n  font-size: 20px;\n  padding-left: 15px;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border: none;\n  color: #b29ac2;\n  ::placeholder {\n    color: #b29ac2;\n    font-weight: 600;\n  }\n"]))),C=f.default.button(A||(A=(0,g.Z)(["\n  cursor: pointer;\n  height: 40px;\n  width: auto;\n  outline: none;\n  background-color: #4d2f61;\n  color: #b29ac2;\n  padding: 10px 20px;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border: none;\n  border-right: 1px solid;\n"]))),x=n(184),F=function(o){var t=o.onSubmit,n=o.toast,e=(0,p.useState)(""),r=(0,K.Z)(e,2),A=r[0],i=r[1];return(0,x.jsxs)(S,{onSubmit:function(o){o.preventDefault(),A?(t(A),i("")):n("Please write something...")},children:[(0,x.jsx)(C,{type:"submit",children:"Search"}),(0,x.jsx)(h,{type:"text",autoFocus:!0,autoComplete:"off",name:"search",onChange:function(o){var t=o.target.value.trim().toLowerCase();i(t)},placeholder:"find your movie...",value:A})]})},d=n(47),k=n(827),B=n(653),U=n(867).default.div(i||(i=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]))),w=function(){var o,t=(0,p.useState)(""),n=(0,K.Z)(t,2),e=n[0],r=n[1],A=(0,p.useState)([]),i=(0,K.Z)(A,2),c=i[0],g=i[1],f=(0,p.useState)(null),S=(0,K.Z)(f,2),h=S[0],C=S[1],w=(0,s.lr)(),Q=(0,K.Z)(w,2),v=Q[0],b=Q[1],J=null!==(o=v.get("query"))&&void 0!==o?o:"",R=(0,p.useState)(!1),m=(0,K.Z)(R,2),j=m[0],y=m[1];function P(){return(P=(0,a.Z)(u().mark((function o(t){var n;return u().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,g([]),y(!0),o.next=5,(0,l.Pd)(t);case 5:if((n=o.sent).length){o.next=9;break}return C(!1),o.abrupt("return");case 9:g(n),C(!0),o.next=16;break;case 13:o.prev=13,o.t0=o.catch(0),console.error(h);case 16:return o.prev=16,y(!1),o.finish(16);case 19:case"end":return o.stop()}}),o,null,[[0,13,16,19]])})))).apply(this,arguments)}return(0,p.useEffect)((function(){J&&r(J),e&&function(o){P.apply(this,arguments)}(e)}),[e]),(0,x.jsxs)(U,{children:[(0,x.jsx)(F,{onSubmit:function(o){o!==e?(r(o),b(""!==o?{query:o}:{})):alert("You already see results for this query \ud83e\udd73")}}),j&&(0,x.jsx)(B.a,{}),!1===h?(0,x.jsx)(k.B,{text:"Sorry, no results for your search"}):(0,x.jsx)(d.e,{list:c})]})}},827:function(o,t,n){n.d(t,{B:function(){return a}});var e,r=n(168),A=n(867).default.p(e||(e=(0,r.Z)(["\n  font-size: 30px;\n  font-weight: 400;\n"]))),i=n(184),a=function(o){var t=o.text;return(0,i.jsx)(A,{children:t})}},47:function(o,t,n){n.d(t,{e:function(){return k}});var e,r,A,i=n(861),a=n(439),K=n(757),c=n.n(K),u=n(791),p=n(689),s=n(87),l=n(377),g=n(859),f=n(206),S=n(168),h=n(867),C=h.default.ul(e||(e=(0,S.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=h.default.li(r||(r=(0,S.Z)(["\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),F=h.default.img(A||(A=(0,S.Z)(["\n  width: 100%;\n  height: 360px;\n"]))),d=n(184),k=function(o){var t=o.list,n=(0,u.useState)([]),e=(0,a.Z)(n,2),r=e[0],A=e[1],K=(0,p.TH)(),S="/"===K.pathname?"movies/":"";function h(){return(h=(0,i.Z)(c().mark((function o(){var t;return c().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,l.XL)();case 2:if(t=o.sent){o.next=5;break}return o.abrupt("return");case 5:A(t);case 6:case"end":return o.stop()}}),o)})))).apply(this,arguments)}return(0,u.useEffect)((function(){t?A(t):function(){h.apply(this,arguments)}()}),[t]),(0,d.jsx)("div",{children:(0,d.jsx)(C,{children:r.map((function(o){var t=o.id,n=o.poster_path,e=o.title;o.release_date,o.vote_average;return(0,d.jsx)(x,{children:(0,d.jsx)(s.OL,{to:"".concat(S).concat(t),state:{from:K},children:(0,d.jsx)(F,{src:n?g.X+n:f,alt:e})})},t)}))})})}},859:function(o,t,n){n.d(t,{X:function(){return e}});var e="https://image.tmdb.org/t/p/w500"},206:function(o){o.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=467.c99022da.chunk.js.map