"use strict";(self.webpackChunktsubakura_github_io=self.webpackChunktsubakura_github_io||[]).push([[7981],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>d});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var A=n.createContext({}),s=function(e){var t=n.useContext(A),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(A.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,A=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(r),w=a,d=g["".concat(A,".").concat(w)]||g[w]||u[w]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=w;var l={};for(var A in t)hasOwnProperty.call(t,A)&&(l[A]=t[A]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}w.displayName="MDXCreateElement"},9869:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>A,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const o="data:image/png;base64,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",i={id:"m4s_electrope_edge_2",title:"M4S - Electrope Edge 2",sidebar_label:"Electrope Edge 2 (Lightning Cage)",hide_title:!1,hide_table_of_contents:!0,slug:"/savage/m4s/electrope_edge_2"},l=void 0,A={unversionedId:"savage/arcadion/m4s/m4s_electrope_edge_2",id:"savage/arcadion/m4s/m4s_electrope_edge_2",title:"M4S - Electrope Edge 2",description:"Wicked Thunder casts Electrope Edge again, but this time, instead of summoning cubes that are placed on the field, you are now the cube! At the same time, the arena tiles is now expanded to 5x5 for the cube mechanics.",source:"@site/docs/savage/arcadion/m4s/electrope_edge_2.mdx",sourceDirName:"savage/arcadion/m4s",slug:"/savage/m4s/electrope_edge_2",permalink:"/savage/m4s/electrope_edge_2",draft:!1,tags:[],version:"current",frontMatter:{id:"m4s_electrope_edge_2",title:"M4S - Electrope Edge 2",sidebar_label:"Electrope Edge 2 (Lightning Cage)",hide_title:!1,hide_table_of_contents:!0,slug:"/savage/m4s/electrope_edge_2"},sidebar:"mySideBar",previous:{title:"Electrope Edge 1",permalink:"/savage/m4s/electrope_edge_1"},next:{title:"Ion Cluster (Ion Cannon)",permalink:"/savage/m4s/ion_cluster"}},s={},c=[{value:"Lightning Cage",id:"lightning-cage",level:2}],g=(u="KittenAsset",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)});var u;const w={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Wicked Thunder casts ",(0,a.yg)("strong",null,"Electrope Edge")," again, but this time, instead of summoning cubes that are placed on the field, you are now the cube! At the same time, the arena tiles is now expanded to 5x5 for the cube mechanics."),(0,a.yg)("table",{width:"40%"},(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)(g,{path:"m4s/electrope_edge_2_arena.png",mdxType:"KittenAsset"})))),(0,a.yg)("table",{width:"80%"},(0,a.yg)("tr",null,(0,a.yg)("th",null,"Debuff"),(0,a.yg)("th",{width:"70%"},"Description"),(0,a.yg)("th",null,"Additional Notes")),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("img",{src:o})),(0,a.yg)("td",null,(0,a.yg)("center",null,(0,a.yg)("strong",null,"Electrical Condenser")),(0,a.yg)("br",null),"You are now a cube! When the timer hits zero, you will discharge electricity on the tiles around you. The size of your discharge depends on how many attacks you have received from the boss, including the ones you take from failing to do the mechanics properly. If you somehow manage to accumulate 4 charges instead, then you will explode when the timer runs out, wiping the party. ",(0,a.yg)("br",null),(0,a.yg)("br",null),"Each role group always has two players with a 42s timer and two players with a 22s timer."),(0,a.yg)("td",null,(0,a.yg)(g,{path:"m4s/electrope_edge_2_partylist.png",mdxType:"KittenAsset"})))),(0,a.yg)("p",null,"Immediately spread out to your clockspot around the boss, because the boss will cast ",(0,a.yg)("strong",null,"Witchgleam")," and start zapping each player at random. Start counting how many times you have zapped, because this will be important for the next mechanic."),(0,a.yg)("p",null,"The players with 22s will always be either zapped twice or three times, whereas players with 42s will only be zapped once or twice. Players with a 42s debuff timer can manually increase their own count by +1 and treat those as two and three, because you will inevitably get hit in a stack/spread mechanic which occurs later."),(0,a.yg)(g,{path:"m4s/electrope_edge_2_witchgleam.gif",mdxType:"KittenAsset"}),(0,a.yg)("h2",{id:"lightning-cage"},"Lightning Cage"),(0,a.yg)("p",null,"WIP..."))}p.isMDXComponent=!0}}]);