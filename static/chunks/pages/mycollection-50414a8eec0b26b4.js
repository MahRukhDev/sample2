(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6517],{91508:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mycollection",function(){return a(40732)}])},1974:function(){},44546:function(e,t,a){"use strict";a.r(t),t.default={src:"/_next/static/media/profile_placeholder.d158bc19.png",height:200,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAArUlEQVR42l3OvQqDMBQF4DxNKfT9t8bYCHZzENSKicXBOhTpotIk6ulVtIMfZMm5f2xz9oXwy7K0T3qBlGL5+4dpmrY4KIqiXYs8zxMg8zwbaw2GYcA4jsY5h3sY3pjW+gvSNA2iKEIcx8jzHNM0oaoqy5Qq1oJHluFV1+Cco+s6LOget6zgNB593xvq2kMDIqUMGDmlSfLGAU38UHZhmxPnV09rZbRSVggh9/AHiF2/AN+KpdMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},40732:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return T}});var r=a(85893),n=a(67294),s=a(89250),o=a(41662),i=a(81268);a(1974),a(98130);var l=a(93451),c=a(6103),d=a(97117),u=a(36748),m=a(59137),h=a(95186),f=a(80124),w=a(50686),p=a(91816),v=a(83406),_=a(20702),S=a(80471),y=a(44997),b=a(6821);a(19755);var x=a(37918),k=a.n(x);a(8882),a(30381),a(24021),a(71439);var g=a(30);a(55678);var j=a(72213),A=a(64593);a(733);var C=a(79655),N=a(97416);function O(){return(0,n.useEffect)(()=>{window.scrollTo(0,0)},[]),null}function T(){var{id:e}=(0,s.UO)();let t=new Date;11===t.getMonth()&&t.getDate(),t.getFullYear();let[x,T]=n.useState(0),[I,R]=n.useState(0),[L,B]=n.useState(0),[U,P]=n.useState(0),[M,D]=(0,n.useState)({loader:!1,All:{page:1,list:[],onmore:!0}}),[H,E]=(0,n.useState)([]),[F,W]=(0,n.useState)("All"),[Z,Y]=n.useState([]),[Q,q]=n.useState(""),[$,V]=n.useState("false"),[G,K]=n.useState(""),[z,X]=n.useState(0),[J,ee]=(0,n.useState)({}),[et,ea]=n.useState(""),[er,en]=(0,n.useState)({}),[es,eo]=(0,n.useState)([]),[ei,el]=(0,n.useState)({}),[ec,ed]=(0,n.useState)({}),[eu,em]=(0,n.useState)(0),[eh,ef]=(0,n.useState)({}),[ew,ep]=(0,n.useState)(0),[ev,e_]=(0,n.useState)(0),[eS,ey]=(0,n.useState)(0),[eb,ex]=(0,n.useState)(0),[ek,eg]=(0,n.useState)(0),[ej,eA]=(0,n.useState)(0),[eC,eN]=(0,n.useState)(0),[eO,eT]=(0,n.useState)(0),[eI,eR]=(0,n.useState)({}),[eL,eB]=(0,n.useState)(0),[eU,eP]=n.useState(0),[eM,eD]=(0,n.useState)({}),[eH,eE]=n.useState(""),[eF,eW]=n.useState([]),[eZ,eY]=(0,n.useState)(0),[eQ,eq]=(0,n.useState)("Select"),[e$,eV]=n.useState(""),[eG,eK]=n.useState(!1),[ez,eX]=n.useState([]),[eJ,e0]=n.useState("init"),[e1,e8]=n.useState("init");var e2=c.Z.Back_URL+"cover/5.jpg";let[e7,e3]=n.useState(e2),[e5,e4]=n.useState("");var e9=(0,n.useRef)(),e6=(0,n.useRef)();let te=(0,n.useRef)(),tt=(0,n.useRef)(),ta=(0,n.useRef)(),tr=(0,n.useRef)();var tn=(0,n.useRef)(),ts=(0,n.useRef)(),to=(0,n.useRef)();let ti=(0,n.useRef)();async function tl(){var t=await (0,l.Nn)({id:e,userid:localStorage.getItem("nilwireMetamaskAddr")});B(t.data.contractData),P(t.data.ownerData)}async function tc(){var t=await (0,N.my)();if(t){var a={limit:1e3,page:M[F]&&M[F].page?M[F].page:1,currAddr:t,CatName:F,id:e,from:"Home"};M.loader=!0,D(M);var r=await (0,l.EY)(a);M.loader=!1,D(M),r&&r.data&&"token-collectibles-list-home"==r.data.from&&r.data.list.length>0?(T(r.data.list),void 0===M[F]&&(M[F]={page:1,list:[]}),M[F].list=r.data.list,D([]),D(M)):(M[F].onmore=!1,D([]),D(M))}}async function td(){window.$(".modal").modal("hide"),tt.current.PutOnSale_Click(er,e5)}async function tu(){window.$(".modal").modal("hide"),ti.current.PutOnBid_Click(er,e5)}async function tm(){window.$("#option_modal").modal("show")}async function th(){try{e9&&e9.current&&e9.current.getLikesData()}catch(e){}try{eK(!0);var e=await (0,j.I)();let r=new(k())(e&&e.provider&&null!=e.provider&&void 0!=e.provider&&""!=e.provider?e.provider:window.ethereum);var t=await r.eth.getAccounts(),a=await new r.eth.Contract(g,c.Z.esctokenAddr).methods.balanceOf(t&&t[0].toLowerCase()).call()/c.Z.decimalvalues;eB(a.toFixed(c.Z.toFixed)),await tc()}catch(e){}}return(0,n.useEffect)(()=>{tc(),tl()},[]),(0,r.jsxs)("div",{id:"wrapper",children:[(0,r.jsxs)(A.q,{children:[(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("title",{children:"Nilwire - Collections"})]}),(0,r.jsx)(O,{}),(0,r.jsx)(o.Z,{}),!1==eG?(0,r.jsx)("div",{className:"loader_section_",children:(0,r.jsxs)("h2",{children:["Please Connect Wallet To Proceed Further ",(0,r.jsx)("br",{})," ",!localStorage.getItem("nilwireMetamask")&&(0,r.jsxs)(C.rU,{to:"/connect-wallet",className:"btn-main",children:[(0,r.jsx)("i",{style:{marginRight:"10px"},className:"icon_wallet_alt"}),(0,r.jsx)("span",{children:"Connect wallet"})]})]})}):(0,r.jsxs)("div",{className:"no-bottom no-top",id:"content",children:[(0,r.jsx)(S.default,{Set_UserAccountAddr:K,Set_UserAccountBal:X,Set_WalletConnected:V,Set_AddressUserDetails:ee,AddressUserDetails:J,Set_Accounts:ea,WalletConnected:$,AfterWalletConnected:th}),(0,r.jsx)(f.CancelOrderRef,{ref:ta,Set_HitItem:eD,item:eM,UserAccountAddr:G,UserAccountBal:z,Accounts:et}),(0,r.jsx)(w.BurnRef,{ref:tr,Set_HitItem:eD,item:er,Set_item:en,UserAccountAddr:G,UserAccountBal:z,TokenBalance:eL,Accounts:et}),(0,r.jsx)(y.LikeRef,{ref:e9,setLikedTokenList:Y,MyItemAccountAddr:Q}),(0,r.jsx)(_.ShareNowRef,{ref:tn}),(0,r.jsx)(p.ReportNowRef,{UserAccountAddr:G,ref:ts}),(0,r.jsx)(u.PurchaseNowRef,{ref:te,Set_HitItem:eD,item:eM,UserAccountAddr:G,UserAccountBal:z,Accounts:et,AllowedQuantity:ew,Set_AllowedQuantity:ep}),(0,r.jsx)(h.PutOnSaleRef,{ref:tt,Set_HitItem:eD,item:eM,UserAccountAddr:G,UserAccountBal:z,Accounts:et,Set_NoOfToken:eT}),(0,r.jsx)(b.PutOnBid,{ref:ti,Set_HitItem:eD,item:eM,UserAccountAddr:G,UserAccountBal:z,Accounts:et,Set_NoOfToken:eT}),(0,r.jsx)(v.TransferRef,{item:eM,ref:to}),(0,r.jsx)(m.PlaceAndAcceptBidRef,{ref:e6,Set_WalletConnected:V,Set_UserAccountAddr:K,Set_UserAccountBal:X,Set_AddressUserDetails:ee,Set_Accounts:ea,Set_MyItemAccountAddr:q,Set_tokenCounts:eg,Set_item:en,Set_tokenCounts_Detail:ed,Set_MyTokenBalance:em,Set_Bids:eo,Set_AccepBidSelect:eA,Set_tokenBidAmt:eN,Set_NoOfToken:eT,Set_ValidateError:eR,Set_TokenBalance:eB,Set_YouWillPay:e_,Set_YouWillPayFee:ey,Set_YouWillGet:ex,Set_BidApply_ApproveCallStatus:e0,Set_BidApply_SignCallStatus:e8,WalletConnected:$,UserAccountAddr:G,UserAccountBal:z,AddressUserDetails:J,Accounts:et,MyItemAccountAddr:Q,tokenCounts:ek,item:er,tokenCounts_Detail:ec,MyTokenBalance:eu,Bids:es,AccepBidSelect:ej,tokenBidAmt:eC,NoOfToken:eO,ValidateError:eI,TokenBalance:eL,YouWillPay:ev,YouWillPayFee:eS,YouWillGet:eb,BidApply_ApproveCallStatus:eJ,BidApply_SignCallStatus:e1,AllowedQuantity:ew,totaluserbidAmt:eU,setTotaluserbidAmt:eP}),(0,r.jsx)("section",{id:"profile_banner",className:"text-light",style:{backgroundImage:"url(".concat(e7,")")}}),(0,r.jsx)("section",{"aria-label":"section",className:"d_coll no-top",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsx)("div",{className:"d_profile mb-3",children:(0,r.jsxs)("div",{className:"profile_avatar",children:[(0,r.jsxs)("div",{className:"d_profile_img",children:[(0,r.jsx)("img",{src:L&&L.imageUser?c.Z.Back_URL+"collections/"+L.imageUser:a(44546),alt:""}),U&&U.isverified&&(0,r.jsx)("i",{className:"fa fa-check"})]}),(0,r.jsx)("div",{className:"profile_name",children:(0,r.jsxs)("h4",{children:[L&&L.name,(0,r.jsx)("div",{className:"clearfix"}),(0,r.jsx)("span",{id:"wallet",className:"profile_wallet",children:L&&L.conAddr}),(0,r.jsx)("button",{type:"button",id:"btn_copy",title:"Copy Text",children:"Copy"})]})})]})})}),(0,r.jsxs)("div",{className:"col-md-12",children:[(0,r.jsxs)("p",{className:"text-center w-75 mx-auto",children:[L.desc," "]}),(0,r.jsx)("div",{className:"de_tab tab_simple",children:(0,r.jsx)("div",{className:"tab-content de_tab_content",id:"nav-tabContent",children:(0,r.jsx)("div",{className:"tab-pane fade show active",id:"nav-onSale",role:"tabpanel","aria-labelledby":"nav-onSale-tab",children:(0,r.jsx)("div",{className:"row",children:x&&x.length>0&&x.map((e,t)=>(0,r.jsx)(d.default,{id:e._id,item:e,Set_item:en,LikedTokenList:Z,hitLike:e9.current.hitLike,UserAccountAddr:G,UserAccountBal:z,set_selectown:e4,popupshow:tm,PutOnSale_Click:tt.current.PutOnSale_Click,PurchaseNow_Click:te.current.PurchaseNow_Click,PlaceABid_Click:e6.current.PlaceABid_Click,Set_Bids:eo,Bids:es,Set_BuyOwnerDetailFirst:el,Set_tokenCounts_Detail:ed,Set_MyTokenBalance:em,Set_MyTokenDetail:ef,Set_TokenBalance:eB,Set_AllowedQuantity:ep,Set_YouWillPay:e_,Set_YouWillPayFee:ey,Set_YouWillGet:ex,Burn_Click:tr.current.Burn_Click,Transfer_Click:to.current.Transfer_Click,CancelOrder_Click:ta.current.CancelOrder_Click,WalletConnected:$,SubmitReport_Click:ts.current.SubmitReport_Click,ShareSocial_Click:tn.current.ShareSocial_Click,aucttype:"no",from:0}))})})})})]})]})})}),(0,r.jsx)(i.Z,{}),(0,r.jsx)("div",{className:"modal fade primary_modal","data-backdrop":"static",id:"option_modal",tabindex:"-1",role:"dialog","aria-labelledby":"option_modalCenteredLabel","aria-hidden":"true",children:(0,r.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:(0,r.jsxs)("div",{className:"modal-content",children:[(0,r.jsxs)("div",{className:"modal-header text-center",children:[(0,r.jsx)("h5",{className:"modal-title",id:"option_modalLabel",children:"Choose"}),(0,r.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,r.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,r.jsx)("div",{className:"modal-body",children:(0,r.jsxs)("form",{children:[(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)("button",{type:"button",className:"btn-main lead mar-top-10 mb-0",onClick:()=>td(),children:"Put On Sale"})}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)("button",{type:"button",className:"btn-main lead mar-top-10 mb-0",onClick:()=>tu(),children:"Put On Bid"})})]})})]})})})]})]})}},80124:function(e,t,a){"use strict";a.r(t),a.d(t,{CancelOrderRef:function(){return f}});var r=a(85893),n=a(67294);a(19755);var s=a(37918),o=a.n(s);a(8882);var i=a(24021),l=a(71439),c=a(6103),d=a(93451),u=a(72213);a(97416);var m=a(55678);m.Am.configure();let h=c.Z.toasterOption,f=(0,n.forwardRef)((e,t)=>{let[s,c]=n.useState(""),[f,w]=n.useState(0),[p,v]=n.useState(0),[_,S]=n.useState(0),[y,b]=n.useState("");async function x(){var t=await (0,u.I)();let a=new(o())(t&&t.provider&&null!=t.provider&&void 0!=t.provider&&""!=t.provider?t.provider:window.ethereum);if(await a.eth.getAccounts(),a&&a.eth){if(!localStorage.getItem("nilwireMetamask"))return window.location.href="/connect",!1;if(721==k.type){var r=new a.eth.Contract(i,k.contractAddress);c("processing"),r.methods.cancelOrder(e.item.tokenCounts).send({from:e.Accounts}).then(async t=>{c("done");var a=await (0,d.pQ)({tokenOwner:g,tokenCounts:e.item.tokenCounts,tokenPrice:f,blockHash:t.blockHash,transactionHash:t.transactionHash,BidToken:y,from:"cancel"});a.data&&a.data.RetType&&"success"==a.data.RetType&&(m.Am.success("Sale order cancelled successfully",h),window.$(".modal").modal("hide"),setTimeout(()=>{window.location.reload(!1)},1500))}).catch(e=>{c("error"),m.Am.error("Transaction rejected by user",h)})}else{var r=new a.eth.Contract(l,k.contractAddress);c("processing"),r.methods.cancelOrder(e.item.tokenCounts).send({from:e.Accounts}).then(async t=>{c("done");var a=await (0,d.pQ)({tokenOwner:g,tokenCounts:e.item.tokenCounts,tokenPrice:f,blockHash:t.blockHash,transactionHash:t.transactionHash,BidToken:y,from:"cancel"});a.data&&a.data.RetType&&"success"==a.data.RetType&&(m.Am.success("Sale order cancelled successfully",h),window.$(".modal").modal("hide"),setTimeout(()=>{window.location.reload(!1)},1500))}).catch(e=>{c("error"),m.Am.error("Transaction rejected by user",h)})}}}var{item:k,UserAccountAddr:g}=e;return(0,n.useImperativeHandle)(t,()=>({async CancelOrder_Click(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log(t,"ii"),e.Set_HitItem(t),w(0),console.log(t,"===============",a,"=============froncancelorder");let r=t&&t.OnSaleOwner&&t.OnSaleOwner.findIndex(e=>e.tokenOwner.toString()==g.toString());S(parseInt(r)>=0&&t.OnSaleOwner[r]&&t.OnSaleOwner[r].price?t.OnSaleOwner[r].price:t.tokenowners_current&&t.tokenowners_current.price?t.tokenowners_current.price:t.price),v(a),b(a.currency),window.$("#cancel_order_modal").modal("show")}})),console.log(k,"=========fromcancelorder"),(0,r.jsxs)("div",{children:["processing"==s&&(0,r.jsx)("div",{className:"transLoading",children:(0,r.jsx)("img",{src:a(6514),className:"img-fluid",alt:""})}),(0,r.jsxs)("div",{class:"modal fade primary_modal",id:"cancel_order_modal","data-backdrop":"static",tabindex:"-1",role:"dialog","aria-labelledby":"cancel_order_modalCenteredLabel","aria-hidden":"true","data-keyboard":"false",children:[(0,r.jsx)("div",{class:"modal-dialog modal-dialog-centered modal-sm",role:"document",children:(0,r.jsxs)("div",{class:"modal-content",children:[(0,r.jsxs)("div",{class:"modal-header text-center",children:[(0,r.jsx)("h5",{class:"modal-title",id:"cancel_order_modalLabel",children:"Cancel Sale Order"}),(0,r.jsx)("p",{className:"text_grey_clickb mb-0"}),(0,r.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:(0,r.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,r.jsx)("div",{class:"modal-body px-0 pt-0",children:(0,r.jsxs)("form",{className:"px-4 bid_form",children:[(0,r.jsxs)("div",{className:"row pb-2",children:[(0,r.jsx)("div",{className:"col-12 col-sm-6",children:(0,r.jsx)("p",{className:"buy_desc_sm",children:"Token Price"})}),(0,r.jsx)("div",{className:"col-12 col-sm-6 text-sm-right",children:(0,r.jsxs)("p",{className:"buy_desc_sm_bold",children:[_," ",y]})})]}),(0,r.jsx)("div",{className:"text-center mt-3",children:(0,r.jsxs)("button",{className:"btn-main lead mar-top-10",type:"button",onClick:()=>x(),disabled:"processing"==s,children:["processing"==s&&(0,r.jsx)("i",{class:"fa fa-spinner mr-3 spinner_icon","aria-hidden":"true",id:"circle1"}),"Continue"]})})]})})]})}),(0,r.jsx)("div",{className:"text-center mt-3",children:(0,r.jsxs)("button",{className:"btn-main lead mar-top-10","data-dismiss":"modal",type:"button","aria-label":"Close",children:["processing"==s&&(0,r.jsx)("i",{class:"fa fa-spinner mr-3 spinner_icon","aria-hidden":"true",id:"circle1"}),"Sign sell order"]})})]})]})})},80471:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var r=a(85893),n=a(67294),s=a(89250),o=a(37918),i=a.n(o);a(8882);var l=a(74845);a(19755);var c=a(6103);a(93451);var d=a(97416),u=a(72213);function m(e){let{...t}=e,{WalletConnected:a}=e,o=(0,n.useRef)(null);async function m(){h()}async function h(){if(window.$(".modal").modal("hide"),localStorage.getItem("walltype")&&null!=localStorage.getItem("walltype")&&void 0!=localStorage.getItem("walltype")&&""!=localStorage.getItem("walltype")&&"trust"==localStorage.getItem("walltype")&&localStorage.getItem("nilwireMetamask")&&null!=localStorage.getItem("nilwireMetamask")&&void 0!=localStorage.getItem("nilwireMetamask")&&""!=localStorage.getItem("nilwireMetamask")){var t=new l.Z({rpc:{[c.Z.livechainid]:c.Z.liverpcUrls},chainId:c.Z.livechainid});t.on("connect",()=>{}),await t.enable();let s=new(i())(t);var a=await s.eth.net.getId(),r=await s.eth.getAccounts();if(c.Z.livechainid==a){localStorage.setItem("walltype","trust"),localStorage.setItem("nilddsbashyujsd","yes"),localStorage.setItem("nilwireMetamask",r[0].toLowerCase()),localStorage.setItem("nilwireMetamaskAddr",r[0].toLowerCase());var n=r[0].toLowerCase();e.Set_UserAccountAddr(r[0].toLowerCase()),e.Set_WalletConnected(!0);var r=await s.eth.getAccounts(),n=r[0].toLowerCase();e.Set_Accounts(n),s.eth.getBalance(n).then(a=>(e.Set_UserAccountBal(a/1e18),f(),{address:r[0].toLowerCase(),provider:t}))}else await t.disconnect()}else if(localStorage.getItem("nilwireMetamask")&&null!=localStorage.getItem("nilwireMetamask")&&void 0!=localStorage.getItem("nilwireMetamask")&&""!=localStorage.getItem("nilwireMetamask")&&window.ethereum){var s=new(i())(window.ethereum);try{void 0!==s&&await window.ethereum.enable().then(async function(){let t=new(i())(window.web3.currentProvider);if(!0===window.web3.currentProvider.isMetaMask&&window.web3&&window.web3.eth&&window.web3.eth.defaultAccount&&window.web3.currentProvider.networkVersion==c.Z.networkVersion){var a=await t.eth.getAccounts();e.Set_UserAccountAddr(a[0].toLowerCase()),e.Set_WalletConnected(!0);var r=a[0].toLowerCase();return e.Set_Accounts(r),t.eth.getBalance(r).then(t=>{e.Set_UserAccountBal(t/1e18),f()}),{address:a[0].toLowerCase()}}})}catch(e){}}}async function f(){await w(),e.AfterWalletConnected()}async function w(){var t=await (0,u.I)();let a=new(i())(t&&t.provider&&null!=t.provider&&void 0!=t.provider&&""!=t.provider?t.provider:window.ethereum);var r=await (0,d.Et)({addr:(await a.eth.getAccounts())[0].toLowerCase()});return r&&r.data&&r.data.data?e.Set_AddressUserDetails(r.data.data.User):e.Set_AddressUserDetails({}),!0}(0,n.useEffect)(()=>{m()},[]);try{window.addEventListener("load",t=>{t.preventDefault(),window.ethereum&&(window.ethereum.on("accountsChanged",function(e){window.location.reload(!0),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{h()},1e3)}),window.ethereum.on("networkChanged",function(t){t==c.Z.networkVersion?(window.location.reload(!0),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{h()},1e3),e.Set_WalletConnected(!0)):e.Set_WalletConnected(!1)}))})}catch(e){}let[p,v]=n.useState(!1);var _="";let S=(0,s.TH)();S.pathname&&S.pathname.split("/").length>=2&&(_=S.pathname.split("/")[1]);let[y,b]=(0,n.useState)(_),x=e=>{};return(0,r.jsxs)("div",{children:[e.fullLoader&&(0,r.jsx)("div",{class:"loading"}),(0,r.jsx)("div",{id:"connect_Wallet_call",onClick:()=>x("metamask")})]})}a(55678).Am.configure(),c.Z.toasterOption},44997:function(e,t,a){"use strict";a.r(t),a.d(t,{LikeRef:function(){return w}});var r=a(85893),n=a(67294),s=a(37918),o=a.n(s);a(8882);var i=a(19755),l=a.n(i),c=a(6103),d=a(93451),u=a(97416),m=a(55678),h=a(72213);m.Am.configure();let f=c.Z.toasterOption,w=(0,n.forwardRef)((e,t)=>{async function a(){try{var t=await (0,u.my)();if(t){var a=await (0,d.MY)({currAddr:t});a&&a.data&&a.data.records&&e.setLikedTokenList(a.data.records)}}catch(e){}}return(0,n.useImperativeHandle)(t,()=>({async getLikesData(){a()},async hitLike(e){var t=await (0,h.I)();let r=new(o())(t&&t.provider&&null!=t.provider&&void 0!=t.provider&&""!=t.provider?t.provider:window.ethereum);if(await r.eth.getAccounts(),r&&r.eth){if(!localStorage.getItem("nilwireMetamask"))return m.Am.error("Please connect to a Metamask wallet",f),!1;var n=await (0,u.my)();console.log(n,"CurCur123456");var s=await (0,d.Ay)({currAddr:n,tokenCounts:e.tokenCounts,tokenOwner:e.tokenOwner});s&&s.data&&s.data.toast&&s.data.toast.msg&&(console.log(s.data,"resp.data-resp.data"),"success"==s.data.toast.type&&(m.Am.success(s.data.toast.msg,f),s.data.tokenData&&s.data.tokenData.record&&void 0!==s.data.tokenData.record.likecount&&l()("."+e.tokenCounts+"-likecount").html(s.data.tokenData.record.likecount))),a()}}})),(0,r.jsx)("div",{})})},91816:function(e,t,a){"use strict";a.r(t),a.d(t,{ReportNowRef:function(){return o}});var r=a(85893),n=a(67294);a(8882);var s=a(6103);a(55678).Am.configure(),s.Z.toasterOption;let o=(0,n.forwardRef)((e,t)=>{let[a,s]=n.useState(""),[o,i]=n.useState({}),[l,c]=n.useState(""),[d,u]=n.useState(""),[m,h]=n.useState(!1);var{UserAccountAddr:f}=e;return(0,n.useImperativeHandle)(t,()=>({async SubmitReport_Click(e){e&&e._id&&(c(e._id),u(e.tokenCounts),window.$("#report_modal").modal("show"))}})),(0,r.jsx)("div",{children:(0,r.jsx)("div",{class:"modal report primary_modal",id:"social",children:(0,r.jsx)("div",{class:"modal-dialog modal-dialog-centered",children:(0,r.jsxs)("div",{class:"modal-content",children:[(0,r.jsxs)("div",{class:"modal-header",children:[(0,r.jsx)("h4",{class:"modal-title",children:"Share link"}),(0,r.jsx)("button",{type:"button",class:"close","data-dismiss":"modal",children:"\xd7"})]}),(0,r.jsx)("div",{class:"modal-body",children:(0,r.jsxs)("div",{className:"social_icons_section",children:[(0,r.jsx)("a",{href:"",children:(0,r.jsx)("i",{class:"fab fa-facebook"})}),(0,r.jsx)("a",{href:"",children:(0,r.jsx)("i",{class:"fab fa-twitter"})})]})})]})})})})})},20702:function(e,t,a){"use strict";a.r(t),a.d(t,{ShareNowRef:function(){return l}});var r=a(85893),n=a(67294);a(8882);var s=a(44021),o=a(6103);a(55678).Am.configure();var i=o.Z.Front_URL;let l=(0,n.forwardRef)((e,t)=>{let[a,o]=n.useState(""),[l,c]=n.useState(!1);return(0,n.useImperativeHandle)(t,()=>({async ShareSocial_Click(e){e&&e._id&&(o(i+"/item-details/"+e.tokenCounts),window.$("#share_modal").modal("show"),c(!0))}})),(0,r.jsx)("div",{children:(0,r.jsx)("div",{class:"modal fade primary_modal",id:"share_modal",tabindex:"-1",role:"dialog","aria-labelledby":"share_modalCenteredLabel","aria-hidden":"true",children:(0,r.jsx)("div",{class:"modal-dialog modal-dialog-centered modal",role:"document",children:(0,r.jsxs)("div",{class:"modal-content",children:[(0,r.jsxs)("div",{class:"modal-header text-center",children:[(0,r.jsx)("h5",{class:"modal-title",id:"share_modalLabel",children:"Share link to this page"}),(0,r.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:(0,r.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,r.jsx)("div",{class:"modal-body",children:(0,r.jsx)("div",{class:"socila_model_new",children:l&&(0,r.jsx)(s.IF,{config:{alignment:"center",color:"social",enabled:!0,font_size:16,language:"en",networks:["telegram","facebook","twitter","instagram"],padding:12,radius:4,show_total:!1,size:40,url:a,image:"https://bit.ly/2CMhCMC",description:"Nilwire",title:"Nilwire",message:"Hi visit Nilwire NFT and buy Article what You want",subject:"Hi visit Nilwire NFT and buy Article what You want",username:"NilwireNFT"}})})})]})})})})})},83406:function(e,t,a){"use strict";a.r(t),a.d(t,{TransferRef:function(){return w}});var r=a(85893),n=a(67294);a(19755);var s=a(37918),o=a.n(s);a(8882);var i=a(6103),l=a(24021),c=a(71439);a(30);var d=a(72213),u=a(93451),m=a(97416),h=a(55678);h.Am.configure();let f=i.Z.toasterOption,w=(0,n.forwardRef)((e,t)=>{let[s,i]=n.useState(e.item),[w,p]=(0,n.useState)(0),[v,_]=(0,n.useState)(0),[S,y]=(0,n.useState)(0),[b,x]=(0,n.useState)(""),[k,g]=(0,n.useState)({}),[j,A]=(0,n.useState)(),C=e=>{if(e&&e.target&&void 0!==e.target.value&&e.target.name){var t=e.target.value;switch(e.target.name){case"NoOfToken":p(t);break;case"toaddress":_(t)}}},N=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var t,a={},r=0;s&&s.tokenowners_current&&s.tokenowners_current.balance&&(r=s.tokenowners_current.balance);var n=void 0!==e.quantity?e.quantity:w;if(console.log(typeof n,"quantityquantity"),""==n?a.NoOfToken='"Quantity" is not allowed to be empty':0>=parseFloat(n)?a.NoOfToken='"Quantity" must be greater than 0':!0==isNaN(n)&&(a.NoOfToken='"Quantity" must be a number'),n>r&&(a.NoOfToken='"Quantity" must be below on '+r),t=parseFloat(n),/^-?[0-9]+$/.test(t)||(a.NoOfToken='"Quantity" must be a Integer'),""==v)a.toaddress='"To Addresss" is not allowed to be empty';else{var i=await (0,d.I)();let e=new(o())(i&&i.provider&&null!=i.provider&&void 0!=i.provider&&""!=i.provider?i.provider:window.ethereum);!1==e.utils.isAddress(v)&&(a.toaddress='"Please enter valid address')}return g(a),a};async function O(){if(0!=Object.keys(await N()).length)return h.Am.error("Please fill all the required fields",f),!1;x("processing");var e=await (0,d.I)();let t=new(o())(e&&e.provider&&null!=e.provider&&void 0!=e.provider&&""!=e.provider?e.provider:window.ethereum);var a=await t.eth.getAccounts();if(a[0].toLowerCase()!=v.toLowerCase()){if(721==s.type){let e=new t.eth.Contract(l,s.contractAddress);e.methods.safeTransferFrom(s.tokenowners_current.tokenOwner,v,s.tokenCounts).send({from:a[0].toLowerCase()}).then(async e=>{x("done");var t={tokenOwner:s.tokenowners_current.tokenOwner,UserAccountAddr:v.toLowerCase(),tokenCounts:s.tokenCounts,tokenType:s.type,NoOfToken:721==s.type?1:w,transactionHash:e.transactionHash,PurchaseCurrency:j,transfer:!0};console.log(t,"POstDatatatat");var a=await (0,u.Xr)(t);a.data&&a.data.toast&&"success"==a.data.toast.type&&(h.Am.success("NFT transferred succesfully",f),window.$(".transfer_sale_modal").modal("hide"),setTimeout(()=>{window.location.reload(!1)},2e3))}).catch(e=>{x("error"),h.Am.error("Transaction rejected by user",f)})}else{let e=new t.eth.Contract(c,s.contractAddress);e.methods.safeTransferFrom(s.tokenowners_current.tokenOwner,v,s.tokenCounts,w,"0x").send({from:a[0].toLowerCase()}).then(async e=>{x("done");var t=await (0,u.Xr)({tokenOwner:s.tokenowners_current.tokenOwner,UserAccountAddr:v.toLowerCase(),tokenCounts:s.tokenCounts,tokenType:s.type,NoOfToken:721==s.type?1:w,transactionHash:e.transactionHash,PurchaseCurrency:j,transfer:!0});t.data&&t.data.toast&&"success"==t.data.toast.type&&(h.Am.success("Successfully transfered",f),window.$(".transfer_sale_modal").modal("hide"),setTimeout(()=>{window.location.reload(!1)},2e3))}).catch(e=>{x("error"),h.Am.error("Transaction rejected by user",f)})}}else x("error"),h.Am.error("Owner Address and Entered Address are same, Please Check ",f)}(0,n.useImperativeHandle)(t,()=>({async Transfer_Click(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(await (0,m.my)(),!localStorage.getItem("nilwireMetamask"))return h.Am.error("Please connect to a Metamask wallet",f),!1;p(1),i(e),A(t.currency),y(t),window.$("#transfer_sale_modal").modal("show")}}));let T=()=>{p(""),_("")};return(0,r.jsxs)("div",{children:["processing"==b&&(0,r.jsx)("div",{className:"transLoading",children:(0,r.jsx)("img",{src:a(6514),className:"img-fluid",alt:""})}),(0,r.jsx)("div",{class:"modal fade primary_modal",id:"transfer_sale_modal",tabindex:"-1",role:"dialog","data-backdrop":"static","aria-labelledby":"transfer_sale_modalCenteredLabel","aria-hidden":"true",children:(0,r.jsx)("div",{class:"modal-dialog modal-dialog-centered",role:"document",children:(0,r.jsxs)("div",{class:"modal-content",id:"hide",children:[(0,r.jsxs)("div",{class:"modal-header text-center",children:[(0,r.jsx)("h5",{class:"modal-title",id:"transfer_sale_modalLabel_1",children:"Transfer NFT"}),(0,r.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:(0,r.jsx)("span",{"aria-hidden":"true",onClick:T,children:"\xd7"})})]}),(0,r.jsxs)("div",{class:"modal-body",children:[(0,r.jsx)("p",{className:"text-center place_bit_desc text-light mb-0",children:"You are about to Transfer Nft"}),(0,r.jsxs)("p",{className:"place_bit_desc_2 text-center",children:[(0,r.jsx)("span",{className:"text-muted",children:"from"})," ",(0,r.jsx)("span",{className:"text-light ml-2",children:(0,m.UD)(localStorage.getItem("nilwireMetamask"))})]}),(0,r.jsx)("p",{className:"place_bit_desc_2 text-center",children:s&&s.tokenowners_current&&s.tokenowners_current.balance?"Available : "+s.tokenowners_current.balance:"Available : 0"}),(0,r.jsx)("div",{className:"update_cover_div_2",id:"update_cover_div_2",children:(0,r.jsxs)("form",{className:"form-border",children:[(0,r.jsxs)("div",{className:"form-group formSkew",children:[(0,r.jsx)("div",{className:"input-group",children:(0,r.jsx)("input",{type:"text",name:"toaddress",id:"toaddress",onChange:C,placeholder:"To Addresss",className:"form-control"})}),k.toaddress&&(0,r.jsx)("span",{className:"text-danger",children:k.toaddress})]}),(0,r.jsxs)("div",{className:"form-group formSkew",children:[721!=S.type&&(0,r.jsx)("div",{className:"input-group",children:(0,r.jsx)("input",{type:"number",name:"NoOfToken",id:"NoOfToken",onKeyDown:e=>["e","E","+","-",",","."].includes(e.key)&&e.preventDefault(),onChange:C,placeholder:"Enter the item quantity",value:w,className:"form-control"})}),k.NoOfToken&&(0,r.jsx)("span",{className:"text-danger",children:k.NoOfToken})]}),(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsxs)("button",{className:"create_btn me-3",type:"button",onClick:()=>O(),disabled:"processing"==b,children:["processing"==b&&(0,r.jsx)("i",{class:"fa fa-spinner mr-3 spinner_icon","aria-hidden":"true",id:"circle1"}),"Transfer"]}),(0,r.jsx)("button",{className:"btn-main btnGrey lead","data-dismiss":"modal",type:"button",children:"Cancel"})]})]})})]})]})})})]})})},44021:function(e,t,a){"use strict";t.IF=void 0;var r,n=(r=a(67294))&&r.__esModule?r:{default:r};function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var c=function(e,t){var a=e.props.config||{enabled:!0};a=JSON.parse(JSON.stringify(a));var r=window.onShareThisLoaded;if(window.onShareThisLoaded=function n(){if(!n.complete){if(!a.id){var s="sharethis-"+Date.now();a.id=s}e.buttons.current&&(e.buttons.current.id=a.id,window.__sharethis__.load(t,a)),r&&r(),n.complete=!0}},document.getElementById("sharethis-js"))window.__sharethis__&&window.onShareThisLoaded();else{var n=document.createElement("script");n.setAttribute("id","sharethis-js");var s={property:a.property||"",product:t,source:"reactjs"},o=Object.keys(s).map(function(e){return e+"="+s[e]}).join("&");n.src="https://platform-api.sharethis.com/js/sharethis.js?"+o,n.async=!0,document.body.appendChild(n)}},d=(n.default.Component,function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(h,e);var t,a,r,d,u,m=(t=h,a=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r,n=l(t);if(a){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(e=r)&&("object"===s(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function h(e){var t;return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,h),(t=m.call(this,e)).buttons=n.default.createRef(),t}return r=h,d=[{key:"componentDidMount",value:function(){c(this,"inline-share-buttons")}},{key:"render",value:function(){return n.default.createElement("div",{ref:this.buttons})}}],o(r.prototype,d),u&&o(r,u),h}(n.default.Component));t.IF=d,n.default.Component,n.default.Component}},function(e){e.O(0,[3592,8543,571,4885,3104,9250,3851,4593,1523,7792,733,4419,2997,9137,6748,6821,5186,686,7117,9774,2888,179],function(){return e(e.s=91508)}),_N_E=e.O()}]);