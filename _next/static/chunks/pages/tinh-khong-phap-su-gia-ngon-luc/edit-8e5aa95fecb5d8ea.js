(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22],{1212:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tinh-khong-phap-su-gia-ngon-luc/edit",function(){return t(6226)}])},2547:function(n,e,t){"use strict";var i=t(5893),a=t(7294),r=t(5697),o=t.n(r),c=t(2125),s=t(2814),l=t(9398);t(894);function u(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function h(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function d(n){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function f(n,e){return!e||"object"!==g(e)&&"function"!==typeof e?u(n):e}function p(n,e){return(p=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var g=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function b(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,i=d(n);if(e){var a=d(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return f(this,t)}}function C(){var n,e,t=(n=["\n    font-weight: 600;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return C=function(){return t},t}c.ZP.i(C());var x=function(n){!function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&p(n,e)}(o,n);var e,t,a,r=b(o);function o(n){var e;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(e=r.call(this,n)).onClickPlay=e.onClickPlay.bind(u(e)),e}return e=o,(t=[{key:"onClickPlay",value:function(){var n=this.props,e=n.url,t=e===n.curUrl?"":e;this.props.playCallback(t)}},{key:"render",value:function(){var n=this.props,e=n.url,t=e===n.curUrl?l.Bg$:l.zc;return(0,i.jsx)("div",{onClick:this.onClickPlay,className:"btnPlay no-print",children:(0,i.jsx)(s.G,{size:"1x",icon:t})},e)}}])&&h(e.prototype,t),a&&h(e,a),o}(a.Component);x.propTypes={url:o().string,curUrl:o().string,playCallback:o().func},x.defaultProps={url:"",curUrl:""}},5267:function(n,e,t){"use strict";t.d(e,{Z:function(){return B}});var i=t(5893),a=t(7294),r=t(5697),o=t.n(r),c=t(2125),s=(t(9669),t(894)),l=t(450),u=t(5172),h=t(8585),d=t(6077);t(2547);function f(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function p(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function g(n){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function b(n,e){return!e||"object"!==v(e)&&"function"!==typeof e?f(n):e}function C(n,e){return(C=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function x(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var v=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function y(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,i=g(n);if(e){var a=g(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return b(this,t)}}function m(){var n=x(["\n  max-width: 220px;\n  padding: 2px 2px;\n"]);return m=function(){return n},n}function j(){var n=x(['\n  font-family: \'KaiTi\', "Hiragino Sans GB", "Microsoft YaHei","WenQuanYi Micro Hei", sans-serif;\n  font-size: 400%;\n']);return j=function(){return n},n}function H(){var n=x(["\n  width: 100%;\n  line-height: 1;\n  border-radius: 0.2rem;\n  min-height: 400px;\n"]);return H=function(){return n},n}var w=c.ZP.audio(m()),B=(c.ZP.span(j()),c.ZP.iframe(H()),function(n){!function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&C(n,e)}(o,n);var e,t,a,r=y(o);function o(n){var e;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(e=r.call(this,n)).state={},e.handleClick=e.handleClick.bind(f(e)),e.toggle=e.toggle.bind(f(e)),e}return e=o,(t=[{key:"toggle",value:function(){var n=this.props,e=n.chinesse;(0,n.toggleChinese)(e)}},{key:"handleClick",value:function(){var n=(0,h.FA)(this.props.bacKinh);new Audio("".concat(d.uD,"/BasicSound/").concat(n)).play(),s.L9("ChuHan","BacKinh",this.props.bacKinh)}},{key:"render",value:function(){try{var n=this.props,e=n.error,t=n.id,a=n.chinesse,r=n.hanViet,o=n.bacKinh;if(n.toggleChinese,n.playCallback,n.curUrl,e)return(0,i.jsx)(u.Z,{content:e});if("\n"===a)return(0,i.jsx)("div",{className:"breakLine"});if(a.includes(".mp3"))return(0,i.jsx)(w,{className:"no-print",controls:!0,loop:!0,src:a,type:"audio/mp3"});if("#B"===a)return"";var c=o&&(0,i.jsx)(l.X2,{style:{padding:1,margin:1},children:(0,i.jsx)("button",{className:"btnBacKinh",onClick:this.handleClick,children:o})});return(0,i.jsx)("div",{children:(0,i.jsx)(l.Zb,{className:"chuHanPrint",style:{borderLeftWidth:0,borderRightWidth:0},children:(0,i.jsxs)(l.eW,{style:{padding:0},children:[(0,i.jsx)(l.Ol,{style:{padding:0},children:(0,i.jsx)("button",{className:"btnChuHan",id:"btnChuHan".concat(t),onClick:this.toggle,style:{borderLeftWidth:0,borderRightWidth:0},children:a})}),(0,i.jsx)(l.X2,{style:{padding:1,margin:1,fontSize:18},children:(0,i.jsx)("small",{children:r})}),c]})},"".concat(t))})}catch(s){return console.log("error",s),(0,i.jsx)(u.Z,{title:"Ch\u1eef H\xe1n",content:s+""})}}}])&&p(e.prototype,t),a&&p(e,a),o}(a.Component));B.propTypes={error:o().string,chinesse:o().string,chinessNoSign:o().string,hanViet:o().string,bacKinh:o().string,id:o().number,toggleChinese:o().func,playCallback:o().func,curUrl:o().string},B.defaultProps={error:null,chinesse:"",chinessNoSign:"",hanViet:"",bacKinh:"",id:"",curUrl:""}},5172:function(n,e,t){"use strict";var i=t(5893),a=(t(7294),t(5697)),r=t.n(a),o=t(450),c=t(262),s=function(n){var e=n.title,t=n.content;return(0,i.jsx)(o.X2,{children:(0,i.jsxs)(o.JX,{lg:"4",children:[(0,i.jsx)("h2",{children:e}),(0,i.jsx)("p",{children:t}),(0,i.jsx)("p",{children:(0,i.jsx)(c.Link,{to:"/",className:"btn btn-primary",children:"Trang ch\u1ee7"})})]})})};s.propTypes={title:r().string,content:r().string},s.defaultProps={title:"Xin l\u1ed7i",content:"An unexpected error came up"},e.Z=s},3033:function(n,e,t){"use strict";var i=t(5893),a=(t(7294),t(450));e.Z=function(){return(0,i.jsx)(a.X2,{children:(0,i.jsx)(a.JX,{md:{size:6,offset:3},children:(0,i.jsx)("div",{className:"page-is-loading",children:(0,i.jsx)(a.Ex,{bar:!0,animated:!0,value:"100",children:"Loading"})})})})}},5480:function(n,e,t){"use strict";var i=t(5893),a=(t(7294),t(5697)),r=t.n(a),o=t(2125),c=t(262),s=(t(8341),t(1662)),l=t(1677);function u(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function h(){var n=u(["\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n"]);return h=function(){return n},n}function d(){var n=u(["\n  padding: 2px 2px;\n  display: flex;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  width: 100%;\n"]);return d=function(){return n},n}function f(){var n=u(["font-size: 9pt;padding-right: 2px !important;-ms-flex: 0 0 11.8%;flex: 0 0 11.8%;max-width: 11.8%;"]);return f=function(){return n},n}function p(){var n=u(["\n        background-color:#fff !important;\n      "]);return p=function(){return n},n}function g(){var n=u(["\n  background-color: #eee !important;\n  display: block;\n  text-decoration: none;\n  min-height: 25px;\n  margin: 1px 1px;\n  border-radius: 5px;\n  font-size: 10pt;\n  font-weight: bold;\n  width: 6%;\n  text-align: center;\n  ",";\n  border: 1px solid ",";\n  ",";\n"]);return g=function(){return n},n}function b(){var n=u(["\n  width: 100%;\n  min-height: 30px;\n"]);return b=function(){return n},n}var C=o.ZP.div(h()),x=o.ZP.ul(d()),v=o.ZP.li(g(),l.Z.sm(f()),s.Z.colors.textLink,(function(n){return(!n.soChan||0===n.soChan)&&(0,o.iv)(p())})),y=(0,o.ZP)(c.Link)(b()),m=function(n){var e=n.baihoc,t=e.id,a=e.title;if(!e||!t)return"";var r="/luyen-dich-truc-tuyen/".concat(t),o=parseInt(t.substr(1,2).replace("B",""))%2;return(0,i.jsx)(v,{soChan:o,children:(0,i.jsx)(y,{className:"linkNdhp",to:r,style:{paddingLeft:5},children:a})})};m.propTypes={baihoc:r().shape().isRequired};var j=function(){var n=[],e=1,t=1;for(e=1;e<=9;e++){for(t=1;t<10;t++)n.push({id:"C".concat(e,"B0").concat(t),title:"C".concat(e,"B0").concat(t)});for(t=10;t<17;t++)n.push({id:"C".concat(e,"B").concat(t),title:"C".concat(e,"B").concat(t)})}var a=n.map((function(n){return(0,i.jsx)(m,{baihoc:n,showNew:1===e},"bhi".concat(++e))}));return(0,i.jsxs)(C,{children:[(0,i.jsx)("div",{className:"h2Title",children:"Danh s\xe1ch b\xe0i luy\u1ec7n d\u1ecbch"}),(0,i.jsx)(x,{children:a})]})};j.propTypes={},j.defaultProps={},e.Z=j},6226:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return rn}});var i=t(5893),a=t(7294),r=t(262),o=(t(9008),t(450)),c=t(6456),s=(t(91),t(2701)),l=t(5697),u=t.n(l),h=t(5152),d=t.n(h),f=t(6486),p=t.n(f),g=t(2207),b=t.n(g),C=t(2125),x=t(3463),v=t(8341),y=t.n(v),m=(t(2162),t(6725)),j=t(3033),H=t(5172),w=t(5267),B=t(8585),k=t(1310),N=t(6077),P=t(7264),S=t(5480),T=t(2815);function O(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function V(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function I(n){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function K(n,e){return!e||"object"!==Z(e)&&"function"!==typeof e?O(n):e}function E(n,e){return(E=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function R(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var Z=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function M(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,i=I(n);if(e){var a=I(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return K(this,t)}}function X(){var n=R(["\n  display: -webkit-flex; /* Safari */\n  -webkit-flex-direction: row; /* Safari 6.1+ */\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]);return X=function(){return n},n}function z(){var n=R(["\n  width: 100%;\n  height: auto;\n"]);return z=function(){return n},n}function A(){var n=R(["\n  resize: none;\n  border-width: 0;\n  box-sizing: border-box;\n  width: 100%;\n  font-size: 16px;\n  padding-top: 10px;\n  ::placeholder {\n    color: #9a9fa6;\n  }\n"]);return A=function(){return n},n}function L(){var n=R(["\n  resize: none;\n  border-width: 1;\n  border-radius: 5px;\n  box-sizing: border-box;\n  width: 73%;\n  font-size: 16px;\n"]);return L=function(){return n},n}function Q(){var n=R(["\n  width: 100%;\n"]);return Q=function(){return n},n}function U(){var n=R(["\n  width: 100%;\n"]);return U=function(){return n},n}var D=d()(Promise.all([t.e(937),t.e(167)]).then(t.t.bind(t,1167,23)),{loadableGenerated:{webpack:function(){return[1167]}},ssr:!1,loading:function(){return(0,i.jsx)("p",{children:"Loading ..."})}}),F={toolbar:[[{header:"1"},{header:"2"},{header:"3"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image","video"],["clean"]],clipboard:{matchVisual:!1}},W=["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","video"],Y=C.ZP.div(X()),G=(C.ZP.img(z()),{width:"640px",playerVars:{autoplay:0}});function J(n){n.target.pauseVideo()}var q=(0,C.ZP)(x.Z)(A()),$=((0,C.ZP)(x.Z)(L()),(0,C.ZP)(o.Zb)(Q())),nn=(0,C.ZP)(o.cw)(U()),en=function(n){!function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&E(n,e)}(s,n);var e,t,a,c=M(s);function s(n){var e;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),_(O(e=c.call(this,n)),"handleChangeNghiaViet",(function(n,t,i,a){console.log("handleChangeNghiaViet",cotent,i,a.getHTML()),e.setState({daSua:!0,content:a.getHTML()})})),_(O(e),"QuillHandleChange",(function(n,t,i,a){"user"==i&&e.setState({content:n})})),_(O(e),"QuillHandleChangeExtra",(function(n,t,i,a){"user"==i&&e.setState({extraContent:contenctNew})}));var t=e.props.baiHoc;return(0,B.le)(t)&&(t={id:"",content:".",chuong:"",title:"",chinesse:"",hanViet:"",bacKinh:"",extraContent:"",youTubeId:"",fileMp3:!1,shortClipId:"",correctExcel:0,htmlShow:!1}),e.state={id:t.id,error:t?n.error:m.Z.baiHoc404,loading:n.loading,content:".",chuong:t.chuong,title:t.title,chinesse:t.chinesse,hanViet:t.hanViet,bacKinh:t.bacKinh,extraContent:t.extraContent,youTubeId:t.youTubeId,fileMp3:t.fileMp3||!1,shortClipId:t.shortClipId||"",correctExcel:0,htmlShow:!1,daSua:!1},e.onChangeHandlerID=e.onChangeHandlerID.bind(O(e)),e.onChangeHtmlShow=e.onChangeHtmlShow.bind(O(e)),e.onChangeFileMp3=e.onChangeFileMp3.bind(O(e)),e.onChangeshortClip=e.onChangeshortClip.bind(O(e)),e.onChangeHandlerTitle=e.onChangeHandlerTitle.bind(O(e)),e.onChangeHandlerChuong=e.onChangeHandlerChuong.bind(O(e)),e.onChangeHandlerExtraContent=e.onChangeHandlerExtraContent.bind(O(e)),e.onChangeHandlerYouTube=e.onChangeHandlerYouTube.bind(O(e)),e.onChangeHandlerChuHan=e.onChangeHandlerChuHan.bind(O(e)),e.onChangeHandlerHanViet=e.onChangeHandlerHanViet.bind(O(e)),e.onChangeHandlerBacKinh=e.onChangeHandlerBacKinh.bind(O(e)),e.QuillHandleChange=p().debounce(e.QuillHandleChange.bind(O(e)),100),e.QuillHandleChangeExtra=p().debounce(e.QuillHandleChangeExtra.bind(O(e)),100),e.onHtmlChangeNghiaViet=p().debounce(e.onHtmlChangeNghiaViet.bind(O(e)),100),e.onChangeNghiaViet=p().debounce(e.onChangeNghiaViet.bind(O(e)),100),e.handleChangeNghiaViet=e.handleChangeNghiaViet.bind(O(e)),e.onHtmlChangeExtraContent=e.onHtmlChangeExtraContent.bind(O(e)),e.updateBaiHoc=e.updateBaiHoc.bind(O(e)),e.chuanChuHanTuExcel=e.chuanChuHanTuExcel.bind(O(e)),e.chuanAnHanViet=e.chuanAnHanViet.bind(O(e)),e.taoPhatAm=e.taoPhatAm.bind(O(e)),e.duaBaiHocLenTrangChu=e.duaBaiHocLenTrangChu.bind(O(e)),e.goBaiHocKhoiTrangChu=e.goBaiHocKhoiTrangChu.bind(O(e)),e}return e=s,(t=[{key:"componentWillReceiveProps",value:function(n){if(console.log("BHUpdate componentWillReceiveProps ","!nextProps.baiHoc",!n.baiHoc,"nextProps.baiHoc !=null",null!=n.baiHoc,"state",this.state,"nextProps.baiHoc",n.baiHoc),!(0,B.le)(n.baiHoc)&&(n.baiHoc.id!==this.state.id||n.baiHoc.content!==this.state.content)){console.log("BHUpdate componentWillReceiveProps change");var e=n.baiHoc;this.setState({daSua:!1,id:e.id,content:e.content,chuong:e.chuong,title:e.title,chinesse:e.chinesse,hanViet:e.hanViet,bacKinh:e.bacKinh,extraContent:e.extraContent,youTubeId:e.youTubeId,fileMp3:e.fileMp3||!1,shortClipId:e.shortClipId})}}},{key:"onChangeHtmlShow",value:function(n){this.setState({htmlShow:!this.state.htmlShow})}},{key:"onChangeHandlerTitle",value:function(n){this.setState({daSua:!0,title:n.target.value})}},{key:"onHtmlChangeNghiaViet",value:function(n){console.log("onHtmlChangeNghiaViet",n),this.setState({daSua:!0,content:n})}},{key:"onChangeNghiaViet",value:function(n){console.log("onChangeNghiaViet",n.target.value),this.setState({daSua:!0,content:n.target.value})}},{key:"onChangeFileMp3",value:function(){this.setState({daSua:!0,fileMp3:!this.state.fileMp3})}},{key:"onChangeshortClip",value:function(n){this.setState({daSua:!0,shortClipId:n.target.value})}},{key:"onHtmlChangeExtraContent",value:function(n){this.setState({daSua:!0,extraContent:n})}},{key:"onChangeHandlerExtraContent",value:function(n){this.setState({daSua:!0,extraContent:n.target.value})}},{key:"onChangeHandlerYouTube",value:function(n){this.setState({daSua:!0,youTubeId:n.target.value})}},{key:"onChangeHandlerID",value:function(n){var e=n.target.value;if(e.indexOf("\n")>0){var t=this.state.youTubeId;e=e.replaceAll("\n",""),t=(0,k.T)(e),p().isNil(t)||this.setState({daSua:!0,youTubeId:t})}this.setState({daSua:!0,id:e})}},{key:"onChangeHandlerChuong",value:function(n){this.setState({daSua:!0,chuong:n.target.value})}},{key:"onChangeHandlerChuHan",value:function(n){this.setState({daSua:!0,chinesse:n.target.value})}},{key:"onChangeHandlerHanViet",value:function(n){this.setState({daSua:!0,hanViet:n.target.value})}},{key:"onChangeHandlerBacKinh",value:function(n){this.setState({daSua:!0,bacKinh:n.target.value})}},{key:"chuanChuHanTuExcel",value:function(){var n=this.state,e=n.chinesse;if(1!==n.correctExcel){var t=e.split("\n"),i="",a=0;for(a=0;a<t.length;a++)i+=t[a],a++;i=(0,B.ko)(i,"\n",""),i=(0,B.ko)(i,"\t",""),i=(0,B.ko)(i,".","\u3002"),i=(0,B.ko)(i,"\u3002\u300d","\u300d\u3002"),i=(0,B.ko)(i,"\u3002","\u3002\n"),this.setState({daSua:!0,chinesse:i,correctExcel:1})}}},{key:"chuanAnHanViet",value:function(){var n=this.state.hanViet;this.setState({daSua:!0,hanViet:(0,B.KB)(n)})}},{key:"taoPhatAm",value:function(){var n=this.state,e=n.chinesse;n.hanViet,this.setState({daSua:!0,bacKinh:(0,B.N4)(e)})}},{key:"updateBaiHoc",value:function(){var n={id:this.state.id,chuong:this.state.chuong,title:this.state.title,content:this.state.content,extraContent:this.state.extraContent,youTubeId:this.state.youTubeId,chinesse:this.state.chinesse,hanViet:this.state.hanViet,bacKinh:this.state.bacKinh,loginName:this.props.loginName,fileMp3:this.state.fileMp3,shortClipId:this.state.shortClipId};(0,T.bh)().dispatch((0,P.tm)(n))}},{key:"duaBaiHocLenTrangChu",value:function(){var n={id:this.state.id,chuong:this.state.chuong,title:this.state.title,content:this.state.content,loginName:this.props.loginName};(0,T.bh)().dispatch((0,P.Ou)(n))}},{key:"goBaiHocKhoiTrangChu",value:function(){var n={id:this.state.id,chuong:this.state.chuong,title:this.state.title,content:this.state.content,loginName:this.props.loginName};(0,T.bh)().dispatch((0,P.kk)(n))}},{key:"render",value:function(){var n,e=this.props,t=e.baiHoc,a=e.userData,c=p().get(a,"userInfo.role",""),s=this.state,l=s.id,u=s.content,h=s.title,d=s.chuong,f=s.chinesse,g=s.hanViet,C=s.bacKinh,x=s.extraContent,v=s.youTubeId,m=s.loading,k=s.error,P=s.shortClipId,T=s.htmlShow;if(console.log("TkpsBHUpdate ","content state ",u,"props",t),m)return(0,i.jsx)(j.Z,{});if(k)return(0,i.jsx)(H.Z,{content:k});if(n=function(n,e,t,a){var r=(0,B.$V)(n),o=(0,B.r9)(e),c=(0,B.r9)(t),s=[],l=0;for(l=0;l<r.length;l++)s.push({id:l,chinesse:r[l],hanViet:o[l],bacKinh:c[l]});return s.map((function(n){return(0,i.jsx)(w.Z,{id:n.id,chinesse:n.chinesse,hanViet:n.hanViet,bacKinh:n.bacKinh},n.id)}))}(f,g,C),"Admin"!==c)return(0,i.jsx)("h2",{children:"B\u1ea1n kh\xf4ng c\xf3 quy\u1ec1n ch\u1ec9nh s\u1eeda b\xe0i vi\u1ebft"});var O="",V="";return T?(V=u,O=(0,i.jsx)(q,{id:"inputTextNghiaViet",value:u,onChange:this.onChangeNghiaViet})):void 0!=window&&(p().isNil(u)||(V=y()(u)),O=(0,i.jsxs)("div",{className:"editorContainer",children:[(0,i.jsx)(D,{value:u,onChange:this.QuillHandleChange,modules:F,formats:W,theme:"snow"}),(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:u}})]})),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"divRow",children:[(0,i.jsx)(r.Link,{className:"btn btn-secondary",route:"".concat(N.Zg,"/").concat(l),children:(0,i.jsx)("a",{href:"".concat(N.Zg,"/").concat(l),children:" Quay l\u1ea1i"})}),(0,i.jsx)("button",{className:"btn",onClick:this.updateBaiHoc,children:"C\u1eadp nh\u1eadt"}),(0,i.jsx)("button",{className:"btn",onClick:this.duaBaiHocLenTrangChu,children:"\u0110\u01b0a l\xean trang ch\u1ee7"}),(0,i.jsx)("button",{className:"btn",onClick:this.goBaiHocKhoiTrangChu,children:"G\u1ee1 b\xe0i kh\u1ecfi trang ch\u1ee7"}),(0,i.jsxs)("h3",{children:["Ch\u1ec9nh s\u1eeda b\xe0i: ",l]})]}),(0,i.jsxs)("div",{className:"divRow",children:[(0,i.jsx)("input",{id:"title",type:"text",value:h,placeholder:"Ti\xeau \u0111\u1ec1",onChange:this.onChangeHandlerTitle,style:{width:400,marginRight:3}}),(0,i.jsx)("input",{id:"id",type:"text",value:l,placeholder:"ID b\xe0i h\u1ecdc",onChange:this.onChangeHandlerID,style:{width:60,marginRight:3}}),(0,i.jsx)("input",{id:"chuong",type:"text",value:d,placeholder:"Ch\u01b0\u01a1ng C.B0.",onChange:this.onChangeHandlerChuong,style:{width:60,marginRight:3}}),(0,i.jsx)("input",{id:"shortClipId",type:"text",value:P,placeholder:"ID short clip",onChange:this.onChangeshortClip,style:{width:150,marginRight:3}}),(0,i.jsx)(o.__,{htmlFor:"fileMp3",children:"Mp3"}),(0,i.jsx)("input",{type:"checkbox",onChange:this.onChangeFileMp3,style:{marginRight:3}}),(0,i.jsx)("input",{id:"youTubeId",type:"text",value:v,placeholder:"ID clip",onChange:this.onChangeHandlerYouTube,style:{width:100,marginRight:3}}),(0,i.jsx)("a",{htmlFor:"youTubeId",href:"https://www.youtube.com/playlist?list=PLyzPM-oZ65rFvvO5yJVLdRnBj1FpBfpHf",target:"_blank",children:"(list)"}),(0,i.jsx)(o.__,{for:"htmlShow",children:"Html"}),(0,i.jsx)("input",{type:"checkbox",onChange:this.onChangeHtmlShow})]}),(0,i.jsxs)(o.X2,{children:[(0,i.jsx)(o.JX,{sm:"12",md:"6",className:"baiHoc-view-card",children:(0,i.jsxs)(o.Zb,{children:[(0,i.jsx)(o.Ol,{children:"Ngh\u0129a vi\u1ec7t"}),O]})}),(0,i.jsxs)(o.JX,{sm:"12",md:"6",className:"baiHoc-view-card",children:[(0,i.jsx)(D,{value:x,onChange:this.QuillHandleChangeExtra,modules:F,formats:W,theme:"snow"}),(0,i.jsxs)(o.Zb,{children:[(0,i.jsx)(o.Ol,{children:"Gi\u1ea3ng r\u1ed9ng"}),(0,i.jsx)("div",{className:"editorContainer"})]})]})]}),(0,i.jsx)(o.X2,{children:(0,i.jsxs)(nn,{children:[(0,i.jsx)("button",{className:"btn",onClick:this.updateBaiHoc,children:"C\u1eadp nh\u1eadt"}),(0,i.jsx)(o.__,{for:"inputChuHan",children:"Ch\u1eef H\xe1n"}),(0,i.jsx)("span",{children:"\uff0c \uff1a \u300c \u300d \u3002 \u2026"}),(0,i.jsx)(q,{id:"inputChuHan",placeholder:"Ch\u1eef H\xe1n",value:f,onChange:this.onChangeHandlerChuHan}),(0,i.jsx)(q,{id:"inputHanViet",placeholder:"H\xe1n Vi\u1ec7t",value:g,onChange:this.onChangeHandlerHanViet}),(0,i.jsx)("button",{className:"btn",onClick:this.chuanAnHanViet,children:"Chu\u1ea9n H\xe1n Vi\u1ec7t"}),(0,i.jsx)("button",{className:"btn",onClick:this.taoPhatAm,children:"T\u1ea1o ph\xe1t \xe2m t\u1ef1 \u0111\u1ed9ng"}),(0,i.jsx)(q,{id:"inputBacKinh",placeholder:"B\u1eafc Kinh",value:C,onChange:this.onChangeHandlerBacKinh}),(0,i.jsx)("p",{children:"Qui t\u1eafc: \u0110\u1ec3 g\u1ed9p \u0111\xfang b\u1ed9 ba ch\u1eef H\xe1n, H\xe1n Vi\u1ec7t, B\u1eafc Kinh \\n - Ba ph\u1ea7n n\xe0y ph\u1ea3i c\xf3 d\u1ea5u ch\u1ea5m ph\u1ea7n k\u1ebft th\xfac c\xe2u. - N\xean cho xu\u1ed1ng d\xf2ng t\u1eebng c\xe2u \u0111\u1ec3 \u0111\u1ed1i chi\u1ebfu cho d\u1ec5. - Ph\u1ea7n H\xe1n Vi\u1ec7t, B\u1eafc Kinh s\u1ebd t\xe1ch t\u1eeb b\u1eb1ng d\u1ea5u c\xe1ch."})]})}),(0,i.jsx)(o.X2,{className:"pb-3",children:(0,i.jsxs)(o.JX,{children:[(0,i.jsx)(r.Link,{className:"btn btn-secondary",route:"".concat(N.Zg,"/").concat(l),children:(0,i.jsx)("a",{href:"".concat(N.Zg,"/").concat(l),children:" Quay l\u1ea1i"})}),(0,i.jsx)("button",{className:"btn",onClick:this.updateBaiHoc,children:"C\u1eadp nh\u1eadt"})]})}),(0,i.jsx)(o.X2,{children:(0,i.jsx)("h1",{children:"K\u1ebft qu\u1ea3"})}),(0,i.jsxs)(o.X2,{children:[(0,i.jsx)(o.JX,{sm:"12",md:"6",className:"baiHoc-view-card",children:(0,i.jsx)(o.X2,{children:(0,i.jsxs)($,{sm:"12",md:"6",children:[(0,i.jsx)(o.Ol,{children:"Ngh\u0129a vi\u1ec7t"}),V]})})}),(0,i.jsx)(o.JX,{sm:"12",md:"6",className:"baiHoc-view-card",children:(0,i.jsx)(o.X2,{children:(0,i.jsx)(b(),{id:v,opts:G,onReady:J})})})]}),(0,i.jsx)(o.X2,{children:(0,i.jsxs)(o.Zb,{children:[(0,i.jsx)(o.Ol,{children:"Ch\u1eef H\xe1n"}),(0,i.jsx)(Y,{children:n})]})}),(0,i.jsx)(o.X2,{children:(0,i.jsxs)($,{children:[(0,i.jsx)(o.Ol,{children:"Gi\u1ea3ng r\u1ed9ng"}),(0,i.jsx)(o.eW,{className:"html-wrapper",children:!p().isNil(x)&&y()(x)})]})}),(0,i.jsx)(S.Z,{})]})}}])&&V(e.prototype,t),a&&V(e,a),s}(a.Component);en.propTypes={role:u().string,loginName:u().string,error:u().string,loading:u().bool,id:u().string,baiHoc:u().shape({id:u().string,content:u().string,title:u().string,chuong:u().string,chinesse:u().string,hanViet:u().string,bacKinh:u().string,extraContent:u().string,youTubeId:u().string,fileMp3:u().bool,shortClipId:u().string}),updateTkpsgnl:u().func,duaBaiHocLenTrangChu:u().func,goBaiHocKhoiTrangChu:u().func,setError:u().func},en.defaultProps={error:null,baiHoc:null};var tn={updateTkpsgnl:P.tm,duaBaiHocLenTrangChu:P.Ou,goBaiHocKhoiTrangChu:P.kk},an=(0,c.$j)((function(n){return{userData:n.memberReducer.data,baiHoc:n.tkpsgnlReducer.dataEdit}}),tn)(en);function rn(n){var e=(0,B.PE)("id"),t=(0,c.I0)();return(0,a.useEffect)((function(){t((0,P.fY)(e))}),[t]),(0,i.jsx)(s.Z,{navmenu:!1,container:!1,children:(0,i.jsx)(o.W2,{children:(0,i.jsx)(an,{id:e,loading:!1})})})}},1310:function(n,e,t){"use strict";t.d(e,{T:function(){return a}});t(6486);var i={C8B15:"1ssZaX2iAIY",C8B14:"zHuX-HRgm0s",C8B13:"hK6I_vNfpsU",C8B12:"eoZaeDGM6uw",C8B11:"ucjaYsew3IA",C8B10:"GBjaCwK2Mng",C8B09:"FcMnYQEjN5Q",C8B08:"aN5IKXA61ZY",C8B07:"kUAveKxrA_A",C8B06:"SeIKTrBwqMI",C8B05:"FYBpQpMp2Fo",C8B04:"JUJ1U-MLDJI",C8B03:"LoXCPp0a8HU",C8B02:"-w_yLEKbVyI",C8B01:"o3Y9D2v2fLY",C7B16:"Qfmkoz-n4xM",C7B15:"zKcvD7BbOwk",C7B14:"dUyNDCPhc-Q",C7B13:"xBueju5fGGE",C7B12:"Tuw1yXyWszA",C7B11:"zG944cAYn3o",C7B10:"-VICMwa3FDg",C7B09:"WOoIVY-fKOo",C7B08:"FCJiPzNVHA8",C7B07:"mc5dZ_3218U",C7B06:"wFu5E9f_gIw",C7B05:"c7QyEaW1Fd8",C7B04:"mUvQthq_-98",C7B03:"sxRgv6qHe2w",C7B02:"RAWp9FEHi-M",C7B01:"o7JRCjvyxCQ",C6B16:"VqvnykqWEEc",C6B15:"q_UXaM6Yv18",C6B14:"f66Y4A3ADCg",C6B13:"-7WNE98Kxs0",C6B12:"yRX31dwBGvg",C6B11:"tCU_2jGElsw",C6B10:"1R3aRXGUUsc",C6B09:"WO5qC5TSh2Y",C6B08:"BX6hDf1Psao",C6B07:"oVDMnK0n67c",C6B06:"3bvVBf0l-aI",C6B05:"vw9oJ-Q4kcI",C6B04:"VFrW6Vci3xQ",C4B07:"5w2RhsH2Ni8",C4B03:"dmyaGMF4iMQ",C4B02:"TClMlDAAXuI",C4B01:"QlVaPPCeNBc"},a=function(n){return i[n]}}},function(n){n.O(0,[523,260,867,681,973,146,774,888,179],(function(){return e=1212,n(n.s=e);var e}));var e=n.O();_N_E=e}]);