webpackJsonp([0],{"/TYz":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("CuU9"),n=i("iA8U"),r=!1;var o=function(t){r||i("7KKE")},a=i("VU/8")(s.a,n.a,!1,o,null,null);a.options.__file="pages\\index.vue",e.default=a.exports},"30Ze":function(t,e,i){t.exports=i.p+"fonts/Rois-Medium.f930acd.woff"},"4tjm":function(t,e,i){"use strict";var s=function(){var t=this.$createElement;this._self._c;return this._m(0)};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{attrs:{id:"glcanvas"}})])}]};e.a=n},"7KKE":function(t,e,i){var s=i("TQ0d");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("3d0083e8",s,!1,{sourceMap:!1})},CuU9:function(t,e,i){"use strict";var s=i("mvHQ"),n=i.n(s),r=i("J8U/"),o=i("ExFo");e.a={components:{Cables:r.a,Project:o.a},data:function(){return{elementsPosition:{},elementsScale:{},elements_temp:[],Image1:"assets/2.png",Image2:"assets/1.png",Image3:"assets/2.png"}},methods:{getPosition:function(){for(var t=0;t<this.elements_temp.length;t++){var e=this.elements_temp[t].getBoundingClientRect();this.$set(this.elementsPosition[t],"left",e.left),this.$set(this.elementsPosition[t],"top",e.top)}},getRotation:function(t){var e=window.getComputedStyle(t,null),i=(e.getPropertyValue("-webkit-transform")||e.getPropertyValue("-moz-transform")||e.getPropertyValue("-ms-transform")||e.getPropertyValue("-o-transform")||e.getPropertyValue("transform")||"fail...").split("(")[1],s=(i=(i=i.split(")")[0]).split(","))[0],n=i[1],r=(i[2],i[3],n/Math.sqrt(s*s+n*n));return Math.round(Math.asin(r)*(180/Math.PI))},sendPosition:function(){var t=JSON.parse(n()(this.$data.elementsPosition)),e=CABLES.patch.getVar("data");e&&e.setValue(t)},sendScale:function(){var t=JSON.parse(n()(this.$data.elementsScale)),e=CABLES.patch.getVar("scaleData");e&&e.setValue(t)},updatePosition:function(){var t=this;setInterval(function(){t.getPosition(),t.sendPosition()},100)}},beforeMount:function(){window.addEventListener("scroll",this.updatePosition)},beforeDestroy:function(){window.removeEventListener("scroll",this.updatePosition)},mounted:function(){CABLES.patch=new CABLES.Patch({patchFile:"js/DOM_test.json",prefixAssetPath:"",glCanvasId:"glcanvas",glCanvasResizeToWindow:!0,onError:function(t){alert(t)},onFinishedLoading:this.sendScale});this.elements_temp=[].slice.call(this.$el.querySelectorAll(".element"));for(var t=0;t<this.elements_temp.length;t++){var e=this.elements_temp[t].getBoundingClientRect();this.$set(this.elementsPosition,t,{}),this.$set(this.elementsScale,t,{}),this.$set(this.elementsScale[t],"rotation",this.getRotation(this.elements_temp[t])),this.$set(this.elementsScale[t],"height",e.height),this.$set(this.elementsScale[t],"width",e.width)}}}},ExFo:function(t,e,i){"use strict";var s=i("MLN+"),n=i("Jazc"),r=!1;var o=function(t){r||i("wj6B")},a=i("VU/8")(s.a,n.a,!1,o,null,null);a.options.__file="components\\Project.vue",e.a=a.exports},FNrx:function(t,e,i){t.exports=i.p+"fonts/Rois-Medium.3e41d0b.ttf"},"J8U/":function(t,e,i){"use strict";var s=i("Wvml"),n=i("4tjm"),r=!1;var o=function(t){r||i("Kelu")},a=i("VU/8")(s.a,n.a,!1,o,"data-v-3f6f49de",null);a.options.__file="components\\Cables.vue",e.a=a.exports},Jazc:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project",class:t.normalizeTitle},[i("div",{staticClass:"element project-title-wrapper",style:t.transpose},[i("p",{staticClass:"project-tags"},[t._v(" "+t._s(t.tags))]),i("a",{attrs:{target:"_blank",href:t.link},on:{mouseenter:t.mouseEnter,mouseleave:t.mouseLeave}},[i("h1",{staticClass:"text project-title"},[t._v(t._s(t.title))])]),i("div",{staticClass:"project-description"},[i("div",{staticClass:"project-description-wrapper"},[t._v("\r\n        "+t._s(t.description)+"\r\n      ")])])])])};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},Kelu:function(t,e,i){var s=i("OkWk");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("62daab6f",s,!1,{sourceMap:!1})},"MLN+":function(t,e,i){"use strict";e.a={data:function(){return{hovered:!1,descriptionEl:"",tagsEl:"",projectEl:"",centerX:"",width:"",width2:"",isMobile:!1}},props:["title","description","link","tags","rotateValue","translateValue"],methods:{mouseEnter:function(){this.isMobile||(this.hovered=!0,this.descriptionEl.style.opacity=1,this.tagsEl.style.opacity=1,this.descriptionEl.style.transform="translateY(-15px) translateX("+this.width+"px)",this.tagsEl.style.transform="translateY(15px) translateX("+this.width2+"px)")},mouseLeave:function(){this.isMobile||(this.hovered=!1,this.descriptionEl.style.opacity=0,this.tagsEl.style.opacity=0,this.descriptionEl.style.transform="translateY(15px) translateX("+this.width+"px)",this.tagsEl.style.transform="translateY(-15px) translateX("+this.width2+"px)")},mobileCheck:function(){document.documentElement.clientWidth<768?this.isMobile=!0:this.isMobile=!1},calcWidth:function(){this.isMobile||(this.centerX=this.projectEl.offsetWidth/2,this.width=this.projectEl.offsetWidth-(this.descriptionEl.offsetLeft+this.descriptionEl.offsetWidth/2)-this.projectEl.offsetWidth/2,this.descriptionEl.style.transform="translateX("+this.width+"px)",this.width2=this.projectEl.offsetWidth-(this.tagsEl.offsetLeft+this.tagsEl.offsetWidth/2)-this.projectEl.offsetWidth/2,this.tagsEl.style.transform="translateX("+this.width2+"px)")}},computed:{transpose:function(){return this.isMobile?{transform:"translateX(0)"}:{transform:"translateX("+this.translateValue+"vw) rotate("+this.rotateValue+"deg)"}},rotate:function(){return{transform:"rotate("+this.rotateValue+"deg)"}},normalizeTitle:function(){return this.title.toLowerCase().replace(/\s+/g,"-")}},beforeMount:function(){window.addEventListener("resize",this.calcWidth),window.addEventListener("resize",this.mobileCheck)},beforeDestroy:function(){window.removeEventListener("resize",this.calcWidth),window.removeEventListener("resize",this.mobileCheck)},mounted:function(){this.$nextTick(function(){this.mobileCheck(),this.projectEl=this.$el.querySelector(".project-title-wrapper"),this.descriptionEl=this.$el.querySelector(".project-description"),this.tagsEl=this.$el.querySelector(".project-tags"),this.calcWidth()})}}},OkWk:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"#glcanvas[data-v-3f6f49de]{position:fixed;top:0;left:0;z-index:0;width:100%;height:100%;padding:3em}",""])},TQ0d:function(t,e,i){var s=i("kxFB");(t.exports=i("FZ+f")(!1)).push([t.i,'#performance{display:none}.container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;padding:15em 3em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;-ms-flex-flow:wrap;flex-flow:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.element{display:block;background:transparent;z-index:1}.text{padding:.1em}#debug{position:fixed!important;top:0;left:0}#performance{color:#fff}.column{float:left;width:33.33%}.row:after{content:"";display:table;clear:both}.more-at{z-index:2}.more-at a{color:#000;font-size:inherit;padding:0;margin:0;text-shadow:none}.header{z-index:9999;position:fixed;top:0;margin:0;left:0;width:100vw;padding:1em 3em;text-align:center}.rotating{-webkit-animation:rotating 3s linear infinite;animation:rotating 3s linear infinite}@keyframes rotating{0%{transform:rotate(0deg);-o-transform:rotate(0deg);-ms-transform:rotate(0deg);-moz-transform:rotate(0deg);-webkit-transform:rotate(0deg)}to{transform:rotate(1turn);-o-transform:rotate(1turn);-ms-transform:rotate(1turn);-moz-transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@-webkit-keyframes rotating{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg)}to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@font-face{font-family:roismedium;src:url('+s(i("dj3C"))+'#roismedium) format("svg");src:url('+s(i("XU0e"))+'?#iefix) format("embedded-opentype"),url('+s(i("lxIw"))+') format("woff2"),url('+s(i("30Ze"))+') format("woff"),url('+s(i("FNrx"))+') format("truetype"),url('+s(i("XU0e"))+");font-weight:400;font-style:normal}",""])},UFBk:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"a{text-decoration:none;-webkit-font-feature-settings:1;font-feature-settings:1;-webkit-font-kerning:1;font-kerning:1;font-size:6vh;line-height:1;-webkit-backface-visibility:hidden;-webkit-perspective:1000;padding:.5em;text-transform:uppercase;letter-spacing:.05em;text-shadow:0 0 0 #fff}a,a:hover{color:#fff;-webkit-transition:text-shadow .3s ease-in-out;transition:text-shadow .3s ease-in-out}a:hover{text-shadow:0 0 5px #fff,0 0 10px #fff}.project{z-index:1;margin:3em auto}.project-title{font-size:6vh;line-height:1}.project-title-wrapper{padding:2em}.project-description,.project-tags{-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000;perspective:1000;opacity:0;pointer-events:none;color:#fff;z-index:999;position:absolute;-webkit-transition:opacity .3s ease,-webkit-transform .3s cubic-bezier(.68,-.55,.265,1.55);transition:opacity .3s ease,-webkit-transform .3s cubic-bezier(.68,-.55,.265,1.55);transition:opacity .3s ease,transform .3s cubic-bezier(.68,-.55,.265,1.55);transition:opacity .3s ease,transform .3s cubic-bezier(.68,-.55,.265,1.55),-webkit-transform .3s cubic-bezier(.68,-.55,.265,1.55)}.project-description{min-width:200vw;background:#000;font-size:2vh;padding:2em}.project-description-wrapper{max-width:50vw;margin:0 auto}@media (max-width:768px){.project-tags{opacity:1!important;color:#fff;z-index:999;position:relative}.project-title{font-size:6vw;line-height:1}.project-description{min-width:100vw;z-index:999;background:#000;opacity:1!important;font-size:3vw;line-height:1.5;padding:2em;position:relative;text-align:left}.project-title-wrapper{padding:2em 0}body{border:none;background:grey}.container{padding:5em 0}.header{background:#fff;font-size:2vw;padding:1em 0}canvas{padding:0!important}body:after,body:before{height:0!important}.project-description-wrapper{max-width:90%}}",""])},Wvml:function(t,e,i){"use strict";e.a={data:function(){return{}}}},XU0e:function(t,e,i){t.exports=i.p+"fonts/Rois-Medium.920f147.eot"},dj3C:function(t,e,i){t.exports=i.p+"img/Rois-Medium.39cd862.svg"},iA8U:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"border"},[t._m(0),i("section",{staticClass:"container"},[i("cables"),i("project",{attrs:{title:"Progressbar",description:"In collaboration with Sam Rolfes I developed the experimental presentation of the new narrative for the advertising of Amsterdam hottest party.",tags:"WebGl, Mobile, Website",link:"http://www.progressbar.club",rotateValue:19,translateValue:10}}),i("project",{attrs:{title:"Broke Boys",description:"Work in Progress of a WebGL teaser page for Broke Boys, a Hip Hop record label from Berlin.",tags:"WebGl, Experiment, Mobile, Website",link:"http://arturneufeld.com/kunden/brokeboys/",rotateValue:-21,translateValue:-12}}),i("project",{attrs:{title:"Memory Leak",link:"https://vimeo.com/183836735",description:"This short film is an experiment about the transformation of memories into our digital subconscious. I revitalized memory fragments of strangers, treated them as unique temporary sculptures as I found them in the depths of forgotten digital archives.",tags:"Video, 3D Scans, Found Footage, Experiment",rotateValue:-7,translateValue:14}}),i("project",{attrs:{title:"Stefan Kartchev",link:"http://stefankartchev.com/",description:"My first experments with WebGl started with this project, a multimedia portfolio for Belgian fashion designer Stefan Kartchev.",tags:"WebGl, Corporate, Website",rotateValue:13,translateValue:-15}}),i("project",{attrs:{title:"Drangsal",link:"http://www.drangs.al",description:"I Designed the Website for berlin based musician Drangsal.",tags:"WebGl, Corporate, Website",rotateValue:17,translateValue:17}}),i("project",{attrs:{title:"BRB.exe",link:"https://vimeo.com/119702167",description:"I developed an interactive virtual reality experience with the Oculus Rift DK1 back in 2014. Because we were one of the first to implement some kind of body reconstruction with sensors, we were invited to Lisbon where we presented our technique and approach at the International Conference on Advances in Computer-Human Interactions.",tags:"Video, Virtual Reality, Installation",rotateValue:-9,translateValue:-4}}),i("project",{attrs:{title:"Experiment I",link:"http://arturneufeld.com/kunden/biolife2/",description:"(Work In Progress) Rendered looped 360° footage in After Effects, mapped it on an inverted sphere.",tags:"WebGl, Experiment, Work In Progress",rotateValue:-13,translateValue:1}}),i("project",{attrs:{title:"var self = this;",link:"#",description:"What you are viewing is my newest experiment, the challenge was to hook the DOM Element's position data to the WebGL context, so they can interact with the post processing image effects in realtime.",tags:"WebGl, Experiment",rotateValue:-4,translateValue:-9}}),i("div",{staticStyle:{margin:"10em 0"}}),i("div",{staticClass:"element ",staticStyle:{transform:"rotate(-90deg)",padding:"2em"}},[i("img",{staticClass:" rotating text",attrs:{src:t.Image1}})]),i("div",{staticClass:"more-at"},[i("div",{staticClass:"text"},[t._v("more at "),i("a",{attrs:{href:"http://www.arturneufeld.com",target:"_blank"},on:{mouseout:function(e){t.Image1=t.Image3},mouseenter:function(e){t.Image1=t.Image2}}},[t._v("arturneufeld.com")])])]),i("div",{staticStyle:{margin:"10em 0"}})],1)])};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("div",{staticClass:"row"},[e("div",{staticClass:"column"},[this._v("ARTUR NEUFELD")]),e("div",{staticClass:"column"},[e("br")]),e("div",{staticClass:"column"},[this._v("APPLICATION NR. 13814")])])])}]};e.a=n},kxFB:function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},lxIw:function(t,e,i){t.exports=i.p+"fonts/Rois-Medium.c1f4932.woff2"},wj6B:function(t,e,i){var s=i("UFBk");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("6df71e90",s,!1,{sourceMap:!1})}});