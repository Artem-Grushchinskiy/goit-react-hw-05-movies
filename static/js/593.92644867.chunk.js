"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[593],{600:function(t,e,r){r.d(e,{M1:function(){return p},Pg:function(){return i},jP:function(){return f},qF:function(){return o},t$:function(){return s}});var n=r(861),a=r(757),c=r.n(a),u=r(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"28eb3a3356c833fb933dbb7817e92ba6",language:"en-US",include_adult:!1}}),s=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"all","day",t.next=4,u.get("/trending/".concat("all","/").concat("day"));case 4:return e=t.sent,r=e.data,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e,r){var n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/search/movie",{params:{query:e,page:r}});case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e,r){var n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/reviews"),{params:{page:r}});case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},593:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),i=r(689),o=r(600),p="CastMovieCard_itemName__+pMcV",f="CastMovieCard_item\u0421haracter__kZYpo",v="CastMovieCard_castItem__4Bg+S",l="CastMovieCard_castList__qL4xr",d=r(184),m=function(t){var e=t.castMovie,r=null===e||void 0===e?void 0:e.map((function(t){var e=t.cast_id,r=t.character,n=t.name,a=t.original_name,c=t.profile_path;return(0,d.jsxs)("li",{className:v,children:[(0,d.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w185".concat(c):"/goit-react-hw-05-movies/cast.jpg ",alt:n,loading:"lazy"}),(0,d.jsx)("h3",{className:p,children:null!==n&&void 0!==n?n:a}),(0,d.jsx)("p",{className:f,children:r})]},e)}));return(0,d.jsx)("ul",{className:l,children:r})},h=function(){var t=(0,s.useState)(),e=(0,a.Z)(t,2),r=e[0],c=e[1],p=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.M1)(p);case 3:e=t.sent,c(e.cast),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),r=t.t0.response,console.log(r.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[p]),0===(null===r||void 0===r?void 0:r.length)?(0,d.jsx)("p",{children:"We don't have any cast for this movie"}):(0,d.jsx)(m,{castMovie:r})}}}]);
//# sourceMappingURL=593.92644867.chunk.js.map