"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[686],{50686:function(e,n,a){a.r(n),a.d(n,{BurnRef:function(){return h}});var t=a(85893),o=a(67294),r=a(37918),s=a.n(r);a(8882),a(19755);var l=a(6103),i=a(93451),c=a(71439),d=a(24021),u=a(30),m=a(97416),k=a(55678),p=a(72213);k.Am.configure();let b=l.Z.toasterOption;new new(s())(window.ethereum).eth.Contract(u,l.Z.esctokenAddr);let h=(0,o.forwardRef)((e,n)=>{let[r,u]=o.useState(""),[h,g]=o.useState({}),[w,y]=o.useState("empty"),[f,v]=o.useState(1),[_,x]=o.useState(!1),[C,T]=o.useState({}),[A,B]=o.useState({}),[j,N]=o.useState({}),[R,S]=o.useState({}),[D,H]=o.useState(0),[F,I]=o.useState(0);var[O,M]=o.useState({});let[E,P]=o.useState(0);var{item:Z,UserAccountAddr:q,GetUserBal:L,Set_item:$}=e;async function V(n,a){console.log(a,"BurinTokennnnnn",n,"Burntoken=--");var t=await (0,p.I)();let o=new(s())(t&&t.provider&&null!=t.provider&&void 0!=t.provider&&""!=t.provider?t.provider:window.ethereum);if(await o.eth.getAccounts(),o&&o.eth){if(!localStorage.getItem("nilwireMetamask"))return k.Am.error("Please connect to a Metamask wallet",b),!1;if(""==f)return k.Am.error("Burn token is not allow to empty",b),!1;if(0==f)return k.Am.error("Burn token must be greater than zero",b),!1;if(console.log(a,"BurntokenBurntokenBurntokenBurntokenBeCo--"),721==a.type){console.log(a,"BurntokenBurntokenBurntokenBurntoken");var r=new o.eth.Contract(d,n.contractAddress);a.type,l.Z.singleType,n.contractAddress,y("processing"),r.methods.burn(a.tokenCounts).send({from:q}).then(async e=>{y("done");var n={tokenOwner:q,tokenCounts:a.tokenCounts,blockHash:e.blockHash,transactionHash:e.transactionHash,contractAddress:a.contractAddress,type:a.type,balance:f,currAddr:q,quant:a.balance,ipfsimage:a.ipfsimage,name:a.name,price:a.price};console.log(n,"postDatattt");var t=await (0,i.py)(n);console.log(t,"updateBurnFieldupdateBurnField"),t&&(k.Am.success("NFT burned succesfully",b),window.$("#burn_token_modal").modal("hide"),window.location.reload())}).catch(e=>{console.log(e,"ERRRRRRRRRRRRRRR"),y("try"),k.Am.error("Transaction rejected by user",b),setTimeout(()=>window.location.reload(!1),900)})}else{var r=new o.eth.Contract(c,n.contractAddress);if(console.log(r,"CoursetroContract"),a.type,l.Z.singleType,n.contractAddress,f>F.balance)return k.Am.error("Available Tokens "+F.balance,b),!1;y("processing"),console.log(q,a.tokenCounts,f,"noofitemsnoofitems"),r.methods.burn(q,a.tokenCounts,f).send({from:e.Accounts}).then(async e=>{console.log(e,"-------resukt-------"),y("done");var n={tokenOwner:q,tokenCounts:a.tokenCounts,blockHash:e.blockHash,transactionHash:e.transactionHash,contractAddress:a.contractAddress,type:a.type,balance:f,currAddr:q,quant:a.balance,ipfsimage:a.ipfsimage,name:a.name,price:a.price};console.log(n,"POstData1155Burn Token");var t=await (0,i.py)(n);console.log(t,"updateBurnFieldupdateBurnField22"),t&&(k.Am.success("Burned successfully",b),window.$("#burn_token_modal").modal("hide"),window.location.reload())}).catch(e=>{y("try"),k.Am.error("Transaction rejected by user",b),setTimeout(()=>window.location.reload(!1),900)})}}}let z=async e=>{var n=await (0,m.my)();x(!0);var a=await (0,i.u7)(e);if(console.log(a,"Resp-Resp"),setTimeout(()=>{x(!1)},2e3),a&&a&&a.data&&a.data.Detail&&a.data.Detail.Resp){var t=a.data.Detail.Resp;if(t&&t.Token&&t.Token[0]&&t.Token[0].tokenowners_current)for(let e=0;e<t.Token[0].tokenowners_current.length;e++){let a=t.Token[0].tokenowners_current[e];if(g(a),console.log(a,"=====element"),a.tokenPrice>0&&a.tokenOwner!=n){T(a);break}if(a.tokenPrice>0&&a.tokenOwner==n){B(a);break}}N(t),t.Bids&&S(t.Bids);var o=-1;if(t.Token[0].tokenowners_all&&n){var r=t.Token[0].tokenowners_all;o=r.findIndex(e=>e.tokenOwner.toString()==n.toString()&&e.balance>0)}o>-1?(H(r[o].balance),console.log(r[o],"tokenowners_all[IndexVal]tokenowners_all[IndexVal]"),I(r[o])):(I({}),H(0)),t.Token&&t.Token[0]&&M(t.Token[0])}},G=e=>{e.preventDefault(),v(1)},K=e=>{v(e.target.value)};return(0,o.useImperativeHandle)(n,()=>({async Burn_Click(e,n){if(console.log(n,e,"burndataburndatasaran"),!localStorage.getItem("nilwireMetamask"))return k.Am.error("Please connect to a Metamask wallet",b),!1;P(n),$(e);var a={curAddr:await (0,m.my)(),tokenCounts:e.tokenCounts};console.log(a,"paaaaaaaayaaaya"),z(a),window.$("#burn_token_modal").modal("show")}})),(0,t.jsxs)("div",{children:["processing"==w&&(0,t.jsx)("div",{className:"transLoading",children:(0,t.jsx)("img",{src:a(6514),className:"img-fluid",alt:""})}),(0,t.jsx)("div",{className:"modal fade primary_modal",id:"burn_token_modal",tabindex:"-1",role:"dialog","data-backdrop":"static","aria-labelledby":"accept_modalCenteredLabel","aria-hidden":"true",children:(0,t.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:(0,t.jsxs)("div",{className:"modal-content form-border",children:[(0,t.jsxs)("div",{className:"modal-header text-center",children:[(0,t.jsx)("h5",{className:"modal-title",id:"burn_token_modalLabel",children:"Burn NFT"}),(0,t.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:G,children:(0,t.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,t.jsxs)("div",{className:"modal-body",children:[(0,t.jsx)("div",{className:"img_accept text-center"}),(0,t.jsx)("p",{className:"text-center accept_desc mb-0 mar-top-10",children:(0,t.jsx)("span",{className:"buy_desc_sm",children:"Are you sure you want to burn this NFT? This action is irreversible. The NFT will be sent to Zero address on blockchain."})}),(0,t.jsxs)("div",{class:"input-group mb-3 input_grp_style_1",children:[console.log(E,"burndataburndatasaran1"),721!=E.type&&(0,t.jsx)("input",{type:"number",onKeyDown:e=>["e","E","+","-",",","."].includes(e.key)&&e.preventDefault(),min:"0",name:"burn",id:"burn",placeholder:"Enter no of quantity",class:"form-control mb-0","aria-label":"bid","aria-describedby":"basic-addon2",onChange:K,value:f,autoComplete:"off"})]}),(0,t.jsxs)("form",{className:"px-4",children:[console.log(F,"MyTokenDetailMyTokenDetail"),(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsxs)("button",{className:"btn-main lead mar-top-10 mar-right-15",type:"button",onClick:()=>V(Z,F),disabled:"done"==w||"processing"==w||"errors"==w,children:["processing"==w&&(0,t.jsx)("i",{class:"fa fa-spinner mr-3 spinner_icon","aria-hidden":"true",id:"circle1"}),"init"==w&&"Continue","processing"==w&&"In-progress...","done"==w&&"Done","try"==w&&"Try Again","errors"==w&&"Check Balance","empty"==w&&"Continue"]}),(0,t.jsx)("button",{className:"btn-main btnGrey lead mar-top-10","data-dismiss":"modal","aria-label":"Close",type:"button",onClick:G,children:"Cancel"})]})]})]})]})})})]})})}}]);