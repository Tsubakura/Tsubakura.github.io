"use strict";(self.webpackChunktsubakura_github_io=self.webpackChunktsubakura_github_io||[]).push([[930],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),i=a(6550),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=s??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var k=a(2389);const D={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",D.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",D.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function g(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},8150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);const i=a.p+"assets/images/markers_papan-7fbf25492a3cfe075623dbd4ffae0a4d.jpg",s=a.p+"assets/images/markers_mochibe-c58d1e8527d5ece5b9e9767a2d9bcaf3.jpg",u={id:"p12s_p2",title:"P12S - Athena Intro (Phase 2)",sidebar_position:13,sidebar_label:"Intro (Phase 2)",hide_title:!1,hide_table_of_contents:!0,slug:"/savage/p12s_p2"},c=void 0,p={unversionedId:"savage/pandaemonium/p12s/p12s_p2",id:"savage/pandaemonium/p12s/p12s_p2",title:"P12S - Athena Intro (Phase 2)",description:"This is the second phase of P12S and it serves as a checkpoint. For phase one, head back to part 1 of this fight.",source:"@site/docs/savage/pandaemonium/p12s/intro_p2.mdx",sourceDirName:"savage/pandaemonium/p12s",slug:"/savage/p12s_p2",permalink:"/savage/p12s_p2",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{id:"p12s_p2",title:"P12S - Athena Intro (Phase 2)",sidebar_position:13,sidebar_label:"Intro (Phase 2)",hide_title:!1,hide_table_of_contents:!0,slug:"/savage/p12s_p2"},sidebar:"mySideBar",previous:{title:"Intro (Phase 1)",permalink:"/savage/p12s_p1"},next:{title:"Intro",permalink:"/extreme/endwalker/ex6"}},m={},d=[{value:"Major mechanics",id:"major-mechanics",level:2},{value:"Setup",id:"setup",level:2},{value:"Waymark",id:"waymark",level:3},{value:"Macro",id:"macro",level:3},{value:"Waymark",id:"waymark-1",level:3},{value:"Macro",id:"macro-1",level:3},{value:"Waymark",id:"waymark-2",level:3},{value:"Demi Parhelion and Ekyprosis spread positions",id:"demi-parhelion-and-ekyprosis-spread-positions",level:3},{value:"Pangenesis line up",id:"pangenesis-line-up",level:3},{value:"Caloric Theory 2 positions",id:"caloric-theory-2-positions",level:3}],h={toc:d},f="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is the second phase of P12S and it serves as a checkpoint. For phase one, head back to ",(0,r.kt)("a",{parentName:"p",href:"/savage/p12s_p1"},"part 1")," of this fight."),(0,r.kt)("p",null,"The strategies used for each datacenter are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aether uses ",(0,r.kt)("a",{parentName:"li",href:"https://pastebin.com/gc93tBFY"},"pastebin"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Aether uses the ",(0,r.kt)("a",{parentName:"li",href:"https://ff14.toolboxgaming.space/?id=286982839316861&preview=1"},"updated version of Papan strategy")," for Caloric Theory 1."))),(0,r.kt)("li",{parentName:"ul"},"Mana follows ",(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=5c3-Rinh6lA"},"Nukemaru"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Check whether the PF mentions KX or XX, which refers to the Palladian Ray spreads during The Classical Concepts."),(0,r.kt)("li",{parentName:"ul"},"Mana parties do not line up for Pangenesis by default, but they are aware that it is a thing."))),(0,r.kt)("li",{parentName:"ul"},"Elemental follows ",(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=5c3-Rinh6lA"},"Nukemaru"),", but with a few changes in the strategies:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Check whether the PF mentions KX or XX, which refers to the Palladian Ray spreads during The Classical Concepts."),(0,r.kt)("li",{parentName:"ul"},"Elemental uses the ",(0,r.kt)("a",{parentName:"li",href:"https://ff14.toolboxgaming.space/?id=845983862306861&preview=1"},"original version of Papan strategy")," for Caloric Theory 1."),(0,r.kt)("li",{parentName:"ul"},"Elemental parties always line up for Pangenesis by default.")))),(0,r.kt)("h2",{id:"major-mechanics"},"Major mechanics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gaiaochos 1"),(0,r.kt)("li",{parentName:"ul"},"The Classical Concepts 1"),(0,r.kt)("li",{parentName:"ul"},"Caloric Theory 1"),(0,r.kt)("li",{parentName:"ul"},"Pangenesis"),(0,r.kt)("li",{parentName:"ul"},"The Classical Concepts 2"),(0,r.kt)("li",{parentName:"ul"},"Caloric Theory 2"),(0,r.kt)("li",{parentName:"ul"},"Gaiaochos 2")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Elemental",label:"Elemental",default:!0,mdxType:"TabItem"},(0,r.kt)("h3",{id:"waymark"},"Waymark"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"Name":"P12S-2 (Papan)","MapID":943,"A":{"X":100.0,"Y":0.0,"Z":89.0,"ID":0,"Active":true},"B":{"X":104.0,"Y":0.0,"Z":93.0,"ID":1,"Active":true},"C":{"X":100.0,"Y":0.0,"Z":97.0,"ID":2,"Active":true},"D":{"X":96.0,"Y":0.0,"Z":93.0,"ID":3,"Active":true},"One":{"X":99.0,"Y":0.0,"Z":81.0,"ID":6,"Active":true},"Two":{"X":113.0,"Y":0.0,"Z":93.0,"ID":5,"Active":true},"Three":{"X":119.0,"Y":0.0,"Z":91.0,"ID":7,"Active":true},"Four":{"X":87.0,"Y":0.0,"Z":93.0,"ID":4,"Active":true}}\n')),(0,r.kt)("img",{src:i}),(0,r.kt)("h3",{id:"macro"},"Macro"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u3010Palladian Grasp\u3011Tank \u2192 W\u3000Others \u2192 E\n\u3010Summon Darkness\u3011N/W \u2192 T/H\u3000S/E \u2192 DPS\n\u3010Demi Parhelion\u3011\n\u3000\u3000MT\u3000 ST\u3000\u3000\u3000MT\u3000\u3000ST\u3000\n\u3000H1\u3000\u3000\u3000H2\u3000\u3000H1\u3000\u3000H2\u3000\u3000H1 MT ST H2\n\u3000\u3000\u3000\u25cf\u3000\u3000\u3000\u3000\u3000\u3000 \u25cf\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u25cf\n\u3000D3\u3000\u3000\u3000D4\u3000\u3000D3\u3000\u3000D4\u3000\u3000D3 D1 D2 D4\n\u3000\u3000D1\u3000D2\u3000\u3000\u3000D1\u3000\u3000D2\u3000\n\u3010The Classical Concepts\u3011\n\u3000\u203b Go to Blue\uff1aWest \u2190 \u3007\xd7\u25bd\u25a1 \u2192 East\n\u3000\u03b1 \u2192 Block Red \u25b2\u3000\u3000\u03b2 \u2192 Block Yellow \u25a0\n\u3010Palladian Ray - X-formation\u3011\n\u25cf\u3000\u3000\u25cf\u3000\u3000\u25cf\u3000\u3000\u25cf\u3000\u30002nd round\uff1aFlip \u3007\xd7\u25bd\u25a1\n\u3007\u03b1 \u2605 \xd7\u03b1 \u3000\u25b3\u03b1 \u2605 \u25a1\u03b1\u3000\u203b Bait then go to \u2605\n\u25cf\u3000\u3000\u25cf\u3000\u3000\u25cf\u3000\u3000\u25cf\n\u3007\u03b2 \u2605 \xd7\u03b2\u3000 \u25b3\u03b2 \u2605 \u25a1\u03b2\n\u25cf\u3000\u3000\u25cf\u3000\u3000\u25cf\u3000\u3000\u25cf\n\u3010Caloric Theory 1 (Papan)\u3011\n\u3000\u3000  D3\u3000\u3000\u3000T/M\uff1a Preposition at \u2605\u3000\n\u3000H1 \u2605 D4\u3000  T/H mark\uff1aSwap with H1\n\u3000\u3000  H2\u3000\u3000\u3000DPS mark\uff1aSwap with D4\n\u3000\u25a0 Players at \u2605 fill in *empty* spots\uff1a\n\u3000\u3000\u3000W (ccw) \u2190 H1 MT ST D2 D1 D4 \u2192 N (cw)\n\u3000\u25a0 2x Fire stacks\uff1a\n\u3000\u3000\u3000Rotate to E + W stacks, CW priority\n\u3010Ekpyrosis\u3011\n\u3000MT\u3000ST\n\u3000D1\u3000D2\u3000\u3000MT  D1  D2  ST\n\u3000H1\u3000H2\u3000\u3000D3  H1  H2  D4\n\u3000D3\u3000D4\n\u3010Pangenesis\u3011\u3000MT\uff1aInvuln West Others: East\n\u3000Colourless\uff1aW \u2190 MTSTH1H2D1D2D3D4 \u2192 E\n\u3000No stacks\uff1aSlimes \u2192 W to \ue090, E to \ue091\n\u3010Caloric Theory 2 (Starting positions)\u3011\n\u3000\u3000\u3000H2\u3000\u3000\u3000\u3000 Red Marker: Swap with MT\n\u3000D1\u3000\u3000\u3000D4\u3000\u3000\u203bPass CCW - last player moves\n\u3000\u3000\u3000MT\u3000\u3000\u3000\u3000\u3000 twice without going mid\n\u3000ST\u3000\u3000\u3000D2\n\u3000\u3000\u3000H1\n\u3000\u3000\u3000\u3000\u3000D3\n\u3010Summon Darkness + Demi Parhelion\u3011\n\u3000\u203b MTD1 runs to the other side\n\u3000Moves\uff1e MTD1\u3000STD2\u3000H1D3\u3000H2D4 \uff1cStays\n\u3010Summon Darkness (Tethers)\u3011\n\u3000Resolve in pairs: MTD1\u3000STD2\u3000H1D3\u3000H2D4\n"))),(0,r.kt)(o.Z,{value:"Mana",label:"Mana",mdxType:"TabItem"},(0,r.kt)("h3",{id:"waymark-1"},"Waymark"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"Name":"P12S-2 (Mochibe)","MapID":943,"A":{"X":97.67,"Y":0.0,"Z":92.67,"ID":0,"Active":true},"B":{"X":102.33,"Y":0.0,"Z":92.67,"ID":1,"Active":true},"C":{"X":102.33,"Y":0.0,"Z":97.33,"ID":2,"Active":true},"D":{"X":97.67,"Y":0.0,"Z":97.33,"ID":3,"Active":true},"One":{"X":99.0,"Y":0.0,"Z":81.0,"ID":4,"Active":true},"Two":{"X":119.0,"Y":0.0,"Z":91.0,"ID":5,"Active":true},"Three":{"X":105.67,"Y":0.0,"Z":101.0,"ID":6,"Active":true},"Four":{"X":94.33,"Y":0.0,"Z":101.0,"ID":7,"Active":true}}\n')),(0,r.kt)("img",{src:s}),(0,r.kt)("h3",{id:"macro-1"},"Macro"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u3010\u30d1\u30e9\u30b9\u306e\u624b\u3011  T:\u897f\u3000\u4ed6:\u6771\n\u3010\u30b5\u30e2\u30f3\u30c0\u30fc\u30af\u30cd\u30b9\u3011\u5317\uff1e\u897f:TH\u3000\u5357\uff1e\u6771:DPS\n\u3010\u30c7\u30df\u30cf\u30eb\u30da\u30ea\u30aa\u30f3\u3011\n\u3000\u3000MT\u3000 ST\u3000\u3000\u3000MT\u3000\u3000ST\u3000\n\u3000H1\u3000\u3000\u3000H2\u3000\u3000H1\u3000\u3000H2\u3000\u3000H1 MT ST H2\n\u3000\u3000\u3000\u25cf\u3000\u3000\u3000\u3000\u3000\u3000 \u25cf\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u25cf\n\u3000D3\u3000\u3000\u3000D4\u3000\u3000D3\u3000\u3000D4\u3000\u3000D3 D1 D2 D4\n\u3000\u3000D1\u3000D2\u3000\u3000\u3000D1\u3000\u3000D2\u3000\n\u3010\u30a4\u30c7\u30a2\u3011 \u897f\u2190\u3007\xd7\u25b3\u25a1\u2192\u6771\u3000 \u03b1:\u5317\u3000\u03b2:\u5357\n\u3010\u30d1\u30e9\u30b9\u30ec\u30a4X\u51e6\u7406\u3011\n\u25cf\u3000\u3000\u25cf\u3000\u3000\u25cf\u3000\u3000\u25cf\n\u3007\u03b1 \u2605 \xd7\u03b1 \u3000\u25b3\u03b1 \u2605 \u25a1\u03b1\u3000 2\u56de\u76ee\u306f\u3007\xd7\u25b3\u25a1\u53cd\u8ee2\n\u25cf\u3000\u3000\u25cf\u3000\u3000\u25cf\u3000\u3000\u25cf\u3000\u3000 \u203b\u8a98\u5c0e\u5f8c\u2192\u2605\u306b\u5165\u308b\n\u3007\u03b2 \u2605 \xd7\u03b2\u3000 \u25b3\u03b2 \u2605 \u25a1\u03b2\n\u25cf\u3000\u3000\u25cf\u3000\u3000\u25cf\u3000\u3000\u25cf\n\u3010\u30ab\u30ed\u30ea\u30c3\u30af1\u3011\u203b\u3082\u3061\u3079\u5f0f\n\u708e\u30de\u30fc\u30ab\u30fc\u982d\u5272\u308a\u30fb\u30fb\u30fb\u897f:TH\u3000\u6771:DPS\n\u98a8\u708e:MTSTH1H2D1D2D3D4\u306e\u9806\u3067A\u304b\u3089\u6642\u8a08\n\u3010\u30a8\u30af\u30d4\u30ed\u30b7\u30b9\u3011\nMT  ST\nD1  D2\u3000   MT  D1  D2  ST\u3000\nH1  H2\u3000   D3  H1  H2  D4   \nD3  D4\n\u3010\u30d1\u30f3\u30b2\u30cd\u30b7\u30b9\u3011MT:\u897f\u7121\u6575\u3001\u4ed6:\u5357(\u6771\u5074)\n\u6975\u6027\u306a\u3057:\u897f\u2190MTSTH1H2D1D2D3D4\u2192\u6771\n\u7121\u8077:\u30b9\u30e9\u30a4\u30e0 \u897f\uff1a1\u30de\u30fc\u30ab\u30fc\u3001\u6771\uff1a2\u30de\u30fc\u30ab\u30fc\n\u3010\u30ab\u30ed\u30ea\u30c3\u30af2\u56de\u76ee\u3011\n\u3000\u3000H2\u3000\u3000\u3000\u3000 \u30de\u30fc\u30ab\u30fc:MT\u3068\u4ea4\u4ee3\nD1\u3000\u3000\u3000D4\u3000    \u203b\u53cd\u6642\u8a08/\u6700\u5f8c\u4e2d\u592e\u884c\u304b\u305a\u306b\uff12\u56de\u79fb\u52d5\n\u3000\u3000MT\u3000\u3000\u3000 \u3000\nST\u3000\u3000\u3000D2\n\u3000\u3000H1\n\u3000\u3000\u3000 \u3000D3\n\u3010\u30b5\u30e2\u30f3\u30c0\u30fc\u30af\u30cd\u30b9+\u30c7\u30df2\u3011\uff08MTD1\u304c\u5965\u307e\u3067\u8d70\u308b\uff09\n\u5b89\u7f6e\u306e\u9006\u5074\uff1eMT/D1\u3000ST/D2\u3000H1/D3\u3000H2/D4\uff1c\u5b89\u7f6e\n\u3010\u30b5\u30e2\u30f3\u30c0\u30fc\u30af\u30cd\u30b9(\u7dda)\u3011\n\u3000MT/D1\u3000ST/D2\u3000H1/D3\u3000H2/D4\u30da\u30a2\u3067\u51e6\u7406\n"))),(0,r.kt)(o.Z,{value:"Aether",label:"Aether",mdxType:"TabItem"},(0,r.kt)("h3",{id:"waymark-2"},"Waymark"),(0,r.kt)("p",null,"Still looking for a decent screenshot =w="),(0,r.kt)("h3",{id:"demi-parhelion-and-ekyprosis-spread-positions"},"Demi Parhelion and Ekyprosis spread positions"),(0,r.kt)("p",null,"Still looking for a decent screenshot =w="),(0,r.kt)("h3",{id:"pangenesis-line-up"},"Pangenesis line up"),(0,r.kt)("p",null,"Still looking for a decent screenshot =w="),(0,r.kt)("h3",{id:"caloric-theory-2-positions"},"Caloric Theory 2 positions"),(0,r.kt)("p",null,"Still looking for a decent screenshot =w="))))}k.isMDXComponent=!0}}]);