/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fancyapps/ui/dist/fancybox.css":
/*!******************************************************!*\
  !*** ./node_modules/@fancyapps/ui/dist/fancybox.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--7-1!../../../postcss-loader/src??ref--7-2!./fancybox.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@fancyapps/ui/dist/fancybox.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@fancyapps/ui/dist/fancybox.esm.js ***!
  \*********************************************************/
/*! exports provided: Carousel, Fancybox, Panzoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fancybox", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panzoom", function() { return d; });
// @fancyapps/ui/Fancybox v4.0.5
const t=t=>"object"==typeof t&&null!==t&&t.constructor===Object&&"[object Object]"===Object.prototype.toString.call(t),e=(...i)=>{let s=!1;"boolean"==typeof i[0]&&(s=i.shift());let o=i[0];if(!o||"object"!=typeof o)throw new Error("extendee must be an object");const n=i.slice(1),a=n.length;for(let i=0;i<a;i++){const a=n[i];for(let i in a)if(a.hasOwnProperty(i)){const n=a[i];if(s&&(Array.isArray(n)||t(n))){const t=Array.isArray(n)?[]:{};o[i]=e(!0,o.hasOwnProperty(i)?o[i]:t,n)}else o[i]=n}}return o},i=(t,e=1e4)=>(t=parseFloat(t)||0,Math.round((t+Number.EPSILON)*e)/e),s="undefined"!=typeof window&&window.ResizeObserver||class{constructor(t){this.observables=[],this.boundCheck=this.check.bind(this),this.boundCheck(),this.callback=t}observe(t){if(this.observables.some((e=>e.el===t)))return;const e={el:t,size:{height:t.clientHeight,width:t.clientWidth}};this.observables.push(e)}unobserve(t){this.observables=this.observables.filter((e=>e.el!==t))}disconnect(){this.observables=[]}check(){const t=this.observables.filter((t=>{const e=t.el.clientHeight,i=t.el.clientWidth;if(t.size.height!==e||t.size.width!==i)return t.size.height=e,t.size.width=i,!0})).map((t=>t.el));t.length>0&&this.callback(t),window.requestAnimationFrame(this.boundCheck)}};class o{constructor(t){this.id=-1,this.id=t.pointerId||t.identifier||-1,this.pageX=t.pageX,this.pageY=t.pageY,this.clientX=t.clientX,this.clientY=t.clientY,this.nativePointer=t}}function n(t,e){return e?Math.sqrt((e.clientX-t.clientX)**2+(e.clientY-t.clientY)**2):0}function a(t,e){return e?{clientX:(t.clientX+e.clientX)/2,clientY:(t.clientY+e.clientY)/2}:t}class r{constructor(t,{start:e=(()=>!0),move:i=(()=>{}),end:s=(()=>{})}={}){this.element=t,this.startPointers=[],this.currentPointers=[],this.startCallback=e,this.moveCallback=i,this.endCallback=s,this.onStart=t=>{if(t.button&&0!==t.button)return;const e=new o(t);if(!1===this.startCallback(e,t))return!1;t.preventDefault(),(()=>{const t=window.getSelection?window.getSelection():document.selection;t&&t.rangeCount&&t.getRangeAt(0).getClientRects().length&&(t.removeAllRanges?t.removeAllRanges():t.empty&&t.empty())})(),this.currentPointers.push(e),this.startPointers.push(e);(t.target&&"setPointerCapture"in t.target?t.target:this.element).setPointerCapture(t.pointerId),this.element.addEventListener("pointermove",this.onMove),this.element.addEventListener("pointerup",this.onEnd),this.element.addEventListener("pointercancel",this.onEnd)},this.onMove=t=>{const e=this.currentPointers.slice(),i=[];for(const e of[new o(t)]){const t=this.currentPointers.findIndex((t=>t.id===e.id));t<0||(i.push(e),this.currentPointers[t]=e)}i.length&&this.moveCallback(e,this.currentPointers,t)},this.onEnd=t=>{const e=new o(t),i=this.currentPointers.findIndex((t=>t.id===e.id));if(-1===i)return!1;this.currentPointers.splice(i,1),this.startPointers.splice(i,1),this.endCallback(e,t),this.currentPointers.length||(this.element.removeEventListener("pointermove",this.onMove),this.element.removeEventListener("pointerup",this.onEnd),this.element.removeEventListener("pointercancel",this.onEnd))},this.element.addEventListener("pointerdown",this.onStart)}stop(){this.element.removeEventListener("pointerdown",this.onStart),this.element.removeEventListener("pointermove",this.onMove),this.element.removeEventListener("pointerup",this.onEnd),this.element.removeEventListener("pointercancel",this.onEnd)}}const h=function(t){return!!(t&&"object"==typeof t&&t instanceof Element&&t!==document.body)&&(function(t){const e=getComputedStyle(t)["overflow-y"],i=getComputedStyle(t)["overflow-x"],s=("scroll"===e||"auto"===e)&&Math.abs(t.scrollHeight-t.clientHeight)>1,o=("scroll"===i||"auto"===i)&&Math.abs(t.scrollWidth-t.clientWidth)>1;return s||o}(t)?t:h(t.parentNode))};class l{constructor(t={}){this.options=e(!0,{},t),this.plugins=[],this.events={};for(const t of["on","once"])for(const e of Object.entries(this.options[t]||{}))this[t](...e)}option(t,e,...i){t=String(t);let s=(o=t,n=this.options,o.split(".").reduce((function(t,e){return t&&t[e]}),n));var o,n;return"function"==typeof s&&(s=s.call(this,this,...i)),void 0===s?e:s}localize(t,e=[]){return String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g,((t,i,s)=>{let o=!1;if(o=s?this.option(`${i[0]+i.toLowerCase().substring(1)}.l10n.${s}`):this.option(`l10n.${i}`),!o)return i;for(let t=0;t<e.length;t++)o=o.split(e[t][0]).join(e[t][1]);return o}))}on(e,i){if(t(e)){for(const t of Object.entries(e))this.on(...t);return this}return String(e).split(" ").forEach((t=>{const e=this.events[t]=this.events[t]||[];-1==e.indexOf(i)&&e.push(i)})),this}once(e,i){if(t(e)){for(const t of Object.entries(e))this.once(...t);return this}return String(e).split(" ").forEach((t=>{const e=(...s)=>{this.off(t,e),i.call(this,this,...s)};e._=i,this.on(t,e)})),this}off(e,i){if(!t(e))return e.split(" ").forEach((t=>{const e=this.events[t];if(!e||!e.length)return this;let s=-1;for(let t=0,o=e.length;t<o;t++){const o=e[t];if(o&&(o===i||o._===i)){s=t;break}}-1!=s&&e.splice(s,1)})),this;for(const t of Object.entries(e))this.off(...t)}trigger(t,...e){for(const i of[...this.events[t]||[]].slice())if(i&&!1===i.call(this,this,...e))return!1;for(const i of[...this.events["*"]||[]].slice())if(i&&!1===i.call(this,t,this,...e))return!1;return!0}attachPlugins(t){const i={};for(const[s,o]of Object.entries(t||{}))!1===this.options[s]||this.plugins[s]||(this.options[s]=e({},o.defaults||{},this.options[s]),i[s]=new o(this));for(const[t,e]of Object.entries(i))e.attach(this);return this.plugins=Object.assign({},this.plugins,i),this}detachPlugins(){for(const t in this.plugins){let e;(e=this.plugins[t])&&"function"==typeof e.detach&&e.detach(this)}return this.plugins={},this}}const c={touch:!0,zoom:!0,pinchToZoom:!0,panOnlyZoomed:!1,lockAxis:!1,friction:.64,decelFriction:.88,zoomFriction:.74,bounceForce:.2,baseScale:1,minScale:1,maxScale:2,step:.5,textSelection:!1,click:"toggleZoom",wheel:"zoom",wheelFactor:42,wheelLimit:5,draggableClass:"is-draggable",draggingClass:"is-dragging",ratio:1};class d extends l{constructor(t,i={}){super(e(!0,{},c,i)),this.state="init",this.$container=t;for(const t of["onLoad","onWheel","onClick"])this[t]=this[t].bind(this);this.initLayout(),this.resetValues(),this.attachPlugins(d.Plugins),this.trigger("init"),this.updateMetrics(),this.attachEvents(),this.trigger("ready"),!1===this.option("centerOnStart")?this.state="ready":this.panTo({friction:0})}initLayout(){const t=this.$container;if(!(t instanceof HTMLElement))throw new Error("Panzoom: Container not found");const e=this.option("content")||t.querySelector(".panzoom__content");if(!e)throw new Error("Panzoom: Content not found");this.$content=e;let i=this.option("viewport")||t.querySelector(".panzoom__viewport");i||!1===this.option("wrapInner")||(i=document.createElement("div"),i.classList.add("panzoom__viewport"),i.append(...t.childNodes),t.appendChild(i)),this.$viewport=i||e.parentNode}resetValues(){this.updateRate=this.option("updateRate",/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?250:24),this.container={width:0,height:0},this.viewport={width:0,height:0},this.content={origHeight:0,origWidth:0,width:0,height:0,x:this.option("x",0),y:this.option("y",0),scale:this.option("baseScale")},this.transform={x:0,y:0,scale:1},this.resetDragPosition()}onLoad(t){this.updateMetrics(),this.panTo({scale:this.option("baseScale"),friction:0}),this.trigger("load",t)}onClick(t){if(t.defaultPrevented)return;if(this.option("textSelection")&&window.getSelection().toString().length)return void t.stopPropagation();const e=this.$content.getClientRects()[0];if("ready"!==this.state&&(this.dragPosition.midPoint||Math.abs(e.top-this.dragStart.rect.top)>1||Math.abs(e.left-this.dragStart.rect.left)>1))return t.preventDefault(),void t.stopPropagation();!1!==this.trigger("click",t)&&this.option("zoom")&&"toggleZoom"===this.option("click")&&(t.preventDefault(),t.stopPropagation(),this.zoomWithClick(t))}onWheel(t){!1!==this.trigger("wheel",t)&&this.option("zoom")&&this.option("wheel")&&this.zoomWithWheel(t)}zoomWithWheel(t){void 0===this.changedDelta&&(this.changedDelta=0);const e=Math.max(-1,Math.min(1,-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)),i=this.content.scale;let s=i*(100+e*this.option("wheelFactor"))/100;if(e<0&&Math.abs(i-this.option("minScale"))<.01||e>0&&Math.abs(i-this.option("maxScale"))<.01?(this.changedDelta+=Math.abs(e),s=i):(this.changedDelta=0,s=Math.max(Math.min(s,this.option("maxScale")),this.option("minScale"))),this.changedDelta>this.option("wheelLimit"))return;if(t.preventDefault(),s===i)return;const o=this.$content.getBoundingClientRect(),n=t.clientX-o.left,a=t.clientY-o.top;this.zoomTo(s,{x:n,y:a})}zoomWithClick(t){const e=this.$content.getClientRects()[0],i=t.clientX-e.left,s=t.clientY-e.top;this.toggleZoom({x:i,y:s})}attachEvents(){this.$content.addEventListener("load",this.onLoad),this.$container.addEventListener("wheel",this.onWheel,{passive:!1}),this.$container.addEventListener("click",this.onClick,{passive:!1}),this.initObserver();const t=new r(this.$container,{start:(e,i)=>{if(!this.option("touch"))return!1;if(!(this.velocity.scale<0)){if(!t.currentPointers.length){if(-1!==["BUTTON","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(i.target.nodeName))return!1;if(this.option("textSelection")&&((t,e,i)=>{const s=t.childNodes,o=document.createRange();for(let t=0;t<s.length;t++){const n=s[t];if(n.nodeType!==Node.TEXT_NODE)continue;o.selectNodeContents(n);const a=o.getBoundingClientRect();if(e>=a.left&&i>=a.top&&e<=a.right&&i<=a.bottom)return n}return!1})(i.target,i.clientX,i.clientY))return!1;if(h(i.target))return!1}return!1!==this.trigger("touchStart",i)&&(this.state="pointerdown",this.resetDragPosition(),this.dragPosition.midPoint=null,this.dragPosition.time=Date.now(),!0)}},move:(e,i,s)=>{if("pointerdown"!==this.state)return;if(0==this.trigger("touchMove",s))return void s.preventDefault();if(i.length<2&&1==this.option("panOnlyZoomed")&&this.content.width<=this.viewport.width&&this.content.height<=this.viewport.height&&this.transform.scale<=this.option("baseScale"))return;if(i.length>1&&(!this.option("zoom")||!1===this.option("pinchToZoom")))return;s.preventDefault(),s.stopPropagation();const o=a(e[0],e[1]),r=a(i[0],i[1]),h=r.clientX-o.clientX,l=r.clientY-o.clientY,c=n(e[0],e[1]),d=n(i[0],i[1]),u=c?d/c:1;this.dragOffset.x+=h,this.dragOffset.y+=l,this.dragOffset.scale*=u,this.dragOffset.time=Date.now()-this.dragPosition.time;const f=1===this.dragStart.scale&&this.option("lockAxis");if(f&&!this.lockAxis){if(Math.abs(this.dragOffset.x)<6&&Math.abs(this.dragOffset.y)<6)return;if("xy"===f){const t=Math.abs(180*Math.atan2(this.dragOffset.y,this.dragOffset.x)/Math.PI);this.lockAxis=t>45&&t<135?"y":"x"}else this.lockAxis=f}if(this.lockAxis&&(this.dragOffset["x"===this.lockAxis?"y":"x"]=0),this.$container.classList.add(this.option("draggingClass")),this.transform.scale===this.option("baseScale")&&"y"===this.lockAxis||(this.dragPosition.x=this.dragStart.x+this.dragOffset.x),this.transform.scale===this.option("baseScale")&&"x"===this.lockAxis||(this.dragPosition.y=this.dragStart.y+this.dragOffset.y),this.dragPosition.scale=this.dragStart.scale*this.dragOffset.scale,i.length>1){const e=a(t.startPointers[0],t.startPointers[1]),i=e.clientX-this.dragStart.rect.x,s=e.clientY-this.dragStart.rect.y,{deltaX:o,deltaY:n}=this.getZoomDelta(this.content.scale*this.dragOffset.scale,i,s);this.dragPosition.x-=o,this.dragPosition.y-=n,this.dragPosition.midPoint=r}else this.setDragResistance();this.transform={x:this.dragPosition.x,y:this.dragPosition.y,scale:this.dragPosition.scale},this.startAnimation()},end:(e,i)=>{if("pointerdown"!==this.state)return;if(this._dragOffset={...this.dragOffset},t.currentPointers.length)return void this.resetDragPosition();if(this.state="decel",this.friction=this.option("decelFriction"),this.recalculateTransform(),this.$container.classList.remove(this.option("draggingClass")),!1===this.trigger("touchEnd",i))return;if("decel"!==this.state)return;const s=this.option("minScale");if(this.transform.scale<s)return void this.zoomTo(s,{friction:.64});const o=this.option("maxScale");if(this.transform.scale-o>.01){const t=this.dragPosition.midPoint||e,i=this.$content.getClientRects()[0];this.zoomTo(o,{friction:.64,x:t.clientX-i.left,y:t.clientY-i.top})}else;}});this.pointerTracker=t}initObserver(){this.resizeObserver||(this.resizeObserver=new s((()=>{this.updateTimer||(this.updateTimer=setTimeout((()=>{const t=this.$container.getBoundingClientRect();t.width&&t.height?((Math.abs(t.width-this.container.width)>1||Math.abs(t.height-this.container.height)>1)&&(this.isAnimating()&&this.endAnimation(),this.updateMetrics(),this.panTo({x:this.content.x,y:this.content.y,scale:this.option("baseScale"),friction:0})),this.updateTimer=null):this.updateTimer=null}),this.updateRate))})),this.resizeObserver.observe(this.$container))}resetDragPosition(){this.lockAxis=null,this.friction=this.option("friction"),this.velocity={x:0,y:0,scale:0};const{x:t,y:e,scale:i}=this.content;this.dragStart={rect:this.$content.getBoundingClientRect(),x:t,y:e,scale:i},this.dragPosition={...this.dragPosition,x:t,y:e,scale:i},this.dragOffset={x:0,y:0,scale:1,time:0}}updateMetrics(t){!0!==t&&this.trigger("beforeUpdate");const e=this.$container,s=this.$content,o=this.$viewport,n=this.$content instanceof HTMLImageElement,a=this.option("zoom"),r=this.option("resizeParent",a);let h=(l=this.$content,Math.max(parseFloat(l.naturalWidth||0),parseFloat(l.width&&l.width.baseVal&&l.width.baseVal.value||0),parseFloat(l.offsetWidth||0),parseFloat(l.scrollWidth||0)));var l;let c=(t=>Math.max(parseFloat(t.naturalHeight||0),parseFloat(t.height&&t.height.baseVal&&t.height.baseVal.value||0),parseFloat(t.offsetHeight||0),parseFloat(t.scrollHeight||0)))(this.$content);Object.assign(s.style,{width:"",height:"",maxWidth:"",maxHeight:""}),r&&Object.assign(o.style,{width:"",height:""});const d=this.option("ratio");h=i(h*d),c=i(c*d);let u=h,f=c;const g=s.getBoundingClientRect(),p=o.getBoundingClientRect(),m=o==e?p:e.getBoundingClientRect();let y=Math.max(o.offsetWidth,i(p.width)),b=Math.max(o.offsetHeight,i(p.height)),v=window.getComputedStyle(o);if(y-=parseFloat(v.paddingLeft)+parseFloat(v.paddingRight),b-=parseFloat(v.paddingTop)+parseFloat(v.paddingBottom),this.viewport.width=y,this.viewport.height=b,a){if(Math.abs(h-g.width)>.1||Math.abs(c-g.height)>.1){const t=((t,e,i,s)=>{const o=Math.min(i/t||0,s/e);return{width:t*o||0,height:e*o||0}})(h,c,Math.min(h,g.width),Math.min(c,g.height));u=i(t.width),f=i(t.height)}Object.assign(s.style,{width:`${u}px`,height:`${f}px`,transform:""})}if(r&&(Object.assign(o.style,{width:`${u}px`,height:`${f}px`}),this.viewport={...this.viewport,width:u,height:f}),n&&a&&"function"!=typeof this.options.maxScale){const t=this.option("maxScale");this.options.maxScale=function(){return this.content.origWidth>0&&this.content.fitWidth>0?this.content.origWidth/this.content.fitWidth:t}}this.content={...this.content,origWidth:h,origHeight:c,fitWidth:u,fitHeight:f,width:u,height:f,scale:1,isZoomable:a},this.container={width:m.width,height:m.height},!0!==t&&this.trigger("afterUpdate")}zoomIn(t){this.zoomTo(this.content.scale+(t||this.option("step")))}zoomOut(t){this.zoomTo(this.content.scale-(t||this.option("step")))}toggleZoom(t={}){const e=this.option("maxScale"),i=this.option("baseScale"),s=this.content.scale>i+.5*(e-i)?i:e;this.zoomTo(s,t)}zoomTo(t=this.option("baseScale"),{x:e=null,y:s=null}={}){t=Math.max(Math.min(t,this.option("maxScale")),this.option("minScale"));const o=i(this.content.scale/(this.content.width/this.content.fitWidth),1e7);null===e&&(e=this.content.width*o*.5),null===s&&(s=this.content.height*o*.5);const{deltaX:n,deltaY:a}=this.getZoomDelta(t,e,s);e=this.content.x-n,s=this.content.y-a,this.panTo({x:e,y:s,scale:t,friction:this.option("zoomFriction")})}getZoomDelta(t,e=0,i=0){const s=this.content.fitWidth*this.content.scale,o=this.content.fitHeight*this.content.scale,n=e>0&&s?e/s:0,a=i>0&&o?i/o:0;return{deltaX:(this.content.fitWidth*t-s)*n,deltaY:(this.content.fitHeight*t-o)*a}}panTo({x:t=this.content.x,y:e=this.content.y,scale:i,friction:s=this.option("friction"),ignoreBounds:o=!1}={}){if(i=i||this.content.scale||1,!o){const{boundX:s,boundY:o}=this.getBounds(i);s&&(t=Math.max(Math.min(t,s.to),s.from)),o&&(e=Math.max(Math.min(e,o.to),o.from))}this.friction=s,this.transform={...this.transform,x:t,y:e,scale:i},s?(this.state="panning",this.velocity={x:(1/this.friction-1)*(t-this.content.x),y:(1/this.friction-1)*(e-this.content.y),scale:(1/this.friction-1)*(i-this.content.scale)},this.startAnimation()):this.endAnimation()}startAnimation(){this.rAF?cancelAnimationFrame(this.rAF):this.trigger("startAnimation"),this.rAF=requestAnimationFrame((()=>this.animate()))}animate(){if(this.setEdgeForce(),this.setDragForce(),this.velocity.x*=this.friction,this.velocity.y*=this.friction,this.velocity.scale*=this.friction,this.content.x+=this.velocity.x,this.content.y+=this.velocity.y,this.content.scale+=this.velocity.scale,this.isAnimating())this.setTransform();else if("pointerdown"!==this.state)return this.endAnimation(),void this.trigger("endAnimation");this.rAF=requestAnimationFrame((()=>this.animate()))}getBounds(t){let e=this.boundX,s=this.boundY;if(void 0!==e&&void 0!==s)return{boundX:e,boundY:s};e={from:0,to:0},s={from:0,to:0},t=t||this.transform.scale;const o=this.content.fitWidth,n=this.content.fitHeight,a=o*t,r=n*t,h=this.viewport.width,l=this.viewport.height;if(o<=h){const t=.5*(h-a),s=.5*(a-o);e.from=i(t-s),e.to=i(t+s)}else e.from=i(h-a);if(n<=l){const t=.5*(l-r),e=.5*(r-n);s.from=i(t-e),s.to=i(t+e)}else s.from=i(l-a);return{boundX:e,boundY:s}}setEdgeForce(){if("decel"!==this.state)return;const t=this.option("bounceForce"),{boundX:e,boundY:i}=this.getBounds(Math.max(this.transform.scale,this.content.scale));let s,o,n,a;if(e&&(s=this.content.x<e.from,o=this.content.x>e.to),i&&(n=this.content.y<i.from,a=this.content.y>i.to),s||o){let i=((s?e.from:e.to)-this.content.x)*t;const o=this.content.x+(this.velocity.x+i)/this.friction;o>=e.from&&o<=e.to&&(i+=this.velocity.x),this.velocity.x=i,this.recalculateTransform()}if(n||a){let e=((n?i.from:i.to)-this.content.y)*t;const s=this.content.y+(e+this.velocity.y)/this.friction;s>=i.from&&s<=i.to&&(e+=this.velocity.y),this.velocity.y=e,this.recalculateTransform()}}setDragResistance(){if("pointerdown"!==this.state)return;const{boundX:t,boundY:e}=this.getBounds(this.dragPosition.scale);let i,s,o,n;if(t&&(i=this.dragPosition.x<t.from,s=this.dragPosition.x>t.to),e&&(o=this.dragPosition.y<e.from,n=this.dragPosition.y>e.to),(i||s)&&(!i||!s)){const e=i?t.from:t.to,s=e-this.dragPosition.x;this.dragPosition.x=e-.3*s}if((o||n)&&(!o||!n)){const t=o?e.from:e.to,i=t-this.dragPosition.y;this.dragPosition.y=t-.3*i}}setDragForce(){"pointerdown"===this.state&&(this.velocity.x=this.dragPosition.x-this.content.x,this.velocity.y=this.dragPosition.y-this.content.y,this.velocity.scale=this.dragPosition.scale-this.content.scale)}recalculateTransform(){this.transform.x=this.content.x+this.velocity.x/(1/this.friction-1),this.transform.y=this.content.y+this.velocity.y/(1/this.friction-1),this.transform.scale=this.content.scale+this.velocity.scale/(1/this.friction-1)}isAnimating(){return!(!this.friction||!(Math.abs(this.velocity.x)>.05||Math.abs(this.velocity.y)>.05||Math.abs(this.velocity.scale)>.05))}setTransform(t){let e,s,o;if(t?(e=i(this.transform.x),s=i(this.transform.y),o=this.transform.scale,this.content={...this.content,x:e,y:s,scale:o}):(e=i(this.content.x),s=i(this.content.y),o=this.content.scale/(this.content.width/this.content.fitWidth),this.content={...this.content,x:e,y:s}),this.trigger("beforeTransform"),e=i(this.content.x),s=i(this.content.y),t&&this.option("zoom")){let t,n;t=i(this.content.fitWidth*o),n=i(this.content.fitHeight*o),this.content.width=t,this.content.height=n,this.transform={...this.transform,width:t,height:n,scale:o},Object.assign(this.$content.style,{width:`${t}px`,height:`${n}px`,maxWidth:"none",maxHeight:"none",transform:`translate3d(${e}px, ${s}px, 0) scale(1)`})}else this.$content.style.transform=`translate3d(${e}px, ${s}px, 0) scale(${o})`;this.trigger("afterTransform")}endAnimation(){cancelAnimationFrame(this.rAF),this.rAF=null,this.velocity={x:0,y:0,scale:0},this.setTransform(!0),this.state="ready",this.handleCursor()}handleCursor(){const t=this.option("draggableClass");t&&this.option("touch")&&(1==this.option("panOnlyZoomed")&&this.content.width<=this.viewport.width&&this.content.height<=this.viewport.height&&this.transform.scale<=this.option("baseScale")?this.$container.classList.remove(t):this.$container.classList.add(t))}detachEvents(){this.$content.removeEventListener("load",this.onLoad),this.$container.removeEventListener("wheel",this.onWheel,{passive:!1}),this.$container.removeEventListener("click",this.onClick,{passive:!1}),this.pointerTracker&&(this.pointerTracker.stop(),this.pointerTracker=null),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}destroy(){"destroy"!==this.state&&(this.state="destroy",clearTimeout(this.updateTimer),this.updateTimer=null,cancelAnimationFrame(this.rAF),this.rAF=null,this.detachEvents(),this.detachPlugins(),this.resetDragPosition())}}d.version="4.0.5",d.Plugins={};const u=(t,e)=>{let i=0;return function(...s){const o=(new Date).getTime();if(!(o-i<e))return i=o,t(...s)}};class f{constructor(t){this.$container=null,this.$prev=null,this.$next=null,this.carousel=t,this.onRefresh=this.onRefresh.bind(this)}option(t){return this.carousel.option(`Navigation.${t}`)}createButton(t){const e=document.createElement("button");e.setAttribute("title",this.carousel.localize(`{{${t.toUpperCase()}}}`));const i=this.option("classNames.button")+" "+this.option(`classNames.${t}`);return e.classList.add(...i.split(" ")),e.setAttribute("tabindex","0"),e.innerHTML=this.carousel.localize(this.option(`${t}Tpl`)),e.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),this.carousel["slide"+("next"===t?"Next":"Prev")]()})),e}build(){this.$container||(this.$container=document.createElement("div"),this.$container.classList.add(this.option("classNames.main")),this.carousel.$container.appendChild(this.$container)),this.$next||(this.$next=this.createButton("next"),this.$container.appendChild(this.$next)),this.$prev||(this.$prev=this.createButton("prev"),this.$container.appendChild(this.$prev))}onRefresh(){const t=this.carousel.pages.length;t<=1||t>1&&this.carousel.elemDimWidth<this.carousel.wrapDimWidth&&!Number.isInteger(this.carousel.option("slidesPerPage"))?this.cleanup():(this.build(),this.$prev.removeAttribute("disabled"),this.$next.removeAttribute("disabled"),this.carousel.option("infiniteX",this.carousel.option("infinite"))||(this.carousel.page<=0&&this.$prev.setAttribute("disabled",""),this.carousel.page>=t-1&&this.$next.setAttribute("disabled","")))}cleanup(){this.$prev&&this.$prev.remove(),this.$prev=null,this.$next&&this.$next.remove(),this.$next=null,this.$container&&this.$container.remove(),this.$container=null}attach(){this.carousel.on("refresh change",this.onRefresh)}detach(){this.carousel.off("refresh change",this.onRefresh),this.cleanup()}}f.defaults={prevTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',nextTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',classNames:{main:"carousel__nav",button:"carousel__button",next:"is-next",prev:"is-prev"}};class g{constructor(t){this.carousel=t,this.selectedIndex=null,this.friction=0,this.onNavReady=this.onNavReady.bind(this),this.onNavClick=this.onNavClick.bind(this),this.onNavCreateSlide=this.onNavCreateSlide.bind(this),this.onTargetChange=this.onTargetChange.bind(this)}addAsTargetFor(t){this.target=this.carousel,this.nav=t,this.attachEvents()}addAsNavFor(t){this.target=t,this.nav=this.carousel,this.attachEvents()}attachEvents(){this.nav.options.initialSlide=this.target.options.initialPage,this.nav.on("ready",this.onNavReady),this.nav.on("createSlide",this.onNavCreateSlide),this.nav.on("Panzoom.click",this.onNavClick),this.target.on("change",this.onTargetChange),this.target.on("Panzoom.afterUpdate",this.onTargetChange)}onNavReady(){this.onTargetChange(!0)}onNavClick(t,e,i){const s=i.target.closest(".carousel__slide");if(!s)return;i.stopPropagation();const o=parseInt(s.dataset.index,10),n=this.target.findPageForSlide(o);this.target.page!==n&&this.target.slideTo(n,{friction:this.friction}),this.markSelectedSlide(o)}onNavCreateSlide(t,e){e.index===this.selectedIndex&&this.markSelectedSlide(e.index)}onTargetChange(){const t=this.target.pages[this.target.page].indexes[0],e=this.nav.findPageForSlide(t);this.nav.slideTo(e),this.markSelectedSlide(t)}markSelectedSlide(t){this.selectedIndex=t,[...this.nav.slides].filter((t=>t.$el&&t.$el.classList.remove("is-nav-selected")));const e=this.nav.slides[t];e&&e.$el&&e.$el.classList.add("is-nav-selected")}attach(t){const e=t.options.Sync;(e.target||e.nav)&&(e.target?this.addAsNavFor(e.target):e.nav&&this.addAsTargetFor(e.nav),this.friction=e.friction)}detach(){this.nav&&(this.nav.off("ready",this.onNavReady),this.nav.off("Panzoom.click",this.onNavClick),this.nav.off("createSlide",this.onNavCreateSlide)),this.target&&(this.target.off("Panzoom.afterUpdate",this.onTargetChange),this.target.off("change",this.onTargetChange))}}g.defaults={friction:.92};const p={Navigation:f,Dots:class{constructor(t){this.carousel=t,this.$list=null,this.events={change:this.onChange.bind(this),refresh:this.onRefresh.bind(this)}}buildList(){if(this.carousel.pages.length<2)return;const t=document.createElement("ol");return t.classList.add("carousel__dots"),t.addEventListener("click",(t=>{if(!("page"in t.target.dataset))return;t.preventDefault(),t.stopPropagation();const e=parseInt(t.target.dataset.page,10),i=this.carousel;e!==i.page&&(i.pages.length<3&&i.option("infinite")?i[0==e?"slidePrev":"slideNext"]():i.slideTo(e))})),this.$list=t,this.carousel.$container.appendChild(t),this.carousel.$container.classList.add("has-dots"),t}removeList(){this.$list&&(this.$list.parentNode.removeChild(this.$list),this.$list=null),this.carousel.$container.classList.remove("has-dots")}rebuildDots(){let t=this.$list;const e=!!t,i=this.carousel.pages.length;if(i<2)return void(e&&this.removeList());e||(t=this.buildList());const s=this.$list.children.length;if(s>i)for(let t=i;t<s;t++)this.$list.removeChild(this.$list.lastChild);else{for(let t=s;t<i;t++){const e=document.createElement("li");e.classList.add("carousel__dot"),e.dataset.page=t,e.setAttribute("role","button"),e.setAttribute("tabindex","0"),e.setAttribute("title",this.carousel.localize("{{GOTO}}",[["%d",t+1]])),e.addEventListener("keydown",(t=>{const i=t.code;let s;"Enter"===i||"NumpadEnter"===i?s=e:"ArrowRight"===i?s=e.nextSibling:"ArrowLeft"===i&&(s=e.previousSibling),s&&s.click()})),this.$list.appendChild(e)}this.setActiveDot()}}setActiveDot(){if(!this.$list)return;this.$list.childNodes.forEach((t=>{t.classList.remove("is-selected")}));const t=this.$list.childNodes[this.carousel.page];t&&t.classList.add("is-selected")}onChange(){this.setActiveDot()}onRefresh(){this.rebuildDots()}attach(){this.carousel.on(this.events)}detach(){this.removeList(),this.carousel.off(this.events),this.carousel=null}},Sync:g};const m={slides:[],preload:0,slidesPerPage:"auto",initialPage:null,initialSlide:null,friction:.92,center:!0,infinite:!0,fill:!0,dragFree:!1,prefix:"",classNames:{viewport:"carousel__viewport",track:"carousel__track",slide:"carousel__slide",slideSelected:"is-selected"},l10n:{NEXT:"Next slide",PREV:"Previous slide",GOTO:"Go to slide #%d"}};class y extends l{constructor(t,i={}){if(super(i=e(!0,{},m,i)),this.state="init",this.$container=t,!(this.$container instanceof HTMLElement))throw new Error("No root element provided");this.slideNext=u(this.slideNext.bind(this),250),this.slidePrev=u(this.slidePrev.bind(this),250),this.init()}init(){this.pages=[],this.page=this.pageIndex=null,this.prevPage=this.prevPageIndex=null,this.attachPlugins(y.Plugins),this.trigger("init"),this.initLayout(),this.initSlides(),this.updateMetrics(),this.$track&&this.pages.length&&(this.$track.style.transform=`translate3d(${-1*this.pages[this.page].left}px, 0px, 0) scale(1)`),this.manageSlideVisiblity(),this.initPanzoom(),this.state="ready",this.trigger("ready")}initLayout(){const t=this.option("prefix"),e=this.option("classNames");this.$viewport=this.option("viewport")||this.$container.querySelector(`.${t}${e.viewport}`),this.$viewport||(this.$viewport=document.createElement("div"),this.$viewport.classList.add(t+e.viewport),this.$viewport.append(...this.$container.childNodes),this.$container.appendChild(this.$viewport)),this.$track=this.option("track")||this.$container.querySelector(`.${t}${e.track}`),this.$track||(this.$track=document.createElement("div"),this.$track.classList.add(t+e.track),this.$track.append(...this.$viewport.childNodes),this.$viewport.appendChild(this.$track))}initSlides(){this.slides=[];this.$viewport.querySelectorAll(`.${this.option("prefix")}${this.option("classNames.slide")}`).forEach((t=>{const e={$el:t,isDom:!0};this.slides.push(e),this.trigger("createSlide",e,this.slides.length)})),Array.isArray(this.options.slides)&&(this.slides=e(!0,[...this.slides],this.options.slides))}updateMetrics(){let t,e=0,s=[];this.slides.forEach(((i,o)=>{const n=i.$el,a=i.isDom||!t?this.getSlideMetrics(n):t;i.index=o,i.width=a,i.left=e,t=a,e+=a,s.push(o)}));let o=Math.max(this.$track.offsetWidth,i(this.$track.getBoundingClientRect().width)),n=getComputedStyle(this.$track);o-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),this.contentWidth=e,this.viewportWidth=o;const a=[],r=this.option("slidesPerPage");if(Number.isInteger(r)&&e>o)for(let t=0;t<this.slides.length;t+=r)a.push({indexes:s.slice(t,t+r),slides:this.slides.slice(t,t+r)});else{let t=0,e=0;for(let i=0;i<this.slides.length;i+=1){let s=this.slides[i];(!a.length||e+s.width>o)&&(a.push({indexes:[],slides:[]}),t=a.length-1,e=0),e+=s.width,a[t].indexes.push(i),a[t].slides.push(s)}}const h=this.option("center"),l=this.option("fill");a.forEach(((t,i)=>{t.index=i,t.width=t.slides.reduce(((t,e)=>t+e.width),0),t.left=t.slides[0].left,h&&(t.left+=.5*(o-t.width)*-1),l&&!this.option("infiniteX",this.option("infinite"))&&e>o&&(t.left=Math.max(t.left,0),t.left=Math.min(t.left,e-o))}));const c=[];let d;a.forEach((t=>{const e={...t};d&&e.left===d.left?(d.width+=e.width,d.slides=[...d.slides,...e.slides],d.indexes=[...d.indexes,...e.indexes]):(e.index=c.length,d=e,c.push(e))})),this.pages=c;let u=this.page;if(null===u){const t=this.option("initialSlide");u=null!==t?this.findPageForSlide(t):this.option("initialPage",0),c[u]||(u=c.length&&u>c.length?c[c.length-1].index:0),this.page=u,this.pageIndex=u}this.updatePanzoom(),this.trigger("refresh")}getSlideMetrics(t){if(!t){const e=this.slides[0];(t=document.createElement("div")).dataset.isTestEl=1,t.style.visibility="hidden",t.classList.add(this.option("prefix")+this.option("classNames.slide")),e.customClass&&t.classList.add(...e.customClass.split(" ")),this.$track.prepend(t)}let e=Math.max(t.offsetWidth,i(t.getBoundingClientRect().width));const s=t.currentStyle||window.getComputedStyle(t);return e=e+(parseFloat(s.marginLeft)||0)+(parseFloat(s.marginRight)||0),t.dataset.isTestEl&&t.remove(),e}findPageForSlide(t){const e=this.pages.find((e=>e.indexes.indexOf(t)>-1));return e?e.index:null}slideNext(){this.slideTo(this.pageIndex+1)}slidePrev(){this.slideTo(this.pageIndex-1)}slideTo(t,e={}){const{x:i=-1*this.setPage(t,!0),y:s=0,friction:o=this.option("friction")}=e;this.Panzoom.content.x===i&&!this.Panzoom.velocity.x&&o||(this.Panzoom.panTo({x:i,y:s,friction:o,ignoreBounds:!0}),"ready"===this.state&&"ready"===this.Panzoom.state&&this.trigger("settle"))}initPanzoom(){this.Panzoom&&this.Panzoom.destroy();const t=e(!0,{},{content:this.$track,wrapInner:!1,resizeParent:!1,zoom:!1,click:!1,lockAxis:"x",x:this.pages.length?-1*this.pages[this.page].left:0,centerOnStart:!1,textSelection:()=>this.option("textSelection",!1),panOnlyZoomed:function(){return this.content.width<=this.viewport.width}},this.option("Panzoom"));this.Panzoom=new d(this.$container,t),this.Panzoom.on({"*":(t,...e)=>this.trigger(`Panzoom.${t}`,...e),afterUpdate:()=>{this.updatePage()},beforeTransform:this.onBeforeTransform.bind(this),touchEnd:this.onTouchEnd.bind(this),endAnimation:()=>{this.trigger("settle")}}),this.updateMetrics(),this.manageSlideVisiblity()}updatePanzoom(){this.Panzoom&&(this.Panzoom.content={...this.Panzoom.content,fitWidth:this.contentWidth,origWidth:this.contentWidth,width:this.contentWidth},this.pages.length>1&&this.option("infiniteX",this.option("infinite"))?this.Panzoom.boundX=null:this.pages.length&&(this.Panzoom.boundX={from:-1*this.pages[this.pages.length-1].left,to:-1*this.pages[0].left}),this.option("infiniteY",this.option("infinite"))?this.Panzoom.boundY=null:this.Panzoom.boundY={from:0,to:0},this.Panzoom.handleCursor())}manageSlideVisiblity(){const t=this.contentWidth,e=this.viewportWidth;let i=this.Panzoom?-1*this.Panzoom.content.x:this.pages.length?this.pages[this.page].left:0;const s=this.option("preload"),o=this.option("infiniteX",this.option("infinite")),n=parseFloat(getComputedStyle(this.$viewport,null).getPropertyValue("padding-left")),a=parseFloat(getComputedStyle(this.$viewport,null).getPropertyValue("padding-right"));this.slides.forEach((r=>{let h,l,c=0;h=i-n,l=i+e+a,h-=s*(e+n+a),l+=s*(e+n+a);const d=r.left+r.width>h&&r.left<l;h=i+t-n,l=i+t+e+a,h-=s*(e+n+a);const u=o&&r.left+r.width>h&&r.left<l;h=i-t-n,l=i-t+e+a,h-=s*(e+n+a);const f=o&&r.left+r.width>h&&r.left<l;u||d||f?(this.createSlideEl(r),d&&(c=0),u&&(c=-1),f&&(c=1),r.left+r.width>i&&r.left<=i+e+a&&(c=0)):this.removeSlideEl(r),r.hasDiff=c}));let r=0,h=0;this.slides.forEach(((e,i)=>{let s=0;e.$el?(i!==r||e.hasDiff?s=h+e.hasDiff*t:h=0,e.$el.style.left=Math.abs(s)>.1?`${h+e.hasDiff*t}px`:"",r++):h+=e.width})),this.markSelectedSlides()}createSlideEl(t){if(!t)return;if(t.$el){if(parseInt(t.$el.dataset.index,10)!==t.index){t.$el.dataset.index=t.index;let e;t.$el.querySelectorAll("[data-lazy-src]").forEach((t=>{let e=t.dataset.lazySrc;t instanceof HTMLImageElement?t.src=e:t.style.backgroundImage=`url('${e}')`})),(e=t.$el.dataset.lazySrc)&&(t.$el.style.backgroundImage=`url('${e}')`),t.state="ready"}return}const e=document.createElement("div");e.dataset.index=t.index,e.classList.add(this.option("prefix")+this.option("classNames.slide")),t.customClass&&e.classList.add(...t.customClass.split(" ")),t.html&&(e.innerHTML=t.html);const i=[];this.slides.forEach(((t,e)=>{t.$el&&i.push(e)}));const s=t.index;let o=null;if(i.length){let t=i.reduce(((t,e)=>Math.abs(e-s)<Math.abs(t-s)?e:t));o=this.slides[t]}return this.$track.insertBefore(e,o&&o.$el?o.index<t.index?o.$el.nextSibling:o.$el:null),t.$el=e,this.trigger("createSlide",t,s),t}removeSlideEl(t){t.$el&&!t.isDom&&(this.trigger("removeSlide",t),t.$el.remove(),t.$el=null)}markSelectedSlides(){const t=this.option("classNames.slideSelected"),e="aria-hidden";this.slides.forEach(((i,s)=>{const o=i.$el;if(!o)return;const n=this.pages[this.page];n&&n.indexes&&n.indexes.indexOf(s)>-1?(t&&!o.classList.contains(t)&&(o.classList.add(t),this.trigger("selectSlide",i)),o.removeAttribute(e)):(t&&o.classList.contains(t)&&(o.classList.remove(t),this.trigger("unselectSlide",i)),o.setAttribute(e,!0))}))}updatePage(){this.updateMetrics(),this.slideTo(this.page,{friction:0})}onBeforeTransform(){this.option("infiniteX",this.option("infinite"))&&this.manageInfiniteTrack(),this.manageSlideVisiblity()}manageInfiniteTrack(){const t=this.contentWidth,e=this.viewportWidth;if(!this.option("infiniteX",this.option("infinite"))||this.pages.length<2||t<e)return;const i=this.Panzoom;let s=!1;return i.content.x<-1*(t-e)&&(i.content.x+=t,this.pageIndex=this.pageIndex-this.pages.length,s=!0),i.content.x>e&&(i.content.x-=t,this.pageIndex=this.pageIndex+this.pages.length,s=!0),s&&"pointerdown"===i.state&&i.resetDragPosition(),s}onTouchEnd(t,e){const i=this.option("dragFree");if(!i&&this.pages.length>1&&t.dragOffset.time<350&&Math.abs(t.dragOffset.y)<1&&Math.abs(t.dragOffset.x)>5)this[t.dragOffset.x<0?"slideNext":"slidePrev"]();else if(i){const[,e]=this.getPageFromPosition(-1*t.transform.x);this.setPage(e)}else this.slideToClosest()}slideToClosest(t={}){let[,e]=this.getPageFromPosition(-1*this.Panzoom.content.x);this.slideTo(e,t)}getPageFromPosition(t){const e=this.pages.length;this.option("center")&&(t+=.5*this.viewportWidth);const i=Math.floor(t/this.contentWidth);t-=i*this.contentWidth;let s=this.slides.find((e=>e.left<=t&&e.left+e.width>t));if(s){let t=this.findPageForSlide(s.index);return[t,t+i*e]}return[0,0]}setPage(t,e){let i=0,s=parseInt(t,10)||0;const o=this.page,n=this.pageIndex,a=this.pages.length,r=this.contentWidth,h=this.viewportWidth;if(t=(s%a+a)%a,this.option("infiniteX",this.option("infinite"))&&r>h){const o=Math.floor(s/a)||0,n=r;if(i=this.pages[t].left+o*n,!0===e&&a>2){let t=-1*this.Panzoom.content.x;const e=i-n,o=i+n,r=Math.abs(t-i),h=Math.abs(t-e),l=Math.abs(t-o);l<r&&l<=h?(i=o,s+=a):h<r&&h<l&&(i=e,s-=a)}}else t=s=Math.max(0,Math.min(s,a-1)),i=this.pages.length?this.pages[t].left:0;return this.page=t,this.pageIndex=s,null!==o&&t!==o&&(this.prevPage=o,this.prevPageIndex=n,this.trigger("change",t,o)),i}destroy(){this.state="destroy",this.slides.forEach((t=>{this.removeSlideEl(t)})),this.slides=[],this.Panzoom.destroy(),this.detachPlugins()}}y.version="4.0.5",y.Plugins=p;const b=!("undefined"==typeof window||!window.document||!window.document.createElement);class v{constructor(t){this.fancybox=t,this.$container=null,this.state="init";for(const t of["onPrepare","onClosing","onKeydown"])this[t]=this[t].bind(this);this.events={prepare:this.onPrepare,closing:this.onClosing,keydown:this.onKeydown}}onPrepare(){this.getSlides().length<this.fancybox.option("Thumbs.minSlideCount")?this.state="disabled":!0===this.fancybox.option("Thumbs.autoStart")&&this.fancybox.Carousel.Panzoom.content.height>=this.fancybox.option("Thumbs.minScreenHeight")&&this.build()}onClosing(){this.Carousel&&this.Carousel.Panzoom.detachEvents()}onKeydown(t,e){e===t.option("Thumbs.key")&&this.toggle()}build(){if(this.$container)return;const t=document.createElement("div");t.classList.add("fancybox__thumbs"),this.fancybox.$carousel.parentNode.insertBefore(t,this.fancybox.$carousel.nextSibling),this.Carousel=new y(t,e(!0,{Dots:!1,Navigation:!1,Sync:{friction:0},infinite:!1,center:!0,fill:!0,dragFree:!0,slidesPerPage:1,preload:1},this.fancybox.option("Thumbs.Carousel"),{Sync:{target:this.fancybox.Carousel},slides:this.getSlides()})),this.Carousel.Panzoom.on("wheel",((t,e)=>{e.preventDefault(),this.fancybox[e.deltaY<0?"prev":"next"]()})),this.$container=t,this.state="visible"}getSlides(){const t=[];for(const e of this.fancybox.items){const i=e.thumb;i&&t.push({html:`<div class="fancybox__thumb" style="background-image:url('${i}')"></div>`,customClass:`has-thumb has-${e.type||"image"}`})}return t}toggle(){"visible"===this.state?this.hide():"hidden"===this.state?this.show():this.build()}show(){"hidden"===this.state&&(this.$container.style.display="",this.Carousel.Panzoom.attachEvents(),this.state="visible")}hide(){"visible"===this.state&&(this.Carousel.Panzoom.detachEvents(),this.$container.style.display="none",this.state="hidden")}cleanup(){this.Carousel&&(this.Carousel.destroy(),this.Carousel=null),this.$container&&(this.$container.remove(),this.$container=null),this.state="init"}attach(){this.fancybox.on(this.events)}detach(){this.fancybox.off(this.events),this.cleanup()}}v.defaults={minSlideCount:2,minScreenHeight:500,autoStart:!0,key:"t",Carousel:{}};const x=t=>Object.entries(t).map((t=>t.map(encodeURIComponent).join("="))).join("&"),w={video:{autoplay:!0,ratio:16/9},youtube:{autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},vimeo:{hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},html5video:{tpl:'<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',format:""}};class ${constructor(t){this.fancybox=t;for(const t of["onInit","onReady","onCreateSlide","onRemoveSlide","onSelectSlide","onUnselectSlide","onRefresh","onMessage"])this[t]=this[t].bind(this);this.events={init:this.onInit,ready:this.onReady,"Carousel.createSlide":this.onCreateSlide,"Carousel.removeSlide":this.onRemoveSlide,"Carousel.selectSlide":this.onSelectSlide,"Carousel.unselectSlide":this.onUnselectSlide,"Carousel.refresh":this.onRefresh}}onInit(){for(const t of this.fancybox.items)this.processType(t)}processType(t){if(t.html)return t.src=t.html,t.type="html",void delete t.html;const i=t.src||"";let s=t.type||this.fancybox.options.type,o=null;if(!i||"string"==typeof i){if(o=i.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)){const e=x(this.fancybox.option("Html.youtube")),i=encodeURIComponent(o[1]);t.videoId=i,t.src=`https://www.youtube-nocookie.com/embed/${i}?${e}`,t.thumb=t.thumb||`https://i.ytimg.com/vi/${i}/mqdefault.jpg`,t.vendor="youtube",s="video"}else if(o=i.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)){const e=x(this.fancybox.option("Html.vimeo")),i=encodeURIComponent(o[1]);t.videoId=i,t.src=`https://player.vimeo.com/video/${i}?${e}`,t.vendor="vimeo",s="video"}else(o=i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i))?(t.src=`//maps.google.${o[1]}/?ll=${(o[2]?o[2]+"&z="+Math.floor(o[3])+(o[4]?o[4].replace(/^\//,"&"):""):o[4]+"").replace(/\?/,"&")}&output=${o[4]&&o[4].indexOf("layer=c")>0?"svembed":"embed"}`,s="map"):(o=i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i))&&(t.src=`//maps.google.${o[1]}/maps?q=${o[2].replace("query=","q=").replace("api=1","")}&output=embed`,s="map");s||("#"===i.charAt(0)?s="inline":(o=i.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(s="html5video",t.format=t.format||"video/"+("ogv"===o[1]?"ogg":o[1])):i.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":i.match(/\.(pdf)((\?|#).*)?$/i)&&(s="pdf")),t.type=s||this.fancybox.option("defaultType","image"),"html5video"!==s&&"video"!==s||(t.video=e({},this.fancybox.option("Html.video"),t.video),t._width&&t._height?t.ratio=parseFloat(t._width)/parseFloat(t._height):t.ratio=t.ratio||t.video.ratio||w.video.ratio)}}onReady(){this.fancybox.Carousel.slides.forEach((t=>{t.$el&&(this.setContent(t),t.index===this.fancybox.getSlide().index&&this.playVideo(t))}))}onCreateSlide(t,e,i){"ready"===this.fancybox.state&&this.setContent(i)}loadInlineContent(t){let e;if(t.src instanceof HTMLElement)e=t.src;else if("string"==typeof t.src){const i=t.src.split("#",2),s=2===i.length&&""===i[0]?i[1]:i[0];e=document.getElementById(s)}if(e){if("clone"===t.type||e.$placeHolder){e=e.cloneNode(!0);let i=e.getAttribute("id");i=i?`${i}--clone`:`clone-${this.fancybox.id}-${t.index}`,e.setAttribute("id",i)}else{const t=document.createElement("div");t.classList.add("fancybox-placeholder"),e.parentNode.insertBefore(t,e),e.$placeHolder=t}this.fancybox.setContent(t,e)}else this.fancybox.setError(t,"{{ELEMENT_NOT_FOUND}}")}loadAjaxContent(t){const e=this.fancybox,i=new XMLHttpRequest;e.showLoading(t),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&"ready"===e.state&&(e.hideLoading(t),200===i.status?e.setContent(t,i.responseText):e.setError(t,404===i.status?"{{AJAX_NOT_FOUND}}":"{{AJAX_FORBIDDEN}}"))},i.open("GET",t.src),i.send(t.ajax||null),t.xhr=i}loadIframeContent(t){const e=this.fancybox,i=document.createElement("iframe");if(i.className="fancybox__iframe",i.setAttribute("id",`fancybox__iframe_${e.id}_${t.index}`),i.setAttribute("allow","autoplay; fullscreen"),i.setAttribute("scrolling","auto"),t.$iframe=i,"iframe"!==t.type||!1===t.preload)return i.setAttribute("src",t.src),void this.fancybox.setContent(t,i);e.showLoading(t);const s=document.createElement("div");s.style.visibility="hidden",this.fancybox.setContent(t,s),s.appendChild(i),i.onerror=()=>{e.setError(t,"{{IFRAME_ERROR}}")},i.onload=()=>{e.hideLoading(t);let s=!1;"yes"!==i.dataset.ready&&(i.dataset.ready="yes",s=!0),i.src.length&&(i.parentNode.style.visibility="",this.resizeIframe(t),s&&e.revealContent(t))},i.setAttribute("src",t.src)}setAspectRatio(t){const e=t.$content,i=t.ratio;if(!e)return;let s=t._width,o=t._height;if(i||s&&o){Object.assign(e.style,{width:s&&o?"100%":"",height:s&&o?"100%":"",maxWidth:"",maxHeight:""});let t=e.offsetWidth,n=e.offsetHeight;if(s=s||t,o=o||n,s>t||o>n){let e=Math.min(t/s,n/o);s*=e,o*=e}Math.abs(s/o-i)>.01&&(i<s/o?s=o*i:o=s/i),Object.assign(e.style,{width:`${s}px`,height:`${o}px`})}}resizeIframe(t){const e=t.$iframe;if(!e||!e.dataset||"yes"!==e.dataset.ready)return;const i=t._width||0,s=t._height||0;if(!1===t.autoSize&&!i&&!s)return;const o=e.parentNode.style;o.flex="1 1 auto",o.width="",o.height="";try{const t=e.contentWindow.document,n=t.getElementsByTagName("html")[0],a=t.body,r=window.getComputedStyle(e.parentNode),h=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),l=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom);a.style.overflow="hidden";let c=n.scrollWidth+h;i&&(c=Math.min(c,i)),o.width=`${c}px`,a.style.overflow="",o.flex="",o.flexShrink="0",o.height=`${a.scrollHeight}px`;let d=s||n.scrollHeight+l;o.height=`${d}px`}catch(t){o.flex=""}}onRefresh(t,e){e.slides.forEach((t=>{t.$el&&(t.$iframe&&this.resizeIframe(t),t.ratio&&this.setAspectRatio(t))}))}setContent(t){if(t&&!t.isDom){switch(t.type){case"html":this.fancybox.setContent(t,t.src);break;case"html5video":this.fancybox.setContent(t,this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.format||t.html5video&&t.html5video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":case"clone":this.loadInlineContent(t);break;case"ajax":this.loadAjaxContent(t);break;case"iframe":case"pdf":case"video":case"map":this.loadIframeContent(t)}t.ratio&&this.setAspectRatio(t)}}onSelectSlide(t,e,i){"ready"===t.state&&this.playVideo(i)}playVideo(t){if("html5video"===t.type&&t.video.autoplay)try{const e=t.$el.querySelector("video");if(e){const t=e.play();void 0!==t&&t.then((()=>{})).catch((t=>{e.muted=!0,e.play()}))}}catch(t){}if("video"!==t.type||!t.$iframe||!t.$iframe.contentWindow)return;const e=()=>{if("done"===t.state&&t.$iframe&&t.$iframe.contentWindow){let e;if(t.$iframe.isReady)return t.video&&t.video.autoplay&&(e="youtube"==t.vendor?{event:"command",func:"playVideo"}:{method:"play",value:"true"}),void(e&&t.$iframe.contentWindow.postMessage(JSON.stringify(e),"*"));"youtube"===t.vendor&&(e={event:"listening",id:t.$iframe.getAttribute("id")},t.$iframe.contentWindow.postMessage(JSON.stringify(e),"*"))}t.poller=setTimeout(e,250)};e()}onUnselectSlide(t,e,i){if("html5video"===i.type){try{i.$el.querySelector("video").pause()}catch(t){}return}let s=!1;"vimeo"==i.vendor?s={method:"pause",value:"true"}:"youtube"===i.vendor&&(s={event:"command",func:"pauseVideo"}),s&&i.$iframe&&i.$iframe.contentWindow&&i.$iframe.contentWindow.postMessage(JSON.stringify(s),"*"),clearTimeout(i.poller)}onRemoveSlide(t,e,i){i.xhr&&(i.xhr.abort(),i.xhr=null),i.$iframe&&(i.$iframe.onload=i.$iframe.onerror=null,i.$iframe.src="//about:blank",i.$iframe=null);const s=i.$content;"inline"===i.type&&s&&(s.classList.remove("fancybox__content"),"none"!==s.style.display&&(s.style.display="none"),i.$closeButton&&(i.$closeButton.remove(),i.$closeButton=null));const o=s&&s.$placeHolder;o&&(o.parentNode.insertBefore(s,o),o.remove(),s.$placeHolder=null)}onMessage(t){try{let e=JSON.parse(t.data);if("https://player.vimeo.com"===t.origin){if("ready"===e.event)for(let e of document.getElementsByClassName("fancybox__iframe"))e.contentWindow===t.source&&(e.isReady=1)}else"https://www.youtube-nocookie.com"===t.origin&&"onReady"===e.event&&(document.getElementById(e.id).isReady=1)}catch(t){}}attach(){this.fancybox.on(this.events),window.addEventListener("message",this.onMessage,!1)}detach(){this.fancybox.off(this.events),window.removeEventListener("message",this.onMessage,!1)}}$.defaults=w;class C{constructor(t){this.fancybox=t;for(const t of["onReady","onClosing","onDone","onPageChange","onCreateSlide","onRemoveSlide","onImageStatusChange"])this[t]=this[t].bind(this);this.events={ready:this.onReady,closing:this.onClosing,done:this.onDone,"Carousel.change":this.onPageChange,"Carousel.createSlide":this.onCreateSlide,"Carousel.removeSlide":this.onRemoveSlide}}onReady(){this.fancybox.Carousel.slides.forEach((t=>{t.$el&&this.setContent(t)}))}onDone(t,e){this.handleCursor(e)}onClosing(t){clearTimeout(this.clickTimer),this.clickTimer=null,t.Carousel.slides.forEach((t=>{t.$image&&(t.state="destroy"),t.Panzoom&&t.Panzoom.detachEvents()})),"closing"===this.fancybox.state&&this.canZoom(t.getSlide())&&this.zoomOut()}onCreateSlide(t,e,i){"ready"===this.fancybox.state&&this.setContent(i)}onRemoveSlide(t,e,i){i.$image&&(i.$el.classList.remove(t.option("Image.canZoomInClass")),i.$image.remove(),i.$image=null),i.Panzoom&&(i.Panzoom.destroy(),i.Panzoom=null),i.$el&&i.$el.dataset&&delete i.$el.dataset.imageFit}setContent(t){if(t.isDom||t.html||t.type&&"image"!==t.type)return;if(t.$image)return;t.type="image",t.state="loading";const e=document.createElement("div");e.style.visibility="hidden";const i=document.createElement("img");i.addEventListener("load",(e=>{e.stopImmediatePropagation(),this.onImageStatusChange(t)})),i.addEventListener("error",(()=>{this.onImageStatusChange(t)})),i.src=t.src,i.alt="",i.draggable=!1,i.classList.add("fancybox__image"),t.srcset&&i.setAttribute("srcset",t.srcset),t.sizes&&i.setAttribute("sizes",t.sizes),t.$image=i;const s=this.fancybox.option("Image.wrap");if(s){const o=document.createElement("div");o.classList.add("string"==typeof s?s:"fancybox__image-wrap"),o.appendChild(i),e.appendChild(o),t.$wrap=o}else e.appendChild(i);t.$el.dataset.imageFit=this.fancybox.option("Image.fit"),this.fancybox.setContent(t,e),i.complete||i.error?this.onImageStatusChange(t):this.fancybox.showLoading(t)}onImageStatusChange(t){const e=t.$image;e&&"loading"===t.state&&(e.complete&&e.naturalWidth&&e.naturalHeight?(this.fancybox.hideLoading(t),"contain"===this.fancybox.option("Image.fit")&&this.initSlidePanzoom(t),t.$el.addEventListener("wheel",(e=>this.onWheel(t,e)),{passive:!1}),t.$content.addEventListener("click",(e=>this.onClick(t,e)),{passive:!1}),this.revealContent(t)):this.fancybox.setError(t,"{{IMAGE_ERROR}}"))}initSlidePanzoom(t){t.Panzoom||(t.Panzoom=new d(t.$el,e(!0,this.fancybox.option("Image.Panzoom",{}),{viewport:t.$wrap,content:t.$image,wrapInner:!1,textSelection:!0,touch:this.fancybox.option("Image.touch"),panOnlyZoomed:!0,click:!1,wheel:!1})),t.Panzoom.on("startAnimation",(()=>{this.fancybox.trigger("Image.startAnimation",t)})),t.Panzoom.on("endAnimation",(()=>{"zoomIn"===t.state&&this.fancybox.done(t),this.handleCursor(t),this.fancybox.trigger("Image.endAnimation",t)})),t.Panzoom.on("afterUpdate",(()=>{this.handleCursor(t),this.fancybox.trigger("Image.afterUpdate",t)})))}revealContent(t){null===this.fancybox.Carousel.prevPage&&t.index===this.fancybox.options.startIndex&&this.canZoom(t)?this.zoomIn():this.fancybox.revealContent(t)}getZoomInfo(t){const e=t.$thumb.getBoundingClientRect(),i=e.width,s=e.height,o=t.$content.getBoundingClientRect(),n=o.width,a=o.height,r=o.top-e.top,h=o.left-e.left;let l=this.fancybox.option("Image.zoomOpacity");return"auto"===l&&(l=Math.abs(i/s-n/a)>.1),{top:r,left:h,scale:e.width/n,opacity:l}}canZoom(t){const e=this.fancybox,i=e.$container;if(window.visualViewport&&1!==window.visualViewport.scale)return!1;if(!e.option("Image.zoom")||"contain"!==e.option("Image.fit"))return!1;const s=t.$thumb;if(!s||"loading"===t.state)return!1;i.classList.add("fancybox__no-click");const o=s.getBoundingClientRect();let n;if(this.fancybox.option("Image.ignoreCoveredThumbnail")){const t=document.elementFromPoint(o.left+1,o.top+1)===s,e=document.elementFromPoint(o.right-1,o.bottom-1)===s;n=t&&e}else n=document.elementFromPoint(o.left+.5*o.width,o.top+.5*o.height)===s;return i.classList.remove("fancybox__no-click"),n}zoomIn(){const t=this.fancybox,e=t.getSlide(),i=e.Panzoom,{top:s,left:o,scale:n,opacity:a}=this.getZoomInfo(e);e.state="zoomIn",t.trigger("reveal",e),i.panTo({x:-1*o,y:-1*s,scale:n,friction:0,ignoreBounds:!0}),e.$content.style.visibility="",!0===a&&i.on("afterTransform",(t=>{"zoomIn"!==e.state&&"zoomOut"!==e.state||(t.$content.style.opacity=Math.min(1,1-(1-t.content.scale)/(1-n)))})),i.panTo({x:0,y:0,scale:1,friction:this.fancybox.option("Image.zoomFriction")})}zoomOut(){const t=this.fancybox,e=t.getSlide(),i=e.Panzoom;if(!i)return;e.state="zoomOut",t.state="customClosing",e.$caption&&(e.$caption.style.visibility="hidden");let s=this.fancybox.option("Image.zoomFriction");const o=t=>{const{top:o,left:n,scale:a,opacity:r}=this.getZoomInfo(e);t||r||(s*=.82),i.panTo({x:-1*n,y:-1*o,scale:a,friction:s,ignoreBounds:!0}),s*=.98};window.addEventListener("scroll",o),i.on("endAnimation",(()=>{window.removeEventListener("scroll",o),t.destroy()})),o()}handleCursor(t){if("image"!==t.type)return;const e=t.Panzoom,i=this.fancybox.option("Image.click",!1,t),s=t.$el.classList;if(e&&"toggleZoom"===i){s[e&&1===e.content.scale&&e.option("maxScale")-e.content.scale>.01?"add":"remove"](this.fancybox.option("Image.canZoomInClass"))}else"close"===i&&s.add(this.fancybox.option("Image.canZoomOutClass"))}onWheel(t,e){if("ready"===this.fancybox.state&&!1!==this.fancybox.trigger("Image.wheel",e))switch(this.fancybox.option("Image.wheel")){case"zoom":t.Panzoom&&t.Panzoom.zoomWithWheel(e);break;case"close":this.fancybox.close();break;case"slide":this.fancybox[e.deltaY<0?"prev":"next"]()}}onClick(t,e){if("ready"!==this.fancybox.state)return;const i=t.Panzoom;if(i&&(i.dragPosition.midPoint||0!==i.dragOffset.x||0!==i.dragOffset.y||1!==i.dragOffset.scale))return;if(this.fancybox.Carousel.Panzoom.lockAxis)return!1;const s=i=>{switch(i){case"toggleZoom":e.stopPropagation(),t.Panzoom&&t.Panzoom.zoomWithClick(e);break;case"close":this.fancybox.close();break;case"next":e.stopPropagation(),this.fancybox.next()}},o=this.fancybox.option("Image.click"),n=this.fancybox.option("Image.doubleClick");n?this.clickTimer?(clearTimeout(this.clickTimer),this.clickTimer=null,s(n)):this.clickTimer=setTimeout((()=>{this.clickTimer=null,s(o)}),300):s(o)}onPageChange(t,e){const i=t.getSlide();e.slides.forEach((t=>{t.Panzoom&&"done"===t.state&&t.index!==i.index&&t.Panzoom.panTo({x:0,y:0,scale:1,friction:.8})}))}attach(){this.fancybox.on(this.events)}detach(){this.fancybox.off(this.events)}}C.defaults={canZoomInClass:"can-zoom_in",canZoomOutClass:"can-zoom_out",zoom:!0,zoomOpacity:"auto",zoomFriction:.82,ignoreCoveredThumbnail:!1,touch:!0,click:"toggleZoom",doubleClick:null,wheel:"zoom",fit:"contain",wrap:!1,Panzoom:{ratio:1}};const S=function(){const t=window.location.hash.substr(1),e=t.split("-"),i=e.length>1&&/^\+?\d+$/.test(e[e.length-1])&&parseInt(e.pop(-1),10)||null;return{hash:t,slug:e.join("-"),index:i}};class E{constructor(t){this.fancybox=t;for(const t of["onChange","onClosing"])this[t]=this[t].bind(this);this.events={initCarousel:this.onChange,"Carousel.change":this.onChange,closing:this.onClosing},this.hasCreatedHistory=!1,this.origHash="",this.timer=null}onChange(){const t=this.fancybox,e=t.Carousel;this.timer&&clearTimeout(this.timer);const i=null===e.prevPage,s=t.getSlide(),o=s.$trigger&&s.$trigger.dataset,n=window.location.hash.substr(1);let a=!1;if(s.slug)a=s.slug;else{let t=o&&o.fancybox;t&&t.length&&"true"!==t&&(a=t+(e.slides.length>1?"-"+(s.index+1):""))}i&&(this.origHash=n!==a?this.origHash:""),a&&n!==a&&(this.timer=setTimeout((()=>{try{window.history[i?"pushState":"replaceState"]({},document.title,window.location.pathname+window.location.search+"#"+a),i&&(this.hasCreatedHistory=!0)}catch(t){}}),300))}onClosing(){if(this.timer&&clearTimeout(this.timer),!0!==this.hasSilentClose){if(!this.hasCreatedHistory)try{return void window.history.replaceState({},document.title,window.location.pathname+window.location.search+(this.origHash?"#"+this.origHash:""))}catch(t){}window.history.back()}}attach(t){t.on(this.events)}detach(t){t.off(this.events)}static startFromUrl(){if(!E.Fancybox||E.Fancybox.getInstance())return;const{hash:t,slug:e,index:i}=S();if(!e)return;let s=document.querySelector(`[data-slug="${t}"]`);if(s&&s.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})),E.Fancybox.getInstance())return;const o=document.querySelectorAll(`[data-fancybox="${e}"]`);o.length&&(null===i&&1===o.length?s=o[0]:i&&(s=o[i-1]),s&&s.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})))}static onHashChange(){const{slug:t,index:e}=S(),i=E.Fancybox.getInstance();if(i){if(t){const s=i.Carousel;for(let e of s.slides)if(e.slug&&e.slug===t)return s.slideTo(e.index);const o=i.getSlide(),n=o.$trigger&&o.$trigger.dataset;if(n&&n.fancybox===t)return s.slideTo(e-1)}i.plugins.Hash.hasSilentClose=!0,i.close()}E.startFromUrl()}static create(t){function e(){window.addEventListener("hashchange",E.onHashChange,!1),E.startFromUrl()}E.Fancybox=t,b&&window.requestAnimationFrame((()=>{/complete|interactive|loaded/.test(document.readyState)?e():document.addEventListener("DOMContentLoaded",e)}))}static destroy(){window.removeEventListener("hashchange",E.onHashChange,!1)}}const P={pageXOffset:0,pageYOffset:0,element:()=>document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement,activate(t){P.pageXOffset=window.pageXOffset,P.pageYOffset=window.pageYOffset,t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},deactivate(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}};class T{constructor(t){this.fancybox=t,this.active=!1,this.handleVisibilityChange=this.handleVisibilityChange.bind(this)}isActive(){return this.active}setTimer(){if(!this.active||this.timer)return;const t=this.fancybox.option("slideshow.delay",3e3);this.timer=setTimeout((()=>{this.timer=null,this.fancybox.option("infinite")||this.fancybox.getSlide().index!==this.fancybox.Carousel.slides.length-1?this.fancybox.next():this.fancybox.jumpTo(0,{friction:0})}),t);let e=this.$progress;e||(e=document.createElement("div"),e.classList.add("fancybox__progress"),this.fancybox.$carousel.parentNode.insertBefore(e,this.fancybox.$carousel),this.$progress=e,e.offsetHeight),e.style.transitionDuration=`${t}ms`,e.style.transform="scaleX(1)"}clearTimer(){clearTimeout(this.timer),this.timer=null,this.$progress&&(this.$progress.style.transitionDuration="",this.$progress.style.transform="",this.$progress.offsetHeight)}activate(){this.active||(this.active=!0,this.fancybox.$container.classList.add("has-slideshow"),"done"===this.fancybox.getSlide().state&&this.setTimer(),document.addEventListener("visibilitychange",this.handleVisibilityChange,!1))}handleVisibilityChange(){this.deactivate()}deactivate(){this.active=!1,this.clearTimer(),this.fancybox.$container.classList.remove("has-slideshow"),document.removeEventListener("visibilitychange",this.handleVisibilityChange,!1)}toggle(){this.active?this.deactivate():this.fancybox.Carousel.slides.length>1&&this.activate()}}const L={display:["counter","zoom","slideshow","fullscreen","thumbs","close"],autoEnable:!0,items:{counter:{type:"div",class:"fancybox__counter",html:'<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',tabindex:-1,position:"left"},prev:{type:"button",class:"fancybox__button--prev",label:"PREV",html:'<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',click:function(t){t.preventDefault(),this.fancybox.prev()}},next:{type:"button",class:"fancybox__button--next",label:"NEXT",html:'<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',click:function(t){t.preventDefault(),this.fancybox.next()}},fullscreen:{type:"button",class:"fancybox__button--fullscreen",label:"TOGGLE_FULLSCREEN",html:'<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',click:function(t){t.preventDefault(),P.element()?P.deactivate():P.activate(this.fancybox.$container)}},slideshow:{type:"button",class:"fancybox__button--slideshow",label:"TOGGLE_SLIDESHOW",html:'<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',click:function(t){t.preventDefault(),this.Slideshow.toggle()}},zoom:{type:"button",class:"fancybox__button--zoom",label:"TOGGLE_ZOOM",html:'<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',click:function(t){t.preventDefault();const e=this.fancybox.getSlide().Panzoom;e&&e.toggleZoom()}},download:{type:"link",label:"DOWNLOAD",class:"fancybox__button--download",html:'<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',click:function(t){t.stopPropagation()}},thumbs:{type:"button",label:"TOGGLE_THUMBS",class:"fancybox__button--thumbs",html:'<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',click:function(t){t.stopPropagation();const e=this.fancybox.plugins.Thumbs;e&&e.toggle()}},close:{type:"button",label:"CLOSE",class:"fancybox__button--close",html:'<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',tabindex:0,click:function(t){t.stopPropagation(),t.preventDefault(),this.fancybox.close()}}}};class A{constructor(t){this.fancybox=t,this.$container=null,this.state="init";for(const t of["onInit","onPrepare","onDone","onKeydown","onClosing","onChange","onSettle","onRefresh"])this[t]=this[t].bind(this);this.events={init:this.onInit,prepare:this.onPrepare,done:this.onDone,keydown:this.onKeydown,closing:this.onClosing,"Carousel.change":this.onChange,"Carousel.settle":this.onSettle,"Carousel.Panzoom.touchStart":()=>this.onRefresh(),"Image.startAnimation":(t,e)=>this.onRefresh(e),"Image.afterUpdate":(t,e)=>this.onRefresh(e)}}onInit(){if(this.fancybox.option("Toolbar.autoEnable")){let t=!1;for(const e of this.fancybox.items)if("image"===e.type){t=!0;break}if(!t)return void(this.state="disabled")}for(const e of this.fancybox.option("Toolbar.display")){if("close"===(t(e)?e.id:e)){this.fancybox.options.closeButton=!1;break}}}onPrepare(){if("init"===this.state&&(this.build(),this.update(),this.Slideshow=new T(this.fancybox),!this.fancybox.Carousel.prevPage&&(this.fancybox.option("slideshow.autoStart")&&this.Slideshow.activate(),this.fancybox.option("fullscreen.autoStart")&&!P.element())))try{P.activate(this.fancybox.$container)}catch(t){}}onFsChange(){window.scrollTo(P.pageXOffset,P.pageYOffset)}onSettle(){this.Slideshow&&this.Slideshow.isActive()&&(this.fancybox.getSlide().index!==this.fancybox.Carousel.slides.length-1||this.fancybox.option("infinite")?"done"===this.fancybox.getSlide().state&&this.Slideshow.setTimer():this.Slideshow.deactivate())}onChange(){this.update(),this.Slideshow&&this.Slideshow.isActive()&&this.Slideshow.clearTimer()}onDone(t,e){e.index===t.getSlide().index&&(this.update(),this.Slideshow&&this.Slideshow.isActive()&&(this.fancybox.option("infinite")||e.index!==this.fancybox.Carousel.slides.length-1?this.Slideshow.setTimer():this.Slideshow.deactivate()))}onRefresh(t){t&&t.index!==this.fancybox.getSlide().index||(this.update(),!this.Slideshow||!this.Slideshow.isActive()||t&&"done"!==t.state||this.Slideshow.deactivate())}onKeydown(t,e,i){" "===e&&this.Slideshow&&(this.Slideshow.toggle(),i.preventDefault())}onClosing(){this.Slideshow&&this.Slideshow.deactivate(),document.removeEventListener("fullscreenchange",this.onFsChange)}createElement(t){let e;"div"===t.type?e=document.createElement("div"):(e=document.createElement("link"===t.type?"a":"button"),e.classList.add("carousel__button")),e.innerHTML=t.html,e.setAttribute("tabindex",t.tabindex||0),t.class&&e.classList.add(...t.class.split(" ")),t.label&&e.setAttribute("title",this.fancybox.localize(`{{${t.label}}}`)),t.click&&e.addEventListener("click",t.click.bind(this)),"prev"===t.id&&e.setAttribute("data-fancybox-prev",""),"next"===t.id&&e.setAttribute("data-fancybox-next","");const i=e.querySelector("svg");return i&&(i.setAttribute("role","img"),i.setAttribute("tabindex","-1"),i.setAttribute("xmlns","http://www.w3.org/2000/svg")),e}build(){this.cleanup();const i=this.fancybox.option("Toolbar.items"),s=[{position:"left",items:[]},{position:"center",items:[]},{position:"right",items:[]}],o=this.fancybox.plugins.Thumbs;for(const n of this.fancybox.option("Toolbar.display")){let a,r;if(t(n)?(a=n.id,r=e({},i[a],n)):(a=n,r=i[a]),["counter","next","prev","slideshow"].includes(a)&&this.fancybox.items.length<2)continue;if("fullscreen"===a){if(!document.fullscreenEnabled||window.fullScreen)continue;document.addEventListener("fullscreenchange",this.onFsChange)}if("thumbs"===a&&(!o||"disabled"===o.state))continue;if(!r)continue;let h=r.position||"right",l=s.find((t=>t.position===h));l&&l.items.push(r)}const n=document.createElement("div");n.classList.add("fancybox__toolbar");for(const t of s)if(t.items.length){const e=document.createElement("div");e.classList.add("fancybox__toolbar__items"),e.classList.add(`fancybox__toolbar__items--${t.position}`);for(const i of t.items)e.appendChild(this.createElement(i));n.appendChild(e)}this.fancybox.$carousel.parentNode.insertBefore(n,this.fancybox.$carousel),this.$container=n}update(){const t=this.fancybox.getSlide(),e=t.index,i=this.fancybox.items.length,s=t.downloadSrc||("image"!==t.type||t.error?null:t.src);for(const t of this.fancybox.$container.querySelectorAll("a.fancybox__button--download"))s?(t.removeAttribute("disabled"),t.removeAttribute("tabindex"),t.setAttribute("href",s),t.setAttribute("download",s),t.setAttribute("target","_blank")):(t.setAttribute("disabled",""),t.setAttribute("tabindex",-1),t.removeAttribute("href"),t.removeAttribute("download"));const o=t.Panzoom,n=o&&o.option("maxScale")>o.option("baseScale");for(const t of this.fancybox.$container.querySelectorAll(".fancybox__button--zoom"))n?t.removeAttribute("disabled"):t.setAttribute("disabled","");for(const e of this.fancybox.$container.querySelectorAll("[data-fancybox-index]"))e.innerHTML=t.index+1;for(const t of this.fancybox.$container.querySelectorAll("[data-fancybox-count]"))t.innerHTML=i;if(!this.fancybox.option("infinite")){for(const t of this.fancybox.$container.querySelectorAll("[data-fancybox-prev]"))0===e?t.setAttribute("disabled",""):t.removeAttribute("disabled");for(const t of this.fancybox.$container.querySelectorAll("[data-fancybox-next]"))e===i-1?t.setAttribute("disabled",""):t.removeAttribute("disabled")}}cleanup(){this.Slideshow&&this.Slideshow.isActive()&&this.Slideshow.clearTimer(),this.$container&&this.$container.remove(),this.$container=null}attach(){this.fancybox.on(this.events)}detach(){this.fancybox.off(this.events),this.cleanup()}}A.defaults=L;const k={ScrollLock:class{constructor(t){this.fancybox=t,this.viewport=null,this.pendingUpdate=null;for(const t of["onReady","onResize","onTouchstart","onTouchmove"])this[t]=this[t].bind(this)}onReady(){const t=window.visualViewport;t&&(this.viewport=t,this.startY=0,t.addEventListener("resize",this.onResize),this.updateViewport()),window.addEventListener("touchstart",this.onTouchstart,{passive:!1}),window.addEventListener("touchmove",this.onTouchmove,{passive:!1})}onResize(){this.updateViewport()}updateViewport(){const t=this.fancybox,e=this.viewport,i=e.scale||1,s=t.$container;if(!s)return;let o="",n="",a="";i-1>.1&&(o=e.width*i+"px",n=e.height*i+"px",a=`translate3d(${e.offsetLeft}px, ${e.offsetTop}px, 0) scale(${1/i})`),s.style.width=o,s.style.height=n,s.style.transform=a}onTouchstart(t){this.startY=t.touches?t.touches[0].screenY:t.screenY}onTouchmove(t){const e=this.startY,i=window.innerWidth/window.document.documentElement.clientWidth;if(t.touches.length>1||1!==i)return;const s=t.target,o=h(s);if(!o)return void t.preventDefault();const n=window.getComputedStyle(o),a=parseInt(n.getPropertyValue("height"),10),r=t.touches?t.touches[0].screenY:t.screenY,l=e<=r&&0===o.scrollTop,c=e>=r&&o.scrollHeight-o.scrollTop===a;(l||c)&&t.preventDefault()}cleanup(){this.pendingUpdate&&(cancelAnimationFrame(this.pendingUpdate),this.pendingUpdate=null);const t=this.viewport;t&&(t.removeEventListener("resize",this.onResize),this.viewport=null),window.removeEventListener("touchstart",this.onTouchstart,!1),window.removeEventListener("touchmove",this.onTouchmove,!1)}attach(){this.fancybox.on("initLayout",this.onReady)}detach(){this.fancybox.off("initLayout",this.onReady),this.cleanup()}},Thumbs:v,Html:$,Toolbar:A,Image:C,Hash:E};const z={startIndex:0,preload:1,infinite:!0,showClass:"fancybox-zoomInUp",hideClass:"fancybox-fadeOut",animated:!0,hideScrollbar:!0,parentEl:null,mainClass:null,autoFocus:!0,trapFocus:!0,placeFocusBack:!0,click:"close",closeButton:"inside",dragToClose:!0,keyboard:{Escape:"close",Delete:"close",Backspace:"close",PageUp:"next",PageDown:"prev",ArrowUp:"next",ArrowDown:"prev",ArrowRight:"next",ArrowLeft:"prev"},template:{closeButton:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',spinner:'<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',main:null},l10n:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",MODAL:"You can close this modal content with the ESC key",ERROR:"Something Went Wrong, Please Try Again Later",IMAGE_ERROR:"Image Not Found",ELEMENT_NOT_FOUND:"HTML Element Not Found",AJAX_NOT_FOUND:"Error Loading AJAX : Not Found",AJAX_FORBIDDEN:"Error Loading AJAX : Forbidden",IFRAME_ERROR:"Error Loading Page",TOGGLE_ZOOM:"Toggle zoom level",TOGGLE_THUMBS:"Toggle thumbnails",TOGGLE_SLIDESHOW:"Toggle slideshow",TOGGLE_FULLSCREEN:"Toggle full-screen mode",DOWNLOAD:"Download"}},_={};let O=0;class M extends l{constructor(t,i={}){super(e(!0,{},z,i)),this.bindHandlers(),this.state="init",this.setItems(t),this.attachPlugins(M.Plugins),this.trigger("init"),!0===this.option("hideScrollbar")&&this.hideScrollbar(),this.initLayout(),this.initCarousel(),this.attachEvents(),_[this.id]=this,this.trigger("prepare"),this.state="ready",this.trigger("ready"),this.$container.setAttribute("aria-hidden","false"),this.option("trapFocus")&&this.focus()}bindHandlers(){for(const t of["onMousedown","onKeydown","onClick","onFocus","onCreateSlide","onTouchMove","onTouchEnd","onTransform"])this[t]=this[t].bind(this)}attachEvents(){document.addEventListener("mousedown",this.onMousedown),document.addEventListener("keydown",this.onKeydown,!0),this.option("trapFocus")&&document.addEventListener("focus",this.onFocus,!0),this.$container.addEventListener("click",this.onClick)}detachEvents(){document.removeEventListener("mousedown",this.onMousedown),document.removeEventListener("keydown",this.onKeydown,!0),document.removeEventListener("focus",this.onFocus,!0),this.$container.removeEventListener("click",this.onClick)}initLayout(){this.$root=this.option("parentEl")||document.body;let t=this.option("template.main");t&&(this.$root.insertAdjacentHTML("beforeend",this.localize(t)),this.$container=this.$root.querySelector(".fancybox__container")),this.$container||(this.$container=document.createElement("div"),this.$root.appendChild(this.$container)),this.$container.onscroll=()=>(this.$container.scrollLeft=0,!1),Object.entries({class:"fancybox__container",role:"dialog","aria-modal":"true","aria-hidden":"true","aria-label":this.localize("{{MODAL}}")}).forEach((t=>this.$container.setAttribute(...t))),this.option("animated")&&this.$container.classList.add("is-animated"),this.$backdrop=this.$container.querySelector(".fancybox__backdrop"),this.$backdrop||(this.$backdrop=document.createElement("div"),this.$backdrop.classList.add("fancybox__backdrop"),this.$container.appendChild(this.$backdrop)),this.$carousel=this.$container.querySelector(".fancybox__carousel"),this.$carousel||(this.$carousel=document.createElement("div"),this.$carousel.classList.add("fancybox__carousel"),this.$container.appendChild(this.$carousel)),this.$container.Fancybox=this,this.id=this.$container.getAttribute("id"),this.id||(this.id=this.options.id||++O,this.$container.setAttribute("id","fancybox-"+this.id));const e=this.options.mainClass;return e&&this.$container.classList.add(...e.split(" ")),document.documentElement.classList.add("with-fancybox"),this.trigger("initLayout"),this}setItems(t){const e=[];for(const i of t){const t=i.$trigger;if(t){const e=t.dataset||{};i.src=e.src||t.getAttribute("href")||i.src,i.type=e.type||i.type,!i.src&&t instanceof HTMLImageElement&&(i.src=t.currentSrc||i.$trigger.src)}let s=i.$thumb;if(!s){let t=i.$trigger&&i.$trigger.origTarget;t&&(s=t instanceof HTMLImageElement?t:t.querySelector("img")),!s&&i.$trigger&&(s=i.$trigger instanceof HTMLImageElement?i.$trigger:i.$trigger.querySelector("img"))}i.$thumb=s||null;let o=i.thumb;!o&&i.$thumb&&(o=s.currentSrc||s.src),o||"image"!==i.type||(o=i.src),i.thumb=o||null,i.caption=i.caption||"",e.push(i)}this.items=e}initCarousel(){return this.Carousel=new y(this.$carousel,e(!0,{},{prefix:"",classNames:{viewport:"fancybox__viewport",track:"fancybox__track",slide:"fancybox__slide"},textSelection:!0,preload:this.option("preload"),friction:.88,slides:this.items,initialPage:this.options.startIndex,slidesPerPage:1,infiniteX:this.option("infinite"),infiniteY:!0,l10n:this.option("l10n"),Dots:!1,Navigation:{classNames:{main:"fancybox__nav",button:"carousel__button",next:"is-next",prev:"is-prev"}},Panzoom:{textSelection:!0,panOnlyZoomed:()=>this.Carousel&&this.Carousel.pages&&this.Carousel.pages.length<2&&!this.options.dragToClose,lockAxis:()=>{if(this.Carousel){let t="x";return this.options.dragToClose&&(t+="y"),t}}},on:{"*":(t,...e)=>this.trigger(`Carousel.${t}`,...e),init:t=>this.Carousel=t,createSlide:this.onCreateSlide}},this.option("Carousel"))),this.option("dragToClose")&&this.Carousel.Panzoom.on({touchMove:this.onTouchMove,afterTransform:this.onTransform,touchEnd:this.onTouchEnd}),this.trigger("initCarousel"),this}onCreateSlide(t,e){let i=e.caption||"";if("function"==typeof this.options.caption&&(i=this.options.caption.call(this,this,this.Carousel,e)),"string"==typeof i&&i.length){const t=document.createElement("div"),s=`fancybox__caption_${this.id}_${e.index}`;t.className="fancybox__caption",t.innerHTML=i,t.setAttribute("id",s),e.$caption=e.$el.appendChild(t),e.$el.classList.add("has-caption"),e.$el.setAttribute("aria-labelledby",s)}}onFocus(t){this.focus(t)}onClick(t){if(t.defaultPrevented)return;if(t.target.closest(".fancybox__content"))return;if(getSelection().toString().length)return;if(!1===this.trigger("click",t))return;switch(this.option("click")){case"close":this.close();break;case"next":this.next()}}onTouchMove(){const t=this.getSlide().Panzoom;return!t||1===t.content.scale}onTouchEnd(t){const e=t.dragOffset.y;Math.abs(e)>=150||Math.abs(e)>=35&&t.dragOffset.time<350?(this.option("hideClass")&&(this.getSlide().hideClass="fancybox-throwOut"+(t.content.y<0?"Up":"Down")),this.close()):"y"===t.lockAxis&&t.panTo({y:0})}onTransform(t){if(this.$backdrop){const e=Math.abs(t.content.y),i=e<1?"":Math.max(.33,Math.min(1,1-e/t.content.fitHeight*1.5));this.$container.style.setProperty("--fancybox-ts",i?"0s":""),this.$container.style.setProperty("--fancybox-opacity",i)}}onMousedown(){document.body.classList.add("is-using-mouse")}onKeydown(t){if(M.getInstance().id!==this.id)return;document.body.classList.remove("is-using-mouse");const e=t.key,i=this.option("keyboard");if(!i||t.ctrlKey||t.altKey||t.shiftKey)return;const s=document.activeElement&&document.activeElement.classList,o=s&&s.contains("carousel__button");if("Escape"!==e&&!o){if(t.target.isContentEditable||-1!==["BUTTON","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(t.target.nodeName))return}if(!1===this.trigger("keydown",e,t))return;const n=i[e];"function"==typeof this[n]&&this[n]()}getSlide(){const t=this.Carousel;if(!t)return null;const e=null===t.page?t.option("initialPage"):t.page,i=t.pages||[];return i.length&&i[e]?i[e].slides[0]:null}focus(t){const e=t=>{if(t){this.ignoreFocusChange=!0;try{t.setActive?t.setActive():M.preventScrollSupported?t.focus({preventScroll:!0}):t.focus()}catch(t){}this.ignoreFocusChange=!1}};if(this.ignoreFocusChange)return;if(["init","closing","customClosing","destroy"].indexOf(this.state)>-1)return;const i=this.getSlide().$el;if(!i)return;t&&t.preventDefault();const s=Array.from(this.$container.querySelectorAll(["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])']));let o,n,a=[];for(let t of s){const e=i.contains(t);e||!this.Carousel.$viewport.contains(t)?(a.push(t),void 0!==t.dataset.origTabindex&&(t.tabIndex=t.dataset.tabindex,t.removeAttribute("data-tabindex")),t.hasAttribute("autoFocus")||!o&&e?o=t:t.matches(".fancybox__button--close")&&(n=t)):(t.dataset.origTabindex=void 0===t.dataset.origTabindex?t.getAttribute("tabindex"):t.dataset.origTabindex,t.tabIndex=-1)}if(a.indexOf(document.activeElement)>-1)this.lastFocus=document.activeElement;else if(t){if(!i.contains(document.activeElement)){if(this.lastFocus===a[0])e(a[a.length-1]);else{let t=a.indexOf(this.lastFocus);t<a.length-2?e(a[t+1]):e(a[0])}this.lastFocus=document.activeElement}}else e(o||n||a[0])}hideScrollbar(){if(!b)return;const t=window.innerWidth-document.documentElement.getBoundingClientRect().width,e="fancybox-style-noscroll";let i=document.getElementById(e);i||t>0&&(i=document.createElement("style"),i.id=e,i.type="text/css",i.innerHTML=`.compensate-for-scrollbar {padding-right: ${t}px;}`,document.getElementsByTagName("head")[0].appendChild(i),document.body.classList.add("compensate-for-scrollbar"))}revealScrollbar(){document.body.classList.remove("compensate-for-scrollbar");const t=document.getElementById("fancybox-style-noscroll");t&&t.remove()}clearContent(t){this.Carousel.trigger("removeSlide",t),t.$content&&(t.$content.remove(),t.$content=null),t._className&&t.$el.classList.remove(t._className)}setContent(t,e,i={}){let s;const o=t.$el;if(e instanceof HTMLElement)["img","iframe","video","audio"].indexOf(e.nodeName.toLowerCase())>-1?(s=document.createElement("div"),s.appendChild(e)):s=e;else{const t=document.createRange().createContextualFragment(e);s=document.createElement("div"),s.appendChild(t)}if(!(s instanceof Element))throw new Error("Element expected");return t._className=`has-${i.suffix||t.type||"unknown"}`,o.classList.add(t._className),s.classList.add("fancybox__content"),"none"!==s.style.display&&"none"!==getComputedStyle(s).getPropertyValue("display")||(s.style.display=t.display||this.option("defaultDisplay")||"flex"),t.id&&s.setAttribute("id",t.id),t.$content=s,o.prepend(s),this.manageCloseButton(t),"loading"!==t.state&&this.revealContent(t),s}manageCloseButton(t){const e=void 0===t.closeButton?this.option("closeButton"):t.closeButton;if(!e||"top"===e&&this.$closeButton)return;const i=document.createElement("button");i.classList.add("carousel__button","is-close"),i.setAttribute("title",this.options.l10n.CLOSE),i.innerHTML=this.option("template.closeButton"),i.addEventListener("click",(t=>this.close(t))),"inside"===e?(t.$closeButton&&t.$closeButton.remove(),t.$closeButton=t.$content.appendChild(i)):this.$closeButton=this.$container.insertBefore(i,this.$container.firstChild)}revealContent(t){this.trigger("reveal",t),t.$content.style.visibility="";let e=!1;t.error||"loading"===t.state||null!==this.Carousel.prevPage||t.index!==this.options.startIndex||(e=void 0===t.showClass?this.option("showClass"):t.showClass),e?(t.state="animating",this.animateCSS(t.$content,e,(()=>{this.done(t)}))):this.done(t)}animateCSS(t,e,i){if(t&&t.dispatchEvent(new CustomEvent("animationend",{bubbles:!0,cancelable:!0})),!t||!e)return void("function"==typeof i&&i());const s=function(o){o.currentTarget===this&&(t.removeEventListener("animationend",s),i&&i(),t.classList.remove(e))};t.addEventListener("animationend",s),t.classList.add(e)}done(t){t.state="done",this.trigger("done",t);const e=this.getSlide();e&&t.index===e.index&&this.option("autoFocus")&&this.focus()}setError(t,e){t.error=e,this.hideLoading(t),this.clearContent(t);const i=document.createElement("div");i.classList.add("fancybox-error"),i.innerHTML=this.localize(e||"<p>{{ERROR}}</p>"),this.setContent(t,i,{suffix:"error"})}showLoading(t){t.state="loading",t.$el.classList.add("is-loading");let e=t.$el.querySelector(".fancybox__spinner");e||(e=document.createElement("div"),e.classList.add("fancybox__spinner"),e.innerHTML=this.option("template.spinner"),e.addEventListener("click",(()=>{this.Carousel.Panzoom.velocity||this.close()})),t.$el.prepend(e))}hideLoading(t){const e=t.$el&&t.$el.querySelector(".fancybox__spinner");e&&(e.remove(),t.$el.classList.remove("is-loading")),"loading"===t.state&&(this.trigger("load",t),t.state="ready")}next(){const t=this.Carousel;t&&t.pages.length>1&&t.slideNext()}prev(){const t=this.Carousel;t&&t.pages.length>1&&t.slidePrev()}jumpTo(...t){this.Carousel&&this.Carousel.slideTo(...t)}close(t){if(t&&t.preventDefault(),["closing","customClosing","destroy"].includes(this.state))return;if(!1===this.trigger("shouldClose",t))return;if(this.state="closing",this.Carousel.Panzoom.destroy(),this.detachEvents(),this.trigger("closing",t),"destroy"===this.state)return;this.$container.setAttribute("aria-hidden","true"),this.$container.classList.add("is-closing");const e=this.getSlide();if(this.Carousel.slides.forEach((t=>{t.$content&&t.index!==e.index&&this.Carousel.trigger("removeSlide",t)})),"closing"===this.state){const t=void 0===e.hideClass?this.option("hideClass"):e.hideClass;this.animateCSS(e.$content,t,(()=>{this.destroy()}),!0)}}destroy(){this.state="destroy",this.trigger("destroy");const t=this.option("placeFocusBack")?this.getSlide().$trigger:null;if(this.Carousel.destroy(),this.detachPlugins(),this.Carousel=null,this.options={},this.events={},this.$container.remove(),this.$container=this.$backdrop=this.$carousel=null,t)if(M.preventScrollSupported)t.focus({preventScroll:!0});else{const e=document.body.scrollTop;t.focus(),document.body.scrollTop=e}delete _[this.id];const e=M.getInstance();e?e.focus():(document.documentElement.classList.remove("with-fancybox"),document.body.classList.remove("is-using-mouse"),this.revealScrollbar())}static show(t,e={}){return new M(t,e)}static fromEvent(t,e={}){if(t.defaultPrevented)return;if(t.button&&0!==t.button)return;if(t.ctrlKey||t.metaKey||t.shiftKey)return;let i,s,o,n=t.target;if((n.matches("[data-fancybox-trigger]")||(n=n.closest("[data-fancybox-trigger]")))&&(i=n&&n.dataset&&n.dataset.fancyboxTrigger),i){const t=document.querySelectorAll(`[data-fancybox="${i}"]`),e=parseInt(n.dataset.fancyboxIndex,10)||0;n=t.length?t[e]:n}n||(n=t.target),Array.from(M.openers.keys()).reverse().some((e=>{o=n;let i=!1;try{o instanceof Element&&("string"==typeof e||e instanceof String)&&(i=o.matches(e)||(o=o.closest(e)))}catch(t){}return!!i&&(t.preventDefault(),s=e,!0)}));let a=!1;if(s){e.event=t,e.target=o,o.origTarget=t.target,a=M.fromOpener(s,e);const i=M.getInstance();i&&"ready"===i.state&&t.detail&&document.body.classList.add("is-using-mouse")}return a}static fromOpener(t,i={}){let s=[],o=i.startIndex||0,n=i.target||null;const a=void 0===(i=e({},i,M.openers.get(t))).groupAttr?"data-fancybox":i.groupAttr,r=a&&n&&n.getAttribute(`${a}`),h=void 0!==i.groupAll&&i.groupAll;if(h||r?(s=[].slice.call(document.querySelectorAll(t)),h||(s=s.filter((t=>t.getAttribute(`${a}`)===r)))):s=[n],!s.length)return!1;const l=M.getInstance();return!(l&&s.indexOf(l.options.$trigger)>-1)&&(o=n?s.indexOf(n):o,s=s.map((function(t){const e=["false","0","no","null","undefined"],i=["true","1","yes"],s=Object.assign({},t.dataset),o={};for(let[t,n]of Object.entries(s))if("fancybox"!==t)if("width"===t||"height"===t)o[`_${t}`]=n;else if("string"==typeof n||n instanceof String)if(e.indexOf(n)>-1)o[t]=!1;else if(i.indexOf(o[t])>-1)o[t]=!0;else try{o[t]=JSON.parse(n)}catch(e){o[t]=n}else o[t]=n;return t instanceof Element&&(o.$trigger=t),o})),new M(s,e({},i,{startIndex:o,$trigger:n})))}static bind(t,e={}){function i(){document.body.addEventListener("click",M.fromEvent,!1)}b&&(M.openers.size||(/complete|interactive|loaded/.test(document.readyState)?i():document.addEventListener("DOMContentLoaded",i)),M.openers.set(t,e))}static unbind(t){M.openers.delete(t),M.openers.size||M.destroy()}static destroy(){let t;for(;t=M.getInstance();)t.destroy();M.openers=new Map,document.body.removeEventListener("click",M.fromEvent,!1)}static getInstance(t){if(t)return _[t];return Object.values(_).reverse().find((t=>!["closing","customClosing","destroy"].includes(t.state)&&t))||null}static close(t=!0){let e=null;for(;e=M.getInstance();)if(e.close(),!t)return}}M.version="4.0.5",M.defaults=z,M.openers=new Map,M.Plugins=k,M.bind("[data-fancybox]");for(const[t,e]of Object.entries(M.Plugins||{}))"function"==typeof e.create&&e.create(M);


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@fancyapps/ui/dist/fancybox.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./node_modules/@fancyapps/ui/dist/fancybox.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".not-selectable{-webkit-user-select:none;-ms-user-select:none;user-select:none}.carousel{position:relative;box-sizing:border-box}.carousel *,.carousel *:before,.carousel *:after{box-sizing:inherit}.carousel.is-draggable{cursor:move;cursor:grab}.carousel.is-dragging{cursor:move;cursor:grabbing}.carousel__viewport{position:relative;overflow:hidden;max-width:100%;max-height:100%}.carousel__track{display:flex}.carousel__slide{flex:0 0 auto;width:var(--carousel-slide-width, 60%);max-width:100%;padding:1rem;position:relative;overflow-x:hidden;overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;touch-action:pan-y}.has-dots{margin-bottom:calc(0.5rem + 22px)}.carousel__dots{margin:0 auto;padding:0;position:absolute;top:calc(100% + 0.5rem);left:0;right:0;display:flex;justify-content:center;list-style:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.carousel__dots .carousel__dot{margin:0;padding:0;display:block;position:relative;width:22px;height:22px;cursor:pointer}.carousel__dots .carousel__dot:after{content:\"\";width:8px;height:8px;border-radius:50%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);background-color:currentColor;opacity:.25;transition:opacity .15s ease-in-out}.carousel__dots .carousel__dot.is-selected:after{opacity:1}.carousel__button{width:var(--carousel-button-width, 48px);height:var(--carousel-button-height, 48px);padding:0;border:0;display:flex;justify-content:center;align-items:center;pointer-events:all;cursor:pointer;color:var(--carousel-button-color, currentColor);background:var(--carousel-button-bg, transparent);border-radius:var(--carousel-button-border-radius, 50%);box-shadow:var(--carousel-button-shadow, none);transition:opacity .15s ease}.carousel__button.is-prev,.carousel__button.is-next{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.carousel__button.is-prev{left:10px}.carousel__button.is-next{right:10px}.carousel__button[disabled]{cursor:default;opacity:.3}.carousel__button svg{width:var(--carousel-button-svg-width, 50%);height:var(--carousel-button-svg-height, 50%);fill:none;stroke:currentColor;stroke-width:var(--carousel-button-svg-stroke-width, 1.5);stroke-linejoin:bevel;stroke-linecap:round;-webkit-filter:var(--carousel-button-svg-filter, none);filter:var(--carousel-button-svg-filter, none);pointer-events:none}body.compensate-for-scrollbar{overflow:hidden !important;touch-action:none}.fancybox__container{position:fixed;top:0;left:0;bottom:0;right:0;direction:ltr;margin:0;padding:env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px);box-sizing:border-box;display:flex;flex-direction:column;color:var(--fancybox-color, #fff);-webkit-tap-highlight-color:transparent;overflow:hidden;z-index:1050;outline:none;-webkit-transform-origin:top left;transform-origin:top left;--carousel-button-width: 48px;--carousel-button-height: 48px;--carousel-button-svg-width: 24px;--carousel-button-svg-height: 24px;--carousel-button-svg-stroke-width: 2.5;--carousel-button-svg-filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4))}.fancybox__container *,.fancybox__container *::before,.fancybox__container *::after{box-sizing:inherit}.fancybox__container :focus{outline:thin dotted}body.is-using-mouse .fancybox__container :focus{outline:none}@media all and (min-width: 1024px){.fancybox__container{--carousel-button-width:48px;--carousel-button-height:48px;--carousel-button-svg-width:27px;--carousel-button-svg-height:27px}}.fancybox__backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;background:var(--fancybox-bg, rgba(24, 24, 27, 0.92))}.fancybox__carousel{position:relative;flex:1 1 auto;min-height:0;height:100%;z-index:10}.fancybox__carousel.has-dots{margin-bottom:calc(0.5rem + 22px)}.fancybox__viewport{position:relative;width:100%;height:100%;overflow:visible;cursor:default}.fancybox__track{display:flex;height:100%}.fancybox__slide{flex:0 0 auto;width:100%;max-width:100%;margin:0;padding:48px 8px 8px 8px;position:relative;-ms-scroll-chaining:none;overscroll-behavior:contain;display:flex;flex-direction:column;outline:0;overflow:auto;-webkit-overflow-scrolling:touch;--carousel-button-width: 36px;--carousel-button-height: 36px;--carousel-button-svg-width: 22px;--carousel-button-svg-height: 22px}.fancybox__slide::before,.fancybox__slide::after{content:\"\";flex:0 0 0;margin:auto}@media all and (min-width: 1024px){.fancybox__slide{padding:64px 100px}}.fancybox__content{margin:0 env(safe-area-inset-right, 0px) 0 env(safe-area-inset-left, 0px);padding:36px;color:var(--fancybox-content-color, #374151);background:var(--fancybox-content-bg, #fff);position:relative;align-self:center;display:flex;flex-direction:column;z-index:20}.fancybox__caption{align-self:center;max-width:100%;margin:0;padding:1rem 0 0 0;line-height:1.375;color:var(--fancybox-color, currentColor);visibility:visible;cursor:auto;flex-shrink:0;overflow-wrap:anywhere}.is-loading .fancybox__caption{visibility:hidden}.fancybox__container>.carousel__dots{top:100%;color:var(--fancybox-color, #fff)}.fancybox__nav .carousel__button{z-index:40}.fancybox__nav .carousel__button.is-next{right:8px}@media all and (min-width: 1024px){.fancybox__nav .carousel__button.is-next{right:40px}}.fancybox__nav .carousel__button.is-prev{left:8px}@media all and (min-width: 1024px){.fancybox__nav .carousel__button.is-prev{left:40px}}.carousel__button.is-close{position:absolute;top:8px;right:8px;top:calc(env(safe-area-inset-top, 0px) + 8px);right:calc(env(safe-area-inset-right, 0px) + 8px);z-index:40}@media all and (min-width: 1024px){.carousel__button.is-close{right:40px}}.fancybox__content>.carousel__button.is-close{position:absolute;top:-36px;right:0;color:var(--fancybox-color, #fff)}.fancybox__no-click,.fancybox__no-click button{pointer-events:none}.fancybox__spinner{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);width:50px;height:50px;color:var(--fancybox-color, currentColor)}.fancybox__slide .fancybox__spinner{cursor:pointer;z-index:1053}.fancybox__spinner svg{-webkit-animation:fancybox-rotate 2s linear infinite;animation:fancybox-rotate 2s linear infinite;-webkit-transform-origin:center center;transform-origin:center center;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:100%;height:100%}.fancybox__spinner svg circle{fill:none;stroke-width:2.75;stroke-miterlimit:10;stroke-dasharray:1,200;stroke-dashoffset:0;-webkit-animation:fancybox-dash 1.5s ease-in-out infinite;animation:fancybox-dash 1.5s ease-in-out infinite;stroke-linecap:round;stroke:currentColor}@-webkit-keyframes fancybox-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fancybox-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes fancybox-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes fancybox-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}.fancybox__backdrop,.fancybox__caption,.fancybox__nav,.carousel__dots,.carousel__button.is-close{opacity:var(--fancybox-opacity, 1)}.fancybox__container.is-animated[aria-hidden=false] .fancybox__backdrop,.fancybox__container.is-animated[aria-hidden=false] .fancybox__caption,.fancybox__container.is-animated[aria-hidden=false] .fancybox__nav,.fancybox__container.is-animated[aria-hidden=false] .carousel__dots,.fancybox__container.is-animated[aria-hidden=false] .carousel__button.is-close{-webkit-animation:.15s ease backwards fancybox-fadeIn;animation:.15s ease backwards fancybox-fadeIn}.fancybox__container.is-animated.is-closing .fancybox__backdrop,.fancybox__container.is-animated.is-closing .fancybox__caption,.fancybox__container.is-animated.is-closing .fancybox__nav,.fancybox__container.is-animated.is-closing .carousel__dots,.fancybox__container.is-animated.is-closing .carousel__button.is-close{-webkit-animation:.15s ease both fancybox-fadeOut;animation:.15s ease both fancybox-fadeOut}.fancybox-fadeIn{-webkit-animation:.15s ease both fancybox-fadeIn;animation:.15s ease both fancybox-fadeIn}.fancybox-fadeOut{-webkit-animation:.1s ease both fancybox-fadeOut;animation:.1s ease both fancybox-fadeOut}.fancybox-zoomInUp{-webkit-animation:.2s ease both fancybox-zoomInUp;animation:.2s ease both fancybox-zoomInUp}.fancybox-zoomOutDown{-webkit-animation:.15s ease both fancybox-zoomOutDown;animation:.15s ease both fancybox-zoomOutDown}.fancybox-throwOutUp{-webkit-animation:.15s ease both fancybox-throwOutUp;animation:.15s ease both fancybox-throwOutUp}.fancybox-throwOutDown{-webkit-animation:.15s ease both fancybox-throwOutDown;animation:.15s ease both fancybox-throwOutDown}@-webkit-keyframes fancybox-fadeIn{from{opacity:0}to{opacity:1}}@keyframes fancybox-fadeIn{from{opacity:0}to{opacity:1}}@-webkit-keyframes fancybox-fadeOut{to{opacity:0}}@keyframes fancybox-fadeOut{to{opacity:0}}@-webkit-keyframes fancybox-zoomInUp{from{-webkit-transform:scale(0.97) translate3d(0, 16px, 0);transform:scale(0.97) translate3d(0, 16px, 0);opacity:0}to{-webkit-transform:scale(1) translate3d(0, 0, 0);transform:scale(1) translate3d(0, 0, 0);opacity:1}}@keyframes fancybox-zoomInUp{from{-webkit-transform:scale(0.97) translate3d(0, 16px, 0);transform:scale(0.97) translate3d(0, 16px, 0);opacity:0}to{-webkit-transform:scale(1) translate3d(0, 0, 0);transform:scale(1) translate3d(0, 0, 0);opacity:1}}@-webkit-keyframes fancybox-zoomOutDown{to{-webkit-transform:scale(0.97) translate3d(0, 16px, 0);transform:scale(0.97) translate3d(0, 16px, 0);opacity:0}}@keyframes fancybox-zoomOutDown{to{-webkit-transform:scale(0.97) translate3d(0, 16px, 0);transform:scale(0.97) translate3d(0, 16px, 0);opacity:0}}@-webkit-keyframes fancybox-throwOutUp{to{-webkit-transform:translate3d(0, -30%, 0);transform:translate3d(0, -30%, 0);opacity:0}}@keyframes fancybox-throwOutUp{to{-webkit-transform:translate3d(0, -30%, 0);transform:translate3d(0, -30%, 0);opacity:0}}@-webkit-keyframes fancybox-throwOutDown{to{-webkit-transform:translate3d(0, 30%, 0);transform:translate3d(0, 30%, 0);opacity:0}}@keyframes fancybox-throwOutDown{to{-webkit-transform:translate3d(0, 30%, 0);transform:translate3d(0, 30%, 0);opacity:0}}.fancybox__carousel .carousel__slide{scrollbar-width:thin;scrollbar-color:#ccc rgba(255,255,255,.1)}.fancybox__carousel .carousel__slide::-webkit-scrollbar{width:8px;height:8px}.fancybox__carousel .carousel__slide::-webkit-scrollbar-track{background-color:rgba(255,255,255,.1)}.fancybox__carousel .carousel__slide::-webkit-scrollbar-thumb{background-color:#ccc;border-radius:2px;box-shadow:inset 0 0 4px rgba(0,0,0,.2)}.fancybox__carousel.is-draggable .fancybox__slide,.fancybox__carousel.is-draggable .fancybox__slide .fancybox__content{cursor:move;cursor:grab}.fancybox__carousel.is-dragging .fancybox__slide,.fancybox__carousel.is-dragging .fancybox__slide .fancybox__content{cursor:move;cursor:grabbing}.fancybox__carousel .fancybox__slide .fancybox__content{cursor:auto}.fancybox__carousel .fancybox__slide.can-zoom_in .fancybox__content{cursor:zoom-in}.fancybox__carousel .fancybox__slide.can-zoom_out .fancybox__content{cursor:zoom-out}.fancybox__carousel .fancybox__slide.is-draggable .fancybox__content{cursor:move;cursor:grab}.fancybox__carousel .fancybox__slide.is-dragging .fancybox__content{cursor:move;cursor:grabbing}.fancybox__image{-webkit-transform-origin:0 0;transform-origin:0 0;touch-action:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;transition:none}.has-image .fancybox__content{padding:0;background:transparent;min-height:1px}.is-closing .has-image .fancybox__content{overflow:visible}.has-image[data-image-fit=contain]{overflow:visible;touch-action:none}.has-image[data-image-fit=contain] .fancybox__image{max-width:100%;max-height:100%;object-fit:contain}.has-image[data-image-fit=contain-w]{overflow-x:hidden;overflow-y:auto}.has-image[data-image-fit=contain-w] .fancybox__content{min-height:auto}.has-image[data-image-fit=contain-w] .fancybox__image{max-width:100%;height:auto}.has-image[data-image-fit=cover]{overflow:visible;touch-action:none}.has-image[data-image-fit=cover] .fancybox__content{width:100%;height:100%}.has-image[data-image-fit=cover] .fancybox__image{width:100%;height:100%;object-fit:cover}.fancybox__carousel .fancybox__slide.has-iframe .fancybox__content,.fancybox__carousel .fancybox__slide.has-map .fancybox__content,.fancybox__carousel .fancybox__slide.has-pdf .fancybox__content,.fancybox__carousel .fancybox__slide.has-video .fancybox__content,.fancybox__carousel .fancybox__slide.has-html5video .fancybox__content{flex-shrink:1;min-height:1px;overflow:visible}.fancybox__carousel .fancybox__slide.has-iframe .fancybox__content,.fancybox__carousel .fancybox__slide.has-map .fancybox__content,.fancybox__carousel .fancybox__slide.has-pdf .fancybox__content{width:100%;height:80%}.fancybox__carousel .fancybox__slide.has-video .fancybox__content,.fancybox__carousel .fancybox__slide.has-html5video .fancybox__content{width:960px;height:540px;max-width:100%;max-height:100%}.fancybox__carousel .fancybox__slide.has-map .fancybox__content,.fancybox__carousel .fancybox__slide.has-pdf .fancybox__content,.fancybox__carousel .fancybox__slide.has-video .fancybox__content,.fancybox__carousel .fancybox__slide.has-html5video .fancybox__content{padding:0;background:rgba(24,24,27,.9);color:#fff}.fancybox__carousel .fancybox__slide.has-map .fancybox__content{background:#e5e3df}.fancybox__html5video,.fancybox__iframe{border:0;display:block;height:100%;width:100%;background:transparent}.fancybox-placeholder{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.fancybox__thumbs{flex:0 0 auto;position:relative;padding:0px 3px;opacity:var(--fancybox-opacity, 1)}.fancybox__container.is-animated[aria-hidden=false] .fancybox__thumbs{-webkit-animation:.15s ease-in backwards fancybox-fadeIn;animation:.15s ease-in backwards fancybox-fadeIn}.fancybox__container.is-animated.is-closing .fancybox__thumbs{opacity:0}.fancybox__thumbs .carousel__slide{flex:0 0 auto;width:var(--fancybox-thumbs-width, 96px);margin:0;padding:8px 3px;box-sizing:content-box;display:flex;align-items:center;justify-content:center;overflow:visible;cursor:pointer}.fancybox__thumbs .carousel__slide .fancybox__thumb::after{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border:5px solid var(--fancybox-accent-color, rgba(1, 210, 232, 0.94));opacity:0;transition:opacity .15s ease;border-radius:var(--fancybox-thumbs-border-radius, 4px)}.fancybox__thumbs .carousel__slide.is-nav-selected .fancybox__thumb::after{opacity:.92}.fancybox__thumbs .carousel__slide>*{pointer-events:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.fancybox__thumb{position:relative;width:100%;padding-top:calc(100% / (var(--fancybox-thumbs-ratio, 1.5)));background-size:cover;background-position:center center;background-color:rgba(255,255,255,.1);background-repeat:no-repeat;border-radius:var(--fancybox-thumbs-border-radius, 4px)}.fancybox__toolbar{position:absolute;top:0;right:0;left:0;z-index:20;background:linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.006) 8.1%, rgba(0, 0, 0, 0.021) 15.5%, rgba(0, 0, 0, 0.046) 22.5%, rgba(0, 0, 0, 0.077) 29%, rgba(0, 0, 0, 0.114) 35.3%, rgba(0, 0, 0, 0.155) 41.2%, rgba(0, 0, 0, 0.198) 47.1%, rgba(0, 0, 0, 0.242) 52.9%, rgba(0, 0, 0, 0.285) 58.8%, rgba(0, 0, 0, 0.326) 64.7%, rgba(0, 0, 0, 0.363) 71%, rgba(0, 0, 0, 0.394) 77.5%, rgba(0, 0, 0, 0.419) 84.5%, rgba(0, 0, 0, 0.434) 91.9%, rgba(0, 0, 0, 0.44) 100%);padding:0;touch-action:none;display:flex;justify-content:space-between;--carousel-button-svg-width: 20px;--carousel-button-svg-height: 20px;opacity:var(--fancybox-opacity, 1);text-shadow:var(--fancybox-toolbar-text-shadow, 1px 1px 1px rgba(0, 0, 0, 0.4))}@media all and (min-width: 1024px){.fancybox__toolbar{padding:8px}}.fancybox__container.is-animated[aria-hidden=false] .fancybox__toolbar{-webkit-animation:.15s ease-in backwards fancybox-fadeIn;animation:.15s ease-in backwards fancybox-fadeIn}.fancybox__container.is-animated.is-closing .fancybox__toolbar{opacity:0}.fancybox__toolbar__items{display:flex}.fancybox__toolbar__items--left{margin-right:auto}.fancybox__toolbar__items--center{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.fancybox__toolbar__items--right{margin-left:auto}@media(max-width: 640px){.fancybox__toolbar__items--center:not(:last-child){display:none}}.fancybox__counter{min-width:72px;padding:0 10px;line-height:var(--carousel-button-height, 48px);text-align:center;font-size:17px;font-variant-numeric:tabular-nums;-webkit-font-smoothing:subpixel-antialiased}.fancybox__progress{background:var(--fancybox-accent-color, rgba(1, 210, 232, 0.94));height:3px;left:0;position:absolute;right:0;top:0;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0;transform-origin:0;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-timing-function:linear;z-index:30;-webkit-user-select:none;-ms-user-select:none;user-select:none}.fancybox__container:-webkit-full-screen::-webkit-backdrop{opacity:0}.fancybox__container:-webkit-full-screen::backdrop{opacity:0}.fancybox__container:-ms-fullscreen::backdrop{opacity:0}.fancybox__container:fullscreen::-webkit-backdrop{opacity:0}.fancybox__container:-webkit-full-screen::backdrop{opacity:0}.fancybox__container:-ms-fullscreen::backdrop{opacity:0}.fancybox__container:fullscreen::-webkit-backdrop{opacity:0}.fancybox__container:fullscreen::backdrop{opacity:0}.fancybox__button--fullscreen g:nth-child(2){display:none}.fancybox__container:-webkit-full-screen .fancybox__button--fullscreen g:nth-child(1){display:none}.fancybox__container:-ms-fullscreen .fancybox__button--fullscreen g:nth-child(1){display:none}.fancybox__container:fullscreen .fancybox__button--fullscreen g:nth-child(1){display:none}.fancybox__container:-webkit-full-screen .fancybox__button--fullscreen g:nth-child(2){display:block}.fancybox__container:-ms-fullscreen .fancybox__button--fullscreen g:nth-child(2){display:block}.fancybox__container:fullscreen .fancybox__button--fullscreen g:nth-child(2){display:block}.fancybox__button--slideshow g:nth-child(2){display:none}.fancybox__container.has-slideshow .fancybox__button--slideshow g:nth-child(1){display:none}.fancybox__container.has-slideshow .fancybox__button--slideshow g:nth-child(2){display:block}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/flickity/dist/flickity.min.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./node_modules/flickity/dist/flickity.min.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*! Flickity v2.2.2\nhttps://flickity.metafizzy.co\n---------------------------------------------- */\n.flickity-enabled{position:relative}.flickity-enabled:focus{outline:0}.flickity-viewport{overflow:hidden;position:relative;height:100%}.flickity-slider{position:absolute;width:100%;height:100%}.flickity-enabled.is-draggable{-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.flickity-enabled.is-draggable .flickity-viewport{cursor:move;cursor:-webkit-grab;cursor:grab}.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down{cursor:-webkit-grabbing;cursor:grabbing}.flickity-button{position:absolute;background:hsla(0,0%,100%,.75);border:none;color:#333}.flickity-button:hover{background:#fff;cursor:pointer}.flickity-button:focus{outline:0;box-shadow:0 0 0 5px #19f}.flickity-button:active{opacity:.6}.flickity-button:disabled{opacity:.3;cursor:auto;pointer-events:none}.flickity-button-icon{fill:currentColor}.flickity-prev-next-button{top:50%;width:44px;height:44px;border-radius:50%;transform:translateY(-50%)}.flickity-prev-next-button.previous{left:10px}.flickity-prev-next-button.next{right:10px}.flickity-rtl .flickity-prev-next-button.previous{left:auto;right:10px}.flickity-rtl .flickity-prev-next-button.next{right:auto;left:10px}.flickity-prev-next-button .flickity-button-icon{position:absolute;left:20%;top:20%;width:60%;height:60%}.flickity-page-dots{position:absolute;width:100%;bottom:-25px;padding:0;margin:0;list-style:none;text-align:center;line-height:1}.flickity-rtl .flickity-page-dots{direction:rtl}.flickity-page-dots .dot{display:inline-block;width:10px;height:10px;margin:0 8px;background:#333;border-radius:50%;opacity:.25;cursor:pointer}.flickity-page-dots .dot.is-selected{opacity:1}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/desandro-matches-selector/matches-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/desandro-matches-selector/matches-selector.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));


/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ "./node_modules/fizzy-ui-utils/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/fizzy-ui-utils/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! desandro-matches-selector/matches-selector */ "./node_modules/desandro-matches-selector/matches-selector.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( matchesSelector ) {
      return factory( window, matchesSelector );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));


/***/ }),

