"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[811,7250],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=a.createContext({}),d=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=d(n),m=l,k=c["".concat(u,".").concat(m)]||c[m]||s[m]||r;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(67294);const l=function(t){var e=t.children,n=t.hidden,l=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},e)}},9877:(t,e,n)=>{n.d(e,{Z:()=>p});var a=n(87462),l=n(67294),r=n(72389),o=n(29548),i=n(86010);const u="tabItem_LplD";function d(t){var e,n,r,d=t.lazy,p=t.block,s=t.defaultValue,c=t.values,m=t.groupId,k=t.className,h=l.Children.map(t.children,(function(t){if((0,l.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:h.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),N=(0,o.lx)(b,(function(t,e){return t.value===e.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===s?s:null!=(e=null!=s?s:null==(n=h.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(r=h[0])?void 0:r.props.value;if(null!==y&&!b.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),f=g.tabGroupChoices,v=g.setTabGroupChoices,x=(0,l.useState)(y),D=x[0],T=x[1],S=[],B=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var w=f[m];null!=w&&w!==D&&b.some((function(t){return t.value===w}))&&T(w)}var A=function(t){var e=t.currentTarget,n=S.indexOf(e),a=b[n].value;a!==D&&(B(e),T(a),null!=m&&v(m,a))},C=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=S.indexOf(t.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var l=S.indexOf(t.currentTarget)-1;n=S[l]||S[S.length-1]}null==(e=n)||e.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},k)},b.map((function(t){var e=t.value,n=t.label,r=t.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===e?0:-1,"aria-selected":D===e,key:e,ref:function(t){return S.push(t)},onKeyDown:C,onFocus:A,onClick:A},r,{className:(0,i.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":D===e})}),null!=n?n:e)}))),d?(0,l.cloneElement)(h.filter((function(t){return t.props.value===D}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},h.map((function(t,e){return(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==D})}))))}function p(t){var e=(0,r.Z)();return l.createElement(d,(0,a.Z)({key:String(e)},t))}},39390:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>u,contentTitle:()=>d,metadata:()=>p,toc:()=>s,default:()=>m});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),o=n(93950),i=(n(34738),n(9877),n(58215),["components"]),u={id:"buttongroup",title:"ButtonGroup"},d=void 0,p={unversionedId:"components/buttongroup",id:"components/buttongroup",title:"ButtonGroup",description:"ButtonGroup is a linear set of segments, each of which function as a button that can display a different view/or perform a different action.",source:"@site/docs/components/ButtonGroup.mdx",sourceDirName:"components",slug:"/components/buttongroup",permalink:"/docs/next/components/buttongroup",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/ButtonGroup.mdx",tags:[],version:"current",frontMatter:{id:"buttongroup",title:"ButtonGroup"},sidebar:"docs",previous:{title:"Button",permalink:"/docs/next/components/button"},next:{title:"Card",permalink:"/docs/next/components/card"}},s=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"ButtonGroup",id:"buttongroup",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"ButtonGroup",id:"buttongroup-1",children:[{value:"Component",id:"component",children:[],level:4},{value:"activeOpacity",id:"activeopacity",children:[],level:4},{value:"button",id:"button",children:[],level:4},{value:"buttonContainerStyle",id:"buttoncontainerstyle",children:[],level:4},{value:"buttonStyle",id:"buttonstyle",children:[],level:4},{value:"buttons",id:"buttons",children:[],level:4},{value:"containerStyle",id:"containerstyle",children:[],level:4},{value:"disabled",id:"disabled",children:[],level:4},{value:"disabledSelectedStyle",id:"disabledselectedstyle",children:[],level:4},{value:"disabledSelectedTextStyle",id:"disabledselectedtextstyle",children:[],level:4},{value:"disabledStyle",id:"disabledstyle",children:[],level:4},{value:"disabledTextStyle",id:"disabledtextstyle",children:[],level:4},{value:"innerBorderStyle",id:"innerborderstyle",children:[],level:4},{value:"onHideUnderlay",id:"onhideunderlay",children:[],level:4},{value:"onPress",id:"onpress",children:[],level:4},{value:"onShowUnderlay",id:"onshowunderlay",children:[],level:4},{value:"pressableProps",id:"pressableprops",children:[],level:4},{value:"selectMultiple",id:"selectmultiple",children:[],level:4},{value:"selectedButtonStyle",id:"selectedbuttonstyle",children:[],level:4},{value:"selectedIndex",id:"selectedindex",children:[],level:4},{value:"selectedIndexes",id:"selectedindexes",children:[],level:4},{value:"selectedTextStyle",id:"selectedtextstyle",children:[],level:4},{value:"setOpacityTo",id:"setopacityto",children:[],level:4},{value:"textStyle",id:"textstyle",children:[],level:4},{value:"underlayColor",id:"underlaycolor",children:[],level:4},{value:"vertical",id:"vertical",children:[],level:4}],level:3}],level:2}],c={toc:s};function m(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ButtonGroup is a linear set of segments, each of which function as a button that can display a different view/or perform a different action."),(0,r.kt)("p",null,"Use a ButtonGroup to offer choices that are closely related but mutually exclusive."),(0,r.kt)("p",null,"This component inherits ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/touchablehighlight.html"},"all native TouchableHighlight and TouchableOpacity props that come with React Native TouchableHighlight or TouchableOpacity elements"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(o.default,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"buttongroup"},"ButtonGroup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#component"},"Component")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#activeopacity"},"activeOpacity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#button"},"button")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#buttoncontainerstyle"},"buttonContainerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#buttonstyle"},"buttonStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#buttons"},"buttons")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabled"},"disabled")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabledselectedstyle"},"disabledSelectedStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabledselectedtextstyle"},"disabledSelectedTextStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabledstyle"},"disabledStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabledtextstyle"},"disabledTextStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#innerborderstyle"},"innerBorderStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onhideunderlay"},"onHideUnderlay")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onpress"},"onPress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onshowunderlay"},"onShowUnderlay")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pressableprops"},"pressableProps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectmultiple"},"selectMultiple")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectedbuttonstyle"},"selectedButtonStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectedindex"},"selectedIndex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectedindexes"},"selectedIndexes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectedtextstyle"},"selectedTextStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setopacityto"},"setOpacityTo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#textstyle"},"textStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#underlaycolor"},"underlayColor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#vertical"},"vertical"))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"buttongroup-1"},"ButtonGroup"),(0,r.kt)("h4",{id:"component"},"Component"),(0,r.kt)("p",null,"Choose other button component such as TouchableOpacity."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"React Component"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"activeopacity"},"activeOpacity"),(0,r.kt)("p",null,"Add active opacity to the button in buttonGroup."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"button"},"button"),(0,r.kt)("p",null,"Button for the component."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"buttoncontainerstyle"},"buttonContainerStyle"),(0,r.kt)("p",null,"Specify styling for button containers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"buttonstyle"},"buttonStyle"),(0,r.kt)("p",null,"Specify styling for button."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"buttons"},"buttons"),(0,r.kt)("p",null,"Array of buttons for component (required), if returning a component, must be an object with { element: componentName }."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"any[]"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"containerstyle"},"containerStyle"),(0,r.kt)("p",null,"Specify styling for main button container."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"disabled"},"disabled"),(0,r.kt)("p",null,"Controls if buttons are disabled. Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," makes all of them disabled, while using an array only makes those indices disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean or number[]"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"disabledselectedstyle"},"disabledSelectedStyle"),(0,r.kt)("p",null,"Styling for each selected button when disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"disabledselectedtextstyle"},"disabledSelectedTextStyle"),(0,r.kt)("p",null,"Styling for the text of each selected button when disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"disabledstyle"},"disabledStyle"),(0,r.kt)("p",null,"Styling for each button when disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"disabledtextstyle"},"disabledTextStyle"),(0,r.kt)("p",null,"Styling for the text of each button when disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"innerborderstyle"},"innerBorderStyle"),(0,r.kt)("p",null,"Update the styling of the interior border of the list of buttons."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{ color?: string; width?: number; }"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onhideunderlay"},"onHideUnderlay"),(0,r.kt)("p",null,"Function called on hiding underlay."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onpress"},"onPress"),(0,r.kt)("p",null,"Called when a single tap gesture is detected."),(0,r.kt)("p",null,"Method to update Button Group Index."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"((event: GestureResponderEvent) => void) and ((...args: any[]) => void)"),(0,r.kt)("td",{parentName:"tr",align:null},"Function")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onshowunderlay"},"onShowUnderlay"),(0,r.kt)("p",null,"Function called on showing underlay."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"pressableprops"},"pressableProps"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"selectmultiple"},"selectMultiple"),(0,r.kt)("p",null,"Allows the user to select multiple buttons."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"selectedbuttonstyle"},"selectedButtonStyle"),(0,r.kt)("p",null,"Specify styling for selected button."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"selectedindex"},"selectedIndex"),(0,r.kt)("p",null,"Current selected index of array of buttons."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"null")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"selectedindexes"},"selectedIndexes"),(0,r.kt)("p",null,"Current selected indexes from the array of buttons."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number[]"),(0,r.kt)("td",{parentName:"tr",align:null},"[]")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"selectedtextstyle"},"selectedTextStyle"),(0,r.kt)("p",null,"Specify specific styling for text in the selected state."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"setopacityto"},"setOpacityTo"),(0,r.kt)("p",null,"Function to set the opacity."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"textstyle"},"textStyle"),(0,r.kt)("p",null,"Specify specific styling for text."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"underlaycolor"},"underlayColor"),(0,r.kt)("p",null,"Specify underlayColor for TouchableHighlight."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Color(Primary)")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"vertical"},"vertical"),(0,r.kt)("p",null,"Display the ButtonGroup vertically."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null))}m.isMDXComponent=!0},93950:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>i,contentTitle:()=>u,metadata:()=>d,toc:()=>p,default:()=>c});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),o=["components"],i={},u=void 0,d={unversionedId:"components/usage/ButtonGroup",id:"components/usage/ButtonGroup",title:"ButtonGroup",description:"Using components",source:"@site/docs/components/usage/ButtonGroup.mdx",sourceDirName:"components/usage",slug:"/components/usage/ButtonGroup",permalink:"/docs/next/components/usage/ButtonGroup",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/ButtonGroup.mdx",tags:[],version:"current",frontMatter:{}},p=[{value:"Using components",id:"using-components",children:[],level:3}],s={toc:p};function c(t){var e=t.components,n=(0,l.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"using-components"},"Using components"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"constructor () {\n  super()\n  this.state = {\n    selectedIndex: 2\n  }\n  this.updateIndex = this.updateIndex.bind(this)\n}\nupdateIndex (selectedIndex) {\n  this.setState({selectedIndex})\n}\n\nconst component1 = () => <Text>Hello</Text>\nconst component2 = () => <Text>World</Text>\nconst component3 = () => <Text>ButtonGroup</Text>\n\nrender () {\n  const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]\n  const { selectedIndex } = this.state\n  return (\n    <ButtonGroup\n      onPress={this.updateIndex}\n      selectedIndex={selectedIndex}\n      buttons={buttons}\n      containerStyle={{height: 100}} />\n  )\n}\n")),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE ButtonGroup","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7BuseState%7D%20from%20'react'%0Aimport%20%7B%20ButtonGroup%20%7D%20from%20'react-native-elements'%0Aimport%20%7B%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default()%20%3D%3E%20%7B%0Aconst%20%5BselectedIndex%2C%20setSelectedIndex%5D%20%3D%20useState(0)%3B%0Aconst%20%5BselectedIndexes%2C%20setSelectedIndexes%5D%20%3D%20useState(%5B0%2C%202%2C%203%5D)%3B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EUsing%20Strings%3C%2FText%3E%0A%20%20%20%20%3CButtonGroup%0A%20%20%20%20%20%20buttons%3D%7B%5B'SIMPLE'%2C%20'BUTTON'%2C%20'GROUP'%5D%7D%0A%20%20%20%20%20%20selectedIndex%3D%7BselectedIndex%7D%0A%20%20%20%20%20%20onPress%3D%7B(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setSelectedIndex(value)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginBottom%3A%2020%20%7D%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3CButtonGroup%0A%20%20%20%20%20%20buttons%3D%7B%5B'Multiple'%2C%20'Select'%2C%20'Button'%2C%20'Group'%5D%7D%0A%20%20%20%20%20%20selectMultiple%0A%20%20%20%20%20%20selectedIndexes%3D%7BselectedIndexes%7D%0A%20%20%20%20%20%20onPress%3D%7B(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setSelectedIndexes(value)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginBottom%3A%2020%20%7D%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EUsing%20Components%3C%2FText%3E%0A%20%20%3C%2F%3E%0A)%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AsubHeader%3A%20%7B%0A%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20color%20%3A%20%22white%22%2C%0A%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20paddingVertical%20%3A%205%2C%0A%20%20marginBottom%20%3A%2010%0A%7D%0A%7D)","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0}}]);