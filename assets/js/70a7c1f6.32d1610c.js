"use strict";(self.webpackChunktsubakura_github_io=self.webpackChunktsubakura_github_io||[]).push([[9806],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>w});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),h=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},A="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),A=h(a),m=r,w=A["".concat(s,".").concat(m)]||A[m]||d[m]||i;return a?n.createElement(w,o(o({ref:t},c),{},{components:a})):n.createElement(w,o({ref:t},c))}));function w(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[A]="string"==typeof e?e:r,o[1]=l;for(var h=2;h<i;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2105:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(8168),r=(a(6540),a(5680));const i="data:image/png;base64,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",o={id:"m3s_chain_deathmatch_1",title:"M3S - Chain Deathmatch 1",sidebar_label:"Chain Deathmatch 1",hide_title:!1,hide_table_of_contents:!0,slug:"/savage/m3s/chain_deathmatch_1"},l=void 0,s={unversionedId:"savage/arcadion/m3s/m3s_chain_deathmatch_1",id:"savage/arcadion/m3s/m3s_chain_deathmatch_1",title:"M3S - Chain Deathmatch 1",description:"After you're done with the introductory mechanics, Brute Bomber will cast Brutal Impact and follow this up with a Knuckle Sandwich. Once you've dealt with them, the boss will use Tag Team and transition into the first major mechanic of the fight.",source:"@site/docs/savage/arcadion/m3s/chain_deathmatch_1.mdx",sourceDirName:"savage/arcadion/m3s",slug:"/savage/m3s/chain_deathmatch_1",permalink:"/savage/m3s/chain_deathmatch_1",draft:!1,tags:[],version:"current",frontMatter:{id:"m3s_chain_deathmatch_1",title:"M3S - Chain Deathmatch 1",sidebar_label:"Chain Deathmatch 1",hide_title:!1,hide_table_of_contents:!0,slug:"/savage/m3s/chain_deathmatch_1"},sidebar:"mySideBar",previous:{title:"Doping Draught 1",permalink:"/savage/m3s/doping_1"},next:{title:"Final Fusedown",permalink:"/savage/m3s/final_fusedown"}},h={},c=[{value:"Chain Deathmatch",id:"chain-deathmatch",level:2}],A=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},d=A("Raidwide"),m=A("Tankbuster"),w={toc:c},u="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"After you're done with the introductory mechanics, Brute Bomber will cast ",(0,r.yg)(d,{mdxType:"Raidwide"},"Brutal Impact")," and follow this up with a ",(0,r.yg)(m,{mdxType:"Tankbuster"},"Knuckle Sandwich"),". Once you've dealt with them, the boss will use ",(0,r.yg)("strong",null,"Tag Team")," and transition into the first major mechanic of the fight."),(0,r.yg)("h2",{id:"chain-deathmatch"},"Chain Deathmatch"),(0,r.yg)("p",null,"Brute Bomber summons two clones who will perform a ",(0,r.yg)("strong",null,"Lariat Combo")," at the same time. This is the same mechanic as seen in normal mode, but there are now two of them charging at the same time. However, your goal is to not dodge both of them, because you were greeted with a new debuff when the boss casted ",(0,r.yg)("strong",null,"Chain Deathmatch"),"."),(0,r.yg)("table",{width:"70%"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"Debuff"),(0,r.yg)("th",null,"Description"),(0,r.yg)("th",null,"Additional Notes")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("img",{src:i})),(0,r.yg)("td",null,(0,r.yg)("center",null,(0,r.yg)("strong",null,"Chain Deathmatch")),(0,r.yg)("br",null),"The chain will tether you to one of the clones and the rule is simple: You must intentionally take an attack from the clone that you are tethered to in order to cleanse this debuff. Failure to do so will result in immediate death once the timer hits 0.",(0,r.yg)("br",null),(0,r.yg)("br",null),"All players are chained to a random clone, but you can only see your own chain."),(0,r.yg)("td",null,(0,r.yg)("img",{src:"https://ffxivkittenassets.z7.web.core.windows.net/m3s/chain_deathmatch_tethering.png"})))),(0,r.yg)("p",null,"Identify immediately how the clones you are tethered plans to cleave the arena. You can only take one hit from the intended clone, so avoid the other clone while positioning yourself to be hit by the chained clone. Once hit, move out to a safe spot in order to avoid being hit a 2nd time from the returning dash from the clones. One easy way to find the safe spot after being hit is that the clones will always mirror their cleaves."),(0,r.yg)("table",{width:"70%"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"The clones proceeds with their first dash. Notice how waymark 3 gets double cleaved? This will be the safe spot on the returning dash!"),(0,r.yg)("th",null,"Once hit, immediately move to the safe spot and avoid getting hit a second time.")),(0,r.yg)("tr",null,(0,r.yg)("td",{width:"33%"},(0,r.yg)("img",{src:"https://ffxivkittenassets.z7.web.core.windows.net/m3s/tag_team_1_part1.png"})),(0,r.yg)("td",{width:"33%"},(0,r.yg)("img",{src:"https://ffxivkittenassets.z7.web.core.windows.net/m3s/tag_team_1_part2.png"})))),(0,r.yg)("p",null,"Below are some examples of how this mechanic is resolved:"),(0,r.yg)("table",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("img",{src:"https://ffxivkittenassets.z7.web.core.windows.net/m3s/tag_team_1_example1.gif"})),(0,r.yg)("td",null,(0,r.yg)("img",{src:"https://ffxivkittenassets.z7.web.core.windows.net/m3s/tag_team_1_example2.gif"})),(0,r.yg)("td",null,(0,r.yg)("img",{src:"https://ffxivkittenassets.z7.web.core.windows.net/m3s/tag_team_1_example3.gif"})))),(0,r.yg)("p",null,"Once you've resolved the Chain Deathmatch, the boss will teleport to the middle and use ",(0,r.yg)("strong",null,"Octuple Lariat")," or ",(0,r.yg)("strong",null,"Quadruple Lariat"),". Identify whether his arms are on fire or not, and resolve the spread/two-man stack as necessary. This is immediately followed up by ",(0,r.yg)(d,{mdxType:"Raidwide"},"Brutal Impact"),", so mitigate and heal up as necessary."))}g.isMDXComponent=!0}}]);