/***/ "./node_modules/flickity-as-nav-for/as-nav-for.js":
/*!********************************************************!*\
  !*** ./node_modules/flickity-as-nav-for/as-nav-for.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Flickity asNavFor v2.0.1
 * enable asNavFor for Flickity
 */

/*jshint browser: true, undef: true, unused: true, strict: true*/

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! flickity/js/index */ "./node_modules/flickity/js/index.js"),
      __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js")
    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( Flickity, utils ) {

'use strict';

// -------------------------- asNavFor prototype -------------------------- //

// Flickity.defaults.asNavFor = null;

Flickity.createMethods.push('_createAsNavFor');

var proto = Flickity.prototype;

proto._createAsNavFor = function() {
  this.on( 'activate', this.activateAsNavFor );
  this.on( 'deactivate', this.deactivateAsNavFor );
  this.on( 'destroy', this.destroyAsNavFor );

  var asNavForOption = this.options.asNavFor;
  if ( !asNavForOption ) {
    return;
  }
  // HACK do async, give time for other flickity to be initalized
  var _this = this;
  setTimeout( function initNavCompanion() {
    _this.setNavCompanion( asNavForOption );
  });
};

proto.setNavCompanion = function( elem ) {
  elem = utils.getQueryElement( elem );
  var companion = Flickity.data( elem );
  // stop if no companion or companion is self
  if ( !companion || companion == this ) {
    return;
  }

  this.navCompanion = companion;
  // companion select
  var _this = this;
  this.onNavCompanionSelect = function() {
    _this.navCompanionSelect();
  };
  companion.on( 'select', this.onNavCompanionSelect );
  // click
  this.on( 'staticClick', this.onNavStaticClick );

  this.navCompanionSelect( true );
};

proto.navCompanionSelect = function( isInstant ) {
  if ( !this.navCompanion ) {
    return;
  }
  // select slide that matches first cell of slide
  var selectedCell = this.navCompanion.selectedCells[0];
  var firstIndex = this.navCompanion.cells.indexOf( selectedCell );
  var lastIndex = firstIndex + this.navCompanion.selectedCells.length - 1;
  var selectIndex = Math.floor( lerp( firstIndex, lastIndex,
    this.navCompanion.cellAlign ) );
  this.selectCell( selectIndex, false, isInstant );
  // set nav selected class
  this.removeNavSelectedElements();
  // stop if companion has more cells than this one
  if ( selectIndex >= this.cells.length ) {
    return;
  }

  var selectedCells = this.cells.slice( firstIndex, lastIndex + 1 );
  this.navSelectedElements = selectedCells.map( function( cell ) {
    return cell.element;
  });
  this.changeNavSelectedClass('add');
};

function lerp( a, b, t ) {
  return ( b - a ) * t + a;
}

proto.changeNavSelectedClass = function( method ) {
  this.navSelectedElements.forEach( function( navElem ) {
    navElem.classList[ method ]('is-nav-selected');
  });
};

proto.activateAsNavFor = function() {
  this.navCompanionSelect( true );
};

proto.removeNavSelectedElements = function() {
  if ( !this.navSelectedElements ) {
    return;
  }
  this.changeNavSelectedClass('remove');
  delete this.navSelectedElements;
};

proto.onNavStaticClick = function( event, pointer, cellElement, cellIndex ) {
  if ( typeof cellIndex == 'number' ) {
    this.navCompanion.selectCell( cellIndex );
  }
};

proto.deactivateAsNavFor = function() {
  this.removeNavSelectedElements();
};

proto.destroyAsNavFor = function() {
  if ( !this.navCompanion ) {
    return;
  }
  this.navCompanion.off( 'select', this.onNavCompanionSelect );
  this.off( 'staticClick', this.onNavStaticClick );
  delete this.navCompanion;
};

// -----  ----- //

return Flickity;

}));


