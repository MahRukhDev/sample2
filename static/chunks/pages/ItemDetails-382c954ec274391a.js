(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4147],{60317:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ItemDetails",function(){return a(65967)}])},44546:function(e,t,a){"use strict";a.r(t),t.default={src:"/_next/static/media/profile_placeholder.d158bc19.png",height:200,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAArUlEQVR42l3OvQqDMBQF4DxNKfT9t8bYCHZzENSKicXBOhTpotIk6ulVtIMfZMm5f2xz9oXwy7K0T3qBlGL5+4dpmrY4KIqiXYs8zxMg8zwbaw2GYcA4jsY5h3sY3pjW+gvSNA2iKEIcx8jzHNM0oaoqy5Qq1oJHluFV1+Cco+s6LOget6zgNB593xvq2kMDIqUMGDmlSfLGAU38UHZhmxPnV09rZbRSVggh9/AHiF2/AN+KpdMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},80124:function(e,t,a){"use strict";a.r(t),a.d(t,{CancelOrderRef:function(){return h}});var r=a(85893),n=a(67294);a(19755);var o=a(37918),i=a.n(o);a(8882);var s=a(24021),l=a(71439),c=a(6103),d=a(93451),u=a(72213);a(97416);var m=a(55678);m.Am.configure();let w=c.Z.toasterOption,h=(0,n.forwardRef)((e,t)=>{let[o,c]=n.useState(""),[h,g]=n.useState(0),[v,p]=n.useState(0),[f,k]=n.useState(0),[A,b]=n.useState("");async function _(){var t=await (0,u.I)();let a=new(i())(t&&t.provider&&null!=t.provider&&void 0!=t.provider&&""!=t.provider?t.provider:window.ethereum);if(await a.eth.getAccounts(),a&&a.eth){if(!localStorage.getItem("nilwireMetamask"))return window.location.href="/connect",!1;if(721==S.type){var r=new a.eth.Contract(s,S.contractAddress);c("processing"),r.methods.cancelOrder(e.item.tokenCounts).send({from:e.Accounts}).then(async t=>{c("done");var a=await (0,d.pQ)({tokenOwner:x,tokenCounts:e.item.tokenCounts,tokenPrice:h,blockHash:t.blockHash,transactionHash:t.transactionHash,BidToken:A,from:"cancel"});a.data&&a.data.RetType&&"success"==a.data.RetType&&(m.Am.success("Sale order cancelled successfully",w),window.$(".modal").modal("hide"),setTimeout(()=>{window.location.reload(!1)},1500))}).catch(e=>{c("error"),m.Am.error("Transaction rejected by user",w)})}else{var r=new a.eth.Contract(l,S.contractAddress);c("processing"),r.methods.cancelOrder(e.item.tokenCounts).send({from:e.Accounts}).then(async t=>{c("done");var a=await (0,d.pQ)({tokenOwner:x,tokenCounts:e.item.tokenCounts,tokenPrice:h,blockHash:t.blockHash,transactionHash:t.transactionHash,BidToken:A,from:"cancel"});a.data&&a.data.RetType&&"success"==a.data.RetType&&(m.Am.success("Sale order cancelled successfully",w),window.$(".modal").modal("hide"),setTimeout(()=>{window.location.reload(!1)},1500))}).catch(e=>{c("error"),m.Am.error("Transaction rejected by user",w)})}}}var{item:S,UserAccountAddr:x}=e;return(0,n.useImperativeHandle)(t,()=>({async CancelOrder_Click(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log(t,"ii"),e.Set_HitItem(t),g(0),console.log(t,"===============",a,"=============froncancelorder");let r=t&&t.OnSaleOwner&&t.OnSaleOwner.findIndex(e=>e.tokenOwner.toString()==x.toString());k(parseInt(r)>=0&&t.OnSaleOwner[r]&&t.OnSaleOwner[r].price?t.OnSaleOwner[r].price:t.tokenowners_current&&t.tokenowners_current.price?t.tokenowners_current.price:t.price),p(a),b(a.currency),window.$("#cancel_order_modal").modal("show")}})),console.log(S,"=========fromcancelorder"),(0,r.jsxs)("div",{children:["processing"==o&&(0,r.jsx)("div",{className:"transLoading",children:(0,r.jsx)("img",{src:a(6514),className:"img-fluid",alt:""})}),(0,r.jsxs)("div",{class:"modal fade primary_modal",id:"cancel_order_modal","data-backdrop":"static",tabindex:"-1",role:"dialog","aria-labelledby":"cancel_order_modalCenteredLabel","aria-hidden":"true","data-keyboard":"false",children:[(0,r.jsx)("div",{class:"modal-dialog modal-dialog-centered modal-sm",role:"document",children:(0,r.jsxs)("div",{class:"modal-content",children:[(0,r.jsxs)("div",{class:"modal-header text-center",children:[(0,r.jsx)("h5",{class:"modal-title",id:"cancel_order_modalLabel",children:"Cancel Sale Order"}),(0,r.jsx)("p",{className:"text_grey_clickb mb-0"}),(0,r.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:(0,r.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,r.jsx)("div",{class:"modal-body px-0 pt-0",children:(0,r.jsxs)("form",{className:"px-4 bid_form",children:[(0,r.jsxs)("div",{className:"row pb-2",children:[(0,r.jsx)("div",{className:"col-12 col-sm-6",children:(0,r.jsx)("p",{className:"buy_desc_sm",children:"Token Price"})}),(0,r.jsx)("div",{className:"col-12 col-sm-6 text-sm-right",children:(0,r.jsxs)("p",{className:"buy_desc_sm_bold",children:[f," ",A]})})]}),(0,r.jsx)("div",{className:"text-center mt-3",children:(0,r.jsxs)("button",{className:"btn-main lead mar-top-10",type:"button",onClick:()=>_(),disabled:"processing"==o,children:["processing"==o&&(0,r.jsx)("i",{class:"fa fa-spinner mr-3 spinner_icon","aria-hidden":"true",id:"circle1"}),"Continue"]})})]})})]})}),(0,r.jsx)("div",{className:"text-center mt-3",children:(0,r.jsxs)("button",{className:"btn-main lead mar-top-10","data-dismiss":"modal",type:"button","aria-label":"Close",children:["processing"==o&&(0,r.jsx)("i",{class:"fa fa-spinner mr-3 spinner_icon","aria-hidden":"true",id:"circle1"}),"Sign sell order"]})})]})]})})},80471:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var r=a(85893),n=a(67294),o=a(89250),i=a(37918),s=a.n(i);a(8882);var l=a(74845);a(19755);var c=a(6103);a(93451);var d=a(97416),u=a(72213);function m(e){let{...t}=e,{WalletConnected:a}=e,i=(0,n.useRef)(null);async function m(){w()}async function w(){if(window.$(".modal").modal("hide"),localStorage.getItem("walltype")&&null!=localStorage.getItem("walltype")&&void 0!=localStorage.getItem("walltype")&&""!=localStorage.getItem("walltype")&&"trust"==localStorage.getItem("walltype")&&localStorage.getItem("nilwireMetamask")&&null!=localStorage.getItem("nilwireMetamask")&&void 0!=localStorage.getItem("nilwireMetamask")&&""!=localStorage.getItem("nilwireMetamask")){var t=new l.Z({rpc:{[c.Z.livechainid]:c.Z.liverpcUrls},chainId:c.Z.livechainid});t.on("connect",()=>{}),await t.enable();let o=new(s())(t);var a=await o.eth.net.getId(),r=await o.eth.getAccounts();if(c.Z.livechainid==a){localStorage.setItem("walltype","trust"),localStorage.setItem("nilddsbashyujsd","yes"),localStorage.setItem("nilwireMetamask",r[0].toLowerCase()),localStorage.setItem("nilwireMetamaskAddr",r[0].toLowerCase());var n=r[0].toLowerCase();e.Set_UserAccountAddr(r[0].toLowerCase()),e.Set_WalletConnected(!0);var r=await o.eth.getAccounts(),n=r[0].toLowerCase();e.Set_Accounts(n),o.eth.getBalance(n).then(a=>(e.Set_UserAccountBal(a/1e18),h(),{address:r[0].toLowerCase(),provider:t}))}else await t.disconnect()}else if(localStorage.getItem("nilwireMetamask")&&null!=localStorage.getItem("nilwireMetamask")&&void 0!=localStorage.getItem("nilwireMetamask")&&""!=localStorage.getItem("nilwireMetamask")&&window.ethereum){var o=new(s())(window.ethereum);try{void 0!==o&&await window.ethereum.enable().then(async function(){let t=new(s())(window.web3.currentProvider);if(!0===window.web3.currentProvider.isMetaMask&&window.web3&&window.web3.eth&&window.web3.eth.defaultAccount&&window.web3.currentProvider.networkVersion==c.Z.networkVersion){var a=await t.eth.getAccounts();e.Set_UserAccountAddr(a[0].toLowerCase()),e.Set_WalletConnected(!0);var r=a[0].toLowerCase();return e.Set_Accounts(r),t.eth.getBalance(r).then(t=>{e.Set_UserAccountBal(t/1e18),h()}),{address:a[0].toLowerCase()}}})}catch(e){}}}async function h(){await g(),e.AfterWalletConnected()}async function g(){var t=await (0,u.I)();let a=new(s())(t&&t.provider&&null!=t.provider&&void 0!=t.provider&&""!=t.provider?t.provider:window.ethereum);var r=await (0,d.Et)({addr:(await a.eth.getAccounts())[0].toLowerCase()});return r&&r.data&&r.data.data?e.Set_AddressUserDetails(r.data.data.User):e.Set_AddressUserDetails({}),!0}(0,n.useEffect)(()=>{m()},[]);try{window.addEventListener("load",t=>{t.preventDefault(),window.ethereum&&(window.ethereum.on("accountsChanged",function(e){window.location.reload(!0),i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{w()},1e3)}),window.ethereum.on("networkChanged",function(t){t==c.Z.networkVersion?(window.location.reload(!0),i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{w()},1e3),e.Set_WalletConnected(!0)):e.Set_WalletConnected(!1)}))})}catch(e){}let[v,p]=n.useState(!1);var f="";let k=(0,o.TH)();k.pathname&&k.pathname.split("/").length>=2&&(f=k.pathname.split("/")[1]);let[A,b]=(0,n.useState)(f),_=e=>{};return(0,r.jsxs)("div",{children:[e.fullLoader&&(0,r.jsx)("div",{class:"loading"}),(0,r.jsx)("div",{id:"connect_Wallet_call",onClick:()=>_("metamask")})]})}a(55678).Am.configure(),c.Z.toasterOption},44997:function(e,t,a){"use strict";a.r(t),a.d(t,{LikeRef:function(){return g}});var r=a(85893),n=a(67294),o=a(37918),i=a.n(o);a(8882);var s=a(19755),l=a.n(s),c=a(6103),d=a(93451),u=a(97416),m=a(55678),w=a(72213);m.Am.configure();let h=c.Z.toasterOption,g=(0,n.forwardRef)((e,t)=>{async function a(){try{var t=await (0,u.my)();if(t){var a=await (0,d.MY)({currAddr:t});a&&a.data&&a.data.records&&e.setLikedTokenList(a.data.records)}}catch(e){}}return(0,n.useImperativeHandle)(t,()=>({async getLikesData(){a()},async hitLike(e){var t=await (0,w.I)();let r=new(i())(t&&t.provider&&null!=t.provider&&void 0!=t.provider&&""!=t.provider?t.provider:window.ethereum);if(await r.eth.getAccounts(),r&&r.eth){if(!localStorage.getItem("nilwireMetamask"))return m.Am.error("Please connect to a Metamask wallet",h),!1;var n=await (0,u.my)();console.log(n,"CurCur123456");var o=await (0,d.Ay)({currAddr:n,tokenCounts:e.tokenCounts,tokenOwner:e.tokenOwner});o&&o.data&&o.data.toast&&o.data.toast.msg&&(console.log(o.data,"resp.data-resp.data"),"success"==o.data.toast.type&&(m.Am.success(o.data.toast.msg,h),o.data.tokenData&&o.data.tokenData.record&&void 0!==o.data.tokenData.record.likecount&&l()("."+e.tokenCounts+"-likecount").html(o.data.tokenData.record.likecount))),a()}}})),(0,r.jsx)("div",{})})},20702:function(e,t,a){"use strict";a.r(t),a.d(t,{ShareNowRef:function(){return l}});var r=a(85893),n=a(67294);a(8882);var o=a(44021),i=a(6103);a(55678).Am.configure();var s=i.Z.Front_URL;let l=(0,n.forwardRef)((e,t)=>{let[a,i]=n.useState(""),[l,c]=n.useState(!1);return(0,n.useImperativeHandle)(t,()=>({async ShareSocial_Click(e){e&&e._id&&(i(s+"/item-details/"+e.tokenCounts),window.$("#share_modal").modal("show"),c(!0))}})),(0,r.jsx)("div",{children:(0,r.jsx)("div",{class:"modal fade primary_modal",id:"share_modal",tabindex:"-1",role:"dialog","aria-labelledby":"share_modalCenteredLabel","aria-hidden":"true",children:(0,r.jsx)("div",{class:"modal-dialog modal-dialog-centered modal",role:"document",children:(0,r.jsxs)("div",{class:"modal-content",children:[(0,r.jsxs)("div",{class:"modal-header text-center",children:[(0,r.jsx)("h5",{class:"modal-title",id:"share_modalLabel",children:"Share link to this page"}),(0,r.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:(0,r.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,r.jsx)("div",{class:"modal-body",children:(0,r.jsx)("div",{class:"socila_model_new",children:l&&(0,r.jsx)(o.IF,{config:{alignment:"center",color:"social",enabled:!0,font_size:16,language:"en",networks:["telegram","facebook","twitter","instagram"],padding:12,radius:4,show_total:!1,size:40,url:a,image:"https://bit.ly/2CMhCMC",description:"Nilwire",title:"Nilwire",message:"Hi visit Nilwire NFT and buy Article what You want",subject:"Hi visit Nilwire NFT and buy Article what You want",username:"NilwireNFT"}})})})]})})})})})}},function(e){e.O(0,[3592,8543,571,4885,3104,9250,3851,4593,1523,733,8930,4419,2997,9137,6748,6821,5186,5967,9774,2888,179],function(){return e(e.s=60317)}),_N_E=e.O()}]);