!function(){"use strict";var e={188:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(645),i=n.n(o)()((function(e){return e[1]}));i.push([e.id,'*{margin:0;padding:0;box-sizing:border-box}body{font:bold 20px "Courier"}#background{width:360px;height:420px;background-color:#b7d4a8;border:18px solid #000;border-radius:36px;margin:100px auto;display:flex;flex-flow:column;align-items:center;justify-content:space-around}#background #stage{width:304px;height:304px;border:2px solid #000;margin:0 auto;position:relative}#background #stage #snake>div{position:absolute;background-color:#000;width:10px;height:10px;border:1px solid #b7d4a8}#background #stage #food{width:10px;height:10px;position:absolute;top:40px;left:100px;display:flex;flex-flow:row wrap;justify-content:space-between;align-content:space-between;border:1px solid #b7d4a8}#background #stage #food>div{background-color:#000;width:3px;height:3px;transform:rotate(45deg)}#background #score-panel{width:300px;display:flex;align-items:center;justify-content:space-between}',""]);const r=i},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);o&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:function(e){var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},s=[],a=0;a<e.length;a++){var c=e[a],d=o.base?c[0]+o.base:c[0],u=r[d]||0,f="".concat(d," ").concat(u);r[d]=u+1;var h=n(f),l={css:c[1],media:c[2],sourceMap:c[3]};-1!==h?(t[h].references++,t[h].updater(l)):t.push({identifier:f,updater:i(l,o),references:1}),s.push(f)}return s}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var a=n(r[s]);t[a].references--}for(var c=o(e,i),d=0;d<r.length;d++){var u=n(r[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=c}}},569:function(e){var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:function(e){e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:function(e,t,n){e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e=n(379),t=n.n(e),o=n(795),i=n.n(o),r=n(569),s=n.n(r),a=n(565),c=n.n(a),d=n(216),u=n.n(d),f=n(589),h=n.n(f),l=n(188),p={};p.styleTagTransform=h(),p.setAttributes=c(),p.insert=s().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=u(),t()(l.Z,p),l.Z&&l.Z.locals&&l.Z.locals;const m=function(){function e(){this.element=document.getElementById("snake"),this.head=document.querySelector("#snake>div"),this.bodies=this.element.getElementsByTagName("div")}return Object.defineProperty(e.prototype,"X",{get:function(){return this.head.offsetLeft},set:function(e){if(this.X!==e){if(e<0||e>290)throw new Error("蛇撞墙了");this.bodies[1]&&this.bodies[1].offsetLeft===e&&(console.log("水平方向掉头了"),e=e>this.X?this.X-10:this.X+10),this.moveBody(),this.head.style.left=e+"px",this.checkHeadBody()}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"Y",{get:function(){return this.head.offsetTop},set:function(e){if(this.Y!==e){if(e<0||e>290)throw new Error("蛇撞墙了");this.bodies[1]&&this.bodies[1].offsetTop===e&&(console.log("水平方向掉头了"),e=e>this.Y?this.Y-10:this.Y+10),this.moveBody(),this.head.style.top=e+"px",this.checkHeadBody()}},enumerable:!1,configurable:!0}),e.prototype.addBody=function(){this.element.insertAdjacentHTML("beforeend","<div></div>")},e.prototype.moveBody=function(){for(var e=this.bodies.length-1;e>0;e--){var t=this.bodies[e-1].offsetLeft,n=this.bodies[e-1].offsetTop;this.bodies[e].style.left=t+"px",this.bodies[e].style.top=n+"px"}},e.prototype.checkHeadBody=function(){for(var e=1;e<this.bodies.length;e++){var t=this.bodies[e];if(t.offsetLeft==this.X&&t.offsetTop===this.Y)throw new Error("撞到了身体")}},e}(),b=function(){function e(){this.element=document.getElementById("food")}return Object.defineProperty(e.prototype,"X",{get:function(){return this.element.offsetLeft},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"Y",{get:function(){return this.element.offsetTop},enumerable:!1,configurable:!0}),e.prototype.change=function(){var e=10*Math.round(29*Math.random()),t=10*Math.round(29*Math.random());this.element.style.left=t+"px",this.element.style.top=e+"px"},e}(),v=function(){function e(e,t){void 0===e&&(e=10),void 0===t&&(t=10),this.score=0,this.level=1,this.scoreElement=document.getElementById("score"),this.levelElement=document.getElementById("level"),this.maxLevel=e,this.upScore=t}return e.prototype.addScore=function(){this.score++,this.scoreElement.innerHTML=this.score+"",this.score%this.upScore||this.levelUp()},e.prototype.levelUp=function(){this.level<this.maxLevel&&this.level++,this.levelElement.innerHTML=this.level+""},e}();new(function(){function e(){this.direction="",this.isLive=!0,this.snake=new m,this.food=new b,this.scorePanel=new v(10,2),this.init()}return e.prototype.init=function(){document.addEventListener("keydown",this.keydownHandler.bind(this)),this.run()},e.prototype.keydownHandler=function(e){this.direction=e.key},e.prototype.run=function(){var e=this.snake.X,t=this.snake.Y;switch(this.direction){case"ArrowUp":case"Up":t-=10;break;case"ArrowDown":case"Down":t+=10;break;case"ArrowLeft":case"Left":e-=10;break;case"ArrowRight":case"Right":e+=10}this.checkEat(e,t);try{this.snake.X=e,this.snake.Y=t}catch(e){alert(e.message),this.isLive=!1}this.isLive&&setTimeout(this.run.bind(this),300-30*(this.scorePanel.level-1))},e.prototype.checkEat=function(e,t){e===this.food.X&&t===this.food.Y&&(this.food.change(),this.scorePanel.addScore(),this.snake.addBody())},e}())}()}();