/***/ }),

/***/ "./node_modules/flickity/dist/flickity.min.css":
/*!*****************************************************!*\
  !*** ./node_modules/flickity/dist/flickity.min.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--7-1!../../postcss-loader/src??ref--7-2!./flickity.min.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/flickity/dist/flickity.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/flickity/js/add-remove-cell.js":
/*!*****************************************************!*\
  !*** ./node_modules/flickity/js/add-remove-cell.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// add, remove cell
( function( window, factory ) {
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"),
      __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"),
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Flickity, utils ) {
      return factory( window, Flickity, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, Flickity, utils ) {

'use strict';

// append cells to a document fragment
function getCellsFragment( cells ) {
  var fragment = document.createDocumentFragment();
  cells.forEach( function( cell ) {
    fragment.appendChild( cell.element );
  } );
  return fragment;
}

// -------------------------- add/remove cell prototype -------------------------- //

var proto = Flickity.prototype;

/**
 * Insert, prepend, or append cells
 * @param {[Element, Array, NodeList]} elems - Elements to insert
 * @param {Integer} index - Zero-based number to insert
 */
proto.insert = function( elems, index ) {
  var cells = this._makeCells( elems );
  if ( !cells || !cells.length ) {
    return;
  }
  var len = this.cells.length;
  // default to append
  index = index === undefined ? len : index;
  // add cells with document fragment
  var fragment = getCellsFragment( cells );
  // append to slider
  var isAppend = index == len;
  if ( isAppend ) {
    this.slider.appendChild( fragment );
  } else {
    var insertCellElement = this.cells[ index ].element;
    this.slider.insertBefore( fragment, insertCellElement );
  }
  // add to this.cells
  if ( index === 0 ) {
    // prepend, add to start
    this.cells = cells.concat( this.cells );
  } else if ( isAppend ) {
    // append, add to end
    this.cells = this.cells.concat( cells );
  } else {
    // insert in this.cells
    var endCells = this.cells.splice( index, len - index );
    this.cells = this.cells.concat( cells ).concat( endCells );
  }

  this._sizeCells( cells );
  this.cellChange( index, true );
};

