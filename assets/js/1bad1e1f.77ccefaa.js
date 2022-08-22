"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[506],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(t),h=r,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return t?o.createElement(f,i(i({ref:n},s),{},{components:t})):o.createElement(f,i({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3956:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=t(7462),r=(t(7294),t(3905));const a={},i="Update On-chain Node Discovery",c={unversionedId:"node-ops/validator/changing_onchain_ip_address",id:"node-ops/validator/changing_onchain_ip_address",title:"Update On-chain Node Discovery",description:"Changing the IP address of your node so that validators and fullnodes can discover your node.",source:"@site/docs/node-ops/validator/changing_onchain_ip_address.md",sourceDirName:"node-ops/validator",slug:"/node-ops/validator/changing_onchain_ip_address",permalink:"/0l-documentation/docs/node-ops/validator/changing_onchain_ip_address",draft:!1,editUrl:"https://github.com/nControl88/0l-documentation/tree/main/docs/node-ops/validator/changing_onchain_ip_address.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Validator",permalink:"/0l-documentation/docs/node-ops/validator/"},next:{title:"Cronjob setup for validator node status",permalink:"/0l-documentation/docs/node-ops/validator/cron_job_setup_for_validator_node_status"}},l={},d=[{value:"Check your current on-chain configs",id:"check-your-current-on-chain-configs",level:2},{value:"Check what your curreny ID is",id:"check-what-your-curreny-id-is",level:2},{value:"Check what your node.yaml file uses as ID",id:"check-what-your-nodeyaml-file-uses-as-id",level:2},{value:"Update the on-chain configs",id:"update-the-on-chain-configs",level:2}],s={toc:d};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"update-on-chain-node-discovery"},"Update On-chain Node Discovery"),(0,r.kt)("p",null,"Changing the IP address of your node so that validators and fullnodes can discover your node."),(0,r.kt)("p",null,"YOUR NODE WILL NOT BE REACHABLE FOR CONSENSUS IF:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The IDs in your yaml file diverge from what your mnemonic produces."),(0,r.kt)("li",{parentName:"ul"},"The IDs in your yaml file diverge from the on-chain configs.")),(0,r.kt)("h2",{id:"check-your-current-on-chain-configs"},"Check your current on-chain configs"),(0,r.kt)("p",null,"Use the query cli to print out your current on-chain configs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ol query --val-config\n\n")),(0,r.kt)("h2",{id:"check-what-your-curreny-id-is"},"Check what your curreny ID is"),(0,r.kt)("p",null,"This tool uses your mnemonic to see what are the EXPECTED identities and public keys for this account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ol whoami\n\n")),(0,r.kt)("h2",{id:"check-what-your-nodeyaml-file-uses-as-id"},"Check what your node.yaml file uses as ID"),(0,r.kt)("p",null,"Your node.yaml could be malformed. You'll want to check that the IDs used in the file correspond to what your mnemonic produces (with ",(0,r.kt)("inlineCode",{parentName:"p"},"ol whoami"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ol whoami --check-yaml <path/to/node.yaml>\n")),(0,r.kt)("p",null,"If YOUR node.yaml file does not match what your ",(0,r.kt)("inlineCode",{parentName:"p"},"ol whoami")," shows you may need to redo the node configs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ol init --val\nol inti --vfn\n")),(0,r.kt)("h2",{id:"update-the-on-chain-configs"},"Update the on-chain configs"),(0,r.kt)("p",null,"You will need to have two IP addresses 1) The validator IP, and 2) the VFN validator fullnode.\nAfter displaying the new configs, you will be asked to confirm the changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# send tx. Note the `-o` which means you are sending this from the "operator" account.\ntxs -o val-config --val_ip <IP> --vfn-ip <OTHER/IP>\n\n# check if those changes persisted and if they are able to be read.\nol query --val-config\n')))}u.isMDXComponent=!0}}]);