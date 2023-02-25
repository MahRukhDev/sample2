exports.id = 6821;
exports.ids = [6821];
exports.modules = {

/***/ 6821:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PutOnBid": () => (/* binding */ PutOnBid)
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
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(983);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5994);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(611);
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1600);
/* harmony import */ var react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _actions_v1_token__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3451);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7416);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helper_walletconnect__WEBPACK_IMPORTED_MODULE_9__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_14__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_15__, react_toastify__WEBPACK_IMPORTED_MODULE_16__]);
([_helper_walletconnect__WEBPACK_IMPORTED_MODULE_9__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_14__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_15__, react_toastify__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









// import Select from "react-select";








react_toastify__WEBPACK_IMPORTED_MODULE_16__.toast.configure();
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
const PutOnBid = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    var myDate = new Date();
    var newdat = myDate.setDate(myDate.getDate() + parseInt(1));
    var initialEnd = new Date(newdat);
    const [BuyerName, Set_BuyerName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [blns, Set_blns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [dethBln, Set_dethBln] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [bidProfile1, Set_bidProfile1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [FormSubmitLoading, Set_FormSubmitLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [ValidateError, Set_ValidateError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [YouWillGet, Set_YouWillGet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [MinPrice, Set_MinPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [MaxPrice, Set_MaxPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [TokenPrice_Initial, Set_TokenPrice_Initial] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [biddingtoken, set_biddingtoken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].currencySymbol */ .Z.currencySymbol);
    const [servicefee, setservicefee] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [PurchaseCurrency, setPurchaseCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].currencySymbol */ .Z.currencySymbol);
    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());
    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());
    const [StartDate, Set_StartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Right after listing");
    const [EndDate, Set_EndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1 Day");
    const [Clocktime, set_Clocktime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());
    const [EndClocktime, set_EndClocktime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialEnd);
    const [TokenBalance, Set_TokenBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const closeBtn = async ()=>{
        document.getElementById("MinPrice").value = "";
        document.getElementById("MaxPrice").value = "";
    };
    const inputChange = async (e)=>{
        // var provider = window.ethereum;
        // var web3 = new Web3(provider);
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_9__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        if (e && e.target && typeof e.target.value != "undefined" && e.target.name) {
            var value = e.target.value;
            console.log(value, "valuevalue");
            console.log(e.target.name, "nameee");
            switch(e.target.name){
                case "MinPrice":
                    Set_MinPrice(value);
                    ItemValidation({
                        MinPrice: value
                    });
                    break;
                case "MaxPrice":
                    Set_MaxPrice(value);
                    ItemValidation({
                        MaxPrice: value
                    });
                    break;
                default:
            }
        }
    };
    const SelectBidcurrency = (e)=>{
        var filter = e.target.value;
        set_biddingtoken(filter);
    // getTokenval(filter)
    };
    //   async function getTokenval(filter){
    //     var web3              = new Web3(window.ethereum);
    //     if(filter==config.currencySymbol){
    //         if(item.type==721){
    //             var BEP721Contract = new web3.eth.Contract(BEP721, item.contractAddress);
    //             var fee = await BEP721Contract.methods.getServiceFee().call();
    //             var feeValue = fee/config.decimalvalues;
    //             setservicefee(feeValue)
    //             var weii=TokenPrice*config.decimalvalues;
    //             var per = (weii * fee) / 1e20;
    //           Set_YouWillGet( parseFloat((weii - per) / config.decimalvalues).toFixed(config.toFixed) );
    //         }else{
    //             var BEP1155Contract = new web3.eth.Contract(BEP1155, item.contractAddress);
    //             var fee = await BEP1155Contract.methods.getServiceFee().call();
    //             var feeValue = fee/config.decimalvalues;
    //             setservicefee(feeValue);
    //             var weii=TokenPrice*config.decimalvalues;
    //             var per = (weii * fee) / 1e20;
    //           Set_YouWillGet( parseFloat((weii - per) / config.decimalvalues).toFixed(config.toFixed) );
    //         }
    //     }else if(filter==config.tokenSymbol){
    //       if(item.type==721){
    //           var BEP721Contract = new web3.eth.Contract(BEP721, item.contractAddress);
    //           var fee = await BEP721Contract.methods.getServiceFee().call();
    //           var feeValue = fee/config.decimalvalues;
    //           setservicefee(feeValue)
    //           var weii=TokenPrice*config.decimalvalues;
    //           var per = (weii * fee) / 1e20;
    //         Set_YouWillGet( parseFloat((weii - per) / config.decimalvalues).toFixed(config.toFixed) );
    //       }else{
    //           var BEP1155Contract = new web3.eth.Contract(BEP1155, item.contractAddress);
    //           var fee = await BEP1155Contract.methods.getServiceFee().call();
    //           var feeValue = fee/config.decimalvalues;
    //           setservicefee(feeValue);
    //           var weii=TokenPrice*config.decimalvalues;
    //           var per = (weii * fee) / 1e20;
    //         Set_YouWillGet( parseFloat((weii - per) / config.decimalvalues).toFixed(config.toFixed) );
    //       }
    //     }else{
    //         if(item.type==721){
    //             var BEP721Contract = new web3.eth.Contract(BEP721, item.contractAddress);
    //             var fee = await BEP721Contract.methods.getServiceFee().call();
    //               var weii=TokenPrice*config.decimalvalues;
    //               var feeValue = fee/config.decimalvalues;
    //               setservicefee(feeValue)
    //               var per = (weii * fee) / 1e20;
    //           Set_YouWillGet( parseFloat((weii - per) / config.decimalvalues).toFixed(config.toFixed) );
    //         }else{
    //             var BEP1155Contract = new web3.eth.Contract(BEP1155, item.contractAddress);
    //             var fee = await BEP1155Contract.methods.getServiceFee().call();
    //               var weii=TokenPrice*config.decimalvalues;
    //               var feeValue = fee/config.decimalvalues;
    //               setservicefee(feeValue)
    //               var per = (weii * fee) / 1e20;
    //             Set_YouWillGet( parseFloat((weii - per) / config.decimalvalues).toFixed(config.toFixed) );
    //         }
    //         var VbitdxContract   = new web3.eth.Contract(VALOBITDX, config.ValobitdxAddr);
    //         var currAddr         = window.web3.eth.defaultAccount;
    //         var decimal          = await VbitdxContract.methods.decimals().call();
    //         var tokenBal         = await VbitdxContract.methods.balanceOf(currAddr).call();
    //         var tokenBalance      = tokenBal / config.decimalvalues;
    //         Set_TokenBalance(tokenBalance.toFixed(config.toFixed));
    //     }
    //   }
    const ItemValidation = async (data = {})=>{
        var ValidateError = {};
        var Chk_TokenPrice = typeof data.MinPrice != "undefined" ? data.MinPrice : typeof data.MaxPrice != "undefined" ? data.MaxPrice : MinPrice;
        var Chk_MaxPrice = typeof data.MinPrice != "undefined" ? data.MinPrice : typeof data.MaxPrice != "undefined" ? data.MaxPrice : MaxPrice;
        if (Chk_TokenPrice == "" || Chk_MaxPrice == "") {
            ValidateError.TokenPrice = '"Price" is not allowed to be empty';
        } else if (Chk_TokenPrice == 0 || Chk_MaxPrice == 0) {
            ValidateError.TokenPrice = '"Price" must be greater than 0';
        } else if (isNaN(Chk_TokenPrice) == true || isNaN(Chk_MaxPrice) == true) {
            console.loh("in1");
            ValidateError.TokenPrice = '"Price" must be a number';
        } else if (Math.sign(Chk_TokenPrice) < 0 || Math.sign(Chk_MaxPrice) < 0) {
            ValidateError.TokenPrice = "Price must be a possitive number";
        } else if (typeof data.MaxPrice != "undefined" && parseFloat(MinPrice) > parseFloat(Chk_TokenPrice)) {
            ValidateError.MinPrice = "Maximum Price must be Greater than Minimum Price";
        } else if (typeof data.MinPrice != "undefined" && parseFloat(Chk_TokenPrice) > parseFloat(MaxPrice)) {
            ValidateError.MinPrice = "Maximum Price must be Greater than Minimum Price";
        } else if (typeof data.MinPrice == "undefined" && typeof data.MaxPrice == "undefined" && (parseFloat(MinPrice) == undefined || parseFloat(MinPrice) == null || parseFloat(MinPrice) == "")) {
            ValidateError.MinPrice = '"Price" must be a number';
        } else if (typeof data.MinPrice == "undefined" && typeof data.MaxPrice == "undefined" && (parseFloat(MaxPrice) == undefined || parseFloat(MaxPrice) == null || parseFloat(MaxPrice) == "")) {
            ValidateError.TokenPrice = '"Price" must be a number';
        } else if (typeof data.MinPrice == "undefined" && typeof data.MaxPrice == "undefined" && typeof MinPrice != "undefined" && typeof MaxPrice != "undefined" && parseFloat(MinPrice) > parseFloat(MaxPrice)) {
            ValidateError.MinPrice = "Maximum Price must be Greater than Minimum Price";
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
        // alert()
        // document.getElementById('MinPrice').value = "";
        // document.getElementById('MaxPrice').value = "";
        var errors = await ItemValidation();
        console.log(errors, "error");
        var errorsSize = Object.keys(errors).length;
        if (errorsSize != 0) {
            window.$("#PutOnBid_modal").modal("show");
            react_toastify__WEBPACK_IMPORTED_MODULE_16__.toast.error("Form validation error, please fill all the required fields", toasterOption);
            return false;
        }
        var currDate = new Date();
        var sDate = new Date(Clocktime);
        if (StartDate == "Right after listing") {
            set_Clocktime(currDate);
            sDate = currDate;
        }
        var startDate = new Date(Clocktime);
        var eDate = new Date(EndClocktime);
        startDate.setSeconds(0);
        eDate.setSeconds(0);
        if (new Date(currDate) > new Date(sDate)) {
            react_toastify__WEBPACK_IMPORTED_MODULE_16__.toast.error("Start date & Time must be greater than now", toasterOption);
        } else if (Date.parse(startDate) >= Date.parse(eDate)) {
            react_toastify__WEBPACK_IMPORTED_MODULE_16__.toast.error('"End date" & Time must be greater than start date and Time', toasterOption);
        } else if (item.type == 721) {
            Set_FormSubmitLoading("processing");
            var postData = {
                address: props.Accounts,
                tokenCounts: props.item.tokenCounts,
                minprice: MinPrice,
                maxprice: MaxPrice,
                starttime: Clocktime,
                endtime: EndClocktime
            };
            var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_14__/* .MinMaxChange_update_Action */ .j_)(postData);
            console.log(Resp, "Ejmbbbbbuwek");
            if (Resp.data && Resp.data.RetType && Resp.data.RetType == "success") {
                react_toastify__WEBPACK_IMPORTED_MODULE_16__.toast.success(" NFT places for sale on marketplace", toasterOption);
                window.$("#PutOnBid_modal").modal("hide");
                setTimeout(()=>{
                    window.location.reload(false);
                }, 2000);
            }
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
            async PutOnBid_Click (item, ownerdetail) {
                var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_9__/* .getmylog */ .I)();
                const web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
                //var curAddr = await web3.eth.getAccounts();
                getfee(item);
                var connectwallet = localStorage.getItem("nilwireMetamask");
                if (!connectwallet) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_16__.toast.error("Please connect to a Metamask wallet", toasterOption);
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
                    window.$("#PutOnBid_modal").modal("show");
                } else {
                    var CoursetroContract = new web3.eth.Contract(_ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_5__, item.contractAddress);
                    var fee = await CoursetroContract.methods.getServiceFee().call();
                    var feeValue = fee / _lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].decimalvalues */ .Z.decimalvalues;
                    setservicefee(feeValue);
                    Set_TokenPrice_Initial(ownerdetail.price);
                    Set_ValidateError({});
                    window.$("#PutOnBid_modal").modal("show");
                }
                Set_TokenPrice_Initial(ownerdetail.price);
                Set_ValidateError({});
                window.$("#PutOnBid_modal").modal("show");
            }
        }));
    async function DateChange(from, val) {
        if (from == "StartDateDropDown") {
            if (val == "PickStartDate") {
                ModalAction("calendar_modal", "show");
            } else {
                Set_StartDate("Right after listing");
            }
        } else if (from == "EndDateDropDown") {
            if (val == "PickEndDate") {
                ModalAction("calendar_modal_expire", "show");
            } else {
                Set_EndDate(val);
                var myDate = new Date();
                var newdat = myDate.setDate(myDate.getDate() + parseInt(val));
                var newdate = new Date(newdat);
                set_EndClocktime(newdate);
            }
        }
    }
    async function ModalAction(id, type) {
        window.$("#" + id).modal(type);
        if (id == "calendar_modal") {
            if (Clocktime) {
                var dt = new Date(Clocktime);
                dt.setSeconds(0);
                var dt1 = dt.toLocaleString();
                Set_StartDate(dt1);
            }
        } else if (id == "calendar_modal_expire") {
            if (EndClocktime) {
                var dt = new Date(EndClocktime);
                dt.setSeconds(0);
                var dt1 = dt.toLocaleString();
                Set_EndDate(dt1);
            }
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "modal fade primary_modal",
            id: "PutOnBid_modal",
            "data-backdrop": "static",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "accept_modalCenteredLabel",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                        id: "PutOnBid_modalLabel",
                                        children: "NFT for Sale"
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
                                            children: "You are about to place Bid for"
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
                                                children: (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_15__/* .halfAddrShow */ .UD)(item && item.tokenowners_current && item.tokenowners_current.tokenOwner)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "input-group mb-3 input_grp_style_1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "Enter Minimum bid amount",
                                            type: "number",
                                            onKeyDown: (evt)=>[
                                                    "e",
                                                    "E",
                                                    "+",
                                                    "-",
                                                    ","
                                                ].includes(evt.key) && evt.preventDefault(),
                                            min: "0",
                                            name: "MinPrice",
                                            id: "MinPrice",
                                            class: "form-control mb-0",
                                            "aria-label": "bid",
                                            "aria-describedby": "basic-addon2",
                                            // value={MinPrice}
                                            onChange: inputChange,
                                            autoComplete: "off"
                                        })
                                    }),
                                    ValidateError.MinPrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-danger",
                                        children: ValidateError.MinPrice
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "input-group mb-3 input_grp_style_1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "Enter Maximum bid amount",
                                            type: "number",
                                            onKeyDown: (evt)=>[
                                                    "e",
                                                    "E",
                                                    "+",
                                                    "-",
                                                    ","
                                                ].includes(evt.key) && evt.preventDefault(),
                                            min: "0",
                                            name: "MaxPrice",
                                            id: "MaxPrice",
                                            class: "form-control mb-0",
                                            "aria-label": "bid",
                                            "aria-describedby": "basic-addon2",
                                            // value={MaxPrice}
                                            onChange: inputChange,
                                            autoComplete: "off"
                                        })
                                    }),
                                    ValidateError.TokenPrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-danger",
                                        children: ValidateError.TokenPrice
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        class: "row",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                class: "col-md-6",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "drobdown_section",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            className: "primary_label",
                                                            children: "Starting date"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            class: "dropdown",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    class: "btn btn-secondary dropdown-toggle filter_btn inp_btn m-0 text-left w-100",
                                                                    type: "button",
                                                                    id: "dropdownMenuButton",
                                                                    "data-toggle": "dropdown",
                                                                    "aria-haspopup": "true",
                                                                    "aria-expanded": "false",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        id: "menuBut",
                                                                        children: StartDate
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    class: "dropdown-menu filter_menu",
                                                                    "aria-labelledby": "dropdownMenuButton",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            id: "RightAfterListing",
                                                                            onClick: ()=>{
                                                                                DateChange("StartDateDropDown", "RightAfterListing");
                                                                            },
                                                                            children: "Right after listing"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            id: "PickStart",
                                                                            onClick: ()=>{
                                                                                DateChange("StartDateDropDown", "PickStartDate");
                                                                            },
                                                                            children: "Pick specific date"
                                                                        })
                                                                    ]
                                                                }),
                                                                ValidateError.StartDate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-danger",
                                                                    children: ValidateError.StartDate
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                class: "col-md-6",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "drobdown_section",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            className: "primary_label",
                                                            children: "Expiration date"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            class: "dropdown",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    class: "btn btn-secondary dropdown-toggle filter_btn inp_btn m-0 text-left w-100",
                                                                    type: "button",
                                                                    id: "dropdownMenuButton",
                                                                    "data-toggle": "dropdown",
                                                                    "aria-haspopup": "true",
                                                                    "aria-expanded": "false",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        id: "menuBut",
                                                                        children: EndDate
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    class: "dropdown-menu filter_menu",
                                                                    "aria-labelledby": "dropdownMenuButton",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            onClick: ()=>{
                                                                                DateChange("EndDateDropDown", "1 Day");
                                                                            },
                                                                            children: "1 Day"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            onClick: ()=>{
                                                                                DateChange("EndDateDropDown", "3 Day");
                                                                            },
                                                                            children: "3 Day"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            onClick: ()=>{
                                                                                DateChange("EndDateDropDown", "5 Day");
                                                                            },
                                                                            children: "5 Day"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            onClick: ()=>{
                                                                                DateChange("EndDateDropDown", "7 Day");
                                                                            },
                                                                            children: "7 Day"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            onClick: ()=>{
                                                                                DateChange("EndDateDropDown", "PickEndDate");
                                                                            },
                                                                            children: "Pick specific date"
                                                                        })
                                                                    ]
                                                                }),
                                                                ValidateError.EndDate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-danger",
                                                                    children: ValidateError.EndDate
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                class: "spacer-single"
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
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "modal fade primary_modal",
                    id: "calendar_modal",
                    tabindex: "-1",
                    role: "dialog",
                    "aria-labelledby": "calendar_modalCenteredLabel",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        class: "modal-dialog modal-dialog-centered modal-sm",
                        role: "document",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "modal-content",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                class: "modal-module",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        class: "modal-header text-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                class: "modal-title",
                                                id: "calendar_modalLabel",
                                                children: "Choose date"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                class: "close",
                                                "data-dismiss": "modal",
                                                "aria-label": "Close",
                                                id: "cancelcalender",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    "aria-hidden": "true",
                                                    children: "\xd7"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "modal-body",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "pb-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_datetime__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                minDate: new Date().getTime(),
                                                input: false,
                                                value: Clocktime,
                                                onChange: (value)=>set_Clocktime(value)
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "text-center mb-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "submit",
                                            name: "Done",
                                            value: "Done",
                                            className: "primary_btn",
                                            id: "doneStartDate",
                                            onClick: ()=>ModalAction("calendar_modal", "hide")
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "modal fade primary_modal",
                    id: "calendar_modal_expire",
                    tabindex: "-1",
                    role: "dialog",
                    "aria-labelledby": "calendar_modalCenteredLabel",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        class: "modal-dialog modal-dialog-centered modal-sm",
                        role: "document",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "modal-content",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                class: "modal-module",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        class: "modal-header text-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                class: "modal-title",
                                                id: "calendar_modalLabel",
                                                children: "Choose date"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                class: "close",
                                                "data-dismiss": "modal",
                                                "aria-label": "Close",
                                                id: "cancelcalender",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    "aria-hidden": "true",
                                                    children: "\xd7"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "modal-body",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "pb-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_datetime__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                input: false,
                                                value: EndClocktime,
                                                minDate: new Date().getTime(),
                                                onChange: (value)=>set_EndClocktime(value)
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "text-center mb-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "submit",
                                            name: "Done",
                                            value: "Done",
                                            className: "primary_btn",
                                            id: "doneEndDate",
                                            onClick: ()=>ModalAction("calendar_modal_expire", "hide")
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5994:
/***/ (() => {



/***/ }),

/***/ 1600:
/***/ (() => {



/***/ })

};
;