"use strict";
exports.id = 5048;
exports.ids = [5048];
exports.modules = {

/***/ 5048:
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
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3992);
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4449);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(471);
/* harmony import */ var _separate_LikeRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4997);
/* harmony import */ var _separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9137);
/* harmony import */ var _separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5186);
/* harmony import */ var _separate_PutOnBid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6821);
/* harmony import */ var _separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6748);
/* harmony import */ var _separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(124);
/* harmony import */ var _separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(702);
/* harmony import */ var _separate_BurnRef__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(686);
/* harmony import */ var _separate_TransferRef__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3406);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9648);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6103);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6679);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(3590);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _helper_walletconnect__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2213);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(9041);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _actions_toastAlert__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(5184);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(7416);
/* harmony import */ var _actions_v1_token__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(3451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header_js__WEBPACK_IMPORTED_MODULE_3__, _components_Footer_js__WEBPACK_IMPORTED_MODULE_4__, _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_8__, _separate_LikeRef__WEBPACK_IMPORTED_MODULE_9__, _separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_10__, _separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_11__, _separate_PutOnBid__WEBPACK_IMPORTED_MODULE_12__, _separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_13__, _separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_14__, _separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_15__, _separate_BurnRef__WEBPACK_IMPORTED_MODULE_16__, _separate_TransferRef__WEBPACK_IMPORTED_MODULE_17__, axios__WEBPACK_IMPORTED_MODULE_18__, react_toastify__WEBPACK_IMPORTED_MODULE_22__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_25__, _actions_toastAlert__WEBPACK_IMPORTED_MODULE_28__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_29__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_30__]);
([_components_Header_js__WEBPACK_IMPORTED_MODULE_3__, _components_Footer_js__WEBPACK_IMPORTED_MODULE_4__, _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_8__, _separate_LikeRef__WEBPACK_IMPORTED_MODULE_9__, _separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_10__, _separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_11__, _separate_PutOnBid__WEBPACK_IMPORTED_MODULE_12__, _separate_PurchaseNowRef__WEBPACK_IMPORTED_MODULE_13__, _separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_14__, _separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_15__, _separate_BurnRef__WEBPACK_IMPORTED_MODULE_16__, _separate_TransferRef__WEBPACK_IMPORTED_MODULE_17__, axios__WEBPACK_IMPORTED_MODULE_18__, react_toastify__WEBPACK_IMPORTED_MODULE_22__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_25__, _actions_toastAlert__WEBPACK_IMPORTED_MODULE_28__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_29__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_30__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);































react_toastify__WEBPACK_IMPORTED_MODULE_22__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].toasterOption */ .Z.toasterOption;
// Scroll to Top
function ScrollToTopOnMount() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.scrollTo(0, 0);
    }, []);
    return null;
}
function Collections() {
    var { paramUsername , paramAddress  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)();
    if (typeof paramUsername == "undefined") {
        paramUsername = "";
    }
    if (typeof paramAddress == "undefined") {
        paramAddress = "";
    }
    const [ParamAccountAddr, Set_ParamAccountAddr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(paramAddress);
    const [CurTabName, Set_CurTabName] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("onsale");
    const [OnSale_Count, Set_OnSale_Count] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [OnSale_List, Set_OnSale_List] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [Owned_Count, Set_Owned_Count] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [Owned_List, Set_Owned_List] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [MyItemAccountAddr, Set_MyItemAccountAddr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [UserAccountAddr, Set_UserAccountAddr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [UserAccountBal, Set_UserAccountBal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [WalletConnected, Set_WalletConnected] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("false");
    const [AddressUserDetails, Set_AddressUserDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [Accounts, Set_Accounts] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [MyItemAccountAddr_Details, Set_MyItemAccountAddr_Details] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [UserNotFound, Set_UserNotFound] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [MyItemcoverimage, Set_MyItemcoverimage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [ParamAccountCustomUrl, Set_ParamAccountCustomUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(paramUsername);
    var imageUrl = _lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Back_URL */ .Z.Back_URL + "cover/5.jpg";
    const [TokenFilePreUrl, setTokenFilePreUrl] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(imageUrl);
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
    const [LikedTokenList, setLikedTokenList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [CategoryOption, setCategoryOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [reportCategoryname, setReportCategoryname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Select");
    const [description, setdescription] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [is_follow, Set_is_follow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("no");
    const [followingCount, Set_followingCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [followersCount, Set_followersCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [followingStatus, Set_followingStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [FollowingUserList, Set_FollowingUserList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [FollowerUserList, Set_FollowerUserList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [followersStatus, Set_followersStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [userdescription, setuserdescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [Loaderstatus, Set_Loaderstatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [TokenFile, setTokenFile] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [address, setaddress] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [selectown, set_selectown] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [sitem, set_sitem] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        loadScript();
        let mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_25__/* .getmylog */ .I)();
        let web3 = new (web3__WEBPACK_IMPORTED_MODULE_20___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        let curAddr = await web3.eth.getAccounts();
        setaddress(curAddr[0].toLowerCase());
    }, []);
    var LikeForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var PlaceABidForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const PurchaseNowForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const PutOnSaleForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const CancelOrderForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const BurnForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var ShareForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var TransferForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const PutOnBidForwardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    function loadScript() {
        dropdown("#report-reason");
        dropdown("#buy_category");
        dropdown("#items_type");
        function dropdown(e) {
            var obj = jquery__WEBPACK_IMPORTED_MODULE_23___default()(e + ".dropdown");
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
                var txt = jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).text();
                opt.removeClass("active");
                jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).addClass("active");
                btn.text(txt);
            });
        }
    }
    async function FollowChange_Call() {
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_25__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_20___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        //var web3 = new Web3(window.ethereum);
        var currAddr = curAddr && curAddr[0].toLowerCase();
        var Payload = {};
        Payload.currAddr = currAddr;
        Payload.ParamAccountAddr = ParamAccountAddr;
        var msg = "I would like to follow user: " + ParamAccountAddr;
        if (is_follow == "yes") {
            msg = "I would like to stop following user: " + ParamAccountAddr;
        }
        await web3.eth.personal.sign(msg, currAddr);
        var Resp = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .FollowChange_Action */ .lA)(Payload);
        var foll = Resp && Resp.data && Resp.data.ChangeType ? Resp.data.ChangeType : "no";
        Set_is_follow(foll);
        if (foll == "yes") {
            react_toastify__WEBPACK_IMPORTED_MODULE_22__.toast.success("Follow successfully", toasterOption);
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_22__.toast.success("Un-Follow successfully", toasterOption);
        }
        Check_follow();
        if (CurTabName == "followers") {
            Get_Followers_List();
        } else if (CurTabName == "following") {
            Get_Following_List();
        }
    //User_FollowList_Get_Call();
    }
    async function Get_Followers_List() {
        Set_CurTabName("followers");
        var currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .getCurAddr */ .my)();
        var resp = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .User_Followers_List_Action */ .WN)({
            addr: MyItemAccountAddr,
            loginUser: currAddr
        });
        if (resp && resp.data && resp.data.list) {
            var MyFollowingList = resp.data.list;
            Set_FollowerUserList(MyFollowingList);
        } else {
            Set_FollowerUserList([]);
        }
    }
    async function FollowerTab(address, pos, isFollow) {
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_25__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_20___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        var currAddr = curAddr && curAddr[0].toLowerCase();
        var currentUser = "no";
        if (ParamAccountAddr != "" && currAddr != "" && currAddr == ParamAccountAddr || ParamAccountAddr == "" || !ParamAccountAddr) {
            currentUser = "yes";
        }
        var msg = "I would like to follow user: " + address;
        if (isFollow == "yes") {
            msg = "I would like to stop following user: " + address;
        }
        var Payload = {};
        Payload.currAddr = currAddr;
        Payload.ParamAccountAddr = address;
        Payload.currentUser = currentUser;
        await web3.eth.personal.sign(msg, currAddr);
        var Resp = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .FollowChange_Action */ .lA)(Payload);
        var foll = Resp && Resp.data && Resp.data.ChangeType ? Resp.data.ChangeType : "no";
        FollowerUserList[pos].isFollow = foll;
        Set_followersStatus(false);
        Set_FollowerUserList(FollowerUserList);
        Set_followersStatus(true);
        if (currentUser == "yes") {
            var followingcnt = Resp && Resp.data && Resp.data.following ? Resp.data.following : "0";
            var followerscnt = Resp && Resp.data && Resp.data.followers ? Resp.data.followers : "0";
            Set_followingCount(followingcnt);
            Set_followersCount(followerscnt);
        }
        if (foll == "yes") {
            react_toastify__WEBPACK_IMPORTED_MODULE_22__.toast.success("Follow successfully", toasterOption);
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_22__.toast.success("Un-Follow successfully", toasterOption);
        }
        Check_follow();
    }
    async function Get_Following_List() {
        Set_CurTabName("following");
        var currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .getCurAddr */ .my)();
        var resp = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .User_Following_List_Action */ .nN)({
            addr: MyItemAccountAddr,
            loginUser: currAddr
        });
        if (resp && resp.data && resp.data.list) {
            var MyFollowingList = resp.data.list;
            Set_FollowingUserList(MyFollowingList);
        } else {
            Set_FollowingUserList([]);
        }
    }
    async function CorrectDataGet(Resp, Target) {
        var RetData = {
            count: 0,
            list: []
        };
        if (Resp && Resp.data && Resp.data.Target && Resp.data.list && Resp.data.list[0]) {
            if (Resp.data.Target == "Count" && Resp.data.list[0].count) {
                RetData.count = Resp.data.list[0].count;
            } else if (Resp.data.Target == "List" && Resp.data.list[0]) {
                RetData.list = Resp.data.list;
            }
        }
        if (Resp && Resp.data && Resp.data.Target && Resp.data.changeStatusList) {
            changeReceiptStatus_Call(Resp.data.changeStatusList);
        }
        return RetData;
    }
    async function showAllwithPro(data) {
        var curAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .getCurAddr */ .my)();
        var payload = {
            curAddr: curAddr,
            tokenCounts: data.tokenCounts
        };
        console.log(payload, "{{{}}}");
        TokenCounts_Get_Detail_Call(payload);
    }
    const TokenCounts_Get_Detail_Call = async (payload)=>{
        var curAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .getCurAddr */ .my)();
        var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_30__/* .TokenCounts_Get_Detail_Action */ .u7)(payload);
        console.log(Resp, "Resp------");
        if (Resp && Resp && Resp.data && Resp.data.Detail && Resp.data.Detail.Resp) {
            var TokenResp = Resp.data.Detail.Resp;
            if (TokenResp && TokenResp.Token && TokenResp.Token[0] && TokenResp.Token[0].tokenowners_current) {
                for(let i = 0; i < TokenResp.Token[0].tokenowners_current.length; i++){
                    const element = TokenResp.Token[0].tokenowners_current[i];
                    if (element.balance > 0 && element.tokenPrice > 0 && element.tokenOwner != curAddr) {
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
            var tokenowners_all = TokenResp.Token[0] && TokenResp.Token[0].tokenowners_all ? tokenowners_all : "";
            if (tokenowners_all && tokenowners_all.length > 0) {
                for(let i = 0; i < tokenowners_all.length; i++){
                    if (tokenowners_all[i].balance > 0) {
                        ageSum += tokenowners_all[i].balance;
                    }
                }
            }
            var IndexVal = -1;
            if (TokenResp.Token[0] && TokenResp.Token[0].tokenowners_all && curAddr) {
                var tokenowners_all = TokenResp.Token[0].tokenowners_all;
                IndexVal = tokenowners_all.findIndex((val)=>val.tokenOwner.toString() == curAddr.toString());
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
    async function changeReceiptStatus_Call(list) {
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_25__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_20___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        var currAddr = curAddr && curAddr[0].toLowerCase();
        list.map(async (item)=>{
            if (item && typeof item.checkAdd != "undefined" && item.checkAdd.hashValue) {
                try {
                    var data = await web3.eth.getTransactionReceipt(item.checkAdd.hashValue);
                    var hashValue = item.checkAdd.hashValue;
                    if (data == null) {} else {
                        if (data.status == "0x0") {} else {
                            var payload = {
                                status: "true",
                                hashValue: hashValue
                            };
                            await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .changeReceiptStatus_Action */ .pJ)(payload);
                        }
                    }
                } catch (err) {}
            }
        });
    }
    async function Tab_Click(TabName) {
        Set_CurTabName(TabName);
        await Tab_Data_Call("List", TabName);
        await Tab_Data_Call("Count", TabName);
    }
    async function Tab_Data_Call(Target, TabName, init = false) {
        if (MyItemAccountAddr) {
            var ReqData = {
                Addr: MyItemAccountAddr,
                MyItemAccountAddr: MyItemAccountAddr,
                ParamAccountAddr: ParamAccountAddr,
                UserAccountAddr: UserAccountAddr,
                Target: Target,
                TabName: TabName,
                init: init,
                from: "My-Items"
            };
            var Resp = {};
            Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_30__/* .CollectiblesList_MyItems */ .o8)(ReqData);
            var RespNew = await CorrectDataGet(Resp);
            if (Target == "Count" && typeof RespNew.count != "undefined" || Target == "List" && RespNew.list) {
                if (TabName == "onsale") {
                    if (Target == "Count") {
                        Set_OnSale_Count(RespNew.count);
                    }
                    if (Target == "List") {
                        Set_OnSale_List(RespNew.list);
                    }
                } else if (TabName == "owned") {
                    if (Target == "Count") {
                        Set_Owned_Count(RespNew.count);
                    }
                    if (Target == "List") {
                        Set_Owned_List(RespNew.list);
                    }
                }
            }
        }
        return true;
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
    const inputChangeuser = (e)=>{
        if (e && e.target && typeof e.target.value != "undefined") {
            var value = e.target.value;
            setuserdescription(value);
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
            react_toastify__WEBPACK_IMPORTED_MODULE_22__.toast.error("Form validation error, please fill all the required fields", toasterOption);
            return false;
        }
        var currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .getCurAddr */ .my)();
        var reqData = {
            reportuser: currAddr,
            description: description,
            reportcategory: reportCategoryname,
            type: "collectibles",
            tokenCounts: item.tokenCounts
        };
        var response = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_30__/* .ReportRequest */ .zl)(reqData);
        if (response && response.status == "true") {
            react_toastify__WEBPACK_IMPORTED_MODULE_22__.toast.success("Successfully submit your report", toasterOption);
            setdescription("");
            setTimeout(function() {
                window.$("#report").modal("hide");
            }, 100);
            setTimeout(function() {
                window.location.reload(false);
            }, 400);
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_22__.toast.error("Oops something went wrong.!", toasterOption);
        }
    }
    const AfterWalletConnected = async ()=>{
        ReportdetList();
        var currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .getCurAddr */ .my)();
        if (typeof currAddr != "undefined") {
            Set_Loaderstatus(true);
            if (ParamAccountAddr || ParamAccountCustomUrl) {
                if (ParamAccountAddr && ParamAccountAddr.toString() === currAddr.toString()) {
                    Set_MyItemAccountAddr(ParamAccountAddr);
                    Get_MyItemAccountAddr_Details({
                        addr: currAddr
                    });
                } else {
                    var payload = {};
                    if (ParamAccountAddr) {
                        payload.addr = ParamAccountAddr;
                    } else if (ParamAccountCustomUrl) {
                        payload.customurl = ParamAccountCustomUrl;
                    }
                    await Get_MyItemAccountAddr_Details(payload);
                }
            } else {
                Set_MyItemAccountAddr(currAddr);
                Get_MyItemAccountAddr_Details({
                    addr: currAddr
                });
            }
            Check_follow();
            window.$("#AfterWalletConnected_two").click();
            try {
                LikeForwardRef && LikeForwardRef.current && LikeForwardRef.current.getLikesData();
            } catch (err) {}
        }
    };
    const selectFileChange = async (e)=>{
        if (e.target && e.target.files) {
            var reader = new FileReader();
            var file = e.target.files[0];
            var fileName = file.name;
            var fileNameExt = fileName.substr(fileName.lastIndexOf(".") + 1);
            const fileSize = file.size / 1024 / 1024;
            if (fileSize > 30) {
                react_toastify__WEBPACK_IMPORTED_MODULE_22__.toast.error("File size exceeds 30 MB", toasterOption);
                jquery__WEBPACK_IMPORTED_MODULE_23___default()("input[name='image']").val("");
                return false;
            } else {
                setTokenFile(file);
                var url = reader.readAsDataURL(file);
                reader.onloadend = (async function(e) {
                    if (reader.result) {
                    //setTokenFilePreReader(reader.result);
                    }
                }).bind(this);
                var currAddr = "";
                currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .getCurAddr */ .my)();
                var formData = new FormData();
                if (file) {
                    formData.append("CoverImage", file);
                }
                formData.append("addr", currAddr);
                var Resp = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .imageupdate */ .IO)(formData);
                if (Resp && Resp.data && Resp.data.data) {
                    (0,_actions_toastAlert__WEBPACK_IMPORTED_MODULE_28__/* .toastAlert */ .x)("success", "Cover Updated Successfully", "success");
                    setTimeout(()=>{
                        window.location.reload(false);
                    }, 2000);
                }
            }
        }
    };
    async function ReportdetList() {
        try {
            var resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_30__/* .getreportcategory */ .VX)();
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
        // alert("ddd");
        setReportCategoryname(name);
    }
    async function FollowingTab(address, pos, isFollow) {
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_25__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_20___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        var curAddr = await web3.eth.getAccounts();
        var currAddr = curAddr && curAddr[0].toLowerCase();
        var Payload = {};
        Payload.currAddr = currAddr;
        Payload.ParamAccountAddr = address;
        var msg = "I would like to follow user: " + address;
        if (isFollow == "yes") {
            msg = "I would like to stop following user: " + address;
        }
        await web3.eth.personal.sign(msg, currAddr);
        var Resp = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .FollowChange_Action */ .lA)(Payload);
        var foll = Resp && Resp.data && Resp.data.ChangeType ? Resp.data.ChangeType : "no";
        if (ParamAccountAddr != "" && currAddr != "" && currAddr == ParamAccountAddr || ParamAccountAddr == "" || !ParamAccountAddr) {
            //same user
            FollowingUserList.splice(pos, 1);
            Set_followingStatus(false);
            Set_FollowingUserList(FollowingUserList);
            Set_followingStatus(true);
            var followingcnt = Resp && Resp.data && Resp.data.following ? Resp.data.following : "0";
            var followerscnt = Resp && Resp.data && Resp.data.followers ? Resp.data.followers : "0";
            Set_followingCount(followingcnt);
            Set_followersCount(followerscnt);
        } else {
            //another user
            FollowingUserList[pos].isFollow = foll;
            Set_followingStatus(false);
            Set_FollowingUserList(FollowingUserList);
            Set_followingStatus(true);
        }
        if (foll == "yes") {
            react_toastify__WEBPACK_IMPORTED_MODULE_22__.toast.success("Follow successfully", toasterOption);
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_22__.toast.success("Un-Follow successfully", toasterOption);
        }
    }
    async function hidefunction() {
        window.$(".modal").modal("hide");
        PutOnSaleForwardRef.current.PutOnSale_Click(sitem, selectown);
    }
    async function bidpopupshow() {
        window.$(".modal").modal("hide");
        PutOnBidForwardRef.current.PutOnBid_Click(sitem, selectown);
    }
    async function hide_function(s_item, s_detail) {
        set_sitem(s_item);
        set_selectown(s_detail);
        window.$(".modal").modal("hide");
        PutOnSaleForwardRef.current.PutOnSale_Click(s_item, s_detail);
    }
    async function bid_popupshow(s_item, s_detail) {
        set_sitem(s_item);
        set_selectown(s_detail);
        window.$("#option_modal").modal("show");
    }
    async function popupshow(s_item, s_detail) {
        set_sitem(s_item);
        set_selectown(s_detail);
        window.$("#option_modal").modal("show");
    }
    async function AfterWalletConnected_two() {
        await Tab_Data_Call("Count", "onsale", true);
        await Tab_Data_Call("List", "onsale");
        await Tab_Data_Call("Count", "created");
        await Tab_Data_Call("Count", "owned");
        await Tab_Data_Call("Count", "liked");
    }
    async function Check_follow() {
        var currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .getCurAddr */ .my)();
        var data = {
            useraddress: currAddr,
            followaddress: paramAddress
        };
        var resp = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .User_Follow_Get_Action */ .l1)(data);
        var foll = resp && resp.data && resp.data.isFollow ? resp.data.isFollow : "no";
        var followingcnt = resp && resp.data && resp.data.following ? resp.data.following : "0";
        var followerscnt = resp && resp.data && resp.data.followers ? resp.data.followers : "0";
        Set_is_follow(foll);
        Set_followingCount(followingcnt);
        Set_followersCount(followerscnt);
    }
    const Get_MyItemAccountAddr_Details = async (payload)=>{
        var Resp = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .ParamAccountAddr_Detail_Get */ .PF)(payload);
        if (Resp.data && Resp.data.User && Resp.data.User.coverimage) {
            Set_MyItemcoverimage(Resp.data.User.coverimage);
        }
        if (Resp && Resp.data && Resp.data.User && Resp.data.User.curraddress) {
            Set_MyItemAccountAddr(Resp.data.User.curraddress);
            if (Resp.data.User) {
                console.log(Resp.data.User, "Resp.data.UserResp.data.User--");
                Set_MyItemAccountAddr_Details(Resp.data.User);
                if (Resp.data.User.coverimage && Resp.data.User.coverimage != null && Resp.data.User.coverimage != undefined && Resp.data.User.coverimage != "") {
                    setTokenFilePreUrl(_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Back_URL */ .Z.Back_URL + "cover/" + Resp.data.User.coverimage);
                }
            }
        } else {
            // toast.warning("User not found", toasterOption);
            Set_UserNotFound(true);
        }
    };
    const getClickableLink = (link)=>{
        return link.startsWith("http://") || link.startsWith("https://") ? link : `http://${link}`;
    };
    async function report() {
        var currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .getCurAddr */ .my)();
        var reqData = {
            reportuser: currAddr,
            description: userdescription,
            type: "user",
            userreport: "yes",
            spanuser: MyItemAccountAddr
        };
        var response = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_30__/* .ReportRequest */ .zl)(reqData);
        if (response && response.status == "true") {
            react_toastify__WEBPACK_IMPORTED_MODULE_22__.toast.success("Successfully submit your report", toasterOption);
            setdescription("");
            setTimeout(function() {
                window.$("#report").modal("hide");
            }, 100);
            setTimeout(function() {
                window.location.reload(false);
            }, 400);
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_22__.toast.error("Oops something went wrong.!", toasterOption);
        }
    }
    async function copyToClipboard(e) {
        var textField = document.createElement("textarea");
        textField.innerText = MyItemAccountAddr;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
        react_toastify__WEBPACK_IMPORTED_MODULE_22__.toast.success("Copied Successfully", toasterOption);
    }
    // Countdown Timer
    const currentDate = new Date();
    const year = currentDate.getMonth() === 11 && currentDate.getDate() > 23 ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    // const renderer = ({ days, hours, minutes, seconds }) => {
    //   return (
    //     <div className="timer_panel">
    //       <span><span className="timer_time">{zeroPad(days)}</span><span className="timer_label">d</span></span>
    //       <span className="timer_dots"> </span>
    //       <span><span className="timer_time">{zeroPad(hours)}</span><span className="timer_label">h</span></span>
    //       <span className="timer_dots"> </span>
    //       <span><span className="timer_time">{zeroPad(minutes)}</span><span className="timer_label">m</span></span>
    //       <span className="timer_dots"> </span>
    //       <span><span className="timer_time">{zeroPad(seconds)}</span><span className="timer_label">s</span></span>
    //     </div>
    //   );
    // };
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
                    "s start"
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "wrapper",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_26__.Helmet, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Nilwire - NFT Collections"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ScrollToTopOnMount, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_8__["default"], {
                Set_UserAccountAddr: Set_UserAccountAddr,
                Set_UserAccountBal: Set_UserAccountBal,
                Set_WalletConnected: Set_WalletConnected,
                Set_AddressUserDetails: Set_AddressUserDetails,
                AddressUserDetails: AddressUserDetails,
                Set_Accounts: Set_Accounts,
                WalletConnected: WalletConnected,
                AfterWalletConnected: AfterWalletConnected
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PutOnSaleRef__WEBPACK_IMPORTED_MODULE_11__.PutOnSaleRef, {
                ref: PutOnSaleForwardRef,
                Set_HitItem: Set_HitItem,
                item: HitItem,
                UserAccountAddr: UserAccountAddr,
                UserAccountBal: UserAccountBal,
                Accounts: Accounts,
                // GetUserBal={GetUserBal}
                Set_NoOfToken: Set_NoOfToken
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_TransferRef__WEBPACK_IMPORTED_MODULE_17__.TransferRef, {
                item: HitItem,
                ref: TransferForwardRef
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_CancelOrderRef__WEBPACK_IMPORTED_MODULE_14__.CancelOrderRef, {
                ref: CancelOrderForwardRef,
                Set_HitItem: Set_HitItem,
                item: HitItem,
                UserAccountAddr: UserAccountAddr,
                UserAccountBal: UserAccountBal,
                Accounts: Accounts
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PutOnBid__WEBPACK_IMPORTED_MODULE_12__.PutOnBid, {
                ref: PutOnBidForwardRef,
                Set_HitItem: Set_HitItem,
                item: HitItem,
                UserAccountAddr: UserAccountAddr,
                UserAccountBal: UserAccountBal,
                Accounts: Accounts,
                // GetUserBal={GetUserBal}
                Set_NoOfToken: Set_NoOfToken
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_PlaceAndAcceptBidRef__WEBPACK_IMPORTED_MODULE_10__.PlaceAndAcceptBidRef, {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_BurnRef__WEBPACK_IMPORTED_MODULE_16__.BurnRef, {
                ref: BurnForwardRef,
                // GetUserBal={GetUserBal}
                UserAccountAddr: UserAccountAddr,
                UserAccountBal: UserAccountBal,
                TokenBalance: TokenBalance,
                Accounts: Accounts,
                item: item,
                Set_item: Set_item
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_ShareNowRef__WEBPACK_IMPORTED_MODULE_15__.ShareNowRef, {
                ref: ShareForwardRef
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_LikeRef__WEBPACK_IMPORTED_MODULE_9__.LikeRef, {
                ref: LikeForwardRef,
                setLikedTokenList: setLikedTokenList,
                MyItemAccountAddr: MyItemAccountAddr
            }),
            localStorage.getItem("nilwireMetamask") ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "no-bottom no-top",
                id: "content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "AfterWalletConnected_two",
                        onClick: ()=>AfterWalletConnected_two()
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        id: "profile_banner subheader padding-bottom-40",
                        className: "text-light",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "profile-bg",
                                    style: {
                                        backgroundImage: `url(${TokenFilePreUrl})`
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "d-create-file coverPhotoButton",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "uploadCustomFile",
                                            children: MyItemAccountAddr != UserAccountAddr && UserAccountAddr && UserAccountAddr != "" && UserAccountAddr != undefined && UserAccountAddr != null ? "" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "file_btn btn primary_btn",
                                                children: [
                                                    "Choose image",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        className: "inp_file",
                                                        type: "file",
                                                        name: "image",
                                                        onChange: selectFileChange
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    class: "text-muted",
                                    style: {
                                        position: "absolute",
                                        marginTop: "8px"
                                    },
                                    children: "We recommend an image of at least 1320x280 Pixels"
                                })
                            ]
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
                                            className: "d_profile",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "profile_avatar",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "d_profile_img",
                                                        children: [
                                                            MyItemAccountAddr_Details && MyItemAccountAddr_Details.image && MyItemAccountAddr_Details.image != "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: _lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Back_URL */ .Z.Back_URL + "profile/" + MyItemAccountAddr_Details.image,
                                                                alt: "",
                                                                className: "mb-3"
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: __webpack_require__(4546),
                                                                alt: "",
                                                                className: "mb-3"
                                                            }),
                                                            MyItemAccountAddr_Details && MyItemAccountAddr_Details.isverified && MyItemAccountAddr_Details.isverified != "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-check"
                                                            }) : ""
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "profile_name",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "mb-1",
                                                                children: MyItemAccountAddr_Details && MyItemAccountAddr_Details.name && MyItemAccountAddr_Details.name != "" ? MyItemAccountAddr_Details.name : MyItemAccountAddr
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "clearfix"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        id: "wallet",
                                                                        className: "profile_wallet",
                                                                        children: (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_29__/* .halfAddrShow */ .UD)(MyItemAccountAddr)
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        type: "button",
                                                                        id: "btn_copy",
                                                                        title: "Copy Text",
                                                                        className: "marrrr",
                                                                        onClick: copyToClipboard,
                                                                        children: "Copy"
                                                                    })
                                                                ]
                                                            }),
                                                            MyItemAccountAddr != UserAccountAddr && UserAccountAddr && UserAccountAddr != "" && UserAccountAddr != undefined && UserAccountAddr != null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                type: "button",
                                                                className: "btn-main",
                                                                onClick: FollowChange_Call,
                                                                children: is_follow == "yes" ? "Un-Follow" : "Follow"
                                                            }) : "",
                                                            MyItemAccountAddr != UserAccountAddr && UserAccountAddr && UserAccountAddr != "" && UserAccountAddr != undefined && UserAccountAddr != null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                type: "button",
                                                                className: "btn-main ml-2",
                                                                "data-toggle": "modal",
                                                                "data-target": "#report_user",
                                                                children: "Report"
                                                            }) : ""
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "user_info",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: MyItemAccountAddr_Details && MyItemAccountAddr_Details.bio && MyItemAccountAddr_Details.bio != null && MyItemAccountAddr_Details.bio != undefined && MyItemAccountAddr_Details.bio != "" && MyItemAccountAddr_Details.bio
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "btn-group collection_btn_grp mt-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                        href: getClickableLink(MyItemAccountAddr_Details && MyItemAccountAddr_Details.personalsite && MyItemAccountAddr_Details.personalsite),
                                                                        target: "_blank",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                type: "button",
                                                                                class: "btn",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    class: "bi bi-globe"
                                                                                })
                                                                            }),
                                                                            " "
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                        href: getClickableLink(MyItemAccountAddr_Details && MyItemAccountAddr_Details.twitter && MyItemAccountAddr_Details.twitter),
                                                                        target: "_blank",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                type: "button",
                                                                                class: "btn",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    class: "bi bi-twitter"
                                                                                })
                                                                            }),
                                                                            "    "
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                        href: getClickableLink(MyItemAccountAddr_Details && MyItemAccountAddr_Details.youtube && MyItemAccountAddr_Details.youtube),
                                                                        target: "_blank",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                type: "button",
                                                                                class: "btn",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    class: "bi bi-youtube"
                                                                                })
                                                                            }),
                                                                            " "
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                        href: getClickableLink(MyItemAccountAddr_Details && MyItemAccountAddr_Details.facebook && MyItemAccountAddr_Details.facebook),
                                                                        target: "_blank",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                type: "button",
                                                                                class: "btn",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    class: "bi bi-facebook"
                                                                                })
                                                                            }),
                                                                            " "
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: getClickableLink(MyItemAccountAddr_Details && MyItemAccountAddr_Details.instagram && MyItemAccountAddr_Details.instagram),
                                                                        target: "_blank",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            type: "button",
                                                                            class: "btn",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                class: "bi bi-instagram"
                                                                            })
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
                                        className: "col-md-12",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "de_tab tab_simple",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "nav nav-tabs de_nav justify-content-center",
                                                        id: "nav-tab",
                                                        role: "tablist",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "nav-item nav-link active",
                                                                id: "nav-onSale-tab",
                                                                "data-toggle": "tab",
                                                                href: "#nav-onSale",
                                                                role: "tab",
                                                                "aria-controls": "nav-onSale",
                                                                "aria-selected": "true",
                                                                onClick: ()=>Tab_Click("onsale"),
                                                                children: "On sale"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "nav-item nav-link",
                                                                id: "nav-owned-tab",
                                                                "data-toggle": "tab",
                                                                href: "#nav-owned",
                                                                role: "tab",
                                                                "aria-controls": "nav-owned",
                                                                "aria-selected": "false",
                                                                onClick: ()=>Tab_Click("owned"),
                                                                children: "Owned"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "nav-item nav-link",
                                                                id: "nav-Following-tab",
                                                                "data-toggle": "tab",
                                                                href: "#nav-Following",
                                                                role: "tab",
                                                                "aria-controls": "nav-Following",
                                                                "aria-selected": "false",
                                                                onClick: ()=>Get_Following_List(),
                                                                children: "Following"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "nav-item nav-link",
                                                                id: "nav-Followers-tab",
                                                                "data-toggle": "tab",
                                                                href: "#nav-Followers",
                                                                role: "tab",
                                                                "aria-controls": "nav-Followers",
                                                                "aria-selected": "false",
                                                                onClick: ()=>Get_Followers_List(),
                                                                children: "Followers"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "tab-content de_tab_content",
                                                    id: "nav-tabContent",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "tab-pane fade show active",
                                                            id: "nav-onSale",
                                                            role: "tabpanel",
                                                            "aria-labelledby": "nav-onSale-tab",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "row",
                                                                children: OnSale_List.map((item)=>{
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
                                                                        var a = moment__WEBPACK_IMPORTED_MODULE_24___default()(item.clocktime);
                                                                        var b = moment__WEBPACK_IMPORTED_MODULE_24___default()(item.endclocktime);
                                                                        var c = moment__WEBPACK_IMPORTED_MODULE_24___default()();
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
                                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "col-lg-3 col-md-6 col-sm-6 col-xs-12",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "nft__item",
                                                                            children: [
                                                                                item.PutOnSaleType == "TimedAuction" && display_item <= 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "de_countdown",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countdown__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                                        date: enddate,
                                                                                        autoStart: true,
                                                                                        onStart: ()=>startdate,
                                                                                        renderer: renderer
                                                                                    })
                                                                                }),
                                                                                item.PutOnSaleType == "TimedAuction" && display_item > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "de_countdown",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countdown__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                                        date: startdate,
                                                                                        autoStart: true,
                                                                                        onStart: ()=>Date.now(),
                                                                                        renderer: renderer1
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "authorLikeTop",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "author_list_pp",
                                                                                            children: [
                                                                                                item.tokenOwnerInfo && item.tokenOwnerInfo.curraddress && item.tokenOwnerInfo.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                    href: "javascript:void(0)",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                        className: "lazy",
                                                                                                        src: `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Back_URL */ .Z.Back_URL}profile/${item.tokenOwnerInfo.image}`,
                                                                                                        alt: ""
                                                                                                    })
                                                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                    href: "javascript:void(0)",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                        className: "lazy",
                                                                                                        src: `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Back_URL */ .Z.Back_URL}images/previewThumb.png`,
                                                                                                        alt: ""
                                                                                                    })
                                                                                                }),
                                                                                                item.tokenOwnerInfo && item.tokenOwnerInfo.isverified && item.tokenOwnerInfo.isverified != "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                    className: "fa fa-check"
                                                                                                }) : ""
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "nft__item_like",
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
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "nft__item_wrap",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                        href: `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Front_URL */ .Z.Front_URL}/item-details/${item.tokenCounts}`,
                                                                                        children: item.image.split(".").pop() == "mp4" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                                                            src: `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreator}/${item.image}`,
                                                                                            type: "video/mp4",
                                                                                            alt: "Collections",
                                                                                            className: "lazy nft__item_preview",
                                                                                            controls: true,
                                                                                            controlsList: "nodownload"
                                                                                        }) : item.image.split(".").pop() == "mp3" || item.image.split(".").pop() == "wav" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                src: `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Back_URL */ .Z.Back_URL}images/music.png`,
                                                                                                alt: "",
                                                                                                className: "lazy nft__item_preview"
                                                                                            })
                                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            src: `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreator}/${item.image}`,
                                                                                            alt: "Collections",
                                                                                            className: "lazy nft__item_preview"
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                item && item.image && item.image.split(".").pop() == "mp3" || item.image.split(".").pop() == "wav" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                                                                                    controlsList: "nodownload",
                                                                                    src: `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreatorInfo.curraddress}/${item.image}`,
                                                                                    type: "audio/mp3",
                                                                                    controls: true,
                                                                                    className: "audio audio_widyth"
                                                                                }) : "",
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "nft__item_info",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "flex_between_s",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                    href: `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Front_URL */ .Z.Front_URL}/item-details/${item.tokenCounts}`,
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                                            children: item.tokenName
                                                                                                        })
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                    class: "dropdown",
                                                                                                    onClick: ()=>showAllwithPro(item),
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                                            class: " dropdown-toggle",
                                                                                                            type: "button",
                                                                                                            "data-toggle": "dropdown",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                    class: "caret"
                                                                                                                })
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                                            class: "dropdown-menu dropdown-menu-right",
                                                                                                            children: [
                                                                                                                WalletConnected == true && item.tokenowners_current && item.PutOnSaleType == "FixedPrice" && item.tokenowners_current.price > parseFloat(0) && item.tokenowners_current.tokenOwner && item.tokenowners_current.tokenOwner != UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                        href: "javascript:void(0);",
                                                                                                                        onClick: ()=>PurchaseNowForwardRef.current.PurchaseNow_Click(item, item.tokenowners_current),
                                                                                                                        children: "Buy now"
                                                                                                                    })
                                                                                                                }),
                                                                                                                WalletConnected == true && item.tokenowners_current && item.tokenowners_current.tokenOwner && item.tokenowners_current.balance > 0 && item.tokenowners_current.tokenOwner == UserAccountAddr && item.type == 721 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    onClick: item.tokenowners_current.price > parseFloat(0) ? ()=>hide_function(item, MyTokenDetail) : ()=>bid_popupshow(item, MyTokenDetail),
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                        href: "javascript:void(0);",
                                                                                                                        children: item.tokenowners_current.price > parseFloat(0) ? "Change price" : "Put on sale"
                                                                                                                    })
                                                                                                                }) : WalletConnected == true && item.tokenowners_current && item.tokenowners_current.tokenOwner && item.tokenowners_current.balance > 0 && item.tokenowners_current.tokenOwner == UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    onClick: ()=>PutOnSaleForwardRef.current.PutOnSale_Click(item, item.tokenowners_current),
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                        href: "javascript:void(0);",
                                                                                                                        children: item.tokenowners_current.price > parseFloat(0) ? "Change price" : "Put on sale"
                                                                                                                    })
                                                                                                                }),
                                                                                                                WalletConnected == true && item.tokenowners_current && item.tokenowners_current.tokenOwner && item.tokenowners_current.balance > 0 && item.tokenowners_current.tokenOwner == UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    onClick: ()=>TransferForwardRef.current.Transfer_Click(item, item.tokenowners_current),
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                        href: "javascript:void(0);",
                                                                                                                        children: "Transfer"
                                                                                                                    })
                                                                                                                }),
                                                                                                                WalletConnected == true && item.tokenowners_current && item.tokenowners_current.tokenOwner && item.tokenowners_current.tokenOwner == UserAccountAddr && item.tokenowners_current.balance > 0 && item.tokenowners_current.price > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    onClick: ()=>CancelOrderForwardRef.current.CancelOrder_Click(item, item.tokenowners_current),
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                        href: "javascript:void(0);",
                                                                                                                        children: "Cancel order"
                                                                                                                    })
                                                                                                                }),
                                                                                                                WalletConnected == true && item.tokenowners_current && (item.PutOnSaleType == "FixedPrice" || item.PutOnSaleType == "TimedAuction" || item.PutOnSaleType == "UnLimitedAuction") && item.tokenowners_current.tokenOwner && item.tokenowners_current.balance > 0 && item.tokenowners_current.tokenOwner == UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    onClick: ()=>BurnForwardRef.current.Burn_Click(item, item.tokenowners_current),
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                        href: "javascript:void(0);",
                                                                                                                        children: "Burn"
                                                                                                                    })
                                                                                                                }),
                                                                                                                WalletConnected == true && item.tokenowners_current && (item.PutOnSaleType == "FixedPrice" || item.PutOnSaleType == "TimedAuction" && showlist == "true" && display_item <= 0 || item.PutOnSaleType == "UnLimitedAuction") && item.tokenowners_current.tokenOwner && item.tokenowners_current.tokenOwner != UserAccountAddr && Bids && Bids.myBid && !Bids.myBid.status ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                        href: "javascript:void(0);",
                                                                                                                        onClick: ()=>PlaceABidForwardRef.current.PlaceABid_Click(item),
                                                                                                                        children: "Place a bid"
                                                                                                                    })
                                                                                                                }) : Bids && Bids.myBid && Bids.myBid.status && Bids.myBid.status == "pending" && (item.PutOnSaleType == "FixedPrice" || item.PutOnSaleType == "TimedAuction" && showlist == "true" && display_item <= 0 || item.PutOnSaleType == "UnLimitedAuction") && item.tokenowners_current.tokenOwner && item.tokenowners_current.tokenOwner != UserAccountAddr ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                        href: "javascript:void(0);",
                                                                                                                        onClick: ()=>PlaceABidForwardRef.current.PlaceABid_Click(item),
                                                                                                                        children: "Edit Bid"
                                                                                                                    })
                                                                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    onClick: ()=>ShareForwardRef.current.ShareSocial_Click(item),
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                        href: "javascript:void(0);",
                                                                                                                        children: "Share"
                                                                                                                    })
                                                                                                                }),
                                                                                                                WalletConnected == true && item.tokenowners_current && item.tokenowners_current.tokenOwner && item.tokenowners_current.tokenOwner != UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                        "data-toggle": "modal",
                                                                                                                        "data-target": "#report",
                                                                                                                        children: "Report"
                                                                                                                    })
                                                                                                                })
                                                                                                            ]
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        item.PutOnSaleType == "FixedPrice" && item && item.tokenowners_current && item.tokenowners_current.price > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "nft__item_price",
                                                                                            children: [
                                                                                                item && item.tokenowners_current && convert(parseFloat(item.tokenowners_current.price)),
                                                                                                " ",
                                                                                                item.tokenowners_current.currency,
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    children: item.TabName != "" && (item.TabName == "onsale" || item.TabName == "created" || item.TabName == "owned") ? " " + item.tokenowners_my_balance + "/" + item.tokenowners_my_quantity : item.TabName != "" ? " " + item.tokenowners_all_balance + "/" + item.tokenQuantity : item.tokenowners_sale_balance > 0 ? " " + item.tokenowners_sale_balance + "/" + item.tokenQuantity : " " + item.tokenowners_all_balance + "/" + item.tokenQuantity
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        item.PutOnSaleType == "TimedAuction" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "nft__item_price",
                                                                                            children: [
                                                                                                convert(item.minimumBid),
                                                                                                " ",
                                                                                                _lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].tokenSymbol */ .Z.tokenSymbol,
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    children: item.TabName != "" && (item.TabName == "onsale" || item.TabName == "created" || item.TabName == "owned") ? " " + item.tokenowners_my_balance + "/" + item.tokenowners_my_quantity : item.TabName != "" ? " " + item.tokenowners_all_balance + "/" + item.tokenQuantity : item.tokenowners_sale_balance > 0 ? " " + item.tokenowners_sale_balance + "/" + item.tokenQuantity : " " + item.tokenowners_all_balance + "/" + item.tokenQuantity
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "nft-item-group",
                                                                                            children: [
                                                                                                item.PutOnSaleType == "FixedPrice" && (item && item.tokenowners_current && item.tokenowners_current.price) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "nft__item_action",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                        href: `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Front_URL */ .Z.Front_URL}/item-details/${item.tokenCounts}`,
                                                                                                        children: item.tokenowners_current.tokenOwner != UserAccountAddr ? "Buy now" : "Owned"
                                                                                                    })
                                                                                                }),
                                                                                                item.PutOnSaleType == "FixedPrice" && (item && item.tokenowners_current && item.tokenowners_current.price) == 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "nft__item_action",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                        href: `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Front_URL */ .Z.Front_URL}/item-details/${item.tokenCounts}`,
                                                                                                        children: "Place a bid"
                                                                                                    })
                                                                                                }),
                                                                                                item.PutOnSaleType == "TimedAuction" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "nft__item_action",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                        href: `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Front_URL */ .Z.Front_URL}/item-details/${item.tokenCounts}`,
                                                                                                        children: "Place a bid"
                                                                                                    })
                                                                                                }),
                                                                                                item.PutOnSaleType == "UnLimitedAuction" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "nft__item_action",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                        href: `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Front_URL */ .Z.Front_URL}/item-details/${item.tokenCounts}`,
                                                                                                        children: "Open for bids"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    });
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "tab-pane fade",
                                                            id: "nav-owned",
                                                            role: "tabpanel",
                                                            "aria-labelledby": "nav-owned-tab",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "row",
                                                                children: Owned_List.map((item)=>{
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
                                                                        var a = moment__WEBPACK_IMPORTED_MODULE_24___default()(item.clocktime);
                                                                        var b = moment__WEBPACK_IMPORTED_MODULE_24___default()(item.endclocktime);
                                                                        var c = moment__WEBPACK_IMPORTED_MODULE_24___default()();
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
                                                                    console.log(display_item, "===============", item.PutOnSaleType, "=============+++++++++");
                                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "col-lg-3 col-md-6 col-sm-6 col-xs-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "nft__item",
                                                                                children: [
                                                                                    item.PutOnSaleType == "TimedAuction" && display_item <= 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "de_countdown",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countdown__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                                            date: enddate,
                                                                                            autoStart: true,
                                                                                            onStart: ()=>startdate,
                                                                                            renderer: renderer
                                                                                        })
                                                                                    }),
                                                                                    item.PutOnSaleType == "TimedAuction" && display_item > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "de_countdown",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countdown__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                                            date: startdate,
                                                                                            autoStart: true,
                                                                                            onStart: ()=>Date.now(),
                                                                                            renderer: renderer1
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "authorLikeTop",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                className: "author_list_pp",
                                                                                                children: [
                                                                                                    item.tokenOwnerInfo && item.tokenOwnerInfo.curraddress && item.tokenOwnerInfo.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                        href: "javascript:void(0)",
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                            className: "lazy",
                                                                                                            src: `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Back_URL */ .Z.Back_URL}profile/${item.tokenOwnerInfo.image}`,
                                                                                                            alt: ""
                                                                                                        })
                                                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                        href: "javascript:void(0)",
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                            className: "lazy",
                                                                                                            src: `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Back_URL */ .Z.Back_URL}images/previewThumb.png`,
                                                                                                            alt: ""
                                                                                                        })
                                                                                                    }),
                                                                                                    item.tokenOwnerInfo && item.tokenOwnerInfo.isverified && item.tokenOwnerInfo.isverified != "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                        className: "fa fa-check"
                                                                                                    }) : ""
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                className: "nft__item_like",
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
                                                                                                    }),
                                                                                                    " "
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "nft__item_wrap",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                            href: item.PutOnSaleType != "putonmarket" ? `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Front_URL */ .Z.Front_URL}/item-details/${item.tokenCounts}` : `#`,
                                                                                            children: item.image.split(".").pop() == "mp4" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                                                                src: `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreator}/${item.image}`,
                                                                                                type: "video/mp4",
                                                                                                alt: "Collections",
                                                                                                className: "lazy nft__item_preview",
                                                                                                controls: true,
                                                                                                controlsList: "nodownload"
                                                                                            }) : item.image.split(".").pop() == "mp3" || item.image.split(".").pop() == "wav" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                    src: `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Back_URL */ .Z.Back_URL}images/music.png`,
                                                                                                    alt: "",
                                                                                                    className: "lazy nft__item_preview"
                                                                                                })
                                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                src: `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreator}/${item.image}`,
                                                                                                alt: "Collections",
                                                                                                className: "lazy nft__item_preview"
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    item && item.image && item.image.split(".").pop() == "mp3" || item.image.split(".").pop() == "wav" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                                                                                        controlsList: "nodownload",
                                                                                        src: `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreatorInfo.curraddress}/${item.image}`,
                                                                                        type: "audio/mp3",
                                                                                        controls: true,
                                                                                        className: "audio audio_widyth"
                                                                                    }) : ""
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "nft__item_info",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "flex_between_s",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                href: item.PutOnSaleType != "putonmarket" ? `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Front_URL */ .Z.Front_URL}/item-details/${item.tokenCounts}` : "#",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                                        children: item.tokenName
                                                                                                    })
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                class: "dropdown",
                                                                                                onClick: ()=>showAllwithPro(item),
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                                        class: " dropdown-toggle",
                                                                                                        type: "button",
                                                                                                        "data-toggle": "dropdown",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                class: "caret"
                                                                                                            })
                                                                                                        ]
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                                        class: "dropdown-menu dropdown-menu-right",
                                                                                                        children: [
                                                                                                            WalletConnected == true && item.tokenowners_current && item.PutOnSaleType == "FixedPrice" && item.tokenowners_current.price > parseFloat(0) && item.tokenowners_current.tokenOwner && item.tokenowners_current.tokenOwner != UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                    href: "javascript:void(0);",
                                                                                                                    onClick: ()=>PurchaseNowForwardRef.current.PurchaseNow_Click(item, item.tokenowners_current),
                                                                                                                    children: "Buy now"
                                                                                                                })
                                                                                                            }),
                                                                                                            WalletConnected == true && item.tokenowners_current && item.tokenowners_current.tokenOwner && item.tokenowners_current.balance > 0 && item.tokenowners_current.tokenOwner == UserAccountAddr && item.type == 721 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                onClick: item.tokenowners_current.price > parseFloat(0) ? ()=>hide_function(item, MyTokenDetail) : ()=>bid_popupshow(item, MyTokenDetail),
                                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                    href: "javascript:void(0);",
                                                                                                                    children: item.tokenowners_current.price > parseFloat(0) ? "Change price" : "Put on sale"
                                                                                                                })
                                                                                                            }) : WalletConnected == true && item.tokenowners_current && item.tokenowners_current.tokenOwner && item.tokenowners_current.balance > 0 && item.tokenowners_current.tokenOwner == UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                onClick: ()=>PutOnSaleForwardRef.current.PutOnSale_Click(item, item.tokenowners_current),
                                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                    href: "javascript:void(0);",
                                                                                                                    children: item.tokenowners_current.price > parseFloat(0) ? "Change price" : "Put on sale"
                                                                                                                })
                                                                                                            }),
                                                                                                            WalletConnected == true && item.tokenowners_current && item.tokenowners_current.tokenOwner && item.tokenowners_current.balance > 0 && item.tokenowners_current.tokenOwner == UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                onClick: ()=>TransferForwardRef.current.Transfer_Click(item, item.tokenowners_current),
                                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                    href: "javascript:void(0);",
                                                                                                                    children: "Transfer"
                                                                                                                })
                                                                                                            }),
                                                                                                            WalletConnected == true && item.tokenowners_current && item.tokenowners_current.tokenOwner && item.tokenowners_current.tokenOwner == UserAccountAddr && item.tokenowners_current.balance > 0 && item.tokenowners_current.price > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                onClick: ()=>CancelOrderForwardRef.current.CancelOrder_Click(item, item.tokenowners_current),
                                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                    href: "javascript:void(0);",
                                                                                                                    children: "Cancel Order"
                                                                                                                })
                                                                                                            }),
                                                                                                            WalletConnected == true && item.tokenowners_current && (item.PutOnSaleType == "FixedPrice" || item.PutOnSaleType == "putonmarket" || item.PutOnSaleType == "TimedAuction" || item.PutOnSaleType == "UnLimitedAuction") && item.tokenowners_current.tokenOwner && item.tokenowners_current.balance > 0 && item.tokenowners_current.tokenOwner == UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                onClick: ()=>BurnForwardRef.current.Burn_Click(item, item.tokenowners_current),
                                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                    href: "javascript:void(0);",
                                                                                                                    children: "Burn"
                                                                                                                })
                                                                                                            }),
                                                                                                            WalletConnected == true && item.tokenowners_current && (item.PutOnSaleType == "FixedPrice" || item.PutOnSaleType == "TimedAuction" && showlist == "true" && display_item <= 0 || item.PutOnSaleType == "UnLimitedAuction") && item.tokenowners_current.tokenOwner && item.tokenowners_current.tokenOwner != UserAccountAddr && Bids && Bids.myBid && !Bids.myBid.status ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                    href: "javascript:void(0);",
                                                                                                                    onClick: ()=>PlaceABidForwardRef.current.PlaceABid_Click(item),
                                                                                                                    children: "Place a bid"
                                                                                                                })
                                                                                                            }) : Bids && Bids.myBid && Bids.myBid.status && Bids.myBid.status == "pending" && (item.PutOnSaleType == "FixedPrice" || item.PutOnSaleType == "TimedAuction" && showlist == "true" && display_item <= 0 || item.PutOnSaleType == "UnLimitedAuction") && item.tokenowners_current.tokenOwner && item.tokenowners_current.tokenOwner != UserAccountAddr ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                    href: "javascript:void(0);",
                                                                                                                    onClick: ()=>PlaceABidForwardRef.current.PlaceABid_Click(item),
                                                                                                                    children: "Edit Bid"
                                                                                                                })
                                                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                                                                                            item && item.PutOnSaleType != "putonmarket" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                                onClick: ()=>ShareForwardRef.current.ShareSocial_Click(item),
                                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                    href: "javascript:void(0);",
                                                                                                                    children: "Share"
                                                                                                                })
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    item.PutOnSaleType == "FixedPrice" && item && item.tokenowners_current && item.tokenowners_current.price > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "nft__item_price",
                                                                                        children: [
                                                                                            item && item.tokenowners_current && convert(parseFloat(item.tokenowners_current.price)),
                                                                                            " ",
                                                                                            item.tokenowners_current.currency,
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                children: item.TabName != "" && (item.TabName == "onsale" || item.TabName == "created" || item.TabName == "owned") ? " " + item.tokenowners_my_balance + "/" + item.tokenowners_my_quantity : item.TabName != "" ? " " + item.tokenowners_all_balance + "/" + item.tokenQuantity : item.tokenowners_sale_balance > 0 ? " " + item.tokenowners_sale_balance + "/" + item.tokenQuantity : " " + item.tokenowners_all_balance + "/" + item.tokenQuantity
                                                                                            })
                                                                                        ]
                                                                                    }) : item.PutOnSaleType == "FixedPrice" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "nft__item_price",
                                                                                        children: [
                                                                                            "Unlisted 0.00 ",
                                                                                            item.tokenowners_current.currency,
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                children: item.TabName != "" && (item.TabName == "onsale" || item.TabName == "created" || item.TabName == "owned") ? " " + item.tokenowners_my_balance + "/" + item.tokenowners_my_quantity : item.TabName != "" ? " " + item.tokenowners_all_balance + "/" + item.tokenQuantity : item.tokenowners_sale_balance > 0 ? " " + item.tokenowners_sale_balance + "/" + item.tokenQuantity : " " + item.tokenowners_all_balance + "/" + item.tokenQuantity
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    item.PutOnSaleType == "TimedAuction" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "nft__item_price",
                                                                                        children: [
                                                                                            convert(item.minimumBid),
                                                                                            " ",
                                                                                            _lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].tokenSymbol */ .Z.tokenSymbol,
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                children: item.TabName != "" && (item.TabName == "onsale" || item.TabName == "created" || item.TabName == "owned") ? " " + item.tokenowners_my_balance + "/" + item.tokenowners_my_quantity : item.TabName != "" ? " " + item.tokenowners_all_balance + "/" + item.tokenQuantity : item.tokenowners_sale_balance > 0 ? " " + item.tokenowners_sale_balance + "/" + item.tokenQuantity : " " + item.tokenowners_all_balance + "/" + item.tokenQuantity
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "nft-item-group",
                                                                                        children: [
                                                                                            item.PutOnSaleType == "FixedPrice" && (item && item.tokenowners_current && item.tokenowners_current.price) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                className: "nft__item_action",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                    href: item.PutOnSaleType != "putonmarket" ? `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Front_URL */ .Z.Front_URL}/item-details/${item.tokenCounts}` : "#",
                                                                                                    children: item.tokenowners_current.tokenOwner != UserAccountAddr ? "Place a bid" : "Owned"
                                                                                                })
                                                                                            }),
                                                                                            WalletConnected == true && item.PutOnSaleType == "FixedPrice" && item.tokenowners_current.price == 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                className: "nft__item_action",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                    href: item.PutOnSaleType != "putonmarket" ? `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Front_URL */ .Z.Front_URL}/item-details/${item.tokenCounts}` : "#",
                                                                                                    children: item.tokenowners_current.tokenOwner != UserAccountAddr ? "Open for Bids" : "Owned"
                                                                                                })
                                                                                            }),
                                                                                            item.PutOnSaleType == "TimedAuction" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                className: "nft__item_action",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                    href: item.PutOnSaleType != "putonmarket" ? `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Front_URL */ .Z.Front_URL}/item-details/${item.tokenCounts}` : "#",
                                                                                                    children: item.tokenowners_current.tokenOwner != UserAccountAddr ? "Place a bid" : "Owned"
                                                                                                })
                                                                                            }),
                                                                                            item.PutOnSaleType == "UnLimitedAuction" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                className: "nft__item_action",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                    href: item.PutOnSaleType != "putonmarket" ? `${_lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Front_URL */ .Z.Front_URL}/item-details/${item.tokenCounts}` : "#",
                                                                                                    children: "Open for Bids"
                                                                                                })
                                                                                            }),
                                                                                            item.PutOnSaleType == "putonmarket" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                className: "nft__item_action",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                    onClick: ()=>popupshow(item, item.tokenowners_current),
                                                                                                    style: {
                                                                                                        cursor: "pointer"
                                                                                                    },
                                                                                                    children: "Put on Sale"
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    });
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "tab-pane fade",
                                                            id: "nav-staked",
                                                            role: "tabpanel",
                                                            "aria-labelledby": "nav-staked-tab",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "row",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "col-lg-3 col-md-6 col-sm-6 col-xs-12",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "nft__item",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "de_countdown",
                                                                                    children: "APY 125.75%"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "author_list_pp",
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                        href: "dark-author.html",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                className: "lazy",
                                                                                                src: __webpack_require__(9959),
                                                                                                alt: ""
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "fa fa-check"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "nft__item_wrap",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                        href: "dark-item-details.html",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            src: __webpack_require__(6445),
                                                                                            className: "lazy nft__item_preview",
                                                                                            alt: ""
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "nft__item_info",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                            href: "dark-item-details.html",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                                children: "Abstraction #256"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "nft__item_price",
                                                                                            children: [
                                                                                                "Earned",
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    children: "1.05 ETH"
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "nft-item-group",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                    className: "nft__item_price",
                                                                                                    children: [
                                                                                                        "Stakers",
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                            children: "7890"
                                                                                                        })
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                    className: "nft__item_like",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                            className: "fa fa-heart"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                            children: "97"
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "itemButtonGroup",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                    type: "button",
                                                                                                    className: "btn-main btnGrey",
                                                                                                    children: "Unstake"
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                    type: "button",
                                                                                                    className: "btn-main",
                                                                                                    children: "Harvest"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "col-lg-3 col-md-6 col-sm-6 col-xs-12",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "nft__item",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "de_countdown",
                                                                                    children: "APY 125.75%"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "author_list_pp",
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                        href: "dark-author.html",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                className: "lazy",
                                                                                                src: __webpack_require__(9959),
                                                                                                alt: ""
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "fa fa-check"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "nft__item_wrap",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                        href: "dark-item-details.html",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            src: __webpack_require__(7781),
                                                                                            className: "lazy nft__item_preview",
                                                                                            alt: ""
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "nft__item_info",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                            href: "dark-item-details.html",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                                children: "Abstraction #256"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "nft__item_price",
                                                                                            children: [
                                                                                                "Earned",
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    children: "25 ETH"
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "nft-item-group",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                    className: "nft__item_price",
                                                                                                    children: [
                                                                                                        "Stakers",
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                            children: "550"
                                                                                                        })
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                    className: "nft__item_like",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                            className: "fa fa-heart"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                            children: "50"
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "itemButtonGroup",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                    className: "btn-main btnGrey",
                                                                                                    children: "Unstake"
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                    className: "btn-main",
                                                                                                    children: "Harvest"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "col-lg-3 col-md-6 col-sm-6 col-xs-12",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "nft__item",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "de_countdown",
                                                                                    children: "APY 236.75%"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "author_list_pp",
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                        href: "dark-author.html",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                className: "lazy",
                                                                                                src: __webpack_require__(9959),
                                                                                                alt: ""
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "fa fa-check"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "nft__item_wrap",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                        href: "dark-item-details.html",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            src: __webpack_require__(6041),
                                                                                            className: "lazy nft__item_preview",
                                                                                            alt: ""
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "nft__item_info",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                            href: "dark-item-details.html",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                                children: "Abstraction 128"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "nft__item_price",
                                                                                            children: [
                                                                                                "Earned",
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    children: "10.5 ETH"
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "nft-item-group",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                    className: "nft__item_price",
                                                                                                    children: [
                                                                                                        "Stakers",
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                            children: "259"
                                                                                                        })
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                    className: "nft__item_like",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                            className: "fa fa-heart"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                            children: "80"
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "itemButtonGroup",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                    className: "btn-main btnGrey",
                                                                                                    children: "Unstake"
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                    className: "btn-main",
                                                                                                    children: "Harvest"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "col-lg-3 col-md-6 col-sm-6 col-xs-12",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "nft__item",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "de_countdown",
                                                                                    children: "APY 8651.75%"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "author_list_pp",
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                        href: "dark-author.html",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                className: "lazy",
                                                                                                src: __webpack_require__(9959),
                                                                                                alt: ""
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "fa fa-check"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "nft__item_wrap",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                        href: "dark-item-details.html",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            src: __webpack_require__(5383),
                                                                                            className: "lazy nft__item_preview",
                                                                                            alt: ""
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "nft__item_info",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                            href: "dark-item-details.html",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                                children: "Abstraction #525"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "nft__item_price",
                                                                                            children: [
                                                                                                "Earned",
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    children: "125.05 ETH"
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "nft-item-group",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                    className: "nft__item_price",
                                                                                                    children: [
                                                                                                        "Stakers",
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                            children: "109"
                                                                                                        })
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                    className: "nft__item_like",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                            className: "fa fa-heart"
                                                                                                        }),
                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                            children: "73"
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "itemButtonGroup",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                    className: "btn-main btnGrey",
                                                                                                    children: "Unstake"
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                    className: "btn-main",
                                                                                                    children: "Harvest"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "tab-pane fade pt-4",
                                                            id: "nav-Following",
                                                            role: "tabpanel",
                                                            "aria-labelledby": "nav-Following-tab",
                                                            children: followingStatus && FollowingUserList && FollowingUserList.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "row",
                                                                children: FollowingUserList.map((item, i)=>{
                                                                    var name = item && item.userdetail && item.userdetail.name && item.userdetail.name != "" ? item.userdetail.name : item.userdetail && item.userdetail.curraddress ? item.userdetail.curraddress : "";
                                                                    if (name.length > 15) {
                                                                        name = name.substring(0, 18) + "...";
                                                                    }
                                                                    var followers = item && item.userdetail && item.userdetail.followers ? item.userdetail.followers : 0;
                                                                    var imageUrl = item.userdetail && item.userdetail.image != "" && item.userdetail.image != null && item.userdetail.image != undefined ? _lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Back_URL */ .Z.Back_URL + "profile/" + item.userdetail.image : __webpack_require__(4546);
                                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "col-lg-3 col-md-6 col-sm-6 col-xs-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                href: "/user/" + item.owner,
                                                                                className: "nft_coll style-2 w-100 d-block",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "nft_coll_pp",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            src: imageUrl,
                                                                                            alt: "User",
                                                                                            className: "lazy"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "nft_coll_info",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                                children: name
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                children: [
                                                                                                    item.numberOfFollower,
                                                                                                    " Followers"
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            item.owner != UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "pading_new_s_button",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                    onClick: ()=>FollowingTab(item.owner, i, item.isFollow),
                                                                                    className: "btn-main",
                                                                                    children: item.isFollow == "yes" ? "Unfollow" : "Follow"
                                                                                })
                                                                            })
                                                                        ]
                                                                    });
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "tab-pane fade pt-4",
                                                            id: "nav-Followers",
                                                            role: "tabpanel",
                                                            "aria-labelledby": "nav-Followers-tab",
                                                            children: followersStatus && FollowerUserList && FollowerUserList.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "row",
                                                                children: followersStatus && FollowerUserList.map((item, i)=>{
                                                                    var name = item && item.userdetail && item.userdetail.name && item.userdetail.name != "" ? item.userdetail.name : item.follower;
                                                                    if (name.length > 15) {
                                                                        name = name.substring(0, 18) + "...";
                                                                    }
                                                                    var followers = item && item.userdetail && item.userdetail.followers ? item.userdetail.followers : 0;
                                                                    var imageUrl = item.userdetail && item.userdetail.image != "" && item.userdetail.image != null && item.userdetail.image != undefined ? _lib_config__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Back_URL */ .Z.Back_URL + "profile/" + item.userdetail.image : __webpack_require__(4546);
                                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "col-lg-3 col-md-6 col-sm-6 col-xs-12",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            href: "",
                                                                            className: "nft_coll style-2 w-100 d-block",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "nft_coll_pp",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                        className: "lazy",
                                                                                        src: imageUrl,
                                                                                        alt: ""
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    href: "/user/" + item.follower,
                                                                                    className: "nft_coll_info",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                            children: name
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            children: [
                                                                                                item.numberOfFollower,
                                                                                                " Followers"
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                item.follower != UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "pading_new_s_button",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                        onClick: ()=>FollowerTab(item.follower, i, item.isFollow),
                                                                                        className: "btn-main",
                                                                                        children: item.isFollow == "yes" ? "Unfollow" : "Follow"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    });
                                                                })
                                                            })
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        class: "modal report primary_modal",
                        id: "report_user",
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
                                                children: "Report User"
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
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    className: "form-control primary_inp",
                                                    onChange: inputChangeuser,
                                                    id: "description",
                                                    rows: "3",
                                                    name: "description",
                                                    placeholder: "Give us more details"
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
                                                onClick: ()=>report(),
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
                        !localStorage.getItem("nilwireMetamask") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
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

/***/ })

};
;