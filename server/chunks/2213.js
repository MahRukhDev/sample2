"use strict";
exports.id = 2213;
exports.ids = [2213];
exports.modules = {

/***/ 2213:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ getmylog)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6679);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6103);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4137);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





async function getmylog() {
    if (localStorage.getItem("walltype") && localStorage.getItem("walltype") != null && localStorage.getItem("walltype") != undefined && localStorage.getItem("walltype") != "" && localStorage.getItem("walltype") == "trust" && localStorage.getItem("nilwireMetamask") && localStorage.getItem("nilwireMetamask") != null && localStorage.getItem("nilwireMetamask") != undefined && localStorage.getItem("nilwireMetamask") != "") {
        var provider = new (_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4___default())({
            rpc: {
                [_lib_config__WEBPACK_IMPORTED_MODULE_3__/* ["default"].livechainid */ .Z.livechainid]: _lib_config__WEBPACK_IMPORTED_MODULE_3__/* ["default"].liverpcUrls */ .Z.liverpcUrls
            },
            chainId: _lib_config__WEBPACK_IMPORTED_MODULE_3__/* ["default"].livechainid */ .Z.livechainid
        });
        provider.on("connect", ()=>{});
        await provider.enable();
        let web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
        var network = await web3.eth.net.getId();
        var result = await web3.eth.getAccounts();
        if (_lib_config__WEBPACK_IMPORTED_MODULE_3__/* ["default"].livechainid */ .Z.livechainid == network) {
            localStorage.setItem("walltype", "trust");
            localStorage.setItem("nilddsbashyujsd", "yes");
            localStorage.setItem("nilwireMetamask", result[0].toLowerCase());
            localStorage.setItem("nilwireMetamaskAddr", result[0].toLowerCase());
            var setacc = result[0].toLowerCase();
            var data = {
                address: result[0].toLowerCase(),
                provider: provider
            };
            return data;
        } else {
            await provider.disconnect();
        }
    } else if (localStorage.getItem("nilwireMetamask") && localStorage.getItem("nilwireMetamask") != null && localStorage.getItem("nilwireMetamask") != undefined && localStorage.getItem("nilwireMetamask") != "") {
        if (window.ethereum) {
            var web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(window.ethereum);
            try {
                if (typeof web3 !== "undefined") {
                    await window.ethereum.enable().then(async function() {
                        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(window.web3.currentProvider);
                        if (window.web3.currentProvider.isMetaMask === true) {
                            if (window.web3 && window.web3.eth && window.web3.eth.defaultAccount) {
                                if (window.web3.currentProvider.networkVersion == _lib_config__WEBPACK_IMPORTED_MODULE_3__/* ["default"].networkVersion */ .Z.networkVersion) {
                                    var result = await web3.eth.getAccounts();
                                    var data = {
                                        address: result[0].toLowerCase()
                                    };
                                    return data;
                                }
                            }
                        }
                    });
                }
            } catch (err) {}
        }
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;