"use strict";
exports.id = 5967;
exports.ids = [5967];
exports.modules = {

/***/ 5967:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemDetails)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1662);
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1268);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _separate_LikeRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4997);
/* harmony import */ var _separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(124);
/* harmony import */ var _separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(702);
/* harmony import */ var _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(471);
/* harmony import */ var _separate_WalletRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8203);
/* harmony import */ var _separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9137);
/* harmony import */ var _separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6748);
/* harmony import */ var _separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5186);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4449);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _separate_PutOnBid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6821);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6679);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6103);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9041);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _helper_walletconnect__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2213);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7416);
/* harmony import */ var _actions_v1_token__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header_js__WEBPACK_IMPORTED_MODULE_2__, _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__, _separate_LikeRef__WEBPACK_IMPORTED_MODULE_5__, _separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_6__, _separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_7__, _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_8__, _separate_WalletRef__WEBPACK_IMPORTED_MODULE_9__, _separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_10__, _separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_11__, _separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_12__, _separate_PutOnBid__WEBPACK_IMPORTED_MODULE_14__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_20__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_22__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_23__]);
([_components_Header_js__WEBPACK_IMPORTED_MODULE_2__, _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__, _separate_LikeRef__WEBPACK_IMPORTED_MODULE_5__, _separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_6__, _separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_7__, _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_8__, _separate_WalletRef__WEBPACK_IMPORTED_MODULE_9__, _separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_10__, _separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_11__, _separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_12__, _separate_PutOnBid__WEBPACK_IMPORTED_MODULE_14__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_20__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_22__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
























// Scroll to Top
function ScrollToTopOnMount() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.scrollTo(0, 0);
    }, []);
    return null;
}
function ItemDetails() {
    var { tokenidval  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)();
    const [LikedTokenList, setLikedTokenList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [MyItemAccountAddr, Set_MyItemAccountAddr] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [WalletConnected, Set_WalletConnected] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [UserAccountAddr, Set_UserAccountAddr] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [AddressUserDetails, Set_AddressUserDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [Accounts, Set_Accounts] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [TokenBalance, Set_TokenBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [tokenCounts, Set_tokenCounts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tokenidval);
    const [item, Set_item] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [tokenCounts_Detail, Set_tokenCounts_Detail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [AllowedQuantity, Set_AllowedQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [MyTokenBalance, Set_MyTokenBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [MyTokenDetail, Set_MyTokenDetail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [Bids, Set_Bids] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [onwer_price, set_owner_price] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [BuyOwnerDetailFirst, Set_BuyOwnerDetailFirst] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [Loaderstatus, Set_Loaderstatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [UserAccountBal, Set_UserAccountBal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [ActivityList, Set_ActivityList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [Activitycount, Set_Activitycount] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [HitItem, Set_HitItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [Tabname, Set_Tabname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Info");
    const [AccepBidSelect, Set_AccepBidSelect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [tokenBidAmt, Set_tokenBidAmt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [NoOfToken, Set_NoOfToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [ValidateError, Set_ValidateError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [YouWillPay, Set_YouWillPay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [YouWillPayFee, Set_YouWillPayFee] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [YouWillGet, Set_YouWillGet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [BidApply_ApproveCallStatus, Set_BidApply_ApproveCallStatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("init");
    const [BidApply_SignCallStatus, Set_BidApply_SignCallStatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("init");
    const [totaluserbidAmt, setTotaluserbidAmt] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [selectown, set_selectown] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    var LikeForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var PlaceABidForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var PutOnSaleForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var PurchaseNowForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var CancelOrderForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var WalletForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var ShareForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const PutOnBidForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const AfterWalletConnected = async ()=>{
        var curAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .getCurAddr */ .my)();
        var payload = {
            curAddr: curAddr,
            tokenCounts: tokenidval
        };
        TokenCounts_Get_Detail_Call(payload);
        Get_Activity_list();
        try {
            LikeForwardRef && LikeForwardRef.current && LikeForwardRef.current.getLikesData();
        } catch (err) {}
    };
    function convertStr(n) {
        var sign = +n < 0 ? "-" : "", toStr = n.toString();
        if (!/e/i.test(toStr)) {
            return n;
        }
        var [lead, decimal, pow] = n.toString().replace(/^-/, "").replace(/^([0-9]+)(e.*)/, "$1.$2").split(/e|\./);
        return +pow < 0 ? sign + "0." + "0".repeat(Math.max(Math.abs(pow) - 1 || 0, 0)) + lead + decimal : sign + lead + (+pow >= decimal.length ? decimal + "0".repeat(Math.max(+pow - decimal.length || 0, 0)) : decimal.slice(0, +pow) + "." + decimal.slice(+pow));
    }
    async function GetUserBal() {
        await WalletForwardRef.current.GetUserBal();
    }
    //   const userDetails = async () => {
    //   var curAddr = await getCurAddr();
    //   var payload = {
    //     curAddr: curAddr,
    //     tokenCounts: tokenidval,
    //   };
    //   TokenCounts_Get_Detail_Call(payload)
    // }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        var curAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .getCurAddr */ .my)();
        var payload = {
            curAddr: curAddr,
            tokenCounts: tokenidval
        };
        TokenCounts_Get_Detail_Call(payload);
    // Get_Activity_list();
    }, []);
    const TokenCounts_Get_Detail_Call = async (payload)=>{
        var curAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .getCurAddr */ .my)();
        var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_23__/* .TokenCounts_Get_Detail_Action */ .u7)(payload);
        // console.log(Resp,'Resp');
        if (Resp && Resp && Resp.data && Resp.data.Detail && Resp.data.Detail.Resp) {
            var TokenResp = Resp.data.Detail.Resp;
            Set_AllowedQuantity(TokenResp && TokenResp["Token"] && TokenResp["Token"][0] && TokenResp["Token"][0]["balance"] ? TokenResp["Token"][0]["balance"] : 0);
            if (TokenResp && TokenResp.Token && TokenResp.Token[0] && TokenResp.Token[0].tokenowners_current) {
                for(let i = 0; i < TokenResp.Token[0].tokenowners_current.length; i++){
                    const element = TokenResp.Token[0].tokenowners_current[i];
                    set_owner_price(element);
                    if (element.balance > 0 && //element.price > 0 &&
                    element.tokenOwner != curAddr) {
                        console.log(element, "========Set_BuyOwnerDetailFirst=============");
                        Set_BuyOwnerDetailFirst(element);
                        break;
                    }
                }
            }
            Set_tokenCounts_Detail(TokenResp);
            // console.log(TokenResp,'TokenRespTokenRespTokenResp');
            if (TokenResp.Bids) {
                Set_Bids(TokenResp.Bids);
            }
            let ageSum = 0;
            var tokenowners_all = TokenResp && TokenResp.Token && TokenResp.Token[0] && TokenResp.Token[0].tokenowners_all ? TokenResp.Token[0].tokenowners_all : [];
            if (tokenowners_all && tokenowners_all.length > 0) {
                for(let i = 0; i < tokenowners_all.length; i++){
                    if (tokenowners_all[i].balance > 0) {
                        ageSum += tokenowners_all[i].balance;
                    }
                }
            }
            var IndexVal = -1;
            if (TokenResp && TokenResp.Token.length > 0) {
                if (TokenResp.Token[0].tokenowners_all && curAddr) {
                    var tokenowners_all = TokenResp.Token[0].tokenowners_all;
                    IndexVal = tokenowners_all.findIndex((val)=>val.tokenOwner.toString() == curAddr.toString());
                }
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
                // try {
                // var mydata = await getmylog();
                // const web3 = new Web3(
                //   mydata &&
                //   mydata.provider &&
                //   mydata.provider != null &&
                //   mydata.provider != undefined &&
                //   mydata.provider != ""
                //     ? mydata.provider
                //     : window.ethereum
                // );
                // var curAddr = await web3.eth.getAccounts();
                //var web3 = new Web3(window.ethereum);
                // var currAddr = curAddr && curAddr[0].toLowerCase();
                //if (window.ethereum) {
                // var web3 = new Web3(window.ethereum);
                // if(TokenResp.Token[0].type==721){
                //   var CoursetroContract = new web3.eth.Contract(BEP721, config.singleContract);
                //   if(TokenResp&&TokenResp.Token[0]&&TokenResp.Token[0].tokenowners_current[0].biddingtoken==config.currencySymbol){
                //     var fee = await CoursetroContract.methods.getServiceFee().call();
                //   }else  if(TokenResp&&TokenResp.Token[0]&&TokenResp.Token[0].tokenowners_current[0].biddingtoken==config.tokenSymbol){
                //     var fee = await CoursetroContract.methods.getValobitdxFee().call();
                //   }else{
                //     var fee = await CoursetroContract.methods.getServiceFee().call();
                //   }
                // }else{
                //   var CoursetroContract = new web3.eth.Contract(BEP1155, config.multipleContract);
                //   if(TokenResp&&TokenResp.Token[0]&&TokenResp.Token[0].tokenowners_current[0].biddingtoken==config.currencySymbol){
                //     var fee = await CoursetroContract.methods.getServiceFee().call();
                //   }else  if(TokenResp&&TokenResp.Token[0]&&TokenResp.Token[0].tokenowners_current[0].biddingtoken==config.tokenSymbol){
                //     var fee = await CoursetroContract.methods.getValobitdxFee().call();
                //   }else{
                //     var fee = await CoursetroContract.methods.getServiceFee().call();
                //   }
                // }
                // var feeValue = fee/config.decimalvalues;
                // setservicefee(feeValue);
                //}
                // } catch (err) {}
                Set_Loaderstatus(true);
                Set_item(TokenResp.Token[0]);
            }
        }
    };
    async function Get_Activity_list() {
        try {
            var resp = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .HistoryActivity_List_Action */ .IF)({
                tokenCounts: tokenidval
            });
            console.log(resp, "resp");
            if (resp && resp.data && resp.data.list) {
                var List = resp.data.list;
                console.log((List, "Lists"));
                if (List.length > 0) {
                    Set_Activitycount(List.length);
                }
                Set_ActivityList(List);
            } else {
                Set_ActivityList([]);
            }
        } catch (err) {}
    }
    try {
        var display_item = "";
        var currDate = new Date();
        var startdate = new Date(item.clocktime);
        var enddate = new Date(item.endclocktime);
        var auction = "false";
        var finish = "";
        var enddate1 = "";
        var showlist = "true";
        if (item.type == 721 && item.PutOnSaleType == "TimedAuction") {
            auction = "true";
            var a = moment__WEBPACK_IMPORTED_MODULE_17___default()(item.clocktime);
            var b = moment__WEBPACK_IMPORTED_MODULE_17___default()(item.endclocktime);
            var c = moment__WEBPACK_IMPORTED_MODULE_17___default()();
            a.diff(b); // 86400000
            var diffInMs = a.diff(c);
            finish = b.diff(c);
            enddate1 = parseFloat(diffInMs);
            display_item = a.diff(c);
            if (finish > 0) {
                showlist = "true";
            } else {
                var auctionTxt = "Ended";
                showlist = "false";
            }
        }
    } catch (err) {}
    async function hidefunction() {
        window.$(".modal").modal("hide");
        PutOnSaleForwardRef.current.PutOnSale_Click(item, selectown);
    }
    async function bidpopupshow() {
        window.$(".modal").modal("hide");
        PutOnBidForwardRef.current.PutOnBid_Click(item, selectown);
    }
    async function popupshow(s_item, s_detail) {
        set_selectown(s_detail);
        window.$("#option_modal").modal("show");
    }
    const renderer = ({ days , Month , Year , hours , minutes , seconds , completed  })=>{
        if (completed) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Ended"
            });
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
                    "s to start"
                ]
            });
        }
    };
    function convert(n) {
        var sign = +n < 0 ? "-" : "", toStr = n.toString();
        if (!/e/i.test(toStr)) {
            return n;
        }
        var [lead, decimal, pow] = n.toString().replace(/^-/, "").replace(/^([0-9]+)(e.*)/, "$1.$2").split(/e|\./);
        return +pow < 0 ? sign + "0." + "0".repeat(Math.max(Math.abs(pow) - 1 || 0, 0)) + lead + decimal : sign + lead + (+pow >= decimal.length ? decimal + "0".repeat(Math.max(+pow - decimal.length || 0, 0)) : decimal.slice(0, +pow) + "." + decimal.slice(+pow));
    }
    console.log(BuyOwnerDetailFirst, showlist == "true", display_item, BuyOwnerDetailFirst.tokenOwner, "=============ininnininninnninniinnitemderaillscdsfsd");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "wrapper",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_8__["default"], {
                Set_UserAccountAddr: Set_UserAccountAddr,
                Set_UserAccountBal: Set_UserAccountBal,
                Set_WalletConnected: Set_WalletConnected,
                Set_AddressUserDetails: Set_AddressUserDetails,
                Set_Accounts: Set_Accounts,
                WalletConnected: WalletConnected,
                AfterWalletConnected: AfterWalletConnected
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_LikeRef__WEBPACK_IMPORTED_MODULE_5__.LikeRef, {
                ref: LikeForwardRef,
                setLikedTokenList: setLikedTokenList,
                MyItemAccountAddr: MyItemAccountAddr
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_10__.PlaceAndAcceptBidRef, {
                ref: PlaceABidForwardRef,
                Set_Tabname: Set_Tabname,
                Tabname: Tabname,
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_11__.PurchaseNowRef, {
                ref: PurchaseNowForwardRef,
                Set_HitItem: Set_HitItem,
                item: HitItem,
                UserAccountAddr: UserAccountAddr,
                UserAccountBal: UserAccountBal,
                TokenBalance: TokenBalance,
                Accounts: Accounts,
                GetUserBal: GetUserBal,
                AllowedQuantity: AllowedQuantity,
                Set_AllowedQuantity: Set_AllowedQuantity
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PutOnBid__WEBPACK_IMPORTED_MODULE_14__.PutOnBid, {
                ref: PutOnBidForwardRef,
                Set_HitItem: Set_HitItem,
                item: HitItem,
                UserAccountAddr: UserAccountAddr,
                UserAccountBal: UserAccountBal,
                Accounts: Accounts,
                // GetUserBal={GetUserBal}
                Set_NoOfToken: Set_NoOfToken
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_6__.CancelOrderRef, {
                ref: CancelOrderForwardRef,
                Set_HitItem: Set_HitItem,
                item: HitItem,
                UserAccountAddr: UserAccountAddr,
                UserAccountBal: UserAccountBal,
                Accounts: Accounts
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_21__.Helmet, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Nilwire - ItemDetails"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: `${_lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreator}/${item.image}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: item && item.tokenDesc
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ScrollToTopOnMount, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "no-bottom no-top",
                id: "content",
                children: [
                    console.log(item, "iiiiiiiiiiiiiiiiii"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        "aria-label": "section",
                        className: "mt90 sm-mt-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-md-6 text-center",
                                        children: [
                                            item && item.image && item.image.split(".").pop() == "mp4" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                src: `${_lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreator}/${item.image}`,
                                                type: "video/mp4",
                                                alt: "Collections",
                                                className: "img-fluid img-rounded mb-sm-30",
                                                controls: true,
                                                controlsList: "nodownload"
                                            }) : item && item.image && item.image.split(".").pop() == "mp3" || item && item.image && item.image.split(".").pop() == "wav" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: `${_lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Back_URL */ .Z.Back_URL}images/music.png`,
                                                        alt: "",
                                                        className: "img-fluid img-rounded mb-sm-30"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                                                        src: `${_lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreator}/${item.image}`,
                                                        type: "audio/mp3",
                                                        controls: true,
                                                        className: "img-fluid img-rounded mb-sm-30"
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: `${_lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreator}/${item.image}`,
                                                alt: "Collections",
                                                className: "img-fluid img-rounded mb-sm-30"
                                            }),
                                            item && item.image && item.image.split(".").pop() == "mp3" || item && item.image && item.image.split(".").pop() == "wav" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                                                style: {
                                                    marginLeft: " -278px",
                                                    marginTop: "10px"
                                                },
                                                src: `${_lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreatorInfo.curraddress}/${item.image}`,
                                                type: "audio/mp3",
                                                controls: true,
                                                className: "audio audio_widyth"
                                            }) : "",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "activity-list",
                                                style: {
                                                    marginTop: "20px"
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "info_properties",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                            children: "Properties"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "info_properties_panel",
                                                            children: item && item.tokenProperty && item.tokenProperty.length > 0 && item.tokenProperty.map((myprob, i)=>{
                                                                return myprob.des != undefined && myprob.des != null && myprob.des != "" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: myprob.des
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                            children: myprob.unit
                                                                        })
                                                                    ]
                                                                }) : "";
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item_info",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "detailBg",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            children: item.tokenName
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "item_info_counts",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "item_info_type",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fa fa-image"
                                                                        }),
                                                                        item.tokenCategory
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "item_info_like",
                                                                    children: [
                                                                        LikedTokenList.findIndex((tokenCounts)=>tokenCounts.tokenCounts === item.tokenCounts) > -1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fa fa-heart liked",
                                                                            onClick: ()=>LikeForwardRef.current.hitLike(item),
                                                                            style: {
                                                                                cursor: "pointer"
                                                                            }
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "far fa-heart ",
                                                                            onClick: ()=>LikeForwardRef.current.hitLike(item),
                                                                            style: {
                                                                                cursor: "pointer"
                                                                            }
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            class: item.tokenCounts + "-likecount mr-2",
                                                                            children: item.likecount
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        UserAccountAddr && item && item.tokenowners_current && item.unlockcontent != "" && item.tokenowners_current.findIndex((e)=>e.tokenOwner == UserAccountAddr) > -1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: item.unlockcontent
                                                        }),
                                                        item.tokenDesc != "" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            children: [
                                                                "Description : ",
                                                                item.tokenDesc
                                                            ]
                                                        }),
                                                        item.usercontract && item.usercontract != "" && item.usercontract.name != "" && item.usercontract.name != undefined && item.usercontract.name != null && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            children: [
                                                                "Collection :",
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: _lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Front_URL */ .Z.Front_URL + "/collections/" + item.usercontract.conAddr,
                                                                    children: item.usercontract.name
                                                                })
                                                            ]
                                                        }),
                                                        item.PutOnSaleType == "TimedAuction" && // showlist == "true" &&
                                                        display_item <= 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "de_countdownr",
                                                            style: {
                                                                border: "2px solid #eb7d48;",
                                                                background: "var(--primary-color) !important;"
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countdown__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                                date: enddate,
                                                                autoStart: true,
                                                                onStart: ()=>startdate,
                                                                renderer: renderer
                                                            })
                                                        }),
                                                        item.PutOnSaleType == "TimedAuction" && // showlist == "true" &&
                                                        display_item > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "de_countdownr",
                                                            style: {
                                                                border: "2px solid #eb7d48;",
                                                                background: "var(--primary-color) !important;"
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countdown__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                                date: startdate,
                                                                autoStart: true,
                                                                onStart: ()=>Date.now(),
                                                                renderer: renderer1
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            children: "Creator"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "item_author",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "author_list_pp",
                                                                    children: item.tokenCreatorInfo && item.tokenCreatorInfo.curraddress && item.tokenCreatorInfo.image != "" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                        href: `${_lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Front_URL */ .Z.Front_URL}/user/${item.tokenCreatorInfo && item.tokenCreatorInfo.curraddress}`,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                className: "lazy",
                                                                                src: `${_lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Back_URL */ .Z.Back_URL}profile/${item.tokenCreatorInfo.image}`,
                                                                                alt: ""
                                                                            }),
                                                                            item && item.tokenCreatorInfo && item.tokenCreatorInfo.emailverified && item.tokenCreatorInfo.emailverified[0] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fa fa-check"
                                                                            })
                                                                        ]
                                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                        href: `${_lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Front_URL */ .Z.Front_URL}/user/${item.tokenCreatorInfo && item.tokenCreatorInfo.curraddress}`,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                className: "lazy",
                                                                                src: `${_lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Back_URL */ .Z.Back_URL}images/previewThumb.png`,
                                                                                alt: ""
                                                                            }),
                                                                            item && item.tokenCreatorInfo && item.tokenCreatorInfo.emailverified && item.tokenCreatorInfo.emailverified[0] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fa fa-check"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                item.tokenCreatorInfo && item.tokenCreatorInfo.name != "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "author_list_info",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: `${_lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Front_URL */ .Z.Front_URL}/user/${item.tokenCreatorInfo && item.tokenCreatorInfo.curraddress}`,
                                                                        children: item.tokenCreatorInfo && item.tokenCreatorInfo.name
                                                                    })
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "author_list_info",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: `${_lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Front_URL */ .Z.Front_URL}/user/${item.tokenCreatorInfo && item.tokenCreatorInfo.curraddress}`,
                                                                        children: item.tokenCreatorInfo && item.tokenCreatorInfo.curraddress
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "spacer-40"
                                                }),
                                                WalletConnected === true && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "de_tab tab_simple",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                class: "nav nav-tabs de_nav",
                                                                id: "nav-tab",
                                                                role: "tablist",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        class: "nav-item nav-link active",
                                                                        id: "nav-owner-tab",
                                                                        "data-toggle": "tab",
                                                                        href: "#nav-owner",
                                                                        role: "tab",
                                                                        "aria-controls": "nav-owner",
                                                                        "aria-selected": "false",
                                                                        children: "Owner"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        class: "nav-item nav-link",
                                                                        id: "nav-bids-tab",
                                                                        "data-toggle": "tab",
                                                                        href: "#nav-bids",
                                                                        role: "tab",
                                                                        "aria-controls": "nav-bids",
                                                                        "aria-selected": "true",
                                                                        children: "Bids"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        class: "nav-item nav-link",
                                                                        id: "nav-history-tab",
                                                                        "data-toggle": "tab",
                                                                        href: "#nav-history",
                                                                        role: "tab",
                                                                        "aria-controls": "nav-history",
                                                                        "aria-selected": "false",
                                                                        children: "History"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            class: "tab-content de_tab_content detailPageTab",
                                                            id: "nav-tabContent",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    class: "tab-pane fade ",
                                                                    id: "nav-bids",
                                                                    role: "tabpanel",
                                                                    "aria-labelledby": "nav-bids-tab",
                                                                    children: Bids && Bids.pending && Bids.pending.length > 0 ? Bids.pending.map((curBid)=>{
                                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "p_list",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "p_list_pp",
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                        href: `${_lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Front_URL */ .Z.Front_URL}/user/${curBid.tokenBidAddress}`,
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                className: "lazy",
                                                                                                src: curBid && curBid.bidDetails && curBid.bidDetails.image != undefined && curBid.bidDetails.image != "" ? `${_lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Back_URL */ .Z.Back_URL}profile/${curBid.bidDetails.image}` : __webpack_require__(4546),
                                                                                                alt: ""
                                                                                            }),
                                                                                            curBid && curBid.bidDetails && curBid.bidDetails.emailverified && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "fa fa-check"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "p_list_info",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                                                            children: [
                                                                                                convertStr(curBid.tokenBidAmt),
                                                                                                " ",
                                                                                                _lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].tokenSymbol */ .Z.tokenSymbol,
                                                                                                " for ",
                                                                                                curBid && curBid.pending ? curBid.pending + " Qty" : "1 Qty"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                "by",
                                                                                                " ",
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                                                    children: (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(curBid.tokenBidAddress)
                                                                                                }),
                                                                                                " ",
                                                                                                "at",
                                                                                                " ",
                                                                                                moment__WEBPACK_IMPORTED_MODULE_17___default()(curBid.timestamp).format("MMMM Do YYYY, h:mm a"),
                                                                                                UserAccountAddr && UserAccountAddr != curBid.tokenBidAddress && item && item.tokenowners_current && item.tokenowners_current.findIndex((e)=>e.tokenOwner == UserAccountAddr) > -1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "ml-0 mt-3 ml-cus",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                        className: "btn-main lead mar-right-15",
                                                                                                        "data-toggle": "modal",
                                                                                                        type: "button",
                                                                                                        onClick: ()=>PlaceABidForwardRef.current.AcceptBid_Select(curBid, item),
                                                                                                        children: "Accept"
                                                                                                    })
                                                                                                }),
                                                                                                UserAccountAddr && UserAccountAddr == curBid.tokenBidAddress && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "ml-2 ml-cus",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                        className: "btn-main lead mar-right-15",
                                                                                                        "data-toggle": "modal",
                                                                                                        type: "button",
                                                                                                        onClick: ()=>PlaceABidForwardRef.current.CancelBid_Select(curBid, item),
                                                                                                        children: "Cancel"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        });
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "mt-0 media_text mb-0",
                                                                        children: "No Records"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    class: "tab-pane fade show active",
                                                                    id: "nav-owner",
                                                                    role: "tabpanel",
                                                                    "aria-labelledby": "nav-owner-tab",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                        class: "activity-list itemDetailsList",
                                                                        children: item.tokenowners_current && item.tokenowners_current.length > 0 && item.tokenowners_current.map((itemCur, i)=>{
                                                                            let myimageindex = item && item.tokenOwnerInfo && item.tokenOwnerInfo.curraddress ? item.tokenOwnerInfo.curraddress.indexOf(itemCur.tokenOwner) : -1;
                                                                            console.log(myimageindex, "==========myimageindex==========");
                                                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "creators_details flex_col_c mb-3",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "d-flex mb-2",
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            class: "p_list mb-0",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                    class: "p_list_pp author_list_pp",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                            className: "lazy",
                                                                                                            src: item.tokenOwnerInfo && item.tokenOwnerInfo.image && item.tokenOwnerInfo.image.length > 0 && item.tokenOwnerInfo.image[myimageindex] != "" && item.tokenOwnerInfo.image[myimageindex] != undefined && item.tokenOwnerInfo.image[myimageindex] != null ? `${_lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Back_URL */ .Z.Back_URL}profile/${item.tokenOwnerInfo.image[myimageindex]}` : __webpack_require__(4546),
                                                                                                            alt: "Owner"
                                                                                                        }),
                                                                                                        item && item.tokenOwnerInfo && item.tokenOwnerInfo.emailverified && item.tokenOwnerInfo.emailverified[myimageindex] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                            className: "fa fa-check"
                                                                                                        })
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    class: "p_list_info",
                                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                    children: item.tokenOwnerInfo && item.tokenOwnerInfo.name && item.tokenOwnerInfo.name.length > 0 && item.tokenOwnerInfo.name[myimageindex] != "" && item.tokenOwnerInfo.name[myimageindex] != undefined && item.tokenOwnerInfo.name[myimageindex] != null ? item.tokenOwnerInfo.name[myimageindex] : itemCur.tokenOwner
                                                                                                                })
                                                                                                            }),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                                className: "mar_clas_ssss p-0",
                                                                                                                children: itemCur.price > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                                                    children: [
                                                                                                                        itemCur.balance,
                                                                                                                        "/",
                                                                                                                        itemCur.quantity,
                                                                                                                        " on sale for ",
                                                                                                                        convert(itemCur.price),
                                                                                                                        " ",
                                                                                                                        _lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].symbol */ .Z.symbol,
                                                                                                                        " ",
                                                                                                                        itemCur.quantity > 0 && "each"
                                                                                                                    ]
                                                                                                                })
                                                                                                            }),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                                className: "mar_clas_ssss p-0",
                                                                                                                children: itemCur.price <= 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                                                    children: [
                                                                                                                        itemCur.balance,
                                                                                                                        "/",
                                                                                                                        itemCur.quantity,
                                                                                                                        " Not for sale"
                                                                                                                    ]
                                                                                                                })
                                                                                                            }),
                                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                                class: "ml-0 mt-3 ml-cus",
                                                                                                                children: [
                                                                                                                    itemCur.price > 0 && itemCur.balance > 0 && itemCur.tokenOwner != UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                                        class: "btn-main lead mar-right-15",
                                                                                                                        onClick: ()=>PurchaseNowForwardRef.current.PurchaseNow_Click(item, itemCur),
                                                                                                                        children: "Buy now"
                                                                                                                    }),
                                                                                                                    itemCur.price <= 0 && itemCur.balance > 0 && itemCur.tokenOwner == UserAccountAddr && item.type == 721 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                                        class: "btn-main lead mar-right-15",
                                                                                                                        onClick: ()=>popupshow(item, MyTokenDetail),
                                                                                                                        children: "Put On Sale"
                                                                                                                    }) : itemCur.price <= 0 && itemCur.balance > 0 && itemCur.tokenOwner == UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                                        class: "btn-main lead mar-right-15",
                                                                                                                        onClick: ()=>PutOnSaleForwardRef.current.PutOnSale_Click(item, MyTokenDetail),
                                                                                                                        children: "Put On Sale"
                                                                                                                    }),
                                                                                                                    itemCur.price > 0 && itemCur.balance > 0 && itemCur.tokenOwner == UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                                        class: "btn-main lead mar-right-15",
                                                                                                                        onClick: ()=>PutOnSaleForwardRef.current.PutOnSale_Click(item, MyTokenDetail),
                                                                                                                        children: "Change Price"
                                                                                                                    }),
                                                                                                                    itemCur.price > 0 && itemCur.balance > 0 && itemCur.tokenOwner == UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                                        className: "btn-main lead mar-right-15",
                                                                                                                        onClick: ()=>CancelOrderForwardRef.current.CancelOrder_Click(item, BuyOwnerDetailFirst),
                                                                                                                        children: "Cancel order"
                                                                                                                    })
                                                                                                                ]
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                })
                                                                            });
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    class: "tab-pane fade",
                                                                    id: "nav-history",
                                                                    role: "tabpanel",
                                                                    "aria-labelledby": "nav-history-tab",
                                                                    children: ActivityList.map((item)=>{
                                                                        {
                                                                            console.log(item, "item--item--item");
                                                                        }
                                                                        var imageUrl = item && item.actiontype != "purchase" && item.actiontype != "acceptBid" && item.actiontype != "transfer" && item.userdetail && item.userdetail.image && item.userdetail.image != "" ? _lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Back_URL */ .Z.Back_URL + "profile/" + item.userdetail.image : item && (item.actiontype == "purchase" || item.actiontype == "acceptBid" || item.actiontype == "transfer") && item.touserdetails && item.touserdetails.image && item.touserdetails.image != "" ? _lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Back_URL */ .Z.Back_URL + "profile/" + item.touserdetails.image : _lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Back_URL */ .Z.Back_URL + "images/previewThumb.png";
                                                                        var text = "";
                                                                        var name = "";
                                                                        try {
                                                                            var UserAccountAddr = localStorage.getItem("nilwireMetamask");
                                                                        } catch (err) {
                                                                            var UserAccountAddr = "";
                                                                        }
                                                                        if (item.actiontype == "Creation") {
                                                                            text = "Created " + " " + " by " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.userdetail && item.userdetail.curraddress) + " on " + moment__WEBPACK_IMPORTED_MODULE_17___default()(item.timestamp).format("MMMM Do YYYY, h:mm a");
                                                                            name = item.name ? item.name : "";
                                                                        } else if (item.actiontype == "Cancel Order") {
                                                                            text = "Order Cancelled " + " " + " by " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.userdetail && item.userdetail.curraddress) + " on " + moment__WEBPACK_IMPORTED_MODULE_17___default()(item.timestamp).format("MMMM Do YYYY, h:mm a");
                                                                            name = item.name ? item.name : "";
                                                                        } else if (item.actiontype == "following") {
                                                                            var followTxt = (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item.touseraddress);
                                                                            if (item.touseraddress == UserAccountAddr) {
                                                                                followTxt = "You ";
                                                                            }
                                                                            text = "Started following " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item.touseraddress);
                                                                            name = item.userdetail && item.userdetail.name != "" ? item.userdetail.name : (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item.userdetail.curraddress);
                                                                        } else if (item.actiontype == "pricechange") {
                                                                            text = "Token Price Changed for " + convertStr(item.price) + " " + item.currency + " by " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.userdetail && item.userdetail.curraddress) + " on " + moment__WEBPACK_IMPORTED_MODULE_17___default()(item.timestamp).format("MMMM Do YYYY, h:mm a");
                                                                            name = item.name ? item.name : "";
                                                                        } else if (item.actiontype == "listings") {
                                                                            if ((item && item.tokenuser && item.tokenuser.PutOnSaleType) == "FixedPrice") {
                                                                                text = "Listed for " + item.price + " " + item.currency + " by " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.userdetail && item.userdetail.curraddress) + " on " + moment__WEBPACK_IMPORTED_MODULE_17___default()(item.timestamp).format("MMMM Do YYYY, h:mm a");
                                                                            } else if ((item && item.tokenuser && item.tokenuser.PutOnSaleType) == "TimedAuction") {
                                                                                text = "Listed for " + item.price + " " + item.currency + " by " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.userdetail && item.userdetail.curraddress) + " on " + moment__WEBPACK_IMPORTED_MODULE_17___default()(item.timestamp).format("MMMM Do YYYY, h:mm a");
                                                                            } else {
                                                                                text = "Listed " + "by " + " " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.userdetail && item.userdetail.curraddress) + " on " + moment__WEBPACK_IMPORTED_MODULE_17___default()(item.timestamp).format("MMMM Do YYYY, h:mm a");
                                                                            }
                                                                            name = item.name ? item.name : "";
                                                                        } else if (item.actiontype == "editbid") {
                                                                            text = "Edit bid for " + convertStr(item.price) + " " + item.currency + " by " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.userdetail && item.userdetail.curraddress) + " on " + moment__WEBPACK_IMPORTED_MODULE_17___default()(item.timestamp).format("MMMM Do YYYY, h:mm a");
                                                                            name = item.name ? item.name : "";
                                                                        } else if (item.actiontype == "bidrequest") {
                                                                            text = "Place bid " + convertStr(item.price) + " WETH  by " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.userdetail && item.userdetail.curraddress) + " on " + moment__WEBPACK_IMPORTED_MODULE_17___default()(item.timestamp).format("MMMM Do YYYY, h:mm a");
                                                                            name = item.name ? item.name : "";
                                                                        } else if (item.actiontype == "transfer") {
                                                                            text = (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.useraddress) + " Transferred to " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.touseraddress) + " on " + moment__WEBPACK_IMPORTED_MODULE_17___default()(item.timestamp).format("MMMM Do YYYY, h:mm a");
                                                                            name = item.name ? item.name : "";
                                                                        } else if (item.actiontype == "acceptBid") {
                                                                            text = "Accept Bid for " + item.price + " " + "WETH to " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.useraddress) + " on " + moment__WEBPACK_IMPORTED_MODULE_17___default()(item.timestamp).format("MMMM Do YYYY, h:mm a");
                                                                            name = item.name ? item.name : "";
                                                                        } else if (item.actiontype == "purchase") {
                                                                            text = "Purchased for " + item.price + " " + item.currency + " by " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.touseraddress) + " on " + moment__WEBPACK_IMPORTED_MODULE_17___default()(item.timestamp).format("MMMM Do YYYY, h:mm a");
                                                                            name = item.name ? item.name : "";
                                                                        } else if (item.actiontype == "burn") {
                                                                            text = "Burn by " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.userdetail && item.userdetail.curraddress) + " on " + moment__WEBPACK_IMPORTED_MODULE_17___default()(item.timestamp).format("MMMM Do YYYY, h:mm a");
                                                                            name = item.name ? item.name : "";
                                                                        } else if (item.actiontype == "like") {
                                                                            text = "liked by " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.userdetail && item.userdetail.curraddress) + " on " + moment__WEBPACK_IMPORTED_MODULE_17___default()(item.timestamp).format("MMMM Do YYYY, h:mm a");
                                                                            name = item.name ? item.name : "";
                                                                        } else if (item.actiontype == "unlike") {
                                                                            text = "Unliked by " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.userdetail && item.userdetail.curraddress) + " on " + moment__WEBPACK_IMPORTED_MODULE_17___default()(item.timestamp).format("MMMM Do YYYY, h:mm a");
                                                                            name = item.name ? item.name : "";
                                                                        } else if (item.actiontype == "reporting") {
                                                                            text = "Reporting by " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.userdetail && item.userdetail.curraddress) + " on " + moment__WEBPACK_IMPORTED_MODULE_17___default()(item.timestamp).format("MMMM Do YYYY, h:mm a");
                                                                            name = item.name ? item.name : "";
                                                                        } else if (item.actiontype == "sharing") {
                                                                            text = "Shared by " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.userdetail && item.userdetail.curraddress) + " on " + moment__WEBPACK_IMPORTED_MODULE_17___default()(item.timestamp).format("MMMM Do YYYY, h:mm a");
                                                                            name = item.name ? item.name : "";
                                                                        } else if (item.actiontype == "burn") {
                                                                            text = "Burn by " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.userdetail.curraddress) + " on " + moment__WEBPACK_IMPORTED_MODULE_17___default()(item.timestamp).format("MMMM Do YYYY, h:mm a");
                                                                            name = item.name ? item.name : "";
                                                                        } else if (item.actiontype == "sales") {
                                                                            text = "Sale by " + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item && item.useraddress) + " on " + moment__WEBPACK_IMPORTED_MODULE_17___default()(item.timestamp).format("MMMM Do YYYY, h:mm a");
                                                                            name = item.name ? item.name : "";
                                                                        }
                                                                        var linkUrl = "/info/" + item.tokenCounts;
                                                                        if (item.itemtype == "users") {
                                                                            linkUrl = "/user/" + (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(item.useraddress);
                                                                        }
                                                                        if (name.length > 15) {
                                                                            name = name.substring(0, 18) + "...";
                                                                        }
                                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "p_list",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "p_list_pp author_list_pp",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            className: "lazy",
                                                                                            src: imageUrl,
                                                                                            alt: ""
                                                                                        }),
                                                                                        item && item.userdetail && item.userdetail.emailverified && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                            className: "fa fa-check"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "p_list_info",
                                                                                    children: text
                                                                                })
                                                                            ]
                                                                        });
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                            className: "activity-list itemDetailsList",
                                                            children: tokenCounts_Detail.TotalQuantity > MyTokenBalance || Bids && Bids.highestBid && Bids.highestBid.tokenBidAmt ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "p_list",
                                                                        children: Bids.highestBid && Bids.highestBid.tokenBidAmt > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "p_list_pp",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            style: {
                                                                                                height: "100%"
                                                                                            },
                                                                                            className: "lazy",
                                                                                            src: Bids.highestBid && Bids.highestBid.bidDetails && Bids.highestBid.bidDetails.image != undefined && Bids.highestBid.bidDetails.image != "" ? `${_lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Back_URL */ .Z.Back_URL}profile/${Bids.highestBid.bidDetails.image}` : __webpack_require__(4546),
                                                                                            alt: ""
                                                                                        }),
                                                                                        Bids.highestBid && Bids.highestBid.bidDetails && Bids.highestBid.bidDetails.emailverified && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                            className: "fa fa-check"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "p_list_info",
                                                                                    children: [
                                                                                        "Highest Bid",
                                                                                        " ",
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                                                            children: [
                                                                                                convertStr(Bids.highestBid.tokenBidAmt),
                                                                                                " ",
                                                                                                _lib_config__WEBPACK_IMPORTED_MODULE_18__/* ["default"].tokenSymbol */ .Z.tokenSymbol,
                                                                                                " for ",
                                                                                                Bids && Bids.highestBid && Bids.highestBid.pending ? Bids.highestBid.pending + " Qty" : "1 Qty"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                "by",
                                                                                                " ",
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                                                    children: Bids.highestBid.bidBy && Bids.highestBid.bidBy.name ? Bids.highestBid.bidBy.name : (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_22__/* .halfAddrShow */ .UD)(Bids.highestBid.tokenBidAddress)
                                                                                                }),
                                                                                                " ",
                                                                                                "at",
                                                                                                " ",
                                                                                                moment__WEBPACK_IMPORTED_MODULE_17___default()(Bids.highestBid.timestamp).format("MMMM Do YYYY, h:mm a")
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "mt-0 media_text_big_1 text-center",
                                                                            children: "No active bids yet... Be the first to make a bid!"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "mt-3 infoGroupButton",
                                                                        children: [
                                                                            BuyOwnerDetailFirst && BuyOwnerDetailFirst.tokenOwner && BuyOwnerDetailFirst.price && parseFloat(BuyOwnerDetailFirst.price) > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                className: "btn-main lead mar-right-15",
                                                                                "data-toggle": "modal",
                                                                                onClick: ()=>PurchaseNowForwardRef.current.PurchaseNow_Click(item, BuyOwnerDetailFirst),
                                                                                children: "Buy now"
                                                                            }) : MyTokenDetail && MyTokenDetail.balance > 0 && MyTokenDetail.price > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                        className: "btn-main lead mar-right-15",
                                                                                        onClick: ()=>PutOnSaleForwardRef.current.PutOnSale_Click(item, BuyOwnerDetailFirst),
                                                                                        children: "Change Price"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                        className: "btn-main lead mar-right-15",
                                                                                        onClick: ()=>CancelOrderForwardRef.current.CancelOrder_Click(item, BuyOwnerDetailFirst),
                                                                                        children: "Cancel order"
                                                                                    })
                                                                                ]
                                                                            }) : MyTokenDetail && MyTokenDetail.balance > 0 && MyTokenDetail.price == 0 && item.type == 721 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                className: "btn-main lead mar-right-15",
                                                                                onClick: ()=>popupshow(item, BuyOwnerDetailFirst),
                                                                                children: "Put On Sale"
                                                                            }) : MyTokenDetail && MyTokenDetail.balance > 0 && MyTokenDetail.price == 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                className: "btn-main lead mar-right-15",
                                                                                onClick: ()=>PutOnSaleForwardRef.current.PutOnSale_Click(item, BuyOwnerDetailFirst),
                                                                                children: "Put On Sale"
                                                                            }),
                                                                            BuyOwnerDetailFirst && BuyOwnerDetailFirst.tokenOwner && Bids && Bids.myBid && Bids.myBid.status && Bids.myBid.status == "pending" && display_item <= 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                className: "btn-main lead",
                                                                                "data-toggle": "modal",
                                                                                type: "submit",
                                                                                onClick: ()=>PlaceABidForwardRef.current.PlaceABid_Click(item, MyTokenDetail),
                                                                                children: "Edit Bid"
                                                                            }) : BuyOwnerDetailFirst && BuyOwnerDetailFirst.tokenOwner && Bids && Bids.myBid && Bids.myBid.status && Bids.myBid.status == "partiallyCompleted" && display_item <= 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                className: "btn-main lead",
                                                                                "data-toggle": "modal",
                                                                                onClick: ()=>PlaceABidForwardRef.current.CancelBid_Select(Bids.myBid),
                                                                                children: "Cancel a bid"
                                                                            }) : BuyOwnerDetailFirst && showlist == "true" && BuyOwnerDetailFirst.tokenOwner && display_item <= 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                className: "btn-main lead",
                                                                                "data-toggle": "modal",
                                                                                onClick: ()=>PlaceABidForwardRef.current.PlaceABid_Click(item, MyTokenDetail),
                                                                                children: "Place a bid"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }) : ""
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
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
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;