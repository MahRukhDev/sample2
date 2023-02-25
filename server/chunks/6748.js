"use strict";
exports.id = 6748;
exports.ids = [6748];
exports.modules = {

/***/ 6748:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseNowRef": () => (/* binding */ PurchaseNowRef)
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
/* harmony import */ var _lib_isEmpty__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5498);
/* harmony import */ var _lib_isEmpty__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_lib_isEmpty__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_12__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_13__, react_toastify__WEBPACK_IMPORTED_MODULE_14__]);
([_helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_12__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_13__, react_toastify__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].toasterOption */ .Z.toasterOption;
// var web3 = new Web3(window.ethereum);
// const EscContract = new web3.eth.Contract(ESC_ABI, config.esctokenAddr);
const PurchaseNowRef = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    var { tokenidval  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)();
    const [ApproveCallStatus, setApproveCallStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("init");
    const [PurchaseCallStatus, setPurchaseCallStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("init");
    const [PurchaseBalance, set_PurchaseBalance] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [item, Set_item] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.item);
    const [PurchaseCurrency, setPurchaseCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [saletokenbal, setSaletoken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [servicefee, setservicefee] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [YouWillPay, Set_YouWillPay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [MultipleWei, Set_MultipleWei] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [price, Set_Price] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [NoOfToken, Set_NoOfToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [VQuattity, Set_VQuattity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [TokenPrice, Set_TokenPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [TokenQuatity, Set_TokenQuatity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [FormSubmitLoading, Set_FormSubmitLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [ValidateError, Set_ValidateError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [itemQuantity, setitemQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    // const BEP721Contract = new web3.eth.Contract(
    //   BEP721_ABI,
    //   item.contractAddress
    // );
    // const BEP1155Contract = new web3.eth.Contract(
    //   BEP1155_ABI,
    //   item.contractAddress
    // );
    var { UserAccountAddr , UserAccountBal , TokenBalance , MyItemAccountAddr , buytoken , AllowedQuantity , Set_AllowedQuantity  } = props;
    console.log(UserAccountAddr, "UserAccountAddr");
    const PriceCalculate = async (data = {})=>{
        try {
            var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__/* .getmylog */ .I)();
            const web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
            var curAddr = await web3.eth.getAccounts();
            if (web3.eth) {
                //var web3 = new Web3(window.ethereum);
                if (data.type == 721) {
                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_8__, item.contractAddress);
                    var fee = await CoursetroContract.methods.getServiceFee().call();
                } else {
                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_9__, item.contractAddress);
                    var fee = await CoursetroContract.methods.getServiceFee().call();
                }
                var price = typeof data.price != "undefined" ? data.price : TokenPrice;
                var quantity = typeof data.quantity != "undefined" ? data.quantity : NoOfToken;
                var newPrice2 = price * _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues;
                var newPrice1 = data.type == 721 ? newPrice2 : quantity * newPrice2;
                var newPrice = newPrice1;
                var per = newPrice * fee / 1e20;
                var mulWei = newPrice + per;
                mulWei = await ChecktokenDecimal(mulWei, _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues);
                mulWei = await convert(mulWei);
                Set_YouWillPay((mulWei / _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues).toFixed(_lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].toFixed */ .Z.toFixed));
                Set_MultipleWei(mulWei);
                Set_Price(newPrice);
            }
        } catch (err) {}
    };
    const inputChange = (e)=>{
        if (e && e.target && typeof e.target.value != "undefined" && e.target.name) {
            var value = e.target.value;
            switch(e.target.name){
                case "NoOfToken":
                    Set_NoOfToken(value);
                    Set_VQuattity(value);
                    console.log(value, "Set_NoOfToken");
                    PriceCalculate({
                        quantity: value,
                        PurchaseCurrency: PurchaseCurrency
                    });
                    break;
                case "TokenPrice":
                    Set_TokenPrice(value);
                    if (value != "" && isNaN(value) == false && value > 0) {
                        PriceCalculate({
                            price: value,
                            PurchaseCurrency: PurchaseCurrency
                        });
                    }
                    break;
                default:
            }
        // ItemValidation({TokenPrice:value});
        }
    };
    const closeBtn = ()=>{
        Set_VQuattity("");
    // document.getElementById('NoOfToken').value = ""
    };
    const ItemValidation = async (data = {})=>{
        var ValidateError = {};
        var Chk_TokenPrice = typeof data.price != "undefined" ? data.price : TokenPrice;
        var quantity = typeof data.quantity != "undefined" ? data.quantity : NoOfToken;
        var Collectible_balance = 0;
        if (item && item.tokenowners_current && item.tokenowners_current.balance) {
            Collectible_balance = item.tokenowners_current.balance;
        }
        if (item.type == 1155) {
            if (Math.sign(quantity) === -1) {
                ValidateError.NoOfToken = '"Quantity" must be greater than 0';
            }
            if (quantity == 0) {
                ValidateError.NoOfToken = '"Quantity" must be greater than 0';
            }
            if (isNaN(quantity) == true) {
                ValidateError.NoOfToken = '"Quantity" must be a number';
            }
            if (quantity == "") {
                ValidateError.NoOfToken = '"Quantity" is not allowed to be empty';
            }
            if (quantity > Collectible_balance) {
                ValidateError.NoOfToken = '"Quantity" must be below on ' + Collectible_balance;
            }
        }
        if (Chk_TokenPrice == "") {
            ValidateError.TokenPrice = '"Token Price" is not allowed to be empty';
        } else if (Chk_TokenPrice == 0) {
            ValidateError.TokenPrice = '"Token Price" must be greater than 0';
        } else if (isNaN(Chk_TokenPrice) == true) {
            ValidateError.TokenPrice = '"Token Price" must be a number';
        } else if (parseFloat(YouWillPay) > parseFloat(PurchaseBalance)) {
            ValidateError.TokenPrice = "Insufficient balance, Check your wallet balance";
        } else {
            // await props.GetUserBal();
            if (parseFloat(YouWillPay) > parseFloat(PurchaseBalance)) {
                ValidateError.TokenPrice = "Insufficient balance, Check your wallet balance";
            } else {
                delete ValidateError.TokenPrice;
            }
        }
        Set_ValidateError(ValidateError);
        return ValidateError;
    };
    async function FormSubmit() {
        var errors = await ItemValidation();
        console.log(errors, "roooo");
        var errorsSize = Object.keys(errors).length;
        if (errorsSize != 0) {
            // toast.error(
            //   "Form validation error, please fill all the required fields",
            //   toasterOption
            // );
            return false;
        }
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var currAddr = await web3.eth.getAccounts();
        //if (window.ethereum) {
        // var web3 = new Web3(window.ethereum);
        if (web3 && web3.eth) {
            if (PurchaseCurrency != _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].currencySymbol */ .Z.currencySymbol) {
                if (PurchaseCurrency == _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].owntokenSymbol */ .Z.owntokenSymbol) {
                    var ESCContract = new web3.eth.Contract(_ABI_ESC_json__WEBPACK_IMPORTED_MODULE_10__, _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].esctokenAddr */ .Z.esctokenAddr);
                    const BEP721Contract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_8__, item.contractAddress);
                    //var currAddr = window.web3.eth.defaultAccount;
                    const EscContract = new web3.eth.Contract(_ABI_ESC_json__WEBPACK_IMPORTED_MODULE_10__, _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].esctokenAddr */ .Z.esctokenAddr);
                    var tokenBal = await ESCContract.methods.balanceOf(currAddr[0].toLowerCase()).call();
                    var tokenBalance = tokenBal / _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues;
                    if (tokenBalance >= parseFloat(YouWillPay)) {
                        // window.$('.modal').modal('hide');
                        window.$("#proceed_modal").modal("show");
                    } else {
                        react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Insufficient balance", toasterOption);
                    }
                } else if (PurchaseCurrency == _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].currencySymbol */ .Z.currencySymbol) {
                    if (PurchaseBalance >= parseFloat(YouWillPay)) {
                        // window.$('.modal').modal('hide');
                        window.$("#proceed_modal").modal("show");
                    } else {
                        react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Insufficient balance", toasterOption);
                    }
                }
            } else {
                var price = item.tokenowners_current && item.tokenowners_current.price ? item.tokenowners_current.price : 0;
                if (price && price > 0) {
                    if (item.type == 721) {
                        if (PurchaseBalance == 0) {
                            react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Insufficient balance", toasterOption);
                            return false;
                        }
                        if (YouWillPay > PurchaseBalance) {
                            react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Insufficient balance", toasterOption);
                            return false;
                        }
                        var tokenContractAddress = item.contractAddress.toString();
                        var tokenType = item.type.toString();
                        var bal = parseInt(item.balance);
                        //var web3 = new Web3(window.ethereum);
                        const BEP721Contract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_8__, item.contractAddress);
                        var sendAmount = parseFloat(item.tokenowners_current.price).toString();
                        sendAmount = parseFloat(sendAmount) * parseFloat(_lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues);
                        // sendAmount = parseFloat(sendAmount)* 10000
                        sendAmount = await ChecktokenDecimal(sendAmount, _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues);
                        sendAmount = await convert(sendAmount);
                        //sendAmount = parseFloat(sendAmount)/10000
                        Set_FormSubmitLoading("processing");
                        window.$("#buy_modal").modal("show");
                        var tokenaddress = "";
                        if (PurchaseCurrency == _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].currencySymbol */ .Z.currencySymbol) {
                            tokenaddress = _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].currencySymbol */ .Z.currencySymbol;
                        } else if (PurchaseCurrency == _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].tokenSymbol */ .Z.tokenSymbol) {
                            tokenaddress = _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].owntokenSymbol */ .Z.owntokenSymbol;
                        } else {
                            tokenaddress = _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].owntokenSymbol */ .Z.owntokenSymbol;
                        }
                        console.log(item.tokenowners_current.tokenOwner, item.tokenCounts, sendAmount.toString(), MultipleWei, "=========buysingle");
                        BEP721Contract.methods.saleToken(item.tokenowners_current.tokenOwner, item.tokenCounts, sendAmount.toString()).send({
                            from: props.Accounts,
                            value: MultipleWei
                        }).then(async (result)=>{
                            Set_FormSubmitLoading("done");
                            var postData = {
                                tokenOwner: item.tokenowners_current.tokenOwner,
                                //  tokenOwner:UserAccountAddr,
                                UserAccountAddr: UserAccountAddr,
                                tokenCounts: item.tokenCounts,
                                tokenType: item.type,
                                NoOfToken: item.type == 721 ? 1 : NoOfToken,
                                transactionHash: result.transactionHash,
                                PurchaseCurrency: PurchaseCurrency,
                                ipfsimage: item.ipfsimage,
                                tokenName: item.tokenName,
                                image: item.image
                            };
                            var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_12__/* .PurchaseNow_Complete_Action */ .Xr)(postData);
                            if (Resp.data && Resp.data.toast && Resp.data.toast.type == "success") {
                                react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success("Collectible purchase successfully", toasterOption);
                                window.$(".PurchaseNow_modal").modal("hide");
                                window.location.reload(false);
                            }
                        }).catch((error)=>{
                            Set_FormSubmitLoading("error");
                            react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Transaction rejected by user", toasterOption);
                        });
                    } else {
                        var tokenContractAddress = item.contractAddress.toString();
                        var tokenType = item.type.toString();
                        var bal = parseInt(item.balance);
                        // var web3 = new Web3(window.ethereum);
                        Set_FormSubmitLoading("processing");
                        var price1 = item.tokenowners_current && item.tokenowners_current.price ? item.tokenowners_current.price : 0;
                        var owneradd = item.tokenowners_current.tokenOwner;
                        console.log(price, "======price");
                        var price = price;
                        console.log(price, "======price1");
                        var sendAmount1 = (price * _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues).toString();
                        console.log(sendAmount1, "===========sendAmount1");
                        var lastAmt = (sendAmount1 * NoOfToken).toString();
                        console.log(lastAmt, "============lastamt1");
                        //lastAmt = parseFloat(lastAmt)*10000
                        lastAmt = await ChecktokenDecimal(lastAmt, _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues);
                        lastAmt = await convert(lastAmt);
                        console.log(lastAmt, "==========lastamt");
                        //lastAmt = parseFloat(lastAmt)/10000 ;
                        console.log(lastAmt, "====================final");
                        // window.$('#buy_modal').modal('show');
                        var tokenaddress = "";
                        if (PurchaseCurrency == _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].currencySymbol */ .Z.currencySymbol) {
                            tokenaddress = _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].currencySymbol */ .Z.currencySymbol;
                        } else if (PurchaseCurrency == _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].tokenSymbol */ .Z.tokenSymbol) {
                            tokenaddress = _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].owntokenSymbol */ .Z.owntokenSymbol;
                        } else {
                            tokenaddress = _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].owntokenSymbol */ .Z.owntokenSymbol;
                        }
                        const BEP1155Contract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_9__, item.contractAddress);
                        console.log(item.tokenowners_current.tokenOwner, item.tokenCounts, lastAmt.toString(), NoOfToken, MultipleWei, "=========buybuy==");
                        BEP1155Contract.methods.saleToken(item.tokenowners_current.tokenOwner, item.tokenCounts, lastAmt.toString(), NoOfToken).send({
                            from: props.Accounts,
                            value: MultipleWei.toString()
                        }).then(async (result)=>{
                            Set_FormSubmitLoading("done");
                            var postData = {
                                tokenOwner: item.tokenowners_current.tokenOwner,
                                UserAccountAddr: UserAccountAddr,
                                tokenCounts: item.tokenCounts,
                                tokenType: item.type,
                                NoOfToken: item.type == 721 ? 1 : NoOfToken,
                                transactionHash: result.transactionHash,
                                PurchaseCurrency: PurchaseCurrency,
                                ipfsimage: item.ipfsimage,
                                image: item.image
                            };
                            var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_12__/* .PurchaseNow_Complete_Action */ .Xr)(postData);
                            if (Resp.data && Resp.data.toast && Resp.data.toast.type == "success") {
                                react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success("Collectible purchase successfully", toasterOption);
                                window.$(".modal").modal("hide");
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
                    react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Oops something went wrong.!", toasterOption);
                }
            }
        }
    //}
    }
    async function FormSubmit_StepOne() {
        //if (window.ethereum) {
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        if (web3 && web3.eth) {
            const EscContract = new web3.eth.Contract(_ABI_ESC_json__WEBPACK_IMPORTED_MODULE_10__, _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].esctokenAddr */ .Z.esctokenAddr);
            const BEP721Contract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_8__, item.contractAddress);
            setApproveCallStatus("processing");
            if (item.type == 721) {
                var CoursetroContract = "";
                if (PurchaseCurrency == _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].tokenSymbol */ .Z.tokenSymbol) {
                    CoursetroContract = EscContract;
                } else if (PurchaseCurrency == _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].currencySymbol */ .Z.currencySymbol) {
                    CoursetroContract = BEP721Contract;
                } else {
                    CoursetroContract = EscContract;
                }
            } else {
                var CoursetroContract = "";
                if (PurchaseCurrency == _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].tokenSymbol */ .Z.tokenSymbol) {
                    CoursetroContract = EscContract;
                } else if (PurchaseCurrency == _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].currencySymbol */ .Z.currencySymbol) {
                    CoursetroContract = BEP721Contract;
                } else {
                    CoursetroContract = EscContract;
                }
            }
            var currAddr = curAddr[0].toLowerCase();
            if (item.type == 721) {
                var getAllowance = await EscContract.methods.allowance(currAddr, item.contractAddress).call();
            } else {
                var getAllowance = await EscContract.methods.allowance(currAddr, item.contractAddress).call();
            }
            const Contractaddress = item.contractAddress;
            var sendVal = parseInt(MultipleWei) + parseInt(getAllowance) + 100;
            await CoursetroContract.methods.approve(Contractaddress, sendVal.toString()).send({
                from: props.Accounts
            }).then(async (result)=>{
                setApproveCallStatus("done");
                react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success("Collectible purchase successfully", toasterOption);
            }).catch((error)=>{
                setApproveCallStatus("tryagain");
                react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Order not approved", toasterOption);
            });
        }
    //}
    }
    async function FormSubmit_StepTwo() {
        //if (window.ethereum) {
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        if (web3 && web3.eth) {
            if (PurchaseCurrency == _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].tokenSymbol */ .Z.tokenSymbol) {
                var EscContract = new web3.eth.Contract(_ABI_ESC_json__WEBPACK_IMPORTED_MODULE_10__, _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].esctokenAddr */ .Z.esctokenAddr);
                var currAddr = curAddr[0].toLowerCase();
                var tokenBal = await EscContract.methods.balanceOf(currAddr).call();
                var tokenBalance = tokenBal / _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues;
                if (parseFloat(tokenBalance) == 0) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error(PurchaseCurrency + " Token Balance Insufficient", toasterOption);
                    return false;
                }
                if (parseFloat(YouWillPay) >= parseFloat(tokenBalance)) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error(PurchaseCurrency + " Token Balance Insufficient", toasterOption);
                    return false;
                }
            } else {
                if (parseFloat(PurchaseBalance) == 0) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Insufficient" + PurchaseCurrency + "  Balance", toasterOption);
                    return false;
                }
                if (parseFloat(YouWillPay) >= parseFloat(PurchaseBalance)) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Insufficient" + PurchaseCurrency + "  Balance", toasterOption);
                    return false;
                }
            }
            if (item.type == 721) {
                const BEP721Contract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_8__, item.contractAddress);
                var sendAmount = (item && item.tokenowners_current.price).toString();
                sendAmount = parseFloat(sendAmount) * parseFloat(_lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues);
                //sendAmount = parseFloat(sendAmount)* 10000
                sendAmount = await ChecktokenDecimal(sendAmount, _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues);
                sendAmount = await convert(sendAmount);
                //sendAmount = parseFloat(sendAmount)/10000
                var tokenaddress = "";
                if (PurchaseCurrency == _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].owntokenSymbol */ .Z.owntokenSymbol) {
                    tokenaddress = _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].esctokenAddr */ .Z.esctokenAddr;
                } else if (PurchaseCurrency == _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].currencySymbol */ .Z.currencySymbol) {
                    tokenaddress = item.contractAddress;
                } else {
                    tokenaddress = _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].esctokenAddr */ .Z.esctokenAddr;
                }
                setPurchaseCallStatus("processing");
                BEP721Contract.methods.salewithToken(PurchaseCurrency == _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].owntokenSymbol */ .Z.owntokenSymbol ? _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].owntokenSymbol */ .Z.owntokenSymbol : _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].currencySymbol */ .Z.currencySymbol, item.tokenowners_current.tokenOwner, item.tokenCounts, sendAmount.toString()).send({
                    from: props.Accounts
                }).then(async (result)=>{
                    setPurchaseCallStatus("done");
                    var postData = {
                        tokenOwner: item.tokenowners_current.tokenOwner,
                        UserAccountAddr: UserAccountAddr,
                        tokenCounts: item.tokenCounts,
                        tokenType: item.type,
                        NoOfToken: item.type == 721 ? 1 : NoOfToken,
                        transactionHash: result.transactionHash,
                        PurchaseCurrency: PurchaseCurrency,
                        ipfsimage: item.ipfsimage,
                        tokenName: item.tokenName,
                        image: item.image
                    };
                    var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_12__/* .PurchaseNow_Complete_Action */ .Xr)(postData);
                    console.log(Resp, "rrrrrrrrrrrrrrrrrrrrrrrrrrr-------rr");
                    if (Resp.data && Resp.data.toast && Resp.data.toast.type == "success") {
                        react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success("Collectible purchase successfully", toasterOption);
                        window.$(".modal").modal("hide");
                        setTimeout(()=>{
                            window.location.reload();
                        }, 2000);
                    }
                }).catch((error)=>{
                    setPurchaseCallStatus("tryagain");
                    react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Transaction rejected by user", toasterOption);
                });
            } else {
                const BEP1155Contract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_9__, item.contractAddress);
                var sendAmount = (item && item.tokenowners_current.price && item.tokenowners_current.price).toString();
                sendAmount = sendAmount * _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues;
                sendAmount = (sendAmount * NoOfToken).toString();
                sendAmount = await ChecktokenDecimal(sendAmount, _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues);
                //sendAmount = parseFloat(sendAmount)* 10000
                sendAmount = await convert(sendAmount);
                //sendAmount = sendAmount / 10000;
                setPurchaseCallStatus("processing");
                var tokenaddress = "";
                if (PurchaseCurrency == _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].owntokenSymbol */ .Z.owntokenSymbol) {
                    tokenaddress = _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].esctokenAddr */ .Z.esctokenAddr;
                } else if (PurchaseCurrency == _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].currencySymbol */ .Z.currencySymbol) {
                    tokenaddress = item.contractAddress;
                } else {
                    tokenaddress = _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].esctokenAddr */ .Z.esctokenAddr;
                }
                BEP1155Contract.methods.saleWithToken(item.tokenowners_current.tokenOwner, item.tokenCounts, sendAmount.toString(), NoOfToken, PurchaseCurrency).send({
                    from: props.Accounts
                }).then(async (result)=>{
                    setPurchaseCallStatus("done");
                    var postData = {
                        tokenOwner: item.tokenowners_current.tokenOwner,
                        UserAccountAddr: UserAccountAddr,
                        tokenCounts: item.tokenCounts,
                        tokenType: item.type,
                        NoOfToken: NoOfToken,
                        transactionHash: result.transactionHash,
                        PurchaseCurrency: PurchaseCurrency,
                        ipfsimage: item.ipfsimage,
                        tokenName: item.tokenName,
                        image: item.image
                    };
                    var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_12__/* .PurchaseNow_Complete_Action */ .Xr)(postData);
                    if (Resp.data && Resp.data.toast && Resp.data.toast.type == "success") {
                        react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success("Collectible purchase successfully", toasterOption);
                        window.$(".modal").modal("hide");
                        setTimeout(()=>{
                            window.location.reload();
                        }, 2000);
                    }
                }).catch((error)=>{
                    setPurchaseCallStatus("tryagain");
                    react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Transaction rejected by user", toasterOption);
                });
            }
        }
    //}
    }
    function convert(n) {
        var sign = +n < 0 ? "-" : "", toStr = n.toString();
        if (!/e/i.test(toStr)) {
            return n;
        }
        var [lead, decimal, pow] = n.toString().replace(/^-/, "").replace(/^([0-9]+)(e.*)/, "$1.$2").split(/e|\./);
        return +pow < 0 ? sign + "0." + "0".repeat(Math.max(Math.abs(pow) - 1 || 0, 0)) + lead + decimal : sign + lead + (+pow >= decimal.length ? decimal + "0".repeat(Math.max(+pow - decimal.length || 0, 0)) : decimal.slice(0, +pow) + "." + decimal.slice(+pow));
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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({
            async PurchaseNow_Click (item, BuyOwnerDetail = {}) {
                console.log(item, "========", BuyOwnerDetail, "========fromourchasenowclick");
                var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__/* .getmylog */ .I)();
                const web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
                var curAddr = await web3.eth.getAccounts();
                var curAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_13__/* .getCurAddr */ .my)();
                var connectwallet = localStorage.getItem("nilwireMetamask");
                if (!connectwallet) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error("Please connect to a Metamask wallet", toasterOption);
                    return false;
                }
                PriceCalculate({
                    quantity: 1,
                    price: BuyOwnerDetail.price,
                    type: BuyOwnerDetail.type,
                    PurchaseCurrency: BuyOwnerDetail.currency
                });
                //var web3 = new Web3(window.ethereum);
                web3.eth.getBalance(props.Accounts).then((val)=>{
                    var balance = val / _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues;
                    set_PurchaseBalance(balance);
                });
                if (BuyOwnerDetail && typeof BuyOwnerDetail.price != "undefined") {
                    item.tokenowners_current = {};
                    item.tokenowners_current = BuyOwnerDetail;
                    setPurchaseCurrency(BuyOwnerDetail.currency);
                    setSaletoken(BuyOwnerDetail.balance);
                }
                if (BuyOwnerDetail.currency == _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].currencySymbol */ .Z.currencySymbol) {
                    Set_item(item);
                    Set_TokenPrice(item.tokenowners_current.price);
                    Set_NoOfToken(0);
                    if (BuyOwnerDetail.type == 721) {
                        //var web3 = new Web3(window.ethereum);
                        var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_8__, item.contractAddress);
                        var fee = await CoursetroContract.methods.getServiceFee().call();
                    } else {
                        //var web3 = new Web3(window.ethereum);
                        var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_9__, item.contractAddress);
                        var fee = await CoursetroContract.methods.getServiceFee().call();
                    }
                    var feeval = fee / _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues;
                    setservicefee(feeval);
                    let new_price = BuyOwnerDetail.price * _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues;
                    var newPrice1 = BuyOwnerDetail.type == 721 ? new_price : NoOfToken * new_price;
                    var newPrice2 = newPrice1;
                    var newPrice = newPrice2;
                    // var newPrice =
                    //   BuyOwnerDetail.type == 721
                    //     ? BuyOwnerDetail.price * config.decimalvalues
                    //     : NoOfToken * (BuyOwnerDetail.price * config.decimalvalues);
                    var per = newPrice * fee / 1e20;
                    var mulWei = newPrice + per;
                    Set_YouWillPay((mulWei / _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues).toFixed(_lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].toFixed */ .Z.toFixed));
                    mulWei = await ChecktokenDecimal(mulWei, _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues);
                    mulWei = await convert(mulWei);
                    Set_MultipleWei(mulWei);
                    Set_Price(newPrice);
                    web3.eth.getBalance(props.Accounts).then((val)=>{
                        var balance = val / _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues;
                        set_PurchaseBalance(balance);
                    });
                } else if (BuyOwnerDetail.currency == _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].owntokenSymbol */ .Z.owntokenSymbol) {
                    var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__/* .getmylog */ .I)();
                    const web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
                    var curAddr = await web3.eth.getAccounts();
                    Set_item(item);
                    Set_TokenPrice(item.tokenowners_current.price);
                    Set_NoOfToken(0);
                    if (BuyOwnerDetail.type == 721) {
                        // var web3 = new Web3(window.ethereum);
                        var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_8__, item.contractAddress);
                        var fee = await CoursetroContract.methods.getServiceFeeESC().call();
                    } else {
                        //var web3 = new Web3(window.ethereum);
                        var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_9__, item.contractAddress);
                        var fee = await CoursetroContract.methods.getServiceFeeESC().call();
                    }
                    var feeval = fee / _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues;
                    setservicefee(feeval);
                    let new_price = BuyOwnerDetail.price * _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues;
                    var newPrice1 = BuyOwnerDetail.type == 721 ? new_price : NoOfToken * new_price;
                    var newPrice2 = newPrice1;
                    var newPrice = newPrice2;
                    var per = newPrice * fee / 1e20;
                    var mulWei = newPrice + per;
                    mulWei = await ChecktokenDecimal(mulWei, _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues);
                    mulWei = await convert(mulWei);
                    Set_MultipleWei(mulWei);
                    Set_YouWillPay(mulWei / _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues);
                    Set_Price(newPrice);
                    var fee = await CoursetroContract.methods.getServiceFeeESC().call();
                    //var web3 = new Web3(window.ethereum);
                    const ESCContract = new web3.eth.Contract(_ABI_ESC_json__WEBPACK_IMPORTED_MODULE_10__, _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].esctokenAddr */ .Z.esctokenAddr);
                    var escbalance = await ESCContract.methods.balanceOf(props.Accounts).call();
                    set_PurchaseBalance(escbalance);
                } else {
                    Set_item(item);
                    Set_TokenPrice(item.tokenowners_current.price);
                    Set_NoOfToken(0);
                    if (BuyOwnerDetail.type == 721) {
                        //var web3 = new Web3(window.ethereum);
                        var CoursetroContract = new web3.eth.Contract(_ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_8__, item.contractAddress);
                        var fee = await CoursetroContract.methods.getServiceFeeESC().call();
                    } else {
                        //var web3 = new Web3(window.ethereum);
                        var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_9__, item.contractAddress);
                        var fee = await CoursetroContract.methods.getServiceFeeESC().call();
                    }
                    var feeval = fee / _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues;
                    setservicefee(feeval);
                    let new_price = BuyOwnerDetail.price * _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues;
                    var newPrice = BuyOwnerDetail.type == 721 ? new_price : NoOfToken * new_price;
                    var newPrice2 = newPrice;
                    newPrice = newPrice2;
                    var per = newPrice * fee / 1e20;
                    var mulWei = newPrice + per;
                    mulWei = await ChecktokenDecimal(mulWei, _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues);
                    mulWei = await convert(mulWei);
                    Set_MultipleWei(mulWei);
                    Set_YouWillPay(mulWei / _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].decimalvalues */ .Z.decimalvalues);
                    Set_Price(newPrice);
                    var fee = await CoursetroContract.methods.getServiceFeeESC().call();
                    //var web3 = new Web3(window.ethereum);
                    const ESCContract = new web3.eth.Contract(_ABI_ESC_json__WEBPACK_IMPORTED_MODULE_10__, _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].esctokenAddr */ .Z.esctokenAddr);
                    var escbalance = await ESCContract.methods.balanceOf(props.Accounts).call();
                    set_PurchaseBalance(escbalance);
                }
                window.$("#buy_modal").modal("show");
            }
        }));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        var curAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_13__/* .getCurAddr */ .my)();
        var payload = {
            curAddr: curAddr,
            tokenCounts: tokenidval
        };
        TokenCounts_Get_Detail_Call(payload);
    }, []);
    const TokenCounts_Get_Detail_Call = async (payload)=>{
        var curAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_13__/* .getCurAddr */ .my)();
        var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_12__/* .TokenCounts_Get_Detail_Action */ .u7)(payload);
        setitemQuantity(Resp.data.Detail.Resp.OnSaleBalance);
        // console.log(Resp,'Resp');
        if (Resp && Resp && Resp.data && Resp.data.Detail && Resp.data.Detail.Resp) {
            var TokenResp = Resp.data.Detail.Resp;
            Set_TokenQuatity(TokenResp.TotalQuantity);
        }
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
                className: "modal fade primary_modal",
                "data-backdrop": "static",
                id: "buy_modal",
                tabindex: "-1",
                role: "dialog",
                "aria-labelledby": "buy_modalCenteredLabel",
                "aria-hidden": "true",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "modal-dialog modal-dialog-centered modal-md",
                    role: "document",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal-content form-border",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "modal-header text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "modal-title",
                                        id: "buy_modalLabel",
                                        children: "Checkout"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: "close",
                                        "data-dismiss": "modal",
                                        "aria-label": "Close",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            "aria-hidden": "true",
                                            onClick: closeBtn,
                                            children: "\xd7"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "modal-body px-0",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row mx-0 bor_bot_modal",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col-12 col-md-6 px-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "buy_title_sm",
                                                        children: "Seller"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "buy_title_md",
                                                        children: item.userprofile && item.userprofile.name ? item.userprofile && item.userprofile.name : (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_13__/* .halfAddrShow */ .UD)(item && item.tokenowners_current && item.tokenowners_current.tokenOwner)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col-12 col-md-6 px-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "buy_title_sm text-md-right",
                                                        children: "Buyer"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "buy_title_md text-md-right",
                                                        children: MyItemAccountAddr ? (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_13__/* .halfAddrShow */ .UD)(MyItemAccountAddr) : (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_13__/* .halfAddrShow */ .UD)(UserAccountAddr)
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bor_bot_modal mb-3",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "buy_title_md px-4 py-3 text-center mb-0 text-white",
                                                children: [
                                                    "Your balance :",
                                                    " ",
                                                    UserAccountBal.toFixed(8),
                                                    " ",
                                                    _lib_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].currencySymbol */ .Z.currencySymbol
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "place_bit_desc_2 text-center",
                                                children: item && item.tokenowners_current && item.tokenowners_current.balance ? "Available : " + item.tokenowners_current.balance : "Available : 0"
                                            })
                                        ]
                                    }),
                                    item.type == 721 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "row mx-0 pb-3",
                                        children: !ValidateError.NoOfToken && ValidateError.TokenPrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-danger",
                                            children: ValidateError.TokenPrice
                                        })
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row mx-0 pb-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 col-sm-12 px-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
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
                                                    name: "NoOfToken",
                                                    id: "NoOfToken",
                                                    class: "form-control mb-0 w-100",
                                                    placeholder: "Enter item quantity",
                                                    "aria-label": "bid",
                                                    "aria-describedby": "basic-addon2",
                                                    onChange: inputChange,
                                                    // value={NoOfToken}
                                                    value: VQuattity,
                                                    autoComplete: "off"
                                                })
                                            }),
                                            ValidateError.NoOfToken && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                children: ValidateError.NoOfToken
                                            }),
                                            !ValidateError.NoOfToken && ValidateError.TokenPrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                children: ValidateError.TokenPrice
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
                                                    children: "Price"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 col-sm-6 px-4 text-sm-right",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "buy_desc_sm_bold",
                                                    children: [
                                                        TokenPrice,
                                                        " ",
                                                        PurchaseCurrency
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
                                                    children: "ETH Service fee"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 col-sm-6 px-4 text-sm-right",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "buy_desc_sm_bold",
                                                    children: [
                                                        servicefee,
                                                        " % "
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
                                                    children: "You will pay"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 col-sm-6 px-4 text-sm-right",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "buy_desc_sm_bold",
                                                    children: [
                                                        YouWillPay,
                                                        " ",
                                                        PurchaseCurrency
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
                                                            "Proceed to payment"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "btn-main btnGrey lead mar-top-10",
                                                        "data-dismiss": "modal",
                                                        "aria-label": "Close",
                                                        type: "button",
                                                        onClick: closeBtn,
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
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "modal fade primary_modal",
                "data-backdrop": "static",
                id: "proceed_modal",
                tabindex: "-1",
                role: "dialog",
                "aria-labelledby": "proceed_modalCenteredLabel",
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
                                        id: "proceed_modalLabel",
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
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "modal-body",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mt-0 purchase_text text-center",
                                                children: "Approve the transaction"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mt-0 purchase_desc text-center",
                                                children: "Send transaction with your wallet"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-center",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    type: "button",
                                                    onClick: ()=>FormSubmit_StepOne(),
                                                    className: "btn-main lead mar-top-10 mb-0",
                                                    disabled: ApproveCallStatus == "processing" || ApproveCallStatus == "done",
                                                    children: [
                                                        ApproveCallStatus == "processing" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            class: "fa fa-spinner mr-3 spinner_icon",
                                                            "aria-hidden": "true",
                                                            id: "circle1"
                                                        }),
                                                        ApproveCallStatus == "init" && "Approve",
                                                        ApproveCallStatus == "processing" && "In-progress...",
                                                        ApproveCallStatus == "done" && "Done",
                                                        ApproveCallStatus == "tryagain" && "Try Again"
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mt-0 purchase_text text-center",
                                                children: "Purchase"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mt-0 purchase_desc text-center",
                                                children: "Send transaction with your wallet"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-center",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    type: "button",
                                                    onClick: ()=>FormSubmit_StepTwo(),
                                                    className: "btn-main lead mar-top-10 mb-0",
                                                    disabled: ApproveCallStatus != "done" || PurchaseCallStatus == "processing" || PurchaseCallStatus == "done",
                                                    children: [
                                                        PurchaseCallStatus == "processing" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            class: "fa fa-spinner mr-3 spinner_icon",
                                                            "aria-hidden": "true",
                                                            id: "circle1"
                                                        }),
                                                        PurchaseCallStatus == "init" && "Purchase",
                                                        PurchaseCallStatus == "processing" && "In-progress...",
                                                        PurchaseCallStatus == "done" && "Done",
                                                        PurchaseCallStatus == "tryagain" && "Try Again"
                                                    ]
                                                })
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