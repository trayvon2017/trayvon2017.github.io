webpackJsonp([1],{"/6jL":function(t,e){},"7y+s":function(t,e){},"8Ov7":function(t,e){},FdHr:function(t,e){},"HcL/":function(t,e){},IQwm:function(t,e){},LDUM:function(t,e){},LarV:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={};s.d(n,"singer",function(){return mt});s("j1ja");var i=s("/5sW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-header"},[e("span",{staticClass:"icon"}),this._v(" "),e("h1",{staticClass:"title"},[this._v(this._s(this.title))])])},staticRenderFns:[]};var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-container"},[e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/recommend"}},[e("span",{staticClass:"name"},[this._v("推荐")])]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/singers"}},[e("span",{staticClass:"name"},[this._v("歌手")])]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/rank"}},[e("span",{staticClass:"name"},[this._v("排行")])]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/search"}},[e("span",{staticClass:"name"},[this._v("搜索")])])],1)},staticRenderFns:[]};var o={name:"App",components:{MHeader:s("VU/8")({name:"MHeader",data:function(){return{title:"F-Music"}}},r,!1,function(t){s("7y+s")},"data-v-5d6de4e9",null).exports,Tab:s("VU/8")({name:"Tab"},a,!1,function(t){s("xPCY")},"data-v-f837f562",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app"},[e("m-header"),this._v(" "),e("tab"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var l=s("VU/8")(o,c,!1,function(t){s("LDUM")},"data-v-39430e13",null).exports,u=s("/ocq"),h=s("c/Tr"),d=s.n(h),f=s("cVr7"),m=s("Zcze");function g(t,e){if(!function(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)}(t,e)){var s=t.className.split(" ");1===s.length&&""===s[0]?s[0]=e:s.push(e),t.className=s.join(" ")}}f.a.use(m.a);var p={name:"Slider",data:function(){return{currentPageIndex:0,slideItems:null,slide:null}},props:{loop:{type:Boolean,default:!0},interval:{type:Number,default:3e3},autoplay:{type:Boolean,default:!0}},mounted:function(){this._initSliderWidth(),this._initScroll()},methods:{_initSliderWidth:function(){var t=this.$refs.sliderWrapper.clientWidth,e=this.$refs.sliderGroup,s=d()(e.children);e.style.width=s.length*t+"px",s.forEach(function(e){g(e,"slider-item"),e.style.width=t+"px"}),this.slideItems=s},_initScroll:function(){var t=this;this.slide=new f.a(this.$refs.sliderWrapper,{scrollX:!0,scrollY:!1,slide:{threshold:100,loop:this.loop,interval:this.interval,autoplay:this.autoplay},click:!0,momentum:!1,bounce:!1,stopPropagation:!0}),this.slide.on("slideWillChange",function(e){t.currentPageIndex=e.pageX})},_goToPage:function(t){this.slide.goToPage(t,0)}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"sliderWrapper",staticClass:"slider-wrapper"},[s("div",{ref:"sliderGroup",staticClass:"slider-group"},[t._t("default")],2),t._v(" "),t.slideItems&&t.slideItems.length?s("div",{staticClass:"dots"},t._l(t.slideItems,function(e,n){return s("span",{key:n,staticClass:"dot",class:{active:n===t.currentPageIndex},on:{click:function(e){return t._goToPage(n)}}})}),0):t._e()])},staticRenderFns:[]};var _=s("VU/8")(p,v,!1,function(t){s("/6jL")},"data-v-21637a2c",null).exports,x={name:"scroll",data:function(){return{bs:null}},props:{dataList:{type:Array,default:null}},mounted:function(){var t=this;setTimeout(function(){t.bs=new f.a(t.$refs.scroll,{scrollX:!1,scrollY:!0,probeType:3,useTransition:!1}),t.bs.on("scroll",function(e){t.$emit("scroll",e.y)})},20)},watch:{dataList:function(){var t=this;this.bs&&setTimeout(function(){t.bs.refresh()},20)}},components:{},methods:{scrollTo:function(t){this.bs.scrollTo(0,t,400)},scrollToElement:function(t){this.bs.scrollToElement(t)},refresh:function(){this.bs&&this.bs.refresh()}}},C={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"scroll",staticClass:"scroll-wrapper"},[this._t("default")],2)},staticRenderFns:[]};var y=s("VU/8")(x,C,!1,function(t){s("mTCS")},"data-v-ac11a384",null).exports,b=s("//Fk"),L=s.n(b),I=s("mtWM"),T=s.n(I);function S(t){return new L.a(function(e,s){T.a.get(t).then(function(t){e(t.data)}).catch(function(t){s(t)})})}var k={name:"Recommend",data:function(){return{bannerList:null,recommendList:null,title:"Recommend",dataList:[]}},components:{Slider:_,Scroll:y},created:function(){this._getBanner(),this._getRecommendList()},mounted:function(){},methods:{onBannerOnloaded:function(){this.$refs.scroll.refresh()},_getBanner:function(){var t=this;S("/static/data/banner.json").then(function(e){0===e.code&&(t.bannerList=e.data.slider,t.dataList.push(t.bannerList))})},_getRecommendList:function(){var t=this;S("/static/data/recommend.json").then(function(e){0===e.code&&(t.recommendList=e.data.list,t.dataList.push(t.recommendList))})}}},$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"recommend"},[s("scroll",{ref:"scroll",attrs:{dataList:t.dataList}},[s("div",{staticClass:"recommend-container"},[t.bannerList&&t.bannerList.length?s("slider",t._l(t.bannerList,function(e){return s("div",{key:e.id},[s("a",{attrs:{href:e.linkUrl}},[s("img",{attrs:{src:e.picUrl,alt:""},on:{load:t.onBannerOnloaded}})])])}),0):t._e(),t._v(" "),s("div",{staticClass:"recommend-disc"},[s("h1",[t._v("热门歌单推荐")]),t._v(" "),t.recommendList&&t.recommendList.length?s("div",{staticClass:"disc-list"},t._l(t.recommendList,function(e){return s("div",{key:e.dissid,staticClass:"disc-item"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgurl,expression:"item.imgurl"}],staticClass:"disc-img",attrs:{alt:""}}),t._v(" "),s("div",{staticClass:"disc-info"},[s("h4",{staticClass:"disc-name"},[t._v(t._s(e.dissname))]),t._v(" "),s("p",{staticClass:"disc-desc"},[t._v(t._s(e.creator.name))])])])}),0):t._e()])],1)])],1)},staticRenderFns:[]};var w=s("VU/8")(k,$,!1,function(t){s("IQwm")},"data-v-6aba223f",null).exports,R={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"search-container"},[this._v("search")])},staticRenderFns:[]};var P=s("VU/8")({name:"Search",data:function(){return{}},components:{}},R,!1,function(t){s("aSM9")},"data-v-5b123fec",null).exports,A={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"rank-container"},[this._v("rank")])},staticRenderFns:[]};var M=s("VU/8")({name:"Rank",data:function(){return{}},components:{}},A,!1,function(t){s("LarV")},"data-v-89bdfe8c",null).exports,E=s("Dd8w"),F=s.n(E),U=s("woOf"),H=s.n(U),j=s("hU7x"),Y=s.n(j),V=s("M4fF"),q=s.n(V);function N(t){var e="";for(var s in t)q.a.isNil(t[s])||(e+="&"+s+"="+encodeURIComponent(t[s]));return e=e.substring(1)}function O(t,e,s){return new L.a(function(n,i){Y()(function(t,e){return t+=t.lastIndexOf("?")===t.length-1?N(e):"?"+N(e)}(t,e),s,function(t,e){t?i(t):n(e)})})}var W={g_tk:1928093487,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},z={param:"jsonpCallback",prefix:"",name:"jp0"};var D=s("NYxO"),G=s("Zrlr"),B=s.n(G),X=function t(e,s){B()(this,t),this.id=e,this.name=s,this.avatar="https://y.gtimg.cn/music/photo_new/T001R300x300M000"+e+".jpg?max_age=2592000"},Z={name:"",data:function(){return{touch:{},currentIndex:0}},props:{groupList:{type:Array,required:!0,default:function(){return[]}}},computed:{anchorList:function(){return this.groupList.map(function(t){return t.name.substring(0,1)})},fixedTitle:function(){return this.anchorList[this.currentIndex]}},created:function(){this.heightArray=[]},mounted:function(){var t=this;setTimeout(function(){var e=0;t.$refs.group.forEach(function(s,n,i){n>0&&(e+=i[n-1].clientHeight),t.heightArray.push(e)})},20)},watch:{touch:{anchorIndex:function(t){(t||0===t)&&this._scrollToIndex(t)}}},methods:{onItemClick:function(t){this.$emit("itemClick",t)},scroll:function(t){var e=this;return t>=0?(this.$refs.fixedTitleRef.style.display="none",void(this.currentIndex=0)):(t=Math.abs(t))>=this.heightArray[this.heightArray.length-1]?(this.$refs.fixedTitleRef.style.display="block",this.$refs.fixedTitleRef.style.transform="translate3d(0,0,0)",void(this.currentIndex=this.heightArray.length-1)):(this.$refs.fixedTitleRef.style.display="block",void this.heightArray.some(function(s,n,i){if(t>=s&&t<i[n+1])return i[n+1]-t<=30?e.$refs.fixedTitleRef.style.transform="translate3d(0, -"+(t-(i[n+1]-30))+"px, 1px)":e.$refs.fixedTitleRef.style.transform="translate3d(0,0,0)",e.currentIndex=n,!0}))},onAnchorTouchStart:function(t){var e,s=t.target;this.touch.startAnchorIndex=(e="index",+s.dataset[e]),this.touch.startAnchorIndex||0===this.touch.startAnchorIndex?(this.touch.pageY1=t.touches[0].pageY,this.touch.anchorIndex=this.touch.startAnchorIndex,this._scrollToIndex(this.touch.anchorIndex)):this.touch.pageY1=void 0},onAnchorTouchMove:function(t){this.touch.pageY1&&(this.touch.pageY2=t.touches[0].pageY,this.touch.anchorIndex=this.touch.startAnchorIndex+Math.floor((this.touch.pageY2-this.touch.pageY1)/18),this.touch.anchorIndex<0?this.touch.anchorIndex=0:this.touch.anchorIndex>this.anchorList.length-1&&(this.touch.anchorIndex=this.anchorList.length-1),this._scrollToIndex(this.touch.anchorIndex))},_scrollToIndex:function(t){this.$refs.scroll.scrollToElement(this.$refs.group[t])}},components:{Scroll:y}},Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-view"},[s("scroll",{ref:"scroll",attrs:{dataList:t.groupList},on:{scroll:t.scroll}},[s("div",{staticClass:"singer-group-list"},t._l(t.groupList,function(e){return s("div",{key:e.name,ref:"group",refInFor:!0,staticClass:"singer-group"},[s("h2",{staticClass:"group-title"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"singer-list"},t._l(e.list,function(e){return s("div",{key:e.id,staticClass:"singer-item",on:{click:function(s){return t.onItemClick(e)}}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"singer.avatar"}],staticClass:"avatar",attrs:{width:"50",height:"50",alt:""}}),t._v(" "),s("span",{staticClass:"singer-name"},[t._v(t._s(e.name))])])}),0)])}),0),t._v(" "),s("div",{staticClass:"anchor-list",on:{touchstart:t.onAnchorTouchStart,touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.onAnchorTouchMove(e)}}},t._l(t.anchorList,function(e,n){return s("div",{key:n,staticClass:"anchor-item",class:{active:t.currentIndex===n},attrs:{"data-index":n}},[t._v("\n        "+t._s(e)+"\n      ")])}),0),t._v(" "),s("h2",{ref:"fixedTitleRef",staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle))])])],1)},staticRenderFns:[]};var J={name:"Singers",components:{Scroll:y,Listview:s("VU/8")(Z,Q,!1,function(t){s("FdHr")},"data-v-7110d74b",null).exports},data:function(){return{singerGroupList:[]}},created:function(){this.touch={},this._getSingers()},methods:F()({goSingerDetail:function(t){this.setSinger(t),this.$router.push("/singers/"+t.id)},_getSingers:function(){var t=this;O("https://c.y.qq.com/v8/fcg-bin/v8.fcg",H()({},W,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq"}),z).then(function(e){0===e.code&&(t.singerGroupList=t._formatsingerGroupList(e.data.list))})},_formatsingerGroupList:function(t){var e={hot:{name:"热",list:[]}};t.forEach(function(t,s){var n=new X(t.Fsinger_mid,t.Fsinger_name);s<10&&e.hot.list.push(n);var i=t.Findex;e.hasOwnProperty(i)||(e[i]={name:i,list:[]}),e[i].list.push(n)});var s=[],n=[];for(var i in e)"hot"===i?s.push(e[i]):/[a-zA-Z]/.test(i)&&n.push(e[i]);return s.concat(n.sort(function(t,e){return t.name.charCodeAt(0)-e.name.charCodeAt(0)}))}},Object(D.c)({setSinger:"SET_SINGER"}))},K={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"singers-container"},[this.singerGroupList.length?e("listview",{attrs:{groupList:this.singerGroupList},on:{itemClick:this.goSingerDetail}}):this._e(),this._v(" "),e("transition",{attrs:{name:"slide"}},[e("router-view")],1)],1)},staticRenderFns:[]};var tt=s("VU/8")(J,K,!1,function(t){s("8Ov7")},"data-v-1cabf3c7",null).exports;function et(t){return{id:t.songid,mid:t.songmid,name:t.songname,singer:(e=t.singer,e&&Array.isArray(e)?e.map(function(t){return t.name}).join("/"):""),album:t.albumname,duration:t.interval,image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+t.albummid+".jpg?max_age=2592000",url:"http://ws.stream.qqmusic.qq.com/"+t.songid+".m4a?fromtag=46"};var e}var st={name:"MusicList",data:function(){return{}},props:{songList:{type:Array,default:function(){return[]}}},components:{}},nt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"music-list"},t._l(t.songList,function(e){return s("li",{key:e.id,staticClass:"music-item"},[s("h2",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"desc"},[s("span",{staticClass:"singer-name"},[t._v(t._s(e.singer))]),t._v(" "),s("span",{staticClass:"album"},[t._v(t._s(e.album))])])])}),0)},staticRenderFns:[]};var it={name:"SingerDetail",data:function(){return{songList:[],scrollY:0}},created:function(){this._initSinger()},mounted:function(){this.singerPosterHeight=this.$refs.singerPoster.clientHeight,this.$refs.songListWrapper.style.top=this.singerPosterHeight+"px",this.minTransalteY=40-this.singerPosterHeight},components:{Scroll:y,MusicList:s("VU/8")(st,nt,!1,function(t){s("Po7B")},"data-v-0cdffbff",null).exports},methods:{onScroll:function(t){this.scrollY=t},goSinger:function(){this.$router.push("/singers")},_initSinger:function(){this.singer&&this.singer.id||this.goSinger(),this.bgStyle={backgroundImage:"url("+this.singer.avatar+")"},this._getSingerDetail(this.singer.id)},_getSingerDetail:function(t){var e,s=this;(e=t,O("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",H()({},W,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:80,songstatus:1,singermid:e}),H()({},z,{name:"jp2"}))).then(function(t){0===t.code&&(s.songList=t.data.list.map(function(t){return et(t.musicData)}))})}},watch:{scrollY:function(t){var e=0,s=0,n="70%",i=0,r=0,a=Math.abs(t/this.singerPosterHeight);t<=0?(r=Math.min(20,20*a),i=Math.min(Math.abs(t),this.singerPosterHeight-40),this.$refs.singerPoster.style.transform="unset",this.singerPosterHeight-40<=Math.min(Math.abs(t))&&(e=10,n=0,s=40,i=0)):this.$refs.singerPoster.style.transform="scale3d("+(1+a)+","+(1+a)+",1)",this.$refs.mask.style.height=i+"px",this.$refs.singerPoster.style.zIndex=e,this.$refs.singerPoster.style.height=s+"px",this.$refs.singerPoster.style.paddingTop=n,this.$refs.filter.style["backdrop-filter"]="blur("+r+"px)"}},computed:F()({},Object(D.b)(["singer"]))},rt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"singer-detail"},[s("div",{staticClass:"icon-container",on:{click:t.goSinger}},[s("i",{staticClass:"icon-back"})]),t._v(" "),s("h2",{staticClass:"title"},[t._v(t._s(t.singer.name))]),t._v(" "),s("div",{ref:"singerPoster",staticClass:"singer-poster",style:t.bgStyle},[s("div",{ref:"mask",staticClass:"mask"}),t._v(" "),s("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),s("div",{ref:"songListWrapper",staticClass:"song-list-wrap"},[s("scroll",{attrs:{dataList:t.songList},on:{scroll:t.onScroll}},[s("music-list",{attrs:{songList:t.songList}})],1)],1)])},staticRenderFns:[]};var at=s("VU/8")(it,rt,!1,function(t){s("HcL/")},"data-v-ff226582",null).exports;i.a.use(u.a);var ot=new u.a({linkActiveClass:"active",routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",component:w},{path:"/search",component:P},{path:"/rank",component:M},{path:"/singers",component:tt,children:[{path:":id",component:at}]}]}),ct=s("v5o6"),lt=s.n(ct),ut=s("AXdl"),ht=(s("zO3H"),s("sax8"),{singer:{}}),dt=s("bOdI"),ft=s.n(dt)()({},"SET_SINGER",function(t,e){t.singer=e}),mt=function(t){return t.singer};i.a.use(D.a);var gt=new D.a.Store({state:ht,mutations:ft,getters:n,srict:!1,plugins:[]});i.a.use(ut.a,{preLoad:1.3,error:"static/images/sys/err.png",loading:"static/images/sys/loading.gif",attempt:1}),lt.a.attach(document.body),i.a.config.productionTip=!1,new i.a({el:"#app",router:ot,store:gt,render:function(t){return t(l)}})},Po7B:function(t,e){},aSM9:function(t,e){},mTCS:function(t,e){},xPCY:function(t,e){},zO3H:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9208292219e22fa0ae3f.js.map