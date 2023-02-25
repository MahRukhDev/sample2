"use strict";
exports.id = 471;
exports.ids = [471];
exports.modules = {

/***/ 471:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConnectWallet)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6679);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4137);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9648);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6103);
/* harmony import */ var _actions_v1_token__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3451);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7416);
/* harmony import */ var _helper_walletconnect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2213);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_9__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_11__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_12__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_13__, react_toastify__WEBPACK_IMPORTED_MODULE_14__]);
([axios__WEBPACK_IMPORTED_MODULE_9__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_11__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_12__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_13__, react_toastify__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











//import styles from "assets/jss/material-kit-react/views/landingPage.js";
// https://data-seed-prebsc-1-s1.binance.org:8545/




react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].toasterOption */ .Z.toasterOption;
//const useStyles = makeStyles(styles);
function ConnectWallet(props) {
    //const classes = useStyles();
    const { ...rest } = props;
    const { WalletConnected  } = props;
    const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getInit();
    }, []);
    async function getInit() {
        connect_Wallet();
    }
    let web3;
    // head to blocknative.com to create a key
    const BLOCKNATIVE_KEY = "blocknative-api-key";
    // the network id that your dapp runs on
    const NETWORK_ID = 1;
    async function connect_Wallet() {
        window.$(".modal").modal("hide");
        if (localStorage.getItem("walltype") && localStorage.getItem("walltype") != null && localStorage.getItem("walltype") != undefined && localStorage.getItem("walltype") != "" && localStorage.getItem("walltype") == "trust" && localStorage.getItem("nilwireMetamask") && localStorage.getItem("nilwireMetamask") != null && localStorage.getItem("nilwireMetamask") != undefined && localStorage.getItem("nilwireMetamask") != "") {
            var provider = new (_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_7___default())({
                rpc: {
                    [_lib_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].livechainid */ .Z.livechainid]: _lib_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].liverpcUrls */ .Z.liverpcUrls
                },
                chainId: _lib_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].livechainid */ .Z.livechainid
            });
            provider.on("connect", ()=>{});
            await provider.enable();
            let web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(provider);
            var network = await web3.eth.net.getId();
            var result = await web3.eth.getAccounts();
            if (_lib_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].livechainid */ .Z.livechainid == network) {
                localStorage.setItem("walltype", "trust");
                localStorage.setItem("nilddsbashyujsd", "yes");
                localStorage.setItem("nilwireMetamask", result[0].toLowerCase());
                localStorage.setItem("nilwireMetamaskAddr", result[0].toLowerCase());
                var setacc = result[0].toLowerCase();
                props.Set_UserAccountAddr(result[0].toLowerCase());
                props.Set_WalletConnected(true);
                var result = await web3.eth.getAccounts();
                var setacc = result[0].toLowerCase();
                props.Set_Accounts(setacc);
                web3.eth.getBalance(setacc).then((val)=>{
                    var balance = val / 1000000000000000000;
                    props.Set_UserAccountBal(balance);
                    AfterWalletConnected();
                    var data = {
                        address: result[0].toLowerCase(),
                        provider: provider
                    };
                    return data;
                });
            } else {
                await provider.disconnect();
            }
        } else if (localStorage.getItem("nilwireMetamask") && localStorage.getItem("nilwireMetamask") != null && localStorage.getItem("nilwireMetamask") != undefined && localStorage.getItem("nilwireMetamask") != "") {
            if (window.ethereum) {
                var web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(window.ethereum);
                try {
                    if (typeof web3 !== "undefined") {
                        await window.ethereum.enable().then(async function() {
                            const web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(window.web3.currentProvider);
                            if (window.web3.currentProvider.isMetaMask === true) {
                                if (window.web3 && window.web3.eth && window.web3.eth.defaultAccount) {
                                    if (window.web3.currentProvider.networkVersion == _lib_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].networkVersion */ .Z.networkVersion) {
                                        var result = await web3.eth.getAccounts();
                                        props.Set_UserAccountAddr(result[0].toLowerCase());
                                        props.Set_WalletConnected(true);
                                        var setacc = result[0].toLowerCase();
                                        props.Set_Accounts(setacc);
                                        web3.eth.getBalance(setacc).then((val)=>{
                                            var balance = val / 1000000000000000000;
                                            props.Set_UserAccountBal(balance);
                                            AfterWalletConnected();
                                        });
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
    async function AfterWalletConnected() {
        await AddressUserDetails_GetOrSave_Call();
        props.AfterWalletConnected();
    }
    async function AddressUserDetails_GetOrSave_Call() {
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_13__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var addr = await web3.eth.getAccounts();
        var ReqData = {
            addr: addr[0].toLowerCase()
        };
        var Resp = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_12__/* .AddressUserDetails_GetOrSave_Action */ .Et)(ReqData);
        if (Resp && Resp.data && Resp.data.data) {
            props.Set_AddressUserDetails(Resp.data.data.User);
        } else {
            props.Set_AddressUserDetails({});
        }
        return true;
    }
    try {
        window.addEventListener("load", (event)=>{
            event.preventDefault();
            if (window.ethereum) {
                window.ethereum.on("accountsChanged", function(accounts) {
                    window.location.reload(true);
                    if (timerRef.current) {
                        clearTimeout(timerRef.current);
                    }
                    timerRef.current = setTimeout(()=>{
                        connect_Wallet();
                    }, 1000);
                });
                window.ethereum.on("networkChanged", function(networkId) {
                    if (networkId == _lib_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].networkVersion */ .Z.networkVersion) {
                        window.location.reload(true);
                        if (timerRef.current) {
                            clearTimeout(timerRef.current);
                        }
                        timerRef.current = setTimeout(()=>{
                            connect_Wallet();
                        }, 1000);
                        props.Set_WalletConnected(true);
                    } else {
                        props.Set_WalletConnected(false);
                    }
                });
            }
        });
    } catch (e) {}
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)"
        }
    };
    let subtitle;
    const [WalletConnectNotifyPopup, Set_WalletConnectNotifyPopup] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    function openModal() {
        Set_WalletConnectNotifyPopup(true);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = "#f00";
    }
    function closeModal() {
        Set_WalletConnectNotifyPopup(false);
    }
    var WalletConnectNotifyPopup_test = "";
    if (WalletConnected) {
        WalletConnectNotifyPopup_test = false;
    } else {
        WalletConnectNotifyPopup_test = true;
    }
    var pathVal = "";
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation)();
    if (location.pathname) {
        if (location.pathname.split("/").length >= 2) {
            pathVal = location.pathname.split("/")[1];
        }
    }
    const [location_pathname, Set_location_pathname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pathVal);
    const connect_Wallet_call = (type)=>{
    // if(WalletConnected!=true) {
    //   connect_Wallet(type);
    // }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            props.fullLoader && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                class: "loading"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "connect_Wallet_call",
                onClick: ()=>connect_Wallet_call("metamask")
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;