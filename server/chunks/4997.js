"use strict";
exports.id = 4997;
exports.ids = [4997];
exports.modules = {

/***/ 4997:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LikeRef": () => (/* binding */ LikeRef)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6679);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6103);
/* harmony import */ var _actions_v1_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3451);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7416);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3590);
/* harmony import */ var _helper_walletconnect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2213);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_v1_token__WEBPACK_IMPORTED_MODULE_6__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_7__, react_toastify__WEBPACK_IMPORTED_MODULE_8__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_9__]);
([_actions_v1_token__WEBPACK_IMPORTED_MODULE_6__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_7__, react_toastify__WEBPACK_IMPORTED_MODULE_8__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].toasterOption */ .Z.toasterOption;
const LikeRef = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    async function getLikesDataCall() {
        try {
            var currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_7__/* .getCurAddr */ .my)();
            if (currAddr) {
                var payload = {
                    currAddr: currAddr
                };
                var check = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_6__/* .GetLikeDataAction */ .MY)(payload);
                if (check && check.data && check.data.records) {
                    props.setLikedTokenList(check.data.records);
                }
            }
        } catch (err) {}
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({
            async getLikesData () {
                getLikesDataCall();
            },
            async hitLike (data) {
                var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_9__/* .getmylog */ .I)();
                const web3 = new (web3__WEBPACK_IMPORTED_MODULE_2___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
                var curAddr = await web3.eth.getAccounts();
                if (web3 && web3.eth) {
                    var connectwallet = localStorage.getItem("nilwireMetamask");
                    if (!connectwallet) {
                        react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Please connect to a Metamask wallet", toasterOption);
                        return false;
                    }
                    // var currAddr = localStorage.getItem("nilwireMetamask");
                    var currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_7__/* .getCurAddr */ .my)();
                    console.log(currAddr, "CurCur123456");
                    var likeData = {
                        currAddr: currAddr,
                        tokenCounts: data.tokenCounts,
                        tokenOwner: data.tokenOwner
                    };
                    var resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_6__/* .AddLikeAction */ .Ay)(likeData);
                    if (resp && resp.data && resp.data.toast && resp.data.toast.msg) {
                        console.log(resp.data, "resp.data-resp.data");
                        if (resp.data.toast.type == "success") {
                            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success(resp.data.toast.msg, toasterOption);
                            if (resp.data.tokenData && resp.data.tokenData.record && typeof resp.data.tokenData.record.likecount != "undefined") {
                                jquery__WEBPACK_IMPORTED_MODULE_4___default()("." + data.tokenCounts + "-likecount").html(resp.data.tokenData.record.likecount);
                            }
                        }
                    }
                    getLikesDataCall();
                }
            }
        }));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {});
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;