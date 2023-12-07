/*! For license information please see components-UI-UiLoading-UiLoading-stories.9037a789.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkstar_wars=self.webpackChunkstar_wars||[]).push([[494],{"./src/components/UI/UiLoading/UiLoading.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Black:()=>Black,Blue:()=>Blue,White:()=>White,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UiLoading_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const loader_black=__webpack_require__.p+"static/media/loader-black.4c37441bcebd52296e609954ee9b89dc.svg";const loader_white=__webpack_require__.p+"static/media/loader-white.0585507b6d81cb8fabe05ab7df275e3d.svg";const loader_blue=__webpack_require__.p+"static/media/loader-blue.455c4b065683fbd8d6439b6b203cc25e.svg",UiLoading_module_loader="UiLoading_loader__XCoga",UiLoading_module_shadow="UiLoading_shadow__zmo3u";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UiLoading=_ref=>{let{theme="blue",isShadow="true",classes}=_ref;const[loaderIcon,setLoaderIcon]=(0,react.useState)(null);return(0,react.useEffect)((()=>{switch(theme){case"black":setLoaderIcon(loader_black);break;case"white":setLoaderIcon(loader_white);break;default:setLoaderIcon(loader_blue)}}),[]),(0,jsx_runtime.jsx)("img",{className:classnames_default()(UiLoading_module_loader,isShadow&&UiLoading_module_shadow,classes),src:loaderIcon,alt:"Loader"})};UiLoading.__docgenInfo={description:"",methods:[],displayName:"UiLoading",props:{theme:{defaultValue:{value:"'blue'",computed:!1},description:"",type:{name:"string"},required:!1},isShadow:{defaultValue:{value:"'true'",computed:!1},description:"",type:{name:"bool"},required:!1},classes:{description:"",type:{name:"string"},required:!1}}};const UiLoading_UiLoading=UiLoading;var _Black$parameters,_Black$parameters2,_Black$parameters2$do,_White$parameters,_White$parameters2,_White$parameters2$do,_Blue$parameters,_Blue$parameters2,_Blue$parameters2$doc;const UiLoading_stories={title:"Ui-Kit/UiLoading",component:UiLoading_UiLoading},Template=args=>(0,jsx_runtime.jsx)(UiLoading_UiLoading,{...args}),props={theme:"black",isShadow:!1,classes:""},Black=Template.bind({});Black.args={...props,theme:"black"};const White=Template.bind({});White.args={...props,theme:"white",isShadow:!0};const Blue=Template.bind({});Blue.args={...props,theme:"blue"},Black.parameters={...Black.parameters,docs:{...null===(_Black$parameters=Black.parameters)||void 0===_Black$parameters?void 0:_Black$parameters.docs,source:{originalSource:"args => <UiLoading {...args} />",...null===(_Black$parameters2=Black.parameters)||void 0===_Black$parameters2||null===(_Black$parameters2$do=_Black$parameters2.docs)||void 0===_Black$parameters2$do?void 0:_Black$parameters2$do.source}}},White.parameters={...White.parameters,docs:{...null===(_White$parameters=White.parameters)||void 0===_White$parameters?void 0:_White$parameters.docs,source:{originalSource:"args => <UiLoading {...args} />",...null===(_White$parameters2=White.parameters)||void 0===_White$parameters2||null===(_White$parameters2$do=_White$parameters2.docs)||void 0===_White$parameters2$do?void 0:_White$parameters2$do.source}}},Blue.parameters={...Blue.parameters,docs:{...null===(_Blue$parameters=Blue.parameters)||void 0===_Blue$parameters?void 0:_Blue$parameters.docs,source:{originalSource:"args => <UiLoading {...args} />",...null===(_Blue$parameters2=Blue.parameters)||void 0===_Blue$parameters2||null===(_Blue$parameters2$doc=_Blue$parameters2.docs)||void 0===_Blue$parameters2$doc?void 0:_Blue$parameters2$doc.source}}};const __namedExportsOrder=["Black","White","Blue"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);