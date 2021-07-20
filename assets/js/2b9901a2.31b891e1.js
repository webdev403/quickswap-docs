(self.webpackChunkquickswap=self.webpackChunkquickswap||[]).push([[8223],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?o.createElement(g,i(i({ref:t},p),{},{components:r})):o.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},295:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),i={id:"04-glossary",title:"Glossary",tags:"goveranance, documentation"},s={unversionedId:"concepts/governance/04-glossary",id:"version-V2/concepts/governance/04-glossary",isDocsHomePage:!1,title:"Glossary",description:"- UNI: An ERC-20 token that designates the weight of a user&#39;s voting rights. The more UNI a user has in their wallet, the more weight their delegation or vote on a proposal holds.",source:"@site/versioned_docs/version-V2/concepts/11-governance/04-glossary.md",sourceDirName:"concepts/11-governance",slug:"/concepts/governance/04-glossary",permalink:"/concepts/governance/04-glossary",editUrl:"https://github.com/QuickSwap/quickswap-docs/tree/main/versioned_docs/version-V2/concepts/11-governance/04-glossary.md",version:"V2",sidebarPosition:4,frontMatter:{id:"04-glossary",title:"Glossary",tags:"goveranance, documentation"},sidebar:"defaultSidebar",previous:{title:"Beginners Guide to Voting",permalink:"/concepts/governance/03-guide-to-voting"},next:{title:"Adversarial Circumstances",permalink:"/concepts/governance/05-adversarial-circumstances"}},c=[],l={toc:c};function p(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"UNI:")," An ERC-20 token that designates the weight of a user","'","s voting rights. The more UNI a user has in their wallet, the more weight their delegation or vote on a proposal holds.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Delegation:")," UNI holders cannot vote or create proposals until they delegate their voting rights to an address. Delegation can be given to one address at a time, including the holder","'","s own address. Note that delegation does not lock tokens; it simply adds votes to the chosen delegation address.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Proposal:")," A proposal is executable code that modifies the governance contract or treasury and how they work. In order to create a proposal, a user must have at least 1% (10M UNI) of all UNI delegated to their address. Proposals are stored in the ",'"',"proposals",'"'," mapping of the Governor smart contract. All proposals are subject to a 7-day voting period. If the proposer does not maintain their vote weight balance throughout the voting period, the proposal may be canceled by anyone.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Quorum:")," In order for a vote to pass, it must achieve quorum of 4% of all UNI (40M) voting in the affirmative. The purpose of the quorum is to ensure that the only measures that pass have adequate voter participation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Voting:")," Users can vote for or against single proposals once they have voting rights delegated to their address. Votes can be cast while a proposal is in the ",'"',"Active",'"'," state. Votes can be submitted immediately using ",'"',"castVote",'"'," or submitted later with ",'"',"castVoteBySig",'"'," (For more info on castVoteBySig and offline signatures, see EIP-712). If the majority of votes (and a 4% quorum of UNI) vote for a proposal, the proposal may be queued in the Timelock.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Voting Period:")," Once a proposal has been put forward, Uniswap community members will have a seven day period (the Voting Period) to cast their votes.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Timelock:")," All governance and other administrative actions are required to sit in the Timelock for a minimum of 2 days, after which they can be implemented."))))}p.isMDXComponent=!0}}]);