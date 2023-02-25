"use strict";
exports.id = 702;
exports.ids = [702];
exports.modules = {

/***/ 702:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareNowRef": () => (/* binding */ ShareNowRef)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6679);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sharethis_reactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(889);
/* harmony import */ var sharethis_reactjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sharethis_reactjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6103);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_5__]);
react_toastify__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.configure();
var Front_URL = _lib_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"].Front_URL */ .Z.Front_URL;
const ShareNowRef = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const [ShareUrl, setShareUrl] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [Show, setShow] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({
            async ShareSocial_Click (item) {
                if (item && item._id) {
                    var url = Front_URL + "/item-details/" + item.tokenCounts;
                    setShareUrl(url);
                    window.$("#share_modal").modal("show");
                    setShow(true);
                }
            }
        }));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            class: "modal fade primary_modal",
            id: "share_modal",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "share_modalCenteredLabel",
            "aria-hidden": "true",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                class: "modal-dialog modal-dialog-centered modal",
                role: "document",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    class: "modal-content",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            class: "modal-header text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    class: "modal-title",
                                    id: "share_modalLabel",
                                    children: "Share link to this page"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    class: "close",
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
                            class: "modal-body",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "socila_model_new",
                                children: Show && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sharethis_reactjs__WEBPACK_IMPORTED_MODULE_3__.InlineShareButtons, {
                                    config: {
                                        alignment: "center",
                                        color: "social",
                                        enabled: true,
                                        font_size: 16,
                                        language: "en",
                                        networks: [
                                            "telegram",
                                            "facebook",
                                            "twitter",
                                            "instagram"
                                        ],
                                        padding: 12,
                                        radius: 4,
                                        show_total: false,
                                        size: 40,
                                        url: ShareUrl,
                                        image: "https://bit.ly/2CMhCMC",
                                        description: "Nilwire",
                                        title: "Nilwire",
                                        message: "Hi visit Nilwire NFT and buy Article what You want",
                                        subject: "Hi visit Nilwire NFT and buy Article what You want",
                                        username: "NilwireNFT"
                                    }
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;