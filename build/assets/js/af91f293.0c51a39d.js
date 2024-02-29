"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[2708],{3229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var r=n(4848),i=n(8453);const o={title:"Verify Your Smart Contracts",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimstic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimstic zk-rollup solution. Try it now!"},s=void 0,d={id:"build-on-morph/build-on-morph/verify-your-smart-contracts",title:"Verify Your Smart Contracts",description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimstic zk-rollup solution. Try it now!",source:"@site/docs/build-on-morph/build-on-morph/5-verify-your-smart-contracts.md",sourceDirName:"build-on-morph/build-on-morph",slug:"/build-on-morph/build-on-morph/verify-your-smart-contracts",permalink:"/docs/build-on-morph/build-on-morph/verify-your-smart-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/build-on-morph/build-on-morph/5-verify-your-smart-contracts.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Verify Your Smart Contracts",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimstic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimstic zk-rollup solution. Try it now!"},sidebar:"DevSidebar",previous:{title:"Understand Transaction Cost on Morph",permalink:"/docs/build-on-morph/build-on-morph/understand-transaction-cost-on-morph"},next:{title:"Contract Address",permalink:"/docs/build-on-morph/developer-resources/contracts"}},l={},a=[{value:"Verify with develop framework",id:"verify-with-develop-framework",level:2},{value:"Hardhat",id:"hardhat",level:3},{value:"Vefiry with Morph explorer",id:"vefiry-with-morph-explorer",level:2},{value:"Method: Solidity (Flattened Sources Code)",id:"method-solidity-flattened-sources-code",level:3},{value:"Frontend:",id:"frontend",level:4},{value:"Flatten",id:"flatten",level:4},{value:"Method: Solidity (Standard JSON Input)",id:"method-solidity-standard-json-input",level:3},{value:"Obtain JSON File",id:"obtain-json-file",level:4},{value:"Method: Solidity (Multi-part files)",id:"method-solidity-multi-part-files",level:3},{value:"Frontend:",id:"frontend-1",level:4},{value:"SOL File Process",id:"sol-file-process",level:4},{value:"Method: Vyper (Contracts)",id:"method-vyper-contracts",level:3},{value:"Frontend:",id:"frontend-2",level:4},{value:"Method: Vyper (Standard Json Input)",id:"method-vyper-standard-json-input",level:3},{value:"Frontend:",id:"frontend-3",level:4},{value:"Method: Vyper (Multi-part files)",id:"method-vyper-multi-part-files",level:3},{value:"Frontend:",id:"frontend-4",level:4},{value:"After Verification",id:"after-verification",level:3}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["After deploying your smart contracts, it's important to verify your code on our ",(0,r.jsx)(t.a,{href:"https://explorer-testnet.morphl2.io",children:"block explorer"}),". This can be done in an automated way using your develop framework such as hardhat."]}),"\n",(0,r.jsx)(t.h2,{id:"verify-with-develop-framework",children:"Verify with develop framework"}),"\n",(0,r.jsx)(t.p,{children:"Most smart contract tooling has plugins for verifying your contracts easily on Etherscan. Blockscout supports Etherscan's contract verification APIs, and it's straight forward to use these tools with the Morph Testnet."}),"\n",(0,r.jsx)(t.h3,{id:"hardhat",children:"Hardhat"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.a,{href:"https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify",children:"harthat-verify plugin"})]})}),"\n",(0,r.jsx)(t.p,{children:"First run this under hardhat contract project directory:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"yarn add --dev @nomiclabs/hardhat-etherscan\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then edit your 'hardhat.config.js' file to point to the Morph testnet RPC & explorer"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"hardhat.config.js"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'\nrequire("@nomiclabs/hardhat-waffle");\nrequire("@nomiclabs/hardhat-etherscan");\nrequire(\'hardhat-deploy\');\n\nmodule.exports = {\n    ...\n    networks: {\n    tMorph: {\n      url: \'https://rpc-testnet.morphl2.io \' || \'\',\n      accounts:\n        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],\n     },\n    },\n    ...\n    etherscan: {\n        apiKey: {\n          tMorph: "abc",\n        },\n        customChains: [\n          {\n            network: "tMorph",\n            chainId: 2710,\n            urls: {\n              apiURL: "https://explorer-api-testnet.morphl2.io/api",\n              browserURL: "https://explorer-testnet.morphl2.io",\n            },\n          },\n        ],\n      }\n}\n\n'})}),"\n",(0,r.jsx)(t.p,{children:"When contract is deployed, adding a script:"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"scripts/lock.js"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'await hre.run("verify:verify", {\n    address: contract.address, \n    constructorArguments: [xxx], \n});\n'})}),"\n",(0,r.jsx)(t.p,{children:"Final step, execute"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"NODE_ENV=devnet npx hardhat run scripts/lock.js --network devnet"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"To verify the contract code"}),"\n",(0,r.jsx)(t.h2,{id:"vefiry-with-morph-explorer",children:"Vefiry with Morph explorer"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Visit\uff1a",(0,r.jsx)(t.a,{href:"https://explorer-testnet.morphl2.io",children:"Morph block explorer"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"We currently support 6 different ways to verify your contracts on our block explorer"}),"\n",(0,r.jsx)(t.p,{children:"There are 2 general parameters:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Compiler: Has to be consistent with what you select when deployment"}),"\n",(0,r.jsx)(t.li,{children:"Optimization: Can be ignored if no contract optimizatin, if has, has to be consistent with deployment"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"method-solidity-flattened-sources-code",children:"Method: Solidity (Flattened Sources Code)"}),"\n",(0,r.jsx)(t.h4,{id:"frontend",children:"Frontend:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"fscs",src:n(1404).A+"",width:"1280",height:"1017"})}),"\n",(0,r.jsx)(t.h4,{id:"flatten",children:"Flatten"}),"\n",(0,r.jsxs)(t.p,{children:["Flatten through ",(0,r.jsx)(t.a,{href:"https://book.getfoundry.sh/reference/forge/forge-flatten?highlight=flatten#forge-flatten",children:"forge command"}),", for example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"forge flatten --output FlattenedL2StandardBridge.sol ./contracts/L2/L2StandardBridge.sol\n"})}),"\n",(0,r.jsx)(t.h3,{id:"method-solidity-standard-json-input",children:"Method: Solidity (Standard JSON Input)"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"sjis1",src:n(4987).A+"",width:"1280",height:"881"})}),"\n",(0,r.jsx)(t.h4,{id:"obtain-json-file",children:"Obtain JSON File"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Can be obtained through solc"}),"\n",(0,r.jsx)(t.li,{children:"Can be obatined through remix compiler"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"sjis2",src:n(7977).A+"",width:"934",height:"542"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"sjis3",src:n(7977).A+"",width:"934",height:"542"})}),"\n",(0,r.jsx)(t.h3,{id:"method-solidity-multi-part-files",children:"Method: Solidity (Multi-part files)"}),"\n",(0,r.jsx)(t.h4,{id:"frontend-1",children:"Frontend:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["You can submit multiple contract file by your own needs\n",(0,r.jsx)(t.img,{alt:"mpfs1",src:n(9085).A+"",width:"1280",height:"779"})]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"sol-file-process",children:"SOL File Process"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If there is any imported file, it needs to be modified to be referenced by the same level path, and these files must be submitted together.\n",(0,r.jsx)(t.img,{alt:"mpfs2",src:n(6203).A+"",width:"1280",height:"594"})]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"method-vyper-contracts",children:"Method: Vyper (Contracts)"}),"\n",(0,r.jsx)(t.h4,{id:"frontend-2",children:"Frontend:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"cv",src:n(4389).A+"",width:"1280",height:"848"})}),"\n",(0,r.jsx)(t.h3,{id:"method-vyper-standard-json-input",children:"Method: Vyper (Standard Json Input)"}),"\n",(0,r.jsx)(t.h4,{id:"frontend-3",children:"Frontend:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"sjiv",src:n(9824).A+"",width:"1280",height:"552"})}),"\n",(0,r.jsx)(t.h3,{id:"method-vyper-multi-part-files",children:"Method: Vyper (Multi-part files)"}),"\n",(0,r.jsx)(t.h4,{id:"frontend-4",children:"Frontend:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"mpfv",src:n(4317).A+"",width:"1280",height:"822"})}),"\n",(0,r.jsx)(t.h3,{id:"after-verification",children:"After Verification"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"avp",src:n(9811).A+"",width:"1280",height:"503"})})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9811:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/avp-fa162f2180b681e8807908f00d195c43.png"},4389:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/cv-4d3a7c9df0e287432f8b25c935cd1ea3.png"},1404:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/flatsourcesol-41a879112babbd6397b588b2b4e69daa.png"},9085:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/mpfsol-3a7d7ba4b61955208a7221a347c914c3.png"},6203:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/mpfsol2-53fcc6c9ea28eb6114b242e08ba8bb1a.png"},4317:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/mpfv-43dad07bd7fd43eb3721dc7611560ac4.png"},4987:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/sjisol1-d065f42e5cb024651428c3f700fc3662.png"},7977:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/sjisol3-71ed80d677f12848aba5fa829f7b6fb2.png"},9824:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/sjiv-2d889a272a34ef1415529bced91d39c2.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var r=n(6540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);