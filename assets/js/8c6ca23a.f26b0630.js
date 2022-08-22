"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[595],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(o),h=a,f=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return o?n.createElement(f,i(i({ref:t},p),{},{components:o})):n.createElement(f,i({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},3801:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=o(7462),a=(o(7294),o(3905));const r={},i="How to Recover a Validator If It Stops Mining and Falls Out of the Set",l={unversionedId:"node-ops/validator/node_falls_out_of_validator_set",id:"node-ops/validator/node_falls_out_of_validator_set",title:"How to Recover a Validator If It Stops Mining and Falls Out of the Set",description:"If a validator stops mining for some reason and does not mine at all during an epoch, then it will be jailed and removed from the validator set. This page contains instructions for how to get the node back into the validator set.",source:"@site/docs/node-ops/validator/node_falls_out_of_validator_set.md",sourceDirName:"node-ops/validator",slug:"/node-ops/validator/node_falls_out_of_validator_set",permalink:"/docs/node-ops/validator/node_falls_out_of_validator_set",draft:!1,editUrl:"https://github.com/nControl88/0l-documentation/tree/main/docs/node-ops/validator/node_falls_out_of_validator_set.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cronjob setup for validator node status",permalink:"/docs/node-ops/validator/cron_job_setup_for_validator_node_status"},next:{title:"Node Statistics",permalink:"/docs/node-ops/validator/node_statistics"}},s={},d=[],p={toc:d};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-recover-a-validator-if-it-stops-mining-and-falls-out-of-the-set"},"How to Recover a Validator If It Stops Mining and Falls Out of the Set"),(0,a.kt)("p",null,"If a validator stops mining for some reason and does not mine at all during an epoch, then it will be jailed and removed from the validator set. This page contains instructions for how to get the node back into the validator set."),(0,a.kt)("p",null,"There are two parts to getting a node back into the validator set. First you must start mining again for one epoch, second, you must run the node as a full node until it's back in the validator set to keep your DB caught-up with blockchain state. Finally you must restart the node as a validator once proofs have been mined for an epoch and it is un-jailed."),(0,a.kt)("h1",{id:"first-step----the-tower-app"},"First Step -- The tower app"),(0,a.kt)("p",null,"NOTE: you may wish to save a copy of 0L.toml at this point for later use."),(0,a.kt)("p",null,"While your node is recovering, the easiest thing to do is to set your tower app up to connect to a different validator. To do so, open ",(0,a.kt)("inlineCode",{parentName:"p"},"0L.toml"),' in the .0L folder and edit the "upstream_nodes" entry to include another validator, including the port number. For instance:'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'upstream_nodes = ["http://167.172.248.37:8080/"]')),(0,a.kt)("p",null,"Now restart the tower app with the --use-upstream-url flag, like this:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tower --use-upstream-url start")),(0,a.kt)("h1",{id:"second-step----the-node"},"Second Step -- The Node"),(0,a.kt)("p",null,"NOTE: you may wish to save a copy of diem-node.service at this point for later use."),(0,a.kt)("p",null,"OL does not support a node easily changing between being a validator and a full node. You must manually make some configuration changes and restart the node. To do this, create a config file for the full node from this template: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OLSF/epoch-archive/blob/main/fullnode_template.node.yaml"},"https://github.com/OLSF/epoch-archive/blob/main/fullnode_template.node.yaml")," ... and then modify the --config path in the ExecService to point to that file."),(0,a.kt)("p",null,"Finally, you can restart your node:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"make daemon")),(0,a.kt)("p",null,"You will know that your full node is syncing and catching up if you periodically see entries like this in the log file:"),(0,a.kt)("p",null,'"====================================== round is 219784"'),(0,a.kt)("p",null,"This command will tell you the sync state of a RUNNING local node: ",(0,a.kt)("inlineCode",{parentName:"p"},"db-backup one-shot query node-state")),(0,a.kt)("h1",{id:"restart-node-as-a-validator"},"Restart Node as a Validator"),(0,a.kt)("p",null,"Once an epoch has passed where your tower app has mined proofs, your node will be eligible to rejoin the validator set. To do this, stop the node:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"make stop")),(0,a.kt)("p",null,"... and then revert the diem-node.service file to its previous state (i.e. so that the config parameter points to node.yaml, which is the configuration for a validator). Then finally restart the node with ",(0,a.kt)("inlineCode",{parentName:"p"},"make daemon"),"."),(0,a.kt)("h1",{id:"restart-your-tower-app-to-connect-to-your-own-node"},"Restart Your Tower App to Connect to Your Own Node"),(0,a.kt)("p",null,"First, kill the tower app using ctrl-C in the tower screen. Then restart without the --backup-url flag:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tower -o start")),(0,a.kt)("p",null,"Your node should now be back in the validator set and creating delay towers correctly!"),(0,a.kt)("p",null,"This command that will tell you the sync state of a RUNNING local node: ",(0,a.kt)("inlineCode",{parentName:"p"},"db-backup one-shot query node-state")))}u.isMDXComponent=!0}}]);