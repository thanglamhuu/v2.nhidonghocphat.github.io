(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"/QLl":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M}));var o=n("kOwS"),i=n("9Jkg"),a=n.n(i),r=n("0iUn"),s=n("sLSF"),l=n("MI3g"),c=n("a7VT"),h=n("AT/M"),u=n("Tit0"),d=n("q1tI"),f=n.n(d),p=n("1Yj4"),g=n("ok1R"),m=n("jrRI"),b=n("3OM0"),w=n("rhny"),v=n("vDqi"),x=n.n(v),O=n("o5PN"),j=n("Acaz"),z=n("O+DW"),C=(n("kIZS"),n("LvQh")),y=n("kMCw"),H=f.a.createElement;function _(e,t){var n,o="",i=0;for(i=0;i<t.length;i++)(n=e[t[i]].trim()).indexOf(" ")>0&&(n="("+n+")"),o+=n+" ";return o.trim()}var M=function(e){function t(e){var n;Object(r.a)(this,t),n=Object(l.a)(this,Object(c.a)(t).call(this,e));e.words;return n.state={loading:!0,content:"",chinesse:"1\t\u6211\u5011\tw\u01d2 men (\u1ee7a m\xe2n): ch\xfang t\xf4i. \n2\t\u4ec0\u9ebc\tsh\xe9n me (s\u1ea5n m\u01a1): c\xe1i g\xec, h\u1ea3.",hanViet:"",bacKinh:"",dict:{}},x.a.get("https://raw.githubusercontent.com/thanglamhuu/nddhp.github.io/master/DictTuGhep.json").then((function(e){n.setState({dict:e.data,loading:!1})})),n.onChangeHandlerChuHan=n.onChangeHandlerChuHan.bind(Object(h.a)(n)),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"onChangeHandlerChuHan",value:function(e){var t=this.state.dict,n=e.target.value,o=[],i=n.split("\n"),r=[],s=0;for(s=0;s<i.length;s++)"",r=Object(y.f)(Object(y.f)(Object(y.f)(Object(y.f)(i[s].trim(),"(","\t"),")","\t"),":",""),".","").split("\t"),o.push({chuHan:r[1].trim(),hanViet:_(t,r[1].trim()),bacKinh:r[2].trim(),nghia:r[4].trim()});this.setState({chinesse:n,chuHans:Object(y.f)(a()(o),"},{","},\n{")})}},{key:"render",value:function(){var e=this.state,t=e.chuHans,n=e.chinesse;return z.d("bt-convert"),H(C.a,Object(o.a)({},this.props,{navmenu:!1,container:!1}),H(p.a,null,H(g.a,null,H("h2",{className:"h1Title"},"T\u1ea1o danh s\xe1ch t\u1eeb import")),H(g.a,null,H(m.a,{style:{width:"100%"}},H(b.a,{for:"inputChuHan"},"Nh\u1eadp n\u1ed9i dung ch\u1eef H\xe1n"),H(O.a,{className:"txtAutoSize",id:"inputChuHan",placeholder:"Ch\u1eef H\xe1n",value:n,onChange:this.onChangeHandlerChuHan}))),H(w.a,null,H("h4",null,"K\u1ebft qu\u1ea3"),H("span",null,"Vui l\xf2ng click l\xean t\u1eebng ch\u1eef \u0111\u1ec3 xem t\u1eeb \u0111i\u1ec3n"),H(O.a,{className:"txtAutoSize",id:"inputChuHan",placeholder:"Ch\u1eef H\xe1n",value:t}))))}}]),t}(j.a)},"3OM0":function(e,t,n){"use strict";var o=n("wx14"),i=n("zLVn"),a=n("q1tI"),r=n.n(a),s=n("17x9"),l=n.n(s),c=n("TSYQ"),h=n.n(c),u=n("33Jr"),d=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.string,l.a.number,l.a.shape({size:d,order:d,offset:d})]),p={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:u.n,className:l.a.string,cssModule:l.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:l.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},m=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},b=function(e){var t=e.className,n=e.cssModule,a=e.hidden,s=e.widths,l=e.tag,c=e.check,d=e.size,f=e.for,p=Object(i.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),g=[];s.forEach((function(t,o){var i=e[t];if(delete p[t],i||""===i){var a,r=!o;if(Object(u.h)(i)){var s,l=r?"-":"-"+t+"-";a=m(r,t,i.size),g.push(Object(u.j)(h()(((s={})[a]=i.size||""===i.size,s["order"+l+i.order]=i.order||0===i.order,s["offset"+l+i.offset]=i.offset||0===i.offset,s))),n)}else a=m(r,t,i),g.push(a)}}));var b=Object(u.j)(h()(t,!!a&&"sr-only",!!c&&"form-check-label",!!d&&"col-form-label-"+d,g,!!g.length&&"col-form-label"),n);return r.a.createElement(l,Object(o.a)({htmlFor:f},p,{className:b}))};b.propTypes=p,b.defaultProps=g,t.a=b},JX7q:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return o}))},PzSK:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tu-dien/bt/convert",function(){return n("/QLl")}])},dI71:function(e,t,n){"use strict";function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return o}))},jrRI:function(e,t,n){"use strict";var o=n("wx14"),i=n("zLVn"),a=n("q1tI"),r=n.n(a),s=n("17x9"),l=n.n(s),c=n("TSYQ"),h=n.n(c),u=n("33Jr"),d={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:u.n,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,n=e.cssModule,a=e.row,s=e.disabled,l=e.check,c=e.inline,d=e.tag,f=Object(i.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(u.j)(h()(t,!!a&&"row",l?"form-check":"form-group",!(!l||!c)&&"form-check-inline",!(!l||!s)&&"disabled"),n);return"fieldset"===d&&(f.disabled=s),r.a.createElement(d,Object(o.a)({},f,{className:p}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},o5PN:function(e,t,n){"use strict";var o=n("wx14"),i=n("zLVn"),a=n("JX7q"),r=n("dI71"),s=n("q1tI"),l=(n("17x9"),!!document.documentElement.currentStyle),c={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},h=["letter-spacing","line-height","font-family","font-weight","font-size","font-style","tab-size","text-rendering","text-transform","width","text-indent","padding-top","padding-right","padding-bottom","padding-left","border-top-width","border-right-width","border-bottom-width","border-left-width","box-sizing"],u={},d=document.createElement("textarea"),f=function(e){Object.keys(c).forEach((function(t){e.style.setProperty(t,c[t],"important")}))};function p(e,t,n,o,i){void 0===n&&(n=!1),void 0===o&&(o=null),void 0===i&&(i=null),null===d.parentNode&&document.body.appendChild(d);var a=function(e,t,n){void 0===n&&(n=!1);if(n&&u[t])return u[t];var o=window.getComputedStyle(e);if(null===o)return null;var i=h.reduce((function(e,t){return e[t]=o.getPropertyValue(t),e}),{}),a=i["box-sizing"];if(""===a)return null;l&&"border-box"===a&&(i.width=parseFloat(i.width)+parseFloat(o["border-right-width"])+parseFloat(o["border-left-width"])+parseFloat(o["padding-right"])+parseFloat(o["padding-left"])+"px");var r=parseFloat(i["padding-bottom"])+parseFloat(i["padding-top"]),s=parseFloat(i["border-bottom-width"])+parseFloat(i["border-top-width"]),c={sizingStyle:i,paddingSize:r,borderSize:s,boxSizing:a};n&&(u[t]=c);return c}(e,t,n);if(null===a)return null;var r=a.paddingSize,s=a.borderSize,c=a.boxSizing,p=a.sizingStyle;Object.keys(p).forEach((function(e){d.style[e]=p[e]})),f(d),d.value=e.value||e.placeholder||"x";var g=-1/0,m=1/0,b=d.scrollHeight;"border-box"===c?b+=s:"content-box"===c&&(b-=r),d.value="x";var w=d.scrollHeight-r,v=Math.floor(b/w);return null!==o&&(g=w*o,"border-box"===c&&(g=g+r+s),b=Math.max(g,b)),null!==i&&(m=w*i,"border-box"===c&&(m=m+r+s),b=Math.min(m,b)),{height:b,minHeight:g,maxHeight:m,rowCount:Math.floor(b/w),valueRowCount:v}}d.setAttribute("tab-index","-1"),d.setAttribute("aria-hidden","true"),f(d);var g=function(){},m=0,b=function(e){function t(t){var n;return(n=e.call(this,t)||this)._onRef=function(e){n._ref=e;var t=n.props.inputRef;"function"!==typeof t?t.current=e:t(e)},n._onChange=function(e){n._controlled||n._resizeComponent(),n.props.onChange(e,Object(a.a)(n))},n._resizeComponent=function(e){void 0===e&&(e=g);var t=p(n._ref,n._uid,n.props.useCacheForDOMMeasurements,n.props.minRows,n.props.maxRows);if(null!==t){var o=t.height,i=t.minHeight,a=t.maxHeight,r=t.rowCount,s=t.valueRowCount;n.rowCount=r,n.valueRowCount=s,n.state.height===o&&n.state.minHeight===i&&n.state.maxHeight===a?e():n.setState({height:o,minHeight:i,maxHeight:a},e)}else e()},n.state={height:t.style&&t.style.height||0,minHeight:-1/0,maxHeight:1/0},n._uid=m++,n._controlled=void 0!==t.value,n._resizeLock=!1,n}Object(r.a)(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=(e.inputRef,e.maxRows,e.minRows,e.onHeightChange,e.useCacheForDOMMeasurements,Object(i.a)(e,["inputRef","maxRows","minRows","onHeightChange","useCacheForDOMMeasurements"]));return t.style=Object(o.a)({},t.style,{height:this.state.height}),Math.max(t.style.maxHeight||1/0,this.state.maxHeight)<this.state.height&&(t.style.overflow="hidden"),Object(s.createElement)("textarea",Object(o.a)({},t,{onChange:this._onChange,ref:this._onRef}))},n.componentDidMount=function(){var e=this;this._resizeComponent(),this._resizeListener=function(){e._resizeLock||(e._resizeLock=!0,e._resizeComponent((function(){e._resizeLock=!1})))},window.addEventListener("resize",this._resizeListener)},n.componentDidUpdate=function(e,t){e!==this.props&&this._resizeComponent(),this.state.height!==t.height&&this.props.onHeightChange(this.state.height,this)},n.componentWillUnmount=function(){window.removeEventListener("resize",this._resizeListener),function(e){delete u[e]}(this._uid)},t}(s.Component);b.defaultProps={inputRef:g,onChange:g,onHeightChange:g,useCacheForDOMMeasurements:!1},t.a=b},ok1R:function(e,t,n){"use strict";var o=n("wx14"),i=n("zLVn"),a=n("q1tI"),r=n.n(a),s=n("17x9"),l=n.n(s),c=n("TSYQ"),h=n.n(c),u=n("33Jr"),d=l.a.oneOfType([l.a.number,l.a.string]),f={tag:u.n,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,s=e.tag,l=e.form,c=e.widths,d=Object(i.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];c.forEach((function(t,n){var o=e[t];if(delete d[t],o){var i=!n;f.push(i?"row-cols-"+o:"row-cols-"+t+"-"+o)}}));var p=Object(u.j)(h()(t,a?"no-gutters":null,l?"form-row":"row",f),n);return r.a.createElement(s,Object(o.a)({},d,{className:p}))};g.propTypes=f,g.defaultProps=p,t.a=g}},[["PzSK",1,2,7,0,3,4,5,6,8,9,10]]]);