proto.append = function( elems ) {
  this.insert( elems, this.cells.length );
};

proto.prepend = function( elems ) {
  this.insert( elems, 0 );
};

/**
 * Remove cells
 * @param {[Element, Array, NodeList]} elems - ELements to remove
 */
proto.remove = function( elems ) {
  var cells = this.getCells( elems );
  if ( !cells || !cells.length ) {
    return;
  }

  var minCellIndex = this.cells.length - 1;
  // remove cells from collection & DOM
  cells.forEach( function( cell ) {
    cell.remove();
    var index = this.cells.indexOf( cell );
    minCellIndex = Math.min( index, minCellIndex );
    utils.removeFrom( this.cells, cell );
  }, this );

  this.cellChange( minCellIndex, true );
};

/**
 * logic to be run after a cell's size changes
 * @param {Element} elem - cell's element
 */
proto.cellSizeChange = function( elem ) {
  var cell = this.getCell( elem );
  if ( !cell ) {
    return;
  }
  cell.getSize();

  var index = this.cells.indexOf( cell );
  this.cellChange( index );
};

/**
 * logic any time a cell is changed: added, removed, or size changed
 * @param {Integer} changedCellIndex - index of the changed cell, optional
 * @param {Boolean} isPositioningSlider - Positions slider after selection
 */
