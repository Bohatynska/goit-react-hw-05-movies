"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{377:function(o,A,n){n.d(A,{Pd:function(){return l},XL:function(){return K},k0:function(){return p},kh:function(){return h},z6:function(){return u}});var i=n(861),t=n(757),e=n.n(t),r=n(243);r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a="003c13e6e40e640c229ce092669f5920";function K(){return c.apply(this,arguments)}function c(){return(c=(0,i.Z)(e().mark((function o(){var A;return e().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,r.Z.get("trending/movie/day?api_key=".concat(a));case 3:return A=o.sent,o.abrupt("return",A.data.results);case 7:o.prev=7,o.t0=o.catch(0),console.error(o.t0);case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))).apply(this,arguments)}function l(o){return s.apply(this,arguments)}function s(){return(s=(0,i.Z)(e().mark((function o(A){var n;return e().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,r.Z.get("search/movie?api_key=".concat(a,"&language=en-US&query=").concat(A,"&page=1&include_adult=false"));case 3:return n=o.sent,o.abrupt("return",n.data.results);case 7:o.prev=7,o.t0=o.catch(0),console.error(o.t0);case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))).apply(this,arguments)}function p(o){return g.apply(this,arguments)}function g(){return(g=(0,i.Z)(e().mark((function o(A){var n;return e().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,r.Z.get("movie/".concat(A,"?api_key=").concat(a,"&language=en-US"));case 3:return n=o.sent,o.abrupt("return",n.data);case 7:o.prev=7,o.t0=o.catch(0),console.error(o.t0);case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))).apply(this,arguments)}function u(o){return f.apply(this,arguments)}function f(){return(f=(0,i.Z)(e().mark((function o(A){var n;return e().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,r.Z.get("movie/".concat(A,"/credits?api_key=").concat(a,"&language=en-US"));case 3:return n=o.sent,o.abrupt("return",n.data.cast);case 7:o.prev=7,o.t0=o.catch(0),console.error(o.t0);case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))).apply(this,arguments)}function h(o){return x.apply(this,arguments)}function x(){return(x=(0,i.Z)(e().mark((function o(A){var n;return e().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,r.Z.get("movie/".concat(A,"/reviews?api_key=").concat(a,"&language=en-US&page=1"));case 3:return n=o.sent,o.abrupt("return",n.data.results);case 7:o.prev=7,o.t0=o.catch(0),console.error(o.t0);case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))).apply(this,arguments)}},922:function(o,A,n){n.r(A),n.d(A,{default:function(){return H}});var i,t,e,r,a,K,c,l,s,p,g,u,f=n(439),h=n(791),x=n(689),S=n(377),C=n(859),F=n(206),d=n(653),B=n(168),k=n(87),U=n(867),w=(0,U.default)(k.rU)(i||(i=(0,B.Z)(["\n  position: absolute;\n  left: 30px;\n  top: 70px;\n  height: 40px;\n  width: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  &:hover,\n  &:focus {\n    color: #af7dd0;\n  }\n"]))),Q=U.default.div(t||(t=(0,B.Z)(["\n  margin-top: 30px;\n  display: grid;\n  grid-template-columns: auto 1fr;\n"]))),j=U.default.div(e||(e=(0,B.Z)(["\n  width: 360px;\n  margin-right: 40px;\n"]))),v=U.default.img(r||(r=(0,B.Z)(["\n  width: 100%;\n"]))),J=U.default.h2(a||(a=(0,B.Z)(["\n  font-weight: 600;\n  font-size: 35px;\n  margin-bottom: 20px;\n  color: #551f78;\n"]))),R=U.default.li(K||(K=(0,B.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n  &:last-child {\n    margin-bottom: 30px;\n  }\n"]))),b=U.default.p(c||(c=(0,B.Z)(["\n  color: #551f78;\n  font-weight: 600;\n  font-size: 20px;\n"]))),m=U.default.span(l||(l=(0,B.Z)(["\n  font-weight: 400;\n  color: #551f78;\n"]))),W=U.default.h3(s||(s=(0,B.Z)(["\n  margin-bottom: 15px;\n  font-weight: 600;\n  font-size: 25px;\n  color: #551f78;\n"]))),P=U.default.ul(p||(p=(0,B.Z)(["\n  display: flex;\n"]))),E=U.default.li(g||(g=(0,B.Z)(["\n  &:not(:last-child) {\n    margin-right: 50px;\n  }\n"]))),Z=(0,U.default)(k.OL)(u||(u=(0,B.Z)(["\n  color: #551f78;\n  font-weight: 500;\n  font-size: 20px;\n  &:hover,\n  &:focus {\n    color: #af7dd0;\n    font-weight: 600;\n  }\n"]))),D=n(184),H=function(){var o,A,n=(0,x.UO)().movieId,i=(0,h.useState)(null),t=(0,f.Z)(i,2),e=t[0],r=t[1],a=null!==(o=null===(A=(0,x.TH)().state)||void 0===A?void 0:A.from)&&void 0!==o?o:"/";if((0,h.useEffect)((function(){(0,S.k0)(n).then(r)}),[n]),e){var K=e.poster_path,c=e.title,l=e.original_title,s=e.vote_average,p=e.release_date,g=e.overview,u=e.genres,B=e.runtime,k=e.spoken_languages;return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(w,{to:a,children:"Go Back"}),(0,D.jsxs)(Q,{children:[(0,D.jsx)(j,{children:(0,D.jsx)(v,{src:K?C.X+K:F,alt:c})}),(0,D.jsxs)("div",{children:[(0,D.jsx)(J,{children:l}),(0,D.jsxs)("ul",{children:[(0,D.jsx)(R,{children:(0,D.jsxs)(b,{children:["User Score:"," ",(0,D.jsx)(m,{rating:s,children:s.toFixed(1)})]})}),(0,D.jsx)(R,{children:(0,D.jsxs)(b,{children:["Release Date: ",(0,D.jsx)(m,{children:p})]})}),(0,D.jsx)(R,{children:(0,D.jsxs)(b,{children:["Overview: ",(0,D.jsx)(m,{children:g})]})}),(0,D.jsx)(R,{children:(0,D.jsxs)(b,{children:["Genres:",u.map((function(o){var A=o.name;return(0,D.jsxs)(m,{children:[" ",A]},A)}))]})}),(0,D.jsx)(R,{children:(0,D.jsxs)(b,{children:["Film duration: ",(0,D.jsxs)(m,{children:[B," min"]})]})}),(0,D.jsx)(R,{children:(0,D.jsxs)(b,{children:["Languages:",k.map((function(o){var A=o.name;return(0,D.jsxs)(m,{children:[" ",A]},A)}))]})})]}),(0,D.jsx)(W,{children:"Additional information"}),(0,D.jsxs)(P,{children:[(0,D.jsx)(E,{children:(0,D.jsx)(Z,{to:"cast",state:{from:a},children:"Cast"})}),(0,D.jsx)(E,{children:(0,D.jsx)(Z,{to:"reviews",state:{from:a},children:"Reviews"})})]})]})]}),(0,D.jsx)(h.Suspense,{fallback:(0,D.jsx)(d.a,{}),children:(0,D.jsx)(x.j3,{})})]})}}},859:function(o,A,n){n.d(A,{X:function(){return i}});var i="https://image.tmdb.org/t/p/w500"},206:function(o){o.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=168.5006a3ce.chunk.js.map