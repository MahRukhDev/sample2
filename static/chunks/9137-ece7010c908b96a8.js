(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9137],{6514:function(e,a,t){"use strict";t.r(a),a.default={src:"/_next/static/media/logo.d158bc19.png",height:200,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAArUlEQVR42l3OvQqDMBQF4DxNKfT9t8bYCHZzENSKicXBOhTpotIk6ulVtIMfZMm5f2xz9oXwy7K0T3qBlGL5+4dpmrY4KIqiXYs8zxMg8zwbaw2GYcA4jsY5h3sY3pjW+gvSNA2iKEIcx8jzHNM0oaoqy5Qq1oJHluFV1+Cco+s6LOget6zgNB593xvq2kMDIqUMGDmlSfLGAU38UHZhmxPnV09rZbRSVggh9/AHiF2/AN+KpdMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},35498:function(e){e.exports=e=>null==e||"object"==typeof e&&0===Object.keys(e).length||"string"==typeof e&&0===e.trim().length},59137:function(e,a,t){"use strict";t.r(a),t.d(a,{PlaceAndAcceptBidRef:function(){return b}});var s=t(85893),n=t(67294),o=t(37918),i=t.n(o);t(8882),t(19755);var l=t(6103),r=t(24021),d=t(71439);t(30);var c=t(54164);t(35498);var m=t(97416),u=t(72213),p=t(93451),y=t(55678);y.Am.configure();let h=l.Z.toasterOption;l.Z.owntokenSymbol,l.Z.owntokenSymbol,l.Z.tokenSymbol,l.Z.tokenSymbol;let b=(0,n.forwardRef)((e,a)=>{let[o,b]=n.useState(!1),[v,w]=n.useState(!1),[x,f]=n.useState(!1),[_,k]=n.useState(""),[g,N]=n.useState("init"),[A,j]=n.useState(l.Z.tokenSymbol),[S,Z]=n.useState(0),[C,B]=n.useState(0),[F,O]=(0,n.useState)(0),[T,I]=n.useState(l.Z.fee/1e18),[M,L]=(0,n.useState)("ESC"),[D,U]=(0,n.useState)(""),[E,P]=(0,n.useState)(""),[R,Y]=(0,n.useState)(),[$,H]=(0,n.useState)(),[q,z]=(0,n.useState)(0);var{Set_WalletConnected:K,Set_UserAccountAddr:Q,Set_UserAccountBal:W,Set_AddressUserDetails:G,Set_Accounts:V,Set_MyItemAccountAddr:J,Set_tokenCounts:X,Set_item:ee,Set_tokenCounts_Detail:ea,Set_MyTokenBalance:et,Set_Bids:es,Set_AccepBidSelect:en,Set_tokenBidAmt:eo,Set_NoOfToken:ei,Set_ValidateError:el,Set_TokenBalance:er,Set_YouWillPay:ed,Set_YouWillPayFee:ec,Set_YouWillGet:em,Set_BidApply_ApproveCallStatus:eu,Set_BidApply_SignCallStatus:ep,setTotaluserbidAmt:ey,BidApply_ApproveCallStatus:eh,totaluserbidAmt:eb,WalletConnected:ev,UserAccountAddr:ew,UserAccountBal:ex,AddressUserDetails:ef,Accounts:e_,MyItemAccountAddr:ek,tokenCounts:eg,item:eN,tokenCounts_Detail:eA,MyTokenBalance:ej,Bids:eS,AccepBidSelect:eZ,tokenBidAmt:eC,NoOfToken:eB,ValidateError:eF,TokenBalance:eO,YouWillPay:eT,YouWillPayFee:eI,YouWillGet:eM,BidApply_ApproveCallStatus:eh,BidApply_SignCallStatus:eL,AllowedQuantity:eD,Set_Tabname:eU,Tabname:eE}=e;let eP=e=>{if(e&&e.target&&void 0!==e.target.value&&e.target.name){var a=e.target.value;switch(e.target.name){case"tokenBidAmt":Y(a),""!=a&&!1==isNaN(a)&&a>0?(console.log(a,"log"),eo(a),eY({tokenBidAmt:a,biddingtoken:A,typeofcollection:D}),eF.tokenBidAmt="",el(eF)):(eF.tokenBidAmt="Enter Valid price",el(eF),eo(a),eY({tokenBidAmt:a,biddingtoken:A,typeofcollection:D}));break;case"NoOfToken":H(a),ei(a),eY({NoOfToken:a,biddingtoken:A,typeofcollection:D})}}},eR=async()=>{H(""),Y("")};async function eY(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var a=void 0!==e.tokenBidAmt?e.tokenBidAmt:eC,t=void 0!==e.NoOfToken?e.NoOfToken:eB;if(""==a&&(a=0),""==t&&(t=0),!0!=isNaN(a)&&!0!=isNaN(t))try{var s=await (0,u.I)();let b=new(i())(s&&s.provider&&null!=s.provider&&void 0!=s.provider&&""!=s.provider?s.provider:window.ethereum);if(await b.eth.getAccounts()){if(721==e.typeofcollection){var n=a,o=new b.eth.Contract(r,eN.contractAddress),c=await o.methods.getServiceFee().call(),m=(n=parseFloat(n)*l.Z.decimalvalues)*c/1e20,p=n+m;f(p+100);var y=p/l.Z.decimalvalues,h=parseFloat(y).toFixed(l.Z.toFixed);ed(h)}else{var n=a,n=n*l.Z.decimalvalues,o=new b.eth.Contract(d,eN.contractAddress),c=await o.methods.getServiceFee().call(),m=(n=parseFloat(n)*t)*c/1e20,p=n+m;f(p+100);var y=p/l.Z.decimalvalues,h=parseFloat(y).toFixed(l.Z.toFixed);ed(h)}}}catch(e){}else ed(0)}let e$=e=>{if(e){var a={};return 721==eN.type||(""==eB?a.NoOfToken='"Quantity" is not allowed to be empty':!0==isNaN(eB)||""==eB||null==eB||void 0==eB?a.NoOfToken='"Quantity" must be a number':0==eB?a.NoOfToken='"Quantity" must be greater than 0':eB>eD?a.NoOfToken='"Quantity" must be less than or equal to '+eD:/^-?[0-9]+$/.test(eB)||(a.NoOfToken='"Quantity" must be a Integer')),""==eC?a.tokenBidAmt='"Bid amount" is not allowed to be empty':!0==isNaN(eC)?a.tokenBidAmt='"Bid amount" must be a number':0==eC?a.tokenBidAmt='"Bid amount" must be greater than 0':eC<0?a.tokenBidAmt='"Bid amount" must be greater than 0':"FixedPrice"!=eN.PutOnSaleType&&" "!=eN.PutOnSaleType&&"TimedAuction"==eN.PutOnSaleType&&eN.minimumBid>eC?a.tokenBidAmt='"Minimum Bid Amount" must be higher than or equal to '+eN.minimumBid:"FixedPrice"!=eN.PutOnSaleType&&" "!=eN.PutOnSaleType&&"TimedAuction"==eN.PutOnSaleType&&eN.maximumBid<eC&&(a.tokenBidAmt='"Maximum Bid Amount" must be Lower than or equal to '+eN.maximumBid),el(a),console.log(a,"-==---"),a}};async function eH(e){b(!0);var a=await (0,u.I)();let t=new(i())(a&&a.provider&&null!=a.provider&&void 0!=a.provider&&""!=a.provider?a.provider:window.ethereum);var s=await t.eth.getAccounts();if(s){if(A==l.Z.tokenSymbol)var n=new t.eth.Contract(c,l.Z.tokenAddress);else var n=new t.eth.Contract(c,l.Z.tokenAddress);var o=await n.methods.balanceOf(s[0].toLowerCase()).call()/l.Z.decimalvalues;if(0==o||eT>o)return y.Am.error("Insufficient "+A+" Token Balance",h),!1;var r=Object.keys(await e$(!0)).length;if(0!=r)return console.log(r,"errorsSize"),window.$("#place_bid_modal").modal("show"),!1;window.$("#place_bid_modal").modal("hide"),window.$("#edit_bid_modal").modal("hide"),window.$("#proceed_bid_modal").modal("show")}}async function eq(){var e=await (0,u.I)();let a=new(i())(e&&e.provider&&null!=e.provider&&void 0!=e.provider&&""!=e.provider?e.provider:window.ethereum);var t=(await a.eth.getAccounts())[0].toLowerCase();t||y.Am.warning("OOPS!..connect Your Wallet",h),eu("processing");var s=new a.eth.Contract(c,l.Z.tokenAddress),n=await s.methods.balanceOf(t).call()/l.Z.decimalvalues;if(721==eN.type)var o=await s.methods.allowance(t,eN.contractAddress).call();else var o=await s.methods.allowance(t,eN.contractAddress).call();var r=parseInt(x)+parseInt(o);if(0==n||eT>n)return y.Am.error("Insufficient "+A+"Token Balance",h),!1;await s.methods.approve((eN.type,eN.contractAddress),r.toString()).send({from:e_}).then(async e=>{y.Am.success("Wallet authorized",h);var a=await (0,p.Um)({tokenCounts:eN.tokenCounts,tokenBidAddress:ew,tokenBidAmt:eC.toString(),NoOfToken:721==eN.type?1:eB,BidToken:A});a.data&&a.data.type&&"success"==a.data.type?eu("done"):(y.Am.error("Wallet authorization failed",h),eu("tryagain"))}).catch(e=>{y.Am.error("Wallet authorization failed",h),eu("tryagain")})}async function ez(){var e=await (0,u.I)();let a=new(i())(e&&e.provider&&null!=e.provider&&void 0!=e.provider&&""!=e.provider?e.provider:window.ethereum);var t=(await a.eth.getAccounts())[0].toLowerCase();if(!t){y.Am.warning("OOPS!..connect Your Wallet",h);return}ep("processing"),a.eth.personal.sign("Bidding a Art",t,"Bid Placed").then(async e=>{y.Am.success("Bid placed successfully",h),ep("done"),setTimeout(()=>window.$("#proceed_bid_modal").modal("hide"),600),setTimeout(()=>window.location.reload(),1200)}).catch(()=>{y.Am.error("Action rejected by user",h),ep("tryagain")})}async function eK(e,a){var t=0;e=parseFloat(e);try{var s=e.toString().split(".");return t=s[1]&&s[1].length&&s[1].length>0?s[0]:e}catch(e){return t}}async function eQ(){var e=await (0,u.I)();let a=new(i())(e&&e.provider&&null!=e.provider&&void 0!=e.provider&&""!=e.provider?e.provider:window.ethereum);var t=await a.eth.getAccounts();if(t&&v){if(721==eN.type){var s=new a.eth.Contract(c,l.Z.tokenAddress),n=await s.methods.balanceOf(eZ.tokenBidAddress).call(),o=n/l.Z.decimalvalues,m=parseFloat(eI)*parseFloat(v)+parseFloat(eZ.tokenBidAmt)*parseFloat(v);if(!(o>=m))return y.Am.error("Bidder doesnt have Enough balance",h),!1;var b=new a.eth.Contract(r,eN.contractAddress);N("processing"),l.Z.tokenSymbol;var w=parseFloat(v)*parseFloat(eZ.tokenBidAmt);w*=l.Z.decimalvalues,console.log(w=await eK(w,l.Z.decimalvalues),"========passAmt"),w=await eG(w);var x=new a.eth.Contract(c,l.Z.tokenAddress);await x.methods.allowance(eZ.tokenBidAddress,eN.contractAddress).call(),await b.methods.acceptBId(eZ.currency,eZ.tokenBidAddress,w.toString(),eZ.tokenCounts).send({from:e_}).then(async e=>{await (0,p.uO)({tokenCounts:eZ.tokenCounts,NoOfToken:v,tokenBidAddress:eZ.tokenBidAddress,UserAccountAddr_byaccepter:t,transactionHash:e.transactionHash,currecy:eZ.currency}),N("done"),y.Am.success("Bid accepted",h),setTimeout(()=>window.$(".modal").modal("hide"),600),window.location.reload(!1)}).catch(e=>{y.Am.error("Accept failed",h),N("tryagain")})}else{var s=new a.eth.Contract(c,l.Z.tokenAddress),n=await s.methods.balanceOf(eZ.tokenBidAddress).call(),o=n/l.Z.decimalvalues,m=parseFloat(eI)*parseFloat(v)+parseFloat(eZ.tokenBidAmt)*parseFloat(v);if(!(o>=m))return y.Am.error("Bidder doesnt have Enough balance",h),!1;var x=new a.eth.Contract(d,eN.contractAddress);N("processing");var w=parseFloat(eZ.tokenBidAmt)*parseFloat(v);w*=l.Z.decimalvalues,console.log(w=await eG(w=await eK(w,l.Z.decimalvalues)),"========passAmt123"),await x.methods.acceptBId(eZ.currency,eZ.tokenBidAddress,w.toString(),eZ.tokenCounts,v).send({from:e_}).then(async e=>{await (0,p.uO)({tokenCounts:eZ.tokenCounts,NoOfToken:v,tokenBidAddress:eZ.tokenBidAddress,UserAccountAddr_byaccepter:t,transactionHash:e.transactionHash,currecy:eZ.currency}),N("done"),setTimeout(()=>window.$(".modal").modal("hide"),600),window.location.reload()}).catch(e=>{y.Am.error("Accept failed",h),N("tryagain")})}}}async function eW(e){var a=await (0,p.ZR)({tokenCounts:e.tokenCounts,tokenBidAddress:e.tokenBidAddress});a&&a.data&&a.data.toast&&a.data.toast.type&&a.data.toast.message&&("error"==a.data.toast.type?y.Am.error(a.data.toast.message,h):"success"==a.data.toast.type&&y.Am.success(a.data.toast.message,h)),setTimeout(()=>window.$(".modal").modal("hide"),600),setTimeout(()=>window.location.reload(),1200)}function eG(e){let a=0>+e?"-":"",t=(null==e?void 0:e.toString())||"";if(!/e/i.test(t))return e;let[s,n,o]=e.toString().replace(/^-/,"").replace(/^([0-9]+)(e.*)/,"$1.$2").split(/e|\./);return 0>+o?a+"0."+"0".repeat(Math.max(Math.abs(o)-1||0,0))+s+n:a+s+(+o>=n.length?n+"0".repeat(Math.max(+o-n.length||0,0)):n.slice(0,+o)+"."+n.slice(+o))}return(0,n.useImperativeHandle)(a,()=>({async PlaceABid_Click(e,a){el({});var t=await (0,u.I)();let s=new(i())(t&&t.provider&&null!=t.provider&&void 0!=t.provider&&""!=t.provider?t.provider:window.ethereum);var n=await s.eth.getAccounts(),o=n&&n[0].toLowerCase();n&&(n=n[0].toLowerCase());var m=await (0,p.u7)({curAddr:n,tokenCounts:e.tokenCounts});if(z(m.data.Detail.Resp.TotalQuantity),m&&m&&m.data&&m.data.Detail&&m.data.Detail.Resp){var v=m.data.Detail.Resp;v.Bids&&es(v.Bids)}if(b(!1),!localStorage.getItem("nilwireMetamask"))return y.Am.error("Please connect to a Metamask wallet",h),!1;if("Info"==eE){if(U(e.type),e&&e.tokenowners_current&&e.tokenowners_current[0]&&e.tokenowners_current[0].currency){P(e.tokenowners_current[0].tokenOwner),L(e.tokenowners_current[0].currency),j(e.tokenowners_current[0].currency);try{if(e&&e.tokenowners_current&&e.tokenowners_current[0].currency==l.Z.currencySymbol){var w=new s.eth.Contract(c,l.Z.tokenAddress);await w.methods.decimals().call();var x=await w.methods.balanceOf(o).call(),f=x/l.Z.decimalvalues;if(er(f.toFixed(l.Z.toFixed)),L(l.Z.tokenSymbol),j(l.Z.tokenSymbol),721==e.type){var _=new s.eth.Contract(r,e.contractAddress),k=await _.methods.getServiceFee().call(),g=k/l.Z.decimalvalues;O(g)}else{var _=new s.eth.Contract(d,e.contractAddress),k=await _.methods.getServiceFee().call(),g=k/l.Z.decimalvalues;O(g)}}else if(e&&e.tokenowners_current&&e.tokenowners_current[0].currency==l.Z.owntokenSymbol){var w=new s.eth.Contract(c,l.Z.tokenAddress);await w.methods.decimals().call();var x=await w.methods.balanceOf(o).call(),f=x/l.Z.decimalvalues;if(er(f.toFixed(l.Z.toFixed)),L(l.Z.tokenSymbol),j(l.Z.tokenSymbol),721==e.type){var _=new s.eth.Contract(r,e.contractAddress),k=await _.methods.getServiceFee().call(),g=k/l.Z.decimalvalues;O(g)}else{var _=new s.eth.Contract(d,e.contractAddress),k=await _.methods.getServiceFee().call(),g=k/l.Z.decimalvalues;O(g)}}else if(e&&e.tokenowners_current&&e.tokenowners_current[0].currency==l.Z.tokenSymbol){var N=new s.eth.Contract(c,l.Z.tokenAddress);await N.methods.decimals().call();var x=await N.methods.balanceOf(o).call(),f=x/l.Z.decimalvalues;if(er(f.toFixed(l.Z.toFixed)),L(l.Z.tokenSymbol),j(l.Z.tokenSymbol),721==e.type){var _=new s.eth.Contract(r,e.contractAddress),k=await _.methods.getServiceFee().call(),g=k/l.Z.decimalvalues;O(g)}else{var _=new s.eth.Contract(d,e.contractAddress),k=await _.methods.getServiceFee().call(),g=k/l.Z.decimalvalues;O(g)}}else{var w=new s.eth.Contract(c,l.Z.tokenAddress);await w.methods.decimals().call();var x=await w.methods.balanceOf(o).call(),f=x/l.Z.decimalvalues;if(er(f.toFixed(l.Z.toFixed)),L(l.Z.tokenSymbol),j(l.Z.tokenSymbol),721==e.type){var _=new s.eth.Contract(r,e.contractAddress),k=await _.methods.getServiceFee().call(),g=k/l.Z.decimalvalues;O(g)}else{var _=new s.eth.Contract(d,e.contractAddress),k=await _.methods.getServiceFee().call(),g=k/l.Z.decimalvalues;O(g)}}}catch(e){}}}else if(U(e.type),e&&e.tokenowners_current&&e.tokenowners_current.currency){P(e.tokenowners_current.tokenOwner),L(e.tokenowners_current.currency),j(e.tokenowners_current.currency);try{if(e&&e.tokenowners_current&&e.tokenowners_current.currency==l.Z.currencySymbol){var w=new s.eth.Contract(c,l.Z.tokenAddress);await w.methods.decimals().call();var x=await w.methods.balanceOf(o).call(),f=x/l.Z.decimalvalues;if(er(f.toFixed(l.Z.toFixed)),L(l.Z.tokenSymbol),j(l.Z.tokenSymbol),721==e.type){var _=new s.eth.Contract(r,e.contractAddress),k=await _.methods.getServiceFee().call(),g=k/l.Z.decimalvalues;O(g)}else{var _=new s.eth.Contract(d,e.contractAddress),k=await _.methods.getServiceFee().call(),g=k/l.Z.decimalvalues;O(g)}}else if(e&&e.tokenowners_current&&e.tokenowners_current.currency==l.Z.owntokenSymbol){var w=new s.eth.Contract(c,l.Z.tokenAddress);await w.methods.decimals().call();var x=await w.methods.balanceOf(o).call(),f=x/l.Z.decimalvalues;if(er(f.toFixed(l.Z.toFixed)),L(l.Z.tokenSymbol),j(l.Z.tokenSymbol),721==e.type){var _=new s.eth.Contract(r,e.contractAddress),k=await _.methods.getServiceFee().call(),g=k/l.Z.decimalvalues;O(g)}else{var _=new s.eth.Contract(d,e.contractAddress),k=await _.methods.getServiceFee().call(),g=k/l.Z.decimalvalues;O(g)}}else if(e&&e.tokenowners_current&&e.tokenowners_current.currency==l.Z.tokenSymbol){var N=new s.eth.Contract(c,l.Z.tokenAddress);await N.methods.decimals().call();var x=await N.methods.balanceOf(o).call(),f=x/l.Z.decimalvalues;if(er(f.toFixed(l.Z.toFixed)),L(l.Z.tokenSymbol),j(l.Z.tokenSymbol),721==e.type){var _=new s.eth.Contract(r,e.contractAddress),k=await _.methods.getServiceFee().call(),g=k/l.Z.decimalvalues;O(g)}else{var _=new s.eth.Contract(d,e.contractAddress),k=await _.methods.getServiceFee().call(),g=k/l.Z.decimalvalues;O(g)}}else{var w=new s.eth.Contract(c,l.Z.tokenAddress);await w.methods.decimals().call();var x=await w.methods.balanceOf(o).call(),f=x/l.Z.decimalvalues;if(er(f.toFixed(l.Z.toFixed)),L(l.Z.tokenSymbol),j(l.Z.tokenSymbol),721==e.type){var _=new s.eth.Contract(r,e.contractAddress),k=await _.methods.getServiceFee().call(),g=k/l.Z.decimalvalues;O(g)}else{var _=new s.eth.Contract(d,e.contractAddress),k=await _.methods.getServiceFee().call(),g=k/l.Z.decimalvalues;O(g)}}}catch(e){}}window.$("#place_bid_modal").modal("show")},async PriceCalculate(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};eY(e),el({})},async AcceptBid_Select(e,a){if(el({}),window.ethereum&&e&&e.tokenBidAmt){if(window.$("#accept_modal").modal("show"),en(e),ej<e.pending){w(ej);var t=ej*e.tokenBidAmt}else{w(e.pending);var t=e.pending*e.tokenBidAmt}try{var s=await (0,u.I)();let e=new(i())(s&&s.provider&&null!=s.provider&&void 0!=s.provider&&""!=s.provider?s.provider:window.ethereum);if(await e.eth.getAccounts(),e.eth){if(721==a.type){var n=new e.eth.Contract(r,a.contractAddress),o=await n.methods.getServiceFee().call(),c=t*o/1e20;ec(c),I(o/1e18);var m=t-c;em(m);var p=o/l.Z.decimalvalues;O(p)}else{var n=new e.eth.Contract(d,a.contractAddress),o=await n.methods.getServiceFee().call(),c=t*o/1e20;ec(c),I(o/1e18);var m=t-c;em(m);var p=o/l.Z.decimalvalues;O(p)}}}catch(e){}}},async CancelBid_Select(e){el({}),e&&e.pending>0&&("pending"==e.status||"partiallyCompleted"==e.status)?(en(e),window.$("#cancel_modal").modal("show")):window.$(".modal").modal("hide")}})),(0,s.jsxs)("div",{children:["processing"==_&&(0,s.jsx)("div",{className:"transLoading",children:(0,s.jsx)("img",{src:t(6514),className:"img-fluid",alt:""})}),(0,s.jsx)("div",{className:"modal fade primary_modal",onClick:()=>e$(o),id:"place_bid_modal","data-backdrop":"static",tabindex:"-1",role:"dialog","aria-labelledby":"place_bid_modalCenteredLabel","aria-hidden":"true",children:(0,s.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:(0,s.jsxs)("div",{className:"modal-content",children:[(0,s.jsxs)("div",{className:"modal-header text-center",children:[(0,s.jsx)("h5",{className:"modal-title",id:"place_bid_modalLabel",children:"Please sign the bidding action"}),(0,s.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,s.jsx)("span",{"aria-hidden":"true",onClick:eR,children:"\xd7"})})]}),(0,s.jsxs)("div",{className:"modal-body",children:[(0,s.jsx)("p",{className:"text-center place_bit_desc text-light mb-0",children:"You are about to place a bid for"}),(0,s.jsxs)("p",{className:"place_bit_desc_2 text-center",children:[(0,s.jsx)("span",{className:"text-light mr-2",children:(0,m.UD)(E)})," ",(0,s.jsx)("span",{className:"text-muted",children:"by"})," ",(0,s.jsx)("span",{className:"text-light ml-2",children:(0,m.UD)(ew)})]}),(0,s.jsx)("p",{className:"place_bit_desc_2 text-center",children:"Available : "+eD}),(0,s.jsxs)("form",{className:"px-4 bid_form form-border",children:[(0,s.jsxs)("div",{class:"input-group mb-3 input_grp_style_1",children:[(0,s.jsx)("input",{type:"number",onKeyDown:e=>["e","E","+","-",","].includes(e.key)&&e.preventDefault(),min:"0",name:"tokenBidAmt",id:"tokenBidAmt",class:"form-control mb-0",placeholder:"Enter your bid amount","aria-label":"bid","aria-describedby":"basic-addon2",value:R,onChange:eP,autoComplete:"off"}),(0,s.jsx)("div",{class:"input-group-append",children:"WETH"})]}),eF.tokenBidAmt&&(0,s.jsx)("span",{className:"text-danger",style:{position:"relative",top:"-12px"},children:eF.tokenBidAmt}),(0,s.jsx)("div",{class:"input-group mb-3 input_grp_style_1",children:eN.type==l.Z.multipleType&&(0,s.jsx)("input",{type:"number",onKeyDown:e=>["e","E","+","-",",","."].includes(e.key)&&e.preventDefault(),min:"1",name:"NoOfToken",id:"NoOfToken",class:"form-control mb-0",placeholder:"Enter the item quantity","aria-label":"bid","aria-describedby":"basic-addon2",value:$,onChange:eP,autoComplete:"off"})}),eF.NoOfToken&&(0,s.jsx)("span",{className:"text-danger",style:{position:"relative",top:"-12px"},children:eF.NoOfToken}),eS&&eS.myBid&&eS.myBid.tokenBidAmt>0&&(0,s.jsxs)("div",{className:"row pb-3",children:[(0,s.jsx)("div",{className:"col-12 col-sm-6",children:(0,s.jsx)("p",{className:"buy_desc_sm",children:"Previous bid amount"})}),(0,s.jsx)("div",{className:"col-12 col-sm-6 text-sm-right",children:(0,s.jsxs)("p",{className:"buy_desc_sm_bold",children:[eS.myBid.tokenBidAmt," ",l.Z.tokenSymbol]})})]}),(0,s.jsxs)("div",{className:"row pb-3",children:[(0,s.jsx)("div",{className:"col-12 col-sm-6",children:(0,s.jsx)("p",{className:"buy_desc_sm",children:"Your balance"})}),(0,s.jsx)("div",{className:"col-12 col-sm-6 text-sm-right",children:(0,s.jsxs)("p",{className:"buy_desc_sm_bold",children:[ex.toFixed(8)," ",l.Z.currencySymbol]})})]}),(0,s.jsxs)("div",{className:"row pb-3",children:[(0,s.jsx)("div",{className:"col-12 col-sm-6",children:(0,s.jsx)("p",{className:"buy_desc_sm",children:"Your bidding balance"})}),(0,s.jsx)("div",{className:"col-12 col-sm-6 text-sm-right",children:(0,s.jsxs)("p",{className:"buy_desc_sm_bold",children:[eO," ",l.Z.tokenSymbol]})})]}),721==eN.type&&"TimedAuction"==eN.PutOnSaleType&&(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsxs)("div",{className:"row pb-3",children:[(0,s.jsx)("div",{className:"col-12 col-sm-6",children:(0,s.jsx)("p",{className:"buy_desc_sm",children:"Minimum Bid Amount"})}),(0,s.jsx)("div",{className:"col-12 col-sm-6 text-sm-right",children:(0,s.jsxs)("p",{className:"buy_desc_sm_bold",children:[eG(eN.minimumBid)," ",l.Z.tokenSymbol]})})]}),(0,s.jsxs)("div",{className:"row pb-3",children:[(0,s.jsx)("div",{className:"col-12 col-sm-6",children:(0,s.jsx)("p",{className:"buy_desc_sm",children:"Maximum Bid Amount"})}),(0,s.jsx)("div",{className:"col-12 col-sm-6 text-sm-right",children:(0,s.jsxs)("p",{className:"buy_desc_sm_bold",children:[eG(eN.maximumBid)," ",l.Z.tokenSymbol]})})]})]}),(0,s.jsxs)("div",{className:"row pb-3",children:[(0,s.jsx)("div",{className:"col-12 col-sm-6",children:(0,s.jsx)("p",{className:"buy_desc_sm",children:"WETH Service fee"})}),(0,s.jsx)("div",{className:"col-12 col-sm-6 text-sm-right",children:(0,s.jsxs)("p",{className:"buy_desc_sm_bold",children:[F," %"," "]})})]}),(0,s.jsxs)("div",{className:"row pb-3",children:[(0,s.jsx)("div",{className:"col-12 col-sm-6",children:(0,s.jsx)("p",{className:"buy_desc_sm",children:"You will pay"})}),(0,s.jsx)("div",{className:"col-12 col-sm-6 text-sm-right",children:(0,s.jsxs)("p",{className:"buy_desc_sm_bold",children:[parseFloat(eT).toFixed(7)," ",A]})})]}),(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)("button",{className:"btn-main lead mar-top-10",type:"button",onClick:()=>eH(),"aria-label":"Close","data-toggle":"modal",children:"Place a bid"})})]})]})]})})}),(0,s.jsx)("div",{className:"modal fade primary_modal",id:"proceed_bid_modal",tabindex:"-1",role:"dialog","data-backdrop":"static","aria-labelledby":"proceed_bid_modalCenteredLabel","aria-hidden":"true",children:(0,s.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:(0,s.jsxs)("div",{className:"modal-content",children:[(0,s.jsxs)("div",{className:"modal-header text-center",children:[(0,s.jsx)("h5",{className:"modal-title",id:"proceed_bid_modalLabel",children:"Follow Steps"}),(0,s.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,s.jsx)("div",{className:"modal-body",children:(0,s.jsxs)("form",{children:[(0,s.jsxs)("div",{className:"media approve_media",children:["processing"==eh?(0,s.jsx)("i",{class:"fa fa-spinner mr-3 spinner_icon","aria-hidden":"true",id:"circle1"}):"done"==eh?(0,s.jsx)("i",{className:"fas fa-check mr-3 pro_complete","aria-hidden":"true"}):(0,s.jsx)("i",{className:"fas fa-check mr-3","aria-hidden":"true"}),(0,s.jsxs)("div",{className:"media-body",children:[(0,s.jsx)("p",{className:"mt-0 approve_text",children:"Approve"}),(0,s.jsx)("p",{className:"mt-0 approve_desc",children:"Checking balance and approving"})]})]}),(0,s.jsx)("div",{className:"text-center my-3",children:(0,s.jsxs)("button",{className:"processing"==eh||"init"==eh?"btn-main lead mar-top-10":"btn-main btnGrey lead mar-top-10",type:"button",disabled:"processing"==eh||"done"==eh,onClick:eq,children:["init"==eh&&"Approve","processing"==eh&&"In-progress...","done"==eh&&"Done","tryagain"==eh&&"Try Again"]})}),(0,s.jsxs)("div",{className:"media approve_media mt-3",children:["processing"==eL?(0,s.jsx)("i",{class:"fa fa-spinner mr-3 spinner_icon","aria-hidden":"true",id:"circle1"}):"done"==eL?(0,s.jsx)("i",{className:"fas fa-check mr-3 pro_complete","aria-hidden":"true"}):(0,s.jsx)("i",{className:"fas fa-check mr-3","aria-hidden":"true"})," ",(0,s.jsxs)("div",{className:"media-body",children:[(0,s.jsx)("p",{className:"mt-0 approve_text",children:"Signature"}),(0,s.jsx)("p",{className:"mt-0 approve_desc",children:"Create a signature to place a bid"})]})]}),(0,s.jsx)("div",{className:"text-center mt-3",children:(0,s.jsxs)("button",{className:"done"==eh&&"done"!=eL?"btn-main lead mar-top-10":"btn-main btnGrey lead mar-top-10",type:"button",disabled:"done"!=eh||"processing"==eL||"done"==eL,onClick:ez,children:["init"==eL&&"Start","processing"==eL&&"In-progress...","done"==eL&&"Done","tryagain"==eL&&"Try Again"]})})]})})]})})}),(0,s.jsx)("div",{className:"modal fade primary_modal",id:"accept_modal",tabindex:"-1","data-backdrop":"static",role:"dialog","aria-labelledby":"accept_modalCenteredLabel","aria-hidden":"true",children:(0,s.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:(0,s.jsxs)("div",{className:"modal-content",children:[(0,s.jsxs)("div",{className:"modal-header text-center",children:[(0,s.jsx)("h5",{className:"modal-title",id:"accept_modalLabel",children:"Accept bid"}),(0,s.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,s.jsxs)("div",{className:"modal-body",children:[(0,s.jsx)("div",{className:"img_accept text-center",children:eN&&eN.image&&"mp4"==eN.image.split(".").pop()?(0,s.jsx)("video",{src:"".concat(l.Z.Back_URL,"nftImg/").concat(eN.tokenCreator,"/").concat(eN.image),type:"video/mp4",alt:"Collections",className:"img-fluid img-rounded mb-sm-30",controls:!0,controlsList:"nodownload"}):eN&&eN.image&&"mp3"==eN.image.split(".").pop()?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"".concat(l.Z.Back_URL,"images/music.png"),alt:"",className:"img-fluid img-rounded mb-sm-30"}),(0,s.jsx)("audio",{src:"".concat(l.Z.Back_URL,"nftImg/").concat(eN.tokenCreator,"/").concat(eN.image),type:"audio/mp3",controls:!0,className:"img-fluid img-rounded mb-sm-30"})]}):(0,s.jsx)("img",{src:"".concat(l.Z.Back_URL,"nftImg/").concat(eN.tokenCreator,"/").concat(eN.image),alt:"Collections",className:"img-fluid img-rounded mb-sm-30"})}),(0,s.jsx)("p",{className:"text-center accept_desc mb-0 mar-top-10",children:(0,s.jsx)("span",{className:"buy_desc_sm",children:"You are about to accept bid for"})}),(0,s.jsxs)("p",{className:"text-center accept_desc",children:[(0,s.jsx)("span",{className:"buy_desc_sm_bold pl-2",children:eN.tokenName})," ",(0,s.jsx)("span",{className:"buy_desc_sm pl-2",children:"from"})," ",(0,s.jsx)("span",{className:"buy_desc_sm_bold pl-2",children:(0,m.UD)(eZ.tokenBidAddress)})]}),(0,s.jsxs)("p",{className:"info_title text-center",children:[eG(parseFloat(eZ.tokenBidAmt))," ",eZ.currencySymbol," for ",eZ.pending," ","edition(s)"]}),(0,s.jsxs)("div",{className:"row mx-0 pb-3",children:[(0,s.jsx)("div",{className:"col-12 col-sm-6 px-4",children:(0,s.jsx)("p",{className:"buy_desc_sm",children:"WETH Service fee"})}),(0,s.jsx)("div",{className:"col-12 col-sm-6 px-4 text-sm-right",children:(0,s.jsxs)("p",{className:"buy_desc_sm_bold",children:[T," %"]})})]}),(0,s.jsxs)("div",{className:"row mx-0 pb-3",children:[(0,s.jsx)("div",{className:"col-12 col-sm-6 px-4",children:(0,s.jsx)("p",{className:"buy_desc_sm",children:"You will get"})}),(0,s.jsx)("div",{className:"col-12 col-sm-6 px-4 text-sm-right",children:(0,s.jsxs)("p",{className:"buy_desc_sm_bold",children:[parseFloat(eM).toFixed(7)," ",eZ.currency]})})]}),(0,s.jsx)("form",{className:"px-4",children:(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsxs)("button",{className:"btn-main lead mar-top-10 me-2",type:"button",onClick:()=>eQ(),disabled:"processing"==g,children:["processing"==g&&(0,s.jsx)("i",{class:"fa fa-spinner fa-spin me-2 spinner_icon","aria-hidden":"true",id:"circle1"}),"Accept bid"]}),(0,s.jsx)("button",{type:"button",className:"btn-main btnGrey lead mar-top-10","data-dismiss":"modal","aria-label":"Close",children:"Cancel"})]})})]})]})})}),(0,s.jsx)("div",{className:"modal fade primary_modal",id:"cancel_modal",tabindex:"-1",role:"dialog","aria-labelledby":"accept_modalCenteredLabel","aria-hidden":"true",children:(0,s.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:(0,s.jsxs)("div",{className:"modal-content",children:[(0,s.jsxs)("div",{className:"modal-header text-center",children:[(0,s.jsx)("h5",{className:"modal-title",id:"accept_modalLabel",children:"Cancel bid"}),(0,s.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,s.jsxs)("div",{className:"modal-body",children:[(0,s.jsx)("p",{className:"text-center accept_desc mb-0 mar-top-10",children:(0,s.jsx)("span",{className:"buy_desc_sm",children:"You are about to cancel bid for"})}),(0,s.jsxs)("p",{className:"text-center accept_desc",children:[(0,s.jsx)("span",{className:"buy_desc_sm_bold pl-2",children:eN.tokenName})," ",(0,s.jsx)("span",{className:"buy_desc_sm pl-2",children:"from"})," ",(0,s.jsx)("span",{className:"buy_desc_sm_bold pl-2",children:(0,m.UD)(eZ.tokenBidAddress)})]}),(0,s.jsxs)("p",{className:"text-center accept_desc mb-0 mar-top-2",children:[(0,s.jsxs)("span",{className:"buy_desc_sm_bold pl-2",children:[eZ.tokenBidAmt," ",eZ.currency]})," ",(0,s.jsx)("span",{className:"buy_desc_sm pl-2",children:"for "})," ",(0,s.jsx)("span",{className:"buy_desc_sm_bold pl-2",children:eN.tokenName})]}),(0,s.jsx)("form",{className:"px-4",children:(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{class:"btn-NewBlock text-center",children:(0,s.jsx)("button",{className:"btn-main lead mar-top-10",type:"button",onClick:()=>eW(eZ),children:"Cancel bid"})}),(0,s.jsx)("div",{class:"btn-NewBlock text-center",children:(0,s.jsx)("button",{className:"btn-main btnGrey lead mar-top-10","data-dismiss":"modal","aria-label":"Close",children:"Cancel"})})]})})]})]})})})]})})},71439:function(e){"use strict";e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')},24021:function(e){"use strict";e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"_name","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"_approved","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"implementsERC721","outputs":[{"name":"_implementsERC721","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"_totalSupply","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"_tokenId","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenMetadata","outputs":[{"name":"_infoUrl","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"_balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_approvedAddress","type":"address"},{"name":"_metadata","type":"string"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"_symbol","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numTokensTotal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"getOwnerTokens","outputs":[{"name":"_tokenIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]')}}]);