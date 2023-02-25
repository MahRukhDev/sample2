"use strict";
(() => {
var exports = {};
exports.id = 579;
exports.ids = [579,774,6602,3380,9894,7320,7458,8390,4912];
exports.modules = {

/***/ 9073:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Myfavorities)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1662);
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1268);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4449);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6679);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _separate_LikeRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4997);
/* harmony import */ var _separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6748);
/* harmony import */ var _separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9137);
/* harmony import */ var _separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5186);
/* harmony import */ var _separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(124);
/* harmony import */ var _separate_TokenItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7117);
/* harmony import */ var _separate_TransferRef__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3406);
/* harmony import */ var _separate_BurnRef__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(686);
/* harmony import */ var _separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(702);
/* harmony import */ var _separate_ReportNowRef__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1816);
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3992);
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(471);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6103);
/* harmony import */ var _ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(4021);
/* harmony import */ var _ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(1439);
/* harmony import */ var _separate_PutOnBid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(6821);
/* harmony import */ var _ABI_ESC_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(30);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(3590);
/* harmony import */ var _helper_walletconnect__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(2213);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(9041);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _actions_v1_token__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(3451);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(7416);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header_js__WEBPACK_IMPORTED_MODULE_2__, _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__, _separate_LikeRef__WEBPACK_IMPORTED_MODULE_9__, _separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_10__, _separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_11__, _separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_12__, _separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_13__, _separate_TokenItem__WEBPACK_IMPORTED_MODULE_14__, _separate_TransferRef__WEBPACK_IMPORTED_MODULE_15__, _separate_BurnRef__WEBPACK_IMPORTED_MODULE_16__, _separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_17__, _separate_ReportNowRef__WEBPACK_IMPORTED_MODULE_18__, _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_20__, _separate_PutOnBid__WEBPACK_IMPORTED_MODULE_24__, react_toastify__WEBPACK_IMPORTED_MODULE_26__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_27__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_31__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_32__]);
([_components_Header_js__WEBPACK_IMPORTED_MODULE_2__, _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__, _separate_LikeRef__WEBPACK_IMPORTED_MODULE_9__, _separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_10__, _separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_11__, _separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_12__, _separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_13__, _separate_TokenItem__WEBPACK_IMPORTED_MODULE_14__, _separate_TransferRef__WEBPACK_IMPORTED_MODULE_15__, _separate_BurnRef__WEBPACK_IMPORTED_MODULE_16__, _separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_17__, _separate_ReportNowRef__WEBPACK_IMPORTED_MODULE_18__, _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_20__, _separate_PutOnBid__WEBPACK_IMPORTED_MODULE_24__, react_toastify__WEBPACK_IMPORTED_MODULE_26__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_27__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_31__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_32__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

































// Scroll to Top
function ScrollToTopOnMount() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.scrollTo(0, 0);
    }, []);
    return null;
}
react_toastify__WEBPACK_IMPORTED_MODULE_26__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_21__/* ["default"].toasterOption */ .Z.toasterOption;
function Myfavorities() {
    const [CatBasedTokenList, setCatBasedTokenList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [TokenList, setTokenList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [CatName, setCatName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("All");
    const [LikedTokenList, setLikedTokenList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [MyItemAccountAddr, Set_MyItemAccountAddr] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [WalletConnected, Set_WalletConnected] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("false");
    const [UserAccountAddr, Set_UserAccountAddr] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [UserAccountBal, Set_UserAccountBal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [AddressUserDetails, Set_AddressUserDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [Accounts, Set_Accounts] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [item, Set_item] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [Bids, Set_Bids] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [BuyOwnerDetailFirst, Set_BuyOwnerDetailFirst] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [tokenCounts_Detail, Set_tokenCounts_Detail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [MyTokenBalance, Set_MyTokenBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [MyTokenDetail, Set_MyTokenDetail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [AllowedQuantity, Set_AllowedQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [YouWillPay, Set_YouWillPay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [YouWillPayFee, Set_YouWillPayFee] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [YouWillGet, Set_YouWillGet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [tokenCounts, Set_tokenCounts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [AccepBidSelect, Set_AccepBidSelect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [tokenBidAmt, Set_tokenBidAmt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [NoOfToken, Set_NoOfToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [ValidateError, Set_ValidateError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [TokenBalance, Set_TokenBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [BidApply_ApproveCallStatus, Set_BidApply_ApproveCallStatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("init");
    const [BidApply_SignCallStatus, Set_BidApply_SignCallStatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("init");
    const [totaluserbidAmt, setTotaluserbidAmt] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [HitItem, Set_HitItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [collections, set_collections] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [bannerlist, setbannerlist] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [CategoryOption, setCategoryOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [reportCategoryname, setReportCategoryname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Select");
    const [description, setdescription] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [Loaderstatus, Set_Loaderstatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [selectown, set_selectown] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const PutOnBidForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var LikeForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var PlaceABidForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const PurchaseNowForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const PutOnSaleForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const CancelOrderForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const BurnForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var ShareForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var TransferForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var ReportForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadScript();
        getInit();
    }, []);
    function loadScript() {
        dropdown("#report-reason");
        dropdown("#item_category");
        dropdown("#buy_category");
        dropdown("#items_type");
        function dropdown(e) {
            var obj = jquery__WEBPACK_IMPORTED_MODULE_5___default()(e + ".dropdown");
            var btn = obj.find(".btn-selector");
            var dd = obj.find("ul");
            var opt = dd.find("li");
            obj.on("click", function() {
                dd.show();
            }).on("mouseleave", function() {
                dd.hide();
            });
            opt.on("click", function() {
                dd.hide();
                var txt = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).text();
                opt.removeClass("active");
                jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).addClass("active");
                btn.text(txt);
            });
        }
    }
    async function getInit() {
        TokenListCall();
        ReportdetList();
    }
    async function AfterWalletConnected() {
        try {
            LikeForwardRef && LikeForwardRef.current && LikeForwardRef.current.getLikesData();
        } catch (err) {}
        var currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_32__/* .getCurAddr */ .my)();
        if (currAddr && currAddr != null && currAddr != undefined && currAddr != "") {
            Set_Loaderstatus(true);
        }
        try {
            var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_27__/* .getmylog */ .I)();
            if (mydata && mydata != null && mydata != undefined && mydata != "") {
                const web3 = new (web3__WEBPACK_IMPORTED_MODULE_6___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
                var curAddr = await web3.eth.getAccounts();
                if (curAddr && curAddr != null && curAddr != undefined && curAddr != "") {
                    Set_Loaderstatus(true);
                }
                //var web3 = new Web3(window.ethereum);
                var currAddr = curAddr && curAddr[0].toLowerCase();
                //if (window.ethereum) {
                // var web3 = new Web3(window.ethereum);
                var ESCContract = new web3.eth.Contract(_ABI_ESC_json__WEBPACK_IMPORTED_MODULE_25__, _lib_config__WEBPACK_IMPORTED_MODULE_21__/* ["default"].esctokenAddr */ .Z.esctokenAddr);
                var tokenBal = await ESCContract.methods.balanceOf(currAddr).call();
                var tokenBalance = tokenBal / _lib_config__WEBPACK_IMPORTED_MODULE_21__/* ["default"].decimalvalues */ .Z.decimalvalues;
                Set_TokenBalance(tokenBalance.toFixed(_lib_config__WEBPACK_IMPORTED_MODULE_21__/* ["default"].toFixed */ .Z.toFixed));
            //}
            }
        } catch (err) {}
    }
    async function hidefunction() {
        window.$(".modal").modal("hide");
        PutOnSaleForwardRef.current.PutOnSale_Click(item, selectown);
    }
    async function bidpopupshow() {
        window.$(".modal").modal("hide");
        PutOnBidForwardRef.current.PutOnBid_Click(item, selectown);
    }
    async function popupshow() {
        window.$("#option_modal").modal("show");
    }
    async function showAllwithPro(data) {
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_27__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_6___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        var payload = {
            curAddr: curAddr[0].toLowerCase(),
            tokenCounts: data.tokenCounts
        };
        TokenCounts_Get_Detail_Call(payload);
    }
    const TokenCounts_Get_Detail_Call = async (payload)=>{
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_27__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_6___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_31__/* .TokenCounts_Get_Detail_Action */ .u7)(payload);
        if (Resp && Resp && Resp.data && Resp.data.Detail && Resp.data.Detail.Resp) {
            var TokenResp = Resp.data.Detail.Resp;
            if (TokenResp && TokenResp.Token && TokenResp.Token[0] && TokenResp.Token[0].tokenowners_current) {
                for(let i = 0; i < TokenResp.Token[0].tokenowners_current.length; i++){
                    const element = TokenResp.Token[0].tokenowners_current[i];
                    if (element.balance > 0 && element.price > 0 && element.tokenOwner != curAddr[0].toLowerCase()) {
                        Set_BuyOwnerDetailFirst(element);
                        break;
                    }
                }
            }
            Set_tokenCounts_Detail(TokenResp);
            if (TokenResp.Bids) {
                Set_Bids(TokenResp.Bids);
            }
            let ageSum = 0;
            var tokenowners_all = TokenResp.Token[0].tokenowners_all;
            if (tokenowners_all && tokenowners_all.length > 0) {
                for(let i = 0; i < tokenowners_all.length; i++){
                    if (tokenowners_all[i].balance > 0) {
                        ageSum += tokenowners_all[i].balance;
                    }
                }
            }
            var IndexVal = -1;
            if (TokenResp.Token[0].tokenowners_all && curAddr[0]) {
                var tokenowners_all = TokenResp.Token[0].tokenowners_all;
                IndexVal = tokenowners_all.findIndex((val)=>val.tokenOwner.toString() == curAddr[0].toLowerCase());
            }
            var newMyTokenBalance = 0;
            if (IndexVal > -1) {
                newMyTokenBalance = tokenowners_all[IndexVal].balance;
                Set_MyTokenBalance(newMyTokenBalance);
                Set_MyTokenDetail(tokenowners_all[IndexVal]);
            } else {
                newMyTokenBalance = 0;
                Set_MyTokenBalance(0);
                Set_MyTokenDetail({});
            }
            if (ageSum) {
                Set_AllowedQuantity(ageSum - newMyTokenBalance);
            } else {
                Set_AllowedQuantity(0);
            }
            if (TokenResp.Token && TokenResp.Token[0]) {
                Set_item(TokenResp.Token[0]);
            }
        }
    };
    async function ReportdetList() {
        try {
            var resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_31__/* .getreportcategory */ .VX)();
            if (resp && resp.data) {
                var CategoryOption = [];
                resp.data.data.map((item)=>{
                    CategoryOption.push({
                        value: item._id,
                        label: item.name
                    });
                });
                setCategoryOption(CategoryOption);
            }
        } catch (err) {}
    }
    function changeCategory(name) {
        setReportCategoryname(name);
    }
    async function TokenListCall(data = {}) {
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_27__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_6___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        //var web3 = new Web3(window.ethereum);
        var currAddr = curAddr && curAddr[0].toLowerCase();
        var name = CatName;
        if (data.CatName) {
            name = data.CatName;
        }
        var payload = {
            limit: 10000,
            page: CatBasedTokenList[name] && CatBasedTokenList[name].page ? CatBasedTokenList[name].page : 1,
            currAddr: currAddr,
            CatName: name,
            from: "Home"
        };
        CatBasedTokenList.loader = true;
        setCatBasedTokenList(CatBasedTokenList);
        var resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_31__/* .CollectiblesList_Favorities */ .Ww)(payload);
        CatBasedTokenList.loader = false;
        setCatBasedTokenList(CatBasedTokenList);
        if (resp && resp.data && resp.data.from == "token-collectibles-list-home" && resp.data.list.length > 0) {
            setTokenList(resp.data.list);
            if (typeof CatBasedTokenList[name] == "undefined") {
                CatBasedTokenList[name] = {
                    page: 1,
                    list: []
                };
            }
            CatBasedTokenList[name].list = resp.data.list;
            setCatBasedTokenList([]);
            setCatBasedTokenList(CatBasedTokenList);
        } else {
            CatBasedTokenList[name].onmore = false;
            setCatBasedTokenList([]);
            setCatBasedTokenList(CatBasedTokenList);
        }
    }
    const inputChange = (e)=>{
        if (e && e.target && typeof e.target.value != "undefined") {
            var value = e.target.value;
            setdescription(value);
            if (e.target.value != "") {
                Set_ValidateError({});
            }
        }
    };
    const ReportValidation = async (data = {})=>{
        var ValidateError = {};
        if (description == "" || typeof description == "undefined") {
            ValidateError.description = '"Description" is not allowed to be empty';
        }
        Set_ValidateError(ValidateError);
        return ValidateError;
    };
    async function submituserreport(item) {
        var errors = await ReportValidation();
        var errorsSize = Object.keys(errors).length;
        if (errorsSize != 0) {
            react_toastify__WEBPACK_IMPORTED_MODULE_26__.toast.error("Form validation error, please fill all the required fields", toasterOption);
            return false;
        }
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_27__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_6___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        //var web3 = new Web3(window.ethereum);
        var currAddr = curAddr && curAddr[0].toLowerCase();
        var reqData = {
            reportuser: currAddr,
            description: description,
            reportcategory: reportCategoryname,
            type: "collectibles",
            tokenCounts: item.tokenCounts
        };
        var response = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_31__/* .ReportRequest */ .zl)(reqData);
        if (response && response.status == "true") {
            react_toastify__WEBPACK_IMPORTED_MODULE_26__.toast.success("Successfully submit your report", toasterOption);
            setdescription("");
            setTimeout(function() {
                window.$("#report").modal("hide");
            }, 100);
            setTimeout(function() {
                window.location.reload(false);
            }, 400);
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_26__.toast.error("Oops something went wrong.!", toasterOption);
        }
    }
    // Countdown Timer
    const currentDate = new Date();
    const year = currentDate.getMonth() === 11 && currentDate.getDate() > 23 ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    //   const renderer = ({ days, hours, minutes, seconds }) => {
    //     return (
    //       <div className="timer_panel">
    //         <span><span className="timer_time">{zeroPad(days)}</span><span className="timer_label">d</span></span>
    //         <span className="timer_dots"> </span>
    //         <span><span className="timer_time">{zeroPad(hours)}</span><span className="timer_label">h</span></span>
    //         <span className="timer_dots"> </span>
    //         <span><span className="timer_time">{zeroPad(minutes)}</span><span className="timer_label">m</span></span>
    //         <span className="timer_dots"> </span>
    //         <span><span className="timer_time">{zeroPad(seconds)}</span><span className="timer_label">s</span></span>
    //       </div>
    //     );
    //   };
    const renderer = ({ days , Month , Year , hours , minutes , seconds , completed  })=>{
        if (completed) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {});
        } else {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                children: [
                    days,
                    "d ",
                    hours,
                    "h ",
                    minutes,
                    "m ",
                    seconds,
                    "s left"
                ]
            });
        }
    };
    const renderer1 = ({ days , Month , Year , hours , minutes , seconds , completed  })=>{
        if (completed) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {});
        } else {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                children: [
                    days,
                    "d ",
                    hours,
                    "h ",
                    minutes,
                    "m ",
                    seconds,
                    "s start"
                ]
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "wrapper",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_28__.Helmet, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Nilwire - Favorite NFT"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ScrollToTopOnMount, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_20__["default"], {
                Set_UserAccountAddr: Set_UserAccountAddr,
                Set_UserAccountBal: Set_UserAccountBal,
                Set_WalletConnected: Set_WalletConnected,
                Set_AddressUserDetails: Set_AddressUserDetails,
                AddressUserDetails: AddressUserDetails,
                Set_Accounts: Set_Accounts,
                WalletConnected: WalletConnected,
                AfterWalletConnected: AfterWalletConnected
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PutOnBid__WEBPACK_IMPORTED_MODULE_24__.PutOnBid, {
                ref: PutOnBidForwardRef,
                Set_HitItem: Set_HitItem,
                item: HitItem,
                UserAccountAddr: UserAccountAddr,
                UserAccountBal: UserAccountBal,
                Accounts: Accounts,
                // GetUserBal={GetUserBal}
                Set_NoOfToken: Set_NoOfToken
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_13__.CancelOrderRef, {
                ref: CancelOrderForwardRef,
                Set_HitItem: Set_HitItem,
                item: HitItem,
                UserAccountAddr: UserAccountAddr,
                UserAccountBal: UserAccountBal,
                Accounts: Accounts
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_BurnRef__WEBPACK_IMPORTED_MODULE_16__.BurnRef, {
                ref: BurnForwardRef,
                // GetUserBal={GetUserBal}
                UserAccountAddr: UserAccountAddr,
                UserAccountBal: UserAccountBal,
                TokenBalance: TokenBalance,
                Accounts: Accounts,
                item: HitItem,
                // item={item}
                Set_item: Set_item
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_LikeRef__WEBPACK_IMPORTED_MODULE_9__.LikeRef, {
                ref: LikeForwardRef,
                setLikedTokenList: setLikedTokenList,
                MyItemAccountAddr: MyItemAccountAddr
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_17__.ShareNowRef, {
                ref: ShareForwardRef
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_ReportNowRef__WEBPACK_IMPORTED_MODULE_18__.ReportNowRef, {
                UserAccountAddr: UserAccountAddr,
                ref: ReportForwardRef
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_10__.PurchaseNowRef, {
                ref: PurchaseNowForwardRef,
                Set_HitItem: Set_HitItem,
                item: HitItem,
                UserAccountAddr: UserAccountAddr,
                UserAccountBal: UserAccountBal,
                Accounts: Accounts,
                // GetUserBal={GetUserBal}
                AllowedQuantity: AllowedQuantity,
                Set_AllowedQuantity: Set_AllowedQuantity
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_12__.PutOnSaleRef, {
                ref: PutOnSaleForwardRef,
                Set_HitItem: Set_HitItem,
                item: HitItem,
                UserAccountAddr: UserAccountAddr,
                UserAccountBal: UserAccountBal,
                Accounts: Accounts,
                // GetUserBal={GetUserBal}
                Set_NoOfToken: Set_NoOfToken
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_TransferRef__WEBPACK_IMPORTED_MODULE_15__.TransferRef, {
                item: HitItem,
                ref: TransferForwardRef
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_11__.PlaceAndAcceptBidRef, {
                ref: PlaceABidForwardRef,
                Set_WalletConnected: Set_WalletConnected,
                Set_UserAccountAddr: Set_UserAccountAddr,
                Set_UserAccountBal: Set_UserAccountBal,
                Set_AddressUserDetails: Set_AddressUserDetails,
                Set_Accounts: Set_Accounts,
                Set_MyItemAccountAddr: Set_MyItemAccountAddr,
                Set_tokenCounts: Set_tokenCounts,
                Set_item: Set_item,
                Set_tokenCounts_Detail: Set_tokenCounts_Detail,
                Set_MyTokenBalance: Set_MyTokenBalance,
                Set_Bids: Set_Bids,
                Set_AccepBidSelect: Set_AccepBidSelect,
                Set_tokenBidAmt: Set_tokenBidAmt,
                Set_NoOfToken: Set_NoOfToken,
                Set_ValidateError: Set_ValidateError,
                Set_TokenBalance: Set_TokenBalance,
                Set_YouWillPay: Set_YouWillPay,
                Set_YouWillPayFee: Set_YouWillPayFee,
                Set_YouWillGet: Set_YouWillGet,
                Set_BidApply_ApproveCallStatus: Set_BidApply_ApproveCallStatus,
                Set_BidApply_SignCallStatus: Set_BidApply_SignCallStatus,
                WalletConnected: WalletConnected,
                UserAccountAddr: UserAccountAddr,
                UserAccountBal: UserAccountBal,
                AddressUserDetails: AddressUserDetails,
                Accounts: Accounts,
                MyItemAccountAddr: MyItemAccountAddr,
                tokenCounts: tokenCounts,
                item: item,
                tokenCounts_Detail: tokenCounts_Detail,
                MyTokenBalance: MyTokenBalance,
                Bids: Bids,
                AccepBidSelect: AccepBidSelect,
                tokenBidAmt: tokenBidAmt,
                NoOfToken: NoOfToken,
                ValidateError: ValidateError,
                TokenBalance: TokenBalance,
                YouWillPay: YouWillPay,
                YouWillPayFee: YouWillPayFee,
                YouWillGet: YouWillGet,
                BidApply_ApproveCallStatus: BidApply_ApproveCallStatus,
                BidApply_SignCallStatus: BidApply_SignCallStatus,
                AllowedQuantity: AllowedQuantity,
                totaluserbidAmt: totaluserbidAmt,
                setTotaluserbidAmt: setTotaluserbidAmt
            }),
            localStorage.getItem("nilwireMetamask") ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "no-bottom no-top",
                id: "content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        id: "subheader",
                        class: "text-light",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "center-y relative text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "container",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    class: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "col-md-12 text-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                children: "My favorite NFTs"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "clearfix"
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        "aria-label": "section",
                        className: "pt30 pb30",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "row wow fadeIn",
                                children: CatBasedTokenList && CatName && CatBasedTokenList[CatName] && CatBasedTokenList[CatName].list && CatBasedTokenList[CatName].list.length > 0 ? CatBasedTokenList[CatName].list.map((item)=>{
                                    console.log(item, "==================fromfav");
                                    var currDate = new Date();
                                    var startdate = new Date(item.clocktime);
                                    var enddate = new Date(item.endclocktime);
                                    var auction = "false";
                                    var finish = "";
                                    var enddate1 = "";
                                    var showlist = "true";
                                    var display_item = 0;
                                    var mytr = "";
                                    if (item && item.favinfo && item.favinfo.length > 0 && UserAccountAddr && UserAccountAddr != null && UserAccountAddr != undefined && UserAccountAddr != "") {
                                        mytr = item.favinfo.filter((x)=>x.useraddress == UserAccountAddr);
                                    }
                                    if (item.type == 721 && item.PutOnSaleType == "TimedAuction") {
                                        auction = "true";
                                        var a = moment__WEBPACK_IMPORTED_MODULE_8___default()(item.clocktime);
                                        var b = moment__WEBPACK_IMPORTED_MODULE_8___default()(item.endclocktime);
                                        var c = moment__WEBPACK_IMPORTED_MODULE_8___default()();
                                        a.diff(b); // 86400000
                                        var diffInMs = a.diff(c);
                                        display_item = a.diff(c);
                                        finish = b.diff(c);
                                        enddate1 = parseFloat(diffInMs);
                                        if (finish > 0) {
                                            showlist = "true";
                                        } else {
                                            var auctionTxt = "Ended";
                                            showlist = "false";
                                        }
                                    }
                                    console.log(mytr, "=======mytrmytrmytr");
                                    if (mytr && mytr.length > 0) {
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_TokenItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                            id: item._id,
                                            item: item,
                                            Set_item: Set_item,
                                            set_selectown: set_selectown,
                                            popupshow: popupshow,
                                            LikedTokenList: LikedTokenList,
                                            hitLike: LikeForwardRef.current.hitLike,
                                            UserAccountAddr: UserAccountAddr,
                                            UserAccountBal: UserAccountBal,
                                            PutOnSale_Click: PutOnSaleForwardRef.current.PutOnSale_Click,
                                            PurchaseNow_Click: PurchaseNowForwardRef.current.PurchaseNow_Click,
                                            PlaceABid_Click: PlaceABidForwardRef.current.PlaceABid_Click,
                                            Set_Bids: Set_Bids,
                                            Bids: Bids,
                                            Set_BuyOwnerDetailFirst: Set_BuyOwnerDetailFirst,
                                            Set_tokenCounts_Detail: Set_tokenCounts_Detail,
                                            Set_MyTokenBalance: Set_MyTokenBalance,
                                            Set_MyTokenDetail: Set_MyTokenDetail,
                                            Set_TokenBalance: Set_TokenBalance,
                                            Set_AllowedQuantity: Set_AllowedQuantity,
                                            Set_YouWillPay: Set_YouWillPay,
                                            Set_YouWillPayFee: Set_YouWillPayFee,
                                            Set_YouWillGet: Set_YouWillGet,
                                            Burn_Click: BurnForwardRef.current.Burn_Click,
                                            Transfer_Click: TransferForwardRef.current.Transfer_Click,
                                            CancelOrder_Click: CancelOrderForwardRef.current.CancelOrder_Click,
                                            WalletConnected: WalletConnected,
                                            SubmitReport_Click: ReportForwardRef.current.SubmitReport_Click,
                                            ShareSocial_Click: ShareForwardRef.current.ShareSocial_Click,
                                            aucttype: "no",
                                            from: 0
                                        });
                                    }
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mt-5",
                                    children: "No record found"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        class: "modal report primary_modal",
                        id: "report",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "modal-dialog modal-dialog-centered",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                class: "modal-content",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        class: "modal-header",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                class: "modal-title",
                                                children: "Report Item"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                class: "close",
                                                "data-dismiss": "modal",
                                                children: "\xd7"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "modal-body",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            className: "form-border",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: "Tell us more"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    id: "report-reason",
                                                    class: "dropdown w-100",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "javascript:void(0)",
                                                            class: "btn-selector w-100 d-block selectPlaceHolder",
                                                            children: reportCategoryname
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                            className: "w-100",
                                                            value: reportCategoryname,
                                                            children: CategoryOption && CategoryOption.length > 0 && CategoryOption.map((option, i)=>{
                                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    value: option.label,
                                                                    onClick: ()=>changeCategory(option.label),
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: option.label
                                                                    })
                                                                });
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    className: "form-control primary_inp",
                                                    onChange: inputChange,
                                                    id: "description",
                                                    rows: "3",
                                                    name: "description",
                                                    placeholder: "Give us more details"
                                                }),
                                                ValidateError.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-danger",
                                                    children: ValidateError.description
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        class: "modal-footer",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                class: "btn btn-danger",
                                                onClick: ()=>submituserreport(item),
                                                "data-dismiss": "modal",
                                                children: "Report"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                class: "btn btn-danger",
                                                "data-dismiss": "modal",
                                                children: "Cancel"
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
                        id: "option_modal",
                        tabindex: "-1",
                        role: "dialog",
                        "aria-labelledby": "option_modalCenteredLabel",
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
                                                id: "option_modalLabel",
                                                children: "Choose"
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
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "button",
                                                        className: "btn-main lead mar-top-10 mb-0",
                                                        onClick: ()=>hidefunction(),
                                                        children: "Put On Sale"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "button",
                                                        className: "btn-main lead mar-top-10 mb-0",
                                                        onClick: ()=>bidpopupshow(),
                                                        children: "Put On Bid"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "loader_section_",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    children: [
                        "Please Connect Wallet To Proceed Further ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        " ",
                        !localStorage.getItem("nilwireMetamask") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_30__.Link, {
                            to: "/connect-wallet",
                            className: "btn-main",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    style: {
                                        marginRight: "10px"
                                    },
                                    className: "icon_wallet_alt"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Connect wallet"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8130:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 8308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 3992:
/***/ ((module) => {

module.exports = require("@material-ui/icons/MoreHoriz");

/***/ }),

/***/ 6679:
/***/ ((module) => {

module.exports = require("@metamask/legacy-web3");

/***/ }),

/***/ 4137:
/***/ ((module) => {

module.exports = require("@walletconnect/web3-provider");

/***/ }),

/***/ 2947:
/***/ ((module) => {

module.exports = require("jquery");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4449:
/***/ ((module) => {

module.exports = require("react-countdown");

/***/ }),

/***/ 983:
/***/ ((module) => {

module.exports = require("react-datepicker");

/***/ }),

/***/ 611:
/***/ ((module) => {

module.exports = require("react-datetime");

/***/ }),

/***/ 2791:
/***/ ((module) => {

module.exports = require("react-helmet");

/***/ }),

/***/ 9041:
/***/ ((module) => {

module.exports = require("react-loading");

/***/ }),

/***/ 4661:
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 889:
/***/ ((module) => {

module.exports = require("sharethis-reactjs");

/***/ }),

/***/ 8519:
/***/ ((module) => {

module.exports = require("web3");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6103,4271,2213,30,4164,2997,7796,471,9137,6748,6821,5186,124,702,4997,686,3406,7117,1816], () => (__webpack_exec__(9073)));
module.exports = __webpack_exports__;

})();