proto.cellChange = function( changedCellIndex, isPositioningSlider ) {
  var prevSelectedElem = this.selectedElement;
  this._positionCells( changedCellIndex );
  this._getWrapShiftCells();
  this.setGallerySize();
  // update selectedIndex
  // try to maintain position & select previous selected element
  var cell = this.getCell( prevSelectedElem );
  if ( cell ) {
    this.selectedIndex = this.getCellSlideIndex( cell );
  }
  this.selectedIndex = Math.min( this.slides.length - 1, this.selectedIndex );

  this.emitEvent( 'cellChange', [ changedCellIndex ] );
  // position slider
  this.select( this.selectedIndex );
  // do not position slider after lazy load
  if ( isPositioningSlider ) {
    this.positionSliderAtSelected();
  }
};

// -----  ----- //

return Flickity;

} ) );


/***/ }),

/***/ "./node_modules/flickity/js/animate.js":
/*!*********************************************!*\
  !*** ./node_modules/flickity/js/animate.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// animate
( function( window, factory ) {
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"),
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( utils ) {
      return factory( window, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, utils ) {

'use strict';

// -------------------------- animate -------------------------- //

var proto = {};

proto.startAnimation = function() {
  if ( this.isAnimating ) {
    return;
  }

  this.isAnimating = true;
  this.restingFrames = 0;
  this.animate();
};

proto.animate = function() {
  this.applyDragForce();
  this.applySelectedAttraction();

  var previousX = this.x;

  this.integratePhysics();
  this.positionSlider();
  this.settle( previousX );
  // animate next frame
  if ( this.isAnimating ) {
    var _this = this;
    requestAnimationFrame( function animateFrame() {
      _this.animate();
    } );
  }
};

proto.positionSlider = function() {
  var x = this.x;
  // wrap position around
  if ( this.options.wrapAround && this.cells.length > 1 ) {
    x = utils.modulo( x, this.slideableWidth );
    x -= this.slideableWidth;
    this.shiftWrapCells( x );
  }

  this.setTranslateX( x, this.isAnimating );
  this.dispatchScrollEvent();
};

proto.setTranslateX = function( x, is3d ) {
  x += this.cursorPosition;
  // reverse if right-to-left and using transform
  x = this.options.rightToLeft ? -x : x;
  var translateX = this.getPositionValue( x );
  // use 3D transforms for hardware acceleration on iOS
  // but use 2D when settled, for better font-rendering
  this.slider.style.transform = is3d ?
    'translate3d(' + translateX + ',0,0)' : 'translateX(' + translateX + ')';
};

proto.dispatchScrollEvent = function() {
  var firstSlide = this.slides[0];
  if ( !firstSlide ) {
    return;
  }
  var positionX = -this.x - firstSlide.target;
  var progress = positionX / this.slidesWidth;
  this.dispatchEvent( 'scroll', null, [ progress, positionX ] );
};

proto.positionSliderAtSelected = function() {
  if ( !this.cells.length ) {
    return;
  }
  this.x = -this.selectedSlide.target;
  this.velocity = 0; // stop wobble
  this.positionSlider();
};

proto.getPositionValue = function( position ) {
  if ( this.options.percentPosition ) {
    // percent position, round to 2 digits, like 12.34%
    return ( Math.round( ( position / this.size.innerWidth ) * 10000 ) * 0.01 ) + '%';
  } else {
    // pixel positioning
    return Math.round( position ) + 'px';
  }
};

proto.settle = function( previousX ) {
  // keep track of frames where x hasn't moved
  var isResting = !this.isPointerDown &&
      Math.round( this.x * 100 ) == Math.round( previousX * 100 );
  if ( isResting ) {
    this.restingFrames++;
  }
  // stop animating if resting for 3 or more frames
  if ( this.restingFrames > 2 ) {
    this.isAnimating = false;
    delete this.isFreeScrolling;
    // render position with translateX when settled
    this.positionSlider();
    this.dispatchEvent( 'settle', null, [ this.selectedIndex ] );
  }
};

proto.shiftWrapCells = function( x ) {
  // shift before cells
  var beforeGap = this.cursorPosition + x;
  this._shiftCells( this.beforeShiftCells, beforeGap, -1 );
  // shift after cells
  var afterGap = this.size.innerWidth - ( x + this.slideableWidth + this.cursorPosition );
  this._shiftCells( this.afterShiftCells, afterGap, 1 );
};

proto._shiftCells = function( cells, gap, shift ) {
  for ( var i = 0; i < cells.length; i++ ) {
    var cell = cells[i];
    var cellShift = gap > 0 ? shift : 0;
    cell.wrapShift( cellShift );
    gap -= cell.size.outerWidth;
  }
};

proto._unshiftCells = function( cells ) {
  if ( !cells || !cells.length ) {
    return;
  }
  for ( var i = 0; i < cells.length; i++ ) {
    cells[i].wrapShift( 0 );
  }
};

// -------------------------- physics -------------------------- //

proto.integratePhysics = function() {
  this.x += this.velocity;
  this.velocity *= this.getFrictionFactor();
};

proto.applyForce = function( force ) {
  this.velocity += force;
};

proto.getFrictionFactor = function() {
  return 1 - this.options[ this.isFreeScrolling ? 'freeScrollFriction' : 'friction' ];
};

proto.getRestingPosition = function() {
  // my thanks to Steven Wittens, who simplified this math greatly
  return this.x + this.velocity / ( 1 - this.getFrictionFactor() );
};

proto.applyDragForce = function() {
  if ( !this.isDraggable || !this.isPointerDown ) {
    return;
  }
  // change the position to drag position by applying force
  var dragVelocity = this.dragX - this.x;
  var dragForce = dragVelocity - this.velocity;
  this.applyForce( dragForce );
};

proto.applySelectedAttraction = function() {
  // do not attract if pointer down or no slides
  var dragDown = this.isDraggable && this.isPointerDown;
  if ( dragDown || this.isFreeScrolling || !this.slides.length ) {
    return;
  }
  var distance = this.selectedSlide.target * -1 - this.x;
  var force = distance * this.options.selectedAttraction;
  this.applyForce( force );
};

return proto;

} ) );


/***/ }),

