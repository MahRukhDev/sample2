(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2492],{16175:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/separate/TransferRef",function(){return a(83406)}])},6514:function(e,t,a){"use strict";a.r(t),t.default={src:"/_next/static/media/logo.d158bc19.png",height:200,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAArUlEQVR42l3OvQqDMBQF4DxNKfT9t8bYCHZzENSKicXBOhTpotIk6ulVtIMfZMm5f2xz9oXwy7K0T3qBlGL5+4dpmrY4KIqiXYs8zxMg8zwbaw2GYcA4jsY5h3sY3pjW+gvSNA2iKEIcx8jzHNM0oaoqy5Qq1oJHluFV1+Cco+s6LOget6zgNB593xvq2kMDIqUMGDmlSfLGAU38UHZhmxPnV09rZbRSVggh9/AHiF2/AN+KpdMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},72213:function(e,t,a){"use strict";a.d(t,{I:function(){return i}});var n=a(37918),s=a.n(n);a(8882),a(55678);var o=a(6103),r=a(74845);async function i(){if(localStorage.getItem("walltype")&&null!=localStorage.getItem("walltype")&&void 0!=localStorage.getItem("walltype")&&""!=localStorage.getItem("walltype")&&"trust"==localStorage.getItem("walltype")&&localStorage.getItem("nilwireMetamask")&&null!=localStorage.getItem("nilwireMetamask")&&void 0!=localStorage.getItem("nilwireMetamask")&&""!=localStorage.getItem("nilwireMetamask")){var e=new r.Z({rpc:{[o.Z.livechainid]:o.Z.liverpcUrls},chainId:o.Z.livechainid});e.on("connect",()=>{}),await e.enable();let n=new(s())(e);var t=await n.eth.net.getId(),a=await n.eth.getAccounts();if(o.Z.livechainid==t)return localStorage.setItem("walltype","trust"),localStorage.setItem("nilddsbashyujsd","yes"),localStorage.setItem("nilwireMetamask",a[0].toLowerCase()),localStorage.setItem("nilwireMetamaskAddr",a[0].toLowerCase()),a[0].toLowerCase(),{address:a[0].toLowerCase(),provider:e};await e.disconnect()}else if(localStorage.getItem("nilwireMetamask")&&null!=localStorage.getItem("nilwireMetamask")&&void 0!=localStorage.getItem("nilwireMetamask")&&""!=localStorage.getItem("nilwireMetamask")&&window.ethereum){var n=new(s())(window.ethereum);try{void 0!==n&&await window.ethereum.enable().then(async function(){let e=new(s())(window.web3.currentProvider);if(!0===window.web3.currentProvider.isMetaMask&&window.web3&&window.web3.eth&&window.web3.eth.defaultAccount&&window.web3.currentProvider.networkVersion==o.Z.networkVersion)return{address:(await e.eth.getAccounts())[0].toLowerCase()}})}catch(e){}}}},83406:function(e,t,a){"use strict";a.r(t),a.d(t,{TransferRef:function(){return f}});var n=a(85893),s=a(67294);a(19755);var o=a(37918),r=a.n(o);a(8882);var i=a(6103),l=a(24021),u=a(71439);a(30);var d=a(72213),p=a(93451),c=a(97416),y=a(55678);y.Am.configure();let m=i.Z.toasterOption,f=(0,s.forwardRef)((e,t)=>{let[o,i]=s.useState(e.item),[f,w]=(0,s.useState)(0),[b,v]=(0,s.useState)(0),[g,_]=(0,s.useState)(0),[h,k]=(0,s.useState)(""),[x,M]=(0,s.useState)({}),[A,N]=(0,s.useState)(),I=e=>{if(e&&e.target&&void 0!==e.target.value&&e.target.name){var t=e.target.value;switch(e.target.name){case"NoOfToken":w(t);break;case"toaddress":v(t)}}},T=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var t,a={},n=0;o&&o.tokenowners_current&&o.tokenowners_current.balance&&(n=o.tokenowners_current.balance);var s=void 0!==e.quantity?e.quantity:f;if(console.log(typeof s,"quantityquantity"),""==s?a.NoOfToken='"Quantity" is not allowed to be empty':0>=parseFloat(s)?a.NoOfToken='"Quantity" must be greater than 0':!0==isNaN(s)&&(a.NoOfToken='"Quantity" must be a number'),s>n&&(a.NoOfToken='"Quantity" must be below on '+n),t=parseFloat(s),/^-?[0-9]+$/.test(t)||(a.NoOfToken='"Quantity" must be a Integer'),""==b)a.toaddress='"To Addresss" is not allowed to be empty';else{var i=await (0,d.I)();let e=new(r())(i&&i.provider&&null!=i.provider&&void 0!=i.provider&&""!=i.provider?i.provider:window.ethereum);!1==e.utils.isAddress(b)&&(a.toaddress='"Please enter valid address')}return M(a),a};async function S(){if(0!=Object.keys(await T()).length)return y.Am.error("Please fill all the required fields",m),!1;k("processing");var e=await (0,d.I)();let t=new(r())(e&&e.provider&&null!=e.provider&&void 0!=e.provider&&""!=e.provider?e.provider:window.ethereum);var a=await t.eth.getAccounts();if(a[0].toLowerCase()!=b.toLowerCase()){if(721==o.type){let e=new t.eth.Contract(l,o.contractAddress);e.methods.safeTransferFrom(o.tokenowners_current.tokenOwner,b,o.tokenCounts).send({from:a[0].toLowerCase()}).then(async e=>{k("done");var t={tokenOwner:o.tokenowners_current.tokenOwner,UserAccountAddr:b.toLowerCase(),tokenCounts:o.tokenCounts,tokenType:o.type,NoOfToken:721==o.type?1:f,transactionHash:e.transactionHash,PurchaseCurrency:A,transfer:!0};console.log(t,"POstDatatatat");var a=await (0,p.Xr)(t);a.data&&a.data.toast&&"success"==a.data.toast.type&&(y.Am.success("NFT transferred succesfully",m),window.$(".transfer_sale_modal").modal("hide"),setTimeout(()=>{window.location.reload(!1)},2e3))}).catch(e=>{k("error"),y.Am.error("Transaction rejected by user",m)})}else{let e=new t.eth.Contract(u,o.contractAddress);e.methods.safeTransferFrom(o.tokenowners_current.tokenOwner,b,o.tokenCounts,f,"0x").send({from:a[0].toLowerCase()}).then(async e=>{k("done");var t=await (0,p.Xr)({tokenOwner:o.tokenowners_current.tokenOwner,UserAccountAddr:b.toLowerCase(),tokenCounts:o.tokenCounts,tokenType:o.type,NoOfToken:721==o.type?1:f,transactionHash:e.transactionHash,PurchaseCurrency:A,transfer:!0});t.data&&t.data.toast&&"success"==t.data.toast.type&&(y.Am.success("Successfully transfered",m),window.$(".transfer_sale_modal").modal("hide"),setTimeout(()=>{window.location.reload(!1)},2e3))}).catch(e=>{k("error"),y.Am.error("Transaction rejected by user",m)})}}else k("error"),y.Am.error("Owner Address and Entered Address are same, Please Check ",m)}(0,s.useImperativeHandle)(t,()=>({async Transfer_Click(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(await (0,c.my)(),!localStorage.getItem("nilwireMetamask"))return y.Am.error("Please connect to a Metamask wallet",m),!1;w(1),i(e),N(t.currency),_(t),window.$("#transfer_sale_modal").modal("show")}}));let O=()=>{w(""),v("")};return(0,n.jsxs)("div",{children:["processing"==h&&(0,n.jsx)("div",{className:"transLoading",children:(0,n.jsx)("img",{src:a(6514),className:"img-fluid",alt:""})}),(0,n.jsx)("div",{class:"modal fade primary_modal",id:"transfer_sale_modal",tabindex:"-1",role:"dialog","data-backdrop":"static","aria-labelledby":"transfer_sale_modalCenteredLabel","aria-hidden":"true",children:(0,n.jsx)("div",{class:"modal-dialog modal-dialog-centered",role:"document",children:(0,n.jsxs)("div",{class:"modal-content",id:"hide",children:[(0,n.jsxs)("div",{class:"modal-header text-center",children:[(0,n.jsx)("h5",{class:"modal-title",id:"transfer_sale_modalLabel_1",children:"Transfer NFT"}),(0,n.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:(0,n.jsx)("span",{"aria-hidden":"true",onClick:O,children:"\xd7"})})]}),(0,n.jsxs)("div",{class:"modal-body",children:[(0,n.jsx)("p",{className:"text-center place_bit_desc text-light mb-0",children:"You are about to Transfer Nft"}),(0,n.jsxs)("p",{className:"place_bit_desc_2 text-center",children:[(0,n.jsx)("span",{className:"text-muted",children:"from"})," ",(0,n.jsx)("span",{className:"text-light ml-2",children:(0,c.UD)(localStorage.getItem("nilwireMetamask"))})]}),(0,n.jsx)("p",{className:"place_bit_desc_2 text-center",children:o&&o.tokenowners_current&&o.tokenowners_current.balance?"Available : "+o.tokenowners_current.balance:"Available : 0"}),(0,n.jsx)("div",{className:"update_cover_div_2",id:"update_cover_div_2",children:(0,n.jsxs)("form",{className:"form-border",children:[(0,n.jsxs)("div",{className:"form-group formSkew",children:[(0,n.jsx)("div",{className:"input-group",children:(0,n.jsx)("input",{type:"text",name:"toaddress",id:"toaddress",onChange:I,placeholder:"To Addresss",className:"form-control"})}),x.toaddress&&(0,n.jsx)("span",{className:"text-danger",children:x.toaddress})]}),(0,n.jsxs)("div",{className:"form-group formSkew",children:[721!=g.type&&(0,n.jsx)("div",{className:"input-group",children:(0,n.jsx)("input",{type:"number",name:"NoOfToken",id:"NoOfToken",onKeyDown:e=>["e","E","+","-",",","."].includes(e.key)&&e.preventDefault(),onChange:I,placeholder:"Enter the item quantity",value:f,className:"form-control"})}),x.NoOfToken&&(0,n.jsx)("span",{className:"text-danger",children:x.NoOfToken})]}),(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsxs)("button",{className:"create_btn me-3",type:"button",onClick:()=>S(),disabled:"processing"==h,children:["processing"==h&&(0,n.jsx)("i",{class:"fa fa-spinner mr-3 spinner_icon","aria-hidden":"true",id:"circle1"}),"Transfer"]}),(0,n.jsx)("button",{className:"btn-main btnGrey lead","data-dismiss":"modal",type:"button",children:"Cancel"})]})]})})]})]})})})]})})},71439:function(e){"use strict";e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')},24021:function(e){"use strict";e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"_name","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"_approved","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"implementsERC721","outputs":[{"name":"_implementsERC721","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"_totalSupply","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"_tokenId","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenMetadata","outputs":[{"name":"_infoUrl","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"_balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_approvedAddress","type":"address"},{"name":"_metadata","type":"string"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"_symbol","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numTokensTotal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"getOwnerTokens","outputs":[{"name":"_tokenIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]')},30:function(e){"use strict";e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')}},function(e){e.O(0,[3592,8543,571,3104,4419,9774,2888,179],function(){return e(e.s=16175)}),_N_E=e.O()}]);