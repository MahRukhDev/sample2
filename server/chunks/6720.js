"use strict";
exports.id = 6720;
exports.ids = [6720];
exports.modules = {

/***/ 6720:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Searchref)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_toastAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5184);
/* harmony import */ var _actions_v1_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3451);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7416);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6103);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_actions_toastAlert__WEBPACK_IMPORTED_MODULE_5__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_6__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_7__]);
([_actions_toastAlert__WEBPACK_IMPORTED_MODULE_5__, _actions_v1_token__WEBPACK_IMPORTED_MODULE_6__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/*eslint-disable*/ 

// react components for routing our app without refresh


// @material-ui/core components





const IPFS_IMGurl = _lib_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].IPFS_IMG */ .Z.IPFS_IMG;
function Searchref(props) {
    const colourStyles = {
        option: (styles, { data , isDisabled , isFocused , isSelected  })=>{
            return {
                ...styles,
                backgroundColor: isFocused ? "null" : null
            };
        }
    };
    const [searchstatus, setsearchstatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [itemList, setitemList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [userList, setuserList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [keylist, setkeylist] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [typelist, settypelist] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [Keyword, Set_Keyword] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [CategoryOption, setCategoryOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getInit();
    }, []);
    var { setTokenList , TokenList , aucttype , categoryid , categorysearch , startprice , endprice , typesearch , namesearch  } = props;
    async function getInit() {
        await GetCategoryCall();
    }
    async function GetCategoryCall() {
        var resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_6__/* .GetCategoryAction */ .MB)();
        if (resp && resp.data && resp.data.list) {
            var CategoryOption = [];
            resp.data.list.map((item)=>{
                CategoryOption.push({
                    name: "TokenCategory",
                    value: item._id,
                    label: item.category
                });
            });
            setCategoryOption(CategoryOption);
        }
        if (props.aucttype == "no") {
            var keyopt = [
                {
                    value: "buy",
                    label: "Buy now"
                },
                {
                    value: "auction",
                    label: "On auction"
                }
            ];
            setkeylist(keyopt);
        } else {
            var keyopt = [
                {
                    value: "auction",
                    label: "On auction"
                }
            ];
            setkeylist(keyopt);
        }
        var typelst = [
            // {
            //   value: "all",
            //   label: "All items",
            // },
            {
                value: "single",
                label: "Single item"
            },
            {
                value: "multiple",
                label: "Bundles"
            },
            {
                value: "recent",
                label: "Recently added"
            }
        ];
        settypelist(typelst);
    }
    const searchChange = async (e)=>{
        var value = e.target.value;
        props.setnamesearch(value);
    };
    async function closesearch() {
    //setsearchstatus(false)
    }
    const startchange = (e)=>{
        props.setstartprice(e.target.value);
    };
    const endchange = (e)=>{
        props.setendprice(e.target.value);
    };
    async function changeCategory(val) {
        props.setcategorysearch(val.label);
        props.setcategoryid(val.value);
    }
    async function keychange(val) {
        props.setkeysearch(val.value);
    }
    async function typechange(val) {
        props.settypesearch(val.value);
    }
    async function searchstart() {
        var currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_7__/* .getCurAddr */ .my)();
        var name = props.categorysearch;
        var mylimit = props && props.from && props.from == "liveact" ? 1000 : 12;
        var payload = {
            limit: mylimit,
            page: 1,
            currAddr: currAddr,
            CatName: props.categoryid,
            namesearch: props.namesearch,
            typesearch: props.typesearch,
            startprice: props.startprice,
            endprice: props.endprice,
            keysearch: props.keysearch,
            aucttype: props.aucttype,
            from: "Home"
        };
        var resp = await (0,_actions_v1_token__WEBPACK_IMPORTED_MODULE_6__/* .CollectiblesList_Home */ .W9)(payload);
        console.log(resp, "============collectiblelisthomehome");
        if (resp && resp.data && resp.data.from == "token-collectibles-list-home" && resp.data.list.length > 0) {
            props.setshowloadmore(false);
            props.setTokenList(resp.data.list);
            if (props && props.from && props.from == "liveact") {} else if (resp.data.list.length >= 12) {
                props.setshowsearchloadmore(true);
            } else {
                props.setshowsearchloadmore(false);
            }
        } else {
            if (props && props.from && props.from == "liveact") {} else if (resp.data.list.length >= 12) {
                props.setshowsearchloadmore(true);
            } else {
                props.setshowsearchloadmore(false);
            }
            props.setTokenList(resp.data.list);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        class: "col-lg-12",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "itemFilterTop",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        class: "items_filter",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                class: "row form-dark",
                                id: "form_quick_search",
                                name: "form_quick_search",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    class: "col text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            class: "form-control",
                                            id: "search",
                                            name: "search",
                                            onChange: searchChange,
                                            value: props.namesearch,
                                            placeholder: "search item here...",
                                            type: "text"
                                        }),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            onClick: ()=>searchstart(),
                                            id: "btn-submit",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                class: "fa fa-search bg-color-secondary"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "clearfix"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                id: "item_category",
                                class: "dropdown",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    id: "collection",
                                    onChange: changeCategory,
                                    options: CategoryOption,
                                    placeholder: "All categories",
                                    styles: colourStyles
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                id: "buy_category",
                                class: "dropdown",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    id: "list",
                                    onChange: keychange,
                                    options: keylist,
                                    placeholder: "All items",
                                    styles: colourStyles
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                id: "items_type",
                                class: "dropdown",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    id: "list",
                                    onChange: typechange,
                                    options: typelist,
                                    placeholder: "All items",
                                    styles: colourStyles
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                class: "btn btn-selector clas_bottons",
                                "data-toggle": "collapse",
                                href: "#collapseExample",
                                role: "button",
                                "aria-expanded": "false",
                                "aria-controls": "collapseExample",
                                children: "Price"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "btn btn-main btnGo",
                                onClick: ()=>searchstart(),
                                children: "Go"
                            })
                        ]
                    }),
                    props && props.from && props.from == "liveact" ? "" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "itemCount",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                TokenList.length,
                                " Items"
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                class: "collapse mb-3 mar-000_minus",
                id: "collapseExample",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "card card-body boredr",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "price_range",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: "Custom Range:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "input_section_price",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "number",
                                            onChange: startchange
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "ETH"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "-"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "input_section_price",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "number",
                                            onChange: endchange
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "ETH"
                                    })
                                ]
                            })
                        ]
                    })
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