/***/ "./node_modules/flickity/js/cell.js":
/*!******************************************!*\
  !*** ./node_modules/flickity/js/cell.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity.Cell
( function( window, factory ) {
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js"),
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( getSize ) {
      return factory( window, getSize );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, getSize ) {

'use strict';

function Cell( elem, parent ) {
  this.element = elem;
  this.parent = parent;

  this.create();
}

var proto = Cell.prototype;

proto.create = function() {
  this.element.style.position = 'absolute';
  this.element.setAttribute( 'aria-hidden', 'true' );
  this.x = 0;
  this.shift = 0;
};

proto.destroy = function() {
  // reset style
  this.unselect();
  this.element.style.position = '';
  var side = this.parent.originSide;
  this.element.style[ side ] = '';
  this.element.removeAttribute('aria-hidden');
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

proto.setPosition = function( x ) {
  this.x = x;
  this.updateTarget();
  this.renderPosition( x );
};

// setDefaultTarget v1 method, backwards compatibility, remove in v3
proto.updateTarget = proto.setDefaultTarget = function() {
  var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
  this.target = this.x + this.size[ marginProperty ] +
    this.size.width * this.parent.cellAlign;
};

proto.renderPosition = function( x ) {
  // render position of cell with in slider
  var side = this.parent.originSide;
  this.element.style[ side ] = this.parent.getPositionValue( x );
};

proto.select = function() {
  this.element.classList.add('is-selected');
  this.element.removeAttribute('aria-hidden');
};

proto.unselect = function() {
  this.element.classList.remove('is-selected');
  this.element.setAttribute( 'aria-hidden', 'true' );
};

/**
 * @param {Integer} shift - 0, 1, or -1
 */
proto.wrapShift = function( shift ) {
  this.shift = shift;
  this.renderPosition( this.x + this.parent.slideableWidth * shift );
};

proto.remove = function() {
  this.element.parentNode.removeChild( this.element );
};

return Cell;

} ) );


/***/ }),

/***/ "./node_modules/flickity/js/drag.js":
/*!******************************************!*\
  !*** ./node_modules/flickity/js/drag.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// drag
( function( window, factory ) {
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"),
      __webpack_require__(/*! unidragger/unidragger */ "./node_modules/unidragger/unidragger.js"),
      __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"),
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Flickity, Unidragger, utils ) {
      return factory( window, Flickity, Unidragger, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, Flickity, Unidragger, utils ) {

'use strict';

// ----- defaults ----- //

utils.extend( Flickity.defaults, {
  draggable: '>1',
  dragThreshold: 3,
} );

// ----- create ----- //

Flickity.createMethods.push('_createDrag');

// -------------------------- drag prototype -------------------------- //

var proto = Flickity.prototype;
utils.extend( proto, Unidragger.prototype );
proto._touchActionValue = 'pan-y';

// --------------------------  -------------------------- //

var isTouch = 'createTouch' in document;
var isTouchmoveScrollCanceled = false;

proto._createDrag = function() {
  this.on( 'activate', this.onActivateDrag );
  this.on( 'uiChange', this._uiChangeDrag );
  this.on( 'deactivate', this.onDeactivateDrag );
  this.on( 'cellChange', this.updateDraggable );
  // TODO updateDraggable on resize? if groupCells & slides change
  // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
  // #457, RubaXa/Sortable#973
  if ( isTouch && !isTouchmoveScrollCanceled ) {
    window.addEventListener( 'touchmove', function() {} );
    isTouchmoveScrollCanceled = true;
  }
};

proto.onActivateDrag = function() {
  this.handles = [ this.viewport ];
  this.bindHandles();
  this.updateDraggable();
};

proto.onDeactivateDrag = function() {
  this.unbindHandles();
  this.element.classList.remove('is-draggable');
};

proto.updateDraggable = function() {
  // disable dragging if less than 2 slides. #278
  if ( this.options.draggable == '>1' ) {
    this.isDraggable = this.slides.length > 1;
  } else {
    this.isDraggable = this.options.draggable;
  }
  if ( this.isDraggable ) {
    this.element.classList.add('is-draggable');
  } else {
    this.element.classList.remove('is-draggable');
  }
};

// backwards compatibility
proto.bindDrag = function() {
  this.options.draggable = true;
  this.updateDraggable();
};

proto.unbindDrag = function() {
  this.options.draggable = false;
  this.updateDraggable();
};

proto._uiChangeDrag = function() {
  delete this.isFreeScrolling;
};

// -------------------------- pointer events -------------------------- //

proto.pointerDown = function( event, pointer ) {
  if ( !this.isDraggable ) {
    this._pointerDownDefault( event, pointer );
    return;
  }
  var isOkay = this.okayPointerDown( event );
  if ( !isOkay ) {
    return;
  }

  this._pointerDownPreventDefault( event );
  this.pointerDownFocus( event );
  // blur
  if ( document.activeElement != this.element ) {
    // do not blur if already focused
    this.pointerDownBlur();
  }

  // stop if it was moving
  this.dragX = this.x;
  this.viewport.classList.add('is-pointer-down');
  // track scrolling
  this.pointerDownScroll = getScrollPosition();
  window.addEventListener( 'scroll', this );

  this._pointerDownDefault( event, pointer );
};

// default pointerDown logic, used for staticClick
proto._pointerDownDefault = function( event, pointer ) {
  // track start event position
  // Safari 9 overrides pageX and pageY. These values needs to be copied. #779
  this.pointerDownPointer = {
    pageX: pointer.pageX,
    pageY: pointer.pageY,
  };
  // bind move and end events
  this._bindPostStartEvents( event );
  this.dispatchEvent( 'pointerDown', event, [ pointer ] );
};

var focusNodes = {
  INPUT: true,
  TEXTAREA: true,
  SELECT: true,
};

proto.pointerDownFocus = function( event ) {
  var isFocusNode = focusNodes[ event.target.nodeName ];
  if ( !isFocusNode ) {
    this.focus();
  }
};

proto._pointerDownPreventDefault = function( event ) {
  var isTouchStart = event.type == 'touchstart';
  var isTouchPointer = event.pointerType == 'touch';
  var isFocusNode = focusNodes[ event.target.nodeName ];
  if ( !isTouchStart && !isTouchPointer && !isFocusNode ) {
    event.preventDefault();
  }
};

// ----- move ----- //

proto.hasDragStarted = function( moveVector ) {
  return Math.abs( moveVector.x ) > this.options.dragThreshold;
};

// ----- up ----- //

proto.pointerUp = function( event, pointer ) {
  delete this.isTouchScrolling;
  this.viewport.classList.remove('is-pointer-down');
  this.dispatchEvent( 'pointerUp', event, [ pointer ] );
  this._dragPointerUp( event, pointer );
};

proto.pointerDone = function() {
  window.removeEventListener( 'scroll', this );
  delete this.pointerDownScroll;
};

// -------------------------- dragging -------------------------- //

proto.dragStart = function( event, pointer ) {
  if ( !this.isDraggable ) {
    return;
  }
  this.dragStartPosition = this.x;
  this.startAnimation();
  window.removeEventListener( 'scroll', this );
  this.dispatchEvent( 'dragStart', event, [ pointer ] );
};

proto.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.dispatchEvent( 'pointerMove', event, [ pointer, moveVector ] );
  this._dragMove( event, pointer, moveVector );
};

proto.dragMove = function( event, pointer, moveVector ) {
  if ( !this.isDraggable ) {
    return;
  }
  event.preventDefault();

  this.previousDragX = this.dragX;
  // reverse if right-to-left
  var direction = this.options.rightToLeft ? -1 : 1;
  if ( this.options.wrapAround ) {
    // wrap around move. #589
    moveVector.x %= this.slideableWidth;
  }
  var dragX = this.dragStartPosition + moveVector.x * direction;

  if ( !this.options.wrapAround && this.slides.length ) {
    // slow drag
    var originBound = Math.max( -this.slides[0].target, this.dragStartPosition );
    dragX = dragX > originBound ? ( dragX + originBound ) * 0.5 : dragX;
    var endBound = Math.min( -this.getLastSlide().target, this.dragStartPosition );
    dragX = dragX < endBound ? ( dragX + endBound ) * 0.5 : dragX;
  }

  this.dragX = dragX;

  this.dragMoveTime = new Date();
  this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
};

proto.dragEnd = function( event, pointer ) {
  if ( !this.isDraggable ) {
    return;
  }
  if ( this.options.freeScroll ) {
    this.isFreeScrolling = true;
  }
  // set selectedIndex based on where flick will end up
  var index = this.dragEndRestingSelect();

  if ( this.options.freeScroll && !this.options.wrapAround ) {
    // if free-scroll & not wrap around
    // do not free-scroll if going outside of bounding slides
    // so bounding slides can attract slider, and keep it in bounds
    var restingX = this.getRestingPosition();
    this.isFreeScrolling = -restingX > this.slides[0].target &&
      -restingX < this.getLastSlide().target;
  } else if ( !this.options.freeScroll && index == this.selectedIndex ) {
    // boost selection if selected index has not changed
    index += this.dragEndBoostSelect();
  }
  delete this.previousDragX;
  // apply selection
  // TODO refactor this, selecting here feels weird
  // HACK, set flag so dragging stays in correct direction
  this.isDragSelect = this.options.wrapAround;
  this.select( index );
  delete this.isDragSelect;
  this.dispatchEvent( 'dragEnd', event, [ pointer ] );
};

proto.dragEndRestingSelect = function() {
  var restingX = this.getRestingPosition();
  // how far away from selected slide
  var distance = Math.abs( this.getSlideDistance( -restingX, this.selectedIndex ) );
  // get closet resting going up and going down
  var positiveResting = this._getClosestResting( restingX, distance, 1 );
  var negativeResting = this._getClosestResting( restingX, distance, -1 );
  // use closer resting for wrap-around
  var index = positiveResting.distance < negativeResting.distance ?
    positiveResting.index : negativeResting.index;
  return index;
};

/**
 * given resting X and distance to selected cell
 * get the distance and index of the closest cell
 * @param {Number} restingX - estimated post-flick resting position
 * @param {Number} distance - distance to selected cell
 * @param {Integer} increment - +1 or -1, going up or down
 * @returns {Object} - { distance: {Number}, index: {Integer} }
 */
proto._getClosestResting = function( restingX, distance, increment ) {
  var index = this.selectedIndex;
  var minDistance = Infinity;
  var condition = this.options.contain && !this.options.wrapAround ?
    // if contain, keep going if distance is equal to minDistance
    function( dist, minDist ) {
      return dist <= minDist;
    } : function( dist, minDist ) {
      return dist < minDist;
    };
  while ( condition( distance, minDistance ) ) {
    // measure distance to next cell
    index += increment;
    minDistance = distance;
    distance = this.getSlideDistance( -restingX, index );
    if ( distance === null ) {
      break;
    }
    distance = Math.abs( distance );
  }
  return {
    distance: minDistance,
    // selected was previous index
    index: index - increment,
  };
};

/**
 * measure distance between x and a slide target
 * @param {Number} x - horizontal position
 * @param {Integer} index - slide index
 * @returns {Number} - slide distance
 */
proto.getSlideDistance = function( x, index ) {
  var len = this.slides.length;
  // wrap around if at least 2 slides
  var isWrapAround = this.options.wrapAround && len > 1;
  var slideIndex = isWrapAround ? utils.modulo( index, len ) : index;
  var slide = this.slides[ slideIndex ];
  if ( !slide ) {
    return null;
  }
  // add distance for wrap-around slides
  var wrap = isWrapAround ? this.slideableWidth * Math.floor( index/len ) : 0;
  return x - ( slide.target + wrap );
};

proto.dragEndBoostSelect = function() {
  // do not boost if no previousDragX or dragMoveTime
  if ( this.previousDragX === undefined || !this.dragMoveTime ||
    // or if drag was held for 100 ms
    new Date() - this.dragMoveTime > 100 ) {
    return 0;
  }

  var distance = this.getSlideDistance( -this.dragX, this.selectedIndex );
  var delta = this.previousDragX - this.dragX;
  if ( distance > 0 && delta > 0 ) {
    // boost to next if moving towards the right, and positive velocity
    return 1;
  } else if ( distance < 0 && delta < 0 ) {
    // boost to previous if moving towards the left, and negative velocity
    return -1;
  }
  return 0;
};

// ----- staticClick ----- //

proto.staticClick = function( event, pointer ) {
  // get clickedCell, if cell was clicked
  var clickedCell = this.getParentCell( event.target );
  var cellElem = clickedCell && clickedCell.element;
  var cellIndex = clickedCell && this.cells.indexOf( clickedCell );
  this.dispatchEvent( 'staticClick', event, [ pointer, cellElem, cellIndex ] );
};

// ----- scroll ----- //

proto.onscroll = function() {
  var scroll = getScrollPosition();
  var scrollMoveX = this.pointerDownScroll.x - scroll.x;
  var scrollMoveY = this.pointerDownScroll.y - scroll.y;
  // cancel click/tap if scroll is too much
  if ( Math.abs( scrollMoveX ) > 3 || Math.abs( scrollMoveY ) > 3 ) {
    this._pointerDone();
  }
};

// ----- utils ----- //

function getScrollPosition() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset,
  };
}

// -----  ----- //

return Flickity;

} ) );


/***/ }),

/***/ "./node_modules/flickity/js/flickity.js":
/*!**********************************************!*\
  !*** ./node_modules/flickity/js/flickity.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity main
/* eslint-disable max-params */
( function( window, factory ) {
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"),
      __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js"),
      __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"),
      __webpack_require__(/*! ./cell */ "./node_modules/flickity/js/cell.js"),
      __webpack_require__(/*! ./slide */ "./node_modules/flickity/js/slide.js"),
      __webpack_require__(/*! ./animate */ "./node_modules/flickity/js/animate.js"),
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter, getSize, utils, Cell, Slide, animatePrototype ) {
      return factory( window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var _Flickity; }

}( window, function factory( window, EvEmitter, getSize,
    utils, Cell, Slide, animatePrototype ) {

/* eslint-enable max-params */
'use strict';

// vars
var jQuery = window.jQuery;
var getComputedStyle = window.getComputedStyle;
var console = window.console;

function moveElements( elems, toElem ) {
  elems = utils.makeArray( elems );
  while ( elems.length ) {
    toElem.appendChild( elems.shift() );
  }
}

// -------------------------- Flickity -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Flickity intances
var instances = {};

function Flickity( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for Flickity: ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // do not initialize twice on same element
  if ( this.element.flickityGUID ) {
    var instance = instances[ this.element.flickityGUID ];
    if ( instance ) instance.option( options );
    return instance;
  }

  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }
  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // kick things off
  this._create();
}

Flickity.defaults = {
  accessibility: true,
  // adaptiveHeight: false,
  cellAlign: 'center',
  // cellSelector: undefined,
  // contain: false,
  freeScrollFriction: 0.075, // friction when free-scrolling
  friction: 0.28, // friction when selecting
  namespaceJQueryEvents: true,
  // initialIndex: 0,
  percentPosition: true,
  resize: true,
  selectedAttraction: 0.025,
  setGallerySize: true,
  // watchCSS: false,
  // wrapAround: false
};

// hash of methods triggered on _create()
Flickity.createMethods = [];

var proto = Flickity.prototype;
// inherit EventEmitter
utils.extend( proto, EvEmitter.prototype );

proto._create = function() {
  // add id for Flickity.data
  var id = this.guid = ++GUID;
  this.element.flickityGUID = id; // expando
  instances[ id ] = this; // associate via id
  // initial properties
  this.selectedIndex = 0;
  // how many frames slider has been in same position
  this.restingFrames = 0;
  // initial physics properties
  this.x = 0;
  this.velocity = 0;
  this.originSide = this.options.rightToLeft ? 'right' : 'left';
  // create viewport & slider
  this.viewport = document.createElement('div');
  this.viewport.className = 'flickity-viewport';
  this._createSlider();

  if ( this.options.resize || this.options.watchCSS ) {
    window.addEventListener( 'resize', this );
  }

  // add listeners from on option
  for ( var eventName in this.options.on ) {
    var listener = this.options.on[ eventName ];
    this.on( eventName, listener );
  }

  Flickity.createMethods.forEach( function( method ) {
    this[ method ]();
  }, this );

  if ( this.options.watchCSS ) {
    this.watchCSS();
  } else {
    this.activate();
  }

};

/**
 * set options
 * @param {Object} opts - options to extend
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

proto.activate = function() {
  if ( this.isActive ) {
    return;
  }
  this.isActive = true;
  this.element.classList.add('flickity-enabled');
  if ( this.options.rightToLeft ) {
    this.element.classList.add('flickity-rtl');
  }

  this.getSize();
  // move initial cell elements so they can be loaded as cells
  var cellElems = this._filterFindCellElements( this.element.children );
  moveElements( cellElems, this.slider );
  this.viewport.appendChild( this.slider );
  this.element.appendChild( this.viewport );
  // get cells from children
  this.reloadCells();

  if ( this.options.accessibility ) {
    // allow element to focusable
    this.element.tabIndex = 0;
    // listen for key presses
    this.element.addEventListener( 'keydown', this );
  }

  this.emitEvent('activate');
  this.selectInitialIndex();
  // flag for initial activation, for using initialIndex
  this.isInitActivated = true;
  // ready event. #493
  this.dispatchEvent('ready');
};

// slider positions the cells
proto._createSlider = function() {
  // slider element does all the positioning
  var slider = document.createElement('div');
  slider.className = 'flickity-slider';
  slider.style[ this.originSide ] = 0;
  this.slider = slider;
};

proto._filterFindCellElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.cellSelector );
};

// goes through all children
proto.reloadCells = function() {
  // collection of item elements
  this.cells = this._makeCells( this.slider.children );
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
};

/**
 * turn elements into Flickity.Cells
 * @param {[Array, NodeList, HTMLElement]} elems - elements to make into cells
 * @returns {Array} items - collection of new Flickity Cells
 */
proto._makeCells = function( elems ) {
  var cellElems = this._filterFindCellElements( elems );

  // create new Flickity for collection
  var cells = cellElems.map( function( cellElem ) {
    return new Cell( cellElem, this );
  }, this );

  return cells;
};

proto.getLastCell = function() {
  return this.cells[ this.cells.length - 1 ];
};

proto.getLastSlide = function() {
  return this.slides[ this.slides.length - 1 ];
};

// positions all cells
proto.positionCells = function() {
  // size all cells
  this._sizeCells( this.cells );
  // position all cells
  this._positionCells( 0 );
};

/**
 * position certain cells
 * @param {Integer} index - which cell to start with
 */
proto._positionCells = function( index ) {
  index = index || 0;
  // also measure maxCellHeight
  // start 0 if positioning all cells
  this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
  var cellX = 0;
  // get cellX
  if ( index > 0 ) {
    var startCell = this.cells[ index - 1 ];
    cellX = startCell.x + startCell.size.outerWidth;
  }
  var len = this.cells.length;
  for ( var i = index; i < len; i++ ) {
    var cell = this.cells[i];
    cell.setPosition( cellX );
    cellX += cell.size.outerWidth;
    this.maxCellHeight = Math.max( cell.size.outerHeight, this.maxCellHeight );
  }
  // keep track of cellX for wrap-around
  this.slideableWidth = cellX;
  // slides
  this.updateSlides();
  // contain slides target
  this._containSlides();
  // update slidesWidth
  this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
};

/**
 * cell.getSize() on multiple cells
 * @param {Array} cells - cells to size
 */
proto._sizeCells = function( cells ) {
  cells.forEach( function( cell ) {
    cell.getSize();
  } );
};

// --------------------------  -------------------------- //

proto.updateSlides = function() {
  this.slides = [];
  if ( !this.cells.length ) {
    return;
  }

  var slide = new Slide( this );
  this.slides.push( slide );
  var isOriginLeft = this.originSide == 'left';
  var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';

  var canCellFit = this._getCanCellFit();

  this.cells.forEach( function( cell, i ) {
    // just add cell if first cell in slide
    if ( !slide.cells.length ) {
      slide.addCell( cell );
      return;
    }

    var slideWidth = ( slide.outerWidth - slide.firstMargin ) +
      ( cell.size.outerWidth - cell.size[ nextMargin ] );

    if ( canCellFit.call( this, i, slideWidth ) ) {
      slide.addCell( cell );
    } else {
      // doesn't fit, new slide
      slide.updateTarget();

      slide = new Slide( this );
      this.slides.push( slide );
      slide.addCell( cell );
    }
  }, this );
  // last slide
  slide.updateTarget();
  // update .selectedSlide
  this.updateSelectedSlide();
};

proto._getCanCellFit = function() {
  var groupCells = this.options.groupCells;
  if ( !groupCells ) {
    return function() {
      return false;
    };
  } else if ( typeof groupCells == 'number' ) {
    // group by number. 3 -> [0,1,2], [3,4,5], ...
    var number = parseInt( groupCells, 10 );
    return function( i ) {
      return ( i % number ) !== 0;
    };
  }
  // default, group by width of slide
  // parse '75%
  var percentMatch = typeof groupCells == 'string' &&
    groupCells.match( /^(\d+)%$/ );
  var percent = percentMatch ? parseInt( percentMatch[1], 10 ) / 100 : 1;
  return function( i, slideWidth ) {
    /* eslint-disable-next-line no-invalid-this */
    return slideWidth <= ( this.size.innerWidth + 1 ) * percent;
  };
};

// alias _init for jQuery plugin .flickity()
proto._init =
proto.reposition = function() {
  this.positionCells();
  this.positionSliderAtSelected();
};

proto.getSize = function() {
  this.size = getSize( this.element );
  this.setCellAlign();
  this.cursorPosition = this.size.innerWidth * this.cellAlign;
};

var cellAlignShorthands = {
  // cell align, then based on origin side
  center: {
    left: 0.5,
    right: 0.5,
  },
  left: {
    left: 0,
    right: 1,
  },
  right: {
    right: 0,
    left: 1,
  },
};

proto.setCellAlign = function() {
  var shorthand = cellAlignShorthands[ this.options.cellAlign ];
  this.cellAlign = shorthand ? shorthand[ this.originSide ] : this.options.cellAlign;
};

proto.setGallerySize = function() {
  if ( this.options.setGallerySize ) {
    var height = this.options.adaptiveHeight && this.selectedSlide ?
      this.selectedSlide.height : this.maxCellHeight;
    this.viewport.style.height = height + 'px';
  }
};

proto._getWrapShiftCells = function() {
  // only for wrap-around
  if ( !this.options.wrapAround ) {
    return;
  }
  // unshift previous cells
  this._unshiftCells( this.beforeShiftCells );
  this._unshiftCells( this.afterShiftCells );
  // get before cells
  // initial gap
  var gapX = this.cursorPosition;
  var cellIndex = this.cells.length - 1;
  this.beforeShiftCells = this._getGapCells( gapX, cellIndex, -1 );
  // get after cells
  // ending gap between last cell and end of gallery viewport
  gapX = this.size.innerWidth - this.cursorPosition;
  // start cloning at first cell, working forwards
  this.afterShiftCells = this._getGapCells( gapX, 0, 1 );
};

proto._getGapCells = function( gapX, cellIndex, increment ) {
  // keep adding cells until the cover the initial gap
  var cells = [];
  while ( gapX > 0 ) {
    var cell = this.cells[ cellIndex ];
    if ( !cell ) {
      break;
    }
    cells.push( cell );
    cellIndex += increment;
    gapX -= cell.size.outerWidth;
  }
  return cells;
};

// ----- contain ----- //

// contain cell targets so no excess sliding
proto._containSlides = function() {
  if ( !this.options.contain || this.options.wrapAround || !this.cells.length ) {
    return;
  }
  var isRightToLeft = this.options.rightToLeft;
  var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
  var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
  var contentWidth = this.slideableWidth - this.getLastCell().size[ endMargin ];
  // content is less than gallery size
  var isContentSmaller = contentWidth < this.size.innerWidth;
  // bounds
  var beginBound = this.cursorPosition + this.cells[0].size[ beginMargin ];
  var endBound = contentWidth - this.size.innerWidth * ( 1 - this.cellAlign );
  // contain each cell target
  this.slides.forEach( function( slide ) {
    if ( isContentSmaller ) {
      // all cells fit inside gallery
      slide.target = contentWidth * this.cellAlign;
    } else {
      // contain to bounds
      slide.target = Math.max( slide.target, beginBound );
      slide.target = Math.min( slide.target, endBound );
    }
  }, this );
};

// -----  ----- //

/**
 * emits events via eventEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery && this.$element ) {
    // default trigger with type if no event
    type += this.options.namespaceJQueryEvents ? '.flickity' : '';
    var $event = type;
    if ( event ) {
      // create jQuery event
      var jQEvent = new jQuery.Event( event );
      jQEvent.type = type;
      $event = jQEvent;
    }
    this.$element.trigger( $event, args );
  }
};

// -------------------------- select -------------------------- //

/**
 * @param {Integer} index - index of the slide
 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
 * @param {Boolean} isInstant - will immediately set position at selected cell
 */
proto.select = function( index, isWrap, isInstant ) {
  if ( !this.isActive ) {
    return;
  }
  index = parseInt( index, 10 );
  this._wrapSelect( index );

  if ( this.options.wrapAround || isWrap ) {
    index = utils.modulo( index, this.slides.length );
  }
  // bail if invalid index
  if ( !this.slides[ index ] ) {
    return;
  }
  var prevIndex = this.selectedIndex;
  this.selectedIndex = index;
  this.updateSelectedSlide();
  if ( isInstant ) {
    this.positionSliderAtSelected();
  } else {
    this.startAnimation();
  }
  if ( this.options.adaptiveHeight ) {
    this.setGallerySize();
  }
  // events
  this.dispatchEvent( 'select', null, [ index ] );
  // change event if new index
  if ( index != prevIndex ) {
    this.dispatchEvent( 'change', null, [ index ] );
  }
  // old v1 event name, remove in v3
  this.dispatchEvent('cellSelect');
};

// wraps position for wrapAround, to move to closest slide. #113
proto._wrapSelect = function( index ) {
  var len = this.slides.length;
  var isWrapping = this.options.wrapAround && len > 1;
  if ( !isWrapping ) {
    return index;
  }
  var wrapIndex = utils.modulo( index, len );
  // go to shortest
  var delta = Math.abs( wrapIndex - this.selectedIndex );
  var backWrapDelta = Math.abs( ( wrapIndex + len ) - this.selectedIndex );
  var forewardWrapDelta = Math.abs( ( wrapIndex - len ) - this.selectedIndex );
  if ( !this.isDragSelect && backWrapDelta < delta ) {
    index += len;
  } else if ( !this.isDragSelect && forewardWrapDelta < delta ) {
    index -= len;
  }
  // wrap position so slider is within normal area
  if ( index < 0 ) {
    this.x -= this.slideableWidth;
  } else if ( index >= len ) {
    this.x += this.slideableWidth;
  }
};

proto.previous = function( isWrap, isInstant ) {
  this.select( this.selectedIndex - 1, isWrap, isInstant );
};

proto.next = function( isWrap, isInstant ) {
  this.select( this.selectedIndex + 1, isWrap, isInstant );
};

proto.updateSelectedSlide = function() {
  var slide = this.slides[ this.selectedIndex ];
  // selectedIndex could be outside of slides, if triggered before resize()
  if ( !slide ) {
    return;
  }
  // unselect previous selected slide
  this.unselectSelectedSlide();
  // update new selected slide
  this.selectedSlide = slide;
  slide.select();
  this.selectedCells = slide.cells;
  this.selectedElements = slide.getCellElements();
  // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
  // Remove in v3?
  this.selectedCell = slide.cells[0];
  this.selectedElement = this.selectedElements[0];
};

proto.unselectSelectedSlide = function() {
  if ( this.selectedSlide ) {
    this.selectedSlide.unselect();
  }
};

proto.selectInitialIndex = function() {
  var initialIndex = this.options.initialIndex;
  // already activated, select previous selectedIndex
  if ( this.isInitActivated ) {
    this.select( this.selectedIndex, false, true );
    return;
  }
  // select with selector string
  if ( initialIndex && typeof initialIndex == 'string' ) {
    var cell = this.queryCell( initialIndex );
    if ( cell ) {
      this.selectCell( initialIndex, false, true );
      return;
    }
  }

  var index = 0;
  // select with number
  if ( initialIndex && this.slides[ initialIndex ] ) {
    index = initialIndex;
  }
  // select instantly
  this.select( index, false, true );
};

/**
 * select slide from number or cell element
 * @param {[Element, Number]} value - zero-based index or element to select
 * @param {Boolean} isWrap - enables wrapping around for extra index
 * @param {Boolean} isInstant - disables slide animation
 */
proto.selectCell = function( value, isWrap, isInstant ) {
  // get cell
  var cell = this.queryCell( value );
  if ( !cell ) {
    return;
  }

  var index = this.getCellSlideIndex( cell );
  this.select( index, isWrap, isInstant );
};

proto.getCellSlideIndex = function( cell ) {
  // get index of slides that has cell
  for ( var i = 0; i < this.slides.length; i++ ) {
    var slide = this.slides[i];
    var index = slide.cells.indexOf( cell );
    if ( index != -1 ) {
      return i;
    }
  }
};

// -------------------------- get cells -------------------------- //

/**
 * get Flickity.Cell, given an Element
 * @param {Element} elem - matching cell element
 * @returns {Flickity.Cell} cell - matching cell
 */
proto.getCell = function( elem ) {
  // loop through cells to get the one that matches
  for ( var i = 0; i < this.cells.length; i++ ) {
    var cell = this.cells[i];
    if ( cell.element == elem ) {
      return cell;
    }
  }
};

/**
 * get collection of Flickity.Cells, given Elements
 * @param {[Element, Array, NodeList]} elems - multiple elements
 * @returns {Array} cells - Flickity.Cells
 */
proto.getCells = function( elems ) {
  elems = utils.makeArray( elems );
  var cells = [];
  elems.forEach( function( elem ) {
    var cell = this.getCell( elem );
    if ( cell ) {
      cells.push( cell );
    }
  }, this );
  return cells;
};

/**
 * get cell elements
 * @returns {Array} cellElems
 */
proto.getCellElements = function() {
  return this.cells.map( function( cell ) {
    return cell.element;
  } );
};

/**
 * get parent cell from an element
 * @param {Element} elem - child element
 * @returns {Flickit.Cell} cell - parent cell
 */
proto.getParentCell = function( elem ) {
  // first check if elem is cell
  var cell = this.getCell( elem );
  if ( cell ) {
    return cell;
  }
  // try to get parent cell elem
  elem = utils.getParent( elem, '.flickity-slider > *' );
  return this.getCell( elem );
};

/**
 * get cells adjacent to a slide
 * @param {Integer} adjCount - number of adjacent slides
 * @param {Integer} index - index of slide to start
 * @returns {Array} cells - array of Flickity.Cells
 */
proto.getAdjacentCellElements = function( adjCount, index ) {
  if ( !adjCount ) {
    return this.selectedSlide.getCellElements();
  }
  index = index === undefined ? this.selectedIndex : index;

  var len = this.slides.length;
  if ( 1 + ( adjCount * 2 ) >= len ) {
    return this.getCellElements();
  }

  var cellElems = [];
  for ( var i = index - adjCount; i <= index + adjCount; i++ ) {
    var slideIndex = this.options.wrapAround ? utils.modulo( i, len ) : i;
    var slide = this.slides[ slideIndex ];
    if ( slide ) {
      cellElems = cellElems.concat( slide.getCellElements() );
    }
  }
  return cellElems;
};

/**
 * select slide from number or cell element
 * @param {[Element, String, Number]} selector - element, selector string, or index
 * @returns {Flickity.Cell} - matching cell
 */
proto.queryCell = function( selector ) {
  if ( typeof selector == 'number' ) {
    // use number as index
    return this.cells[ selector ];
  }
  if ( typeof selector == 'string' ) {
    // do not select invalid selectors from hash: #123, #/. #791
    if ( selector.match( /^[#.]?[\d/]/ ) ) {
      return;
    }
    // use string as selector, get element
    selector = this.element.querySelector( selector );
  }
  // get cell from element
  return this.getCell( selector );
};

// -------------------------- events -------------------------- //

proto.uiChange = function() {
  this.emitEvent('uiChange');
};

// keep focus on element when child UI elements are clicked
proto.childUIPointerDown = function( event ) {
  // HACK iOS does not allow touch events to bubble up?!
  if ( event.type != 'touchstart' ) {
    event.preventDefault();
  }
  this.focus();
};

// ----- resize ----- //

proto.onresize = function() {
  this.watchCSS();
  this.resize();
};

utils.debounceMethod( Flickity, 'onresize', 150 );

proto.resize = function() {
  if ( !this.isActive ) {
    return;
  }
  this.getSize();
  // wrap values
  if ( this.options.wrapAround ) {
    this.x = utils.modulo( this.x, this.slideableWidth );
  }
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
  this.emitEvent('resize');
  // update selected index for group slides, instant
  // TODO: position can be lost between groups of various numbers
  var selectedElement = this.selectedElements && this.selectedElements[0];
  this.selectCell( selectedElement, false, true );
};

// watches the :after property, activates/deactivates
proto.watchCSS = function() {
  var watchOption = this.options.watchCSS;
  if ( !watchOption ) {
    return;
  }

  var afterContent = getComputedStyle( this.element, ':after' ).content;
  // activate if :after { content: 'flickity' }
  if ( afterContent.indexOf('flickity') != -1 ) {
    this.activate();
  } else {
    this.deactivate();
  }
};

// ----- keydown ----- //

// go previous/next if left/right keys pressed
proto.onkeydown = function( event ) {
  // only work if element is in focus
  var isNotFocused = document.activeElement && document.activeElement != this.element;
  if ( !this.options.accessibility || isNotFocused ) {
    return;
  }

  var handler = Flickity.keyboardHandlers[ event.keyCode ];
  if ( handler ) {
    handler.call( this );
  }
};

Flickity.keyboardHandlers = {
  // left arrow
  37: function() {
    var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
    this.uiChange();
    this[ leftMethod ]();
  },
  // right arrow
  39: function() {
    var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
    this.uiChange();
    this[ rightMethod ]();
  },
};

// ----- focus ----- //

proto.focus = function() {
  // TODO remove scrollTo once focus options gets more support
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus ...
  //    #Browser_compatibility
  var prevScrollY = window.pageYOffset;
  this.element.focus({ preventScroll: true });
  // hack to fix scroll jump after focus, #76
  if ( window.pageYOffset != prevScrollY ) {
    window.scrollTo( window.pageXOffset, prevScrollY );
  }
};

// -------------------------- destroy -------------------------- //

// deactivate all Flickity functionality, but keep stuff available
proto.deactivate = function() {
  if ( !this.isActive ) {
    return;
  }
  this.element.classList.remove('flickity-enabled');
  this.element.classList.remove('flickity-rtl');
  this.unselectSelectedSlide();
  // destroy cells
  this.cells.forEach( function( cell ) {
    cell.destroy();
  } );
  this.element.removeChild( this.viewport );
  // move child elements back into element
  moveElements( this.slider.children, this.element );
  if ( this.options.accessibility ) {
    this.element.removeAttribute('tabIndex');
    this.element.removeEventListener( 'keydown', this );
  }
  // set flags
  this.isActive = false;
  this.emitEvent('deactivate');
};

proto.destroy = function() {
  this.deactivate();
  window.removeEventListener( 'resize', this );
  this.allOff();
  this.emitEvent('destroy');
  if ( jQuery && this.$element ) {
    jQuery.removeData( this.element, 'flickity' );
  }
  delete this.element.flickityGUID;
  delete instances[ this.guid ];
};

// -------------------------- prototype -------------------------- //

utils.extend( proto, animatePrototype );

// -------------------------- extras -------------------------- //

/**
 * get Flickity instance from element
 * @param {[Element, String]} elem - element or selector string
 * @returns {Flickity} - Flickity instance
 */
Flickity.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.flickityGUID;
  return id && instances[ id ];
};

utils.htmlInit( Flickity, 'flickity' );

if ( jQuery && jQuery.bridget ) {
  jQuery.bridget( 'flickity', Flickity );
}

// set internal jQuery, for Webpack + jQuery v3, #478
Flickity.setJQuery = function( jq ) {
  jQuery = jq;
};

Flickity.Cell = Cell;
Flickity.Slide = Slide;

return Flickity;

} ) );


