(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2756],{26324:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/EditProfile",function(){return a(47582)}])},1974:function(){},44546:function(e,t,a){"use strict";a.r(t),t.default={src:"/_next/static/media/profile_placeholder.d158bc19.png",height:200,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAArUlEQVR42l3OvQqDMBQF4DxNKfT9t8bYCHZzENSKicXBOhTpotIk6ulVtIMfZMm5f2xz9oXwy7K0T3qBlGL5+4dpmrY4KIqiXYs8zxMg8zwbaw2GYcA4jsY5h3sY3pjW+gvSNA2iKEIcx8jzHNM0oaoqy5Qq1oJHluFV1+Cco+s6LOget6zgNB593xvq2kMDIqUMGDmlSfLGAU38UHZhmxPnV09rZbRSVggh9/AHiF2/AN+KpdMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},25184:function(e,t,a){"use strict";a.d(t,{x:function(){return n}});var o=a(55678);function n(e,t,a){"error"===e?o.Am.error(t,{autoClose:2e3,toastId:a,position:o.Am.POSITION.TOP_RIGHT}):"success"===e&&o.Am.success(t,{autoClose:2e3,toastId:a,position:o.Am.POSITION.TOP_RIGHT})}a(57134)},80471:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var o=a(85893),n=a(67294),r=a(89250),i=a(37918),l=a.n(i);a(8882);var c=a(74845);a(19755);var s=a(6103);a(93451);var d=a(97416),w=a(72213);function u(e){let{...t}=e,{WalletConnected:a}=e,i=(0,n.useRef)(null);async function u(){g()}async function g(){if(window.$(".modal").modal("hide"),localStorage.getItem("walltype")&&null!=localStorage.getItem("walltype")&&void 0!=localStorage.getItem("walltype")&&""!=localStorage.getItem("walltype")&&"trust"==localStorage.getItem("walltype")&&localStorage.getItem("nilwireMetamask")&&null!=localStorage.getItem("nilwireMetamask")&&void 0!=localStorage.getItem("nilwireMetamask")&&""!=localStorage.getItem("nilwireMetamask")){var t=new c.Z({rpc:{[s.Z.livechainid]:s.Z.liverpcUrls},chainId:s.Z.livechainid});t.on("connect",()=>{}),await t.enable();let r=new(l())(t);var a=await r.eth.net.getId(),o=await r.eth.getAccounts();if(s.Z.livechainid==a){localStorage.setItem("walltype","trust"),localStorage.setItem("nilddsbashyujsd","yes"),localStorage.setItem("nilwireMetamask",o[0].toLowerCase()),localStorage.setItem("nilwireMetamaskAddr",o[0].toLowerCase());var n=o[0].toLowerCase();e.Set_UserAccountAddr(o[0].toLowerCase()),e.Set_WalletConnected(!0);var o=await r.eth.getAccounts(),n=o[0].toLowerCase();e.Set_Accounts(n),r.eth.getBalance(n).then(a=>(e.Set_UserAccountBal(a/1e18),m(),{address:o[0].toLowerCase(),provider:t}))}else await t.disconnect()}else if(localStorage.getItem("nilwireMetamask")&&null!=localStorage.getItem("nilwireMetamask")&&void 0!=localStorage.getItem("nilwireMetamask")&&""!=localStorage.getItem("nilwireMetamask")&&window.ethereum){var r=new(l())(window.ethereum);try{void 0!==r&&await window.ethereum.enable().then(async function(){let t=new(l())(window.web3.currentProvider);if(!0===window.web3.currentProvider.isMetaMask&&window.web3&&window.web3.eth&&window.web3.eth.defaultAccount&&window.web3.currentProvider.networkVersion==s.Z.networkVersion){var a=await t.eth.getAccounts();e.Set_UserAccountAddr(a[0].toLowerCase()),e.Set_WalletConnected(!0);var o=a[0].toLowerCase();return e.Set_Accounts(o),t.eth.getBalance(o).then(t=>{e.Set_UserAccountBal(t/1e18),m()}),{address:a[0].toLowerCase()}}})}catch(e){}}}async function m(){await A(),e.AfterWalletConnected()}async function A(){var t=await (0,w.I)();let a=new(l())(t&&t.provider&&null!=t.provider&&void 0!=t.provider&&""!=t.provider?t.provider:window.ethereum);var o=await (0,d.Et)({addr:(await a.eth.getAccounts())[0].toLowerCase()});return o&&o.data&&o.data.data?e.Set_AddressUserDetails(o.data.data.User):e.Set_AddressUserDetails({}),!0}(0,n.useEffect)(()=>{u()},[]);try{window.addEventListener("load",t=>{t.preventDefault(),window.ethereum&&(window.ethereum.on("accountsChanged",function(e){window.location.reload(!0),i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{g()},1e3)}),window.ethereum.on("networkChanged",function(t){t==s.Z.networkVersion?(window.location.reload(!0),i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{g()},1e3),e.Set_WalletConnected(!0)):e.Set_WalletConnected(!1)}))})}catch(e){}let[h,f]=n.useState(!1);var v="";let S=(0,r.TH)();S.pathname&&S.pathname.split("/").length>=2&&(v=S.pathname.split("/")[1]);let[I,p]=(0,n.useState)(v),_=e=>{};return(0,o.jsxs)("div",{children:[e.fullLoader&&(0,o.jsx)("div",{class:"loading"}),(0,o.jsx)("div",{id:"connect_Wallet_call",onClick:()=>_("metamask")})]})}a(55678).Am.configure(),s.Z.toasterOption},57134:function(){}},function(e){e.O(0,[3592,8543,571,3104,9250,3851,4593,733,4419,2997,7582,9774,2888,179],function(){return e(e.s=26324)}),_N_E=e.O()}]);