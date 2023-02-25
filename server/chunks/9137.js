exports.id = 9137;
exports.ids = [9137];
exports.modules = {

/***/ 6514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.d158bc19.png","height":200,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAArUlEQVR42l3OvQqDMBQF4DxNKfT9t8bYCHZzENSKicXBOhTpotIk6ulVtIMfZMm5f2xz9oXwy7K0T3qBlGL5+4dpmrY4KIqiXYs8zxMg8zwbaw2GYcA4jsY5h3sY3pjW+gvSNA2iKEIcx8jzHNM0oaoqy5Qq1oJHluFV1+Cco+s6LOget6zgNB593xvq2kMDIqUMGDmlSfLGAU38UHZhmxPnV09rZbRSVggh9/AHiF2/AN+KpdMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 5498:
/***/ ((module) => {

const isEmpty = (value)=>value === undefined || value === null || typeof value === "object" && Object.keys(value).length === 0 || typeof value === "string" && value.trim().length === 0;
module.exports = isEmpty;


/***/ }),

/***/ 9137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceAndAcceptBidRef": () => (/* binding */ PlaceAndAcceptBidRef)
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
/* harmony import */ var _ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4021);
/* harmony import */ var _ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1439);
/* harmony import */ var _ABI_ESC_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30);
/* harmony import */ var _ABI_WBNB_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4164);
/* harmony import */ var _lib_isEmpty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5498);
/* harmony import */ var _lib_isEmpty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_isEmpty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7416);
/* harmony import */ var _helper_walletconnect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2213);
/* harmony import */ var _actions_v1_token__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3451);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_v1_user__WEBPACK_IMPORTED_MODULE_12__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_13__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_14__, react_toastify__WEBPACK_IMPORTED_MODULE_15__]);
([_actions_v1_user__WEBPACK_IMPORTED_MODULE_12__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_13__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_14__, react_toastify__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].toasterOption */ .Z.toasterOption;
//var web3 = new Web3(window.ethereum);
//const EscContract = new web3.eth.Contract(ESC_ABI, config.esctokenAddr);
const bidprice = [
    {
        value: _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].owntokenSymbol */ .Z.owntokenSymbol,
        label: _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].owntokenSymbol */ .Z.owntokenSymbol
    },
    {
        value: _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol,
        label: _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol
    }
];
const PlaceAndAcceptBidRef = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const [BidformSubmit, Set_BidformSubmit] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [NoOfToken_NeedToSend, Set_NoOfToken_NeedToSend] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [MetaMaskAmt, setMetaMaskAmt] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [FormSubmitLoading, Set_FormSubmitLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [AcceptCallStatus, setAccaptCallStatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("init");
    const [biddingtoken, set_biddingtoken] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol);
    const [wethbalance, set_wethbalance] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [bidtokenbalance, set_bidtokenbalance] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [servicefee, setservicefee] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [biddingfee, set_biddingfee] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].fee */ .Z.fee / 1e18);
    const [PurchaseCurrency, setPurchaseCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("ESC");
    const [typeofcollection, setTypeofcollection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [owneraddress, setOwneraddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [bitamount, setbitamount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [quantity, setquantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [itemQuantity, setitemQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    var { Set_WalletConnected , Set_UserAccountAddr , Set_UserAccountBal , Set_AddressUserDetails , Set_Accounts , Set_MyItemAccountAddr , Set_tokenCounts , Set_item , Set_tokenCounts_Detail , Set_MyTokenBalance , Set_Bids , Set_AccepBidSelect , Set_tokenBidAmt , Set_NoOfToken , Set_ValidateError , Set_TokenBalance , Set_YouWillPay , Set_YouWillPayFee , Set_YouWillGet , Set_BidApply_ApproveCallStatus , Set_BidApply_SignCallStatus , setTotaluserbidAmt , BidApply_ApproveCallStatus , totaluserbidAmt , WalletConnected , UserAccountAddr , UserAccountBal , AddressUserDetails , Accounts , MyItemAccountAddr , tokenCounts , item , tokenCounts_Detail , MyTokenBalance , Bids , AccepBidSelect , tokenBidAmt , NoOfToken , ValidateError , TokenBalance , YouWillPay , YouWillPayFee , YouWillGet , BidApply_ApproveCallStatus , BidApply_SignCallStatus , AllowedQuantity , Set_Tabname , Tabname  } = props;
    const inputChange = (e)=>{
        if (e && e.target && typeof e.target.value != "undefined" && e.target.name) {
            var value = e.target.value;
            switch(e.target.name){
                case "tokenBidAmt":
                    setbitamount(value);
                    if (value != "" && isNaN(value) == false && value > 0) {
                        console.log(value, "log");
                        Set_tokenBidAmt(value);
                        PriceCalculate_this({
                            tokenBidAmt: value,
                            biddingtoken: biddingtoken,
                            typeofcollection: typeofcollection
                        });
                        ValidateError.tokenBidAmt = "";
                        Set_ValidateError(ValidateError);
                    } else {
                        ValidateError.tokenBidAmt = "Enter Valid price";
                        Set_ValidateError(ValidateError);
                        Set_tokenBidAmt(value);
                        PriceCalculate_this({
                            tokenBidAmt: value,
                            biddingtoken: biddingtoken,
                            typeofcollection: typeofcollection
                        });
                    }
                    break;
                case "NoOfToken":
                    setquantity(value);
                    Set_NoOfToken(value);
                    PriceCalculate_this({
                        NoOfToken: value,
                        biddingtoken: biddingtoken,
                        typeofcollection: typeofcollection
                    });
                    break;
            }
        }
    };
    const myclick = async ()=>{
        // alert("hi")
        setquantity("");
        setbitamount("");
    };
    async function PriceCalculate_this(data = {}) {
        var price = typeof data.tokenBidAmt != "undefined" ? data.tokenBidAmt : tokenBidAmt;
        var quantity = typeof data.NoOfToken != "undefined" ? data.NoOfToken : NoOfToken;
        if (price == "") {
            price = 0;
        }
        if (quantity == "") {
            quantity = 0;
        }
        if (isNaN(price) != true && isNaN(quantity) != true) {
            try {
                var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_13__/* .getmylog */ .I)();
                const web3 = new (web3__WEBPACK_IMPORTED_MODULE_2___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
                var curAddr = await web3.eth.getAccounts();
                if (curAddr) {
                    //var web3 = new Web3(window.ethereum);
                    // alert(data.typeofcollection)
                    if (data.typeofcollection == 721) {
                        var totalPrice = price;
                        var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_6__, item.contractAddress);
                        var fee = await CoursetroContract.methods.getServiceFee().call();
                        totalPrice = parseFloat(totalPrice) * _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                        var per = totalPrice * fee / 1e20;
                        var sendMMAmt = totalPrice + per;
                        setMetaMaskAmt(sendMMAmt + 100);
                        var finalPrice = sendMMAmt / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                        var totalPriceWithFee = parseFloat(finalPrice).toFixed(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].toFixed */ .Z.toFixed);
                        Set_YouWillPay(totalPriceWithFee);
                    } else {
                        var totalPrice = price;
                        var totalPrice = totalPrice * _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                        var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_7__, item.contractAddress);
                        var fee = await CoursetroContract.methods.getServiceFee().call();
                        totalPrice = parseFloat(totalPrice) * quantity;
                        var per = totalPrice * fee / 1e20;
                        var sendMMAmt = totalPrice + per;
                        setMetaMaskAmt(sendMMAmt + 100);
                        var finalPrice = sendMMAmt / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                        var totalPriceWithFee = parseFloat(finalPrice).toFixed(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].toFixed */ .Z.toFixed);
                        Set_YouWillPay(totalPriceWithFee);
                    }
                }
            } catch (err) {}
        } else {
            Set_YouWillPay(0);
        }
    }
    const Validation_PlaceABid = (chk)=>{
        if (chk) {
            var ValidateError = {};
            if (item.type != 721) {
                function isInt(value) {
                    var er = /^-?[0-9]+$/;
                    return er.test(value);
                }
                if (NoOfToken == "") {
                    ValidateError.NoOfToken = '"Quantity" is not allowed to be empty';
                } else if (isNaN(NoOfToken) == true || NoOfToken == "" || NoOfToken == null || NoOfToken == undefined) {
                    ValidateError.NoOfToken = '"Quantity" must be a number';
                } else if (NoOfToken == 0) {
                    ValidateError.NoOfToken = '"Quantity" must be greater than 0';
                } else if (NoOfToken > AllowedQuantity) {
                    ValidateError.NoOfToken = '"Quantity" must be less than or equal to ' + AllowedQuantity;
                } else if (!isInt(NoOfToken)) {
                    ValidateError.NoOfToken = '"Quantity" must be a Integer';
                }
            }
            if (tokenBidAmt == "") {
                ValidateError.tokenBidAmt = '"Bid amount" is not allowed to be empty';
            } else if (isNaN(tokenBidAmt) == true) {
                ValidateError.tokenBidAmt = '"Bid amount" must be a number';
            } else if (tokenBidAmt == 0) {
                ValidateError.tokenBidAmt = '"Bid amount" must be greater than 0';
            } else if (tokenBidAmt < 0) {
                ValidateError.tokenBidAmt = '"Bid amount" must be greater than 0';
            } else if (item.PutOnSaleType != "FixedPrice" && item.PutOnSaleType != " " && item.PutOnSaleType == "TimedAuction" && item.minimumBid > tokenBidAmt) {
                ValidateError.tokenBidAmt = '"Minimum Bid Amount" must be higher than or equal to ' + item.minimumBid;
            } else if (item.PutOnSaleType != "FixedPrice" && item.PutOnSaleType != " " && item.PutOnSaleType == "TimedAuction" && item.maximumBid < tokenBidAmt) {
                // alert(tokenBidAmt)
                // alert(item.maximumBid)
                // alert(item.PutOnSaleType)
                ValidateError.tokenBidAmt = '"Maximum Bid Amount" must be Lower than or equal to ' + item.maximumBid;
            }
            Set_ValidateError(ValidateError);
            console.log(ValidateError, "-==---");
            return ValidateError;
        }
    };
    async function FormSubmit_PlaceABid(e) {
        // setquantity("");
        // setbitamount("")
        Set_BidformSubmit(true);
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_13__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_2___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        if (curAddr) {
            // var web3 = new Web3(window.ethereum);
            // var currAddr = window.web3.eth.defaultAccount;
            if (biddingtoken == _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol) {
                var CoursetroContract = new web3.eth.Contract(_ABI_WBNB_json__WEBPACK_IMPORTED_MODULE_9__, _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenAddress */ .Z.tokenAddress);
            } else {
                var CoursetroContract = new web3.eth.Contract(_ABI_WBNB_json__WEBPACK_IMPORTED_MODULE_9__, _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenAddress */ .Z.tokenAddress);
            }
            // alert(currAddr);
            var tokenBal = await CoursetroContract.methods.balanceOf(curAddr[0].toLowerCase()).call();
            var balcheck = tokenBal / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
            if (balcheck == 0) {
                react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.error("Insufficient" + " " + biddingtoken + " " + "Token Balance", toasterOption);
                return false;
            }
            if (YouWillPay > balcheck) {
                react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.error("Insufficient" + " " + biddingtoken + " " + "Token Balance", toasterOption);
                return false;
            }
            var errors = await Validation_PlaceABid(true);
            var errorsSize = Object.keys(errors).length;
            if (errorsSize != 0) {
                console.log(errorsSize, "errorsSize");
                window.$("#place_bid_modal").modal("show");
                // toast.error(
                //   "Form validation error, please fill all the required fields",
                //   toasterOption
                // );
                return false;
            }
            window.$("#place_bid_modal").modal("hide");
            window.$("#edit_bid_modal").modal("hide");
            window.$("#proceed_bid_modal").modal("show");
        }
    }
    async function BidApply_ApproveCall() {
        // if (!window.ethereum) {
        //   toast.warning("OOPS!..connect Your Wallet", toasterOption);
        //   return false;
        // }
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_13__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_2___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        //var web3 = new Web3(window.ethereum);
        var currAddr = curAddr[0].toLowerCase();
        if (!currAddr) {
            react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.warning("OOPS!..connect Your Wallet", toasterOption);
        }
        Set_BidApply_ApproveCallStatus("processing");
        var CoursetroContract = new web3.eth.Contract(_ABI_WBNB_json__WEBPACK_IMPORTED_MODULE_9__, _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenAddress */ .Z.tokenAddress);
        //var currAddr = window.web3.eth.defaultAccount;
        var tokenBal = await CoursetroContract.methods.balanceOf(currAddr).call();
        var tokenBalance = tokenBal / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
        if (item.type == 721) {
            var getAllowance = await CoursetroContract.methods.allowance(currAddr, item.contractAddress).call();
        } else {
            var getAllowance = await CoursetroContract.methods.allowance(currAddr, item.contractAddress).call();
        }
        var sendVal = parseInt(MetaMaskAmt) + parseInt(getAllowance);
        if (tokenBalance == 0) {
            react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.error("Insufficient" + " " + biddingtoken + "" + "Token Balance", toasterOption);
            return false;
        }
        if (YouWillPay > tokenBalance) {
            react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.error("Insufficient" + " " + biddingtoken + "" + "Token Balance", toasterOption);
            return false;
        }
        // alert(sendVal.toString());
        // alert("saran");
        await CoursetroContract.methods.approve(item.type == 721 ? item.contractAddress : item.contractAddress, sendVal.toString()).send({
            from: Accounts
        }).then(async (result)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.success("Wallet authorized", toasterOption);
            var BidData = {
                tokenCounts: item.tokenCounts,
                tokenBidAddress: UserAccountAddr,
                tokenBidAmt: tokenBidAmt.toString(),
                NoOfToken: item.type == 721 ? 1 : NoOfToken,
                BidToken: biddingtoken
            };
            var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_14__/* .BidApply_ApproveAction */ .Um)(BidData);
            if (Resp.data && Resp.data.type && Resp.data.type == "success") {
                Set_BidApply_ApproveCallStatus("done");
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.error("Wallet authorization failed", toasterOption);
                Set_BidApply_ApproveCallStatus("tryagain");
            }
        }).catch((error)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.error("Wallet authorization failed", toasterOption);
            Set_BidApply_ApproveCallStatus("tryagain");
        });
    }
    async function BidApply_SignCall() {
        // if (!window.ethereum) {
        //   toast.warning("OOPS!..connect Your Wallet", toasterOption);
        //   return;
        // }
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_13__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_2___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        var currAddr = curAddr[0].toLowerCase();
        if (!currAddr) {
            react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.warning("OOPS!..connect Your Wallet", toasterOption);
            return;
        }
        Set_BidApply_SignCallStatus("processing");
        web3.eth.personal.sign("Bidding a Art", currAddr, "Bid Placed").then(async (result)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.success("Bid placed successfully", toasterOption);
            Set_BidApply_SignCallStatus("done");
            setTimeout(()=>window.$("#proceed_bid_modal").modal("hide"), 600);
            setTimeout(()=>window.location.reload(), 1200);
        }).catch(()=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.error("Action rejected by user", toasterOption);
            Set_BidApply_SignCallStatus("tryagain");
        });
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
    async function AcceptBid_Proceed() {
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_13__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_2___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        if (curAddr) {
            //var web3 = new Web3(window.ethereum);
            if (NoOfToken_NeedToSend) {
                if (item.type == 721) {
                    // var web3 = new Web3(window.ethereum);
                    var WBNBContract = new web3.eth.Contract(_ABI_WBNB_json__WEBPACK_IMPORTED_MODULE_9__, _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenAddress */ .Z.tokenAddress);
                    var tokenBal = await WBNBContract.methods.balanceOf(AccepBidSelect.tokenBidAddress).call();
                    var tokenBalance = tokenBal / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                    var valueesss = parseFloat(YouWillPayFee) * parseFloat(NoOfToken_NeedToSend) + parseFloat(AccepBidSelect.tokenBidAmt) * parseFloat(NoOfToken_NeedToSend);
                    if (tokenBalance >= valueesss) {
                        // alert('yes')
                        var BEP721Contract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_6__, item.contractAddress);
                        setAccaptCallStatus("processing");
                        var tokenaddress = _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol;
                        var passAmt = parseFloat(NoOfToken_NeedToSend) * parseFloat(AccepBidSelect.tokenBidAmt);
                        passAmt = passAmt;
                        passAmt = passAmt * _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                        passAmt = await ChecktokenDecimal(passAmt, _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues);
                        console.log(passAmt, "========passAmt");
                        //passAmt = parseFloat(passAmt)*10000
                        passAmt = await convert(passAmt);
                        //passAmt = (passAmt / 10000).toString();
                        var CoursetroContract = new web3.eth.Contract(_ABI_WBNB_json__WEBPACK_IMPORTED_MODULE_9__, _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenAddress */ .Z.tokenAddress);
                        var getAllowance = await CoursetroContract.methods.allowance(AccepBidSelect.tokenBidAddress, item.contractAddress).call();
                        // alert(getAllowance);
                        await BEP721Contract.methods.acceptBId(AccepBidSelect.currency, AccepBidSelect.tokenBidAddress, passAmt.toString(), AccepBidSelect.tokenCounts).send({
                            from: Accounts
                        }).then(async (result)=>{
                            var acceptBId_Payload = {
                                tokenCounts: AccepBidSelect.tokenCounts,
                                NoOfToken: NoOfToken_NeedToSend,
                                tokenBidAddress: AccepBidSelect.tokenBidAddress,
                                UserAccountAddr_byaccepter: curAddr,
                                transactionHash: result.transactionHash,
                                currecy: AccepBidSelect.currency
                            };
                            var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_14__/* .acceptBId_Action */ .uO)(acceptBId_Payload);
                            // alert(1);
                            setAccaptCallStatus("done");
                            react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.success("Bid accepted", toasterOption);
                            setTimeout(()=>window.$(".modal").modal("hide"), 600);
                            window.location.reload(false);
                        }).catch((err)=>{
                            react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.error("Accept failed", toasterOption);
                            setAccaptCallStatus("tryagain");
                        });
                    } else {
                        react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.error("Bidder doesnt have Enough balance", toasterOption);
                        return false;
                    }
                } else {
                    // var web3 = new Web3(window.ethereum);
                    var WBNBContract = new web3.eth.Contract(_ABI_WBNB_json__WEBPACK_IMPORTED_MODULE_9__, _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenAddress */ .Z.tokenAddress);
                    var tokenBal = await WBNBContract.methods.balanceOf(AccepBidSelect.tokenBidAddress).call();
                    var tokenBalance = tokenBal / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                    var valueesss = parseFloat(YouWillPayFee) * parseFloat(NoOfToken_NeedToSend) + parseFloat(AccepBidSelect.tokenBidAmt) * parseFloat(NoOfToken_NeedToSend);
                    if (tokenBalance >= valueesss) {
                        var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_7__, item.contractAddress);
                        setAccaptCallStatus("processing");
                        var passAmt = parseFloat(AccepBidSelect.tokenBidAmt) * parseFloat(NoOfToken_NeedToSend);
                        passAmt = passAmt;
                        passAmt = passAmt * _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                        passAmt = await ChecktokenDecimal(passAmt, _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues);
                        //passAmt = parseFloat(passAmt)*10000
                        passAmt = await convert(passAmt);
                        //passAmt = (passAmt / 10000).toString();
                        console.log(passAmt, "========passAmt123");
                        await CoursetroContract.methods.acceptBId(AccepBidSelect.currency, AccepBidSelect.tokenBidAddress, passAmt.toString(), AccepBidSelect.tokenCounts, NoOfToken_NeedToSend).send({
                            from: Accounts
                        }).then(async (result)=>{
                            var acceptBId_Payload = {
                                tokenCounts: AccepBidSelect.tokenCounts,
                                NoOfToken: NoOfToken_NeedToSend,
                                tokenBidAddress: AccepBidSelect.tokenBidAddress,
                                UserAccountAddr_byaccepter: curAddr,
                                transactionHash: result.transactionHash,
                                currecy: AccepBidSelect.currency
                            };
                            var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_14__/* .acceptBId_Action */ .uO)(acceptBId_Payload);
                            // alert(3)
                            setAccaptCallStatus("done");
                            setTimeout(()=>window.$(".modal").modal("hide"), 600);
                            window.location.reload();
                        }).catch((err)=>{
                            react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.error("Accept failed", toasterOption);
                            setAccaptCallStatus("tryagain");
                        });
                    } else {
                        react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.error("Bidder doesnt have Enough balance", toasterOption);
                        return false;
                    }
                }
            }
        // else {
        // }
        }
    }
    async function CancelBid_Proceed(curBid_val) {
        var payload = {
            tokenCounts: curBid_val.tokenCounts,
            tokenBidAddress: curBid_val.tokenBidAddress
        };
        var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_14__/* .CancelBid_Action */ .ZR)(payload);
        if (Resp && Resp.data && Resp.data.toast && Resp.data.toast.type && Resp.data.toast.message) {
            if (Resp.data.toast.type == "error") {
                react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.error(Resp.data.toast.message, toasterOption);
            } else if (Resp.data.toast.type == "success") {
                react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.success(Resp.data.toast.message, toasterOption);
            }
        }
        setTimeout(()=>window.$(".modal").modal("hide"), 600);
        setTimeout(()=>window.location.reload(), 1200);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({
            async PlaceABid_Click (item, MyTokenDetail) {
                Set_ValidateError({});
                var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_13__/* .getmylog */ .I)();
                const web3 = new (web3__WEBPACK_IMPORTED_MODULE_2___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
                var curAddr = await web3.eth.getAccounts();
                var currAddr = curAddr && curAddr[0].toLowerCase();
                if (curAddr) {
                    curAddr = curAddr[0].toLowerCase();
                }
                var payload = {
                    curAddr: curAddr,
                    tokenCounts: item.tokenCounts
                };
                var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_14__/* .TokenCounts_Get_Detail_Action */ .u7)(payload);
                setitemQuantity(Resp.data.Detail.Resp.TotalQuantity);
                // console.log(Resp.data.Detail.Resp.OnSaleBalance,'Or TotalQuantity');
                if (Resp && Resp && Resp.data && Resp.data.Detail && Resp.data.Detail.Resp) {
                    var TokenResp = Resp.data.Detail.Resp;
                    if (TokenResp.Bids) {
                        Set_Bids(TokenResp.Bids);
                    }
                }
                Set_BidformSubmit(false);
                var connectwallet = localStorage.getItem("nilwireMetamask");
                if (!connectwallet) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.error("Please connect to a Metamask wallet", toasterOption);
                    return false;
                }
                if (Tabname == "Info") {
                    setTypeofcollection(item.type);
                    if (item && item.tokenowners_current && item.tokenowners_current[0] && item.tokenowners_current[0].currency) {
                        setOwneraddress(item.tokenowners_current[0].tokenOwner);
                        setPurchaseCurrency(item.tokenowners_current[0].currency);
                        set_biddingtoken(item.tokenowners_current[0].currency);
                        try {
                            // var web3 = new Web3(window.ethereum);
                            if (item && item.tokenowners_current && item.tokenowners_current[0].currency == _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].currencySymbol */ .Z.currencySymbol) {
                                var WBNBContract = new web3.eth.Contract(_ABI_WBNB_json__WEBPACK_IMPORTED_MODULE_9__, _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenAddress */ .Z.tokenAddress);
                                //var currAddr = window.web3.eth.defaultAccount;
                                var decimal = await WBNBContract.methods.decimals().call();
                                var tokenBal = await WBNBContract.methods.balanceOf(currAddr).call();
                                var tokenBalance = tokenBal / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                Set_TokenBalance(tokenBalance.toFixed(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].toFixed */ .Z.toFixed));
                                setPurchaseCurrency(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol);
                                set_biddingtoken(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol);
                                if (item.type == 721) {
                                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_6__, item.contractAddress);
                                    var fee = await CoursetroContract.methods.getServiceFee().call();
                                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                    setservicefee(feeValue);
                                } else {
                                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_7__, item.contractAddress);
                                    var fee = await CoursetroContract.methods.getServiceFee().call();
                                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                    setservicefee(feeValue);
                                }
                            } else if (item && item.tokenowners_current && item.tokenowners_current[0].currency == _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].owntokenSymbol */ .Z.owntokenSymbol) {
                                var WBNBContract = new web3.eth.Contract(_ABI_WBNB_json__WEBPACK_IMPORTED_MODULE_9__, _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenAddress */ .Z.tokenAddress);
                                //var currAddr = window.web3.eth.defaultAccount;
                                var decimal = await WBNBContract.methods.decimals().call();
                                var tokenBal = await WBNBContract.methods.balanceOf(currAddr).call();
                                var tokenBalance = tokenBal / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                Set_TokenBalance(tokenBalance.toFixed(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].toFixed */ .Z.toFixed));
                                setPurchaseCurrency(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol);
                                set_biddingtoken(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol);
                                if (item.type == 721) {
                                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_6__, item.contractAddress);
                                    var fee = await CoursetroContract.methods.getServiceFee().call();
                                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                    setservicefee(feeValue);
                                } else {
                                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_7__, item.contractAddress);
                                    var fee = await CoursetroContract.methods.getServiceFee().call();
                                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                    setservicefee(feeValue);
                                }
                            } else if (item && item.tokenowners_current && item.tokenowners_current[0].currency == _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol) {
                                var WETHContract = new web3.eth.Contract(_ABI_WBNB_json__WEBPACK_IMPORTED_MODULE_9__, _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenAddress */ .Z.tokenAddress);
                                //var currAddr = window.web3.eth.defaultAccount;
                                var decimal = await WETHContract.methods.decimals().call();
                                var tokenBal = await WETHContract.methods.balanceOf(currAddr).call();
                                var tokenBalance = tokenBal / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                Set_TokenBalance(tokenBalance.toFixed(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].toFixed */ .Z.toFixed));
                                setPurchaseCurrency(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol);
                                set_biddingtoken(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol);
                                if (item.type == 721) {
                                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_6__, item.contractAddress);
                                    var fee = await CoursetroContract.methods.getServiceFee().call();
                                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                    setservicefee(feeValue);
                                } else {
                                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_7__, item.contractAddress);
                                    var fee = await CoursetroContract.methods.getServiceFee().call();
                                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                    setservicefee(feeValue);
                                }
                            } else {
                                var WBNBContract = new web3.eth.Contract(_ABI_WBNB_json__WEBPACK_IMPORTED_MODULE_9__, _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenAddress */ .Z.tokenAddress);
                                //var currAddr = window.web3.eth.defaultAccount;
                                var decimal = await WBNBContract.methods.decimals().call();
                                var tokenBal = await WBNBContract.methods.balanceOf(currAddr).call();
                                var tokenBalance = tokenBal / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                Set_TokenBalance(tokenBalance.toFixed(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].toFixed */ .Z.toFixed));
                                setPurchaseCurrency(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol);
                                set_biddingtoken(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol);
                                if (item.type == 721) {
                                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_6__, item.contractAddress);
                                    var fee = await CoursetroContract.methods.getServiceFee().call();
                                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                    setservicefee(feeValue);
                                } else {
                                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_7__, item.contractAddress);
                                    var fee = await CoursetroContract.methods.getServiceFee().call();
                                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                    setservicefee(feeValue);
                                }
                            }
                        } catch (err) {}
                    }
                } else {
                    setTypeofcollection(item.type);
                    if (item && item.tokenowners_current && item.tokenowners_current.currency) {
                        setOwneraddress(item.tokenowners_current.tokenOwner);
                        setPurchaseCurrency(item.tokenowners_current.currency);
                        set_biddingtoken(item.tokenowners_current.currency);
                        try {
                            // var web3 = new Web3(window.ethereum);
                            if (item && item.tokenowners_current && item.tokenowners_current.currency == _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].currencySymbol */ .Z.currencySymbol) {
                                var WBNBContract = new web3.eth.Contract(_ABI_WBNB_json__WEBPACK_IMPORTED_MODULE_9__, _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenAddress */ .Z.tokenAddress);
                                //var currAddr = window.web3.eth.defaultAccount;
                                var decimal = await WBNBContract.methods.decimals().call();
                                var tokenBal = await WBNBContract.methods.balanceOf(currAddr).call();
                                var tokenBalance = tokenBal / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                Set_TokenBalance(tokenBalance.toFixed(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].toFixed */ .Z.toFixed));
                                setPurchaseCurrency(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol);
                                set_biddingtoken(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol);
                                if (item.type == 721) {
                                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_6__, item.contractAddress);
                                    var fee = await CoursetroContract.methods.getServiceFee().call();
                                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                    setservicefee(feeValue);
                                } else {
                                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_7__, item.contractAddress);
                                    var fee = await CoursetroContract.methods.getServiceFee().call();
                                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                    setservicefee(feeValue);
                                }
                            } else if (item && item.tokenowners_current && item.tokenowners_current.currency == _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].owntokenSymbol */ .Z.owntokenSymbol) {
                                var WBNBContract = new web3.eth.Contract(_ABI_WBNB_json__WEBPACK_IMPORTED_MODULE_9__, _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenAddress */ .Z.tokenAddress);
                                //var currAddr = window.web3.eth.defaultAccount;
                                var decimal = await WBNBContract.methods.decimals().call();
                                var tokenBal = await WBNBContract.methods.balanceOf(currAddr).call();
                                var tokenBalance = tokenBal / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                Set_TokenBalance(tokenBalance.toFixed(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].toFixed */ .Z.toFixed));
                                setPurchaseCurrency(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol);
                                set_biddingtoken(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol);
                                if (item.type == 721) {
                                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_6__, item.contractAddress);
                                    var fee = await CoursetroContract.methods.getServiceFee().call();
                                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                    setservicefee(feeValue);
                                } else {
                                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_7__, item.contractAddress);
                                    var fee = await CoursetroContract.methods.getServiceFee().call();
                                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                    setservicefee(feeValue);
                                }
                            } else if (item && item.tokenowners_current && item.tokenowners_current.currency == _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol) {
                                var WETHContract = new web3.eth.Contract(_ABI_WBNB_json__WEBPACK_IMPORTED_MODULE_9__, _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenAddress */ .Z.tokenAddress);
                                //var currAddr = window.web3.eth.defaultAccount;
                                var decimal = await WETHContract.methods.decimals().call();
                                var tokenBal = await WETHContract.methods.balanceOf(currAddr).call();
                                var tokenBalance = tokenBal / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                Set_TokenBalance(tokenBalance.toFixed(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].toFixed */ .Z.toFixed));
                                setPurchaseCurrency(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol);
                                set_biddingtoken(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol);
                                if (item.type == 721) {
                                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_6__, item.contractAddress);
                                    var fee = await CoursetroContract.methods.getServiceFee().call();
                                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                    setservicefee(feeValue);
                                } else {
                                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_7__, item.contractAddress);
                                    var fee = await CoursetroContract.methods.getServiceFee().call();
                                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                    setservicefee(feeValue);
                                }
                            } else {
                                var WBNBContract = new web3.eth.Contract(_ABI_WBNB_json__WEBPACK_IMPORTED_MODULE_9__, _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenAddress */ .Z.tokenAddress);
                                //var currAddr = window.web3.eth.defaultAccount;
                                var decimal = await WBNBContract.methods.decimals().call();
                                var tokenBal = await WBNBContract.methods.balanceOf(currAddr).call();
                                var tokenBalance = tokenBal / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                Set_TokenBalance(tokenBalance.toFixed(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].toFixed */ .Z.toFixed));
                                setPurchaseCurrency(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol);
                                set_biddingtoken(_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol);
                                if (item.type == 721) {
                                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_6__, item.contractAddress);
                                    var fee = await CoursetroContract.methods.getServiceFee().call();
                                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                    setservicefee(feeValue);
                                } else {
                                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_7__, item.contractAddress);
                                    var fee = await CoursetroContract.methods.getServiceFee().call();
                                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                    setservicefee(feeValue);
                                }
                            }
                        } catch (err) {}
                    }
                }
                window.$("#place_bid_modal").modal("show");
            },
            async PriceCalculate (data = {}) {
                PriceCalculate_this(data);
                Set_ValidateError({});
            },
            async AcceptBid_Select (curBid_val, item) {
                Set_ValidateError({});
                if (window.ethereum) {
                    if (curBid_val && curBid_val.tokenBidAmt) {
                        window.$("#accept_modal").modal("show");
                        Set_AccepBidSelect(curBid_val);
                        if (MyTokenBalance < curBid_val.pending) {
                            Set_NoOfToken_NeedToSend(MyTokenBalance);
                            var totalAmt = MyTokenBalance * curBid_val.tokenBidAmt;
                        } else {
                            Set_NoOfToken_NeedToSend(curBid_val.pending);
                            var totalAmt = curBid_val.pending * curBid_val.tokenBidAmt;
                        }
                        try {
                            var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_13__/* .getmylog */ .I)();
                            const web3 = new (web3__WEBPACK_IMPORTED_MODULE_2___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
                            var curAddr = await web3.eth.getAccounts();
                            if (web3.eth) {
                                if (item.type == 721) {
                                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_6__, item.contractAddress);
                                    var fee = await CoursetroContract.methods.getServiceFee().call();
                                    var ServiceFee_val = totalAmt * fee / 1e20;
                                    Set_YouWillPayFee(ServiceFee_val);
                                    set_biddingfee(fee / 1e18);
                                    var YouWillGet_Val = totalAmt - ServiceFee_val;
                                    Set_YouWillGet(YouWillGet_Val);
                                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                    // alert(feeValue);
                                    setservicefee(feeValue);
                                } else {
                                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_7__, item.contractAddress);
                                    var fee = await CoursetroContract.methods.getServiceFee().call();
                                    var ServiceFee_val = totalAmt * fee / 1e20;
                                    Set_YouWillPayFee(ServiceFee_val);
                                    set_biddingfee(fee / 1e18);
                                    var YouWillGet_Val = totalAmt - ServiceFee_val;
                                    Set_YouWillGet(YouWillGet_Val);
                                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].decimalvalues */ .Z.decimalvalues;
                                    setservicefee(feeValue);
                                }
                            }
                        } catch (err) {}
                    }
                }
            },
            async CancelBid_Select (curBid_val) {
                Set_ValidateError({});
                if (curBid_val && curBid_val.pending > 0 && (curBid_val.status == "pending" || curBid_val.status == "partiallyCompleted")) {
                    Set_AccepBidSelect(curBid_val);
                    window.$("#cancel_modal").modal("show");
                } else {
                    window.$(".modal").modal("hide");
                }
            }
        }));
    function convert(n) {
        let sign = +n < 0 ? "-" : "", toStr = n?.toString() || "";
        if (!/e/i.test(toStr)) {
            return n;
        }
        let [lead, decimal, pow] = n.toString().replace(/^-/, "").replace(/^([0-9]+)(e.*)/, "$1.$2").split(/e|\./);
        return +pow < 0 ? sign + "0." + "0".repeat(Math.max(Math.abs(pow) - 1 || 0, 0)) + lead + decimal : sign + lead + (+pow >= decimal.length ? decimal + "0".repeat(Math.max(+pow - decimal.length || 0, 0)) : decimal.slice(0, +pow) + "." + decimal.slice(+pow));
    }
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
                onClick: ()=>Validation_PlaceABid(BidformSubmit),
                id: "place_bid_modal",
                "data-backdrop": "static",
                tabindex: "-1",
                role: "dialog",
                "aria-labelledby": "place_bid_modalCenteredLabel",
                "aria-hidden": "true",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "modal-dialog modal-dialog-centered",
                    role: "document",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal-content",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "modal-header text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "modal-title",
                                        id: "place_bid_modalLabel",
                                        children: "Please sign the bidding action"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: "close",
                                        "data-dismiss": "modal",
                                        "aria-label": "Close",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            "aria-hidden": "true",
                                            onClick: myclick,
                                            children: "\xd7"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "modal-body",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-center place_bit_desc text-light mb-0",
                                        children: "You are about to place a bid for"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "place_bit_desc_2 text-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-light mr-2",
                                                children: (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_12__/* .halfAddrShow */ .UD)(owneraddress)
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-muted",
                                                children: "by"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-light ml-2",
                                                children: (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_12__/* .halfAddrShow */ .UD)(UserAccountAddr)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "place_bit_desc_2 text-center",
                                        children: "Available : " + AllowedQuantity
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        className: "px-4 bid_form form-border",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                class: "input-group mb-3 input_grp_style_1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "number",
                                                        onKeyDown: (evt)=>[
                                                                "e",
                                                                "E",
                                                                "+",
                                                                "-",
                                                                ","
                                                            ].includes(evt.key) && evt.preventDefault(),
                                                        min: "0",
                                                        name: "tokenBidAmt",
                                                        id: "tokenBidAmt",
                                                        class: "form-control mb-0",
                                                        placeholder: "Enter your bid amount",
                                                        "aria-label": "bid",
                                                        "aria-describedby": "basic-addon2",
                                                        value: bitamount,
                                                        onChange: inputChange,
                                                        autoComplete: "off"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        class: "input-group-append",
                                                        children: "WETH"
                                                    })
                                                ]
                                            }),
                                            ValidateError.tokenBidAmt && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                style: {
                                                    position: "relative",
                                                    top: "-12px"
                                                },
                                                children: ValidateError.tokenBidAmt
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                class: "input-group mb-3 input_grp_style_1",
                                                children: item.type == _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].multipleType */ .Z.multipleType && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "number",
                                                    onKeyDown: (evt)=>[
                                                            "e",
                                                            "E",
                                                            "+",
                                                            "-",
                                                            ",",
                                                            "."
                                                        ].includes(evt.key) && evt.preventDefault(),
                                                    min: "1",
                                                    name: "NoOfToken",
                                                    id: "NoOfToken",
                                                    class: "form-control mb-0",
                                                    placeholder: "Enter the item quantity",
                                                    "aria-label": "bid",
                                                    "aria-describedby": "basic-addon2",
                                                    value: quantity,
                                                    onChange: inputChange,
                                                    // value={NoOfToken}
                                                    autoComplete: "off"
                                                })
                                            }),
                                            ValidateError.NoOfToken && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                style: {
                                                    position: "relative",
                                                    top: "-12px"
                                                },
                                                children: ValidateError.NoOfToken
                                            }),
                                            Bids && Bids.myBid && Bids.myBid.tokenBidAmt > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row pb-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 col-sm-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "buy_desc_sm",
                                                            children: "Previous bid amount"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 col-sm-6 text-sm-right",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "buy_desc_sm_bold",
                                                            children: [
                                                                Bids.myBid.tokenBidAmt,
                                                                " ",
                                                                _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row pb-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 col-sm-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "buy_desc_sm",
                                                            children: "Your balance"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 col-sm-6 text-sm-right",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "buy_desc_sm_bold",
                                                            children: [
                                                                UserAccountBal.toFixed(8),
                                                                " ",
                                                                _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].currencySymbol */ .Z.currencySymbol
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row pb-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 col-sm-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "buy_desc_sm",
                                                            children: "Your bidding balance"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 col-sm-6 text-sm-right",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "buy_desc_sm_bold",
                                                            children: [
                                                                TokenBalance,
                                                                " ",
                                                                _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            item.type == 721 && item.PutOnSaleType == "TimedAuction" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "row pb-3",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-12 col-sm-6",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "buy_desc_sm",
                                                                    children: "Minimum Bid Amount"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-12 col-sm-6 text-sm-right",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: "buy_desc_sm_bold",
                                                                    children: [
                                                                        convert(item.minimumBid),
                                                                        " ",
                                                                        _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "row pb-3",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-12 col-sm-6",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "buy_desc_sm",
                                                                    children: "Maximum Bid Amount"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-12 col-sm-6 text-sm-right",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: "buy_desc_sm_bold",
                                                                    children: [
                                                                        convert(item.maximumBid),
                                                                        " ",
                                                                        _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].tokenSymbol */ .Z.tokenSymbol
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row pb-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 col-sm-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "buy_desc_sm",
                                                            children: "WETH Service fee"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 col-sm-6 text-sm-right",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "buy_desc_sm_bold",
                                                            children: [
                                                                servicefee,
                                                                " %",
                                                                " "
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row pb-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 col-sm-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "buy_desc_sm",
                                                            children: "You will pay"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 col-sm-6 text-sm-right",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "buy_desc_sm_bold",
                                                            children: [
                                                                parseFloat(YouWillPay).toFixed(7),
                                                                " ",
                                                                biddingtoken
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "btn-main lead mar-top-10",
                                                    type: "button",
                                                    onClick: ()=>FormSubmit_PlaceABid(),
                                                    // data-dismiss="modal"
                                                    "aria-label": "Close",
                                                    "data-toggle": "modal",
                                                    children: "Place a bid"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "modal fade primary_modal",
                id: "proceed_bid_modal",
                tabindex: "-1",
                role: "dialog",
                "data-backdrop": "static",
                "aria-labelledby": "proceed_bid_modalCenteredLabel",
                "aria-hidden": "true",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "modal-dialog modal-dialog-centered",
                    role: "document",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal-content",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "modal-header text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "modal-title",
                                        id: "proceed_bid_modalLabel",
                                        children: "Follow Steps"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: "close",
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
                                className: "modal-body",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "media approve_media",
                                            children: [
                                                BidApply_ApproveCallStatus == "processing" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    class: "fa fa-spinner mr-3 spinner_icon",
                                                    "aria-hidden": "true",
                                                    id: "circle1"
                                                }) : BidApply_ApproveCallStatus == "done" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fas fa-check mr-3 pro_complete",
                                                    "aria-hidden": "true"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fas fa-check mr-3",
                                                    "aria-hidden": "true"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "media-body",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mt-0 approve_text",
                                                            children: "Approve"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mt-0 approve_desc",
                                                            children: "Checking balance and approving"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-center my-3",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                className: BidApply_ApproveCallStatus == "processing" || BidApply_ApproveCallStatus == "init" ? "btn-main lead mar-top-10" : "btn-main btnGrey lead mar-top-10",
                                                type: "button",
                                                disabled: BidApply_ApproveCallStatus == "processing" || BidApply_ApproveCallStatus == "done",
                                                onClick: BidApply_ApproveCall,
                                                children: [
                                                    BidApply_ApproveCallStatus == "init" && "Approve",
                                                    BidApply_ApproveCallStatus == "processing" && "In-progress...",
                                                    BidApply_ApproveCallStatus == "done" && "Done",
                                                    BidApply_ApproveCallStatus == "tryagain" && "Try Again"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "media approve_media mt-3",
                                            children: [
                                                BidApply_SignCallStatus == "processing" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    class: "fa fa-spinner mr-3 spinner_icon",
                                                    "aria-hidden": "true",
                                                    id: "circle1"
                                                }) : BidApply_SignCallStatus == "done" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fas fa-check mr-3 pro_complete",
                                                    "aria-hidden": "true"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fas fa-check mr-3",
                                                    "aria-hidden": "true"
                                                }),
                                                " ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "media-body",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mt-0 approve_text",
                                                            children: "Signature"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mt-0 approve_desc",
                                                            children: "Create a signature to place a bid"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-center mt-3",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                className: BidApply_ApproveCallStatus == "done" && BidApply_SignCallStatus != "done" ? "btn-main lead mar-top-10" : "btn-main btnGrey lead mar-top-10",
                                                type: "button",
                                                disabled: BidApply_ApproveCallStatus != "done" || BidApply_SignCallStatus == "processing" || BidApply_SignCallStatus == "done",
                                                onClick: BidApply_SignCall,
                                                children: [
                                                    BidApply_SignCallStatus == "init" && "Start",
                                                    BidApply_SignCallStatus == "processing" && "In-progress...",
                                                    BidApply_SignCallStatus == "done" && "Done",
                                                    BidApply_SignCallStatus == "tryagain" && "Try Again"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "modal fade primary_modal",
                id: "accept_modal",
                tabindex: "-1",
                "data-backdrop": "static",
                role: "dialog",
                "aria-labelledby": "accept_modalCenteredLabel",
                "aria-hidden": "true",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "modal-dialog modal-dialog-centered",
                    role: "document",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal-content",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "modal-header text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "modal-title",
                                        id: "accept_modalLabel",
                                        children: "Accept bid"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: "close",
                                        "data-dismiss": "modal",
                                        "aria-label": "Close",
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
                                        className: "img_accept text-center",
                                        children: item && item.image && item.image.split(".").pop() == "mp4" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                            src: `${_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreator}/${item.image}`,
                                            type: "video/mp4",
                                            alt: "Collections",
                                            className: "img-fluid img-rounded mb-sm-30",
                                            controls: true,
                                            controlsList: "nodownload"
                                        }) : item && item.image && item.image.split(".").pop() == "mp3" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: `${_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Back_URL */ .Z.Back_URL}images/music.png`,
                                                    alt: "",
                                                    className: "img-fluid img-rounded mb-sm-30"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                                                    src: `${_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreator}/${item.image}`,
                                                    type: "audio/mp3",
                                                    controls: true,
                                                    className: "img-fluid img-rounded mb-sm-30"
                                                })
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: `${_lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreator}/${item.image}`,
                                            alt: "Collections",
                                            className: "img-fluid img-rounded mb-sm-30"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-center accept_desc mb-0 mar-top-10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "buy_desc_sm",
                                            children: "You are about to accept bid for"
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
                                                children: "from"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "buy_desc_sm_bold pl-2",
                                                children: (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_12__/* .halfAddrShow */ .UD)(AccepBidSelect.tokenBidAddress)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "info_title text-center",
                                        children: [
                                            convert(parseFloat(AccepBidSelect.tokenBidAmt)),
                                            " ",
                                            AccepBidSelect.currencySymbol,
                                            " for ",
                                            AccepBidSelect.pending,
                                            " ",
                                            "edition(s)"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row mx-0 pb-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 col-sm-6 px-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "buy_desc_sm",
                                                    children: "WETH Service fee"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 col-sm-6 px-4 text-sm-right",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "buy_desc_sm_bold",
                                                    children: [
                                                        biddingfee,
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
                                                        parseFloat(YouWillGet).toFixed(7),
                                                        " ",
                                                        AccepBidSelect.currency
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                        className: "px-4",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    className: "btn-main lead mar-top-10 me-2",
                                                    type: "button",
                                                    onClick: ()=>AcceptBid_Proceed(),
                                                    disabled: AcceptCallStatus == "processing",
                                                    children: [
                                                        AcceptCallStatus == "processing" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            class: "fa fa-spinner fa-spin me-2 spinner_icon",
                                                            "aria-hidden": "true",
                                                            id: "circle1"
                                                        }),
                                                        "Accept bid"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "btn-main btnGrey lead mar-top-10",
                                                    "data-dismiss": "modal",
                                                    "aria-label": "Close",
                                                    children: "Cancel"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "modal fade primary_modal",
                id: "cancel_modal",
                tabindex: "-1",
                role: "dialog",
                "aria-labelledby": "accept_modalCenteredLabel",
                "aria-hidden": "true",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "modal-dialog modal-dialog-centered",
                    role: "document",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal-content",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "modal-header text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "modal-title",
                                        id: "accept_modalLabel",
                                        children: "Cancel bid"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: "close",
                                        "data-dismiss": "modal",
                                        "aria-label": "Close",
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-center accept_desc mb-0 mar-top-10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "buy_desc_sm",
                                            children: "You are about to cancel bid for"
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
                                                children: "from"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "buy_desc_sm_bold pl-2",
                                                children: (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_12__/* .halfAddrShow */ .UD)(AccepBidSelect.tokenBidAddress)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-center accept_desc mb-0 mar-top-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "buy_desc_sm_bold pl-2",
                                                children: [
                                                    AccepBidSelect.tokenBidAmt,
                                                    " ",
                                                    AccepBidSelect.currency
                                                ]
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "buy_desc_sm pl-2",
                                                children: "for "
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "buy_desc_sm_bold pl-2",
                                                children: item.tokenName
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                        className: "px-4",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    class: "btn-NewBlock text-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "btn-main lead mar-top-10",
                                                        type: "button",
                                                        onClick: ()=>CancelBid_Proceed(AccepBidSelect),
                                                        children: "Cancel bid"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    class: "btn-NewBlock text-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "btn-main btnGrey lead mar-top-10",
                                                        "data-dismiss": "modal",
                                                        "aria-label": "Close",
                                                        children: "Cancel"
                                                    })
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