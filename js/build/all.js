function FastClick(a){var b,c=this;if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.layer=a,!a||!a.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return FastClick.prototype.onClick.apply(c,arguments)},this.onMouse=function(){return FastClick.prototype.onMouse.apply(c,arguments)},this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(c,arguments)},this.onTouchMove=function(){return FastClick.prototype.onTouchMove.apply(c,arguments)},this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(c,arguments)},this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(c,arguments)},FastClick.notNeeded(a)||(this.deviceIsAndroid&&(a.addEventListener("mouseover",this.onMouse,!0),a.addEventListener("mousedown",this.onMouse,!0),a.addEventListener("mouseup",this.onMouse,!0)),a.addEventListener("click",this.onClick,!0),a.addEventListener("touchstart",this.onTouchStart,!1),a.addEventListener("touchmove",this.onTouchMove,!1),a.addEventListener("touchend",this.onTouchEnd,!1),a.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(a.removeEventListener=function(b,c,d){var e=Node.prototype.removeEventListener;"click"===b?e.call(a,b,c.hijacked||c,d):e.call(a,b,c,d)},a.addEventListener=function(b,c,d){var e=Node.prototype.addEventListener;"click"===b?e.call(a,b,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(a,b,c,d)}),"function"==typeof a.onclick&&(b=a.onclick,a.addEventListener("click",function(a){b(a)},!1),a.onclick=null))}!function(a){function b(a,b){for(var c,d=a.cssRules?a.cssRules:a.media,e=[],f=d.length,g=0;f>g;g++)c=d[g],b(c)&&e.push(c);return e}function c(a){return b(a,function(a){return a.selectorText?0===a.selectorText.indexOf(".classquery-")?!0:!1:!1})}function d(b){var c=window.location,d=a.createElement("a");return d.href=b,d.hostname===c.hostname&&d.protocol===c.protocol}function e(a){return a.ownerNode?a.ownerNode.constructor===HTMLStyleElement:!1}function f(a){return a.href&&d(a.href)}function g(){var b,c=a.styleSheets,d=c.length,g=0,h=[];for(g;d>g;g++)b=c[g],(f(b)||e(b))&&h.push(b);return h}var h=a.documentElement,i="classquery",j=a.querySelectorAll("[data-"+i+"]"),k=j.length;if(0!==k){for(var l=g(),m=l.length,n=[],o=0;m>o;o++)n=n.concat(c(l[o]));if(0!==n.length){h.className+=" "+i+"-init";for(var p,q,r,s,t,u,v,w,x,y,z,A,B,C=i+"-id",D=n.length,E="",F=0;k>F;F++){p=j[F],p.setAttribute("data-"+C,F),q=p.getAttribute("data-"+i).split(";"),r=q.length,s=p.getAttribute("class")?"."+p.getAttribute("class").replace(/\s+/g,"."):"",t=p.getAttribute("id")?"#"+p.getAttribute("id"):"";for(var G=0;r>G;G++){u=q[G].split(","),v=u.length;for(var H=0;D>H;H++)for(var I=0;v>I;I++)u[I]=u[I].trim(),I%2===1&&n[H].selectorText.indexOf(u[I])>-1&&(w=n[H].selectorText.replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\(/g,"\\(").replace(/\)/g,"\\)").replace(/\*/g,"\\*").replace(/\+/g,"\\+").replace(/\^/g,"\\^").replace(/\$/g,"\\$")+"\\s*?{",x=new RegExp(w,"g"),y="("+u[I]+")(.*?)(,|{)",z=new RegExp(y),A="[data-"+C+'="'+F+'"]'+s+t+w.match(z)[2].replace("s*?","").replace(/\\/g,""),E+="@media "+u[I-1]+"{"+A+" {"+n[H].cssText.replace(x,"")+"}\n")}}B=a.createElement("style"),B.appendChild(a.createTextNode(E)),a.head.appendChild(B),h.className=h.className.replace(i+"-init",i+"-complete")}}}(document),window.Swipe=function(a,b){if(!a)return null;this.options=b||{},this.index=this.options.startSlide||0,this.oldIndex=this.index,this.speed=this.options.speed||300,this.complete=this.options.complete||function(){},this.callback=this.options.callback||function(){},this.touchCallback=this.options.touchCallback||function(){},this.circular=this.options.circular||!1,this.hasEnded=!1,this.container=a,this.element=this.container.children[0],this.container.style.overflow="hidden",this.element.style.listStyle="none",this.element.style.margin=0,this.setup(),this.begin(),this.element.addEventListener&&(this.element.addEventListener("touchstart",this,!1),this.element.addEventListener("touchmove",this,!1),this.element.addEventListener("touchend",this,!1),this.element.addEventListener("touchcancel",this,!1),this.element.addEventListener("webkitTransitionEnd",this,!1),this.element.addEventListener("msTransitionEnd",this,!1),this.element.addEventListener("oTransitionEnd",this,!1),this.element.addEventListener("transitionend",this,!1),window.addEventListener("resize",this,!1))},Swipe.prototype={setup:function(){if(this.slides=this.element.children,this.length=this.slides.length,this.length<2)return null;if(this.width=Math.ceil("getBoundingClientRect"in this.container?this.container.getBoundingClientRect().width:this.container.offsetWidth),!this.width)return null;this.container.style.visibility="hidden",this.element.style.width=Math.ceil(this.slides.length*this.width)+"px";for(var a=this.slides.length;a--;){var b=this.slides[a];b.style.width=this.width+"px",b.style.display="table-cell",b.style.verticalAlign="top"}this.complete(this.index,this.slides[this.index])},slide:function(a,b){if(!this.hasEnded){if(this.oldIndex===this.length-2&&this.index===this.length-1&&0===a)return this.slide(2),void 0;if(1===this.oldIndex&&0===this.index&&a===this.length-1)return this.slide(this.length-3),void 0}var c=this.element.style;void 0==b&&(b=this.speed),c.webkitTransitionDuration=c.MozTransitionDuration=c.msTransitionDuration=c.OTransitionDuration=c.transitionDuration=b+"ms",c.MozTransform=c.webkitTransform="translate3d("+-(a*this.width)+"px,0,0)",c.msTransform=c.OTransform="translateX("+-(a*this.width)+"px)",this.oldIndex=this.index,this.index=a,this.hasEnded=!1},getPos:function(){return this.index},prev:function(){this.index?this.slide(this.index-1,this.speed):this.slide(this.length-1,this.speed)},next:function(){this.index<this.length-1?this.slide(this.index+1,this.speed):this.slide(0,this.speed)},begin:function(){},resume:function(){this.begin()},handleEvent:function(a){switch(a.type){case"touchstart":this.onTouchStart(a);break;case"touchmove":this.onTouchMove(a);break;case"touchcancel":case"touchend":this.onTouchEnd(a);break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"transitionend":this.transitionEnd(a);break;case"resize":this.setup()}},transitionEnd:function(a){a.target.className.indexOf("slider")<0||(this.hasEnded=!0,this.circular&&(this.index===this.length-1&&this.oldIndex>0?this.slide(1,0):0===this.index&&this.slide(this.length-2,0)),this.callback(a,this.index,this.slides[this.index]))},onTouchStart:function(a){this.start={pageX:a.touches[0].pageX,pageY:a.touches[0].pageY,time:Number(new Date)},this.isScrolling=void 0,this.deltaX=0,this.element.style.MozTransitionDuration=this.element.style.webkitTransitionDuration=this.element.style.transitionDuration=0,this.element.style.MozTransitionTimingFunction=this.element.style.OTransitionTimingFunction=this.element.style.webkitTransitionTimingFunction=this.element.style.transitionTimingFunction="linear",a.stopPropagation()},onTouchMove:function(a){a.touches.length>1||a.scale&&1!==a.scale||(this.deltaX=a.touches[0].pageX-this.start.pageX,"undefined"==typeof this.isScrolling&&(this.isScrolling=!!(this.isScrolling||Math.abs(this.deltaX)<Math.abs(a.touches[0].pageY-this.start.pageY))),this.isScrolling||(a.preventDefault(),this.deltaX=this.deltaX/(!this.index&&this.deltaX>0||this.index==this.length-1&&this.deltaX<0?Math.abs(this.deltaX)/this.width+1:1),this.element.style.MozTransform=this.element.style.webkitTransform="translate3d("+(this.deltaX-this.index*this.width)+"px,0,0)",a.stopPropagation()))},onTouchEnd:function(a){var b=Number(new Date)-this.start.time<250&&Math.abs(this.deltaX)>20||Math.abs(this.deltaX)>this.width/2,c=!this.index&&this.deltaX>0||this.index==this.length-1&&this.deltaX<0;this.isScrolling||(this.slide(this.index+(b&&!c?this.deltaX<0?1:-1:0),300),this.touchCallback()),a.stopPropagation()}},function(a,b,c){function d(a){var c="hwa";a&&(c=a+c),b.documentElement.className+=" "+c}if("mozilla"===layoutEngine.vendor&&"windows"===cssua.ua.desktop){var e=b.createElement("div"),f=b.createElement("div"),g="bottom: 0; line-height: normal; position: absolute; visibility: hidden; font-family: Arial; font-size: ",h="no-";e.appendChild(b.createTextNode("1")),f.appendChild(b.createTextNode("2")),e.setAttribute("style",g+"20px"),f.setAttribute("style",g+"35px"),c.appendChild(e),c.appendChild(f);var i=parseFloat(a.getComputedStyle(e).getPropertyValue("font-size")),j=parseFloat(e.offsetHeight),k=parseFloat(f.offsetHeight);c.removeChild(e),c.removeChild(f),20===i?25===j&&41===k?d():25===j&&40===k?d(h):25===j&&42===k?d():24===j&&40===k?d(h):23===j&&40===k?d(h):24===j&&41===k?d(h):24===j&&42===k?d():d(h):16===i?20===j?d():d(h):17.9833===i?38===k?d():d(h):22===i?46===k?d():d(h):24===i?29===j?d():d(h):26.6===i?32===j?d():d(h):d(h)}}(window,document,document.body),FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),FastClick.prototype.needsClick=function(a){switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(this.deviceIsIOS&&"file"===a.type||a.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(a.className)},FastClick.prototype.needsFocus=function(a){switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!this.deviceIsAndroid;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},FastClick.prototype.sendClick=function(a,b){var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},FastClick.prototype.determineEventType=function(a){return this.deviceIsAndroid&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(a){var b;this.deviceIsIOS&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},FastClick.prototype.updateScrollParent=function(a){var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(a){return a.nodeType===Node.TEXT_NODE?a.parentNode:a},FastClick.prototype.onTouchStart=function(a){var b,c,d;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],this.deviceIsIOS){if(d=window.getSelection(),d.rangeCount&&!d.isCollapsed)return!0;if(!this.deviceIsIOS4){if(c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<200&&a.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(a){var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c?!0:!1},FastClick.prototype.onTouchMove=function(a){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(a){return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(a){var b,c,d,e,f,g=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,c=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(f=a.changedTouches[0],g=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||g,g.fastClickScrollParent=this.targetElement.fastClickScrollParent),d=g.tagName.toLowerCase(),"label"===d){if(b=this.findControl(g)){if(this.focus(g),this.deviceIsAndroid)return!1;g=b}}else if(this.needsFocus(g))return a.timeStamp-c>100||this.deviceIsIOS&&window.top!==window&&"input"===d?(this.targetElement=null,!1):(this.focus(g),this.deviceIsIOS4&&"select"===d||(this.targetElement=null,a.preventDefault()),!1);return this.deviceIsIOS&&!this.deviceIsIOS4&&(e=g.fastClickScrollParent,e&&e.fastClickLastScrollTop!==e.scrollTop)?!0:(this.needsClick(g)||(a.preventDefault(),this.sendClick(g,a)),!1)},FastClick.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(a){return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable?!this.needsClick(this.targetElement)||this.cancelNextClick?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0:!0},FastClick.prototype.onClick=function(a){var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(b=this.onMouse(a),b||(this.targetElement=null),b)},FastClick.prototype.destroy=function(){var a=this.layer;this.deviceIsAndroid&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(a){var b,c;if("undefined"==typeof window.ontouchstart)return!0;if(c=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!FastClick.prototype.deviceIsAndroid)return!0;if(b=document.querySelector("meta[name=viewport]")){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(c>31&&window.innerWidth<=window.screen.width)return!0}}return"none"===a.style.msTouchAction?!0:!1},FastClick.attach=function(a){return new FastClick(a)},"undefined"!=typeof define&&define.amd?define(function(){return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick,function(a){a.fn.rwdImages=function(b){var c=a.extend({display:"inline-block",zindex:!1},b),d=a(this),e=document.documentElement.style,f="behavior"in e&&"widows"in e&&!("fill"in e)?!0:!1,g=-1!=navigator.appVersion.indexOf("MSIE 7")?!0:!1,h="display:"+c.display+"; max-width:100%; position:relative;",i="";if(d.length>0){var j,k="background-image",l=/(url\("?)(.*?)("?\))/gi,m="src",n="rwd-swap";c.zindex&&(h+=" z-index:"+c.zindex),f&&(i='-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";'),a("head").append("<style>."+n+"{height:100%;left:0;opacity:0;"+i+"position:absolute;top:0;width:100%}</style>"),d.each(function(){var b,c=a(this),e=c.css(k);e.match(l)&&(b=e.replace(l,"$2")),g?c.attr(m,b).css("background-image","none").wrap('<span class="rwd-wrap" style="'+h+'" />'):c.wrap('<span class="rwd-wrap" style="'+h+'" />').clone().removeClass(d.attr("class")).addClass(n).appendTo(c.parent()).attr(m,b)}),g||(j=a("img."+n),a(window).resize(function(){j.each(function(){var b=a(this),c=b.prev(),d=c.css(k);d.match(l)&&b.attr(m,d.replace(l,"$2"))})}))}return this}}(jQuery),function(a,b){$(b).ready(function(){d.addClass("jquery"),FastClick.attach(b.body),g.init(),h.init(),i.init(),j.init(),k.init(),l.init(),$("img.rwd").rwdImages({display:"block"})});var c=b.documentElement,d=$(c),e=function(a,b,c){var d=function(a){return a.toString().replace(/\s|'|"/g,"-")};"undefined"!=typeof _gaq&&_gaq.push(["_trackEvent",d(a),d(b),d(c)])},f={set:function(a,c,d){var e="";if(d){var f=new Date;f.setTime(f.getTime()+24*d*60*60*1e3),e="; expires="+f.toGMTString()}b.cookie=a+"="+c+e+"; path=/"},read:function(a){for(var c=a+"=",d=b.cookie.split(";"),e=0;e<d.length;e++){for(var f=d[e];" "===f.charAt(0);)f=f.substring(1,f.length);if(0===f.indexOf(c))return f.substring(c.length,f.length)}return null},erase:function(a){f.set(a,"",-1)}},g={init:function(){if(!Modernizr.input.placeholder){var a=$("[placeholder]");a.focus(function(){var a=$(this);a.val()===a.attr("placeholder")&&a.val("").removeClass("placeholder")}).blur(function(){var a=$(this);(""===a.val()||a.val()===a.attr("placeholder"))&&a.addClass("placeholder").val(a.attr("placeholder"))}).blur(),a.parents("form").on("submit",function(){$(this).find("[placeholder]").each(function(){var a=$(this);a.val()===a.attr("placeholder")&&a.val("")})})}d.addClass("placeholder")}},h={requiredFields:[],init:function(){var a=$("form");a.each(function(a){var b=$(this);h.requiredFields[a]=b.find("[required]"),b.on("submit",function(){return h.validate(b,a)})})},validate:function(a,b){var c=$(h.requiredFields[b]),d=!1,e="tested";return c.removeClass("form_error").removeClass(e),c.each(function(){var a=$(this);if(a.is('[type="radio"], [type="checkbox"]')&&!a.hasClass(e)){var b=a.attr("name"),f=c.filter('[name="'+b+'"]');f.is(":checked")||(f.addClass("form_error"),a.attr("aria-invalid",!1)),f.addClass(e)}0===$.trim(a.val()).length&&(a.addClass("form_error"),a.attr("aria-invalid",!1),d=!0)}),c.filter("form_error:first").focus(),!d}},i={swipejs:Modernizr.csstransforms3d||"opera"===layoutEngine.vendor,$imagesLazy:[],init:function(){var b=$(".carousel");b.length&&b.each(function(b){var c=$(this),g=c.find(".slider"),h=g.find("> li"),j=h.length,k=0,l=!1,m=!1,n="carouselid-"+a.location.pathname+"-"+b,o=f.read(n),p=c.data("circular")===!1?!1:!0;if(i.swipejs&&p&&(h.eq(0).clone().appendTo(g),h.eq(j-1).clone().prependTo(g),h=g.find("> li"),j+=2),o&&(k=parseInt(o)),i.swipejs&&p&&0===k&&(k=1),i.$imagesLazy[b]=h.find("[data-src]"),1===j){i.lazyLoad(i.$imagesLazy[b].eq(k),b,k,j);var q=c.find(".inner");h.css("visibility","visible"),q.css("visibility","visible")}else{var r="",s=!1,t=!0,u=!0,v=300;if(i.lazyLoad(i.$imagesLazy[b].eq(k),b,k,j),parseInt(c.data("interval"))&&(s=parseInt(1e3*c.data("interval"))),c.data("nav")===!1)t=!1;else var w=$('<a href="#previous" class="carousel_nav prev"><span>Previous</span></a>'),x=$('<a href="#next" class="carousel_nav next"><span>Next</span></a>');if(c.data("pager")===!1)u=!1;else var y=$('<ul class="carousel_nav_pager reset menu" />');if(t&&c.append(w).append(x),u&&c.append(y),parseInt(c.data("speed"))&&(v=parseInt(c.data("speed"))),c.addClass("multiple"),i.swipejs){var z=!1,A=function(){d.removeClass("resizing"),z=!1};if($(a).resize(function(){clearTimeout(a.resizeTimer),z||(d.addClass("resizing"),z=!0),a.resizeTimer=setTimeout(A,250)}),u){for(var B=1;j>=B;B++)r+='<li><a href="#slide-'+B+'">Slide '+B+"</a></li>";y.append(r);var C=y.find("li"),D=y.find("a");p&&(C.eq(0).hide(),C.eq(j-1).hide())}var q=c.find(".inner"),E=new Swipe(q[0],{circular:p,speed:v,complete:function(){this.slide(k),l=!0},touchCallback:function(){F()},callback:function(a,c){l&&!m&&(m=!0,h.css("visibility","visible"),q.css("visibility","visible")),h.attr("aria-hidden",!0).eq(c).attr("aria-hidden",!1),i.lazyLoad(i.$imagesLazy[b].eq(c)),c>k?j-1>c?(i.lazyLoad(i.$imagesLazy[b].eq(c+1)),p&&c===j-2&&1===k&&i.lazyLoad(i.$imagesLazy[b].eq(c-1))):c===j-1&&0===k&&i.lazyLoad(i.$imagesLazy[b].eq(c-1)):k>c&&(0===c?k>1?i.lazyLoad(i.$imagesLazy[b].eq(c+1)):i.lazyLoad(i.$imagesLazy[b].eq(c-1)):p&&1===c?i.lazyLoad(i.$imagesLazy[b].eq(c-1)):c>1&&i.lazyLoad(i.$imagesLazy[b].eq(c-1))),u&&C.removeClass("current").eq(c).addClass("current"),s||e("Website","Carousel","Slide "+(c+1)),k=c,f.set(n,k)}});c.addClass("swipejs");var F=function(){s&&(a.clearTimeout(timer),s=!1)};t&&(w.on("click",function(a){a.preventDefault(),E.prev(),F()}),x.on("click",function(a){a.preventDefault(),E.next(),F()})),u&&D.each(function(a){var c=a;$(this).on("click",function(a){a.preventDefault(),i.lazyLoad(i.$imagesLazy[b].eq(c)),E.slide(c),C.removeClass("current"),$(this).parent().addClass("current"),F()})});var G=function(){E.next()};if(s){timer=a.setInterval(G,s);var H=c.find(".tile");H.hover(function(b){b.stopPropagation(),s&&a.clearTimeout(timer)},function(b){b.stopPropagation(),s&&(timer=a.setInterval(G,s))})}}else{var q=c.find(".slider"),I="width: 100% !important",J={activePagerClass:"current",cleartypeNoBg:!0,easing:"easeInOutQuint",fx:"scrollHorz",pause:!0,speed:v,startingSlide:k,timeout:s,after:function(a,c,d){var e=d.currSlide;i.lazyLoad(i.$imagesLazy[b].eq(e)),e>k?j-1>e?i.lazyLoad(i.$imagesLazy[b].eq(e+1)):e===j-1&&0===k&&i.lazyLoad(i.$imagesLazy[b].eq(e-1)):k>e&&(0===e?k>1?i.lazyLoad(i.$imagesLazy[b].eq(e+1)):i.lazyLoad(i.$imagesLazy[b].eq(e-1)):e>1&&i.lazyLoad(i.$imagesLazy[b].eq(e-1))),h.attr("aria-hidden",!0).eq(e).attr("aria-hidden",!1),k=e,f.set(n,k)}};t&&(w.attr("id","nav_prev-"+b),x.attr("id","nav_next-"+b),J.prev="#nav_prev-"+b,J.next="#nav_next-"+b),u&&(y.attr("id","nav_pager-"+b),J.pager="#nav_pager-"+b,J.pagerAnchorBuilder=function(a){return'<li><a href="#slide-'+(a+1)+'">Slide '+(a+1)+"</a></li>"}),q.attr("style",I).find("li").attr("style",I),Modernizr.load({load:["/js/jquery.cycle.all.min.js","/js/jquery.easing.1.3.min.js"],complete:function(){q.cycle(J).css("visibility","visible").closest(".carousel").addClass("jqcycle"),h.css("visibility","visible"),t&&(w.on("click",function(a){a.preventDefault(),q.cycle("pause")}),x.on("click",function(a){a.preventDefault(),q.cycle("pause")})),u&&y.css("z-index",j+1).find("a").each(function(a){$(this).on("click",function(){i.lazyLoad(i.$imagesLazy[b].eq(a)),q.cycle("pause")})})}})}}})},lazyLoad:function(a,b,c,d){var e=$(a),f=e.data("src"),g=e.next(".rwd-swap");if(f&&!e.data("loaded")){var h=new Image;h.onload=function(){e.data("bg-src")===!1?e[0].src=f:e[0].style.backgroundImage="url("+f+")",e.data("loaded",!0),d&&(0===c?(i.lazyLoad(i.$imagesLazy[b].eq(c+1)),i.lazyLoad(i.$imagesLazy[b].eq(d-1))):c===d-1?(i.lazyLoad(i.$imagesLazy[b].eq(0)),i.lazyLoad(i.$imagesLazy[b].eq(c-1))):(i.lazyLoad(i.$imagesLazy[b].eq(c+1)),i.lazyLoad(i.$imagesLazy[b].eq(c-1)))),1===g.length&&(g[0].src=f)},h.src=f}}},j={init:function(){var b=$(".tabs");b.each(function(b){var c=$(this),d=c.find("> li a"),g=c.nextAll(".panes:first").find("> .pane"),h="tabid-"+a.location.pathname+"-"+b,i=f.read(h);i?(d.eq(i).addClass("current"),g.hide().attr("aria-hidden",!0),g.eq(i).show().attr("aria-hidden",!1)):(d.eq(0).addClass("current"),g.not(":first").attr("aria-hidden",!0)),d.on("click",function(a){a.preventDefault();var b=$(this),c=b.parent().index();b.hasClass("current")||(d.removeClass("current"),b.addClass("current")),g.hide().attr("aria-hidden",!0),g.eq(c).show().attr("aria-hidden",!1),f.set(h,c),e("Website","Tabs",h+"-"+c)})})}},k={init:function(){var c=$(".accordion");c.length>0&&Modernizr.load({load:"/js/jquery.transit.min.js",complete:function(){if(c.each(function(b){var c=$(this),d=c.data("multiple"),g=c.find(".accordion_toggler"),h=c.find(".accordion_content"),i="accordionid-"+a.location.pathname+"-"+b,j=f.read(i);h.each(function(){if(a.getComputedStyle){var b=$(this),c=a.getComputedStyle(this).getPropertyValue("transition-duration")||a.getComputedStyle(this).getPropertyValue("-webkit-transition-duration"),d=a.getComputedStyle(this).getPropertyValue("transition-timing-function")||a.getComputedStyle(this).getPropertyValue("-webkit-transition-timing-function");c=c.match(/\d+s$/g)?1e3*parseFloat(c):parseInt(c),b.attr("aria-hidden",!0).data("transition-duration",c).data("transition-timing-function",d)}}),g.each(function(a){var b=$(this),c=h.eq(a);j||!d?parseInt(j)===a&&(g.removeClass("open"),b.addClass("open is_open"),c.attr("aria-hidden",!1),c.css("height",c.height())):b.hasClass("open")&&(b.addClass("is_open"),c.attr("aria-hidden",!1),c.css("height",c.height()),d||f.set(i,a)),b.on("click",function(b){b.preventDefault();var c=$(this),j=c.next(),k="auto",l=j.data("transition-duration"),m=j.data("transition-timing-function"),n=!1;d?(c.removeClass("open").toggleClass("is_open"),"false"==j.attr("aria-hidden")&&(n=!0,k=0),j.attr("aria-hidden",n).transition({height:k},l,m)):(g.removeClass("open"),h.each(function(b){b===a?$(this).attr("aria-hidden",!1).removeClass("is_open").transition({height:k},l,m):$(this).attr("aria-hidden",!0).addClass("is_open").transition({height:0},l,m)})),d||(f.set(i,a),e("Website","Accordions",i+"-"+a))})})}),a.getComputedStyle){var d=b.createElement("style");d.appendChild(b.createTextNode(".jquery .accordion_content { -moz-transition: none; -o-transition: none; -webkit-transition: none; transition: none; }")),b.head.appendChild(d)}}})}},l={init:function(){"ie"===layoutEngine.vendor&&9===layoutEngine.version&&this.gridFix()},gridFix:function(){$("table").each(function(){$(this).append('<tr class="ie9_grid_dummy"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>')})}}}(window,document);