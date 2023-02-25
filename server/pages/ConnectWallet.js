(() => {
var exports = {};
exports.id = 1098;
exports.ids = [1098,6602];
exports.modules = {

/***/ 4655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/1.427d9abd.png","height":70,"width":70,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+UlEQVR42mPo8RDruZwrmfV/rTL3////GcB4gxLX5TzJjG4PsT6GImvRH5O8xf5fypV8+K1F+hAIXwSyQWJAuV8MpTZit6L0RP/nWYj9f1krBcYFlmL/QWJAubsMjc5iK5ZFiv8/myX++2OD5J+PDVJ/zgHZILFGF7HVDD/apSf97pD8fy1H5fejcuX/jyuU/l8Fsn+3S/4Hyk1l+NAg9eRtnez/JyUM/z/XM/z5AsQgNkgMKPec4XG54v57uQz/H3YlftjRkPh/e33C/4fdSR9AYo/LFA8zPK7SMXqZxWBy8+JxpY0r5+8G4j03Lp5QfpnJYPy4UscYALJwi+W4uv0TAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/4.e9e2d3c0.png","height":70,"width":70,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAlElEQVR42mWP2wnCQBBFd7NVCBE/IulAwVn81UK0JE2mB8EGxBYUK9A2NPPhWeJixIHD3N07D8alWOzMR+2C+4S0XZDGfG82VpCynkL1LcQbPI6idoIz+jA0xrCOanO6a3SNnpFXUKaCCq6wgRtcYJsyDZN+995KPh6MF1ii75ijvCK4//j1hEuivjzdhbSgT58veAOfNFb2oxY1fQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 5184:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ toastAlert)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__]);
react_toastify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function toastAlert(errorType, message, id) {
    if (errorType === "error") {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(message, {
            autoClose: 2000,
            toastId: id,
            position: react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.POSITION.TOP_RIGHT
        });
    } else if (errorType === "success") {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(message, {
            autoClose: 2000,
            toastId: id,
            position: react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.POSITION.TOP_RIGHT
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7580:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConnectWallet)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1662);
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1268);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6679);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6103);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4137);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _actions_toastAlert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5184);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header_js__WEBPACK_IMPORTED_MODULE_2__, _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_6__, _actions_toastAlert__WEBPACK_IMPORTED_MODULE_9__]);
([_components_Header_js__WEBPACK_IMPORTED_MODULE_2__, _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_6__, _actions_toastAlert__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].toasterOption */ .Z.toasterOption;
// Scroll to Top
function ScrollToTopOnMount() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.scrollTo(0, 0);
    }, []);
    return null;
}
var mynetwork = _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].networkVersion */ .Z.networkVersion;
function ConnectWallet() {
    const [accounts, setAccounts] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();
    async function walletconnect() {
        var provider = new (_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_8___default())({
            rpc: {
                [_lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].livechainid */ .Z.livechainid]: _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].liverpcUrls */ .Z.liverpcUrls
            },
            chainId: _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].livechainid */ .Z.livechainid
        });
        // const provider = new WalletConnectProvider({
        //   infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
        // });
        provider.on("connect", ()=>{
            console.log("connect successfullly!!!!");
        });
        await provider.enable();
        let web3 = new (web3__WEBPACK_IMPORTED_MODULE_4___default())(provider);
        var network = await web3.eth.net.getId();
        var result = await web3.eth.getAccounts();
        if (1 == network) {
            setAccounts(result[0].toLowerCase());
            localStorage.setItem("walltype", "trust");
            localStorage.setItem("nilddsbashyujsd", "yes");
            localStorage.setItem("nilwireMetamask", result[0].toLowerCase());
            localStorage.setItem("nilwireMetamaskAddr", result[0].toLowerCase());
            var setacc = result[0].toLowerCase();
            web3.eth.getBalance(setacc).then(async (val)=>{
                var balance = val / 1000000000000000000;
                localStorage.setItem("balance", balance);
                window.location.href = "/";
            });
        } else {
            await provider.disconnect();
            (0,_actions_toastAlert__WEBPACK_IMPORTED_MODULE_9__/* .toastAlert */ .x)("error", "please select Mainnet  network on your wallet", "network");
        }
    }
    async function connectMetamask() {
        if (window.ethereum) {
            var web3 = new (web3__WEBPACK_IMPORTED_MODULE_4___default())(window.ethereum);
            try {
                if (typeof web3 !== "undefined") {
                    window.ethereum.enable().then(async function() {
                        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_4___default())(window.web3.currentProvider);
                        if (window.web3.currentProvider.networkVersion == mynetwork) {
                            if (window.web3.currentProvider.isMetaMask === true) {
                                await web3.eth.getAccounts(async function(error, result) {
                                    setAccounts(result[0].toLowerCase());
                                    localStorage.setItem("walltype", "metamask");
                                    localStorage.setItem("nilddsbashyujsd", "yes");
                                    localStorage.setItem("nilwireMetamask", result[0].toLowerCase());
                                    localStorage.setItem("nilwireMetamaskAddr", result[0].toLowerCase());
                                    var setacc = result[0].toLowerCase();
                                    web3.eth.getBalance(setacc).then(async (val)=>{
                                        var balance = val / 1000000000000000000;
                                        localStorage.setItem("balance", balance);
                                    });
                                    var data = {
                                        myaddress: setacc
                                    };
                                    // var mylist = await storeAddressinDb(data);
                                    window.location.href = "/";
                                });
                            }
                        } else {
                            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.warning("Please connect to Ethereum (ETH) mainnet", toasterOption);
                        }
                    });
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.warning("Please add Metamask plugin", toasterOption);
                }
            } catch (err) {}
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.warning("Please add Metamask plugin", toasterOption);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "wrapper",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_10__.Helmet, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Nilwire - Connect Wallet"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ScrollToTopOnMount, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "no-bottom no-top",
                id: "content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        id: "subheader",
                        class: "text-light",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "center-y relative text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "container",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    class: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "col-md-12 text-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                children: "Wallet"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "clearfix"
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        "aria-label": "section",
                        className: "pt30 pb30",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                class: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "col-lg-6 mb30",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            class: "box-url",
                                            href: "#",
                                            onClick: connectMetamask,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    class: "box-url-label",
                                                    children: "Most Popular"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: __webpack_require__(4655),
                                                    alt: "",
                                                    class: "mb20"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    children: "Metamask"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide."
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "col-lg-6 mb30",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            class: "box-url",
                                            href: "#",
                                            onClick: walletconnect,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    class: "box-url-label",
                                                    children: "Most Popular"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: __webpack_require__(446),
                                                    alt: "",
                                                    class: "mb20"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    children: "WalletConnect"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Open source protocol for connecting decentralised applications to mobile wallets."
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 6679:
/***/ ((module) => {

"use strict";
module.exports = require("@metamask/legacy-web3");

/***/ }),

/***/ 4137:
/***/ ((module) => {

"use strict";
module.exports = require("@walletconnect/web3-provider");

/***/ }),

/***/ 2947:
/***/ ((module) => {

"use strict";
module.exports = require("jquery");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2791:
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet");

/***/ }),

/***/ 4661:
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8519:
/***/ ((module) => {

"use strict";
module.exports = require("web3");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6103,4271,2213,30,4164,2997], () => (__webpack_exec__(7580)));
module.exports = __webpack_exports__;

})();