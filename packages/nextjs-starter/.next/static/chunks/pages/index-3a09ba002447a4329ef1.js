(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3114:function(e,t,n){"use strict";var i=n(8066),r=n(6563);t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,s=void 0!==r&&r,d=e.priority,u=void 0!==d&&d,h=e.loading,g=e.lazyBoundary,b=void 0===g?"200px":g,v=e.className,x=e.quality,y=e.width,w=e.height,z=e.objectFit,S=e.objectPosition,k=e.onLoadingComplete,N=e.loader,O=void 0===N?A:N,E=e.placeholder,I=void 0===E?"empty":E,P=e.blurDataURL,D=function(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),L=n?"responsive":"intrinsic";"layout"in D&&(D.layout&&(L=D.layout),delete D.layout);var R="";if(function(e){return"object"===typeof e&&(p(e)||function(e){return void 0!==e.src}(e))}(t)){var q=p(t)?t.default:t;if(!q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(q)));if(P=P||q.blurDataURL,R=q.src,(!L||"fill"!==L)&&(w=w||q.height,y=y||q.width,!q.height||!q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(q)))}t="string"===typeof t?t:R;var H=_(y),C=_(w),M=_(x),W=!u&&("lazy"===h||"undefined"===typeof h);(t.startsWith("data:")||t.startsWith("blob:"))&&(s=!0,W=!1);m.has(t)&&(W=!1);0;var B,U,F,T=l.useIntersection({rootMargin:b,disabled:!W}),V=i(T,2),G=V[0],J=V[1],X=!W||J,Y={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:z,objectPosition:S},Q="blur"===I?{filter:"blur(20px)",backgroundSize:z||"cover",backgroundImage:'url("'.concat(P,'")'),backgroundPosition:S||"0% 0%"}:{};if("fill"===L)B={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof H&&"undefined"!==typeof C){var Z=C/H,K=isNaN(Z)?"100%":"".concat(100*Z,"%");"responsive"===L?(B={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},U={display:"block",boxSizing:"border-box",paddingTop:K}):"intrinsic"===L?(B={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},U={boxSizing:"border-box",display:"block",maxWidth:"100%"},F='<svg width="'.concat(H,'" height="').concat(C,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===L&&(B={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:H,height:C})}else 0;var $={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};X&&($=j({src:t,unoptimized:s,layout:L,width:H,quality:M,sizes:n,loader:O}));var ee=t;return o.default.createElement("div",{style:B},U?o.default.createElement("div",{style:U},F?o.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(F))}):null):null,o.default.createElement("img",Object.assign({},D,$,{decoding:"async","data-nimg":L,className:v,ref:function(e){G(e),function(e,t,n,i,r){if(!e)return;var o=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===i&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),m.add(t),r){var n=e.naturalWidth,o=e.naturalHeight;r({naturalWidth:n,naturalHeight:o})}}))};e.complete?o():e.onload=o}(e,ee,0,I,k)},style:f({},Y,Q)})),o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},D,j({src:t,unoptimized:s,layout:L,width:H,quality:M,sizes:n,loader:O}),{decoding:"async","data-nimg":L,style:Y,className:v,loading:h||"lazy"}))),u?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imagesrcset:$.srcSet,imagesizes:$.sizes})):null)};var o=u(n(2784)),a=u(n(2722)),c=n(7677),s=n(9406),l=n(9727);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){d(e,t,n[t])}))}return e}var m=new Set;var h=new Map([["default",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t).concat(z(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(z(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(z(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function p(e){return void 0!==e.default}var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||s.imageConfigDefault,b=g.deviceSizes,v=g.imageSizes,x=g.loader,y=g.path,w=(g.domains,[].concat(r(b),r(v)));function j(e){var t=e.src,n=e.unoptimized,i=e.layout,o=e.width,a=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var i,o=/(^|\s)(1?\d?\d)vw/g,a=[];i=o.exec(n);i)a.push(parseInt(i[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:w.filter((function(e){return e>=b[0]*c})),kind:"w"}}return{widths:w,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:b,kind:"w"}:{widths:r(new Set([e,2*e].map((function(e){return w.find((function(t){return t>=e}))||w[w.length-1]})))),kind:"x"}}(o,i,c),d=l.widths,u=l.kind,f=d.length-1;return{sizes:c||"w"!==u?c:"100vw",srcSet:d.map((function(e,n){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===u?e:n+1).concat(u)})).join(", "),src:s({src:t,quality:a,width:d[f]})}}function _(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t=h.get(x);if(t)return t(f({root:y},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(x))}function z(e){return"/"===e[0]?e.slice(1):e}b.sort((function(e,t){return e-t})),w.sort((function(e,t){return e-t}))},9727:function(e,t,n){"use strict";var i=n(8066);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=r.useRef(),l=r.useState(!1),d=i(l,2),u=d[0],f=d[1],m=r.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||u||e&&e.tagName&&(s.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return r.useEffect((function(){if(!a&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[m,u]};var r=n(2784),o=n(4519),a="undefined"!==typeof IntersectionObserver;var c=new Map},7677:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},9569:function(e,t,n){"use strict";n.r(t);var i=n(7729),r=n(6577),o=n(7121),a=n.n(o),c=n(2322);t.default=function(){return(0,c.jsxs)("div",{className:a().container,children:[(0,c.jsxs)(i.default,{children:[(0,c.jsx)("title",{children:"Create Next App"}),(0,c.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,c.jsxs)("main",{className:a().main,children:[(0,c.jsxs)("h1",{className:a().title,children:["Welcome to ",(0,c.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,c.jsxs)("p",{className:a().description,children:["Get started by editing ",(0,c.jsx)("code",{className:a().code,children:"pages/index.js"})]}),(0,c.jsxs)("div",{className:a().grid,children:[(0,c.jsxs)("a",{href:"https://nextjs.org/docs",className:a().card,children:[(0,c.jsx)("h2",{children:"Documentation \u2192"}),(0,c.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,c.jsxs)("a",{href:"https://nextjs.org/learn",className:a().card,children:[(0,c.jsx)("h2",{children:"Learn \u2192"}),(0,c.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,c.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/master/examples",className:a().card,children:[(0,c.jsx)("h2",{children:"Examples \u2192"}),(0,c.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,c.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:a().card,children:[(0,c.jsx)("h2",{children:"Deploy \u2192"}),(0,c.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,c.jsx)("footer",{className:a().footer,children:(0,c.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,c.jsx)("span",{className:a().logo,children:(0,c.jsx)(r.default,{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},8738:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9569)}])},7121:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},9406:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},7729:function(e,t,n){e.exports=n(2722)},6577:function(e,t,n){e.exports=n(3114)}},function(e){e.O(0,[774,888,179],(function(){return t=8738,e(e.s=t);var t}));var t=e.O();_N_E=t}]);