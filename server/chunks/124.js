"use strict";
exports.id = 124;
exports.ids = [124];
exports.modules = {

/***/ 124:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelOrderRef": () => (/* binding */ CancelOrderRef)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6679);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4021);
/* harmony import */ var _ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1439);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6103);
/* harmony import */ var _actions_v1_token__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3451);
/* harmony import */ var _helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2213);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7416);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_v1_token__WEBPACK_IMPORTED_MODULE_10__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_12__, react_toastify__WEBPACK_IMPORTED_MODULE_13__]);
([_actions_v1_token__WEBPACK_IMPORTED_MODULE_10__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_12__, react_toastify__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














react_toastify__WEBPACK_IMPORTED_MODULE_13__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_9__/* ["default"].toasterOption */ .Z.toasterOption;
const CancelOrderRef = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    // const history = useHistory();
    const [FormSubmitLoading, Set_FormSubmitLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [TokenPrice, Set_TokenPrice] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [owntoken, Set_owntoken] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [owntokenprice, setowntokenprice] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [PurchaseCurrency, setPurchaseCurrency] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    async function FormSubmit() {
        // if (window.ethereum) {
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        if (web3 && web3.eth) {
            var connectwallet = localStorage.getItem("nilwireMetamask");
            if (!connectwallet) {
                window.location.href = "/connect";
                return false;
            }
            if (item.type == 721) {
                var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_7__, item.contractAddress);
                Set_FormSubmitLoading("processing");
                CoursetroContract.methods.cancelOrder(props.item.tokenCounts).send({
                    from: props.Accounts
                }).then(async (result)=>{
                    Set_FormSubmitLoading("done");
                    var postData = {
                        tokenOwner: UserAccountAddr,
                        tokenCounts: props.item.tokenCounts,
                        tokenPrice: TokenPrice,
                        blockHash: result.blockHash,
                        transactionHash: result.transactionHash,
                        BidToken: PurchaseCurrency,
                        from: "cancel"
                    };
                    var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_10__/* .TokenPriceChange_update_Action */ .pQ)(postData);
                    if (Resp.data && Resp.data.RetType && Resp.data.RetType == "success") {
                        react_toastify__WEBPACK_IMPORTED_MODULE_13__.toast.success("Sale order cancelled successfully", toasterOption);
                        window.$(".modal").modal("hide");
                        setTimeout(()=>{
                            window.location.reload(false);
                        }, 1500);
                    }
                }).catch((error)=>{
                    Set_FormSubmitLoading("error");
                    react_toastify__WEBPACK_IMPORTED_MODULE_13__.toast.error("Transaction rejected by user", toasterOption);
                });
            } else {
                var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_8__, item.contractAddress);
                Set_FormSubmitLoading("processing");
                CoursetroContract.methods.cancelOrder(props.item.tokenCounts).send({
                    from: props.Accounts
                }).then(async (result)=>{
                    Set_FormSubmitLoading("done");
                    var postData = {
                        tokenOwner: UserAccountAddr,
                        tokenCounts: props.item.tokenCounts,
                        tokenPrice: TokenPrice,
                        blockHash: result.blockHash,
                        transactionHash: result.transactionHash,
                        BidToken: PurchaseCurrency,
                        from: "cancel"
                    };
                    var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_10__/* .TokenPriceChange_update_Action */ .pQ)(postData);
                    if (Resp.data && Resp.data.RetType && Resp.data.RetType == "success") {
                        react_toastify__WEBPACK_IMPORTED_MODULE_13__.toast.success("Sale order cancelled successfully", toasterOption);
                        window.$(".modal").modal("hide");
                        setTimeout(()=>{
                            window.location.reload(false);
                        }, 1500);
                    }
                }).catch((error)=>{
                    Set_FormSubmitLoading("error");
                    react_toastify__WEBPACK_IMPORTED_MODULE_13__.toast.error("Transaction rejected by user", toasterOption);
                });
            }
        }
    //}
    }
    var { item , UserAccountAddr  } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({
            async CancelOrder_Click (item, BuyOwnerDetail = {}) {
                console.log(item, "ii");
                props.Set_HitItem(item);
                Set_TokenPrice(0);
                console.log(item, "===============", BuyOwnerDetail, "=============froncancelorder");
                let IndexVal = item && item.OnSaleOwner && item.OnSaleOwner.findIndex((val)=>val.tokenOwner.toString() == UserAccountAddr.toString());
                setowntokenprice(parseInt(IndexVal) >= 0 && item.OnSaleOwner[IndexVal] && item.OnSaleOwner[IndexVal].price ? item.OnSaleOwner[IndexVal].price : item.tokenowners_current && item.tokenowners_current.price ? item.tokenowners_current.price : item.price);
                Set_owntoken(BuyOwnerDetail);
                setPurchaseCurrency(BuyOwnerDetail.currency);
                window.$("#cancel_order_modal").modal("show");
            }
        }));
    console.log(item, "=========fromcancelorder");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            FormSubmitLoading == "processing" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "transLoading",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: __webpack_require__(6514),
                    className: "img-fluid",
                    alt: ""
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                class: "modal fade primary_modal",
                id: "cancel_order_modal",
                "data-backdrop": "static",
                tabindex: "-1",
                role: "dialog",
                "aria-labelledby": "cancel_order_modalCenteredLabel",
                "aria-hidden": "true",
                "data-keyboard": "false",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        class: "modal-dialog modal-dialog-centered modal-sm",
                        role: "document",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            class: "modal-content",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    class: "modal-header text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            class: "modal-title",
                                            id: "cancel_order_modalLabel",
                                            children: "Cancel Sale Order"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text_grey_clickb mb-0"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            class: "close",
                                            "data-dismiss": "modal",
                                            "aria-label": "Close",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                "aria-hidden": "true",
                                                children: "\xd7"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    class: "modal-body px-0 pt-0",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        className: "px-4 bid_form",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row pb-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 col-sm-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "buy_desc_sm",
                                                            children: "Token Price"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 col-sm-6 text-sm-right",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "buy_desc_sm_bold",
                                                            children: [
                                                                owntokenprice,
                                                                " ",
                                                                PurchaseCurrency
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-center mt-3",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    className: "btn-main lead mar-top-10",
                                                    type: "button",
                                                    onClick: ()=>FormSubmit(),
                                                    disabled: FormSubmitLoading == "processing",
                                                    children: [
                                                        FormSubmitLoading == "processing" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            class: "fa fa-spinner mr-3 spinner_icon",
                                                            "aria-hidden": "true",
                                                            id: "circle1"
                                                        }),
                                                        "Continue"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center mt-3",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: "btn-main lead mar-top-10",
                            "data-dismiss": "modal",
                            type: "button",
                            "aria-label": "Close",
                            children: [
                                FormSubmitLoading == "processing" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    class: "fa fa-spinner mr-3 spinner_icon",
                                    "aria-hidden": "true",
                                    id: "circle1"
                                }),
                                "Sign sell order"
                            ]
                        })
                    })
                ]
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;