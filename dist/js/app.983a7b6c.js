(function(e){function t(t){for(var a,i,o=t[0],s=t[1],u=t[2],l=0,f=[];l<o.length;l++)i=o[l],n[i]&&f.push(n[i][0]),n[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],a=!0,i=1;i<r.length;i++){var s=r[i];0!==n[s]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},c=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"49920970"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,a){r=n[e]=[t,a]});t.push(r[2]=a);var c,s=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(e),c=function(t){u.onerror=u.onload=null,clearTimeout(l);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+c+")");i.type=a,i.request=c,r[1](i)}n[e]=void 0}};var l=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,s.appendChild(u)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=u;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"02f7":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("744f"),r("6095"),r("6c7b"),r("d25f"),r("7514"),r("20d6"),r("f3e2"),r("1c4c"),r("6762"),r("57e7"),r("2caf"),r("cadf"),r("9865"),r("6d67"),r("e804"),r("0cd8"),r("48f8"),r("759f"),r("55dd"),r("d04f"),r("78ce"),r("8ea5"),r("0298"),r("c8ce"),r("87b3"),r("d92a"),r("217b"),r("7f7f"),r("f400"),r("7f25"),r("536b"),r("d9ab"),r("f9ab"),r("32d7"),r("25c9"),r("9f3c"),r("042e"),r("c7c6"),r("f4ff"),r("049f"),r("7872"),r("a69f"),r("0b21"),r("6c1a"),r("c7c62"),r("84b4"),r("c5f6"),r("2e37"),r("fca0"),r("7cdf"),r("ee1d"),r("b1b1"),r("87f3"),r("9278"),r("5df2"),r("04ff"),r("f751"),r("8478"),r("4504"),r("fee7"),r("1c01"),r("58b2"),r("ffc1"),r("0d6d"),r("9986"),r("8e6e"),r("25db"),r("e4f7"),r("b9a1"),r("64d5"),r("9aea"),r("db97"),r("66c8"),r("57f0"),r("165b"),r("456d"),r("cf6a"),r("fd24"),r("8615"),r("551c"),r("097d"),r("df1b"),r("2397"),r("88ca"),r("ba16"),r("d185"),r("ebde"),r("2d34"),r("f6b3"),r("2251"),r("c698"),r("a19f"),r("9253"),r("9275"),r("3b2b"),r("3846"),r("4917"),r("a481"),r("28a5"),r("386d"),r("6b54"),r("4f7f"),r("8a81"),r("ac4d"),r("8449"),r("9c86"),r("fa83"),r("48c0"),r("a032"),r("aef6"),r("d263"),r("6c37"),r("9ec8"),r("5695"),r("2fdb"),r("d0b0"),r("5df3"),r("b54a"),r("f576"),r("ed50"),r("788d"),r("14b9"),r("f386"),r("f559"),r("1448"),r("673e"),r("242a"),r("4f37"),r("c66f"),r("262f"),r("b05c"),r("34ef"),r("6aa2"),r("15ac"),r("af56"),r("b6e4"),r("9c29"),r("63d9"),r("4dda"),r("10ad"),r("c02b"),r("4795"),r("130f"),r("ac6a"),r("96cf");var a=r("2b0e"),n=r("ce5b"),c=r.n(n);r("bf40");a["default"].use(c.a,{});var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-navigation-drawer",{attrs:{persistent:"","mini-variant":e.miniVariant,clipped:e.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",e._l(e.items,function(t,a){return r("v-list-tile",{key:a,attrs:{value:"true"}},[r("v-list-tile-action",[r("v-icon",{domProps:{innerHTML:e._s(t.icon)}})],1),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{textContent:e._s(t.title)}})],1)],1)}))],1),r("v-toolbar",{attrs:{app:"","clipped-left":e.clipped}},[r("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),r("v-toolbar-title",{domProps:{textContent:e._s(e.title)}})],1),r("v-content",[r("router-view")],1),r("v-footer",{attrs:{fixed:e.fixed,app:""}},[r("span",[e._v("© 2019")])])],1)},o=[],s={name:"App",data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"bubble_chart",title:"Inspire"}],miniVariant:!1,right:!1,rightDrawer:!1,title:"VueJS"}}},u=s,l=r("2877"),d=Object(l["a"])(u,i,o,!1,null,null,null);d.options.__file="App.vue";var f,v=d.exports,p=r("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{"align-center":""}},[r("v-flex",[r("h1",{staticClass:"display-1"},[e._v("Headlines")])]),r("v-flex",[r("v-layout",{attrs:{"justify-end":""}},[r("source-filter")],1)],1)],1)],1),r("div",{staticClass:"headline-cards"},[r("v-container",{attrs:{fluid:"","grid-list-md":""}},["loading"===e.headline.networkStatus?r("div",[r("div",{staticClass:"text-xs-center"},[r("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]):r("div",[0===e.articles.length?r("v-layout",{attrs:{column:"","align-center":""}},[r("div",{staticClass:"display-1"},[e._v("No articles found for "+e._s(e.currentSourceName))])]):e._e(),r("v-layout",{attrs:{row:"",wrap:""}},e._l(e.articles,function(t){return r("v-flex",{key:t.title,attrs:{xs12:"",sm6:"",md4:""}},[r("v-card",[r("v-card-media",{attrs:{src:t.urlToImage,height:"200px"}}),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("span",{staticClass:"grey--text"},[e._v(e._s(e.formatPublishedDate(t.publishedAt)))]),r("br"),r("h3",{staticClass:"headline mb-0"},[e._v(e._s(t.title))]),r("div",[e._v(e._s(t.description))])])]),r("v-card-actions",[r("v-btn",{attrs:{flat:"",color:"primary",href:t.url,target:"_blank"}},[e._v("Read Article")])],1)],1)],1)}))],1)])],1)],1)},b=[],h=r("c93e"),S=r("2f62"),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-menu",{attrs:{"offset-y":"","max-height":"260px"}},[r("v-btn",{attrs:{slot:"activator",color:"primary mr-0",dark:""},slot:"activator"},[e._v("\n    "+e._s(e.filterName)+"\n  ")]),r("v-list",[r("v-list-tile",{on:{click:function(t){e.filterHeadlineItems(e.defaultSourceFilter.id)}}},[r("v-list-tile-title",[e._v(e._s(e.defaultSourceFilter.name))])],1),e._l(e.sourceFilter.sourceItems,function(t){return r("v-list-tile",{key:t.id,on:{click:function(r){e.filterHeadlineItems(t)}}},[r("v-list-tile-title",[e._v(e._s(t.name))])],1)})],2)],1)},E=[],g=r("a34a"),y=r.n(g),w=r("3040"),L=r("bc3a"),x=r.n(L),j="099148be22804e849a0c6fe022b7cf5e",T=function(){return x.a.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=".concat(j))},O=function(){return x.a.get("https://newsapi.org/v2/sources?apiKey=".concat(j))},A="sourceList",I="requestSourceList",k="requestSourceListSuccess",H="requestSourceListFailure",F={requestStatus:"idle",sourceItems:[],requestError:null,currentSource:null},N={},C={requestSourceList:function(e){e.requestStatus="loading"},requestSourceListSuccess:function(e,t){e.requestStatus="loaded",e.sourceItems=t},requestSourceListFailure:function(e,t){e.requestStatus="loaded",e.requestError=t}},q={getSourceItems:function(){var e=Object(w["a"])(y.a.mark(function e(t){var r;return y.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.commit(I),e.next=4,O();case 4:r=e.sent,console.log("response: ",r),200===r.status?t.commit(k,r.data.sources):t.commit(H,r.data.error),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.commit(H,e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},D={namespaced:!0,state:F,getters:N,mutations:C,actions:q},U=r("a322"),P="headline",R={REQUEST_LATEST_HEADLINES:"requestLatestHeadlines",REQUEST_LATEST_HEADLINES_SUCCESS:"requestLatestHeadlinesSuccess",REQUEST_LATEST_HEADLINES_FAILURE:"requestLatestHeadlinesFailure"},Q="setCurrentSource",M={namespaced:!0,state:{networkStatus:"idle",articles:[],networkError:null,currentSource:null},getters:{currentSourceName:function(e){var t=e.currentSource;return t?t.name:"Filter"},articlesFromSource:function(e){var t=e.currentSource,r=e.articles;return t?r.filter(function(e){return e.source.id===t.id}):r}},mutations:(f={},Object(U["a"])(f,R.REQUEST_LATEST_HEADLINES,function(e){e.networkStatus="loading"}),Object(U["a"])(f,R.REQUEST_LATEST_HEADLINES_SUCCESS,function(e,t){e.networkStatus="loaded",e.articles=t}),Object(U["a"])(f,R.REQUEST_LATEST_HEADLINES_FAILURE,function(e,t){e.networkStatus="loaded",e.networkError=t}),Object(U["a"])(f,Q,function(e,t){e.currentSource=t}),f),actions:{requestLatestHeadlines:function(){var e=Object(w["a"])(y.a.mark(function e(t){var r;return y.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.commit(R.REQUEST_LATEST_HEADLINES),e.next=4,T();case 4:r=e.sent,200===r.status?t.commit(R.REQUEST_LATEST_HEADLINES_SUCCESS,r.data.articles):t.commit(R.REQUEST_LATEST_HEADLINES_FAILURE,r.data.error),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.commit(R.REQUEST_LATEST_HEADLINES_FAILURE,e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()}},$=Object(h["a"])({},M),J={data:function(){return{defaultSourceFilter:{id:null,name:"Filter"},currentHeadline:null}},computed:Object(h["a"])({},Object(S["e"])({sourceFilter:function(e){return e.sourceList}}),Object(S["c"])(P,{filterName:"currentSourceName"})),methods:Object(h["a"])({},Object(S["b"])(A,["getSourceItems"]),Object(S["d"])(P,{filterHeadlineItems:Q})),created:function(){this.getSourceItems()},mounted:function(){console.log("sourceItems: ",this.sourceFilter.sourceItems)}},V=J,K=Object(l["a"])(V,_,E,!1,null,null,null);K.options.__file="SourceFilter.vue";var Y=K.exports,z={components:{SourceFilter:Y},data:function(){return{}},computed:Object(h["a"])({},Object(S["e"])({headline:function(e){return e.headline},currentSource:function(e){return e.sourceList}}),Object(S["c"])(P,{articles:"articlesFromSource",currentSourceName:"currentSourceName"})),methods:Object(h["a"])({formatPublishedDate:function(e){var t=new Date(e),r=t.getDate(),a=t.getMonth()+1,n=t.getFullYear();return r<10&&(r="0"+r),a<10&&(a="0"+a),"".concat(r,".").concat(a,".").concat(n)}},Object(S["b"])("headline",["requestLatestHeadlines"])),created:function(){console.log(this),this.requestLatestHeadlines()},mounted:function(){console.log("headline: ",this.headline.articles)}},B=z,G=(r("7625"),Object(l["a"])(B,m,b,!1,null,"3a6ef7af",null));G.options.__file="Home.vue";var W=G.exports,X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{"align-center":""}},[r("v-flex",[r("h1",{staticClass:"display-1"},[e._v("Headlines")])]),r("v-flex",[r("v-layout",{attrs:{"justify-end":""}},[r("source-filter")],1)],1)],1)],1),r("div",{staticClass:"headline-cards"},[r("v-container",{attrs:{fluid:"","grid-list-md":""}},["loading"===e.headline.networkStatus?r("div",[r("div",{staticClass:"text-xs-center"},[r("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]):r("div",[0===e.articles.length?r("v-layout",{attrs:{column:"","align-center":""}},[r("div",{staticClass:"display-1"},[e._v("No articles found for "+e._s(e.currentSourceName))])]):e._e(),r("v-layout",{attrs:{row:"",wrap:""}},e._l(e.articles,function(t){return r("v-flex",{key:t.title,attrs:{xs12:"",sm6:"",md4:""}},[r("v-card",[r("v-card-media",{attrs:{src:t.urlToImage,height:"200px"}}),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("span",{staticClass:"grey--text"},[e._v(e._s(e.formatPublishedDate(t.publishedAt)))]),r("br"),r("h3",{staticClass:"headline mb-0"},[e._v(e._s(t.title))]),r("div",[e._v(e._s(t.description))])])]),r("v-card-actions",[r("v-btn",{attrs:{flat:"",color:"primary",href:t.url,target:"_blank"}},[e._v("Read Article")])],1)],1)],1)}))],1)])],1)],1)},Z=[],ee={components:{SourceFilter:Y},data:function(){return{}},computed:Object(h["a"])({},Object(S["e"])({headline:function(e){return e.headline},currentSource:function(e){return e.sourceList}}),Object(S["c"])(P,{articles:"articlesFromSource",currentSourceName:"currentSourceName"})),methods:Object(h["a"])({formatPublishedDate:function(e){var t=new Date(e),r=t.getDate(),a=t.getMonth()+1,n=t.getFullYear();return r<10&&(r="0"+r),a<10&&(a="0"+a),"".concat(r,".").concat(a,".").concat(n)}},Object(S["b"])("headline",["requestLatestHeadlines"])),created:function(){console.log(this),this.requestLatestHeadlines()},mounted:function(){console.log("headline: ",this.headline.articles)}},te=ee,re=(r("b9d7"),Object(l["a"])(te,X,Z,!1,null,"22c1aff3",null));re.options.__file="Headlines.vue";re.exports;a["default"].use(p["a"]);var ae=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:W},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]});a["default"].use(S["a"]);var ne=new S["a"].Store({modules:{headline:$,sourceList:D}});a["default"].config.productionTip=!1,new a["default"]({router:ae,store:ne,render:function(e){return e(v)}}).$mount("#app")},7625:function(e,t,r){"use strict";var a=r("8652"),n=r.n(a);n.a},8652:function(e,t,r){},b9d7:function(e,t,r){"use strict";var a=r("02f7"),n=r.n(a);n.a}});
//# sourceMappingURL=app.983a7b6c.js.map