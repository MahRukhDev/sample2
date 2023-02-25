"use strict";
exports.id = 2997;
exports.ids = [2997];
exports.modules = {

/***/ 4874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo-3.9ef3aa0a.png","height":65,"width":170,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPklEQVR42mP43fEr43f2T8ffGb88fmf9imX4veVX0O/+n06/An9F/3b9a8zw2+1H3h+Hrwrfo787fw/4YQQARi4frMo1mIcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 1411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/music.85a40e4a.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAnElEQVR42kWPTQrCMBCFxyC9gHiEzsKda92K2oU9hLqqboV0WaSFllJor5ncoR/0J4Ev703ekGTEWd0Iy9s48lbv1InPNRLWkslcvKGjqXa5vtaAbgMpYYHGNJzxJf6BGmHLoOdgR3jB/9ED2nDTRzBfqOAIT8IbqtDiM2HbUlzRH7ec8HsoIAUT/jJ9skEHhw/BMiaj4RNCnghjjl+nXz3gL5oRAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 3984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/splash_logo2.9ef3aa0a.png","height":65,"width":170,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPklEQVR42mP43fEr43f2T8ffGb88fmf9imX4veVX0O/+n06/An9F/3b9a8zw2+1H3h+Hrwrfo787fw/4YQQARi4frMo1mIcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 1268:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_v1_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3451);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7416);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6103);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_v1_token__WEBPACK_IMPORTED_MODULE_3__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_6__]);
([_actions_v1_token__WEBPACK_IMPORTED_MODULE_3__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].toasterOption */ .Z.toasterOption;
function Footer() {
    const [CategoryOption, setCategoryOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [ValidateError, setValidateError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        GetCategoryCall();
    }, []);
    async function GetCategoryCall() {
        var resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_3__/* .GetCategoryAction */ .MB)();
        if (resp && resp.data && resp.data.list) {
            var CategoryOption = [];
            resp.data.list.map((item)=>{
                CategoryOption.push({
                    value: item._id,
                    label: item.category
                });
            });
            setCategoryOption(CategoryOption);
        }
    }
    const inputChange = (e)=>{
        setEmail(e.target.value);
    };
    async function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    async function subscribe() {
        if (email && email != null && email != undefined && email != "") {
            try {
                let checking = await isValidEmail(email);
                if (checking) {
                    var payload = {
                        email: email
                    };
                    var resp = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_4__/* .Requestsubscribe */ .C5)(payload);
                    if (resp && resp.data && resp.data.message == "success") {
                        react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success("Newsletter sended successfully", toasterOption);
                    } else {
                        react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Already Subscribed the Newsletter", toasterOption);
                    }
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Please Enter Valid Email", toasterOption);
                }
            } catch (err) {}
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Please Enter Valid Email", toasterOption);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "mainFooter",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-md-3 col-sm-6 col-xs-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "footerAbout",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        to: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: __webpack_require__(4874),
                                            alt: "Nilwire"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mt-3",
                                        children: "Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital assets."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-md-3 col-sm-6 col-xs-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "Marketplace"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                    to: "/exclusive",
                                                    children: "All NFTs"
                                                })
                                            }),
                                            CategoryOption && CategoryOption.length > 0 && CategoryOption.map((option, i)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    value: option.value,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: _lib_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Front_URL */ .Z.Front_URL + "/exclusive?category=" + option.value,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: option.label
                                                        })
                                                    })
                                                });
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-md-3 col-sm-6 col-xs-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "Community"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                    to: "/about",
                                                    children: "About"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                    to: "/terms",
                                                    children: "Terms of service"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                    to: "/privacy",
                                                    children: "Privacy"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "mt-4",
                                        children: "Sponsored"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sponsorLogo",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: __webpack_require__(3984),
                                            alt: "Nilwire"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-md-3 col-sm-6 col-xs-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "widget",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "Newsletter"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Signup for our newsletter to get the latest news in your inbox."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                        action: "blank.php",
                                        className: "row form-dark",
                                        id: "form_subscribe",
                                        method: "post",
                                        name: "form_subscribe",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col text-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: "form-control",
                                                    id: "email",
                                                    name: "email",
                                                    autoComplete: "off",
                                                    onChange: inputChange,
                                                    placeholder: "enter your email",
                                                    type: "text"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                    to: "#",
                                                    id: "btn-subscribe",
                                                    onClick: ()=>subscribe(),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "arrow_right bg-color-secondary"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "clearfix"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "spacer-10"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                        children: "Your email is safe with us. We don't spam."
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "subfooter",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-md-12 px-0",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "de-flex",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "de-flex-col",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "copy",
                                            children: "\xa9 Copyright 2022 - Nilwire"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "de-flex-col",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "social-icons",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://www.instagram.com/nilwire.io/",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fab fa-instagram"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://www.facebook.com/nilwire",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa fa-facebook-f fa-lg"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://twitter.com/NILWIRE2022",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa fa-twitter fa-lg"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://discord.gg/",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fab fa-discord"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6679);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6103);
