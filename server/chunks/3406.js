"use strict";
exports.id = 3406;
exports.ids = [3406];
exports.modules = {

/***/ 3406:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferRef": () => (/* binding */ TransferRef)
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
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6103);
/* harmony import */ var _ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4021);
/* harmony import */ var _ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1439);
/* harmony import */ var _ABI_ESC_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30);
/* harmony import */ var _helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2213);
/* harmony import */ var _actions_v1_token__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3451);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7416);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_12__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_13__, react_toastify__WEBPACK_IMPORTED_MODULE_14__]);
([_helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_12__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_13__, react_toastify__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].toasterOption */ .Z.toasterOption;
//const EscContract = new web3.eth.Contract(ESC_ABI, config.esctokenAddr);
const TransferRef = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const [item, Set_item] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.item);
    const [NoOfToken, Set_NoOfToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [toaddress, Set_Toaddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [mydetail, Set_mydetail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [FormSubmitLoading, Set_FormSubmitLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [ValidateError, Set_ValidateError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [PurchaseCurrency, setPurchaseCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const inputChange = (e)=>{
        if (e && e.target && typeof e.target.value != "undefined" && e.target.name) {
            var value = e.target.value;
            switch(e.target.name){
                case "NoOfToken":
                    Set_NoOfToken(value);
                    break;
                case "toaddress":
                    Set_Toaddress(value);
                    break;
                default:
            }
        }
    };
    const ItemValidation = async (data = {})=>{
        var ValidateError = {};
        var Collectible_balance = 0;
        if (item && item.tokenowners_current && item.tokenowners_current.balance) {
            Collectible_balance = item.tokenowners_current.balance;
        }
        var quantity = typeof data.quantity != "undefined" ? data.quantity : NoOfToken;
        console.log(typeof quantity, "quantityquantity");
        if (quantity == "") {
            ValidateError.NoOfToken = '"Quantity" is not allowed to be empty';
        } else if (parseFloat(quantity) <= 0) {
            ValidateError.NoOfToken = '"Quantity" must be greater than 0';
        } else if (isNaN(quantity) == true) {
            ValidateError.NoOfToken = '"Quantity" must be a number';
        }
        if (quantity > Collectible_balance) {
            ValidateError.NoOfToken = '"Quantity" must be below on ' + Collectible_balance;
        }
        function isInt(value) {
            var er = /^-?[0-9]+$/;
            return er.test(value);
        }
        if (!isInt(parseFloat(quantity))) {
            ValidateError.NoOfToken = '"Quantity" must be a Integer';
        }
        if (toaddress == "") {
            ValidateError.toaddress = '"To Addresss" is not allowed to be empty';
        } else {
            var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__/* .getmylog */ .I)();
            const web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
            var isUser = web3.utils.isAddress(toaddress);
            if (isUser == false) {
                ValidateError.toaddress = '"Please enter valid address';
            }
        }
        Set_ValidateError(ValidateError);
        return ValidateError;
    };
    async function FormSubmit() {
        var errors = await ItemValidation();
        var errorsSize = Object.keys(errors).length;
        if (errorsSize != 0) {
            react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Please fill all the required fields", toasterOption);
            return false;
        }
        Set_FormSubmitLoading("processing");
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var currAddr = await web3.eth.getAccounts();
        if (currAddr[0].toLowerCase() != toaddress.toLowerCase()) {
            if (item.type == 721) {
                const BEP721Contract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_8__, item.contractAddress);
                BEP721Contract.methods.safeTransferFrom(item.tokenowners_current.tokenOwner, toaddress, item.tokenCounts).send({
                    from: currAddr[0].toLowerCase()
                }).then(async (result)=>{
                    Set_FormSubmitLoading("done");
                    var postData = {
                        tokenOwner: item.tokenowners_current.tokenOwner,
                        UserAccountAddr: toaddress.toLowerCase(),
                        tokenCounts: item.tokenCounts,
                        tokenType: item.type,
                        NoOfToken: item.type == 721 ? 1 : NoOfToken,
                        transactionHash: result.transactionHash,
                        PurchaseCurrency: PurchaseCurrency,
                        transfer: true
                    };
                    console.log(postData, "POstDatatatat");
                    var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_12__/* .PurchaseNow_Complete_Action */ .Xr)(postData);
                    if (Resp.data && Resp.data.toast && Resp.data.toast.type == "success") {
                        react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success("NFT transferred succesfully", toasterOption);
                        window.$(".transfer_sale_modal").modal("hide");
                        setTimeout(()=>{
                            window.location.reload(false);
                        }, 2000);
                    }
                }).catch((error)=>{
                    Set_FormSubmitLoading("error");
                    react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Transaction rejected by user", toasterOption);
                });
            } else {
                const BEP1155Contract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_9__, item.contractAddress);
                BEP1155Contract.methods.safeTransferFrom(item.tokenowners_current.tokenOwner, toaddress, item.tokenCounts, NoOfToken, "0x").send({
                    from: currAddr[0].toLowerCase()
                }).then(async (result)=>{
                    Set_FormSubmitLoading("done");
                    var postData = {
                        tokenOwner: item.tokenowners_current.tokenOwner,
                        UserAccountAddr: toaddress.toLowerCase(),
                        tokenCounts: item.tokenCounts,
                        tokenType: item.type,
                        NoOfToken: item.type == 721 ? 1 : NoOfToken,
                        transactionHash: result.transactionHash,
                        PurchaseCurrency: PurchaseCurrency,
                        transfer: true
                    };
                    var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_12__/* .PurchaseNow_Complete_Action */ .Xr)(postData);
                    if (Resp.data && Resp.data.toast && Resp.data.toast.type == "success") {
                        react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success("Successfully transfered", toasterOption);
                        window.$(".transfer_sale_modal").modal("hide");
                        setTimeout(()=>{
                            window.location.reload(false);
                        }, 2000);
                    }
                }).catch((error)=>{
                    Set_FormSubmitLoading("error");
                    react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Transaction rejected by user", toasterOption);
                });
            }
        } else {
            Set_FormSubmitLoading("error");
            react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Owner Address and Entered Address are same, Please Check ", toasterOption);
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({
            async Transfer_Click (item, BuyOwnerDetail = {}) {
                var curAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_13__/* .getCurAddr */ .my)();
                var connectwallet = localStorage.getItem("nilwireMetamask");
                if (!connectwallet) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Please connect to a Metamask wallet", toasterOption);
                    return false;
                }
                Set_NoOfToken(1);
                Set_item(item);
                setPurchaseCurrency(BuyOwnerDetail.currency);
                Set_mydetail(BuyOwnerDetail);
                window.$("#transfer_sale_modal").modal("show");
            }
        }));
    const CloseBtn = ()=>{
        Set_NoOfToken("");
        Set_Toaddress("");
    };
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                class: "modal fade primary_modal",
                id: "transfer_sale_modal",
                tabindex: "-1",
                role: "dialog",
                "data-backdrop": "static",
                "aria-labelledby": "transfer_sale_modalCenteredLabel",
                "aria-hidden": "true",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "modal-dialog modal-dialog-centered",
                    role: "document",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        class: "modal-content",
                        id: "hide",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                class: "modal-header text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        class: "modal-title",
                                        id: "transfer_sale_modalLabel_1",
                                        children: "Transfer NFT"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        class: "close",
                                        "data-dismiss": "modal",
                                        "aria-label": "Close",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            "aria-hidden": "true",
                                            onClick: CloseBtn,
                                            children: "\xd7"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                class: "modal-body",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-center place_bit_desc text-light mb-0",
                                        children: "You are about to Transfer Nft"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "place_bit_desc_2 text-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-muted",
                                                children: "from"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-light ml-2",
                                                children: (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_13__/* .halfAddrShow */ .UD)(localStorage.getItem("nilwireMetamask"))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "place_bit_desc_2 text-center",
                                        children: item && item.tokenowners_current && item.tokenowners_current.balance ? "Available : " + item.tokenowners_current.balance : "Available : 0"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "update_cover_div_2",
                                        id: "update_cover_div_2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            className: "form-border",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group formSkew",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "input-group",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                name: "toaddress",
                                                                id: "toaddress",
                                                                onChange: inputChange,
                                                                // value={toaddress}
                                                                placeholder: "To Addresss",
                                                                className: "form-control"
                                                            })
                                                        }),
                                                        ValidateError.toaddress && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-danger",
                                                            children: ValidateError.toaddress
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group formSkew",
                                                    children: [
                                                        mydetail.type != 721 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "input-group",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "number",
                                                                name: "NoOfToken",
                                                                id: "NoOfToken",
                                                                onKeyDown: (evt)=>[
                                                                        "e",
                                                                        "E",
                                                                        "+",
                                                                        "-",
                                                                        ",",
                                                                        "."
                                                                    ].includes(evt.key) && evt.preventDefault(),
                                                                onChange: inputChange,
                                                                placeholder: "Enter the item quantity",
                                                                value: NoOfToken,
                                                                className: "form-control"
                                                            })
                                                        }),
                                                        ValidateError.NoOfToken && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-danger",
                                                            children: ValidateError.NoOfToken
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            className: "create_btn me-3",
                                                            type: "button",
                                                            onClick: ()=>FormSubmit(),
                                                            disabled: FormSubmitLoading == "processing",
                                                            children: [
                                                                FormSubmitLoading == "processing" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    class: "fa fa-spinner mr-3 spinner_icon",
                                                                    "aria-hidden": "true",
                                                                    id: "circle1"
                                                                }),
                                                                "Transfer"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "btn-main btnGrey lead",
                                                            "data-dismiss": "modal",
                                                            type: "button",
                                                            children: "Cancel"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;