(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf6f6caa"],{"0481":function(t,e,a){"use strict";var s=a("23e7"),i=a("a2bf"),n=a("7b0b"),r=a("07fa"),o=a("5926"),c=a("65f0");s({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=n(this),a=r(e),s=c(e,0);return s.length=i(s,e,e,a,0,void 0===t?1:o(t)),s}})},3900:function(t,e,a){"use strict";a("574c")},4069:function(t,e,a){var s=a("44d2");s("flat")},"574c":function(t,e,a){},"68d3":function(t,e,a){"use strict";a("b891")},"74e2":function(t,e,a){"use strict";a("d05d")},"8a47":function(t,e,a){"use strict";a("ad6a")},a2bf:function(t,e,a){"use strict";var s=a("da84"),i=a("e8b5"),n=a("07fa"),r=a("0366"),o=s.TypeError,c=function(t,e,a,s,l,d,u,h){var m,p,f=l,v=0,_=!!u&&r(u,h);while(v<s){if(v in a){if(m=_?_(a[v],v,e):a[v],d>0&&i(m))p=n(m),f=c(t,e,m,p,f,d-1)-1;else{if(f>=9007199254740991)throw o("Exceed the acceptable array length");t[f]=m}f++}v++}return f};t.exports=c},a434:function(t,e,a){"use strict";var s=a("23e7"),i=a("da84"),n=a("23cb"),r=a("5926"),o=a("07fa"),c=a("7b0b"),l=a("65f0"),d=a("8418"),u=a("1dde"),h=u("splice"),m=i.TypeError,p=Math.max,f=Math.min,v=9007199254740991,_="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!h},{splice:function(t,e){var a,s,i,u,h,C,g=c(this),b=o(g),w=n(t,b),y=arguments.length;if(0===y?a=s=0:1===y?(a=0,s=b-w):(a=y-2,s=f(p(r(e),0),b-w)),b+a-s>v)throw m(_);for(i=l(g,s),u=0;u<s;u++)h=w+u,h in g&&d(i,u,g[h]);if(i.length=s,a<s){for(u=w;u<b-s;u++)h=u+s,C=u+a,h in g?g[C]=g[h]:delete g[C];for(u=b;u>b-s+a;u--)delete g[u-1]}else if(a>s)for(u=b-s;u>w;u--)h=u+s-1,C=u+a-1,h in g?g[C]=g[h]:delete g[C];for(u=0;u<a;u++)g[u+w]=arguments[u+2];return g.length=b-s+a,i}})},ad6a:function(t,e,a){},b891:function(t,e,a){},be17:function(t,e,a){},c88e:function(t,e,a){
/*!
 * vue-peity v0.5.0
 * (c) 2016 Fangdun Cai <cfddream@gmail.com>
 * Released under the MIT License.
 */
!function(e,a){t.exports=a()}(0,(function(){return function(t){function e(s){if(a[s])return a[s].exports;var i=a[s]={exports:{},id:s,loaded:!1};return t[s].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var a={};return e.m=t,e.c=a,e.p="",e(0)}([function(t,e,a){var s,i;s=a(1);var n=a(6);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=s},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(4),n=s(i),r=["line","bar","pie","donut"];e.default={props:{type:{type:String,required:!0,validator:function(t){return r.indexOf(t)>-1}},data:{type:String,required:!0},options:{type:Object,default:function(){return{}}}},data:function(){return{chart:null}},mounted:function(){this.chart=new n.default(this.$el,this.type,this.data,this.options),this.chart.draw()},watch:{data:function(t){var e=this;this.$nextTick((function(){e.chart.raw=t,e.chart.draw()}))}}}},function(t,e){"use strict";t.exports={options:{delimiter:",",fill:["#4D89F9"],height:16,min:0,padding:.1,width:32},draw:function(t){for(var e=this.values(),a=Math.max.apply(Math,void 0===t.max?e:e.concat(t.max)),s=Math.min.apply(Math,void 0===t.min?e:e.concat(t.min)),i=this.prepare(t.width,t.height),n=i.getBoundingClientRect(),r=n.width,o=n.height,c=a-s,l=t.padding,d=this.fill(),u=this.x=function(t){return t*r/e.length},h=this.y=function(t){return o-(c?(t-s)/c*o:1)},m=0;m<e.length;m++){var p,f=u(m+l),v=u(m+1-l)-f,_=e[m],C=h(_),g=C,b=C;c?_<0?g=h(Math.min(a,0)):b=h(Math.max(s,0)):p=1,p=b-g,0===p&&(p=1,a>0&&c&&g--),i.appendChild(this.svgElement("rect",{fill:d.call(this,_,m,e),x:f,y:g,width:v,height:p}))}}}},function(t,e){"use strict";t.exports={options:{delimiter:",",fill:"#c6d9fd",height:16,min:0,stroke:"#4d89f9",strokeWidth:1,width:32},draw:function(t){var e=this.values();1===e.length&&e.push(e[0]);for(var a=Math.max.apply(Math,void 0===t.max?e:e.concat(t.max)),s=Math.min.apply(Math,void 0===t.min?e:e.concat(t.min)),i=this.prepare(t.width,t.height),n=i.getBoundingClientRect(),r=t.strokeWidth,o=n.width,c=n.height-r,l=a-s,d=this.x=function(t){return t*(o/(e.length-1))},u=this.y=function(t){var e=c;return l&&(e-=(t-s)/l*c),e+r/2},h=u(Math.max(s,0)),m=[0,h],p=0;p<e.length;p++)m.push(d(p),u(e[p]));m.push(o,h),t.fill&&i.appendChild(this.svgElement("polygon",{fill:t.fill,points:m.join(" ")})),r&&i.appendChild(this.svgElement("polyline",{fill:"none",points:m.slice(2,m.length-2).join(" "),stroke:t.stroke,"stroke-width":r,"stroke-linecap":"square"}))}}},function(t,e,a){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),n=a(2),r=a(3),o=a(5),c=function(t,e){var a=document.createElementNS("http://www.w3.org/2000/svg",t);for(var s in e)a.setAttribute(s,e[s]);return a},l=function(){function t(e,a,i,n){s(this,t),this.$el=e,this.type=a,this.raw=i,this.options=Object.assign({},t.defaults[this.type],n)}return i(t,[{key:"svgElement",value:function(){return c.apply(void 0,arguments)}},{key:"prepare",value:function(t,e){return this.$svg||(this.$el.style.display="none",this.$svg=c("svg",{class:"peity"}),this.$el.parentNode.insertBefore(this.$svg,this.$el)),this.$svg.innerHTML="",this.$svg.setAttribute("width",t),this.$svg.setAttribute("height",e),this.$svg}},{key:"fill",value:function(){var t=this.options.fill;return"function"==typeof t?t:function(e,a){return t[a%t.length]}}},{key:"draw",value:function(){t.graphers[this.type].call(this,this.options)}},{key:"values",value:function(){return this.raw.split(this.options.delimiter).map((function(t){return parseFloat(t)}))}}]),t}();l.defaults={},l.graphers={},l.register=function(t,e){l.defaults[t]=e.options,l.graphers[t]=e.draw},l.register("bar",n),l.register("donut",o),l.register("line",r),l.register("pie",o),t.exports=l},function(t,e){"use strict";t.exports={options:{fill:["#ff9900","#fff4dd","#ffc66e"],radius:8},draw:function(t){if(!t.delimiter){var e=this.raw.match(/[^0-9\.]/);t.delimiter=e?e[0]:","}var a=this.values().map((function(t){return t>0?t:0}));if("/"===t.delimiter){var s=a[0],i=a[1];a=[s,Math.max(0,i-s)]}for(var n=0,r=a.length,o=0;n<r;n++)o+=a[n];o||(r=2,o=1,a=[0,1]);var c=2*t.radius,l=this.prepare(t.width||c,t.height||c),d=l.getBoundingClientRect(),u=d.width,h=d.height,m=u/2,p=h/2,f=Math.min(m,p),v=t.innerRadius;"donut"!==this.type||v||(v=.5*f);var _=Math.PI,C=this.fill(),g=this.scale=function(t,e){var a=t/o*_*2-_/2;return[e*Math.cos(a)+m,e*Math.sin(a)+p]},b=0;for(n=0;n<r;n++){var w,y=a[n],x=y/o;if(0!==x){if(1===x)if(v){var k=m-.01,$=p-f,D=p-v;w=this.svgElement("path",{d:["M",m,$,"A",f,f,0,1,1,k,$,"L",k,D,"A",v,v,0,1,0,m,D].join(" ")})}else w=this.svgElement("circle",{cx:m,cy:p,r:f});else{var M=b+y,L=["M"].concat(g(b,f),"A",f,f,0,x>.5?1:0,1,g(M,f),"L");v?L=L.concat(g(M,v),"A",v,v,0,x>.5?1:0,0,g(b,v)):L.push(m,p),b+=y,w=this.svgElement("path",{d:L.join(" ")})}w.setAttribute("fill",C.call(this,y,n,a)),l.appendChild(w)}}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span")},staticRenderFns:[]}}])}))},d05d:function(t,e,a){},eacf:function(t,e,a){"use strict";a("be17")},f560:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"scrollSign",staticClass:"home",class:[t.chainName,t.getLanguage]},[s("Carousel"),s("div",{staticClass:"home__assets"},[s("div",{staticClass:"container container-color"},[s("div",{staticClass:"new-container"},[s("p",{staticClass:"home__assets-amount",staticStyle:{"text-align":"center"}},[s("span",{staticClass:"amount-icon"}),s("span",{staticClass:"text"},[t._v(" "+t._s(t.$t("MDXtotals"))+" "),s("span",{staticClass:"textEn"},[t._v(t._s((t.onresizeIsPC,"")))])]),s("CountUp",{staticClass:"amount-number numbers Medium",attrs:{endVal:Number(t.homeData.heco_total_tvl)+Number(t.homeData.bsc_total_tvl)||0}})],1),s("div",{staticClass:"home-info-pc"},[s("div",{staticClass:"h-info-item"},[s("img",{staticClass:"icon-img",attrs:{src:a("04a2")}}),s("span",{staticClass:"hi-name"},[t._v(" "+t._s(t.$t("MDXtotal")))]),s("span",{staticClass:"hi-num"},[s("CountUp",{staticClass:"amount-number numbers Medium",attrs:{endVal:Number(t.homeData.heco_total_tvl)||0}})],1)]),s("div",{staticClass:"h-info-item"},[s("img",{staticClass:"icon-img",attrs:{src:a("d3b5")}}),s("span",{staticClass:"hi-name"},[t._v(" "+t._s(t.$t("MDXtotal")))]),s("span",{staticClass:"hi-num"},[s("CountUp",{staticClass:"amount-number numbers Medium",attrs:{endVal:Number(t.homeData.bsc_total_tvl)||0}})],1)])]),s("div",{staticClass:"home-info-h5"},[s("div",{staticClass:"h-info-item text"},[s("p",{staticClass:"hi-name"},[s("img",{staticClass:"icon-img",attrs:{src:a("04a2")}}),s("span",[t._v(t._s(t.$t("MDXtotal")))])]),s("p",{staticClass:"hi-num numbers"},[s("CountUp",{attrs:{endVal:Number(t.homeData.heco_total_tvl)||0}})],1)]),s("p",{staticClass:"line"}),s("div",{staticClass:"h-info-item text"},[s("p",{staticClass:"hi-name"},[s("img",{staticClass:"icon-img",attrs:{src:a("d3b5")}}),s("span",[t._v(t._s(t.$t("MDXtotal")))])]),s("p",{staticClass:"hi-num numbers"},[s("CountUp",{attrs:{endVal:Number(t.homeData.bsc_total_tvl)||0}})],1)])]),s("div",{staticClass:"home__assets-price-card text"},[s("div",{staticClass:"price__card-item no-margin "},[s("div",{staticClass:"card__item-key"},[t._v(t._s(t.$t("CurrentMDEXPrice")))]),s("div",{staticClass:"card__item-value numbers"},[t._v(" "+t._s(t.currentPrice)+" ")])]),s("div",{staticClass:"price__card-item no-margin"},[s("div",{staticClass:"card__item-key"},[t._v(t._s(t.$t("Yourbalance")))]),s("div",{staticClass:"card__item-value numbers"},[s("CountUp",{attrs:{endVal:t.balance||0}})],1)]),s("div",{staticClass:"price__card-item"},[s("div",{staticClass:"card__item-key"},[t._v(" "+t._s(t.$t("PendingAirdropRewards"))+" "),s("el-tooltip",{attrs:{effect:"dark",content:"HECO&BSC",placement:t.isPC?"right-end":"bottom","popper-class":"halving"}},[s("img",{staticClass:"tist",attrs:{src:t.tist,alt:""}})])],1),s("div",{staticClass:"card__item-value numbers"},[s("CountUp",{attrs:{endVal:t.allChainData.reward_amount||0,options:t.options}})],1)]),s("div",{staticClass:"price__card-item"},[s("div",{staticClass:"card__item-key break"},[t._v(" "+t._s(t.$t("AmountToBeRepurchased"))+" "),s("el-tooltip",{attrs:{effect:"dark",placement:t.isPC?"right-end":"bottom","popper-class":"halving"}},[s("div",{attrs:{slot:"content"},domProps:{innerHTML:t._s(t.$t("burnTip",{firstNum:t._numComma(t.allChainData.repurch_amount,2),secondNum:t._numComma(t.allChainData.repurch_balance,0)}))},slot:"content"}),s("img",{staticClass:"tist",attrs:{src:t.tist,alt:""}})])],1),s("div",{staticClass:"card__item-value numbers"},[s("CountUp",{attrs:{endVal:t.repurchasedAmount||0,options:t.options}})],1)]),s("div",{staticClass:"price__card-item"},[s("div",{staticClass:"card__item-key"},[t._v(" "+t._s(t.$t("TotalRepurchaseAndDestructionQuantity"))+" "),s("el-tooltip",{attrs:{effect:"dark",content:"HECO&BSC",placement:t.isPC?"right-end":"bottom","popper-class":"halving"}},[s("img",{staticClass:"tist",attrs:{src:t.tist,alt:""}})])],1),s("div",{staticClass:"card__item-value numbers"},[s("CountUp",{attrs:{endVal:t.allChainData.destroy_mdx+t.allChainData.lock_mdx+1e6||0}})],1)]),s("div",{staticClass:"price__card-item time"},[s("div",{staticClass:"card__item-key"},[t._v(" "+t._s(t.$t("Countdown"))+" "),s("el-tooltip",{attrs:{effect:"dark",content:t.$t("halvingDescription"),placement:t.isPC?"right-end":"bottom","popper-class":"halving"}},[s("img",{staticClass:"tist",attrs:{src:t.tist,alt:""}})])],1),s("div",{staticClass:"card__item-value new-item-value numbers"},[s("strong",[t._v(t._s(t.$t("approximately")))]),s("span",[t._v(t._s(t.formatCountdownDay.d))]),t._v(":"),s("span",[t._v(t._s(t.formatCountdownDay.h))]),t._v(":"),s("span",[t._v(t._s(t.formatCountdownDay.m))]),t._v(":"),s("span",[t._v(t._s(t.formatCountdownDay.s))])])])]),s("div",{staticClass:"home-input__wrap"},[s("div",{staticClass:"input-wrap text"},[s("header",{staticClass:"borad header-img "},[s("div",{staticClass:"name-icom"},[s("img",{staticClass:"icon-img",attrs:{src:a("0095")}}),s("span",{staticClass:"text Bold"},[t._v(t._s(t.$t("Boardroom")))])]),s("router-link",{attrs:{to:"/boardroom"}},[t._v(" "+t._s(t.$t("seeMore"))+" "),s("img",{staticClass:"more",attrs:{src:a("69f5")}})])],1),s("table",{attrs:{border:"0",cellpadding:"0",cellspacing:"0"}},[s("thead",[s("th",{staticClass:"al fs16"},[t._v(t._s(t.$t("Staked")))]),s("th",{staticClass:"jar fs16"},[t._v(t._s(t.$t("Earned")))]),s("th",{staticClass:"ar fs16"},[t._v(t._s(t.$t("ApyTopic.apy")))]),s("th",{staticClass:"operation fs16"},[t._v(t._s(t.$t("operation")))])]),s("tbody",t._l(t.boardRoomData,(function(e,a){return s("tr",{key:e.earnedToken+e.pid+a},[s("td",{staticClass:"al textEn"},[t._v(t._s(e.pool_name))]),s("td",{staticClass:"textEn"},[t._v(t._s(e.earnedToken))]),s("td",{staticClass:"art numbers"},[s("CountUp",{attrs:{endVal:e.pool_apy>0?t.boardRoomApy(e):0}}),t._v("% ")],1),s("td",{staticClass:"operation-ar"},[s("div",{staticClass:"oper-div"},[1!=t.chainId?s("router-link",{attrs:{to:3==e.pool_type?"/pool/lockup/"+e.earned_token.toLowerCase():"/pool/boardroom/"+e.earned_token.toLowerCase()+"/"+e.pid}},[t._v(t._s(t.$t("Stakeds"))+" ")]):s("span",[t._v(t._s(t.$t("Stakeds")))]),s("span",[t._v("|")]),s("a",{on:{click:function(){return t.openLink()}}},[t._v(t._s(t.$t("transactions")))])],1)])])})),0),t.boardRoomData&&0==t.boardRoomData.length?s("p",{staticClass:"emptyData"},[t._v(t._s(t.$t("empptyData")))]):t._e()])]),s("div",{staticClass:"input-wrap text"},[s("header",{staticClass:"liuq header-img"},[s("div",{staticClass:"name-icom"},[s("img",{staticClass:"icon-img",attrs:{src:a("bace")}}),s("span",{staticClass:"text Bold"},[t._v(t._s(t.$t("Pool")))])]),s("router-link",{attrs:{to:"/liquidity"}},[t._v(t._s(t.$t("seeMore"))+" "),s("img",{staticClass:"more",attrs:{src:a("69f5")}})])],1),s("table",{attrs:{border:"0",cellpadding:"0",cellspacing:"0"}},[s("thead",[s("th",{staticClass:"al fs16"},[t._v(t._s(t.$t("Staked")))]),s("th",{staticClass:"jar fs16"},[t._v(t._s(t.$t("Earned")))]),s("th",{staticClass:"ar fs16"},[t._v(t._s(t.$t("ApyTopic.apr")))]),s("th",{staticClass:"operation fs16"},[t._v(t._s(t.$t("operation")))])]),s("tbody",t._l(t.airdropList,(function(e){return s("tr",{key:e.pool_name},[s("td",{staticClass:"al textEn"},[t._v(t._s(e.base_name))]),s("td",{staticClass:"textEn"},[t._v("MDX")]),s("td",{staticClass:"art numbers"},[s("CountUp",{attrs:{endVal:e.pool_apy>0?365*e.pool_apy:0}}),t._v("% ")],1),s("td",{staticClass:"operation-ar"},[s("div",{staticClass:"oper-div"},[1!=t.chainId?s("router-link",{attrs:{to:"pool/"+e.type+"/mdx/"+e.pid}},[t._v(t._s(t.$t("Stakeds")))]):s("span",[t._v(t._s(t.$t("Stakeds")))]),s("span",[t._v("|")]),s("a",{on:{click:function(){return t.openLink(e)}}},[t._v(t._s(t.$t("transactions")))])],1)])])})),0),0==t.airdropList.length?s("p",{staticClass:"emptyData"},[t._v(t._s(t.$t("empptyData")))]):t._e()])])]),t.isMobile?s("div",{staticClass:"home-input__current text"},[s("div",{staticClass:"current"},[s("p",{staticClass:"desc"},[t._v(t._s(t.$t("CurrentLiquidity"))),s("span",{staticClass:"textEn"},[t._v("(HECO&BSC)")])]),s("p",{staticClass:"amount numbers"},[s("CountUp",{attrs:{endVal:t.allChainData.mining_supply||0}})],1)])]):t._e(),t.isPC?s("section",{staticClass:"mining-content"},[s("div",{staticClass:"current-mining"},[s("p",{staticClass:"desc"},[t._v(t._s(t.$t("CurrentLiquidity")))]),s("p",{staticClass:"amount numbers"},[s("CountUp",{attrs:{endVal:t.allChainData.mining_supply||0}})],1)]),s("hotCoin")],1):t._e(),s("div"),t._e()])])]),t.isPC?t._e():s("hotCoin"),s("sponsor")],1)},i=[],n=a("ade3"),r=a("2909"),o=(a("ac1f"),a("466d"),a("b64b"),a("caad"),a("2532"),a("d3b7"),a("25f0"),a("4e82"),a("fb6a"),a("159b"),a("a434"),a("ed08")),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"addbg",class:t.chainName},[s("div",{staticClass:"home-funds-h5"},[s("div",{staticClass:"funds-box"},[s("div",{staticClass:"funds-box-title"},[s("div",[t._v(t._s(t.$t("fundsTitle1")))])]),s("div",{staticClass:"funds-box-data"},t._l(t.fundsDataList,(function(e,a){return s("div",{key:a,staticClass:"funds-box-data-item"},[s("div",{staticClass:"funds-box-data-itemicon",class:e.class}),s("div",{staticClass:"funds-box-data-itemtext"},[t._v(t._s(t.$t(e.text)))]),s("div",{staticClass:"funds-box-data-itemnum"},[t._v(t._s(t.$t(e.num)))])])})),0)])]),s("div",{staticClass:"home-funds-h5-2"},[s("div",{staticClass:"home-funds-h5-2title"},[t._v(t._s(t.$t("fundsTitle2")))]),s("div",{staticClass:"home-funds-h5-2imgtext"},t._l(t.fundsList,(function(e,a){return s("div",{key:a,staticClass:"funds-h5-2imgtext-item",attrs:{tabindex:a}},[s("img",{attrs:{src:e.url,alt:""}}),s("div",{staticClass:"text text-word"},[t._v(t._s(t.$t(e.title)))]),s("div",{staticClass:"funds-h5-2imgtext-item-hover"},[s("div",{staticClass:"hover-title text-word"},[t._v(t._s(t.$t(e.title)))]),s("div",{staticClass:"hover-description text-word"},[t._v(t._s(t.$t(e.description)))])])])})),0)]),s("div",{staticClass:"home-funds"},[s("el-carousel",{attrs:{interval:5e3,arrow:"always",autoplay:!0,height:"410px"}},[s("el-carousel-item",{key:1},[s("div",{staticClass:"funds-width"},[s("div",{staticClass:"home-funds-title"},[t._v(t._s(t.$t("fundsTitle2")))]),s("div",{staticClass:" home-funds-data"},[s("div",{staticClass:"home-funds-data-item home-funds-data-top"},[s("div",{staticClass:"data-item-box"},[s("div",{staticClass:"data-item-box-flex"},[s("div",{staticClass:"data-item-box-icon data-icon2"}),s("div",{staticClass:"data-item-box-num"},[t._v(t._s(t.$t("transactionVolumeNum")))])]),s("div",{staticClass:"data-item-box-description"},[t._v(t._s(t.$t("transactionVolume")))])])]),s("div",{staticClass:"home-funds-data-item"},[s("div",{staticClass:"data-item-box"},[s("div",{staticClass:"data-item-box-flex"},[s("div",{staticClass:"data-item-box-icon data-icon1"}),s("div",{staticClass:"data-item-box-num"},[t._v(t._s(t.$t("globalUsersNum")))])]),s("div",{staticClass:"data-item-box-description"},[t._v(t._s(t.$t("globalUsers")))])]),s("div",{staticClass:"data-item-box"},[s("div",{staticClass:"data-item-box-img data-icon3"})]),s("div",{staticClass:"data-item-box"},[s("div",{staticClass:"data-item-box-flex"},[s("div",{staticClass:"data-item-box-icon data-icon4"}),s("div",{staticClass:"data-item-box-num"},[t._v(t._s(t.$t("MDXHoldersNum")))])]),s("div",{staticClass:"data-item-box-description"},[t._v(t._s(t.$t("MDXHolders")))])])])])])]),s("el-carousel-item",{key:2},[s("div",{staticClass:"funds-width"},[s("div",{staticClass:"home-funds-title"},[t._v(t._s(t.$t("fundsTitle2")))]),s("div",{staticClass:"home-funds-image-text"},t._l(t.fundsList,(function(e,a){return s("div",{key:a,staticClass:"image-text-item"},[s("img",{attrs:{src:e.url,alt:""}}),s("div",{staticClass:"text"},[t._v(t._s(t.$t(e.title)))]),s("div",{staticClass:"image-text-item-hover"},[s("div",{staticClass:"hover-title"},[t._v(t._s(t.$t(e.title)))]),s("div",{staticClass:"hover-description"},[t._v(t._s(t.$t(e.description)))])])])})),0)])]),s("el-carousel-item",{key:3},[s("div",{staticClass:"funds-width"},[s("div",{staticClass:"home-funds-title"},[t._v(t._s(t.$t("MDXUsageScenarios")))]),s("div",{staticClass:"home-scenes-image-text"},t._l(t.scenesList,(function(e,a){return s("div",{key:a,staticClass:"scenes-item"},[s("div",{staticClass:"scenes-item-icon",class:e.class}),s("div",{staticClass:"scenes-item-text"},[t._v(t._s(2===a?e.text:t.$t(e.text)))]),s("div",{staticClass:"scenes-item-description"},[t._v(t._s(t.$t(e.description)))])])})),0)])])],1)],1),s("div",{staticClass:"home-using text"},[s("div",{staticClass:"container"},[s("div",{staticClass:"home-using__title text Bold"},[t._v(t._s(t.$t("MDXUsageScenarios")))]),s("div",{staticClass:"home-using__content"},[s("div",{staticClass:"home-using__item"},[s("div",{staticClass:"home-using__item-icon icon-1"}),s("div",{staticClass:"home-using__item-title"},[t._v(t._s(t.$t("Repurchase")))]),s("div",{staticClass:"home-using__item-describe"},[t._v(" "+t._s(t.$t("RepurchaseDesc"))+" ")])]),s("div",{staticClass:"home-using__item"},[s("div",{staticClass:"home-using__item-icon icon-2"}),s("div",{staticClass:"home-using__item-title"},[t._v(t._s(t.$t("airdrop")))]),s("div",{staticClass:"home-using__item-describe"},[t._v(t._s(t.$t("HT")))])]),s("div",{staticClass:"home-using__item"},[s("div",{staticClass:"home-using__item-icon icon-3"}),s("div",{staticClass:"home-using__item-title"},[t._v("Dao")]),s("div",{staticClass:"home-using__item-describe"},[t._v(t._s(t.$t("DaoDesc")))])]),s("div",{staticClass:"home-using__item"},[s("div",{staticClass:"home-using__item-icon icon-4"}),s("div",{staticClass:"home-using__item-title"},[t._v(t._s(t.$t("Pay")))]),s("div",{staticClass:"home-using__item-describe"},[t._v(t._s(t.$t("PayDesc")))])])])])]),s("div",{staticClass:"home-mechanism home-mechanism-h5 text"},[s("div",{staticClass:"container"},[s("div",{staticClass:"home-mechanism__title text Bold"},[t._v(t._s(t.$t("MDXCheck")))]),s("div",{staticClass:"home-mechanism__content"},[s("div",{staticClass:"home-mechanism__item"},[s("a",{attrs:{href:t.fairyproof,target:"_blank"}},[s("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("295e")}})])]),s("div",{staticClass:"home-mechanism__item"},[s("a",{attrs:{href:t.certik,target:"_blank"}},[s("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("c04d")}})])]),s("div",{staticClass:"home-mechanism__item"},[s("a",{attrs:{href:t.slowmist,target:"_blank"}},[s("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("3790")}})])])])])]),s("div",{staticClass:"home-mechanism text"},[s("div",{staticClass:"container"},[s("div",{staticClass:"home-mechanism__title text Bold"},[t._v(t._s(t.$t("CooperativePartner")))]),s("div",{staticClass:"home-mechanism__content"},[t._l(t.imgList,(function(t,e){return s("div",{key:e,staticClass:"home__item_list_new"},[s("a",{attrs:{href:t.herf,target:"_blank",rel:"noopener noreferrer"}},[s("img",{staticClass:"home-mechanism__item-logo",attrs:{src:t.url}})])])})),s("div",{staticClass:"home__item_list_new"},[s("a",{attrs:{href:"https://safepal.io/",target:"_blank"}},[s("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("d36a")}})])]),s("div",{staticClass:"home__item_list_new"},[s("a",{attrs:{href:"https://www.whatscoin.com",target:"_blank",rel:"noopener noreferrer"}},[s("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("c59c")}})])]),s("div",{staticClass:"home__item_list_new"},[s("a",{attrs:{href:t.getUrlList["OpenMeta"],target:"_blank"}},[s("img",{staticClass:"home-mechanism__item-logo",attrs:{src:a("1aed")}})])])],2)])]),s("div",{staticClass:"wrap "},[s("div",{staticClass:"sjplan text"},[s("h1",[t._v(t._s(t.$t("OpenMetaDec")))]),s("button",{staticClass:"text",on:{click:t.jumpHandle}},[t._v(t._s(t.$t("seedetails")))])])])])},l=[],d=(a("5319"),a("99af"),{data:function(){return{fundsList:[{url:a("d56f"),title:"riskVulnerability",description:"riskVulnerabilityDesc"},{url:a("2ffe"),title:"complete",description:"completeDesc"},{url:a("e3ca"),title:"open",description:"openDesc"},{url:a("fede"),title:"assets",description:"assetsDesc"}],fundsDataList:[{class:"data-icon2",text:"transactionVolume",num:"transactionVolumeNum"},{class:"data-icon1",text:"globalUsers",num:"globalUsersNum"},{class:"data-icon4",text:"MDXHolders",num:"MDXHoldersNum"}],scenesList:[{class:"icon-1",text:"Repurchase",description:"RepurchaseDesc"},{class:"icon-2",text:"airdrop",description:"HT"},{class:"icon-3",text:"Dao",description:"DaoDesc"},{class:"icon-4",text:"Pay",description:"PayDesc"}],imgList:[{url:a("4baa"),herf:"en"==this.$store.state.language?"https://coinmarketcap.com/exchanges/mdex/":"https://coinmarketcap.com/zh/exchanges/mdex/"},{url:a("deb1"),herf:"https://www.coingecko.com"},{url:a("b700"),herf:"https://www.hecochain.com"},{url:a("86e3"),herf:"https://www.binance.com"},{url:a("ae05"),herf:"https://defibox.io"},{url:a("e493"),herf:"https://debank.com"},{url:a("9bb7"),herf:"https://www.tokenpocket.pro"},{url:a("5f94"),herf:"https://token.im"},{url:a("e0d7"),herf:"https://www.huobiwallet.com"},{url:a("80b4"),herf:"https://bitkeep.com"},{url:a("6232"),herf:"https://bitpie.com"},{url:a("ea93"),herf:"https://www.coinwind.com"},{url:a("a34d"),herf:"https://poly.network"},{url:a("4772"),herf:"https://www.hyperpay.tech"},{url:a("153d"),herf:"https://kingdata.com"}],hostname:window.location.hostname.replace("www.","")}},computed:{coinmarketcap:function(){return"en"==this.$store.state.language?"https://coinmarketcap.com/exchanges/mdex/":"https://coinmarketcap.com/zh/exchanges/mdex/"},certik:function(){var t="Bsc"==this.chainName?"certik_bsc":"certik";return"https://".concat(this.hostname,"/").concat(t,".pdf")},fairyproof:function(){var t="Bsc"==this.chainName?"fairyproof_bsc":"fairyproof";return"https://".concat(this.hostname,"/").concat(t,".pdf")},slowmist:function(){var t="Bsc"==this.chainName?"slowmist_bsc":"slowmist";return"https://".concat(this.hostname,"/").concat(t,".pdf")},chainId:function(){return this.$store.getters.chainId}},methods:{jumpHandle:function(){window.open(this.getUrlList["OpenMeta"])}}}),u=d,h=(a("8a47"),a("2877")),m=Object(h["a"])(u,c,l,!1,null,"57ddc369",null),p=m.exports,f=a("ae48"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title-banner"},[a("el-carousel",{ref:"carousel",attrs:{interval:5e3,arrow:t.isPC&&t.cloneBannerData.length>1?"always":"never","indicator-position":t.isPC?"none":"",autoplay:!0}},t._l(t.cloneBannerData,(function(e,s){return a("el-carousel-item",{key:"Carouserl"+s},[a("v-touch",{staticClass:"wrapper",attrs:{"swipe-options":{direction:"horizontal"}},on:{swipeleft:function(e){return t.swiperleft(s)},swiperight:function(e){return t.swiperright(s)}}},[a("div",{staticClass:"pic",style:{backgroundImage:"url("+e[t.imgKey]["image_url"]+")"},on:{click:function(){return t.jumpHandle(e[t.imgKey])}}})])],1)})),1)],1)},_=[],C=(a("4de4"),{name:"Carouserl",computed:{bannerData:function(){return this.$store.state.bannerData},cloneBannerData:function(){return this.$store.state.cloneBannerData},imgKey:function(){return Object(f["c"])(this.isPC,this.getLanguage)}},watch:{getLanguage:function(){this.updataBannerDataHandle()}},methods:{jumpHandle:function(t){"1"==t.link_type&&this.$router.push(t["link_url"]),"2"==t.link_type&&window.open(t["link_url"])},swiperleft:function(t){this.$refs.carousel.next(),this.$refs.carousel.setActiveItem(t+1)},swiperright:function(t){this.$refs.carousel.prev(),this.$refs.carousel.setActiveItem(t-1)},updataBannerDataHandle:function(){var t=this;if(this.bannerData){var e=this.bannerData.filter((function(e){return!!e[t.imgKey]["image_url"]}));this.$store.commit("saveCloneBannerData",e)}}}}),g=C,b=(a("74e2"),Object(h["a"])(g,v,_,!1,null,"2cddc81a",null)),w=b.exports,y=a("32a9"),x=a("2a5e"),k=a("6a56"),$=a("365c"),D=a("901e"),M=a.n(D),L=a("00c6"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isPC?a("section",{class:[56==t.chainId?"bsc-padding":""]},[a("el-table",{directives:[{name:"skeleton",rawName:"v-skeleton",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tabledata}},[a("el-table-column",{attrs:{label:t.$t("rmbz"),align:"left",width:150},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("img",{staticClass:"icon",attrs:{src:s.url,alt:""}}),a("span",[t._v(t._s(s.name))])]}}],null,!1,1998345556)}),a("el-table-column",{attrs:{label:t.$t("newPrice"),align:t.loading?"left":"center"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("span",{staticClass:"price"},[t._v(t._s("$"+s.price.toFixed(2)))])]}}],null,!1,3497491645)}),a("el-table-column",{attrs:{label:t.$t("price24"),align:t.loading?"left":"center"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("span",{class:["gain ",s.gain>=0?"gain_rise":"gain_fall"]},[t._v(t._s(s.gain.toFixed(2)+"%"))])]}}],null,!1,2052611735)}),a("el-table-column",{attrs:{label:t.$t("action"),align:t.loading?"left":"center"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("button",{on:{click:function(e){return t.transfer(s.token)}}},[t._v(t._s(t.$t("transactions")))])]}}],null,!1,593179501)})],1)],1):a("section",{directives:[{name:"show",rawName:"v-show",value:t.tabledata.length,expression:"tabledata.length"}]},[a("ul",[a("el-skeleton",{attrs:{loading:t.loading,animated:"",count:4}},[a("template",{slot:"template"},[a("el-skeleton-item",{staticStyle:{width:"125px",height:"141px","margin-right":"14px"},attrs:{variant:"text"}})],1),[a("div",{staticStyle:{display:"flex"}},t._l(t.tabledata,(function(e,s){return a("li",{key:s,class:[128==t.chainId?"":"bsc_li"],on:{click:function(a){return t.transfer(e.token)}}},[a("div",{staticClass:" coin_info"},[a("img",{attrs:{src:e.url,alt:""}}),a("span",[t._v(t._s(e.name))])]),a("div",{staticClass:"price"},[t._v(t._s("$"+e.price.toFixed(2)))]),a("div",{class:["gain ",e.gain>=0?"gain_rise":"gain_fall"]},[a("span",[t._v(t._s(e.gain>=0?"+":"-"))]),t._v(t._s(e.gain.toFixed(2)+"%"))]),128==t.chainId?a("infoChart",{attrs:{data:e.dataChart,color:e.gain>=0?"#03AD90":"#FF6971",width:101,height:35}}):t._e()],1)})),0)]],2)],1)])},I=[],O=a("1da1"),P=(a("0481"),a("4069"),a("d81d"),a("a9e3"),a("b0c0"),a("96cf"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("peity",{attrs:{type:"line",options:{fill:["rgba(0,0,0,0)"],stroke:t.color,strokeWidth:1.5,width:t.width,height:t.height},data:t.pieData}})}),E=[],S=a("c88e"),R=a.n(S),A={props:{data:{type:Array,default:[]},color:String,width:String,height:String},components:{Peity:R.a},computed:{pieData:function(){var t;return null===(t=this.data)||void 0===t?void 0:t.toString()}},data:function(){return{}},created:function(){}},N=A,B=(a("3900"),Object(h["a"])(N,P,E,!1,null,"7f63689e",null)),T=B.exports,U=a("3191"),V={components:{infoChart:T},data:function(){return{loading:!0,tabledata:[],tokenList:{}}},computed:{tokenListInfo:function(){return this.tokenList[this.chainId],this.tokenList[this.chainId]}},mounted:function(){this.loading=!1,this.tabledata=[],this.init()},created:function(){return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},watch:{chainId:function(){56==this.chainId&&(this.tabledata=[]),this.init()}},methods:{init:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){var a,s,i,n,r,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(U["e"])();case 2:return a=e.sent,t.tokenList=a.data,e.next=6,t.getChartInfo();case 6:for(e.sent,s=t.$store.state.priceList,i=t.$store.state.earlyPriceList,n=t.tokenListInfo.map((function(t){return s.filter((function(e){return e.tokenAddress==t.token.toLowerCase()}))})).flat(),r=t.tokenListInfo.map((function(t){return i.filter((function(e){return e.tokenAddress==t.token.toLowerCase()}))})).flat(),o=[],c=0;c<n.length;c++)o.push(100*(Number(n[c].price)-Number(r[c].price))/Number(r[c].price));t.tokenListInfo,t.tabledata=t.tokenListInfo.map((function(e,a){return{name:e.name,token:e.token,price:Number(n[a].price),gain:Number(o[a]),url:"https://mdex.co/token-icons/".concat(56==t.chainId?"bsc":"heco","/").concat(e.token.toLowerCase(),".png")}}));case 15:case"end":return e.stop()}}),e)})))()},getChartInfo:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){var a,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=[],t.tabledata.length||(t.loading=!0),s=0;case 3:if(!(s<t.tokenListInfo.length)){e.next=11;break}return e.next=6,Object(U["c"])(t.chainId,t.tokenListInfo[s].token);case 6:i=e.sent,i.data.result.length&&a.push(i.data.result.map((function(t){return parseInt(t.open)<=.1?1e3*t.open%10:parseInt(t.open)<=10||parseInt(t.open)<=100?10*t.open%10:parseInt(t.open%100/10)})));case 8:s++,e.next=3;break;case 11:return t.tabledata.length||(t.loading=!1),e.abrupt("return",a);case 14:case"end":return e.stop()}}),e)})))()},transfer:function(t){window.open("https://".concat(56==this.chainId?"bsc":"ht",".").concat(window.location.hostname.replace("www.",""),"/#/swap?lang=").concat(this.getLanguage,"&inputCurrency=").concat(56==this.chainId?"0x55d398326f99059ff775485246999027b3197955":"0xa71EdC38d189767582C38A3145b5873052c3e47a","&outputCurrency=").concat(t))}}},H=V,X=(a("68d3"),Object(h["a"])(H,j,I,!1,null,"5dc47400",null)),F=X.exports,q=null,z=null,K=Object(n["a"])({name:"Home",components:{sponsor:p,Carousel:w,homeTips:L["a"],hotCoin:F},data:function(){return{tist:a("79e5"),options:{decimalPlaces:0},countdown:parseInt((new Date("2023/05/26 20:00:00 GMT+08:00").getTime()-(new Date).getTime())/1e3),liquidityApys:{},onresizeIsPC:!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)}},$computed:{bnp:"bnp"},methods:{startCountdown:function(){var t=this;q=setInterval((function(){t.countdown-=1,t.countdown<=0&&clearInterval(q)}),1e3)},menu:function(){var t=this.$refs.scrollSign.scrollTop;this.navStatus!=t>0&&this.$store.commit("setNavStatus",!this.navStatus)},boardRoomApy:function(t){if(3==t.pool_type){var e=t["weights"],a=Object.keys(e).length;return Object(f["b"])(t.pool_apy,e[a-1])}return Object(f["b"])(t.pool_apy)},openLink:function(t){var e=this;t?Object($["a"])(this.chainId,t.address).then((function(a){0==a.data.code?Object(k["e"])(t.address,e.getLanguage,e.isMobile):window.open(e.globalGetTokenConfig(t),"_self")})):Object.keys(y["e"]).includes(this.chainName)&&Object(k["e"])(y["e"][this.chainName],this.getLanguage,this.isMobile)},_numComma:f["e"]},destroyed:function(){clearInterval(q),clearInterval(z)},watch:{countdown:function(){clearInterval(q),this.startCountdown()}},mounted:function(){var t=this;this.isMobile&&(this.menu(),this.$refs.scrollSign.addEventListener("scroll",this.menu)),this.startCountdown(),window.onresize=function(){t.onresizeIsPC=!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)}},computed:{homeData:function(){return this.$store.state.homeData},rewardeData:function(){return this.$store.state.boardRoom.rewardeData},allChainData:function(){return this.$store.state.allChain},currentChainBoardRoomData:function(){return this.$store.getters["boardRoom/currentChainBoardRoomData"]},currentPrice:function(){var t;return Object(x["a"])(null===(t=this.homeData.mdex_info)||void 0===t?void 0:t.price,4,"round")},repurchasedAmount:function(){var t=new M.a(this.allChainData.repurch_balance).times(this.currentPrice);return new M.a(this.allChainData.repurch_amount).plus(t).toString(10)},supply:function(){var t;return 1*(null===(t=this.homeData.mdex_info)||void 0===t?void 0:t.supply)||0},market:function(){var t;return 1*(null===(t=this.homeData.mdex_info)||void 0===t?void 0:t.market)||0},balance:function(){var t=this.$store.state.balance;return null!=t?t:0},boardRoomData:function(){var t,e;if(this.currentChainBoardRoomData)return null!==(t=null===(e=Object(r["a"])(this.currentChainBoardRoomData.allData).sort((function(t,e){return e.pool_apy-t.pool_apy})))||void 0===e?void 0:e.slice(0,4))&&void 0!==t?t:[]},formatCountdown:function(){return Object(o["e"])(this.countdown)},formatCountdownDay:function(){return Object(o["f"])(this.countdown)},apylist:function(){return this.$store.state.liquidity.apylist},newpool:function(){var t;return null!==(t=this.$store.state.activePool.apylist)&&void 0!==t?t:{}},airdropList:function(){var t=this,e=Object.keys(this.apylist),a={};if(e.forEach((function(e){a[e]=Object.assign({type:"liquidity"},t.apylist[e])})),56==this.chainId){var s=Object.keys(this.newpool);s.forEach((function(e){a[e]=Object.assign({type:"minpool"},t.newpool[e])}))}var i=[];for(var n in a)i.push(Object.assign({pid:n},a[n]));return i.sort((function(t,e){return e.pool_apy-t.pool_apy})),i.splice(0,4)},navStatus:function(){return this.$store.state.navStatus}},created:function(){},beforeCreate:function(){var t=this;z=setInterval((function(){t.$store.dispatch("getBalance")}),9e3)}},"destroyed",(function(){window.removeEventListener("scroll",this.menu)})),W=K,G=(a("eacf"),Object(h["a"])(W,s,i,!1,null,"1e3aa26b",null));e["default"]=G.exports}}]);