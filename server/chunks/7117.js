exports.id = 7117;
exports.ids = [7117];
exports.modules = {

/***/ 5184:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ toastAlert)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__]);
react_toastify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function toastAlert(errorType, message, id) {
    if (errorType === "error") {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(message, {
            autoClose: 2000,
            toastId: id,
            position: react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.POSITION.TOP_RIGHT
        });
    } else if (errorType === "success") {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(message, {
            autoClose: 2000,
            toastId: id,
            position: react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.POSITION.TOP_RIGHT
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TokenItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4449);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_toastAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5184);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6103);
/* harmony import */ var _lib_isEmpty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5498);
/* harmony import */ var _lib_isEmpty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lib_isEmpty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3992);
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7416);
/* harmony import */ var _actions_v1_token__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_toastAlert__WEBPACK_IMPORTED_MODULE_5__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_9__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_10__]);
([_actions_toastAlert__WEBPACK_IMPORTED_MODULE_5__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_9__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const moment = __webpack_require__(2245);
const IPFS_IMGurl = _lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].IPFS_IMG */ .Z.IPFS_IMG;
const currentDate = new Date();
const year = currentDate.getMonth() === 11 && currentDate.getDate() > 23 ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
function TokenItem(props) {
    const [usd, setusd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [block, setblock] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getInit();
    }, []);
    async function getInit() {}
    async function showAllwithPro(data) {
        var curAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_9__/* .getCurAddr */ .my)();
        var payload = {
            curAddr: curAddr,
            tokenCounts: data.tokenCounts
        };
        TokenCounts_Get_Detail_Call(payload);
    }
    const TokenCounts_Get_Detail_Call = async (payload)=>{
        var curAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_9__/* .getCurAddr */ .my)();
        var Resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_10__/* .TokenCounts_Get_Detail_Action */ .u7)(payload);
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
            var IndexVal = -1;
            if (TokenResp.Token[0].tokenowners_all && curAddr) {
                var tokenowners_all = TokenResp.Token[0].tokenowners_all;
                IndexVal = tokenowners_all.findIndex((val)=>val.tokenOwner.toString() == curAddr.toString());
            }
            var newMyTokenBalance = 0;
            if (IndexVal > -1) {
                newMyTokenBalance = tokenowners_all[IndexVal].balance;
                Set_TokenBalance(newMyTokenBalance);
                Set_MyTokenDetail(tokenowners_all[IndexVal]);
            } else {
                newMyTokenBalance = 0;
                Set_TokenBalance(0);
                Set_MyTokenDetail({});
            }
            if (TokenResp.TotalQuantity) {
                Set_AllowedQuantity(parseInt(TokenResp.TotalQuantity) - parseInt(newMyTokenBalance));
            } else {
                Set_AllowedQuantity(0);
            }
            if (TokenResp.Token && TokenResp.Token[0]) {
                Set_item(TokenResp.Token[0]);
            }
        }
    };
    async function buyToken() {}
    var { item , LikedTokenList , hitLike , UserAccountAddr , UserAccountBal , PutOnSale_Click , PlaceABid_Click , PurchaseNow_Click , Burn_Click , Transfer_Click , CancelOrder_Click , WalletConnected , ShareSocial_Click , SubmitReport_Click , Tattoorequest_Click , TokenBalance , Set_item , Set_Bids , Set_BuyOwnerDetailFirst , Set_tokenCounts_Detail , Set_MyTokenBalance , Set_TokenBalance , Set_MyTokenDetail , Set_AllowedQuantity , Bids , from  } = props;
    console.log(LikedTokenList, "============LikedTokenListLikedTokenListLikedTokenListLikedTokenList");
    const renderer1 = ({ days , Month , Year , hours , minutes , seconds , completed  })=>{
        if (completed) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                children: [
                    " ",
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
    var currDate = new Date();
    var startdate = new Date(item.clocktime);
    var enddate = new Date(item.endclocktime);
    var auction = "false";
    var finish = "";
    var enddate1 = "";
    var showlist = "true";
    var display_item = 0;
    var myqty = "";
    let mytr = "";
    if (item && item.tokenowners_all && item.tokenowners_all.length > 0) {
        var tokenallowner = item.tokenowners_all;
        let myitem = tokenallowner.findIndex((indexitem)=>indexitem.tokenOwner == UserAccountAddr);
        myqty = item.tokenowners_all[myitem];
    }
    if (item.type == 721 && item.PutOnSaleType == "TimedAuction") {
        auction = "true";
        var a = moment(item.clocktime);
        var b = moment(item.endclocktime);
        var c = moment();
        a.diff(b); // 86400000
        var diffInMs = a.diff(c);
        finish = b.diff(c);
        console.log(finish, "FFFFF");
        enddate1 = parseFloat(diffInMs);
        display_item = a.diff(c);
        // if(currDate<startdate){
        //   var auctionTxt = "Start";
        // }else
        if (finish > 0) {
            showlist = "true";
        } else {
            var auctionTxt = "Ended";
            showlist = "false";
        }
    }
    if (item && item.Tattoorequest && item.Tattoorequest.length > 0 && UserAccountAddr && UserAccountAddr != null && UserAccountAddr != undefined && UserAccountAddr != "") {
        mytr = item.Tattoorequest.filter((x)=>x.useraddress == UserAccountAddr);
    }
    async function selectoption(s_item, s_owner) {
        props.Set_item(s_item);
        props.set_selectown(s_owner);
        props.popupshow();
    }
    async function checkwall() {
        if (localStorage.getItem("tksmudisgjeush")) {} else {
            (0,_actions_toastAlert__WEBPACK_IMPORTED_MODULE_5__/* .toastAlert */ .x)("error", "Connect Wallet to Move Further", "error");
        }
    }
    console.log(item, "=============================itemitemitemitemitemitemitemitemitem");
    function convert(n) {
        var sign = +n < 0 ? "-" : "", toStr = n.toString();
        if (!/e/i.test(toStr)) {
            return n;
        }
        var [lead, decimal, pow] = n.toString().replace(/^-/, "").replace(/^([0-9]+)(e.*)/, "$1.$2").split(/e|\./);
        return +pow < 0 ? sign + "0." + "0".repeat(Math.max(Math.abs(pow) - 1 || 0, 0)) + lead + decimal : sign + lead + (+pow >= decimal.length ? decimal + "0".repeat(Math.max(+pow - decimal.length || 0, 0)) : decimal.slice(0, +pow) + "." + decimal.slice(+pow));
    }
    return item && item.tokenowners_current && from != item.tokenCounts && props.aucttype && props.aucttype == "yes" && (item.PutOnSaleType == "TimedAuction" && showlist == "true" && display_item <= 0 || item && item.PutOnSaleType == "TimedAuction" && showlist == "true" && display_item > 0 || showlist == "false" && auction == "true") || props.aucttype && props.aucttype == "no" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-lg-3 col-md-6 col-sm-6 col-xs-12 d-flex",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "nft__item style-2 flex-fill",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "authorLikeTop",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "author_list_pp",
                            children: item.tokenOwnerInfo && item.tokenOwnerInfo.curraddress && item.tokenOwnerInfo.image ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Front_URL */ .Z.Front_URL}/user/${item.tokenOwnerInfo.curraddress}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "lazy",
                                        src: `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Back_URL */ .Z.Back_URL}profile/${item.tokenOwnerInfo.image}`,
                                        alt: ""
                                    }),
                                    item.tokenOwnerInfo.isverified && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fa fa-check"
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Front_URL */ .Z.Front_URL}/user/${item.tokenOwnerInfo.curraddress}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "lazy",
                                        src: `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Back_URL */ .Z.Back_URL}images/previewThumb.png`,
                                        alt: ""
                                    }),
                                    item.tokenOwnerInfo.isverified && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fa fa-check"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "nft__item_like",
                            children: [
                                LikedTokenList.findIndex((list)=>list.tokenCounts === item.tokenCounts) > -1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa fa-heart liked",
                                    onClick: ()=>hitLike(item),
                                    style: {
                                        cursor: "pointer"
                                    }
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "far fa-heart ",
                                    onClick: ()=>hitLike(item),
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
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "nft__item_wrap",
                    children: [
                        item.PutOnSaleType == "TimedAuction" && display_item <= 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "de_countdown",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countdown__WEBPACK_IMPORTED_MODULE_4___default()), {
                                date: enddate,
                                autoStart: true,
                                onStart: ()=>startdate,
                                renderer: renderer
                            })
                        }),
                        item.PutOnSaleType == "TimedAuction" && display_item > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "de_countdown",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countdown__WEBPACK_IMPORTED_MODULE_4___default()), {
                                date: startdate,
                                autoStart: true,
                                onStart: ()=>Date.now(),
                                renderer: renderer1
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Front_URL */ .Z.Front_URL}/item-details/${item.tokenCounts}`,
                            children: item.image.split(".").pop() == "mp4" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                src: `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreatorInfo.curraddress}/${item.image}`,
                                type: "video/mp4",
                                alt: "Collections",
                                className: "lazy nft__item_preview nft__item_preview_video",
                                controls: true,
                                controlsList: "nodownload"
                            }) : item.image.split(".").pop() == "mp3" || item.image.split(".").pop() == "wav" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Back_URL */ .Z.Back_URL}/images/music.png`,
                                    alt: "",
                                    className: "lazy nft__item_preview"
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreatorInfo.curraddress}/${item.image}`,
                                alt: "Collections",
                                className: "lazy nft__item_preview"
                            })
                        })
                    ]
                }),
                item && item.image && item.image.split(".").pop() == "mp3" || item.image.split(".").pop() == "wav" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                    controlsList: "nodownload",
                    src: `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Back_URL */ .Z.Back_URL}nftImg/${item.tokenCreatorInfo.curraddress}/${item.image}`,
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
                                    href: `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Front_URL */ .Z.Front_URL}/item-details/${item.tokenCounts}`,
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
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    class: "caret"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            class: "dropdown-menu dropdown-menu-right",
                                            children: [
                                                WalletConnected == true && item.tokenowners_current && item.PutOnSaleType == "FixedPrice" && item.tokenowners_current.price > parseFloat(0) && item.tokenowners_current.tokenOwner && item.tokenowners_current.tokenOwner != UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    onClick: ()=>PurchaseNow_Click(item, item.tokenowners_current),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "javascript:void(0);",
                                                        children: "Buy now"
                                                    })
                                                }),
                                                WalletConnected == true && item.tokenowners_current && item.tokenowners_current.tokenOwner && item.tokenowners_current.balance > 0 && item.tokenowners_current.tokenOwner == UserAccountAddr && item.type == 721 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    onClick: item.tokenowners_current.price > parseFloat(0) ? ()=>PutOnSale_Click(item, item.tokenowners_current) : ()=>selectoption(item, item.tokenowners_current),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "javascript:void(0);",
                                                        children: item.tokenowners_current.price > parseFloat(0) ? "Change Price" : "Put on sale"
                                                    })
                                                }) : WalletConnected == true && item.tokenowners_current && item.tokenowners_current.tokenOwner && item.tokenowners_current.balance > 0 && item.tokenowners_current.tokenOwner == UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    onClick: ()=>PutOnSale_Click(item, item.tokenowners_current),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "javascript:void(0);",
                                                        children: item.tokenowners_current.price > parseFloat(0) ? "Change Price" : "Put on sale"
                                                    })
                                                }),
                                                WalletConnected == true && item.tokenowners_current && item.tokenowners_current.tokenOwner && item.tokenowners_current.balance > 0 && item.tokenowners_current.tokenOwner == UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    onClick: ()=>Transfer_Click(item, item.tokenowners_current),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "javascript:void(0);",
                                                        children: "Transfer"
                                                    })
                                                }),
                                                WalletConnected == true && item.tokenowners_current && (item.PutOnSaleType == "FixedPrice" || item.PutOnSaleType == "TimedAuction" || item.PutOnSaleType == "UnLimitedAuction") && item.tokenowners_current.tokenOwner && item.tokenowners_current.balance > 0 && item.tokenowners_current.tokenOwner == UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    onClick: ()=>Burn_Click(item, item.tokenowners_current),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "javascript:void(0);",
                                                        children: "Burn"
                                                    })
                                                }),
                                                WalletConnected == true && item.tokenowners_current && item.tokenowners_current.tokenOwner && item.tokenowners_current.tokenOwner == UserAccountAddr && item.tokenowners_current.balance > 0 && item.tokenowners_current.price > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    onClick: ()=>CancelOrder_Click(item, item.tokenowners_current),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "javascript:void(0);",
                                                        children: "Cancel Sale Order"
                                                    })
                                                }),
                                                WalletConnected == true && item.tokenowners_current && showlist == "true" && (item.PutOnSaleType == "FixedPrice" || item.PutOnSaleType == "TimedAuction" && display_item <= 0 || item.PutOnSaleType == "UnLimitedAuction") && item.tokenowners_current.tokenOwner && item.tokenowners_current.tokenOwner != UserAccountAddr && Bids && Bids.myBid && !Bids.myBid.status ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    onClick: ()=>PlaceABid_Click(item),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "javascript:void(0);",
                                                        children: "Place a bid"
                                                    })
                                                }) : Bids && Bids.myBid && Bids.myBid.status && showlist == "true" && Bids.myBid.status == "pending" && (item.PutOnSaleType == "FixedPrice" || item.PutOnSaleType == "TimedAuction" && display_item <= 0 || item.PutOnSaleType == "UnLimitedAuction") && item.tokenowners_current.tokenOwner && item.tokenowners_current.tokenOwner != UserAccountAddr ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    onClick: ()=>PlaceABid_Click(item),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "javascript:void(0);",
                                                        children: "Edit bid"
                                                    })
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    onClick: ()=>ShareSocial_Click(item),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "javascript:void(0);",
                                                        children: "Share"
                                                    })
                                                }),
                                                WalletConnected == true && item.tokenowners_current && item.tokenowners_current.tokenOwner && item.tokenowners_current.tokenOwner != UserAccountAddr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    "data-toggle": "modal",
                                                    "data-target": "#report",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: "Report"
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
                                    children: item.TabName != "" && (item.TabName == "onsale" || item.TabName == "created" || item.TabName == "owned") ? item.tokenowners_my_balance + " of " + item.tokenowners_my_quantity : item.TabName != "" ? item.tokenowners_all_balance + " of " + item.tokenQuantity : item.tokenowners_all_balance + " of " + item.tokenQuantity
                                })
                            ]
                        }) : item.PutOnSaleType == "FixedPrice" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "nft__item_price",
                            children: [
                                "Unlisted 0.00 ",
                                item.tokenowners_current.currency,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: item.TabName != "" && (item.TabName == "onsale" || item.TabName == "created" || item.TabName == "owned") ? item.tokenowners_my_balance + " of " + item.tokenowners_my_quantity : item.TabName != "" ? item.tokenowners_all_balance + " of " + item.tokenQuantity : item.tokenowners_sale_balance > 0 ? item.tokenowners_sale_balance + " of " + item.tokenQuantity : item.tokenowners_all_balance + " of " + item.tokenQuantity
                                })
                            ]
                        }) : item.PutOnSaleType == "UnLimitedAuction" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "nft__item_price",
                            children: [
                                "Not For Sale",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: item.TabName != "" && (item.TabName == "onsale" || item.TabName == "created" || item.TabName == "owned") ? item.tokenowners_my_balance + " of " + item.tokenowners_my_quantity : item.TabName != "" ? item.tokenowners_all_balance + " of " + item.tokenQuantity : item.tokenowners_sale_balance > 0 ? item.tokenowners_sale_balance + " of " + item.tokenQuantity : item.tokenowners_all_balance + " of " + item.tokenQuantity
                                })
                            ]
                        }),
                        item.PutOnSaleType == "TimedAuction" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "nft__item_price",
                            children: [
                                convert(item.minimumBid),
                                " ",
                                _lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].tokenSymbol */ .Z.tokenSymbol,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: item.TabName != "" && (item.TabName == "onsale" || item.TabName == "created" || item.TabName == "owned") ? " " + item.tokenowners_my_balance + "/" + item.tokenowners_my_quantity : item.TabName != "" ? " " + item.tokenowners_all_balance + "/" + item.tokenQuantity : item.tokenowners_sale_balance > 0 ? " " + item.tokenowners_sale_balance + "/" + item.tokenQuantity : " " + item.tokenowners_all_balance + "/" + item.tokenQuantity
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "nft-item-group",
                            children: [
                                WalletConnected == true && item.PutOnSaleType == "FixedPrice" && item.tokenowners_current.price == 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "nft__item_action",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Front_URL */ .Z.Front_URL}/item-details/${item.tokenCounts}`,
                                        children: item.tokenowners_current.tokenOwner != UserAccountAddr ? "Place a bid" : "Owned"
                                    })
                                }),
                                item.PutOnSaleType == "FixedPrice" && (item && item.tokenowners_current && item.tokenowners_current.price) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "nft__item_action",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Front_URL */ .Z.Front_URL}/item-details/${item.tokenCounts}`,
                                        children: item.tokenowners_current.tokenOwner != UserAccountAddr ? "Buy now" : "Owned"
                                    })
                                }),
                                item.PutOnSaleType == "TimedAuction" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "nft__item_action",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        // onClick={() => PlaceABid_Click(item)}
                                        // style={{cursor:'pointer'}}
                                        href: `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Front_URL */ .Z.Front_URL}/item-details/${item.tokenCounts}`,
                                        children: item.tokenowners_current.tokenOwner != UserAccountAddr ? "Place a bid" : "Owned"
                                    })
                                }),
                                item.PutOnSaleType == "UnLimitedAuction" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "nft__item_action",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Front_URL */ .Z.Front_URL}/item-details/${item.tokenCounts}`,
                                        children: item.tokenowners_current.tokenOwner != UserAccountAddr ? "Open for bids" : "Owned"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }) : "";
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ })

};
;