/* harmony import */ var _ABI_ESC_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30);
/* harmony import */ var _ABI_WBNB_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4164);
/* harmony import */ var _actions_v1_token__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3451);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3590);
/* harmony import */ var _helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2213);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_v1_token__WEBPACK_IMPORTED_MODULE_9__, react_toastify__WEBPACK_IMPORTED_MODULE_10__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__]);
([_actions_v1_token__WEBPACK_IMPORTED_MODULE_9__, react_toastify__WEBPACK_IMPORTED_MODULE_10__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const IPFS_IMGurl = _lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].IPFS_IMG */ .Z.IPFS_IMG;
react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].toasterOption */ .Z.toasterOption;
function Header() {
    const [accounts, setAccounts] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();
    const [balance, setBalance] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();
    const [searchstatus, setsearchstatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [itemList, setitemList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [userList, setuserList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [Keyword, Set_Keyword] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [TokenBalanceWBNB, Set_TokenBalanceWBNB] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [TokenBalanceESC, Set_TokenBalanceEsc] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [TokenBalance, Set_TokenBalance] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadScript();
        getConnect();
    }, []);
    function loadScript() {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()(".navbarToggler").on("click", function(e) {
            jquery__WEBPACK_IMPORTED_MODULE_3___default()(".navbarRight").toggleClass("openMenu"); //you can list several class names
            jquery__WEBPACK_IMPORTED_MODULE_3___default()(".navbarToggler").toggleClass("active");
            e.preventDefault();
        });
    }
    async function disconnect() {
        localStorage.clear();
        localStorage.removeItem("nilwireMetamask");
        localStorage.removeItem("nilwireMetamaskAddr");
        window.location.reload(false);
    }
    const searchChange = async (e)=>{
        var value = e.target.value;
        if (value && value !== "" && value.trim() !== "" && value != null && value !== undefined) {
            Set_Keyword(value);
            if (value.length > 1) {
                var response = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_9__/* .headerSearch */ .bH)({
                    search: value
                });
                if (response && response.data && response.data.result) {
                    setitemList(response.data.result);
                    setsearchstatus(true);
                }
                if (response && response.data && response.data.userList) {
                    setuserList(response.data.userList);
                    setsearchstatus(true);
                }
            }
        } else {
            setitemList([]);
            setuserList([]);
            Set_Keyword("");
            setsearchstatus(false);
        }
    };
    async function getConnect() {
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_11__/* .getmylog */ .I)();
        try {
            const web3 = new (web3__WEBPACK_IMPORTED_MODULE_4___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider !== undefined && mydata.provider !== "" ? mydata.provider : window.ethereum);
            // var web3 = new Web3(window.ethereum);
            try {
                //if (typeof web3 !== "undefined") {
                // window.ethereum.enable().then(async function () {
                // if (
                //   window.web3.currentProvider.networkVersion ==
                //   config.networkVersion
                // ) {
                // if (window.web3.currentProvider.isMetaMask === true) {
                await web3.eth.getAccounts(async function(error, result) {
                    setAccounts(result[0].toLowerCase());
                    var val = await web3.eth.getBalance(result[0].toLowerCase());
                    var balance = val / 1000000000000000000;
                    setBalance(balance);
                    // var ESCContract = new web3.eth.Contract(ESC_ABI, config.esctokenAddr);
                    // var tokenBal = await ESCContract.methods
                    //   .balanceOf(result[0].toLowerCase())
                    //   .call();
                    // var tokenBalance = tokenBal / config.decimalvalues;
                    // Set_TokenBalanceEsc(tokenBalance.toFixed(config.toFixed));
                    // var CoursetroContract = new web3.eth.Contract(
                    //   WBNB_ABI,
                    //   config.tokenAddress
                    // );
                    // var tokenBal1 = await CoursetroContract.methods
                    //   .balanceOf(result[0].toLowerCase())
                    //   .call();
                    // var tokenBalance1 = tokenBal1 / config.decimalvalues;
                    // Set_TokenBalanceWBNB(tokenBalance1.toFixed(config.toFixed));
                    var curAddr = await web3.eth.getAccounts();
                    var currAddr = curAddr && curAddr[0].toLowerCase();
                    var WBNBContract = new web3.eth.Contract(_ABI_WBNB_json__WEBPACK_IMPORTED_MODULE_8__, _lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].tokenAddress */ .Z.tokenAddress);
                    //var currAddr = window.web3.eth.defaultAccount;
                    var decimal = await WBNBContract.methods.decimals().call();
                    var tokenBal = await WBNBContract.methods.balanceOf(currAddr).call();
                    var tokenBalance = tokenBal / _lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].decimalvalues */ .Z.decimalvalues;
                    Set_TokenBalance(tokenBalance.toFixed(_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].toFixed */ .Z.toFixed));
                });
            //}
            // }
            // });
            //}
            } catch (err) {}
        } catch (err) {}
    }
    async function copyToClipboard(e) {
        var textField = document.createElement("textarea");
        textField.innerText = accounts;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
        react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success("Copied Successfully", toasterOption);
    }
    const [isTop, setIsTop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("top");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", ()=>{
            let activeClass = "normal";
            if (window.scrollY === 0) {
                activeClass = "top";
            }
            setIsTop(activeClass);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: isTop == "normal" ? "transparent Scroll down header_area" : "transparent Scroll up header_area",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
            className: "navbar navbar-expand-lg fixed-top py-0 mainMenu",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "logo",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                            to: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: __webpack_require__(4874),
                                alt: "Nilwire"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mobileHeadRight",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                to: "/connect-wallet",
                                class: "btn-main",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        class: "icon_wallet_alt"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Connect Wallet"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "navbarToggler",
                                type: "button",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    id: "menu-btn",
                                    className: "ml-0"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "navbarRight",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "navbar-nav",
                                id: "mainmenu",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                            to: "/about",
                                            children: "About"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "dropdown has-child",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                to: "#",
                                                className: "dropdown-toggle",
                                                "data-toggle": "dropdown",
                                                children: [
                                                    "Market Place",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "mobile Arrow"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "dropdown-menu",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                            to: "/exclusive",
                                                            children: "Items"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                            to: "/browse",
                                                            children: "collections"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "dropdown has-child",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                to: "#",
                                                className: "dropdown-toggle",
                                                id: "dropdownMenuLink",
                                                "data-toggle": "dropdown",
                                                children: [
                                                    "My profile",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "mobile arrow"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "dropdown-menu",
                                                "aria-labelledby": "dropdownMenuLink",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                            to: "/edit-profile",
                                                            children: "Edit profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                            to: "/mycollections",
                                                            children: "My collections"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "/mynfts",
                                                            children: "My NFTs"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                            to: "/myfavorites",
                                                            children: "Favorite NFTs"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                            to: "/activity",
                                                            children: "Activity"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "createLink-for-mobile",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                            to: "/create",
                                            children: "Create"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                className: "form-inline search_inp_form ml-auto",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        id: "quick_search",
                                        name: "quick_search",
                                        value: Keyword,
                                        autoComplete: "off",
                                        onChange: searchChange,
                                        placeholder: "Search item or user"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: searchstatus ? "card_search_result" : "card_search_result_hide",
                                        children: [
                                            searchstatus && itemList && itemList.length > 0 && itemList.map((item)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "search_item",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: _lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Front_URL */ .Z.Front_URL + "/item-details/" + item.tokenCounts,
                                                        children: [
                                                            item.image.split(".").pop() == "mp4" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                                src: `${IPFS_IMGurl}/${item.ipfsimage}`,
                                                                type: "video/mp4",
                                                                alt: "Collections",
                                                                className: "img-fluid"
                                                            }) : item.image.split(".").pop() == "mp3" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: __webpack_require__(1411),
                                                                alt: "",
                                                                className: "img-fluid",
                                                                style: {
                                                                    backgroundColor: "white"
                                                                }
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `${IPFS_IMGurl}/${item.ipfsimage}`,
                                                                alt: "Collections",
                                                                className: "img-fluid "
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    className: "title_search",
                                                                    children: item.tokenName
                                                                })
                                                            })
                                                        ]
                                                    })
                                                });
                                            }),
                                            userList && userList.length > 0 && userList.map((item)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "search_item",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: item && item.name && item.name != null && item.name !== undefined && item.name !== "" ? `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Front_URL */ .Z.Front_URL}/user/${item.name}` : `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Front_URL */ .Z.Front_URL}/user/${item.curraddress}`,
                                                        children: [
                                                            item && item.image !== undefined && item.image != null && item.image !== "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].baseurl */ .Z.baseurl}/profile/${item.image}`,
                                                                alt: "Collections",
                                                                className: "img-fluid"
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `${_lib_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].baseurl */ .Z.baseurl}/images/previewThumb.png`,
                                                                alt: "Collections",
                                                                className: "img-fluid"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    className: "title_search",
                                                                    children: item.name
                                                                })
                                                            })
                                                        ]
                                                    })
                                                });
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "menu_side_area",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        to: "/create",
                                        className: "btn-main",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "icon_wallet_alt"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Create"
                                            })
                                        ]
                                    }),
                                    !localStorage.getItem("nilwireMetamask") ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        to: "/connect-wallet",
                                        className: "btn-main",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "icon_wallet_alt"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Connect wallet"
                                            })
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        id: "mainmenu",
                                        className: "walletAddressDropMain mb-0 pl-0",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "dropdown has-child",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                    to: "/",
                                                    className: "btn-main afterWallletIcon dropdown-toggle",
                                                    "data-toggle": "dropdown",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "icon_wallet_alt"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "ml-2",
                                                            children: "Wallet"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "dropdown-menu",
                                                    "aria-labelledby": "dropdownMenuLink",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            class: "walletDropdown",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    class: "d-flex align-items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            class: "wallet_address",
                                                                            children: accounts
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            class: "MuiSvgIcon-root ml-2 wllet_copy_icon",
                                                                            focusable: "false",
                                                                            viewBox: "0 0 24 24",
                                                                            "aria-hidden": "true",
                                                                            onClick: copyToClipboard,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    class: "wallet_balance",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                            children: "Balance"
                                                                        }),
                                                                        balance && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                            children: [
                                                                                balance.toFixed(8),
                                                                                " ETH"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                            children: [
                                                                                TokenBalance ? TokenBalance : 0,
                                                                                " WETH"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                                to: "/",
                                                                onClick: ()=>disconnect(),
                                                                children: "Disconnect"
                                                            })
                                                        })
                                                    ]
                                                })
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
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;