/***/ }),

/***/ "./node_modules/flickity/js/index.js":
/*!*******************************************!*\
  !*** ./node_modules/flickity/js/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Flickity v2.2.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"),
      __webpack_require__(/*! ./drag */ "./node_modules/flickity/js/drag.js"),
      __webpack_require__(/*! ./prev-next-button */ "./node_modules/flickity/js/prev-next-button.js"),
      __webpack_require__(/*! ./page-dots */ "./node_modules/flickity/js/page-dots.js"),
      __webpack_require__(/*! ./player */ "./node_modules/flickity/js/player.js"),
      __webpack_require__(/*! ./add-remove-cell */ "./node_modules/flickity/js/add-remove-cell.js"),
      __webpack_require__(/*! ./lazyload */ "./node_modules/flickity/js/lazyload.js"),
    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

} )( window, function factory( Flickity ) {
  return Flickity;
} );


/***/ }),

/***/ "./node_modules/flickity/js/lazyload.js":
/*!**********************************************!*\
  !*** ./node_modules/flickity/js/lazyload.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// lazyload
( function( window, factory ) {
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"),
      __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"),
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Flickity, utils ) {
      return factory( window, Flickity, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, Flickity, utils ) {
'use strict';

Flickity.createMethods.push('_createLazyload');
var proto = Flickity.prototype;

proto._createLazyload = function() {
  this.on( 'select', this.lazyLoad );
};

proto.lazyLoad = function() {
  var lazyLoad = this.options.lazyLoad;
  if ( !lazyLoad ) {
    return;
  }
  // get adjacent cells, use lazyLoad option for adjacent count
  var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
  var cellElems = this.getAdjacentCellElements( adjCount );
  // get lazy images in those cells
  var lazyImages = [];
  cellElems.forEach( function( cellElem ) {
    var lazyCellImages = getCellLazyImages( cellElem );
    lazyImages = lazyImages.concat( lazyCellImages );
  } );
  // load lazy images
  lazyImages.forEach( function( img ) {
    new LazyLoader( img, this );
  }, this );
};

function getCellLazyImages( cellElem ) {
  // check if cell element is lazy image
  if ( cellElem.nodeName == 'IMG' ) {
    var lazyloadAttr = cellElem.getAttribute('data-flickity-lazyload');
    var srcAttr = cellElem.getAttribute('data-flickity-lazyload-src');
    var srcsetAttr = cellElem.getAttribute('data-flickity-lazyload-srcset');
    if ( lazyloadAttr || srcAttr || srcsetAttr ) {
      return [ cellElem ];
    }
  }
  // select lazy images in cell
  var lazySelector = 'img[data-flickity-lazyload], ' +
    'img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]';
  var imgs = cellElem.querySelectorAll( lazySelector );
  return utils.makeArray( imgs );
}

// -------------------------- LazyLoader -------------------------- //

/**
 * class to handle loading images
 * @param {Image} img - Image element
 * @param {Flickity} flickity - Flickity instance
 */
function LazyLoader( img, flickity ) {
  this.img = img;
  this.flickity = flickity;
  this.load();
}

LazyLoader.prototype.handleEvent = utils.handleEvent;

LazyLoader.prototype.load = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  // get src & srcset
  var src = this.img.getAttribute('data-flickity-lazyload') ||
    this.img.getAttribute('data-flickity-lazyload-src');
  var srcset = this.img.getAttribute('data-flickity-lazyload-srcset');
  // set src & serset
  this.img.src = src;
  if ( srcset ) {
    this.img.setAttribute( 'srcset', srcset );
  }
  // remove attr
  this.img.removeAttribute('data-flickity-lazyload');
  this.img.removeAttribute('data-flickity-lazyload-src');
  this.img.removeAttribute('data-flickity-lazyload-srcset');
};

LazyLoader.prototype.onload = function( event ) {
  this.complete( event, 'flickity-lazyloaded' );
};

LazyLoader.prototype.onerror = function( event ) {
  this.complete( event, 'flickity-lazyerror' );
};

LazyLoader.prototype.complete = function( event, className ) {
  // unbind events
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );

  var cell = this.flickity.getParentCell( this.img );
  var cellElem = cell && cell.element;
  this.flickity.cellSizeChange( cellElem );

  this.img.classList.add( className );
  this.flickity.dispatchEvent( 'lazyLoad', event, cellElem );
};

// -----  ----- //

Flickity.LazyLoader = LazyLoader;

return Flickity;

} ) );


/***/ }),

/***/ "./node_modules/flickity/js/page-dots.js":
/*!***********************************************!*\
  !*** ./node_modules/flickity/js/page-dots.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// page dots
( function( window, factory ) {
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"),
      __webpack_require__(/*! unipointer/unipointer */ "./node_modules/unipointer/unipointer.js"),
      __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"),
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Flickity, Unipointer, utils ) {
      return factory( window, Flickity, Unipointer, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, Flickity, Unipointer, utils ) {

// -------------------------- PageDots -------------------------- //

'use strict';

function PageDots( parent ) {
  this.parent = parent;
  this._create();
}

PageDots.prototype = Object.create( Unipointer.prototype );

PageDots.prototype._create = function() {
  // create holder element
  this.holder = document.createElement('ol');
  this.holder.className = 'flickity-page-dots';
  // create dots, array of elements
  this.dots = [];
  // events
  this.handleClick = this.onClick.bind( this );
  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
};

PageDots.prototype.activate = function() {
  this.setDots();
  this.holder.addEventListener( 'click', this.handleClick );
  this.bindStartEvent( this.holder );
  // add to DOM
  this.parent.element.appendChild( this.holder );
};

PageDots.prototype.deactivate = function() {
  this.holder.removeEventListener( 'click', this.handleClick );
  this.unbindStartEvent( this.holder );
  // remove from DOM
  this.parent.element.removeChild( this.holder );
};

PageDots.prototype.setDots = function() {
  // get difference between number of slides and number of dots
  var delta = this.parent.slides.length - this.dots.length;
  if ( delta > 0 ) {
    this.addDots( delta );
  } else if ( delta < 0 ) {
    this.removeDots( -delta );
  }
};

PageDots.prototype.addDots = function( count ) {
  var fragment = document.createDocumentFragment();
  var newDots = [];
  var length = this.dots.length;
  var max = length + count;

  for ( var i = length; i < max; i++ ) {
    var dot = document.createElement('li');
    dot.className = 'dot';
    dot.setAttribute( 'aria-label', 'Page dot ' + ( i + 1 ) );
    fragment.appendChild( dot );
    newDots.push( dot );
  }

  this.holder.appendChild( fragment );
  this.dots = this.dots.concat( newDots );
};

PageDots.prototype.removeDots = function( count ) {
  // remove from this.dots collection
  var removeDots = this.dots.splice( this.dots.length - count, count );
  // remove from DOM
  removeDots.forEach( function( dot ) {
    this.holder.removeChild( dot );
  }, this );
};

PageDots.prototype.updateSelected = function() {
  // remove selected class on previous
  if ( this.selectedDot ) {
    this.selectedDot.className = 'dot';
    this.selectedDot.removeAttribute('aria-current');
  }
  // don't proceed if no dots
  if ( !this.dots.length ) {
    return;
  }
  this.selectedDot = this.dots[ this.parent.selectedIndex ];
  this.selectedDot.className = 'dot is-selected';
  this.selectedDot.setAttribute( 'aria-current', 'step' );
};

PageDots.prototype.onTap = // old method name, backwards-compatible
PageDots.prototype.onClick = function( event ) {
  var target = event.target;
  // only care about dot clicks
  if ( target.nodeName != 'LI' ) {
    return;
  }

  this.parent.uiChange();
  var index = this.dots.indexOf( target );
  this.parent.select( index );
};

PageDots.prototype.destroy = function() {
  this.deactivate();
  this.allOff();
};

Flickity.PageDots = PageDots;

// -------------------------- Flickity -------------------------- //

utils.extend( Flickity.defaults, {
  pageDots: true,
} );

Flickity.createMethods.push('_createPageDots');

var proto = Flickity.prototype;

proto._createPageDots = function() {
  if ( !this.options.pageDots ) {
    return;
  }
  this.pageDots = new PageDots( this );
  // events
  this.on( 'activate', this.activatePageDots );
  this.on( 'select', this.updateSelectedPageDots );
  this.on( 'cellChange', this.updatePageDots );
  this.on( 'resize', this.updatePageDots );
  this.on( 'deactivate', this.deactivatePageDots );
};

proto.activatePageDots = function() {
  this.pageDots.activate();
};

proto.updateSelectedPageDots = function() {
  this.pageDots.updateSelected();
};

proto.updatePageDots = function() {
  this.pageDots.setDots();
};

proto.deactivatePageDots = function() {
  this.pageDots.deactivate();
};

// -----  ----- //

Flickity.PageDots = PageDots;

return Flickity;

} ) );


/***/ }),

/***/ "./node_modules/flickity/js/player.js":
/*!********************************************!*\
  !*** ./node_modules/flickity/js/player.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// player & autoPlay
( function( window, factory ) {
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"),
      __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"),
      __webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"),
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter, utils, Flickity ) {
      return factory( EvEmitter, utils, Flickity );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( EvEmitter, utils, Flickity ) {

'use strict';

// -------------------------- Player -------------------------- //

function Player( parent ) {
  this.parent = parent;
  this.state = 'stopped';
  // visibility change event handler
  this.onVisibilityChange = this.visibilityChange.bind( this );
  this.onVisibilityPlay = this.visibilityPlay.bind( this );
}

Player.prototype = Object.create( EvEmitter.prototype );

// start play
Player.prototype.play = function() {
  if ( this.state == 'playing' ) {
    return;
  }
  // do not play if page is hidden, start playing when page is visible
  var isPageHidden = document.hidden;
  if ( isPageHidden ) {
    document.addEventListener( 'visibilitychange', this.onVisibilityPlay );
    return;
  }

  this.state = 'playing';
  // listen to visibility change
  document.addEventListener( 'visibilitychange', this.onVisibilityChange );
  // start ticking
  this.tick();
};

Player.prototype.tick = function() {
  // do not tick if not playing
  if ( this.state != 'playing' ) {
    return;
  }

  var time = this.parent.options.autoPlay;
  // default to 3 seconds
  time = typeof time == 'number' ? time : 3000;
  var _this = this;
  // HACK: reset ticks if stopped and started within interval
  this.clear();
  this.timeout = setTimeout( function() {
    _this.parent.next( true );
    _this.tick();
  }, time );
};

Player.prototype.stop = function() {
  this.state = 'stopped';
  this.clear();
  // remove visibility change event
  document.removeEventListener( 'visibilitychange', this.onVisibilityChange );
};

Player.prototype.clear = function() {
  clearTimeout( this.timeout );
};

Player.prototype.pause = function() {
  if ( this.state == 'playing' ) {
    this.state = 'paused';
    this.clear();
  }
};

Player.prototype.unpause = function() {
  // re-start play if paused
  if ( this.state == 'paused' ) {
    this.play();
  }
};

// pause if page visibility is hidden, unpause if visible
Player.prototype.visibilityChange = function() {
  var isPageHidden = document.hidden;
  this[ isPageHidden ? 'pause' : 'unpause' ]();
};

Player.prototype.visibilityPlay = function() {
  this.play();
  document.removeEventListener( 'visibilitychange', this.onVisibilityPlay );
};

// -------------------------- Flickity -------------------------- //

utils.extend( Flickity.defaults, {
  pauseAutoPlayOnHover: true,
} );

Flickity.createMethods.push('_createPlayer');
var proto = Flickity.prototype;

proto._createPlayer = function() {
  this.player = new Player( this );

  this.on( 'activate', this.activatePlayer );
  this.on( 'uiChange', this.stopPlayer );
  this.on( 'pointerDown', this.stopPlayer );
  this.on( 'deactivate', this.deactivatePlayer );
};

proto.activatePlayer = function() {
  if ( !this.options.autoPlay ) {
    return;
  }
  this.player.play();
  this.element.addEventListener( 'mouseenter', this );
};

// Player API, don't hate the ... thanks I know where the door is

proto.playPlayer = function() {
  this.player.play();
};

proto.stopPlayer = function() {
  this.player.stop();
};

proto.pausePlayer = function() {
  this.player.pause();
};

proto.unpausePlayer = function() {
  this.player.unpause();
};

proto.deactivatePlayer = function() {
  this.player.stop();
  this.element.removeEventListener( 'mouseenter', this );
};

// ----- mouseenter/leave ----- //

// pause auto-play on hover
proto.onmouseenter = function() {
  if ( !this.options.pauseAutoPlayOnHover ) {
    return;
  }
  this.player.pause();
  this.element.addEventListener( 'mouseleave', this );
};

// resume auto-play on hover off
proto.onmouseleave = function() {
  this.player.unpause();
  this.element.removeEventListener( 'mouseleave', this );
};

// -----  ----- //

Flickity.Player = Player;

return Flickity;

} ) );


/***/ }),

