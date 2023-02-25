"use strict";
exports.id = 686;
exports.ids = [686];
exports.modules = {

/***/ 686:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BurnRef": () => (/* binding */ BurnRef)
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
/* harmony import */ var _ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1439);
/* harmony import */ var _ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4021);
/* harmony import */ var _ABI_ESC_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7416);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3590);
/* harmony import */ var _helper_walletconnect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2213);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_v1_token__WEBPACK_IMPORTED_MODULE_6__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_10__, react_toastify__WEBPACK_IMPORTED_MODULE_12__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_13__]);
([_actions_v1_token__WEBPACK_IMPORTED_MODULE_6__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_10__, react_toastify__WEBPACK_IMPORTED_MODULE_12__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].toasterOption */ .Z.toasterOption;
var web3 = new (web3__WEBPACK_IMPORTED_MODULE_2___default())(window.ethereum);
const ESCContract = new web3.eth.Contract(_ABI_ESC_json__WEBPACK_IMPORTED_MODULE_9__, _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].esctokenAddr */ .Z.esctokenAddr);
const BurnRef = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const [FormSubmitLoading, Set_FormSubmitLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [onwer_price, set_owner_price] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});
    const [burnLoading, setBurnLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("empty");
    const [noofitems, setnoofitem] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(1);
    const [showingLoader, setshowingLoader] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [BuyOwnerDetailFirst, Set_BuyOwnerDetailFirst] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});
    const [OwnersDetailFirst, Set_OwnersDetailFirst] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});
    const [tokenCounts_Detail, Set_tokenCounts_Detail] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});
    const [Bids, Set_Bids] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});
    const [MyTokenBalance, Set_MyTokenBalance] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [MyTokenDetail, Set_MyTokenDetail] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    // var [item, Set_item] = React.useState({});
    var [item1, Set_item1] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});
    const [Burndata, setBurndata] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    var { item , UserAccountAddr , GetUserBal , Set_item  } = props;
    async function FormSubmit(item, Burntoken) {
        console.log(Burntoken, "BurinTokennnnnn", item, "Burntoken=--");
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_13__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_2___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        // if (window.ethereum) {
        // alert(item.contractAddress);
        if (web3 && web3.eth) {
            var connectwallet = localStorage.getItem("nilwireMetamask");
            if (!connectwallet) {
                react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Please connect to a Metamask wallet", toasterOption);
                return false;
            }
            if (noofitems == "") {
                react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Burn token is not allow to empty", toasterOption);
                return false;
            } else if (noofitems == 0) {
                react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Burn token must be greater than zero", toasterOption);
                return false;
            }
            console.log(Burntoken, "BurntokenBurntokenBurntokenBurntokenBeCo--");
            if (Burntoken.type == 721) {
                console.log(Burntoken, "BurntokenBurntokenBurntokenBurntoken");
                var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_8__, item.contractAddress);
                let contract = Burntoken.type === _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].singleType */ .Z.singleType ? item.contractAddress : item.contractAddress;
                setBurnLoading("processing");
                CoursetroContract.methods.burn(Burntoken.tokenCounts).send({
                    from: UserAccountAddr
                }).then(async (result)=>{
                    setBurnLoading("done");
                    var postData = {
                        tokenOwner: UserAccountAddr,
                        tokenCounts: Burntoken.tokenCounts,
                        blockHash: result.blockHash,
                        transactionHash: result.transactionHash,
                        contractAddress: Burntoken.contractAddress,
                        type: Burntoken.type,
                        balance: noofitems,
                        currAddr: UserAccountAddr,
                        quant: Burntoken.balance,
                        ipfsimage: Burntoken.ipfsimage,
                        name: Burntoken.name,
                        price: Burntoken.price
                    };
                    console.log(postData, "postDatattt");
                    var updateBurnField = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_6__/* .BurnField */ .py)(postData);
                    console.log(updateBurnField, "updateBurnFieldupdateBurnField");
                    if (updateBurnField) {
                        react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success("NFT burned succesfully", toasterOption);
                        window.$("#burn_token_modal").modal("hide");
                        // document.getElementById("closeburn").click();
                        window.location.reload();
                    }
                }).catch((error)=>{
                    console.log(error, "ERRRRRRRRRRRRRRR");
                    setBurnLoading("try");
                    react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Transaction rejected by user", toasterOption);
                    setTimeout(()=>window.location.reload(false), 900);
                });
            } else {
                var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_7__, item.contractAddress);
                // alert(item.contractAddress);
                console.log(CoursetroContract, "CoursetroContract");
                let contract = Burntoken.type === _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].singleType */ .Z.singleType ? item.contractAddress : item.contractAddress;
                if (noofitems > MyTokenDetail.balance) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Available Tokens" + " " + MyTokenDetail.balance, toasterOption);
                    return false;
                }
                setBurnLoading("processing");
                console.log(UserAccountAddr, Burntoken.tokenCounts, noofitems, "noofitemsnoofitems");
                CoursetroContract.methods.burn(UserAccountAddr, Burntoken.tokenCounts, noofitems).send({
                    from: props.Accounts
                }).then(async (result)=>{
                    console.log(result, "-------resukt-------");
                    setBurnLoading("done");
                    var postData = {
                        tokenOwner: UserAccountAddr,
                        tokenCounts: Burntoken.tokenCounts,
                        blockHash: result.blockHash,
                        transactionHash: result.transactionHash,
                        contractAddress: Burntoken.contractAddress,
                        type: Burntoken.type,
                        balance: noofitems,
                        currAddr: UserAccountAddr,
                        quant: Burntoken.balance,
                        ipfsimage: Burntoken.ipfsimage,
                        name: Burntoken.name,
                        price: Burntoken.price
                    };
                    console.log(postData, "POstData1155Burn Token");
                    var updateBurnField = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_6__/* .BurnField */ .py)(postData);
                    console.log(updateBurnField, "updateBurnFieldupdateBurnField22");
                    if (updateBurnField) {
                        react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success("Burned successfully", toasterOption);
                        window.$("#burn_token_modal").modal("hide");
                        // document.getElementById("closeburn").click();
                        window.location.reload();
                    }
                }).catch((error)=>{
                    setBurnLoading("try");
                    react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Transaction rejected by user", toasterOption);
                    setTimeout(()=>window.location.reload(false), 900);
                });
            }
        }
    //}
    }
    const TokenCounts_Get_Detail_Call = async (payload)=>{
        var curAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_10__/* .getCurAddr */ .my)();
        setshowingLoader(true);
        var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_6__/* .TokenCounts_Get_Detail_Action */ .u7)(payload);
        console.log(Resp, "Resp-Resp");
        setTimeout(()=>{
            setshowingLoader(false);
        }, 2000);
        if (Resp && Resp && Resp.data && Resp.data.Detail && Resp.data.Detail.Resp) {
            var TokenResp = Resp.data.Detail.Resp;
            if (TokenResp && TokenResp.Token && TokenResp.Token[0] && TokenResp.Token[0].tokenowners_current) {
                for(let i = 0; i < TokenResp.Token[0].tokenowners_current.length; i++){
                    const element = TokenResp.Token[0].tokenowners_current[i];
                    set_owner_price(element);
                    console.log(element, "=====element");
                    if (element.tokenPrice > 0 && element.tokenOwner != curAddr) {
                        Set_BuyOwnerDetailFirst(element);
                        break;
                    }
                    if (element.tokenPrice > 0 && element.tokenOwner == curAddr) {
                        Set_OwnersDetailFirst(element);
                        break;
                    }
                }
            }
            Set_tokenCounts_Detail(TokenResp);
            if (TokenResp.Bids) {
                Set_Bids(TokenResp.Bids);
            }
            var IndexVal = -1;
            if (TokenResp.Token[0].tokenowners_all && curAddr) {
                var tokenowners_all = TokenResp.Token[0].tokenowners_all;
                IndexVal = tokenowners_all.findIndex((val)=>val.tokenOwner.toString() == curAddr.toString() && val.balance > 0);
            }
            if (IndexVal > -1) {
                Set_MyTokenBalance(tokenowners_all[IndexVal].balance);
                console.log(tokenowners_all[IndexVal], "tokenowners_all[IndexVal]tokenowners_all[IndexVal]");
                Set_MyTokenDetail(tokenowners_all[IndexVal]);
            } else {
                Set_MyTokenDetail({});
                Set_MyTokenBalance(0);
            }
            if (TokenResp.Token && TokenResp.Token[0]) {
                Set_item1(TokenResp.Token[0]);
            }
        }
    };
    const hidevalue = (e)=>{
        e.preventDefault();
        setnoofitem(1);
    };
    const handleChange = (e)=>{
        setnoofitem(e.target.value);
    // if (
    //   MyTokenDetail >= e &&
    //   e.target &&
    //   typeof e.target.value != "undefined"
    // ) {
    //   setnoofitem(e.target.value);
    //   setBurnLoading("init");
    // } else if (e.target.value == 0) {
    //   setBurnLoading("zero");
    //   setnoofitem(0);
    // } else if (e.target.value == "") {
    //   setBurnLoading("empty");
    //   setnoofitem("");
    // } else if (e.target.value == undefined) {
    //   setBurnLoading("empty");
    //   setnoofitem("");
    // } else if(e.target.value == null){
    //   setBurnLoading("errors");
    //   setnoofitem("");
    // }  else {
    //   setBurnLoading("errors");
    //   setnoofitem("");
    // }
    // let one = e.target.value;
    // let v = one.includes(".")
    // if(v){
    //   setnoofitem("")
    // }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({
            async Burn_Click (item, burndata) {
                console.log(burndata, item, "burndataburndatasaran");
                var connectwallet = localStorage.getItem("nilwireMetamask");
                if (!connectwallet) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Please connect to a Metamask wallet", toasterOption);
                    return false;
                }
                setBurndata(burndata);
                Set_item(item);
                var curAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_10__/* .getCurAddr */ .my)();
                var payload = {
                    curAddr: curAddr,
                    tokenCounts: item.tokenCounts
                };
                console.log(payload, "paaaaaaaayaaaya");
                TokenCounts_Get_Detail_Call(payload);
                window.$("#burn_token_modal").modal("show");
            }
        }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            burnLoading == "processing" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "transLoading",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: __webpack_require__(6514),
                    className: "img-fluid",
                    alt: ""
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "modal fade primary_modal",
                id: "burn_token_modal",
                tabindex: "-1",
                role: "dialog",
                "data-backdrop": "static",
                "aria-labelledby": "accept_modalCenteredLabel",
                "aria-hidden": "true",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "modal-dialog modal-dialog-centered",
                    role: "document",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal-content form-border",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "modal-header text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "modal-title",
                                        id: "burn_token_modalLabel",
                                        children: "Burn NFT"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: "close",
                                        "data-dismiss": "modal",
                                        "aria-label": "Close",
                                        onClick: hidevalue,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            "aria-hidden": "true",
                                            children: "\xd7"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "modal-body",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img_accept text-center"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-center accept_desc mb-0 mar-top-10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "buy_desc_sm",
                                            children: "Are you sure you want to burn this NFT? This action is irreversible. The NFT will be sent to Zero address on blockchain."
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        class: "input-group mb-3 input_grp_style_1",
                                        children: [
                                            console.log(Burndata, "burndataburndatasaran1"),
                                            Burndata.type != 721 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "number",
                                                onKeyDown: (evt)=>[
                                                        "e",
                                                        "E",
                                                        "+",
                                                        "-",
                                                        ",",
                                                        "."
                                                    ].includes(evt.key) && evt.preventDefault(),
                                                min: "0",
                                                name: "burn",
                                                id: "burn",
                                                placeholder: "Enter no of quantity",
                                                class: "form-control mb-0",
                                                "aria-label": "bid",
                                                "aria-describedby": "basic-addon2",
                                                onChange: handleChange,
                                                value: noofitems,
                                                autoComplete: "off"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        className: "px-4",
                                        children: [
                                            console.log(MyTokenDetail, "MyTokenDetailMyTokenDetail"),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                        className: "btn-main lead mar-top-10 mar-right-15",
                                                        type: "button",
                                                        onClick: ()=>FormSubmit(item, MyTokenDetail),
                                                        disabled: burnLoading == "done" || burnLoading == "processing" || burnLoading == "errors",
                                                        children: [
                                                            burnLoading == "processing" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                class: "fa fa-spinner mr-3 spinner_icon",
                                                                "aria-hidden": "true",
                                                                id: "circle1"
                                                            }),
                                                            burnLoading == "init" && "Continue",
                                                            burnLoading == "processing" && "In-progress...",
                                                            burnLoading == "done" && "Done",
                                                            burnLoading == "try" && "Try Again",
                                                            burnLoading == "errors" && "Check Balance",
                                                            burnLoading == "empty" && "Continue"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "btn-main btnGrey lead mar-top-10",
                                                        "data-dismiss": "modal",
                                                        "aria-label": "Close",
                                                        type: "button",
                                                        onClick: hidevalue,
                                                        children: "Cancel"
                                                    })
                                                ]
                                            })
                                        ]
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