(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[701],{3514:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nhi-dong-hoc-phat-ds",function(){return e(3599)}])},788:function(n,t,e){"use strict";var r=e(5893),i=(e(7294),e(5697)),o=e.n(i),c=e(2125),a=e(262),u=(e(8341),e(1662),e(1677),e(6077));function s(){var n,t,e=(n=["\n  width: 100%;\n  min-height: 30px;\n"],t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}})));return s=function(){return e},e}var f=(0,c.default)(a.Link)(s()),l=function(n){var t=n.baihoc,e=t.id,i=t.title;if(!t||!e)return"";var o="".concat(u.aH,"/").concat(e),c=0===parseInt(e.substr(1,2).replace("B",""))%2?"baiHocShortListLIChan":"";return(0,r.jsx)("li",{className:"baiHocShortListLI ".concat(c),children:(0,r.jsx)(f,{className:"linkNdhp",to:o,style:{paddingLeft:5},children:i})})};l.propTypes={baihoc:o().shape().isRequired};var d=function(){var n=[],t=1,e=1;for(t=1;t<=9;t++){for(e=1;e<10;e++)n.push({id:"C".concat(t,"B0").concat(e),title:"C".concat(t,"B0").concat(e)});for(e=10;e<17;e++)n.push({id:"C".concat(t,"B").concat(e),title:"C".concat(t,"B").concat(e)})}var i=n.map((function(n){return(0,r.jsx)(l,{baihoc:n,showNew:1===t},"bhi".concat(++t))}));return(0,r.jsx)("div",{className:"baiHocShortListContentWrapper",children:(0,r.jsx)("ul",{className:"baiHocShortListUlWrapper",children:i})})};d.propTypes={},d.defaultProps={},t.Z=d},3599:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return I},default:function(){return W}});var r=e(5893),i=e(7294),o=e(6456),c=e(450),a=e(3733),u=e(40),s=e(5697),f=e.n(s),l=e(262),d=e.n(l),p=e(8341),h=e.n(p),b=e(2125),x=e(788),v=(e(8585),e(6077));function m(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function j(n){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function w(n,t){return!t||"object"!==_(t)&&"function"!==typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function y(n,t){return(y=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function g(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var _=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function N(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=j(n);if(t){var i=j(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return w(this,e)}}function O(){var n=g(["\n  display: -webkit-flex; /* Safari */\n  -webkit-flex-direction: row; /* Safari 6.1+ */\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: stretch;\n  margin: 3px 3px;\n"]);return O=function(){return n},n}function C(){var n=g(["\n  width: 100%;\n"]);return C=function(){return n},n}function k(){var n=g(["\n  padding: 4px 4px;\n  @media (min-width: 768px)\n  {\n    -ms-flex: 0 0 33.33333%;\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%;\n  }\n  @media (min-width: 576px)\n  .col-sm-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n"]);return k=function(){return n},n}function P(){var n=g(["\n  padding: 3px 3px !important;\n  border-radius: 5px;\n  background-color: white;\n  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  height: 100%;\n"]);return P=function(){return n},n}var H=d().Link,L=(d().Router,b.default.div(O())),B=(0,b.default)(H)(C()),R=b.default.div(k()),S=b.default.div(P()),E=function(n){var t=n.baihoc;return t&&t.id&&"C0B1"!==t.id&&"C0B2"!==t.id&&"C0B3"!==t.id&&"C0B4"!==t.id?(0,r.jsx)(R,{children:(0,r.jsx)(S,{children:(0,r.jsx)(B,{to:"".concat(v.aH,"/").concat(t.id),children:(0,r.jsxs)("a",{href:"".concat(v.aH,"/").concat(t.id),children:[(0,r.jsxs)("div",{className:"item_header",children:[t.title,(0,r.jsx)("i",{className:"icon-arrow-right"})]}),(0,r.jsx)("div",{className:"html-wrapper-home_bhlist",children:h()(t.content)})]})})})},"".concat(t.id)):""},T=function(n){!function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&y(n,t)}(a,n);var t,e,i,o=N(a);function a(n){var t;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,n)).state={baiHocs:""},t}return t=a,(e=[{key:"render",value:function(){var n=this.props,t=n.loading,e=n.baiHocs,i=0;if(!e)return(0,r.jsx)("span",{children:"Ch\u01b0a c\xf3 b\xe0i"});var o=e.map((function(n){return(0,r.jsx)(E,{baihoc:n},"bhi".concat(++i))}));return(0,r.jsxs)(c.JX,{children:[(0,r.jsx)("h1",{className:"h2Title",children:"Danh s\xe1ch b\xe0i Nhi \u0110\u1ed3ng H\u1ecdc Ph\u1eadt"}),(0,r.jsx)(x.Z,{}),(0,r.jsx)(L,{className:t?"content-loading":"",children:o})]})}}])&&m(t.prototype,e),i&&m(t,i),a}(i.Component);T.propTypes={baiHocs:f().arrayOf(f().shape()),loading:f().bool},T.defaultProps={};var z=(0,o.$j)((function(n){return console.log("state.tkpsgnlReducer",n.tkpsgnlReducer),{baiHocs:n.ndhpReducer.data}}),(function(n){return{getNdhpList:function(){return n((0,u.L4)())}}}))(T),I=!0,W=function(){return(0,o.I0)()((0,u.L4)()),(0,r.jsx)(a.Z,{navmenu:!1,container:!1,children:(0,r.jsx)(c.W2,{children:(0,r.jsx)(z,{className:"text-muted small"})})})}}},function(n){n.O(0,[523,260,934,341,733,774,888,179],(function(){return t=3514,n(n.s=t);var t}));var t=n.O();_N_E=t}]);