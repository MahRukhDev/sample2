"use strict";
exports.id = 4194;
exports.ids = [4194];
exports.modules = {

/***/ 4194:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Activity)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_pages___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8287);
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1268);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(471);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6103);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9648);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3590);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9041);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7416);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_pages___WEBPACK_IMPORTED_MODULE_2__, _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__, _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_7__, react_toastify__WEBPACK_IMPORTED_MODULE_8__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_11__]);
([src_pages___WEBPACK_IMPORTED_MODULE_2__, _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__, _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_7__, react_toastify__WEBPACK_IMPORTED_MODULE_8__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].toasterOption */ .Z.toasterOption;
// Scroll to Top
function ScrollToTopOnMount() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.scrollTo(0, 0);
    }, []);
    return null;
}
const IPFS_IMGurl = _lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].IPFS_IMG */ .Z.IPFS_IMG;
function Activity() {
    const [UserAccountAddr, Set_UserAccountAddr] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [AddressUserDetails, Set_AddressUserDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [Accounts, Set_Accounts] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [UserAccountBal, Set_UserAccountBal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [WalletConnected, Set_WalletConnected] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("false");
    const [salelist, setsalelist] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [likelist, setlikelist] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [purchaselist, setpurchaselist] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [offerlist, setofferlist] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [followinglist, setfollowinglist] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [burnlist, setburnlist] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [mintlist, setmintlist] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();
    const [selected, setselected] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("all");
    const [Loaderstatus, Set_Loaderstatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [listinglist, setlistinglist] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadScript();
        getinit();
    }, []);
    function loadScript() {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).scroll(function() {
            if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).scrollTop() > 281) {
                jquery__WEBPACK_IMPORTED_MODULE_4___default()(".positionSticky").addClass("fixed");
            } else {
                jquery__WEBPACK_IMPORTED_MODULE_4___default()(".positionSticky").removeClass("fixed");
            }
        });
    }
    async function AfterWalletConnected() {
        var currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_11__/* .getCurAddr */ .my)();
        if (currAddr && currAddr != null && currAddr != undefined && currAddr != "") {
            Set_Loaderstatus(true);
        }
        await getactivity("sales");
        await getactivity("like");
        await getactivity("purchase");
        await getactivity("bidrequest");
        await getactivity("following");
        await getactivity("burn");
        await getactivity("listings");
        await getactivity("Creation");
    }
    async function getinit() {}
    async function getactivity(type) {
        var list = "";
        var currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_11__/* .getCurAddr */ .my)();
        var data = {
            type: type,
            address: currAddr
        };
        list = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_11__/* .getActivity */ .K3)(data);
        if (type == "like") {
            if (list && list.data && list.data.list && list.data.list.length > 0) {
                setlikelist(list.data.list);
            } else {
                setlikelist("");
            }
        } else if (type == "purchase") {
            if (list && list.data && list.data.list && list.data.list.length > 0) {
                setpurchaselist(list.data.list);
            } else {
                setpurchaselist("");
            }
        } else if (type == "bidrequest") {
            if (list && list.data && list.data.list && list.data.list.length > 0) {
                setofferlist(list.data.list);
            } else {
                setofferlist("");
            }
        } else if (type == "following") {
            if (list && list.data && list.data.list && list.data.list.length > 0) {
                setfollowinglist(list.data.list);
            } else {
                setfollowinglist("");
            }
        } else if (type == "burn") {
            if (list && list.data && list.data.list && list.data.list.length > 0) {
                setburnlist(list.data.list);
            } else {
                setburnlist("");
            }
        } else if (type == "listings") {
            if (list && list.data && list.data.list && list.data.list.length > 0) {
                setlistinglist(list.data.list);
            } else {
                setlistinglist("");
            }
        } else if (type == "Creation") {
            if (list && list.data && list.data.list && list.data.list.length > 0) {
                setmintlist(list.data.list);
            } else {
                setmintlist("");
            }
        }
    }
    async function selectchange(val) {
        setselected(val);
    }
    async function reset() {
        window.location.reload();
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "wrapper",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_12__.Helmet, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Nilwire - Activity"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ScrollToTopOnMount, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_pages___WEBPACK_IMPORTED_MODULE_2__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_5__["default"], {
                Set_UserAccountAddr: Set_UserAccountAddr,
                Set_UserAccountBal: Set_UserAccountBal,
                Set_WalletConnected: Set_WalletConnected,
                Set_AddressUserDetails: Set_AddressUserDetails,
                AddressUserDetails: AddressUserDetails,
                Set_Accounts: Set_Accounts,
                WalletConnected: WalletConnected,
                AfterWalletConnected: AfterWalletConnected
            }),
            Loaderstatus == false ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "loader_section_",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    children: [
                        "Please Connect Wallet To Proceed Further ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        " ",
                        !localStorage.getItem("nilwireMetamask") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Link, {
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
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "no-bottom no-top",
                id: "content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        id: "subheader",
                        className: "text-light",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "center-y relative text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-md-12 text-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                children: "Activity"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "clearfix"
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "activityPageSection pt30 pb30",
                        "aria-label": "section",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-8",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            class: "tab-content",
                                            id: "nav-tabContent",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    class: "tab-pane fade show active",
                                                    id: "nav-sales",
                                                    role: "tabpanel",
                                                    "aria-labelledby": "nav-sales-tab",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "activity-list",
                                                        children: purchaselist && purchaselist.length > 0 && purchaselist.map((item)=>{
                                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                className: "act_sale",
                                                                children: [
                                                                    item && item.tokendetails && item.tokendetails.image && item.tokendetails.image.split(".").pop() == "mp4" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                                        src: `${IPFS_IMGurl}/${item.ipfsimage}`,
                                                                        type: "video/mp4",
                                                                        alt: "Collections",
                                                                        controls: true,
                                                                        controlsList: "nodownload"
                                                                    }) : item && item.tokendetails && item.tokendetails.image && (item.tokendetails.image.split(".").pop() == "mp3" || item.tokendetails.image.split(".").pop() == "wav") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: __webpack_require__(1411),
                                                                        alt: "",
                                                                        style: {
                                                                            backgroundColor: "white"
                                                                        }
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: `${IPFS_IMGurl}/${item.ipfsimage}`,
                                                                        alt: "Collections"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "act_list_text",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                children: item.name
                                                                            }),
                                                                            "purchased by ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                href: "#",
                                                                                children: "You"
                                                                            }),
                                                                            " for",
                                                                            " ",
                                                                            item.price,
                                                                            " ETH",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "act_list_date",
                                                                                children: moment__WEBPACK_IMPORTED_MODULE_9___default()(item.timestamp).format("DD-MM-yyyy hh:mm")
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            });
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    class: "tab-pane fade",
                                                    id: "nav-likes",
                                                    role: "tabpanel",
                                                    "aria-labelledby": "nav-likes-tab",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "activity-list",
                                                        children: likelist && likelist.length > 0 && likelist.map((item)=>{
                                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                className: "act_like",
                                                                children: [
                                                                    item && item.tokendetails && item.tokendetails.image && item.tokendetails.image.split(".").pop() == "mp4" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                                        src: `${IPFS_IMGurl}/${item.ipfsimage}`,
                                                                        type: "video/mp4",
                                                                        alt: "Collections",
                                                                        controls: true,
                                                                        controlsList: "nodownload"
                                                                    }) : item && item.tokendetails && item.tokendetails.image && (item.tokendetails.image.split(".").pop() == "mp3" || item.tokendetails.image.split(".").pop() == "wav") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: __webpack_require__(1411),
                                                                        alt: "",
                                                                        style: {
                                                                            backgroundColor: "white"
                                                                        }
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: `${IPFS_IMGurl}/${item.ipfsimage}`,
                                                                        alt: "Collections"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "act_list_text",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                children: item.name
                                                                            }),
                                                                            "liked by ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                href: "#",
                                                                                children: "You"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "act_list_date",
                                                                                children: moment__WEBPACK_IMPORTED_MODULE_9___default()(item.timestamp).format("DD-MM-yyyy hh:mm")
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            });
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    class: "tab-pane fade",
                                                    id: "nav-offers",
                                                    role: "tabpanel",
                                                    "aria-labelledby": "nav-offers-tab",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "activity-list",
                                                        children: offerlist && offerlist.length > 0 && offerlist.map((item)=>{
                                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                className: "act_offer",
                                                                children: [
                                                                    item && item.tokendetails && item.tokendetails.image && item.tokendetails.image.split(".").pop() == "mp4" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                                        src: `${IPFS_IMGurl}/${item.ipfsimage}`,
                                                                        type: "video/mp4",
                                                                        alt: "Collections",
                                                                        controls: true,
                                                                        controlsList: "nodownload"
                                                                    }) : item && item.tokendetails && item.tokendetails.image && (item.tokendetails.image.split(".").pop() == "mp3" || item.tokendetails.image.split(".").pop() == "wav") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: __webpack_require__(1411),
                                                                        alt: "",
                                                                        style: {
                                                                            backgroundColor: "white"
                                                                        }
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: `${IPFS_IMGurl}/${item.ipfsimage}`,
                                                                        alt: "Collections"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "act_list_text",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                children: item.name
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                href: "#",
                                                                                children: "You"
                                                                            }),
                                                                            " offered ",
                                                                            item.price,
                                                                            " ETH",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "act_list_date",
                                                                                children: moment__WEBPACK_IMPORTED_MODULE_9___default()(item.timestamp).format("DD-MM-yyyy hh:mm")
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            });
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    class: "tab-pane fade",
                                                    id: "nav-followings",
                                                    role: "tabpanel",
                                                    "aria-labelledby": "nav-followings-tab",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "activity-list",
                                                        children: followinglist && followinglist.length > 0 && followinglist.map((item)=>{
                                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                className: "act_follow",
                                                                children: [
                                                                    item && item.touserdetail && item.touserdetail.image && item.touserdetail.image != "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        className: "lazy",
                                                                        src: `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Back_URL */ .Z.Back_URL}profile/${item.touserdetail.image}`,
                                                                        alt: ""
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        className: "lazy",
                                                                        src: `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Back_URL */ .Z.Back_URL}images/previewThumb.png`,
                                                                        alt: ""
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "act_list_text",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                children: item.touseraddress
                                                                            }),
                                                                            "you started following",
                                                                            " ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                href: "#",
                                                                                children: item.useraddress
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "act_list_date",
                                                                                children: moment__WEBPACK_IMPORTED_MODULE_9___default()(item.timestamp).format("DD-MM-yyyy hh:mm")
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            });
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    class: "tab-pane fade",
                                                    id: "nav-fire",
                                                    role: "tabpanel",
                                                    "aria-labelledby": "nav-fire-tab",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "activity-list",
                                                        children: burnlist && burnlist.length > 0 && burnlist.map((item)=>{
                                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                className: "act_burn",
                                                                children: [
                                                                    item && item.tokendetails && item.tokendetails.image && item.tokendetails.image.split(".").pop() == "mp4" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                                        src: `${IPFS_IMGurl}/${item.ipfsimage}`,
                                                                        type: "video/mp4",
                                                                        alt: "Collections",
                                                                        controls: true,
                                                                        controlsList: "nodownload"
                                                                    }) : item && item.tokendetails && item.tokendetails.image && (item.tokendetails.image.split(".").pop() == "mp3" || item.tokendetails.image.split(".").pop() == "wav") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: __webpack_require__(1411),
                                                                        alt: "",
                                                                        style: {
                                                                            backgroundColor: "white",
                                                                            borderRadius: "5px"
                                                                        }
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        style: {
                                                                            borderRadius: "5px"
                                                                        },
                                                                        src: `${IPFS_IMGurl}/${item.ipfsimage}`,
                                                                        alt: "Collections"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "act_list_text",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                children: item.name
                                                                            }),
                                                                            "Burned by ",
                                                                            item.useraddress,
                                                                            " for ",
                                                                            item.price,
                                                                            " ",
                                                                            "ETH",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "act_list_date",
                                                                                children: moment__WEBPACK_IMPORTED_MODULE_9___default()(item.timestamp).format("DD-MM-yyyy hh:mm")
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            });
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    class: "tab-pane fade",
                                                    id: "nav-list",
                                                    role: "tabpanel",
                                                    "aria-labelledby": "nav-list-tab",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "activity-list",
                                                        children: listinglist && listinglist.length > 0 && listinglist.map((item)=>{
                                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                className: "act_list",
                                                                children: [
                                                                    item && item.tokendetails && item.tokendetails.image && item.tokendetails.image.split(".").pop() == "mp4" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                                        src: `${IPFS_IMGurl}/${item.ipfsimage}`,
                                                                        type: "video/mp4",
                                                                        alt: "Collections",
                                                                        controls: true,
                                                                        controlsList: "nodownload"
                                                                    }) : item && item.tokendetails && item.tokendetails.image && (item.tokendetails.image.split(".").pop() == "mp3" || item.tokendetails.image.split(".").pop() == "wav") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: __webpack_require__(1411),
                                                                        alt: "",
                                                                        style: {
                                                                            backgroundColor: "white"
                                                                        }
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        style: {
                                                                            borderRadius: "5px"
                                                                        },
                                                                        src: `${IPFS_IMGurl}/${item.ipfsimage}`,
                                                                        alt: "Collections"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "act_list_text",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                children: item.name
                                                                            }),
                                                                            "Listed by ",
                                                                            item.useraddress,
                                                                            " for ",
                                                                            item.price,
                                                                            " ",
                                                                            "ETH",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "act_list_date",
                                                                                children: moment__WEBPACK_IMPORTED_MODULE_9___default()(item.timestamp).format("DD-MM-yyyy hh:mm")
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            });
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    class: "tab-pane fade",
                                                    id: "nav-create",
                                                    role: "tabpanel",
                                                    "aria-labelledby": "nav-create-tab",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "activity-list",
                                                        children: mintlist && mintlist.length > 0 && mintlist.map((item)=>{
                                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                className: "act_list",
                                                                children: [
                                                                    item && item.tokendetails && item.tokendetails.image && item.tokendetails.image.split(".").pop() == "mp4" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                                        src: `${IPFS_IMGurl}/${item.ipfsimage}`,
                                                                        type: "video/mp4",
                                                                        alt: "Collections",
                                                                        controls: true,
                                                                        controlsList: "nodownload"
                                                                    }) : item && item.tokendetails && item.tokendetails.image && (item.tokendetails.image.split(".").pop() == "mp3" || item.tokendetails.image.split(".").pop() == "wav") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: __webpack_require__(1411),
                                                                        alt: "",
                                                                        style: {
                                                                            backgroundColor: "white",
                                                                            borderRadius: "5px"
                                                                        }
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        style: {
                                                                            borderRadius: "5px"
                                                                        },
                                                                        src: `${IPFS_IMGurl}/${item.ipfsimage}`,
                                                                        alt: "Collections"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "act_list_text",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                children: item.name
                                                                            }),
                                                                            "Created by ",
                                                                            item.useraddress,
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "act_list_date",
                                                                                children: moment__WEBPACK_IMPORTED_MODULE_9___default()(item.timestamp).format("DD-MM-yyyy hh:mm")
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            });
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-4",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "positionSticky",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "spacer-half"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "clearfix"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        class: "nav nav-tabs nav-fill activity-filter",
                                                        id: "nav-tab",
                                                        role: "tablist",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                class: "filter_by_sales active",
                                                                id: "nav-sales-tab",
                                                                "data-toggle": "tab",
                                                                href: "#nav-sales",
                                                                role: "tab",
                                                                "aria-controls": "nav-sales",
                                                                "aria-selected": "true",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fa fa-shopping-basket"
                                                                    }),
                                                                    " Purchase"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                class: "filter_by_likes",
                                                                id: "nav-likes-tab",
                                                                "data-toggle": "tab",
                                                                href: "#nav-likes",
                                                                role: "tab",
                                                                "aria-controls": "nav-likes",
                                                                "aria-selected": "false",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fa fa-heart"
                                                                    }),
                                                                    " Likes"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                class: "filter_by_offers",
                                                                id: "nav-offers-tab",
                                                                "data-toggle": "tab",
                                                                href: "#nav-offers",
                                                                role: "tab",
                                                                "aria-controls": "nav-offers",
                                                                "aria-selected": "false",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fa fa-gavel"
                                                                    }),
                                                                    " Offers"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                class: "filter_by_followings",
                                                                id: "nav-followings-tab",
                                                                "data-toggle": "tab",
                                                                href: "#nav-followings",
                                                                role: "tab",
                                                                "aria-controls": "nav-followings",
                                                                "aria-selected": "false",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fa fa-check"
                                                                    }),
                                                                    " Followings"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                class: "filter_by_followings",
                                                                id: "nav-fire-tab",
                                                                "data-toggle": "tab",
                                                                href: "#nav-fire",
                                                                role: "tab",
                                                                "aria-controls": "nav-fire",
                                                                "aria-selected": "false",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fa fa-fire"
                                                                    }),
                                                                    " Burns"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                style: {
                                                                    maxHeight: "50px"
                                                                },
                                                                class: "filter_by_listings",
                                                                id: "nav-list-tab",
                                                                "data-toggle": "tab",
                                                                href: "#nav-list",
                                                                role: "tab",
                                                                "aria-controls": "nav-list",
                                                                "aria-selected": "false",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fa fa-list"
                                                                    }),
                                                                    " Listings"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                style: {
                                                                    maxHeight: "50px"
                                                                },
                                                                class: "filter_by_create",
                                                                id: "nav-create-tab",
                                                                "data-toggle": "tab",
                                                                href: "#nav-create",
                                                                role: "tab",
                                                                "aria-controls": "nav-create",
                                                                "aria-selected": "false",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fa fa-list"
                                                                    }),
                                                                    " Created"
                                                                ]
                                                            })
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
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