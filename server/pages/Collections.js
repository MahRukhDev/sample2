"use strict";
(() => {
var exports = {};
exports.id = 3149;
exports.ids = [3149,774,6602,3380,9894,7320,7458,8390,4912];
exports.modules = {

/***/ 1139:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Collections)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1662);
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1268);
/* harmony import */ var _assets_images_background_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1974);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4449);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_v1_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3451);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6103);
/* harmony import */ var _separate_TokenItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7117);
/* harmony import */ var _separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6748);
/* harmony import */ var _separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9137);
/* harmony import */ var _separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5186);
/* harmony import */ var _separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(124);
/* harmony import */ var _separate_BurnRef__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(686);
/* harmony import */ var _separate_ReportNowRef__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1816);
/* harmony import */ var _separate_TransferRef__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3406);
/* harmony import */ var _separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(702);
/* harmony import */ var _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(471);
/* harmony import */ var _separate_LikeRef__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4997);
/* harmony import */ var _separate_PutOnBid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6821);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(6679);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(4021);
/* harmony import */ var _ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(1439);
/* harmony import */ var _ABI_ESC_json__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(30);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(3590);
/* harmony import */ var _helper_walletconnect__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(2213);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(7416);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header_js__WEBPACK_IMPORTED_MODULE_3__, _components_Footer_js__WEBPACK_IMPORTED_MODULE_4__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_7__, _separate_TokenItem__WEBPACK_IMPORTED_MODULE_9__, _separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_10__, _separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_11__, _separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_12__, _separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_13__, _separate_BurnRef__WEBPACK_IMPORTED_MODULE_14__, _separate_ReportNowRef__WEBPACK_IMPORTED_MODULE_15__, _separate_TransferRef__WEBPACK_IMPORTED_MODULE_16__, _separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_17__, _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_18__, _separate_LikeRef__WEBPACK_IMPORTED_MODULE_19__, _separate_PutOnBid__WEBPACK_IMPORTED_MODULE_20__, react_toastify__WEBPACK_IMPORTED_MODULE_28__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_29__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_31__]);
([_components_Header_js__WEBPACK_IMPORTED_MODULE_3__, _components_Footer_js__WEBPACK_IMPORTED_MODULE_4__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_7__, _separate_TokenItem__WEBPACK_IMPORTED_MODULE_9__, _separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_10__, _separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_11__, _separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_12__, _separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_13__, _separate_BurnRef__WEBPACK_IMPORTED_MODULE_14__, _separate_ReportNowRef__WEBPACK_IMPORTED_MODULE_15__, _separate_TransferRef__WEBPACK_IMPORTED_MODULE_16__, _separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_17__, _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_18__, _separate_LikeRef__WEBPACK_IMPORTED_MODULE_19__, _separate_PutOnBid__WEBPACK_IMPORTED_MODULE_20__, react_toastify__WEBPACK_IMPORTED_MODULE_28__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_29__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_31__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

































react_toastify__WEBPACK_IMPORTED_MODULE_28__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].toasterOption */ .Z.toasterOption;
// Scroll to Top
function ScrollToTopOnMount() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.scrollTo(0, 0);
    }, []);
    return null;
}
function Collections() {
    var { id  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)();
    // Countdown Timer
    const currentDate = new Date();
    const year = currentDate.getMonth() === 11 && currentDate.getDate() > 23 ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    const [Onsale, setOnsale] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [owned, setOwned] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [contractData, setcontractData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [ownerData, setownerData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [CatBasedTokenList, setCatBasedTokenList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        loader: false,
        All: {
            page: 1,
            list: [],
            onmore: true
        }
    });
    var imageUrl = _lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Back_URL */ .Z.Back_URL + "cover/5.jpg";
    const [TokenFilePreUrl, setTokenFilePreUrl] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(imageUrl);
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
    const [totaluserbidAmt, setTotaluserbidAmt] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [HitItem, Set_HitItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [collections, set_collections] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [bannerlist, setbannerlist] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [CategoryOption, setCategoryOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [reportCategoryname, setReportCategoryname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Select");
    const [description, setdescription] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [userCollectionDetails, setuserCollectionDetails] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [bid, setBid] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [sellers, setSellers] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [selectown, set_selectown] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [mymarket, setmymarket] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [biddamt, setbiddamt] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [BidApply_ApproveCallStatus, Set_BidApply_ApproveCallStatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("init");
    const [BidApply_SignCallStatus, Set_BidApply_SignCallStatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("init");
    var LikeForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var PlaceABidForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const PurchaseNowForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const PutOnSaleForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const PutOnBidForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const CancelOrderForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const BurnForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var ShareForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var ReportForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var TransferForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        Getusercollection();
        Getuserdetails();
    }, []);
    async function Getuserdetails() {
        var data = {
            id: id,
            userid: localStorage.getItem("nilwireMetamaskAddr")
        };
        var collection = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_7__/* .GetUserCollection */ .Nn)(data);
        var data = {
            id: id
        };
        var usercollectionDetailNews = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_7__/* .getDetailsCollections */ .EK)(data);
        var marketCap = JSON.stringify(usercollectionDetailNews.data.RespData.resp[0].totalVol);
        marketCap = JSON.parse(marketCap);
        setuserCollectionDetails(usercollectionDetailNews.data.RespData.resp[0]);
        setmymarket(marketCap);
        setBid(usercollectionDetailNews.data.RespData.bidCnt[0]);
        setbiddamt(usercollectionDetailNews.data.RespData.bidCnt[0] ? usercollectionDetailNews.data.RespData.bidCnt[0].tokenBidAmt : 0);
        setcontractData(collection.data.contractData);
        setownerData(collection.data.ownerData);
        if (collection && collection.data && collection.data.ownerData && collection.data.ownerData.collectioncover && collection.data.ownerData.collectioncover != null && collection.data.ownerData.collectioncover != undefined && collection.data.ownerData.collectioncover != "") {
            setTokenFilePreUrl(_lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Back_URL */ .Z.Back_URL + "cover/" + collection.data.ownerData.collectioncover);
        }
    }
    async function copyToClipboard(e) {
        var textField = document.createElement("textarea");
        textField.innerText = contractData.conAddr;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
        react_toastify__WEBPACK_IMPORTED_MODULE_28__.toast.success("Copied Successfully", toasterOption);
    }
    async function Getusercollection() {
        var currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_31__/* .getCurAddr */ .my)();
        var name = CatName;
        var payload = {
            limit: 1000,
            page: CatBasedTokenList[name] && CatBasedTokenList[name].page ? CatBasedTokenList[name].page : 1,
            currAddr: currAddr,
            key: "collection",
            CatName: name,
            id: id,
            from: "Home"
        };
        CatBasedTokenList.loader = true;
        setCatBasedTokenList(CatBasedTokenList);
        var resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_7__/* .CollectiblesList */ .EY)(payload);
        CatBasedTokenList.loader = false;
        setCatBasedTokenList(CatBasedTokenList);
        if (resp && resp.data && resp.data.from == "token-collectibles-list-home" && resp.data.list.length > 0) {
            setOnsale(resp.data.list);
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
    async function AfterWalletConnected() {
        try {
            LikeForwardRef && LikeForwardRef.current && LikeForwardRef.current.getLikesData();
        } catch (err) {}
        try {
            var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_29__/* .getmylog */ .I)();
            const web3 = new (web3__WEBPACK_IMPORTED_MODULE_22___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
            var curAddr = await web3.eth.getAccounts();
            //if (window.ethereum) {
            //var web3 = new Web3(window.ethereum);
            if (curAddr && curAddr != null && curAddr != undefined && curAddr != "") {
                var ESCContract = new web3.eth.Contract(_ABI_ESC_json__WEBPACK_IMPORTED_MODULE_27__, _lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].esctokenAddr */ .Z.esctokenAddr);
                var tokenBal = await ESCContract.methods.balanceOf(curAddr[0].toLowerCase()).call();
                var tokenBalance = tokenBal / _lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].decimalvalues */ .Z.decimalvalues;
                Set_TokenBalance(tokenBalance.toFixed(_lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].toFixed */ .Z.toFixed));
            }
        // }
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
    const renderer = ({ days , hours , minutes , seconds  })=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "timer_panel",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "timer_time",
                            children: (0,react_countdown__WEBPACK_IMPORTED_MODULE_6__.zeroPad)(days)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "timer_label",
                            children: "d"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "timer_dots",
                    children: " "
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "timer_time",
                            children: (0,react_countdown__WEBPACK_IMPORTED_MODULE_6__.zeroPad)(hours)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "timer_label",
                            children: "h"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "timer_dots",
                    children: " "
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "timer_time",
                            children: (0,react_countdown__WEBPACK_IMPORTED_MODULE_6__.zeroPad)(minutes)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "timer_label",
                            children: "m"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "timer_dots",
                    children: " "
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "timer_time",
                            children: (0,react_countdown__WEBPACK_IMPORTED_MODULE_6__.zeroPad)(seconds)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "timer_label",
                            children: "s"
                        })
                    ]
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "wrapper",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_30__.Helmet, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Nilwire - Collections"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ScrollToTopOnMount, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "no-bottom no-top",
                id: "content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_18__["default"], {
                        Set_UserAccountAddr: Set_UserAccountAddr,
                        Set_UserAccountBal: Set_UserAccountBal,
                        Set_WalletConnected: Set_WalletConnected,
                        Set_AddressUserDetails: Set_AddressUserDetails,
                        AddressUserDetails: AddressUserDetails,
                        Set_Accounts: Set_Accounts,
                        WalletConnected: WalletConnected,
                        AfterWalletConnected: AfterWalletConnected
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_13__.CancelOrderRef, {
                        ref: CancelOrderForwardRef,
                        Set_HitItem: Set_HitItem,
                        item: HitItem,
                        UserAccountAddr: UserAccountAddr,
                        UserAccountBal: UserAccountBal,
                        Accounts: Accounts
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_BurnRef__WEBPACK_IMPORTED_MODULE_14__.BurnRef, {
                        ref: BurnForwardRef,
                        Set_HitItem: Set_HitItem,
                        item: item,
                        Set_item: Set_item,
                        UserAccountAddr: UserAccountAddr,
                        UserAccountBal: UserAccountBal,
                        TokenBalance: TokenBalance,
                        Accounts: Accounts
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PutOnBid__WEBPACK_IMPORTED_MODULE_20__.PutOnBid, {
                        ref: PutOnBidForwardRef,
                        Set_HitItem: Set_HitItem,
                        item: HitItem,
                        UserAccountAddr: UserAccountAddr,
                        UserAccountBal: UserAccountBal,
                        Accounts: Accounts,
                        // GetUserBal={GetUserBal}
                        Set_NoOfToken: Set_NoOfToken
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_LikeRef__WEBPACK_IMPORTED_MODULE_19__.LikeRef, {
                        ref: LikeForwardRef,
                        setLikedTokenList: setLikedTokenList,
                        MyItemAccountAddr: MyItemAccountAddr
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_17__.ShareNowRef, {
                        ref: ShareForwardRef
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_ReportNowRef__WEBPACK_IMPORTED_MODULE_15__.ReportNowRef, {
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_TransferRef__WEBPACK_IMPORTED_MODULE_16__.TransferRef, {
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        id: "profile_banner subheader padding-bottom-40",
                        className: "text-light",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "profile-bg",
                                style: {
                                    backgroundImage: `url(${TokenFilePreUrl})`
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        "aria-label": "section",
                        className: "d_coll no-top",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-12",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "d_profile mb-3",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "profile_avatar",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "d_profile_img",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: contractData && contractData.imageUser ? _lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].Back_URL */ .Z.Back_URL + "collections/" + contractData.imageUser : __webpack_require__(4546),
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "profile_name",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                            children: [
                                                                contractData && contractData.name,
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "clearfix"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    id: "wallet",
                                                                    className: "profile_wallet",
                                                                    children: contractData && contractData.conAddr
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    type: "button",
                                                                    id: "btn_copy",
                                                                    title: "Copy Text",
                                                                    onClick: copyToClipboard,
                                                                    children: "Copy"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-md-12",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "collection_page_details",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "btn-group collection_btn_grp mt-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            type: "button",
                                                            class: "btn",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "Highest Price"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    className: "text-white",
                                                                    children: userCollectionDetails && userCollectionDetails.highSale && userCollectionDetails.highSale[0] && userCollectionDetails.highSale[0].price ? userCollectionDetails.highSale[0].price.toFixed(8) + " ETH" : "0 ETH"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            type: "button",
                                                            class: "btn",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "Floor Price"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    className: "text-white",
                                                                    children: userCollectionDetails && userCollectionDetails.floorPrice && userCollectionDetails.floorPrice[0] && userCollectionDetails.floorPrice[0].price ? userCollectionDetails.floorPrice[0].price.toFixed(8) + " ETH" : "0 ETH"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            type: "button",
                                                            class: "btn",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "Market Cap"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    className: "text-white",
                                                                    children: userCollectionDetails && userCollectionDetails.marketCap && userCollectionDetails.marketCap[0] && userCollectionDetails.marketCap[0].total ? userCollectionDetails.marketCap[0].total.toFixed(8) + " ETH" : "0 ETH"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            type: "button",
                                                            class: "btn",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "Items"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    className: "text-white",
                                                                    children: userCollectionDetails && userCollectionDetails.itemCnt.length ? userCollectionDetails.itemCnt.length : 0
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            type: "button",
                                                            class: "btn",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "Owners"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    className: "text-white",
                                                                    children: userCollectionDetails && userCollectionDetails.ownerCnt.length > 0 ? userCollectionDetails.ownerCnt.length : 0
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            type: "button",
                                                            class: "btn",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "Total Volume"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    className: "text-white",
                                                                    children: mymarket && mymarket != undefined && mymarket != null && mymarket.length > 0 && mymarket[0].volume != undefined ? parseFloat(mymarket[0].volume).toFixed(8) + " ETH" : "0 ETH"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "text-center w-75 mx-auto mt-3",
                                                children: [
                                                    contractData.desc,
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "de_tab tab_simple",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "tab-content de_tab_content",
                                                    id: "nav-tabContent",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "tab-pane fade show active",
                                                        id: "nav-onSale",
                                                        role: "tabpanel",
                                                        "aria-labelledby": "nav-onSale-tab",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "row",
                                                            children: Onsale && Onsale.length > 0 && Onsale.map((item, i)=>{
                                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_TokenItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
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
var __webpack_exports__ = __webpack_require__.X(0, [6103,4271,2213,30,4164,2997,7796,471,9137,6748,6821,5186,124,702,4997,686,3406,7117,1816,1122], () => (__webpack_exec__(1139)));
module.exports = __webpack_exports__;

})();