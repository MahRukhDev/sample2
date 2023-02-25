"use strict";
(() => {
var exports = {};
exports.id = 3576;
exports.ids = [3576,774,6602,3380,9894,7320,7458,8390,4912];
exports.modules = {

/***/ 8041:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LiveAuction)
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
/* harmony import */ var _separate_TokenItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7117);
/* harmony import */ var _separate_LikeRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4997);
/* harmony import */ var _separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6748);
/* harmony import */ var _separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9137);
/* harmony import */ var _separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5186);
/* harmony import */ var _separate_ReportNowRef__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1816);
/* harmony import */ var _separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(702);
/* harmony import */ var _separate_BurnRef__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(686);
/* harmony import */ var _separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(124);
/* harmony import */ var _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(471);
/* harmony import */ var _separate_PutOnBid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6821);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6103);
/* harmony import */ var _ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4021);
/* harmony import */ var _ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1439);
/* harmony import */ var _separate_Search__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6720);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _helper_walletconnect__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2213);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _actions_v1_token__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(3451);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(7416);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header_js__WEBPACK_IMPORTED_MODULE_2__, _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__, _separate_TokenItem__WEBPACK_IMPORTED_MODULE_6__, _separate_LikeRef__WEBPACK_IMPORTED_MODULE_7__, _separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_8__, _separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_9__, _separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_10__, _separate_ReportNowRef__WEBPACK_IMPORTED_MODULE_11__, _separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_12__, _separate_BurnRef__WEBPACK_IMPORTED_MODULE_13__, _separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_14__, _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_15__, _separate_PutOnBid__WEBPACK_IMPORTED_MODULE_16__, _separate_Search__WEBPACK_IMPORTED_MODULE_20__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_22__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_24__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_25__]);
([_components_Header_js__WEBPACK_IMPORTED_MODULE_2__, _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__, _separate_TokenItem__WEBPACK_IMPORTED_MODULE_6__, _separate_LikeRef__WEBPACK_IMPORTED_MODULE_7__, _separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_8__, _separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_9__, _separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_10__, _separate_ReportNowRef__WEBPACK_IMPORTED_MODULE_11__, _separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_12__, _separate_BurnRef__WEBPACK_IMPORTED_MODULE_13__, _separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_14__, _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_15__, _separate_PutOnBid__WEBPACK_IMPORTED_MODULE_16__, _separate_Search__WEBPACK_IMPORTED_MODULE_20__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_22__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_24__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_25__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


























// Scroll to Top
function ScrollToTopOnMount() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.scrollTo(0, 0);
    }, []);
    return null;
}
function LiveAuction() {
    const [CatBasedTokenList, setCatBasedTokenList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        loader: false,
        All: {
            page: 1,
            list: [],
            onmore: true
        }
    });
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
    var searchtxt = getParameterByName("search");
    var categorytxt = getParameterByName("category");
    const [namesearch, setnamesearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [categorysearch, setcategorysearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("all");
    const [typesearch, settypesearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [startprice, setstartprice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [endprice, setendprice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [keysearch, setkeysearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [categoryid, setcategoryid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [showloadmore, setshowloadmore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    var LikeForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var PlaceABidForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const PurchaseNowForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const PutOnSaleForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const PutOnBidForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const BurnForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var ShareForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var ReportForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const CancelOrderForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const [page, setpage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [loadmorestatus, setloadmorestatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    const [loader, setLoader] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [selectown, set_selectown] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadScript();
        getInit();
    }, []);
    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    async function getloadmore(data = {}) {
        setLoader(true);
        setpage(parseInt(page) + parseInt(1));
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_22__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_23___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        //var web3 = new Web3(window.ethereum);
        var currAddr = curAddr && curAddr[0].toLowerCase();
        var name = CatName;
        if (data.CatName) {
            name = data.CatName;
        }
        var payload = {
            limit: parseInt(20) * (parseInt(page) + parseInt(1)),
            // page: page ? parseInt(page) + parseInt(1) : 1,
            page: 1,
            currAddr: currAddr,
            CatName: name,
            aucttype: "yes",
            from: "Home"
        };
        var resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_24__/* .CollectiblesList_Home */ .W9)(payload);
        if (resp && resp.data && resp.data.from === "token-collectibles-list-home" && resp.data.list.length > 0) {
            if (resp.data.list.length < parseInt(20) * (parseInt(page) + parseInt(1))) {
                setloadmorestatus(false);
                setLoader(false);
            } else {
                setloadmorestatus(true);
                setLoader(false);
            }
            //setTokenList(TokenList.concat(resp.data.list));
            setTokenList(resp.data.list);
        } else {
            setloadmorestatus(false);
            setLoader(false);
        }
    }
    async function getInit() {
        if (searchtxt && searchtxt != "" && searchtxt != null && searchtxt != undefined) {
            setnamesearch(searchtxt);
            searchstart(searchtxt);
        } else if (categorytxt && categorytxt != "" && categorytxt != null && categorytxt != undefined) {
            setcategoryid(categorytxt);
            searchstart({
                cat: categorytxt
            });
        } else {
            TokenListCall();
        }
    }
    async function AfterWalletConnected() {
        try {
            LikeForwardRef && LikeForwardRef.current && LikeForwardRef.current.getLikesData();
        } catch (err) {}
    }
    async function searchstart(data = {}) {
        var currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_25__/* .getCurAddr */ .my)();
        var name = categorysearch;
        var payload = {
            limit: 1000,
            page: 1,
            currAddr: currAddr,
            CatName: data && data.cat && data.cat != null && data.cat != undefined && data.cat != "" ? data.cat : categoryid,
            namesearch: data && data.name && data.name != null && data.name != undefined && data.name != "" ? data.name : namesearch,
            typesearch: typesearch,
            startprice: startprice,
            endprice: endprice,
            keysearch: keysearch,
            aucttype: "yes",
            from: "Home"
        };
        var resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_24__/* .CollectiblesList_Home */ .W9)(payload);
        if (resp && resp.data && resp.data.from == "token-collectibles-list-home" && resp.data.list.length > 0) {
            setTokenList(resp.data.list);
        } else {
            setTokenList(resp.data.list);
        }
    }
    function loadScript() {
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
    async function TokenListCall(data = {}) {
        var currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_25__/* .getCurAddr */ .my)();
        var name = CatName;
        if (data.CatName) {
            name = data.CatName;
        }
        var payload = {
            limit: 20,
            page: CatBasedTokenList[name] && CatBasedTokenList[name].page ? CatBasedTokenList[name].page : 1,
            currAddr: currAddr,
            CatName: name,
            aucttype: "yes",
            from: "Home"
        };
        CatBasedTokenList.loader = true;
        setCatBasedTokenList(CatBasedTokenList);
        var resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_24__/* .CollectiblesList_Home */ .W9)(payload);
        CatBasedTokenList.loader = false;
        setCatBasedTokenList(CatBasedTokenList);
        if (resp && resp.data && resp.data.from == "token-collectibles-list-home" && resp.data.list.length > 0) {
            setTokenList(resp.data.list);
            if (resp.data.list.length < 20) {
                setloadmorestatus(false);
                setLoader(false);
            } else {
                setloadmorestatus(true);
                setLoader(false);
            }
        } else {
            setTokenList("");
            setloadmorestatus(false);
            setLoader(false);
        }
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
    // Countdown Timer
    const currentDate = new Date();
    const year = currentDate.getMonth() === 11 && currentDate.getDate() > 23 ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    const renderer = ({ days , hours , minutes , seconds  })=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "timer_panel",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "timer_time",
                            children: (0,react_countdown__WEBPACK_IMPORTED_MODULE_4__.zeroPad)(days)
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
                            children: (0,react_countdown__WEBPACK_IMPORTED_MODULE_4__.zeroPad)(hours)
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
                            children: (0,react_countdown__WEBPACK_IMPORTED_MODULE_4__.zeroPad)(minutes)
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
                            children: (0,react_countdown__WEBPACK_IMPORTED_MODULE_4__.zeroPad)(seconds)
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_21__.Helmet, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Nilwire - Auction"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ScrollToTopOnMount, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "no-bottom no-top",
                id: "content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_15__["default"], {
                        Set_UserAccountAddr: Set_UserAccountAddr,
                        Set_UserAccountBal: Set_UserAccountBal,
                        Set_WalletConnected: Set_WalletConnected,
                        Set_AddressUserDetails: Set_AddressUserDetails,
                        AddressUserDetails: AddressUserDetails,
                        Set_Accounts: Set_Accounts,
                        WalletConnected: WalletConnected,
                        AfterWalletConnected: AfterWalletConnected
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_LikeRef__WEBPACK_IMPORTED_MODULE_7__.LikeRef, {
                        ref: LikeForwardRef,
                        setLikedTokenList: setLikedTokenList,
                        MyItemAccountAddr: MyItemAccountAddr
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_8__.PurchaseNowRef, {
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_14__.CancelOrderRef, {
                        ref: CancelOrderForwardRef,
                        Set_HitItem: Set_HitItem,
                        item: HitItem,
                        UserAccountAddr: UserAccountAddr,
                        UserAccountBal: UserAccountBal,
                        TokenBalance: TokenBalance,
                        Accounts: Accounts
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PutOnBid__WEBPACK_IMPORTED_MODULE_16__.PutOnBid, {
                        ref: PutOnBidForwardRef,
                        Set_HitItem: Set_HitItem,
                        item: HitItem,
                        UserAccountAddr: UserAccountAddr,
                        UserAccountBal: UserAccountBal,
                        Accounts: Accounts,
                        // GetUserBal={GetUserBal}
                        Set_NoOfToken: Set_NoOfToken
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_BurnRef__WEBPACK_IMPORTED_MODULE_13__.BurnRef, {
                        ref: BurnForwardRef,
                        // GetUserBal={GetUserBal}
                        UserAccountAddr: UserAccountAddr,
                        UserAccountBal: UserAccountBal,
                        TokenBalance: TokenBalance,
                        Accounts: Accounts,
                        item: HitItem,
                        item: item,
                        Set_item: Set_item
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_12__.ShareNowRef, {
                        ref: ShareForwardRef
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_ReportNowRef__WEBPACK_IMPORTED_MODULE_11__.ReportNowRef, {
                        UserAccountAddr: UserAccountAddr,
                        ref: ReportForwardRef
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_10__.PutOnSaleRef, {
                        ref: PutOnSaleForwardRef,
                        Set_HitItem: Set_HitItem,
                        item: HitItem,
                        UserAccountAddr: UserAccountAddr,
                        UserAccountBal: UserAccountBal,
                        Accounts: Accounts,
                        // GetUserBal={GetUserBal}
                        Set_NoOfToken: Set_NoOfToken
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_9__.PlaceAndAcceptBidRef, {
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
                                                children: "Live auction"
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        "aria-label": "section",
                        className: "pt30 pb30",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "container",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    class: "row wow fadeIn",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_Search__WEBPACK_IMPORTED_MODULE_20__["default"], {
                                            setTokenList: setTokenList,
                                            TokenList: TokenList,
                                            CatName: CatName,
                                            setCatName: setCatName,
                                            aucttype: "yes",
                                            categoryid: categoryid,
                                            setcategoryid: setcategoryid,
                                            categorysearch: categorysearch,
                                            setcategorysearch: setcategorysearch,
                                            startprice: startprice,
                                            setstartprice: setstartprice,
                                            endprice: endprice,
                                            setendprice: setendprice,
                                            typesearch: typesearch,
                                            settypesearch: settypesearch,
                                            namesearch: namesearch,
                                            setnamesearch: setnamesearch,
                                            setshowloadmore: setshowloadmore,
                                            from: "liveact"
                                        }),
                                        TokenList && TokenList.length > 0 ? TokenList.map((item)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_TokenItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                id: item._id,
                                                item: item,
                                                Set_item: Set_item,
                                                LikedTokenList: LikedTokenList,
                                                hitLike: LikeForwardRef.current.hitLike,
                                                UserAccountAddr: UserAccountAddr,
                                                UserAccountBal: UserAccountBal,
                                                set_selectown: set_selectown,
                                                popupshow: popupshow,
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
                                                // Bid_Click={PlaceABidForwardRef.current.Bid_Click}
                                                Burn_Click: BurnForwardRef.current.Burn_Click,
                                                //Transfer_Click = {TransferForwardRef.current.Transfer_Click}
                                                CancelOrder_Click: CancelOrderForwardRef.current.CancelOrder_Click,
                                                WalletConnected: WalletConnected,
                                                //Tattoorequest_Click={TattooForwardRef.current.Tattoorequest_Click}
                                                SubmitReport_Click: ReportForwardRef.current.SubmitReport_Click,
                                                ShareSocial_Click: ShareForwardRef.current.ShareSocial_Click,
                                                aucttype: "yes",
                                                from: 0
                                            });
                                        }) : "No record found"
                                    ]
                                })
                            }),
                            loadmorestatus ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-center",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        class: "btn-main",
                                        type: "button",
                                        onClick: ()=>getloadmore(),
                                        children: [
                                            loader && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                class: "fa fa-spinner mr-3 spinner_icon",
                                                "aria-hidden": "true",
                                                id: "circle1"
                                            }),
                                            " ",
                                            "Load more"
                                        ]
                                    })
                                })
                            }) : ""
                        ]
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

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

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
var __webpack_exports__ = __webpack_require__.X(0, [6103,4271,2213,30,4164,2997,7796,471,9137,6748,6821,5186,124,702,4997,686,7117,1816,6720], () => (__webpack_exec__(8041)));
module.exports = __webpack_exports__;

})();