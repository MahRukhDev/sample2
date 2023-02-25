"use strict";
exports.id = 8203;
exports.ids = [8203];
exports.modules = {

/***/ 8203:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletRef": () => (/* binding */ WalletRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6679);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6103);
/* harmony import */ var _helper_walletconnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2213);
/* harmony import */ var _actions_v1_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3451);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7416);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helper_walletconnect__WEBPACK_IMPORTED_MODULE_6__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_7__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_8__, react_toastify__WEBPACK_IMPORTED_MODULE_9__]);
([_helper_walletconnect__WEBPACK_IMPORTED_MODULE_6__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_7__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_8__, react_toastify__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].toasterOption */ .Z.toasterOption;
const WalletRef = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, ()=>({
            async GetUserBal () {
                var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_6__/* .getmylog */ .I)();
                const web3 = new (web3__WEBPACK_IMPORTED_MODULE_2___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
                var currAddr = await web3.eth.getAccounts();
                if (typeof currAddr !== "undefined" && currAddr) {
                    props.Set_UserAccountAddr(currAddr[0].toLowerCase());
                    props.Set_WalletConnected(true);
                    var result = await web3.eth.getAccounts();
                    var setacc = result[0].toLowerCase();
                    var val = await web3.eth.getBalance(setacc);
                    var balance = val / 1000000000000000000;
                    props.Set_UserAccountBal(balance);
                } else {
                    props.Set_UserAccountBal(0);
                }
            }
        }));
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;