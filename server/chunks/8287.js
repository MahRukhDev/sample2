"use strict";
exports.id = 8287;
exports.ids = [8287];
exports.modules = {

/***/ 8287:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7189);
/* harmony import */ var react_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1662);
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1268);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4449);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6679);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _separate_LikeRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4997);
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3992);
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _separate_TokenItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7117);
/* harmony import */ var _separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6748);
/* harmony import */ var _separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9137);
/* harmony import */ var _separate_PutOnBid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6821);
/* harmony import */ var _separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5186);
/* harmony import */ var _separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(124);
/* harmony import */ var _separate_BurnRef__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(686);
/* harmony import */ var _separate_ReportNowRef__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1816);
/* harmony import */ var _separate_TransferRef__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3406);
/* harmony import */ var _separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(702);
/* harmony import */ var _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(471);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(6103);
/* harmony import */ var _ABI_BEP721_json__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(4021);
/* harmony import */ var _ABI_BEP1155_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(1439);
/* harmony import */ var _ABI_ESC_json__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(30);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(3590);
/* harmony import */ var _helper_walletconnect__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(2213);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _actions_v1_token__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(3451);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(7416);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header_js__WEBPACK_IMPORTED_MODULE_3__, _components_Footer_js__WEBPACK_IMPORTED_MODULE_4__, _separate_LikeRef__WEBPACK_IMPORTED_MODULE_10__, _separate_TokenItem__WEBPACK_IMPORTED_MODULE_12__, _separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_13__, _separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_14__, _separate_PutOnBid__WEBPACK_IMPORTED_MODULE_15__, _separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_16__, _separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_17__, _separate_BurnRef__WEBPACK_IMPORTED_MODULE_18__, _separate_ReportNowRef__WEBPACK_IMPORTED_MODULE_19__, _separate_TransferRef__WEBPACK_IMPORTED_MODULE_20__, _separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_21__, _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_22__, react_toastify__WEBPACK_IMPORTED_MODULE_27__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_28__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_30__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_31__]);
([_components_Header_js__WEBPACK_IMPORTED_MODULE_3__, _components_Footer_js__WEBPACK_IMPORTED_MODULE_4__, _separate_LikeRef__WEBPACK_IMPORTED_MODULE_10__, _separate_TokenItem__WEBPACK_IMPORTED_MODULE_12__, _separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_13__, _separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_14__, _separate_PutOnBid__WEBPACK_IMPORTED_MODULE_15__, _separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_16__, _separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_17__, _separate_BurnRef__WEBPACK_IMPORTED_MODULE_18__, _separate_ReportNowRef__WEBPACK_IMPORTED_MODULE_19__, _separate_TransferRef__WEBPACK_IMPORTED_MODULE_20__, _separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_21__, _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_22__, react_toastify__WEBPACK_IMPORTED_MODULE_27__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_28__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_30__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_31__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
































// Scroll to Top
function ScrollToTopOnMount() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.scrollTo(0, 0);
    }, []);
    return null;
}
react_toastify__WEBPACK_IMPORTED_MODULE_27__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].toasterOption */ .Z.toasterOption;
function Home() {
    const colourStyles = {
        option: (styles, { data , isDisabled , isFocused , isSelected  })=>{
            return {
                ...styles,
                backgroundColor: isFocused ? "null" : null
            };
        }
    };
    const daysoptions = [
        {
            value: "1",
            label: "1 day"
        },
        {
            value: "7",
            label: "7 days"
        },
        {
            value: "30",
            label: "30 days"
        }
    ];
    const [CatBasedTokenList, setCatBasedTokenList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        loader: false,
        All: {
            page: 1,
            list: [],
            onmore: true
        }
    });
    const [page, setpage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
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
    const [collections, set_collections] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [showData, set_showData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    const [bannerlist, setbannerlist] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [CategoryOption, setCategoryOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [reportCategoryname, setReportCategoryname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Select");
    const [description, setdescription] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [sellers, setSellers] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [loadmorestatus, setloadmorestatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    const [loader, setLoader] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [selectown, set_selectown] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
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
        loadScript();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getInit();
        get_hotcollections();
        get_topcollections();
        get_topsellers();
    }, []);
    async function get_topsellers() {
        var gettopsellers = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_30__/* .getTopsellers */ .vX)();
        setSellers(gettopsellers.data.data);
    }
    function loadScript() {
        dropdown("#report-reason");
        dropdown("#buy_category");
        dropdown("#items_type");
        function dropdown(e) {
            var obj = jquery__WEBPACK_IMPORTED_MODULE_6___default()(e + ".dropdown");
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
                var txt = jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).text();
                opt.removeClass("active");
                jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).addClass("active");
                btn.text(txt);
            });
        }
    }
    async function get_topcollections() {
        var bannercollection = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_30__/* .getbannercollection */ .ip)();
        if (bannercollection && bannercollection.result && bannercollection.result.data) {
            setbannerlist(bannercollection.result.data);
        }
    }
    async function get_hotcollections() {
        var startdate = moment__WEBPACK_IMPORTED_MODULE_9___default()().subtract(1, "month");
        var enddate = moment__WEBPACK_IMPORTED_MODULE_9___default()();
        var datas = {
            startdate: startdate,
            enddate: enddate
        };
        var hotCollections = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_30__/* .getHotCollections */ .Wr)(datas);
        set_collections(hotCollections.data.data);
    }
    async function getInit() {
        TokenListCall();
        ReportdetList();
    }
    async function AfterWalletConnected() {
        try {
            LikeForwardRef && LikeForwardRef.current && LikeForwardRef.current.getLikesData();
        } catch (err) {}
        try {
            var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_28__/* .getmylog */ .I)();
            const web3 = new (web3__WEBPACK_IMPORTED_MODULE_7___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
            var curAddr = await web3.eth.getAccounts();
            //var web3 = new Web3(window.ethereum);
            var currAddr = curAddr && curAddr[0].toLowerCase();
            // var web3 = new Web3(window.ethereum);
            var ESCContract = new web3.eth.Contract(_ABI_ESC_json__WEBPACK_IMPORTED_MODULE_26__, _lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].esctokenAddr */ .Z.esctokenAddr);
            var tokenBal = await ESCContract.methods.balanceOf(currAddr).call();
            var tokenBalance = tokenBal / _lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].decimalvalues */ .Z.decimalvalues;
            Set_TokenBalance(tokenBalance.toFixed(_lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].toFixed */ .Z.toFixed));
        } catch (err) {}
    }
    async function showAllwithPro(data) {
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_28__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_7___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        //var web3 = new Web3(window.ethereum);
        var currAddr = curAddr && curAddr[0].toLowerCase();
        var payload = {
            curAddr: currAddr,
            tokenCounts: data.tokenCounts
        };
        TokenCounts_Get_Detail_Call(payload);
    }
    const TokenCounts_Get_Detail_Call = async (payload)=>{
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_28__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_7___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        //var web3 = new Web3(window.ethereum);
        var currAddr = curAddr && curAddr[0].toLowerCase();
        var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_30__/* .TokenCounts_Get_Detail_Action */ .u7)(payload);
        if (Resp && Resp && Resp.data && Resp.data.Detail && Resp.data.Detail.Resp) {
            var TokenResp = Resp.data.Detail.Resp;
            if (TokenResp && TokenResp.Token && TokenResp.Token[0] && TokenResp.Token[0].tokenowners_current) {
                for(let i = 0; i < TokenResp.Token[0].tokenowners_current.length; i++){
                    const element = TokenResp.Token[0].tokenowners_current[i];
                    if (element.balance > 0 && element.price > 0 && element.tokenOwner != currAddr) {
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
            if (TokenResp.Token[0].tokenowners_all && currAddr) {
                var tokenowners_all = TokenResp.Token[0].tokenowners_all;
                IndexVal = tokenowners_all.findIndex((val)=>val.tokenOwner.toString() == currAddr.toString());
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
            var resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_30__/* .getreportcategory */ .VX)();
            if (resp && resp.data) {
                console.log(resp, "rtrtrt");
                var CategoryOption = [];
                resp.data.data.map((item)=>{
                    CategoryOption.push({
                        value: item._id,
                        label: item.name
                    });
                });
                console.log(CategoryOption, "CategoryOption------");
                setCategoryOption(CategoryOption);
            }
        } catch (err) {}
    }
    function changeCategory(name) {
        setReportCategoryname(name);
    }
    async function getloadmore(data = {}) {
        setLoader(true);
        setpage(parseInt(page) + parseInt(1));
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_28__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_7___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        //var web3 = new Web3(window.ethereum);
        var currAddr = curAddr && curAddr[0].toLowerCase();
        var name = CatName;
        if (data.CatName) {
            name = data.CatName;
        }
        var payload = {
            limit: _lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].limit */ .Z.limit,
            page: page ? parseInt(page) + parseInt(1) : 1,
            currAddr: currAddr,
            CatName: name,
            from: "Home"
        };
        var resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_30__/* .CollectiblesList_Home */ .W9)(payload);
        if (resp && resp.data && resp.data.from === "token-collectibles-list-home" && resp.data.list.length > 0) {
            if (resp.data.list.length < _lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].limit */ .Z.limit) {
                setloadmorestatus(false);
                setLoader(false);
            } else {
                setloadmorestatus(true);
                setLoader(false);
            }
            setTokenList(TokenList.concat(resp.data.list));
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
            setloadmorestatus(false);
            setLoader(false);
            CatBasedTokenList[name].onmore = false;
            setCatBasedTokenList([]);
            setCatBasedTokenList(CatBasedTokenList);
        }
    }
    async function TokenListCall(data = {}) {
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_28__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_7___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        //var web3 = new Web3(window.ethereum);
        var currAddr = curAddr && curAddr[0] ? curAddr[0].toLowerCase() : "";
        var name = CatName;
        if (data.CatName) {
            name = data.CatName;
        }
        var payload = {
            limit: _lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].limit */ .Z.limit,
            page: page ? page : 1,
            currAddr: currAddr,
            CatName: name,
            from: "Home"
        };
        CatBasedTokenList.loader = true;
        var resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_30__/* .CollectiblesList_Home */ .W9)(payload);
        CatBasedTokenList.loader = false;
        setCatBasedTokenList(CatBasedTokenList);
        if (resp && resp.data && resp.data.from == "token-collectibles-list-home" && resp.data.list.length > 0) {
            if (resp.data.list.length < _lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].limit */ .Z.limit) {
                setloadmorestatus(false);
            } else {
                setloadmorestatus(true);
            }
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
            setloadmorestatus(false);
            CatBasedTokenList[name].onmore = false;
            setCatBasedTokenList([]);
            setCatBasedTokenList(CatBasedTokenList);
        }
    }
    const filterchange = async (e)=>{
        var diff = e.value;
        var startdate = moment__WEBPACK_IMPORTED_MODULE_9___default()().subtract(parseInt(diff), "days");
        var enddate = moment__WEBPACK_IMPORTED_MODULE_9___default()();
        var datas = {
            startdate: startdate,
            enddate: enddate
        };
        var hotCollections = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_30__/* .getHotCollections */ .Wr)(datas);
        if (hotCollections && hotCollections.data && hotCollections.data.data && hotCollections.data.data.length > 0) {
            set_showData(false);
            set_collections(hotCollections.data.data);
            set_showData(true);
        } else {
            set_collections("");
        }
    };
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
        console.log(item, "iiiii");
        var errors = await ReportValidation();
        var errorsSize = Object.keys(errors).length;
        if (errorsSize != 0) {
            react_toastify__WEBPACK_IMPORTED_MODULE_27__.toast.error("Form validation error, please fill all the required fields", toasterOption);
            return false;
        }
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_28__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_7___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        //var web3 = new Web3(window.ethereum);
        var currAddr = curAddr && curAddr[0].toLowerCase();
        var reqData = {
            reportuser: currAddr,
            description: description,
            reportcategory: reportCategoryname,
            type: "collectibles",
            tokenCounts: item.tokenCounts,
            profileuser: item.tokenCreator,
            tokenName: item.tokenName
        };
        var response = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_30__/* .ReportRequest */ .zl)(reqData);
        if (response && response.status == "true") {
            react_toastify__WEBPACK_IMPORTED_MODULE_27__.toast.success("Successfully submit your report", toasterOption);
            setdescription("");
            setTimeout(function() {
                window.$("#report").modal("hide");
            }, 100);
            setTimeout(function() {
                window.location.reload(false);
            }, 400);
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_27__.toast.error("Oops something went wrong.!", toasterOption);
        }
    }
    async function GetUserBal() {
    // await WalletForwardRef.current.GetUserBal();
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
    var settingsBig = {
        loop: true,
        margin: 25,
        nav: false,
        dots: true,
        responsive: {
            1000: {
                items: 3
            },
            600: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    };
    var settings = {
        center: false,
        items: 4,
        loop: false,
        margin: 25,
        nav: true,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        dots: false,
        responsive: {
            1000: {
                items: 4
            },
            600: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "wrapper",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ScrollToTopOnMount, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "homeMainBanner",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "homeBannerContent",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                children: [
                                    "NILWIRE ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "NFT MARKETPLACE"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                children: "Ballers Series Collection Coming Soon"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "/create",
                                className: "btnLarge",
                                children: "Create Your Digital Assets Now"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "no-bottom no-top",
                id: "content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_22__["default"], {
                        Set_UserAccountAddr: Set_UserAccountAddr,
                        Set_UserAccountBal: Set_UserAccountBal,
                        Set_WalletConnected: Set_WalletConnected,
                        Set_AddressUserDetails: Set_AddressUserDetails,
                        AddressUserDetails: AddressUserDetails,
                        Set_Accounts: Set_Accounts,
                        WalletConnected: WalletConnected,
                        AfterWalletConnected: AfterWalletConnected
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_17__.CancelOrderRef, {
                        ref: CancelOrderForwardRef,
                        Set_HitItem: Set_HitItem,
                        item: HitItem,
                        UserAccountAddr: UserAccountAddr,
                        UserAccountBal: UserAccountBal,
                        Accounts: Accounts
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_BurnRef__WEBPACK_IMPORTED_MODULE_18__.BurnRef, {
                        ref: BurnForwardRef,
                        Set_HitItem: Set_HitItem,
                        item: item,
                        Set_item: Set_item,
                        UserAccountAddr: UserAccountAddr,
                        UserAccountBal: UserAccountBal,
                        TokenBalance: TokenBalance,
                        Accounts: Accounts
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_LikeRef__WEBPACK_IMPORTED_MODULE_10__.LikeRef, {
                        ref: LikeForwardRef,
                        setLikedTokenList: setLikedTokenList,
                        MyItemAccountAddr: MyItemAccountAddr
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_21__.ShareNowRef, {
                        ref: ShareForwardRef
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_ReportNowRef__WEBPACK_IMPORTED_MODULE_19__.ReportNowRef, {
                        UserAccountAddr: UserAccountAddr,
                        ref: ReportForwardRef
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_13__.PurchaseNowRef, {
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_16__.PutOnSaleRef, {
                        ref: PutOnSaleForwardRef,
                        Set_HitItem: Set_HitItem,
                        item: HitItem,
                        UserAccountAddr: UserAccountAddr,
                        UserAccountBal: UserAccountBal,
                        Accounts: Accounts,
                        // GetUserBal={GetUserBal}
                        Set_NoOfToken: Set_NoOfToken
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PutOnBid__WEBPACK_IMPORTED_MODULE_15__.PutOnBid, {
                        ref: PutOnBidForwardRef,
                        Set_HitItem: Set_HitItem,
                        item: HitItem,
                        UserAccountAddr: UserAccountAddr,
                        UserAccountBal: UserAccountBal,
                        Accounts: Accounts,
                        // GetUserBal={GetUserBal}
                        Set_NoOfToken: Set_NoOfToken
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_TransferRef__WEBPACK_IMPORTED_MODULE_20__.TransferRef, {
                        item: HitItem,
                        ref: TransferForwardRef
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_14__.PlaceAndAcceptBidRef, {
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                        className: "homeTextSide",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                id: "section-hero",
                                className: "no-bottom",
                                "aria-label": "section",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "container",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "style-2",
                                            children: "Spotlight"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "d-carousel",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                className: "owl-theme homeTopCarousel wow fadeIn",
                                                ...settingsBig,
                                                children: bannerlist && bannerlist.length > 0 && bannerlist.map((item)=>{
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "nft_pic",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "nft_pic_wrap",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: `${_lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].Front_URL */ .Z.Front_URL}/collections/${item.conAddr}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: `${_lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].Back_URL */ .Z.Back_URL}collections/${item.imageUser}`,
                                                                        alt: "",
                                                                        className: "lazy img-fluid"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: `${_lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].Front_URL */ .Z.Front_URL}/collections/${item.conAddr}`,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: "nft_pic_info",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "nft_pic_title",
                                                                            children: item && item.symbol && item.symbol
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "nft_pic_by",
                                                                            children: (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_31__/* .halfAddrShow */ .UD)(item && item.owneraddr)
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    });
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                className: "homeVisionMisson",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mvHomeBg",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "style-2",
                                                children: "OUR VISION & MISSION"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Our mission is to help athletes monetize their name, image, and likeness utilizing blockchain technology and bringing value to their fans."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "NILWIRE is building a community where athletes, fans, and influencers can connect on a peer to peer marketplace. Our vision is to help athletes beyond sports and provide them a network with fans on another level."
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                id: "section-collections",
                                className: "pt30 pb30",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "container",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "row wow fadeIn",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-lg-12",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "style-2",
                                                        children: "New items"
                                                    })
                                                }),
                                                TokenList && TokenList.length > 0 && TokenList.map((item)=>{
                                                    var currDate = new Date();
                                                    var startdate = new Date(item.clocktime);
                                                    var enddate = new Date(item.endclocktime);
                                                    var auction = "false";
                                                    var finish = "";
                                                    var enddate1 = "";
                                                    var showlist = "true";
                                                    var display_item = 0;
                                                    if (item.type == 721 && item.PutOnSaleType == "TimedAuction") {
                                                        auction = "true";
                                                        var a = moment__WEBPACK_IMPORTED_MODULE_9___default()(item.clocktime);
                                                        var b = moment__WEBPACK_IMPORTED_MODULE_9___default()(item.endclocktime);
                                                        var c = moment__WEBPACK_IMPORTED_MODULE_9___default()();
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
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_TokenItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                        id: item._id,
                                                        item: item,
                                                        Set_item: Set_item,
                                                        set_selectown: set_selectown,
                                                        LikedTokenList: LikedTokenList,
                                                        hitLike: LikeForwardRef.current.hitLike,
                                                        UserAccountAddr: UserAccountAddr,
                                                        UserAccountBal: UserAccountBal,
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
                                            ]
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
                                        }) : "",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "spacer-double"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-lg-12",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "heading_flex",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                className: "style-2",
                                                                children: "Top sellers"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "dropdown day_list"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-md-12 wow fadeIn",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "author_list",
                                                        children: sellers && sellers.map((data, i)=>{
                                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "author_list_pp",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                            href: _lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].Front_URL */ .Z.Front_URL + "/user/" + data.userInfo.curraddress,
                                                                            children: [
                                                                                data && data.userInfo && data.userInfo.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                    className: "lazy",
                                                                                    src: `${_lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].Back_URL */ .Z.Back_URL}profile/${data.userInfo.image}`,
                                                                                    alt: ""
                                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                    className: "lazy",
                                                                                    src: `${_lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].Back_URL */ .Z.Back_URL}images/previewThumb.png`,
                                                                                    alt: ""
                                                                                }),
                                                                                data && data.userInfo && data.userInfo.emailverified && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fa fa-check"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "author_list_info",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                href: _lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].Front_URL */ .Z.Front_URL + "/user/" + data.userInfo.curraddress,
                                                                                children: data.userInfo.name ? data.userInfo.name : data.userInfo.curraddress.substring(0, 10) + "..."
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                children: [
                                                                                    "Sale : ",
                                                                                    data.count,
                                                                                    " "
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            });
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "spacer-double"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "homeFanBanner",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-md-5",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            className: "lazy",
                                                            src: __webpack_require__(9662),
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-md-7",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "homeFanContent",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    className: "style-2",
                                                                    children: "A Fan First NFT Marketplace"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "NILWIRE is a fan first NFT marketplace created by brothers/former athletes to connect fans and athletes together. We offer collections created solely by athletes and premier artists to foster a community with the fans."
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: "/exclusive",
                                                                    className: "btnLarge",
                                                                    children: "Buy Your Digital Assets Now"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "spacer-double"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-lg-12",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "heading_flex",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            className: "style-2",
                                                            children: "Hot collections"
                                                        })
                                                    })
                                                }),
                                                showData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    className: "owl-theme wow fadeIn",
                                                    ...settings,
                                                    children: showData && collections.map((collection, i)=>{
                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "nft_coll bgShapeBlack style-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "nft_wrap",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: _lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].Front_URL */ .Z.Front_URL + "/collections/" + collection.id,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: _lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].Back_URL */ .Z.Back_URL + "collections/" + collection.imageUser,
                                                                            className: "lazy img-fluid",
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "nft_coll_pp",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: _lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].Front_URL */ .Z.Front_URL + "/collections/" + collection.id,
                                                                            children: collection && collection.userInfo && collection.userInfo.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                className: "lazy",
                                                                                src: `${_lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].Back_URL */ .Z.Back_URL}profile/${collection.userInfo.image}`,
                                                                                alt: ""
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                className: "lazy",
                                                                                src: `${_lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].Back_URL */ .Z.Back_URL}images/previewThumb.png`,
                                                                                alt: ""
                                                                            })
                                                                        }),
                                                                        collection && collection.userInfo && collection.userInfo.emailverified && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fa fa-check"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "nft_coll_info",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            href: _lib_config__WEBPACK_IMPORTED_MODULE_23__/* ["default"].Front_URL */ .Z.Front_URL + "/collections/" + collection.id,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                children: collection.name
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            children: [
                                                                                "BEP-",
                                                                                collection.type
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        });
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "spacer-double"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "collageContent",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-md-7",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "homeFanContent",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    className: "style-2",
                                                                    children: "Our Story"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "NILWIRE was created by brothers/former athletes who saw an opportunity in the NIL space to help athletes enhance their brand. We are passionate in building a community using NFT marketplace technology and their smart contract capabilities."
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "NILWIRE strives to be a marketplace hosting premier athletes from all over the country to bring value and experiences to fans like never before."
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-md-5",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-center d-flex align-items-center justify-content-center h-100",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                className: "lazy img-fluid",
                                                                src: __webpack_require__(3336),
                                                                alt: ""
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
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
                                                children: "Report item"
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
                                                            // href="javascript:void(0)"
                                                            class: "btn-selector w-100 d-block selectPlaceHolder",
                                                            children: reportCategoryname
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                            className: "w-100",
                                                            value: reportCategoryname,
                                                            children: CategoryOption && CategoryOption.length > 0 && CategoryOption.map((option, i)=>{
                                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    value: option.label,
                                                                    onClick: ()=>changeCategory(option.label),
                                                                    children: [
                                                                        console.log(option, "option--option"),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: option.label
                                                                        })
                                                                    ]
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
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;