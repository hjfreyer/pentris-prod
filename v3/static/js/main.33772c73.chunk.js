(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,n){e.exports=n(50)},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(35),i=n(37),o=n(56),c=n(55),u=n(54),l=n(20),s=n(33),h=n(52),d=n(57);n(46),n(47);function f(e){switch(e.kind){case"empty":return"cell empty";case"shape":return"cell color-".concat(e.shapeIdx)}}var p=function(e){return r.createElement("div",{className:"Board"},e.cells.map(function(e,t){return r.createElement("div",{className:"row",key:t},e.map(function(e,t){return r.createElement("div",{className:f(e),key:t})}))}))},v=n(4),y=n(18);function m(e){return e.map(function(e){var t=Object(v.a)(e,2);return[t[0],-t[1]]})}function b(e){var t=e.map(function(e){var t=Object(v.a)(e,2),n=t[0];t[1];return n}),n=e.map(function(e){var t=Object(v.a)(e,2);t[0];return t[1]});return[Math.min.apply(Math,Object(y.a)(t)),Math.min.apply(Math,Object(y.a)(n)),Math.max.apply(Math,Object(y.a)(t)),Math.max.apply(Math,Object(y.a)(n))]}var w=[[0,0],[1,0],[0,1],[0,2],[-1,1]],g=[[0,0],[0,1],[0,2],[0,3],[1,3]],k=[[1,0],[1,1],[0,1],[0,2],[0,3]],O=[[0,0],[1,0],[0,1],[1,1],[1,-1]],E=[[0,0],[0,1],[0,2],[0,3],[-1,1]],N=[[0,0],[0,1],[0,2],[-1,0],[1,2]],I=[w,m(w),g,m(g),k,m(k),O,m(O),E,m(E),N,m(N),[[0,-1],[0,1],[0,0],[1,0],[2,0]],[[0,0],[0,-1],[0,1],[-1,1],[-1,-1]],[[0,-2],[0,-1],[0,0],[1,0],[2,0]],[[0,0],[0,1],[1,1],[1,2],[2,2]],[[0,0],[-1,0],[1,0],[0,-1],[0,1]],[[0,0],[0,1],[0,2],[0,3],[0,4]]],x=[[0,0],[0,1],[0,2],[1,2]],S=m(x),j=[[1,0],[1,1],[0,1],[0,2]],D=m(j),M=[[[0,0]],[[0,0],[0,1]]].concat([[[0,0],[0,1],[0,2]],[[0,0],[0,1],[1,1]]],[[[0,0],[0,1],[0,2],[0,3]],x,S,[[0,0],[0,1],[1,0],[1,1]],j,D,[[0,0],[0,1],[0,2],[1,1]]],I).map(function(e){var t=function(e){var t=b(e),n=Object(v.a)(t,4),r=n[0],a=n[1],i=n[2],o=n[3];return[Math.floor((r+i)/2),Math.floor((a+o)/2)]}(e),n=Object(v.a)(t,2),r=n[0],a=n[1];return e.map(function(e){var t=Object(v.a)(e,2),n=t[0],i=t[1];return[n-r,i-a]})});var T=function(e){var t=e.shapeIdx,n=function(e){var t=b(e),n=Object(v.a)(t,4),r=n[0],a=n[1],i=n[2],o=n[3];return[e.map(function(e){var t=Object(v.a)(e,2),n=t[0],i=t[1];return[n-r,i-a]}),i-r+1,o-a+1]}(M[t]),a=Object(v.a)(n,3),i=a[0],o=a[1],c=a[2],u=Array.from({length:o},function(){return Array(c).fill({kind:"empty"})}),l=!0,s=!1,h=void 0;try{for(var d,f=i[Symbol.iterator]();!(l=(d=f.next()).done);l=!0){var y=d.value,m=Object(v.a)(y,2),w=m[0],g=m[1];u[w][g]={kind:"shape",shapeIdx:t}}}catch(k){s=!0,h=k}finally{try{l||null==f.return||f.return()}finally{if(s)throw h}}return r.createElement("div",{className:"PiecePreview"},r.createElement(p,{cells:u}))},L=n(16),A=n(17),R=n(32),P=function(){function e(t,n){Object(L.a)(this,e),this.rand=void 0,this.levelTable=void 0,this.rand=t,this.levelTable=n}return Object(A.a)(e,[{key:"newState",value:function(){return{width:12,height:24,nextShapeIdx:this.rand.nextShape(),activeShape:{shapeIdx:this.rand.nextShape(),dRow:0,dCol:6,rotation:0},dasDirection:"NONE",dasDelay:0,entryDelay:18,gravity:this.levelTable[0].gravity,board:W(12,24),score:0,lines:0}}},{key:"apply",value:function(e,t){switch(t.kind){case"tick":return this.doTick(e);case"input":return this.doInput(e,t)}}},{key:"getLevelInfo",value:function(e){var t=Math.floor(e.lines/10);return this.levelTable[t<this.levelTable.length?t:this.levelTable.length-1]}},{key:"doEntry",value:function(e){return!(0<e.entryDelay)||(e.entryDelay--,!1)}},{key:"doDAS",value:function(e){"NONE"!==e.dasDirection&&(0===e.dasDelay?(e.dasDelay=6,H(e,e.dasDirection)):e.dasDelay--)}},{key:"doGravity",value:function(e){return 0!==e.gravity?(e.gravity--,!0):(e.gravity=this.getLevelInfo(e).gravity,F(e,1,0,0))}},{key:"doTick",value:function(e){var t=this;return Object(R.a)(e,function(e){t.doDAS(e),t.doEntry(e)&&(t.doGravity(e)||t.doLockDown(e))})}},{key:"doInput",value:function(e,t){var n=this;return Object(R.a)(e,function(e){switch(t.input.direction){case"NONE":e.dasDirection="NONE";break;case"LEFT":case"RIGHT":case"DOWN":"NONE"===e.dasDirection&&(e.dasDelay=16,H(e,t.input.direction)),e.dasDirection=t.input.direction}switch(t.input.action){case"NONE":break;case"SPIN":H(e,t.input.action);break;case"DROP":n.doDrop(e)}})}},{key:"doDrop",value:function(e){for(;F(e,1,0,0););this.doLockDown(e)}},{key:"doLockDown",value:function(e){e.board=G(e),e.entryDelay=18,e.activeShape={shapeIdx:e.nextShapeIdx,dRow:0,dCol:e.width/2,rotation:0},e.nextShapeIdx=this.rand.nextShape();for(var t=[],n=function(n){(function(){for(var t=0;t<e.width;t++)if("empty"===e.board[n][t].kind)return!1;return!0})()&&t.push(n)},r=0;r<e.height;r++)n(r);for(var a=W(e.width,e.height),i=e.height-1,o=e.height-1;i>=0;)if(t.includes(i))i--;else{for(var c=0;c<e.width;c++)a[o][c]=e.board[i][c];i--,o--}e.board=a,e.score+=this.getLevelInfo(e).multiplier*(Math.pow(2,t.length)-1),e.lines+=t.length}}]),e}();function W(e,t){for(var n=[],r=0;r<t;r++)n.push(Array(e).fill({kind:"empty"}));return n}function C(e){for(var t=M[e.shapeIdx],n=0;n<e.rotation;n++)t=t.map(function(e){var t=Object(v.a)(e,2),n=t[0];return[t[1],-n]});return(t=t.map(function(t){var n=Object(v.a)(t,2),r=n[0],a=n[1];return[r+e.dRow,a+e.dCol]})).filter(function(e){var t=Object(v.a)(e,2),n=t[0];t[1];return n>=0})}function G(e){var t=e.board.map(function(e){return e.slice()}),n=C(e.activeShape),r=!0,a=!1,i=void 0;try{for(var o,c=n[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var u=o.value,l=Object(v.a)(u,2),s=l[0],h=l[1];t[s][h]={kind:"shape",shapeIdx:e.activeShape.shapeIdx}}}catch(d){a=!0,i=d}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return t}function F(e,t,n,r){var a={shapeIdx:e.activeShape.shapeIdx,dRow:e.activeShape.dRow+t,dCol:e.activeShape.dCol+n,rotation:(e.activeShape.rotation+r)%4};return!function(e,t){var n=C(t),r=!0,a=!1,i=void 0;try{for(var o,c=function(){var t=o.value,n=(l=Object(v.a)(t,2))[0],r=l[1];if(e.height<=n||r<0||e.width<=r||!(n<0)&&"empty"!==e.board[n][r].kind)return{v:!0}},u=n[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){var l,s=c();if("object"===typeof s)return s.v}}catch(h){a=!0,i=h}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return!1}(e,a)&&(e.activeShape=a,!0)}function H(e,t){switch(t){case"LEFT":return F(e,0,-1,0);case"DOWN":return F(e,1,0,0);case"RIGHT":return F(e,0,1,0);case"SPIN":return F(e,0,0,1)}}var B=function(e){var t=e.state;return r.createElement("div",{className:"App"},r.createElement("main",null,r.createElement(p,{cells:G(t)})),r.createElement("aside",null,r.createElement("h1",null,"Pentris"),r.createElement("p",{className:"copy"},"It's Alpha. It's Delicious. It's Pentris."),r.createElement("h2",null,"Preview"),r.createElement(T,{shapeIdx:e.state.nextShapeIdx}),r.createElement("h3",null,"Score"),r.createElement("h3",null,"Lines Cleared"),r.createElement("p",{className:"score"},t.score),r.createElement("p",{className:"score"},t.lines),r.createElement("h3",null,"Level"),r.createElement("h3",null,"Speed"),r.createElement("p",{className:"score"},e.integ.getLevelInfo(t).number),r.createElement("p",{className:"score"},e.integ.getLevelInfo(t).multiplier)))},J=function(){function e(t,n){Object(L.a)(this,e),this.rand=void 0,this.n=void 0,this.bag=void 0,this.rand=t,this.n=n,this.bag=[]}return Object(A.a)(e,[{key:"nextShape",value:function(){return 0===this.bag.length&&(this.bag=Array.from({length:this.n*M.length},function(e,t){return t%M.length}),function(e,t){for(var n=e.length-1;n>0;n--){var r=Math.floor(t.next()*(n+1)),a=[e[r],e[n]];e[n]=a[0],e[r]=a[1]}}(this.bag,this.rand)),this.bag.pop()}}]),e}();var U=n(51),Q=n(58),$=n(31),q=n(59),z=n(53);n(49);var K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var X=n(36),Y=new i.a,Z=o.a(0,1e3/60).pipe(l.a(function(e){return{kind:"tick"}})),_=c.a(document,"keydown"),ee=c.a(document,"keyup");function te(e){switch(e){case"ArrowLeft":return"LEFT";case"ArrowRight":return"RIGHT";case"ArrowDown":return"DOWN";case"ArrowUp":return"SPIN";case" ":return"DROP";default:return null}}function ne(e){return Math.floor(48*Math.pow(.9,e))}var re=function(e){var t=e.pipe(U.a(function(e){return e.button}),l.a(function(e){return e.pipe(Q.a("pressed"))}),$.a()),n=q.a(function(e){return"LEFT"===e.button||"RIGHT"===e.button||"DOWN"===e.button})(t),r=Object(v.a)(n,2),a=r[0],i=r[1],o=a.pipe(h.a(function(e,t){var n=t.button;return t.pressed?n:e===t.button?"NONE":e},"NONE"),d.a("NONE")),c=i.pipe(s.a(function(e){return e.pressed}),l.a(function(e){return e.button})),f=o.pipe(l.a(function(e){return{direction:e,action:"NONE"}})),p=c.pipe(z.a(o),l.a(function(e){var t=Object(v.a)(e,2),n=t[0];return{direction:t[1],action:n}}));return u.a(f,p)}(u.a(ee,_).pipe(l.a(function(e){return{button:te(e.key),pressed:"keydown"===e.type}}),s.a(function(e){return null!=e.button}))).pipe(l.a(function(e){return{kind:"input",input:e}})),ae=u.a(Y,re,Z),ie=Array.from({length:37},function(e,t){return{number:t,gravity:ne(t),multiplier:(n=ne(t),Math.abs(Math.floor(Math.log(n/48)/Math.log(.9))))};var n}),oe=new P(new J(new X.a,2),ie),ce=oe.newState(),ue=ae.pipe(h.a(function(e,t){return oe.apply(e,t)},ce),d.a(ce)).pipe(l.a(function(e){return r.createElement(B,{key:"app",state:e,integ:oe})})),le=document.getElementById("root");ue.subscribe(function(e){return a.render(e,le)}),function(){if("serviceWorker"in navigator){if(new URL("/v3",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/v3","/service-worker.js");K?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):V(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):V(e)})}}()}},[[40,1,2]]]);
//# sourceMappingURL=main.33772c73.chunk.js.map