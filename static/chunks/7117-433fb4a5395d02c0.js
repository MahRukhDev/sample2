"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7117],{25184:function(e,n,t){t.d(n,{x:function(){return o}});var r=t(55678);function o(e,n,t){"error"===e?r.Am.error(n,{autoClose:2e3,toastId:t,position:r.Am.POSITION.TOP_RIGHT}):"success"===e&&r.Am.success(n,{autoClose:2e3,toastId:t,position:r.Am.POSITION.TOP_RIGHT})}t(57134)},97117:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(85893),o=t(67294),a=t(98130);t(25184);var s=t(6103);t(35498);var c=t(81146),i=t(97416),l=t(93451);let d=t(30381);s.Z.IPFS_IMG;let u=new Date;function k(e){let[n,t]=(0,o.useState)(0),[u,k]=(0,o.useState)(1);async function _(e){m({curAddr:await (0,i.my)(),tokenCounts:e.tokenCounts})}(0,o.useEffect)(()=>{},[]);let m=async e=>{var n=await (0,i.my)(),t=await (0,l.u7)(e);if(t&&t&&t.data&&t.data.Detail&&t.data.Detail.Resp){var r=t.data.Detail.Resp;if(r&&r.Token&&r.Token[0]&&r.Token[0].tokenowners_current)for(let e=0;e<r.Token[0].tokenowners_current.length;e++){let t=r.Token[0].tokenowners_current[e];if(t.balance>0&&t.tokenPrice>0&&t.tokenOwner!=n){I(t);break}}A(r),r.Bids&&L(r.Bids);var o=-1;if(r.Token[0].tokenowners_all&&n){var a=r.Token[0].tokenowners_all;o=a.findIndex(e=>e.tokenOwner.toString()==n.toString())}var s=0;o>-1?(R(s=a[o].balance),Z(a[o])):(s=0,R(0),Z({})),r.TotalQuantity?B(parseInt(r.TotalQuantity)-parseInt(s)):B(0),r.Token&&r.Token[0]&&F(r.Token[0])}};var{item:w,LikedTokenList:p,hitLike:f,UserAccountAddr:h,UserAccountBal:x,PutOnSale_Click:j,PlaceABid_Click:y,PurchaseNow_Click:T,Burn_Click:v,Transfer_Click:O,CancelOrder_Click:b,WalletConnected:N,ShareSocial_Click:g,SubmitReport_Click:P,Tattoorequest_Click:S,TokenBalance:C,Set_item:F,Set_Bids:L,Set_BuyOwnerDetailFirst:I,Set_tokenCounts_Detail:A,Set_MyTokenBalance:U,Set_TokenBalance:R,Set_MyTokenDetail:Z,Set_AllowedQuantity:B,Bids:Q,from:D}=e;console.log(p,"============LikedTokenListLikedTokenListLikedTokenListLikedTokenList");let q=e=>{let{days:n,Month:t,Year:o,hours:a,minutes:s,seconds:c,completed:i}=e;return i?(0,r.jsxs)("span",{children:[" ",n,"d ",a,"h ",s,"m ",c,"s left"]}):(0,r.jsxs)("span",{children:[n,"d ",a,"h ",s,"m ",c,"s to start"]})},z=e=>{let{days:n,Month:t,Year:o,hours:a,minutes:s,seconds:c,completed:i}=e;return i?(0,r.jsx)("span",{children:"Ended"}):(0,r.jsxs)("span",{children:[n,"d ",a,"h ",s,"m ",c,"s left"]})};var E=new Date(w.clocktime),M=new Date(w.endclocktime),G="false",H="",$="true",Y=0;if(w&&w.tokenowners_all&&w.tokenowners_all.length>0){let e=w.tokenowners_all.findIndex(e=>e.tokenOwner==h);w.tokenowners_all[e]}if(721==w.type&&"TimedAuction"==w.PutOnSaleType){G="true";var J=d(w.clocktime),K=d(w.endclocktime),V=d();J.diff(K);var W=J.diff(V);console.log(H=K.diff(V),"FFFFF"),parseFloat(W),Y=J.diff(V),$=H>0?"true":"false"}async function X(n,t){e.Set_item(n),e.set_selectown(t),e.popupshow()}function ee(e){var n=0>+e?"-":"",t=e.toString();if(!/e/i.test(t))return e;var[r,o,a]=e.toString().replace(/^-/,"").replace(/^([0-9]+)(e.*)/,"$1.$2").split(/e|\./);return 0>+a?n+"0."+"0".repeat(Math.max(Math.abs(a)-1||0,0))+r+o:n+r+(+a>=o.length?o+"0".repeat(Math.max(+a-o.length||0,0)):o.slice(0,+a)+"."+o.slice(+a))}return w&&w.Tattoorequest&&w.Tattoorequest.length>0&&h&&null!=h&&void 0!=h&&""!=h&&w.Tattoorequest.filter(e=>e.useraddress==h),console.log(w,"=============================itemitemitemitemitemitemitemitemitem"),w&&w.tokenowners_current&&D!=w.tokenCounts&&e.aucttype&&"yes"==e.aucttype&&("TimedAuction"==w.PutOnSaleType&&"true"==$&&Y<=0||w&&"TimedAuction"==w.PutOnSaleType&&"true"==$&&Y>0||"false"==$&&"true"==G)||e.aucttype&&"no"==e.aucttype?(0,r.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-6 col-xs-12 d-flex",children:(0,r.jsxs)("div",{className:"nft__item style-2 flex-fill",children:[(0,r.jsxs)("div",{className:"authorLikeTop",children:[(0,r.jsx)("div",{className:"author_list_pp",children:w.tokenOwnerInfo&&w.tokenOwnerInfo.curraddress&&w.tokenOwnerInfo.image?(0,r.jsxs)("a",{href:"".concat(s.Z.Front_URL,"/user/").concat(w.tokenOwnerInfo.curraddress),children:[(0,r.jsx)("img",{className:"lazy",src:"".concat(s.Z.Back_URL,"profile/").concat(w.tokenOwnerInfo.image),alt:""}),w.tokenOwnerInfo.isverified&&(0,r.jsx)("i",{className:"fa fa-check"})]}):(0,r.jsxs)("a",{href:"".concat(s.Z.Front_URL,"/user/").concat(w.tokenOwnerInfo.curraddress),children:[(0,r.jsx)("img",{className:"lazy",src:"".concat(s.Z.Back_URL,"images/previewThumb.png"),alt:""}),w.tokenOwnerInfo.isverified&&(0,r.jsx)("i",{className:"fa fa-check"})]})}),(0,r.jsxs)("div",{className:"nft__item_like",children:[p.findIndex(e=>e.tokenCounts===w.tokenCounts)>-1?(0,r.jsx)("i",{className:"fa fa-heart liked",onClick:()=>f(w),style:{cursor:"pointer"}}):(0,r.jsx)("i",{className:"far fa-heart ",onClick:()=>f(w),style:{cursor:"pointer"}}),(0,r.jsx)("span",{class:w.tokenCounts+"-likecount mr-2",children:w.likecount})]})]}),(0,r.jsxs)("div",{className:"nft__item_wrap",children:["TimedAuction"==w.PutOnSaleType&&Y<=0&&(0,r.jsx)("div",{className:"de_countdown",children:(0,r.jsx)(a.ZP,{date:M,autoStart:!0,onStart:()=>E,renderer:z})}),"TimedAuction"==w.PutOnSaleType&&Y>0&&(0,r.jsx)("div",{className:"de_countdown",children:(0,r.jsx)(a.ZP,{date:E,autoStart:!0,onStart:()=>Date.now(),renderer:q})}),(0,r.jsx)("a",{href:"".concat(s.Z.Front_URL,"/item-details/").concat(w.tokenCounts),children:"mp4"==w.image.split(".").pop()?(0,r.jsx)("video",{src:"".concat(s.Z.Back_URL,"nftImg/").concat(w.tokenCreatorInfo.curraddress,"/").concat(w.image),type:"video/mp4",alt:"Collections",className:"lazy nft__item_preview nft__item_preview_video",controls:!0,controlsList:"nodownload"}):"mp3"==w.image.split(".").pop()||"wav"==w.image.split(".").pop()?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("img",{src:"".concat(s.Z.Back_URL,"/images/music.png"),alt:"",className:"lazy nft__item_preview"})}):(0,r.jsx)("img",{src:"".concat(s.Z.Back_URL,"nftImg/").concat(w.tokenCreatorInfo.curraddress,"/").concat(w.image),alt:"Collections",className:"lazy nft__item_preview"})})]}),w&&w.image&&"mp3"==w.image.split(".").pop()||"wav"==w.image.split(".").pop()?(0,r.jsx)("audio",{controlsList:"nodownload",src:"".concat(s.Z.Back_URL,"nftImg/").concat(w.tokenCreatorInfo.curraddress,"/").concat(w.image),type:"audio/mp3",controls:!0,className:"audio audio_widyth"}):"",(0,r.jsxs)("div",{className:"nft__item_info",children:[(0,r.jsxs)("div",{className:"flex_between_s",children:[(0,r.jsx)("a",{href:"".concat(s.Z.Front_URL,"/item-details/").concat(w.tokenCounts),children:(0,r.jsx)("div",{children:(0,r.jsx)("h4",{children:w.tokenName})})}),(0,r.jsxs)("div",{class:"dropdown",onClick:()=>_(w),children:[(0,r.jsxs)("a",{class:" dropdown-toggle",type:"button","data-toggle":"dropdown",children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)("span",{class:"caret"})]}),(0,r.jsxs)("ul",{class:"dropdown-menu dropdown-menu-right",children:[!0==N&&w.tokenowners_current&&"FixedPrice"==w.PutOnSaleType&&w.tokenowners_current.price>parseFloat(0)&&w.tokenowners_current.tokenOwner&&w.tokenowners_current.tokenOwner!=h&&(0,r.jsx)("li",{onClick:()=>T(w,w.tokenowners_current),children:(0,r.jsx)("a",{href:"javascript:void(0);",children:"Buy now"})}),!0==N&&w.tokenowners_current&&w.tokenowners_current.tokenOwner&&w.tokenowners_current.balance>0&&w.tokenowners_current.tokenOwner==h&&721==w.type?(0,r.jsx)("li",{onClick:w.tokenowners_current.price>parseFloat(0)?()=>j(w,w.tokenowners_current):()=>X(w,w.tokenowners_current),children:(0,r.jsx)("a",{href:"javascript:void(0);",children:w.tokenowners_current.price>parseFloat(0)?"Change Price":"Put on sale"})}):!0==N&&w.tokenowners_current&&w.tokenowners_current.tokenOwner&&w.tokenowners_current.balance>0&&w.tokenowners_current.tokenOwner==h&&(0,r.jsx)("li",{onClick:()=>j(w,w.tokenowners_current),children:(0,r.jsx)("a",{href:"javascript:void(0);",children:w.tokenowners_current.price>parseFloat(0)?"Change Price":"Put on sale"})}),!0==N&&w.tokenowners_current&&w.tokenowners_current.tokenOwner&&w.tokenowners_current.balance>0&&w.tokenowners_current.tokenOwner==h&&(0,r.jsx)("li",{onClick:()=>O(w,w.tokenowners_current),children:(0,r.jsx)("a",{href:"javascript:void(0);",children:"Transfer"})}),!0==N&&w.tokenowners_current&&("FixedPrice"==w.PutOnSaleType||"TimedAuction"==w.PutOnSaleType||"UnLimitedAuction"==w.PutOnSaleType)&&w.tokenowners_current.tokenOwner&&w.tokenowners_current.balance>0&&w.tokenowners_current.tokenOwner==h&&(0,r.jsx)("li",{onClick:()=>v(w,w.tokenowners_current),children:(0,r.jsx)("a",{href:"javascript:void(0);",children:"Burn"})}),!0==N&&w.tokenowners_current&&w.tokenowners_current.tokenOwner&&w.tokenowners_current.tokenOwner==h&&w.tokenowners_current.balance>0&&w.tokenowners_current.price>0&&(0,r.jsx)("li",{onClick:()=>b(w,w.tokenowners_current),children:(0,r.jsx)("a",{href:"javascript:void(0);",children:"Cancel Sale Order"})}),!0==N&&w.tokenowners_current&&"true"==$&&("FixedPrice"==w.PutOnSaleType||"TimedAuction"==w.PutOnSaleType&&Y<=0||"UnLimitedAuction"==w.PutOnSaleType)&&w.tokenowners_current.tokenOwner&&w.tokenowners_current.tokenOwner!=h&&Q&&Q.myBid&&!Q.myBid.status?(0,r.jsx)("li",{onClick:()=>y(w),children:(0,r.jsx)("a",{href:"javascript:void(0);",children:"Place a bid"})}):Q&&Q.myBid&&Q.myBid.status&&"true"==$&&"pending"==Q.myBid.status&&("FixedPrice"==w.PutOnSaleType||"TimedAuction"==w.PutOnSaleType&&Y<=0||"UnLimitedAuction"==w.PutOnSaleType)&&w.tokenowners_current.tokenOwner&&w.tokenowners_current.tokenOwner!=h?(0,r.jsx)("li",{onClick:()=>y(w),children:(0,r.jsx)("a",{href:"javascript:void(0);",children:"Edit bid"})}):(0,r.jsx)("div",{}),(0,r.jsx)("li",{onClick:()=>g(w),children:(0,r.jsx)("a",{href:"javascript:void(0);",children:"Share"})}),!0==N&&w.tokenowners_current&&w.tokenowners_current.tokenOwner&&w.tokenowners_current.tokenOwner!=h&&(0,r.jsx)("li",{"data-toggle":"modal","data-target":"#report",children:(0,r.jsx)("a",{children:"Report"})})]})]})]}),"FixedPrice"==w.PutOnSaleType&&w&&w.tokenowners_current&&w.tokenowners_current.price>0?(0,r.jsxs)("div",{className:"nft__item_price",children:[w&&w.tokenowners_current&&ee(parseFloat(w.tokenowners_current.price))," ",w.tokenowners_current.currency,(0,r.jsx)("span",{children:""!=w.TabName&&("onsale"==w.TabName||"created"==w.TabName||"owned"==w.TabName)?w.tokenowners_my_balance+" of "+w.tokenowners_my_quantity:(w.TabName,w.tokenowners_all_balance+" of "+w.tokenQuantity)})]}):"FixedPrice"==w.PutOnSaleType?(0,r.jsxs)("div",{className:"nft__item_price",children:["Unlisted 0.00 ",w.tokenowners_current.currency,(0,r.jsx)("span",{children:""!=w.TabName&&("onsale"==w.TabName||"created"==w.TabName||"owned"==w.TabName)?w.tokenowners_my_balance+" of "+w.tokenowners_my_quantity:""!=w.TabName?w.tokenowners_all_balance+" of "+w.tokenQuantity:w.tokenowners_sale_balance>0?w.tokenowners_sale_balance+" of "+w.tokenQuantity:w.tokenowners_all_balance+" of "+w.tokenQuantity})]}):"UnLimitedAuction"==w.PutOnSaleType&&(0,r.jsxs)("div",{className:"nft__item_price",children:["Not For Sale",(0,r.jsx)("span",{children:""!=w.TabName&&("onsale"==w.TabName||"created"==w.TabName||"owned"==w.TabName)?w.tokenowners_my_balance+" of "+w.tokenowners_my_quantity:""!=w.TabName?w.tokenowners_all_balance+" of "+w.tokenQuantity:w.tokenowners_sale_balance>0?w.tokenowners_sale_balance+" of "+w.tokenQuantity:w.tokenowners_all_balance+" of "+w.tokenQuantity})]}),"TimedAuction"==w.PutOnSaleType&&(0,r.jsxs)("div",{className:"nft__item_price",children:[ee(w.minimumBid)," ",s.Z.tokenSymbol,(0,r.jsx)("span",{children:""!=w.TabName&&("onsale"==w.TabName||"created"==w.TabName||"owned"==w.TabName)?" "+w.tokenowners_my_balance+"/"+w.tokenowners_my_quantity:""!=w.TabName?" "+w.tokenowners_all_balance+"/"+w.tokenQuantity:w.tokenowners_sale_balance>0?" "+w.tokenowners_sale_balance+"/"+w.tokenQuantity:" "+w.tokenowners_all_balance+"/"+w.tokenQuantity})]}),(0,r.jsxs)("div",{className:"nft-item-group",children:[!0==N&&"FixedPrice"==w.PutOnSaleType&&0==w.tokenowners_current.price&&(0,r.jsx)("div",{className:"nft__item_action",children:(0,r.jsx)("a",{href:"".concat(s.Z.Front_URL,"/item-details/").concat(w.tokenCounts),children:w.tokenowners_current.tokenOwner!=h?"Place a bid":"Owned"})}),"FixedPrice"==w.PutOnSaleType&&(w&&w.tokenowners_current&&w.tokenowners_current.price)>0&&(0,r.jsx)("div",{className:"nft__item_action",children:(0,r.jsx)("a",{href:"".concat(s.Z.Front_URL,"/item-details/").concat(w.tokenCounts),children:w.tokenowners_current.tokenOwner!=h?"Buy now":"Owned"})}),"TimedAuction"==w.PutOnSaleType&&(0,r.jsx)("div",{className:"nft__item_action",children:(0,r.jsx)("a",{href:"".concat(s.Z.Front_URL,"/item-details/").concat(w.tokenCounts),children:w.tokenowners_current.tokenOwner!=h?"Place a bid":"Owned"})}),"UnLimitedAuction"==w.PutOnSaleType&&(0,r.jsx)("div",{className:"nft__item_action",children:(0,r.jsx)("a",{href:"".concat(s.Z.Front_URL,"/item-details/").concat(w.tokenCounts),children:w.tokenowners_current.tokenOwner!=h?"Open for bids":"Owned"})})]})]})]})}):""}11===u.getMonth()&&u.getDate(),u.getFullYear()}}]);