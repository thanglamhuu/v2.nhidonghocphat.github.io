"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14],{4014:function(n,e,t){t.d(e,{Z:function(){return Un}});var r=t(4051),i=t.n(r),o=t(5893),c=t(7294),a=t(6456),u=t(2125),s=(t(6486),t(3966)),l=t(4872),f=t(5697),d=t.n(f),p=t(262),h=t.n(p),x=t(8341),g=t.n(x),m=t(1662),v=t(1677),b=function(n){return n.showNew?(0,o.jsx)("span",{className:"blinking",children:"new"}):""};b.propTypes={showNew:d().bool.isRequired};var w=b;function j(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function y(){var n=j(["\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n"]);return y=function(){return n},n}function k(){var n=j(["\n  padding: 2px 2px;\n  display: flex;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  width: 100%;\n"]);return k=function(){return n},n}function N(){var n=j(["-ms-flex: 0 0 100%;flex: 0 0 100%;max-width: 100%;margin-left: 5px;margin-right: 5px;"]);return N=function(){return n},n}function P(){var n=j(["\n        background-color:#fff !important;\n      "]);return P=function(){return n},n}function O(){var n=j(["\n  background-color: #eee !important;\n  text-align: left;\n  display: block;\n  text-decoration: none;\n  min-height: 23px;\n  margin: 1px 1px;\n  border-radius: 5px;\n  font-size: 10pt;\n  font-weight: bold;\n  width: 33%;\n  padding: 1px !important;\n  ",";\n  border: 1px solid ",";\n  ",";\n"]);return O=function(){return n},n}function T(){var n=j(["\n  width: 100%;\n  min-height: 30px;\n  paddingLeft: 5;\n"]);return T=function(){return n},n}var R=h().Link,H=(h().Router,u.default.div(y())),_=u.default.ul(k()),C=u.default.li(O(),v.Z.sm(N()),m.Z.colors.textLink,(function(n){return(!n.soChan||0===n.soChan)&&(0,u.css)(P())})),Z=(0,u.default)(R)(T());var S=function(n){var e=n.baihoc,t=n.showNew,r=n.prefix,i=e;if(!i||!i.id)return"";var c=i.link||"".concat(r+i.id),a=i.id,u=parseInt(a.substr(1,2).replace("B",""))%2;return(0,o.jsx)(C,{soChan:u,children:(0,o.jsx)(Z,{route:c,children:(0,o.jsxs)("a",{className:"linkNdhp",children:[i.title,(0,o.jsx)(w,{showNew:t})]})},a)})};S.propTypes={baihoc:d().shape().isRequired,showNew:d().bool};var D=function(n){n.loading;var e=n.baiHocs,t=n.linkAll,r=n.prefix,i=e,c=0,a={chuong:"B - Ch\u01b0\u01a1ng 1",content:"s",id:"C0B0",title:"T\u1ea5t c\u1ea3 c\xe1c b\xe0i",link:t},u="";return i&&(i.push(a),u=i.map((function(n){return(0,o.jsx)(S,{baihoc:n,showNew:1===c,prefix:r},"".concat(t+ ++c))}))),console.log(t,"baiHocs",e,u),(0,o.jsx)(H,{children:(0,o.jsx)(_,{children:u})})};D.propTypes={baiHocs:d().arrayOf(d().shape()).isRequired,loading:d().bool.isRequired},D.defaultProps={};var z=D;t(9514);var L=function(n){var e="20".concat(n),t=["CN","T2","T3","T4","T5","T6","T7"][new Date([e.slice(0,4),e.slice(4,6),e.slice(6,8)].join("-")).getDay()];return e="".concat(t," ").concat([e.slice(6,8),e.slice(4,6),e.slice(0,4)].join("/"))},B=t(6077);function E(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function A(){var n=E(["\n  display: -webkit-flex; /* Safari */\n  -webkit-flex-direction: row; /* Safari 6.1+ */\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: stretch;\n"]);return A=function(){return n},n}function q(){var n=E(["\n  font-size: 10pt; /* Safari */\n"]);return q=function(){return n},n}function F(){var n=E(["\n    width: 45%;\n    margin-left:8px;\n    margin-right:8px;\n  "]);return F=function(){return n},n}function G(){var n=E(["\n  cursor: pointer;\n  float: left;\n  position: relative;\n  flex-direction: column;\n  margin: 4px 4px;\n  border-radius: 5px;\n  align-items: center;\n  justify-content: center;\n  padding-left: 1px;\n  padding-right: 1px;\n  background-color: white;\n  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  width: 15.3%;\n\n  ",";\n"]);return G=function(){return n},n}function M(){var n=E(["\n  border-radius:5px;\n  cursor: pointer;\n  position: relative;\n  text-align: center;\n  padding: 2px 2px !important;\n"]);return M=function(){return n},n}var I=u.default.div(A()),V=u.default.span(q()),W=u.default.div(G(),v.Z.sm(F())),K=u.default.div(M());function U(n){return console.log("ldl",n),n.map((function(n){return(0,o.jsx)(W,{youTubeId:!0,children:(0,o.jsxs)(K,{sm:"6",md:"2",children:[(0,o.jsx)(V,{children:n.id?L(n.id):"-"}),(0,o.jsxs)("a",{href:n.id?"/luyendich/".concat(n.id):"/luyendichs",className:"linkNdhp",children:[(0,o.jsx)("img",{src:"".concat(n.imgSrc),alt:"".concat(n.chuHan),width:"100%"}),(0,o.jsx)("i",{className:"icon-info bottom-align-text",style:{fontSize:20,paddingRight:3}}),(0,o.jsx)("span",{className:"fontChinese",children:n.chuHan}),(0,o.jsx)(w,{showNew:!1}),(0,o.jsx)("br",{})]}),(0,o.jsx)("span",{children:n.hanViet})]})},n.id)}))}var X=function(n){var e=n.loading,t=n.exercises,r=t,i={id:t.length+1,chuHan:"T\u1ea5t c\u1ea3",imgSrc:"".concat(B.uD,"/ndhpi/tatca.jpg"),hanViet:""};return r.push(i),(0,o.jsx)(I,{className:e?"content-loading":"",children:U(t)})};X.propTypes={exercises:d().arrayOf(d().shape()).isRequired,loading:d().bool.isRequired},X.defaultProps={};var Y=X,$=t(2814),J=t(9398),Q=t(450);function nn(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function en(n,e,t,r,i,o,c){try{var a=n[o](c),u=a.value}catch(s){return void t(s)}a.done?e(u):Promise.resolve(u).then(r,i)}function tn(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function rn(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function on(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function cn(n){return(cn=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function an(n,e){return!e||"object"!==ln(e)&&"function"!==typeof e?nn(n):e}function un(n,e){return(un=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function sn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var ln=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function fn(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=cn(n);if(e){var i=cn(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return an(this,t)}}function dn(){var n=sn(["\n    text-align: center;\n    max-width: 1170px;\n  "]);return dn=function(){return n},n}function pn(){var n=sn(["\n  background-color: #fafafa;\n  text-align: right;\n  width: 100%;\n  max-width: 1170px;\n  ",";\n\n"]);return pn=function(){return n},n}function hn(){var n=sn(["\n  width: 100%;\n  min-height: 30px;\n"]);return hn=function(){return n},n}function xn(){var n=sn(["\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n"]);return xn=function(){return n},n}function gn(){var n=sn(["\n    flex-direction: column;\n  "]);return gn=function(){return n},n}function mn(){var n=sn(["\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n  ",";\n"]);return mn=function(){return n},n}function vn(){var n=sn(["\n    width: 100%;\n    margin-left:10px;\n    margin-right:10px;\n  "]);return vn=function(){return n},n}function bn(){var n=sn(["\n  display: flex;\n  flex-direction: column;\n  padding: 5px 5px;\n  align-items: center;\n  justify-content: center;\n  width: 20%;\n\n  ",";\n"]);return bn=function(){return n},n}function wn(){var n=sn(["\n    width: 100%;\n    margin-left:10px;\n    margin-right:10px;\n  "]);return wn=function(){return n},n}function jn(){var n=sn(["\n  display: flex;\n  flex-direction: column;\n  padding: 5px 5px;\n  align-items: center;\n  justify-content: center;\n  width: 80%;\n\n  ",";\n"]);return jn=function(){return n},n}function yn(){var n=sn(["\n  width: 100%;\n"]);return yn=function(){return n},n}function kn(){var n=sn([" width: 100%;"]);return kn=function(){return n},n}function Nn(){var n=sn(["\n  width: 100%;\n  float: left; \n  ",";\n"]);return Nn=function(){return n},n}function Pn(){var n=sn([" display: none;"]);return Pn=function(){return n},n}function On(){var n=sn([" width: 13%;"]);return On=function(){return n},n}function Tn(){var n=sn(["\n  border-radius: 5px;\n  margin: 0px 2px 0 3px;\n  width: 10%;\n  ",";\n  ",";\n"]);return Tn=function(){return n},n}function Rn(){var n=sn([" width: 13%;"]);return Rn=function(){return n},n}function Hn(){var n=sn([" display: none;"]);return Hn=function(){return n},n}function _n(){var n=sn(["\n  border-radius: 5px;\n  margin: 0px 2px 0 3px;\n  width: 10%;\n  ",";\n  ",";\n"]);return _n=function(){return n},n}function Cn(){var n=sn([" -ms-flex: 0 0 63%; flex: 0 0 63%; max-width: 63%;"]);return Cn=function(){return n},n}function Zn(){var n=sn([" -ms-flex: 0 0 100%; flex: 0 0 100%; max-width: 100%;"]);return Zn=function(){return n},n}function Sn(){var n=sn(["\n  padding: 2px 2px;\n    -ms-flex: 0 0 80%;\n    max-width: 80%;\n    diplay: inline;\n    ",";\n    ",";\n"]);return Sn=function(){return n},n}function Dn(){var n=sn(["\n  padding: 3px 3px !important;\n  background-color: white;  \n  height: 100%;\n  text-align: left;\n"]);return Dn=function(){return n},n}var zn=h().Link,Ln=(h().Router,J.nc0),Bn=u.default.div(pn(),s.ZP.md(dn())),En=(0,u.default)(zn)(hn()),An=(u.default.div(xn()),u.default.div(mn(),s.ZP.sm(gn())),u.default.div(bn(),s.ZP.sm(vn())),u.default.div(jn(),s.ZP.sm(wn())),(0,u.default)(Q.X2)(yn())),qn=u.default.div(Nn(),s.ZP.sm(kn())),Fn=u.default.img(Tn(),s.ZP.sm(Pn()),s.ZP.md(On())),Gn=u.default.img(_n(),s.ZP.md(Rn()),s.ZP.sm(Hn())),Mn=u.default.div(Sn(),s.ZP.md(Cn()),s.ZP.sm(Zn())),In=u.default.div(Dn()),Vn={width:20},Wn=function(n){if(!n||!n.baiHocs||0==n.length)return(0,o.jsx)("span",{});var e=n.baiHocs[0];return e&&e.id?(0,o.jsx)(Mn,{children:(0,o.jsxs)(In,{children:[(0,o.jsx)(En,{route:"/giaoTrinhDich/".concat(e.id),style:{paddingLeft:5,textAlign:"left"},children:(0,o.jsxs)("a",{className:"linkNdhp",children:[e.title,(0,o.jsx)($.G,{size:"1x",icon:Ln,style:Vn})]})}),(0,o.jsx)("div",{className:"html-wrapper-home_bhlist",children:g()(e.content)})]})},"".concat(e.id)):""},Kn=function(n){!function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&un(n,e)}(a,n);var e,t,r,c=fn(a);function a(){var n;return tn(this,a),on(nn(n=c.apply(this,arguments)),"state",{list:null}),on(nn(n),"onClickBook",(function(e){n.setState({activedBook:e}),n.props.getEnglishBook(e)})),on(nn(n),"onClickLesson",(function(e){console.log("onClickLesson",e),n.setState({activedLesson:e})})),n}return e=a,t=[{key:"componentDidMount",value:function(){this.props.getHome()}},{key:"UNSAFE_componentWillReceiveProps",value:function(n){console.log("homeReducer will",n.homeReducer.type),this.props.homeReducer!==n.homeReducer&&this.setState(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){on(n,e,t[e])}))}return n}({},n.homeReducer.data)),this.props.homeReducer.type!==n.homeReducer.type&&this.props.getHome()}},{key:"render",value:function(){var n=this.state,e=n.baiHocs,t=n.gtTkpsgnl,r=n.luyenDichs;console.log("baiHocs, gtTkpsgnl",t);var i=!1;return(0,o.jsxs)(Bn,{children:[(0,o.jsx)(qn,{children:(0,o.jsxs)("div",{className:"boxDivNonePaddingTop",children:[(0,o.jsx)("div",{className:"h1_header",children:(0,o.jsxs)("a",{href:"/chuong/giaoTrinhDich",children:[(0,o.jsx)("i",{className:"icon-notebook"})," ",(0,o.jsx)("span",{children:"Gi\xe1o tr\xecnh d\u1ecbch  (T\u1ea5t c\u1ea3 b\xe0i h\u1ecdc)"})]})}),(0,o.jsxs)(An,{children:[(0,o.jsx)(Fn,{src:"./static/images/ndhp/ChiLacVoNhuDocThu.jpg",style:{width:"8%",float:"left"}}),(0,o.jsx)(Wn,{baiHocs:e,style:{width:"50%"}}),(0,o.jsx)(Gn,{src:"./static/images/ndhp/ChiYeuMacNhuGiaoTu.jpg",style:{width:"8%",float:"right"}})]}),e&&(0,o.jsx)(z,{loading:i,baiHocs:e,linkAll:"/chuong/giaoTrinhDich",prefix:B.aH})]})}),(0,o.jsx)(qn,{children:(0,o.jsxs)("div",{className:"boxDivNonePaddingTop",children:[(0,o.jsx)("div",{className:"h1_header",children:(0,o.jsxs)("a",{href:"/giao-trinh-luyen-dich",children:[(0,o.jsx)("i",{className:"icon-notebook"})," ",(0,o.jsx)("span",{children:"T\u1ecbnh Kh\xf4ng Ph\xe1p S\u01b0 Gia Ng\xf4n L\u1ee5c  (T\u1ea5t c\u1ea3 b\xe0i h\u1ecdc)"})]})}),e&&(0,o.jsx)(z,{loading:i,baiHocs:t,linkAll:B.Zg,prefix:B.f9})]})}),(0,o.jsx)(qn,{children:(0,o.jsxs)("div",{className:"boxDivNonePaddingTop",children:[(0,o.jsx)("div",{className:"h1_header",children:(0,o.jsxs)("a",{href:"/luyenDichs",children:[(0,o.jsx)("i",{className:"icon-notebook"})," ",(0,o.jsx)("span",{children:"C\xe1c c\xe2u \u0111\u1ed1i, tr\xedch d\u1eabn"})]})}),r&&(0,o.jsx)(Y,{loading:i,exercises:r})]})})]})}}],r=[{key:"getInitialProps",value:function(n){var e;return n.ctx.store,(e=i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function c(n){en(o,r,i,c,a,"next",n)}function a(n){en(o,r,i,c,a,"throw",n)}c(void 0)}))})()}}],t&&rn(e.prototype,t),r&&rn(e,r),a}(c.Component),Un=(0,a.$j)((function(n){return{homeReducer:n.homeReducer}}),(function(n){return{getHome:function(){return n((0,l.eb)())}}}))(Kn)},3966:function(n,e,t){var r=o(t(4799)),i=t(2125);function o(n){return n&&n.__esModule?n:{default:n}}var c=o(t(804)).default.flexboxgrid.breakpoints,a=(0,r.default)(c).reduce((function(n,e){return n[e]=function(){return(0,i.css)(["@media (max-width:","em){",";}"],c[e],i.css.apply(void 0,arguments))},n}),{});e.ZP=a},804:function(n,e,t){t.r(e),e.default={fonts:{family:{base:"Arial, Helvetica, sans-serif",fallback:"Arial, sans-serif"},size:{normal:"14px",small:"13px",large:"16px"}},colors:{text:"#040404",inversedText:"#EBEBEB",background:"#FFF",inversedLink:"#18428c",inversedLinkHover:"#fc7546",link:"#18428c",black:"#18428c",grey:"#888",green:"#0e0",red:"#e00"},flexboxgrid:{gutterWidth:1,outerMargin:2,container:{sm:38,md:58,lg:72},breakpoints:{xs:10,sm:40,md:60,lg:75}},spacing:{xs:"5px",sm:"10px",md:"15px"}}}}]);