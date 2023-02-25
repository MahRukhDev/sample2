"use strict";
exports.id = 5186;
exports.ids = [5186];
exports.modules = {

/***/ 5186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PutOnSaleRef": () => (/* binding */ PutOnSaleRef)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6679);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1439);
/* harmony import */ var _ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4021);
/* harmony import */ var _ABI_ESC_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6103);
/* harmony import */ var _helper_walletconnect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2213);
/* harmony import */ var _actions_v1_token__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3451);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7416);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helper_walletconnect__WEBPACK_IMPORTED_MODULE_9__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_10__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_11__, react_toastify__WEBPACK_IMPORTED_MODULE_12__]);
([_helper_walletconnect__WEBPACK_IMPORTED_MODULE_9__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_10__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_11__, react_toastify__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









// import Select from "react-select";




react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].toasterOption */ .Z.toasterOption;
//var web3 = new Web3(window.ethereum);
//const ESCContract = new web3.eth.Contract(ESC, config.esctokenAddr);
const price = [
    {
        value: "ETH",
        label: "ETH"
    },
    {
        value: "VALOBIT",
        label: "VALOBIT"
    }
];
const PutOnSaleRef = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const [BuyerName, Set_BuyerName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [blns, Set_blns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [dethBln, Set_dethBln] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [bidProfile1, Set_bidProfile1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [FormSubmitLoading, Set_FormSubmitLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [ValidateError, Set_ValidateError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [YouWillGet, Set_YouWillGet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [TokenPrice, Set_TokenPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [TokenPrice_Initial, Set_TokenPrice_Initial] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [biddingtoken, set_biddingtoken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].currencySymbol */ .Z.currencySymbol);
    const [servicefee, setservicefee] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [PurchaseCurrency, setPurchaseCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].currencySymbol */ .Z.currencySymbol);
    const [TokenBalance, Set_TokenBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [newprice, setNewprice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const inputChange = async (e)=>{
        // var provider = window.ethereum;
        // var web3 = new Web3(provider);
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_9__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        if (e && e.target && typeof e.target.value != "undefined" && e.target.name) {
            var value = e.target.value;
            switch(e.target.name){
                case "TokenPrice":
                    Set_TokenPrice(value);
                    if (value != "" && isNaN(value) == false && value > 0) {
                        var weii = await web3.utils.toWei(value.toString());
                        console.log(value, "value");
                        setNewprice(value);
                        //var web3 = new Web3(window.ethereum);
                        if (item.type == 721) {
                            var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_6__, item.contractAddress);
                            var fee = await CoursetroContract.methods.getServiceFee().call();
                        } else {
                            var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_5__, item.contractAddress);
                            var fee = await CoursetroContract.methods.getServiceFee().call();
                        }
                        var per = weii * fee / 1e20;
                        Set_YouWillGet(parseFloat((weii - per) / _lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].decimalvalues */ .Z.decimalvalues).toFixed(_lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].toFixed */ .Z.toFixed));
                    }
                    ItemValidation({
                        TokenPrice: value
                    });
                    break;
                default:
            }
        }
    };
    const cancelClick = async ()=>{
        document.getElementById("TokenPrice").value = "";
    };
    const SelectBidcurrency = (e)=>{
        var filter = e.target.value;
        set_biddingtoken(filter);
    // getTokenval(filter)
    };
    const onKeyUp = (e)=>{
        var charCode = e.keyCode;
        if (charCode > 47 && charCode < 58 || charCode > 95 && charCode < 106) {
            var ValidateError = {};
            Set_ValidateError(ValidateError);
        } else {
            var ValidateError = {};
            ValidateError.TokenPrice = '"Token Price" must be a number';
            Set_TokenPrice("");
            Set_ValidateError(ValidateError);
        //   return false;
        }
    };
    const ItemValidation = async (data = {})=>{
        var ValidateError = {};
        var Chk_TokenPrice = typeof data.TokenPrice != "undefined" ? data.TokenPrice : TokenPrice;
        if (Chk_TokenPrice == "") {
            ValidateError.TokenPrice = '"Token Price" is not allowed to be empty';
        } else if (Chk_TokenPrice == 0) {
            ValidateError.TokenPrice = '"Token Price" must be greater than 0';
        } else if (isNaN(Chk_TokenPrice) == true) {
            ValidateError.TokenPrice = '"Token Price" must be a number';
        } else if (Math.sign(TokenPrice) < 0) {
            ValidateError.TokenPrice = "Price must be a possitive number";
        } else {
            delete ValidateError.TokenPrice;
        }
        Set_ValidateError(ValidateError);
        return ValidateError;
    };
    function convert(n) {
        var sign = +n < 0 ? "-" : "", toStr = n.toString();
        if (!/e/i.test(toStr)) {
            return n;
        }
        var [lead, decimal, pow] = n.toString().replace(/^-/, "").replace(/^([0-9]+)(e.*)/, "$1.$2").split(/e|\./);
        return +pow < 0 ? sign + "0." + "0".repeat(Math.max(Math.abs(pow) - 1 || 0, 0)) + lead + decimal : sign + lead + (+pow >= decimal.length ? decimal + "0".repeat(Math.max(+pow - decimal.length || 0, 0)) : decimal.slice(0, +pow) + "." + decimal.slice(+pow));
    }
    async function FormSubmit() {
        var errors = await ItemValidation();
        var errorsSize = Object.keys(errors).length;
        if (errorsSize != 0) {
            window.$("#PutOnSale_modal").modal("show");
            // toast.error(
            //   "Form validation error, please fill all the required fields",
            //   toasterOption
            // );
            return false;
        }
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_9__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        if (curAddr) {
            if (web3 && web3.eth) {
                if (item.type == 721) {
                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_6__, item.contractAddress);
                    Set_FormSubmitLoading("processing");
                    var newtoken = TokenPrice.toString();
                    newtoken = parseFloat(newtoken) * _lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].decimalvalues */ .Z.decimalvalues;
                    newtoken = await ChecktokenDecimal(newtoken, _lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].decimalvalues */ .Z.decimalvalues);
                    newtoken = await convert(newtoken);
                    CoursetroContract.methods.orderPlace(props.item.tokenCounts, newtoken.toString()).send({
                        from: props.Accounts
                    }).then(async (result)=>{
                        Set_FormSubmitLoading("done");
                        var postData = {
                            tokenOwner: UserAccountAddr,
                            tokenCounts: props.item.tokenCounts,
                            price: TokenPrice,
                            biddingtoken: biddingtoken,
                            blockHash: result.blockHash,
                            transactionHash: result.transactionHash,
                            TokenPrice_Initial: TokenPrice_Initial
                        };
                        var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_10__/* .TokenPriceChange_update_Action */ .pQ)(postData);
                        if (Resp.data && Resp.data.RetType && Resp.data.RetType == "success") {
                            react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success(" NFT places for sale on marketplace", toasterOption);
                            window.$("#PutOnSale_modal").modal("hide");
                            setTimeout(()=>{
                                window.location.reload(false);
                            }, 2000);
                        }
                    }).catch((error)=>{
                        Set_FormSubmitLoading("error");
                        react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Transaction rejected by user", toasterOption);
                    });
                } else {
                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_5__, item.contractAddress);
                    Set_FormSubmitLoading("processing");
                    let newtoken = TokenPrice.toString();
                    newtoken = parseFloat(newtoken) * _lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].decimalvalues */ .Z.decimalvalues;
                    newtoken = await ChecktokenDecimal(newtoken, _lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].decimalvalues */ .Z.decimalvalues);
                    newtoken = await convert(newtoken);
                    CoursetroContract.methods.orderPlace(props.item.tokenCounts, newtoken.toString()).send({
                        from: props.Accounts
                    }).then(async (result)=>{
                        Set_FormSubmitLoading("done");
                        var postData = {
                            tokenOwner: UserAccountAddr,
                            tokenCounts: props.item.tokenCounts,
                            price: TokenPrice,
                            biddingtoken: biddingtoken,
                            blockHash: result.blockHash,
                            transactionHash: result.transactionHash,
                            TokenPrice_Initial: TokenPrice_Initial
                        };
                        var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_10__/* .TokenPriceChange_update_Action */ .pQ)(postData);
                        if (Resp.data && Resp.data.RetType && Resp.data.RetType == "success") {
                            react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success(" NFT places for sale on marketplace", toasterOption);
                            window.$("#PutOnSale_modal").modal("hide");
                            setTimeout(()=>{
                                window.location.reload(false);
                            }, 2000);
                        }
                    }).catch((error)=>{
                        Set_FormSubmitLoading("error");
                        react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Transaction rejected by user", toasterOption);
                    });
                }
            }
        }
    }
    async function ChecktokenDecimal(amount, decimals) {
        var result = 0;
        var decimalsLength = 18;
        if (decimals && decimals > 0) {
            decimalsLength = decimals;
        }
        amount = parseFloat(amount);
        try {
            var number = amount.toString();
            var number1 = number.split(".");
            if (number1[1] && number1[1].length && number1[1].length > 0) {
                result = number1[0];
            } else {
                result = amount;
            }
            return result;
        } catch (err) {
            return result;
        }
    }
    var { item , UserAccountAddr , UserAccountBal , Set_NoOfToken , NoOfToken  } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getfee();
        Set_ValidateError({});
    }, []);
    async function getfee() {
        try {
            var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_9__/* .getmylog */ .I)();
            const web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
            var curAddr = await web3.eth.getAccounts();
            // if (window.ethereum) {
            //var web3 = new Web3(window.ethereum);
            if (item.type == 721) {
                var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_6__, item.contractAddress);
                var fee = await CoursetroContract.methods.getServiceFee().call();
            } else {
                var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_5__, item.contractAddress);
                var fee = await CoursetroContract.methods.getServiceFee().call();
            }
            var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].decimalvalues */ .Z.decimalvalues;
            setservicefee(feeValue);
        //}
        } catch (err) {}
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({
            async PutOnSale_Click (item, ownerdetail) {
                var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_9__/* .getmylog */ .I)();
                const web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
                //var curAddr = await web3.eth.getAccounts();
                getfee(item);
                var connectwallet = localStorage.getItem("nilwireMetamask");
                if (!connectwallet) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Please connect to a Metamask wallet", toasterOption);
                    return false;
                }
                props.Set_HitItem(item);
                if (ownerdetail && ownerdetail.currency) {
                    if (ownerdetail && ownerdetail.currency == _lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].owntokenSymbol */ .Z.owntokenSymbol) {
                        setPurchaseCurrency(ownerdetail.currency);
                        set_biddingtoken(ownerdetail.currency);
                    } else {
                        setPurchaseCurrency(ownerdetail.currency);
                        set_biddingtoken(ownerdetail.currency);
                    }
                }
                if (ownerdetail.type == 721) {
                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_6__, item.contractAddress);
                    var fee = await CoursetroContract.methods.getServiceFee().call();
                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].decimalvalues */ .Z.decimalvalues;
                    setservicefee(feeValue);
                    Set_TokenPrice_Initial(ownerdetail.price);
                    Set_ValidateError({});
                    window.$("#PutOnSale_modal").modal("show");
                } else {
                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_5__, item.contractAddress);
                    var fee = await CoursetroContract.methods.getServiceFee().call();
                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].decimalvalues */ .Z.decimalvalues;
                    setservicefee(feeValue);
                    Set_TokenPrice_Initial(ownerdetail.price);
                    Set_ValidateError({});
                    window.$("#PutOnSale_modal").modal("show");
                }
                Set_TokenPrice_Initial(ownerdetail.price);
                Set_ValidateError({});
                window.$("#PutOnSale_modal").modal("show");
            }
        }));
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
                className: "modal fade primary_modal",
                id: "PutOnSale_modal",
                "data-backdrop": "static",
                tabindex: "-1",
                role: "dialog",
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
                                        id: "PutOnSale_modalLabel",
                                        children: "NFT for Sale"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: "close",
                                        "data-dismiss": "modal",
                                        "aria-label": "Close",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            "aria-hidden": "true",
                                            onClick: cancelClick,
                                            children: "\xd7"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "modal-body",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img_accept text-center",
                                        children: item && item.image && item.image.split(".").pop() == "mp4" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                            src: `${_lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreator}/${item.image}`,
                                            type: "video/mp4",
                                            alt: "Collections",
                                            className: "img-fluid img-rounded mb-sm-30",
                                            controls: true,
                                            controlsList: "nodownload"
                                        }) : item && item.image && item.image.split(".").pop() == "mp3" || item && item.image && item.image.split(".").pop() == "wav" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: `${_lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Back_URL */ .Z.Back_URL}images/music.png`,
                                                    alt: "",
                                                    className: "img-fluid img-rounded mb-sm-30"
                                                }),
                                                item && item.image && item.image.split(".").pop() == "mp3" || item && item.image && item.image.split(".").pop() == "wav" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                                                    src: `${_lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreatorInfo.curraddress}/${item.image}`,
                                                    type: "audio/mp3",
                                                    controls: true,
                                                    className: "audio audio_widyth"
                                                }) : ""
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: `${_lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreator}/${item.image}`,
                                            alt: "Collections",
                                            className: "img-fluid img-rounded mb-sm-30"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-center accept_desc mb-0 mar-top-10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "buy_desc_sm",
                                            children: "You are about to place order for"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-center accept_desc",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "buy_desc_sm_bold pl-2",
                                                children: item.tokenName
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "buy_desc_sm pl-2",
                                                children: "from "
                                            }),
                                            item.userprofile && item.userprofile.name ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "buy_desc_sm_bold pl-2",
                                                children: item.userprofile.name
                                            }) : item && item.tokenowners_current && item.tokenowners_current.tokenOwner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "buy_desc_sm_bold pl-2",
                                                children: (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_11__/* .halfAddrShow */ .UD)(item && item.tokenowners_current && item.tokenowners_current.tokenOwner)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "input-group mb-3 input_grp_style_1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "New Price",
                                            type: "number",
                                            onKeyDown: (evt)=>[
                                                    "e",
                                                    "E",
                                                    "+",
                                                    "-",
                                                    ","
                                                ].includes(evt.key) && evt.preventDefault(),
                                            min: "0",
                                            name: "TokenPrice",
                                            id: "TokenPrice",
                                            class: "form-control mb-0",
                                            "aria-label": "bid",
                                            "aria-describedby": "basic-addon2",
                                            onChange: inputChange,
                                            // value={newprice}
                                            autoComplete: "off"
                                        })
                                    }),
                                    ValidateError.TokenPrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-danger",
                                        children: ValidateError.TokenPrice
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row mx-0 pb-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 col-sm-6 px-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "buy_desc_sm",
                                                    children: "ETH Service fee"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 col-sm-6 px-4 text-sm-right",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "buy_desc_sm_bold",
                                                    children: [
                                                        servicefee,
                                                        " %"
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row mx-0 pb-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 col-sm-6 px-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "buy_desc_sm",
                                                    children: "You will get"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 col-sm-6 px-4 text-sm-right",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "buy_desc_sm_bold",
                                                    children: [
                                                        YouWillGet,
                                                        " ",
                                                        biddingtoken
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                        className: "px-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-center",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                class: "btn-NewBlock text-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                        className: "btn-main lead mar-top-10 mar-right-15",
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
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "btn-main btnGrey lead mar-top-10",
                                                        "data-dismiss": "modal",
                                                        "aria-label": "Close",
                                                        type: "button",
                                                        onClick: cancelClick,
                                                        children: "Cancel"
                                                    })
                                                ]
                                            })
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