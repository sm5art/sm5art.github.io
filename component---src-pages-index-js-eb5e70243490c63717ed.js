(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6DW7":function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n="svg"===e.tag?r({},e.attrs,t.extraSVGAttrs||{}):e.attrs,a=Object.keys(n).reduce((function(e,t){var r=t+'="'+n[t]+'"';return e.push(r),e}),[]),i=a.length?" "+a.join(" "):"",l=["<"+e.tag+i+">","</"+e.tag+">"],c=(e.children||[]).map((function(e){return o(e,t)})).join("");return""+l[0]+c+l[1]}Object.defineProperty(t,"__esModule",{value:!0}),t.renderIconDefinitionToSVGElement=function(e,t){if(void 0===t&&(t={}),"function"==typeof e.icon){var n=t.placeholders||{};return o(e.icon(n.primaryColor||"#333",n.secondaryColor||"#E6E6E6"),t)}return o(e.icon,t)}},Mz5C:function(e,t,n){e.exports={container:"index-module--container--3rofJ"}},NBEx:function(e,t,n){var r=n("ydnR");t.filterPosts=function(e){return e.filter((function(e){return e.node.fields.slug.includes(r.blogBasePath)}))}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("JX7q"),o=n("dI71"),a=n("q1tI"),i=n.n(a),l=n("Wbzz"),c=n("TSYQ"),s=n.n(c),u=n("foW8"),f=n.n(u),d=n("H84U");function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t&&g(e.prototype,t),n&&g(e,n),e}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var o=C(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},k=f()({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function x(e){var t=e.suffixCls,n=e.tagName,r=e.displayName;return function(e){var o;return(o=function(r){w(i,r);var o=j(i);function i(){var r;return y(this,i),(r=o.apply(this,arguments)).renderComponent=function(o){var i=o.getPrefixCls,l=r.props.prefixCls,c=i(t,l);return a.createElement(e,b({prefixCls:c,tagName:n},r.props))},r}return v(i,[{key:"render",value:function(){return a.createElement(d.a,null,this.renderComponent)}}]),i}(a.Component)).displayName=r,o}}var P=function(e){var t=e.prefixCls,n=e.className,r=e.children,o=e.tagName,i=S(e,["prefixCls","className","children","tagName"]),l=s()(n,t);return a.createElement(o,b({className:l},i),r)},R=function(e){w(n,e);var t=j(n);function n(){var e;return y(this,n),(e=t.apply(this,arguments)).state={siders:[]},e}return v(n,[{key:"getSiderHook",value:function(){var e=this;return{addSider:function(t){e.setState((function(e){return{siders:[].concat(m(e.siders),[t])}}))},removeSider:function(t){e.setState((function(e){return{siders:e.siders.filter((function(e){return e!==t}))}}))}}}},{key:"render",value:function(){var e,t,n,r=this.props,o=r.prefixCls,i=r.className,l=r.children,c=r.hasSider,u=r.tagName,f=S(r,["prefixCls","className","children","hasSider","tagName"]),d=s()(i,o,(e={},t="".concat(o,"-has-sider"),n="boolean"==typeof c?c:this.state.siders.length>0,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));return a.createElement(k.Provider,{value:{siderHook:this.getSiderHook()}},a.createElement(u,b({className:d},f),l))}}]),n}(a.Component),_=x({suffixCls:"layout",tagName:"section",displayName:"Layout"})(R),M=x({suffixCls:"layout-header",tagName:"header",displayName:"Header"})(P),T=x({suffixCls:"layout-footer",tagName:"footer",displayName:"Footer"})(P),N=x({suffixCls:"layout-content",tagName:"main",displayName:"Content"})(P);_.Header=M,_.Footer=T,_.Content=N;var H=_,L=n("94VI"),I=n("BGR+"),z=n("CtXQ"),A=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t,n){return t&&V(e.prototype,t),n&&V(e,n),e}function G(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=J(e);if(t){var o=J(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return X(this,n)}}function X(e,t){return!t||"object"!==W(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var K=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};if("undefined"!=typeof window){window.matchMedia||(window.matchMedia=function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}})}var U,Z={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},$=f()({}),ee=(U=0,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return U+=1,"".concat(e).concat(U)}),te=function(e){G(n,e);var t=Q(n);function n(e){var r,o,i;return q(this,n),(r=t.call(this,e)).responsiveHandler=function(e){r.setState({below:e.matches});var t=r.props.onBreakpoint;t&&t(e.matches),r.state.collapsed!==e.matches&&r.setCollapsed(e.matches,"responsive")},r.setCollapsed=function(e,t){"collapsed"in r.props||r.setState({collapsed:e});var n=r.props.onCollapse;n&&n(e,t)},r.toggle=function(){var e=!r.state.collapsed;r.setCollapsed(e,"clickTrigger")},r.belowShowChange=function(){r.setState((function(e){return{belowShow:!e.belowShow}}))},r.renderSider=function(e){var t,n=e.getPrefixCls,o=r.props,i=o.prefixCls,l=o.className,c=o.theme,u=o.collapsible,f=o.reverseArrow,d=o.trigger,p=o.style,m=o.width,h=o.collapsedWidth,b=o.zeroWidthTriggerStyle,y=K(o,["prefixCls","className","theme","collapsible","reverseArrow","trigger","style","width","collapsedWidth","zeroWidthTriggerStyle"]),g=n("layout-sider",i),v=Object(I.a)(y,["collapsed","defaultCollapsed","onCollapse","breakpoint","onBreakpoint","siderHook","zeroWidthTriggerStyle"]),w=r.state.collapsed?h:m,E=A(w)?"".concat(w,"px"):String(w),j=0===parseFloat(String(h||0))?a.createElement("span",{onClick:r.toggle,className:"".concat(g,"-zero-width-trigger ").concat(g,"-zero-width-trigger-").concat(f?"right":"left"),style:b},a.createElement(z.a,{type:"bars"})):null,O={expanded:f?a.createElement(z.a,{type:"right"}):a.createElement(z.a,{type:"left"}),collapsed:f?a.createElement(z.a,{type:"left"}):a.createElement(z.a,{type:"right"})}[r.state.collapsed?"collapsed":"expanded"],C=null!==d?j||a.createElement("div",{className:"".concat(g,"-trigger"),onClick:r.toggle,style:{width:E}},d||O):null,S=D(D({},p),{flex:"0 0 ".concat(E),maxWidth:E,minWidth:E,width:E}),k=s()(l,g,"".concat(g,"-").concat(c),(B(t={},"".concat(g,"-collapsed"),!!r.state.collapsed),B(t,"".concat(g,"-has-trigger"),u&&null!==d&&!j),B(t,"".concat(g,"-below"),!!r.state.below),B(t,"".concat(g,"-zero-width"),0===parseFloat(E)),t));return a.createElement("aside",D({className:k},v,{style:S}),a.createElement("div",{className:"".concat(g,"-children")},r.props.children),u||r.state.below&&j?C:null)},r.uniqueId=ee("ant-sider-"),"undefined"!=typeof window&&(o=window.matchMedia),o&&e.breakpoint&&e.breakpoint in Z&&(r.mql=o("(max-width: ".concat(Z[e.breakpoint],")"))),i="collapsed"in e?e.collapsed:e.defaultCollapsed,r.state={collapsed:i,below:!1},r}return F(n,[{key:"componentDidMount",value:function(){this.mql&&(this.mql.addListener(this.responsiveHandler),this.responsiveHandler(this.mql)),this.props.siderHook&&this.props.siderHook.addSider(this.uniqueId)}},{key:"componentWillUnmount",value:function(){this.mql&&this.mql.removeListener(this.responsiveHandler),this.props.siderHook&&this.props.siderHook.removeSider(this.uniqueId)}},{key:"render",value:function(){var e=this.state.collapsed,t=this.props.collapsedWidth;return a.createElement($.Provider,{value:{siderCollapsed:e,collapsedWidth:t}},a.createElement(d.a,null,this.renderSider))}}],[{key:"getDerivedStateFromProps",value:function(e){return"collapsed"in e?{collapsed:e.collapsed}:null}}]),n}(a.Component);te.defaultProps={collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80,style:{},theme:"dark"},Object(L.polyfill)(te);var ne=function(e){G(n,e);var t=Q(n);function n(){return q(this,n),t.apply(this,arguments)}return F(n,[{key:"render",value:function(){var e=this;return a.createElement(k.Consumer,null,(function(t){return a.createElement(te,D({},t,e.props))}))}}]),n}(a.Component);H.Sider=ne;var re=H,oe=n("fcrW"),ae=n.n(oe),ie=n("a/s8"),le=n.n(ie),ce=n("lv3B"),se=n.n(ce),ue=n("MxaW"),fe=n("BMrR"),de=n("2/Rp"),pe=n("kPKH"),me=n("u1gX"),he=n.n(me),be=n("p3AD"),ye=n("+CVY"),ge=n("1iFT"),ve=n("ydnR"),we=n.n(ve),Ee=we.a.jumbotron.lines,je=function(e){var t=e.topMessage,n=e.bottomMessage,r=e.bottomMessagePrefix;return i.a.createElement("div",{style:{paddingTop:Object(be.a)(2),width:"100%"},className:ge.a?he.a.jumbotronMobile:he.a.jumbotron},i.a.createElement(fe.a,null,i.a.createElement("h1",{style:Object.assign({},Object(be.b)(2.1))},t)),i.a.createElement(fe.a,{style:{height:"270px"}},i.a.createElement("h1",{id:"element",style:Object.assign({},Object(be.b)(2.1))},r,i.a.createElement("span",{style:{color:we.a.theme.jumbotronTypingColor}},n),i.a.createElement("span",{className:he.a.blinker}))),i.a.createElement(fe.a,{type:"flex",justify:"end"},i.a.createElement(de.a,{href:"mailto:"+we.a.contactEmail,type:"primary"},we.a.jumbotron.buttonText)))},Oe=function(e){function t(t,n){var o;return(o=e.call(this,t,n)||this).state={message:Ee[0],deleted:!1},o.deleteChar=o.deleteChar.bind(Object(r.a)(o)),o.addChar=o.addChar.bind(Object(r.a)(o)),o}Object(o.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){for(var e=this,t=Promise.resolve(),n=function(n){t=(t=(t=(t=t.then((function(){return Object(ye.b)(1e3)}))).then((function(){return e.deleteString(Ee[n])}))).then((function(){return Object(ye.b)(1e3)}))).then((function(){return e.typeString(Ee[n+1])}))},r=0;r<Ee.length-1;r++)n(r)},n.deleteString=function(e){var t=this;return new Promise((function(n){Object(ye.a)(t.deleteChar,e.length).then(n)}))},n.typeString=function(e){var t=this;return new Promise((function(n){for(var r=Promise.resolve(),o=function(n){r=r.then((function(){return t.addChar(e.substring(n,n+1))}))},a=0;a<e.length;a++)o(a);r=r.then(n)}))},n.deleteChar=function(){var e=this;return new Promise((function(t){Object(ye.b)(100).then((function(){e.setState({message:e.state.message.substring(0,e.state.message.length-1)}),t()}))}))},n.addChar=function(e){var t=this;return new Promise((function(n){Object(ye.b)(100).then((function(){t.setState({message:t.state.message+e}),n()}))}))},n.render=function(){return i.a.createElement(je,{topMessage:we.a.jumbotron.topMessage,bottomMessagePrefix:we.a.jumbotron.bottomMessagePrefix,bottomMessage:this.state.message})},t}(i.a.Component),Ce=function(){return i.a.createElement(fe.a,{type:"flex",justify:"start"},i.a.createElement(pe.a,{style:{width:"100%"}},i.a.createElement(Oe,null)))},Se=function(e){var t=e.number;return i.a.createElement("h1",{style:{color:ve.theme.numberColor,marginRight:Object(be.a)(1)}},"0"+t+".")},ke=function(e){var t=e.refCallback,n=Object(l.useStaticQuery)("361412102");return i.a.createElement("div",{ref:t,style:{marginTop:Object(be.a)(7)},className:ge.a?he.a.jumbotronMobile:he.a.jumbotron},i.a.createElement(fe.a,null,i.a.createElement(Se,{number:2})),i.a.createElement(fe.a,null,i.a.createElement("section",{dangerouslySetInnerHTML:{__html:n.markdownRemark.html}})))},xe=n("NBEx"),Pe=function(e){var t=e.refCallback,n=Object(l.useStaticQuery)("2312261200"),r=Object(xe.filterPosts)(n.allMarkdownRemark.edges);return i.a.createElement("div",{ref:t,style:{marginTop:Object(be.a)(7)},className:ge.a?he.a.jumbotronMobile:he.a.jumbotron},i.a.createElement(fe.a,null,i.a.createElement(Se,{number:1})),i.a.createElement(fe.a,null,i.a.createElement("h1",null,"Blogs"),r.map((function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return i.a.createElement("article",{key:t.fields.slug},i.a.createElement("header",null,i.a.createElement("h3",{style:{marginBottom:Object(be.a)(1/4)}},i.a.createElement(l.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),i.a.createElement("small",null,t.frontmatter.date)),i.a.createElement("section",null,i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))}))))},Re=function(e){var t=e.refCallback,n=Object(l.useStaticQuery)("1303596396");return i.a.createElement("div",{ref:t,style:{marginTop:Object(be.a)(7)},className:ge.a?he.a.jumbotronMobile:he.a.jumbotron},i.a.createElement(fe.a,null,i.a.createElement(Se,{number:3})),i.a.createElement(fe.a,null,i.a.createElement("section",{dangerouslySetInnerHTML:{__html:n.markdownRemark.html}})))},_e=n("oY9k"),Me=n.n(_e),Te=function(e){var t=e.refCallback,n=Object(a.useState)(),r=n[0],o=n[1];return null==r&&Me()("https://api.github.com/users/sm5art/repos").then((function(e){return e.json()})).then((function(e){e.sort((function(e,t){return new Date(t.updated_at)-new Date(e.updated_at)})),o(e)})).catch((function(e){return console.error("Error retrieving user repositories:",e)})),console.log(r),i.a.createElement("div",{ref:t,style:{marginTop:Object(be.a)(7)},className:ge.a?he.a.jumbotronMobile:he.a.jumbotron},i.a.createElement(fe.a,null,i.a.createElement(Se,{number:4})),i.a.createElement("h1",null,"GitHub"),r&&r.map((function(e){return i.a.createElement(fe.a,{style:{marginTop:Object(be.a)(1)}},i.a.createElement(fe.a,null,i.a.createElement("a",{href:e.html_url},e.name)),i.a.createElement(fe.a,null,i.a.createElement("span",null,e.description)),i.a.createElement(fe.a,null,i.a.createElement("span",null,"Last updated: ",e.updated_at)),i.a.createElement(fe.a,null,i.a.createElement("span",null,"Created: ",e.created_at)))})))},Ne=n("TJpk"),He=n.n(Ne);function Le(e){var t=e.description,n=e.lang,r=e.meta,o=e.title;return i.a.createElement(He.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s",meta:[{name:"description",content:t},{property:"og:title",content:o},{property:"og:description",content:t},{property:"og:type",content:"website"}].concat(r)})}Le.defaultProps={lang:"en",meta:[],description:""};var Ie=Le,ze=n("Mz5C"),Ae=n.n(ze),We=n("6DW7"),Be=re.Header,De=re.Footer,qe=re.Content,Ve=ve.theme.shiftingColors,Fe=function(e){function t(t,n){var o;return(o=e.call(this,t,n)||this).state={width:null,currentIndex:0,backgroundColor:Ve[0]},o.aboutRef=null,o.experienceRef=null,o.blogsRef=null,o.rotateBackgroundColor=o.rotateBackgroundColor.bind(Object(r.a)(o)),o.oneRotation=o.oneRotation.bind(Object(r.a)(o)),o.startRotations=o.startRotations.bind(Object(r.a)(o)),o.initKeyPressLogic=o.initKeyPressLogic.bind(Object(r.a)(o)),o}Object(o.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.addEventListener("resize",(function(){return e.setState({width:window.innerWidth})})),Object(ye.a)(this.startRotations,500).then((function(){return console.log("no more repeating")})),this.initKeyPressLogic()},n.componentWillUnmount=function(){var e=this;window.removeEventListener("resize",(function(){return e.setState({width:window.innerWidth})})),document.removeEventListener("keypress",this.func)},n.rotateBackgroundColor=function(){var e=this;return new Promise((function(t){var n=e.state.currentIndex+1>=Ve.length?0:e.state.currentIndex+1;e.setState({currentIndex:n,backgroundColor:Ve[n]}),Object(ye.b)(6e3).then(t)}))},n.oneRotation=function(){var e=this,t=Promise.resolve();return t=(t=t.then((function(){return Object(ye.b)(1e3)}))).then((function(){return e.rotateBackgroundColor()}))},n.startRotations=function(){for(var e=this,t=Promise.resolve(),n=0;n<Ve.length;n++)t=t.then((function(){return e.oneRotation()}));return t},n.initKeyPressLogic=function(){var e=this;this.func=function(t){t.keyCode=="1".charCodeAt(0)?window.scrollTo(0,e.blogsRef.offsetTop+ue.b):t.keyCode=="2".charCodeAt(0)?window.scrollTo(0,e.aboutRef.offsetTop+ue.b):t.keyCode=="3".charCodeAt(0)?window.scrollTo(0,e.experienceRef.offsetTop+ue.b):t.keyCode=="4".charCodeAt(0)&&window.scrollTo(0,e.githubRef.offsetTop+ue.b)},document.addEventListener("keypress",this.func)},n.render=function(){var e=this,t=this.props.data,n=(t.site.siteMetadata.title,t.allMarkdownRemark.edges,Object(We.renderIconDefinitionToSVGElement)(ae.a,{extraSVGAttrs:{width:"2em",height:"2em"}})),r=Object(We.renderIconDefinitionToSVGElement)(le.a,{extraSVGAttrs:{width:"2em",height:"2em"}}),o=Object(We.renderIconDefinitionToSVGElement)(se.a,{extraSVGAttrs:{width:"2em",height:"2em"}});return i.a.createElement(re,{style:{background:this.state.backgroundColor},className:Ae.a.container},i.a.createElement(Ie,{title:ve.author,description:ve.description,meta:[{name:"google-site-verification",content:"SkuXj_g_uDvvxdLmSZ32ZSEFYFwZ0Yqv5t7pcPak8hg"}]}),i.a.createElement(Be,{style:{position:"fixed",zIndex:1,width:"99vw",paddingLeft:Object(be.a)(.5),paddingRight:Object(be.a)(.5),background:"inherit"}},i.a.createElement(ue.c,{refs:[this.aboutRef,this.experienceRef,this.blogsRef,this.githubRef]})),i.a.createElement(re,{style:{background:"inherit"}},i.a.createElement(qe,{style:{marginTop:Object(be.a)(3),marginLeft:"auto",marginRight:"auto",maxWidth:Object(be.a)(32)}},i.a.createElement(Ce,null),i.a.createElement(Pe,{refCallback:function(t){return e.blogsRef=t}}),i.a.createElement(ke,{refCallback:function(t){return e.aboutRef=t}}),i.a.createElement(Re,{refCallback:function(t){return e.experienceRef=t}}),i.a.createElement(Te,{refCallback:function(t){return e.githubRef=t}}),i.a.createElement(De,{style:{background:"inherit",textAlign:"center"}},i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," and ❤️"),i.a.createElement("div",null,i.a.createElement("a",{href:"https://www.linkedin.com/in/artur-kashperskiy-9171ab11a/"},i.a.createElement("span",{dangerouslySetInnerHTML:{__html:r}})),i.a.createElement("a",{style:{marginLeft:"2px"},href:"https://github.com/sm5art"},i.a.createElement("span",{dangerouslySetInnerHTML:{__html:n}})),i.a.createElement("a",{style:{marginLeft:"2px"},href:"https://www.youtube.com/@AwesomeMinecraftSauc"},i.a.createElement("span",{dangerouslySetInnerHTML:{__html:o}})))))))},t}(i.a.Component);t.default=Fe},"a/s8":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"linkedin",theme:"outline",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:!1},children:[{tag:"path",attrs:{d:"M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"}}]}}},fcrW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"github",theme:"outline",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:!1},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]}}},lv3B:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"youtube",theme:"outline",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:!1},children:[{tag:"path",attrs:{d:"M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z"}}]}}},oY9k:function(e,t,n){"use strict";(function(n){var r=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=r.fetch,r.fetch&&(t.default=r.fetch.bind(r)),t.Headers=r.Headers,t.Request=r.Request,t.Response=r.Response}).call(this,n("yLpj"))},u1gX:function(e,t,n){e.exports={jumbotron:"jumbotron-module--jumbotron--3zHva",jumbotronMobile:"jumbotron-module--jumbotronMobile--3Qq__",blinker:"jumbotron-module--blinker--1SxqB"}}}]);
//# sourceMappingURL=component---src-pages-index-js-eb5e70243490c63717ed.js.map