/***/ "./node_modules/flickity/js/prev-next-button.js":
/*!******************************************************!*\
  !*** ./node_modules/flickity/js/prev-next-button.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// prev/next buttons
( function( window, factory ) {
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ./flickity */ "./node_modules/flickity/js/flickity.js"),
      __webpack_require__(/*! unipointer/unipointer */ "./node_modules/unipointer/unipointer.js"),
      __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"),
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Flickity, Unipointer, utils ) {
      return factory( window, Flickity, Unipointer, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, Flickity, Unipointer, utils ) {
'use strict';

var svgURI = 'http://www.w3.org/2000/svg';

// -------------------------- PrevNextButton -------------------------- //

function PrevNextButton( direction, parent ) {
  this.direction = direction;
  this.parent = parent;
  this._create();
}

PrevNextButton.prototype = Object.create( Unipointer.prototype );

PrevNextButton.prototype._create = function() {
  // properties
  this.isEnabled = true;
  this.isPrevious = this.direction == -1;
  var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
  this.isLeft = this.direction == leftDirection;

  var element = this.element = document.createElement('button');
  element.className = 'flickity-button flickity-prev-next-button';
  element.className += this.isPrevious ? ' previous' : ' next';
  // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
  element.setAttribute( 'type', 'button' );
  // init as disabled
  this.disable();

  element.setAttribute( 'aria-label', this.isPrevious ? 'Previous' : 'Next' );

  // create arrow
  var svg = this.createSVG();
  element.appendChild( svg );
  // events
  this.parent.on( 'select', this.update.bind( this ) );
  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
};

PrevNextButton.prototype.activate = function() {
  this.bindStartEvent( this.element );
  this.element.addEventListener( 'click', this );
  // add to DOM
  this.parent.element.appendChild( this.element );
};

PrevNextButton.prototype.deactivate = function() {
  // remove from DOM
  this.parent.element.removeChild( this.element );
  // click events
  this.unbindStartEvent( this.element );
  this.element.removeEventListener( 'click', this );
};

PrevNextButton.prototype.createSVG = function() {
  var svg = document.createElementNS( svgURI, 'svg' );
  svg.setAttribute( 'class', 'flickity-button-icon' );
  svg.setAttribute( 'viewBox', '0 0 100 100' );
  var path = document.createElementNS( svgURI, 'path' );
  var pathMovements = getArrowMovements( this.parent.options.arrowShape );
  path.setAttribute( 'd', pathMovements );
  path.setAttribute( 'class', 'arrow' );
  // rotate arrow
  if ( !this.isLeft ) {
    path.setAttribute( 'transform', 'translate(100, 100) rotate(180) ' );
  }
  svg.appendChild( path );
  return svg;
};

// get SVG path movmement
function getArrowMovements( shape ) {
  // use shape as movement if string
  if ( typeof shape == 'string' ) {
    return shape;
  }
  // create movement string
  return 'M ' + shape.x0 + ',50' +
    ' L ' + shape.x1 + ',' + ( shape.y1 + 50 ) +
    ' L ' + shape.x2 + ',' + ( shape.y2 + 50 ) +
    ' L ' + shape.x3 + ',50 ' +
    ' L ' + shape.x2 + ',' + ( 50 - shape.y2 ) +
    ' L ' + shape.x1 + ',' + ( 50 - shape.y1 ) +
    ' Z';
}

PrevNextButton.prototype.handleEvent = utils.handleEvent;

PrevNextButton.prototype.onclick = function() {
  if ( !this.isEnabled ) {
    return;
  }
  this.parent.uiChange();
  var method = this.isPrevious ? 'previous' : 'next';
  this.parent[ method ]();
};

// -----  ----- //

PrevNextButton.prototype.enable = function() {
  if ( this.isEnabled ) {
    return;
  }
  this.element.disabled = false;
  this.isEnabled = true;
};

PrevNextButton.prototype.disable = function() {
  if ( !this.isEnabled ) {
    return;
  }
  this.element.disabled = true;
  this.isEnabled = false;
};

PrevNextButton.prototype.update = function() {
  // index of first or last slide, if previous or next
  var slides = this.parent.slides;
  // enable is wrapAround and at least 2 slides
  if ( this.parent.options.wrapAround && slides.length > 1 ) {
    this.enable();
    return;
  }
  var lastIndex = slides.length ? slides.length - 1 : 0;
  var boundIndex = this.isPrevious ? 0 : lastIndex;
  var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
  this[ method ]();
};

PrevNextButton.prototype.destroy = function() {
  this.deactivate();
  this.allOff();
};

// -------------------------- Flickity prototype -------------------------- //

utils.extend( Flickity.defaults, {
  prevNextButtons: true,
  arrowShape: {
    x0: 10,
    x1: 60, y1: 50,
    x2: 70, y2: 40,
    x3: 30,
  },
} );

Flickity.createMethods.push('_createPrevNextButtons');
var proto = Flickity.prototype;

proto._createPrevNextButtons = function() {
  if ( !this.options.prevNextButtons ) {
    return;
  }

  this.prevButton = new PrevNextButton( -1, this );
  this.nextButton = new PrevNextButton( 1, this );

  this.on( 'activate', this.activatePrevNextButtons );
};

proto.activatePrevNextButtons = function() {
  this.prevButton.activate();
  this.nextButton.activate();
  this.on( 'deactivate', this.deactivatePrevNextButtons );
};

proto.deactivatePrevNextButtons = function() {
  this.prevButton.deactivate();
  this.nextButton.deactivate();
  this.off( 'deactivate', this.deactivatePrevNextButtons );
};

// --------------------------  -------------------------- //

Flickity.PrevNextButton = PrevNextButton;

return Flickity;

} ) );


/***/ }),

/***/ "./node_modules/flickity/js/slide.js":
/*!*******************************************!*\
  !*** ./node_modules/flickity/js/slide.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// slide
( function( window, factory ) {
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory() {
'use strict';

function Slide( parent ) {
  this.parent = parent;
  this.isOriginLeft = parent.originSide == 'left';
  this.cells = [];
  this.outerWidth = 0;
  this.height = 0;
}

var proto = Slide.prototype;

proto.addCell = function( cell ) {
  this.cells.push( cell );
  this.outerWidth += cell.size.outerWidth;
  this.height = Math.max( cell.size.outerHeight, this.height );
  // first cell stuff
  if ( this.cells.length == 1 ) {
    this.x = cell.x; // x comes from first cell
    var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
    this.firstMargin = cell.size[ beginMargin ];
  }
};

proto.updateTarget = function() {
  var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
  var lastCell = this.getLastCell();
  var lastMargin = lastCell ? lastCell.size[ endMargin ] : 0;
  var slideWidth = this.outerWidth - ( this.firstMargin + lastMargin );
  this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
};

proto.getLastCell = function() {
  return this.cells[ this.cells.length - 1 ];
};

proto.select = function() {
  this.cells.forEach( function( cell ) {
    cell.select();
  } );
};

proto.unselect = function() {
  this.cells.forEach( function( cell ) {
    cell.unselect();
  } );
};

proto.getCellElements = function() {
  return this.cells.map( function( cell ) {
    return cell.element;
  } );
};

return Slide;

} ) );


/***/ }),

/***/ "./node_modules/get-size/get-size.js":
/*!*******************************************!*\
  !*** ./node_modules/get-size/get-size.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/unidragger/unidragger.js":
/*!***********************************************!*\
  !*** ./node_modules/unidragger/unidragger.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Unidragger v2.3.1
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! unipointer/unipointer */ "./node_modules/unipointer/unipointer.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Unipointer ) {
      return factory( window, Unipointer );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, Unipointer ) {

'use strict';

// -------------------------- Unidragger -------------------------- //

function Unidragger() {}

// inherit Unipointer & EvEmitter
var proto = Unidragger.prototype = Object.create( Unipointer.prototype );

// ----- bind start ----- //

proto.bindHandles = function() {
  this._bindHandles( true );
};

proto.unbindHandles = function() {
  this._bindHandles( false );
};

/**
 * Add or remove start event
 * @param {Boolean} isAdd
 */
proto._bindHandles = function( isAdd ) {
  // munge isAdd, default to true
  isAdd = isAdd === undefined ? true : isAdd;
  // bind each handle
  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
  var touchAction = isAdd ? this._touchActionValue : '';
  for ( var i=0; i < this.handles.length; i++ ) {
    var handle = this.handles[i];
    this._bindStartEvent( handle, isAdd );
    handle[ bindMethod ]( 'click', this );
    // touch-action: none to override browser touch gestures. metafizzy/flickity#540
    if ( window.PointerEvent ) {
      handle.style.touchAction = touchAction;
    }
  }
};

// prototype so it can be overwriteable by Flickity
proto._touchActionValue = 'none';

// ----- start event ----- //

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerDown = function( event, pointer ) {
  var isOkay = this.okayPointerDown( event );
  if ( !isOkay ) {
    return;
  }
  // track start event position
  // Safari 9 overrides pageX and pageY. These values needs to be copied. flickity#842
  this.pointerDownPointer = {
    pageX: pointer.pageX,
    pageY: pointer.pageY,
  };

  event.preventDefault();
  this.pointerDownBlur();
  // bind move and end events
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// nodes that have text fields
var cursorNodes = {
  TEXTAREA: true,
  INPUT: true,
  SELECT: true,
  OPTION: true,
};

// input types that do not have text fields
var clickTypes = {
  radio: true,
  checkbox: true,
  button: true,
  submit: true,
  image: true,
  file: true,
};

// dismiss inputs with text fields. flickity#403, flickity#404
proto.okayPointerDown = function( event ) {
  var isCursorNode = cursorNodes[ event.target.nodeName ];
  var isClickType = clickTypes[ event.target.type ];
  var isOkay = !isCursorNode || isClickType;
  if ( !isOkay ) {
    this._pointerReset();
  }
  return isOkay;
};

// kludge to blur previously focused input
proto.pointerDownBlur = function() {
  var focused = document.activeElement;
  // do not blur body for IE10, metafizzy/flickity#117
  var canBlur = focused && focused.blur && focused != document.body;
  if ( canBlur ) {
    focused.blur();
  }
};

// ----- move event ----- //

/**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
  this._dragMove( event, pointer, moveVector );
};

// base pointer move logic
proto._dragPointerMove = function( event, pointer ) {
  var moveVector = {
    x: pointer.pageX - this.pointerDownPointer.pageX,
    y: pointer.pageY - this.pointerDownPointer.pageY
  };
  // start drag if pointer has moved far enough to start drag
  if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
    this._dragStart( event, pointer );
  }
  return moveVector;
};

// condition if pointer has moved far enough to start drag
proto.hasDragStarted = function( moveVector ) {
  return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
};

// ----- end event ----- //

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
  this._dragPointerUp( event, pointer );
};

proto._dragPointerUp = function( event, pointer ) {
  if ( this.isDragging ) {
    this._dragEnd( event, pointer );
  } else {
    // pointer didn't move enough for drag to start
    this._staticClick( event, pointer );
  }
};

// -------------------------- drag -------------------------- //

// dragStart
proto._dragStart = function( event, pointer ) {
  this.isDragging = true;
  // prevent clicks
  this.isPreventingClicks = true;
  this.dragStart( event, pointer );
};

proto.dragStart = function( event, pointer ) {
  this.emitEvent( 'dragStart', [ event, pointer ] );
};

// dragMove
proto._dragMove = function( event, pointer, moveVector ) {
  // do not drag if not dragging yet
  if ( !this.isDragging ) {
    return;
  }

  this.dragMove( event, pointer, moveVector );
};

proto.dragMove = function( event, pointer, moveVector ) {
  event.preventDefault();
  this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
};

// dragEnd
proto._dragEnd = function( event, pointer ) {
  // set flags
  this.isDragging = false;
  // re-enable clicking async
  setTimeout( function() {
    delete this.isPreventingClicks;
  }.bind( this ) );

  this.dragEnd( event, pointer );
};

proto.dragEnd = function( event, pointer ) {
  this.emitEvent( 'dragEnd', [ event, pointer ] );
};

// ----- onclick ----- //

// handle all clicks and prevent clicks when dragging
proto.onclick = function( event ) {
  if ( this.isPreventingClicks ) {
    event.preventDefault();
  }
};

// ----- staticClick ----- //

// triggered after pointer down & up with no/tiny movement
proto._staticClick = function( event, pointer ) {
  // ignore emulated mouse up clicks
  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
    return;
  }

  this.staticClick( event, pointer );

  // set flag for emulated clicks 300ms after touchend
  if ( event.type != 'mouseup' ) {
    this.isIgnoringMouseUp = true;
    // reset flag after 300ms
    setTimeout( function() {
      delete this.isIgnoringMouseUp;
    }.bind( this ), 400 );
  }
};

proto.staticClick = function( event, pointer ) {
  this.emitEvent( 'staticClick', [ event, pointer ] );
};

// ----- utils ----- //

Unidragger.getPointerPoint = Unipointer.getPointerPoint;

// -----  ----- //

return Unidragger;

}));


/***/ }),

/***/ "./node_modules/unipointer/unipointer.js":
/*!***********************************************!*\
  !*** ./node_modules/unipointer/unipointer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*global define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter ) {
      return factory( window, EvEmitter );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, EvEmitter ) {

'use strict';

function noop() {}

function Unipointer() {}

// inherit EvEmitter
var proto = Unipointer.prototype = Object.create( EvEmitter.prototype );

proto.bindStartEvent = function( elem ) {
  this._bindStartEvent( elem, true );
};

proto.unbindStartEvent = function( elem ) {
  this._bindStartEvent( elem, false );
};

/**
 * Add or remove start event
 * @param {Boolean} isAdd - remove if falsey
 */
proto._bindStartEvent = function( elem, isAdd ) {
  // munge isAdd, default to true
  isAdd = isAdd === undefined ? true : isAdd;
  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';

  // default to mouse events
  var startEvent = 'mousedown';
  if ( window.PointerEvent ) {
    // Pointer Events
    startEvent = 'pointerdown';
  } else if ( 'ontouchstart' in window ) {
    // Touch Events. iOS Safari
    startEvent = 'touchstart';
  }
  elem[ bindMethod ]( startEvent, this );
};

// trigger handler methods for events
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// returns the touch that we're keeping track of
proto.getTouch = function( touches ) {
  for ( var i=0; i < touches.length; i++ ) {
    var touch = touches[i];
    if ( touch.identifier == this.pointerIdentifier ) {
      return touch;
    }
  }
};

// ----- start event ----- //

proto.onmousedown = function( event ) {
  // dismiss clicks from right or middle buttons
  var button = event.button;
  if ( button && ( button !== 0 && button !== 1 ) ) {
    return;
  }
  this._pointerDown( event, event );
};

proto.ontouchstart = function( event ) {
  this._pointerDown( event, event.changedTouches[0] );
};

proto.onpointerdown = function( event ) {
  this._pointerDown( event, event );
};

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto._pointerDown = function( event, pointer ) {
  // dismiss right click and other pointers
  // button = 0 is okay, 1-4 not
  if ( event.button || this.isPointerDown ) {
    return;
  }

  this.isPointerDown = true;
  // save pointer identifier to match up touch events
  this.pointerIdentifier = pointer.pointerId !== undefined ?
    // pointerId for pointer events, touch.indentifier for touch events
    pointer.pointerId : pointer.identifier;

  this.pointerDown( event, pointer );
};

proto.pointerDown = function( event, pointer ) {
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// hash of events to be bound after start event
var postStartEvents = {
  mousedown: [ 'mousemove', 'mouseup' ],
  touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
  pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
};

proto._bindPostStartEvents = function( event ) {
  if ( !event ) {
    return;
  }
  // get proper events to match start event
  var events = postStartEvents[ event.type ];
  // bind events to node
  events.forEach( function( eventName ) {
    window.addEventListener( eventName, this );
  }, this );
  // save these arguments
  this._boundPointerEvents = events;
};

proto._unbindPostStartEvents = function() {
  // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
  if ( !this._boundPointerEvents ) {
    return;
  }
  this._boundPointerEvents.forEach( function( eventName ) {
    window.removeEventListener( eventName, this );
  }, this );

  delete this._boundPointerEvents;
};

// ----- move event ----- //

proto.onmousemove = function( event ) {
  this._pointerMove( event, event );
};

proto.onpointermove = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerMove( event, event );
  }
};

proto.ontouchmove = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerMove( event, touch );
  }
};

/**
 * pointer move
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerMove = function( event, pointer ) {
  this.pointerMove( event, pointer );
};

// public
proto.pointerMove = function( event, pointer ) {
  this.emitEvent( 'pointerMove', [ event, pointer ] );
};

// ----- end event ----- //


proto.onmouseup = function( event ) {
  this._pointerUp( event, event );
};

proto.onpointerup = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerUp( event, event );
  }
};

proto.ontouchend = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerUp( event, touch );
  }
};

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerUp = function( event, pointer ) {
  this._pointerDone();
  this.pointerUp( event, pointer );
};

// public
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
};

// ----- pointer done ----- //

// triggered on pointer up & pointer cancel
proto._pointerDone = function() {
  this._pointerReset();
  this._unbindPostStartEvents();
  this.pointerDone();
};

proto._pointerReset = function() {
  // reset properties
  this.isPointerDown = false;
  delete this.pointerIdentifier;
};

proto.pointerDone = noop;

// ----- pointer cancel ----- //

proto.onpointercancel = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerCancel( event, event );
  }
};

proto.ontouchcancel = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerCancel( event, touch );
  }
};

/**
 * pointer cancel
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerCancel = function( event, pointer ) {
  this._pointerDone();
  this.pointerCancel( event, pointer );
};

// public
proto.pointerCancel = function( event, pointer ) {
  this.emitEvent( 'pointerCancel', [ event, pointer ] );
};

// -----  ----- //

// utility function for getting x/y coords from event
Unipointer.getPointerPoint = function( pointer ) {
  return {
    x: pointer.pageX,
    y: pointer.pageY
  };
};

// -----  ----- //

return Unipointer;

}));


/***/ }),

/***/ "./resources/js/cssvars/index.js":
/*!***************************************!*\
  !*** ./resources/js/cssvars/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var vw = window.innerWidth * 0.01;
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vw', "".concat(vw, "px"));
document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
var footer = document.querySelector('.cu-footer');
var main = document.querySelector('.cu-main');
main.style.marginBottom = "".concat(footer.clientHeight, "px");

var handleWindowResize = function handleWindowResize() {
  var vw = window.innerWidth * 0.01;
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vw', "".concat(vw, "px"));
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  main.style.marginBottom = "".concat(footer.clientHeight, "px");
};

window.addEventListener('resize', handleWindowResize);

/***/ }),

/***/ "./resources/js/front.js":
/*!*******************************!*\
  !*** ./resources/js/front.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flickity_dist_flickity_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flickity/dist/flickity.min.css */ "./node_modules/flickity/dist/flickity.min.css");
/* harmony import */ var flickity_dist_flickity_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flickity_dist_flickity_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fancyapps_ui_dist_fancybox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/ui/dist/fancybox.css */ "./node_modules/@fancyapps/ui/dist/fancybox.css");
/* harmony import */ var _fancyapps_ui_dist_fancybox_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_ui_dist_fancybox_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flickity_as_nav_for__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flickity-as-nav-for */ "./node_modules/flickity-as-nav-for/as-nav-for.js");
/* harmony import */ var flickity_as_nav_for__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flickity_as_nav_for__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js");
/* harmony import */ var _cssvars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cssvars */ "./resources/js/cssvars/index.js");
/* harmony import */ var _cssvars__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_cssvars__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _togglers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./togglers */ "./resources/js/togglers/index.js");
/* harmony import */ var _togglers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_togglers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scroll */ "./resources/js/scroll/index.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scroll__WEBPACK_IMPORTED_MODULE_7__);








var homeSlider = document.querySelector('.cu-catalog__slider__wrapper');

if (homeSlider) {
  var slides = homeSlider.querySelector('.cu-card').length;

  var responsiveCells = function responsiveCells() {
    if (window.innerWidth > 1100) {
      return 5;
    } else if (window.innerWidth > 890) {
      return 4;
    } else if (window.innerWidth > 600) {
      return 3;
    } else {
      return 2;
    }
  };

  window.onload = function () {
    var slider = new flickity__WEBPACK_IMPORTED_MODULE_3___default.a(homeSlider, {
      cellAlign: 'left',
      contain: true,
      pageDots: window.innerWidth < 480,
      prevNextButtons: slides > responsiveCells(),
      groupCells: responsiveCells(),
      cellSelector: '.cu-card'
    });

    if (window.innerWidth < 860) {
      var reasons = document.querySelector('.cu-reasons__reasons');
      var reasonsSlider = new flickity__WEBPACK_IMPORTED_MODULE_3___default.a(reasons, {
        cellAlign: 'left',
        contain: true,
        pageDots: true,
        prevNextButtons: false,
        wrapAround: true,
        cellSelector: '.cu-reasons__reasons__item'
      });

      window.onresize = function () {
        slider.resize();
        reasonsSlider.resize();
      };
    }
  };
}

var singleGallery = document.querySelector('.cu-single__gallery');

if (singleGallery) {
  var scrollPos;
  var $body;

  window.onload = function () {
    $body = document.querySelector('body');
    scrollPos = 0;
    var $sidebar = document.querySelector('.cu-single__info');
    var $content = document.querySelector('.cu-single__content');
    var actions = document.querySelector('.cu-single__info__actions');
    var related = document.querySelector('.cu-related__grid');
    var panelBtn = document.querySelector('.cu-single__info__button');

    var handleContentHeight = function handleContentHeight() {
      if (window.innerWidth > 860) {
        if (panelBtn.getAttribute('aria-expanded') === "false") {
          $content.removeAttribute('style');
        } else {
          $content.style.minHeight = "".concat($sidebar.clientHeight - getStyle($sidebar, 'padding-bottom'), "px");
        }
      }
    };

    var thumbsSlider = new flickity__WEBPACK_IMPORTED_MODULE_3___default.a(singleGallery.querySelector('.cu-single__gallery__thumbs'), {
      cellSelector: '.gallery-thumb',
      cellAlign: 'left',
      contain: true,
      draggable: true,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false,
      resize: true,
      asNavFor: singleGallery.querySelector('.cu-single__gallery__main'),
      on: {
        ready: function ready() {
          singleGallery.querySelector('.cu-single__gallery__thumbs').classList.remove('loading');
        },
        change: function change(index) {
          mainSlider.select(index);
        }
      }
    });
    var mainSlider = new flickity__WEBPACK_IMPORTED_MODULE_3___default.a(singleGallery.querySelector('.cu-single__gallery__main'), {
      cellSelector: '.gallery-item',
      cellAlign: 'left',
      draggable: true,
      groupCells: 1,
      prevNextButtons: true,
      pageDots: false,
      wrapAround: true,
      resize: true,
      contain: true,
      on: {
        ready: function ready(index) {
          singleGallery.querySelector('.cu-single__gallery__main').classList.remove('loading');
          handleContentHeight();
        },
        change: function change(index) {
          thumbsSlider.select(index);
        }
      }
    });
    panelBtn.addEventListener('click', function (e) {
      e.preventDefault();
      singleGallery.querySelector('.cu-single__gallery__thumbs').classList.add('loading');
      singleGallery.querySelector('.cu-single__gallery__main').classList.add('loading');
      setTimeout(function () {
        resizeSliders();
        singleGallery.querySelector('.cu-single__gallery__thumbs').classList.remove('loading');
        singleGallery.querySelector('.cu-single__gallery__main').classList.remove('loading');
        handleContentHeight();
      }, 310);
    });

    if (window.innerWidth <= 1366) {
      var actionSlider = new flickity__WEBPACK_IMPORTED_MODULE_3___default.a(actions, {
        cellSelector: '.cu-single__info__actions__item',
        cellAlign: 'left',
        draggable: true,
        groupCells: 1,
        prevNextButtons: false,
        pageDots: true,
        resize: true,
        contain: true,
        on: {
          ready: function ready() {
            handleContentHeight();
          }
        }
      });
    }

    if (window.innerWidth <= 1100) {
      var relatedSlider = new flickity__WEBPACK_IMPORTED_MODULE_3___default.a(related, {
        cellSelector: '.cu-card',
        cellAlign: 'left',
        draggable: true,
        groupCells: 1,
        prevNextButtons: false,
        wrapAround: true,
        pageDots: true,
        resize: true,
        contain: true
      });
    }

    window.addEventListener('resize', function () {
      resizeSliders();
    });

    var resizeSliders = function resizeSliders() {
      mainSlider.resize();
      mainSlider.reposition();
      thumbsSlider.resize();
      thumbsSlider.reposition();
    };
  };

  var pointsBtn = document.querySelector('.see-points');

  if (pointsBtn) {
    var modal = document.querySelector('.cu-modal');
    var closeBtn = modal.querySelector('.cu-modal__close');
    pointsBtn.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('active');
      disableScroll();
    });
    closeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.remove('active');
      enableScroll();
    });
  }

  var getStyle = function getStyle(oElm, strCssRule) {
    var strValue = "";

    if (document.defaultView && document.defaultView.getComputedStyle) {
      strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
    } else if (oElm.currentStyle) {
      strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1) {
        return p1.toUpperCase();
      });
      strValue = oElm.currentStyle[strCssRule];
    }

    return parseInt(strValue.replace(/\D/g, ''));
  };

  var disableScroll = function disableScroll() {
    scrollPos = window.pageYOffset;
    $body.style.overflow = 'hidden';
    $body.style.position = 'fixed';
    $body.style.top = "-".concat(scrollPos, "px");
    $body.style.width = '100%';
  };

  var enableScroll = function enableScroll() {
    $body.style.removeProperty('overflow');
    $body.style.removeProperty('position');
    $body.style.removeProperty('top');
    $body.style.removeProperty('width');
    window.scrollTo(0, scrollPos);
  };
}

/***/ }),

/***/ "./resources/js/scroll/index.js":
/*!**************************************!*\
  !*** ./resources/js/scroll/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lastKnownScrollPosition = 0;
var ticking = false;
$header = document.querySelector('.cu-header');
$mainbar = $header.querySelector('.cu-header__bar');

var handleScroll = function handleScroll(scrollPos) {
  if (scrollPos > lastKnownScrollPosition) {
    if (scrollPos > 0) {
      $header.classList.add('cu-header--scrolled');
    }
  } else {
    if (scrollPos <= $mainbar.clientHeight) {
      $header.classList.remove('cu-header--scrolled');
    }
  }
};

document.addEventListener('scroll', function (e) {
  var sc = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      handleScroll(sc);
      ticking = false;
    });
    ticking = true;
  }

  lastKnownScrollPosition = sc < 0 ? 0 : 0;
});

/***/ }),

/***/ "./resources/js/togglers/index.js":
/*!****************************************!*\
  !*** ./resources/js/togglers/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var controllers = document.querySelectorAll('[aria-controls]');

  if (!controllers) {
    return;
  }

  var clickHandler = function clickHandler() {
    var target = document.querySelector('#' + this.getAttribute('aria-controls'));

    if (!target) {
      console.error("Target #".concat(this.getAttribute('aria-controls'), " not found"));
      return;
    }

    target.setAttribute('aria-hidden', target.getAttribute('aria-hidden') == 'true' ? 'false' : 'true');
    document.querySelectorAll("[aria-controls=\"".concat(target.id, "\"]")).forEach(function (controller) {
      controller.setAttribute('aria-expanded', target.getAttribute('aria-hidden') === 'true' ? 'false' : 'true');
    }); // Focus the first form field in the Target if there is one

    if (target.getAttribute('aria-hidden') === 'false' && target.querySelector('input')) {
      var field_focused = false;
      var inputs = target.getElementsByTagName('input');

      if (inputs.length) {
        Array.from(inputs).map(function (field) {
          if (field_focused) {
            return;
          }

          var style = window.getComputedStyle(field);

          if (!(style.display === 'none' || style.visibility === 'hidden')) {
            target.querySelector('input').focus();
            field_focused = true;
          }
        });
      }
    }

    if (!!target.dataset.rootStyle && target.dataset.rootStyle !== '') {
      if (target.getAttribute('aria-hidden') === 'false') {
        document.documentElement.classList.add(target.dataset.rootStyle);
      } else {
        document.documentElement.classList.remove(target.dataset.rootStyle);
      }
    }
  };

  controllers.forEach(function (controller) {
    controller.addEventListener('click', clickHandler);
  });
})();

/***/ }),

/***/ "./resources/sass/front.scss":
/*!***********************************!*\
  !*** ./resources/sass/front.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/sb-admin.scss":
/*!**************************************!*\
  !*** ./resources/sass/sb-admin.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!************************************************************************************************!*\
  !*** multi ./resources/js/front.js ./resources/sass/front.scss ./resources/sass/sb-admin.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/robbieroch/Sites/carrosusados/resources/js/front.js */"./resources/js/front.js");
__webpack_require__(/*! /Users/robbieroch/Sites/carrosusados/resources/sass/front.scss */"./resources/sass/front.scss");
module.exports = __webpack_require__(/*! /Users/robbieroch/Sites/carrosusados/resources/sass/sb-admin.scss */"./resources/sass/sb-admin.scss");


/***/ })

/******/ });