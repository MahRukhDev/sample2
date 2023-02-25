"use strict";
exports.id = 1816;
exports.ids = [1816];
exports.modules = {

/***/ 1816:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportNowRef": () => (/* binding */ ReportNowRef)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6679);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6103);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_5__]);
react_toastify__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"].toasterOption */ .Z.toasterOption;
const ReportNowRef = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const [description, setdescription] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [ValidateError, Set_ValidateError] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});
    const [itemId, Set_itemId] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [tokenCounts, Set_tokenCounts] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [reportBtn, Set_reportBtn] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    var { UserAccountAddr  } = props;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({
            async SubmitReport_Click (item) {
                if (item && item._id) {
                    Set_itemId(item._id);
                    Set_tokenCounts(item.tokenCounts);
                    window.$("#report_modal").modal("show");
                }
            }
        }));
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
            ValidateError.description = '"Message" is not allowed to be empty';
        }
        Set_ValidateError(ValidateError);
        return ValidateError;
    };
    async function submitReport() {
        var errors = await ReportValidation();
        var errorsSize = Object.keys(errors).length;
        if (errorsSize != 0) {
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error("Form validation error, please fill all the required fields", toasterOption);
            return false;
        }
        var reqData = {
            reportuser: UserAccountAddr,
            description: description,
            itemId: itemId,
            tokenCounts: tokenCounts,
            type: "collection"
        };
        Set_reportBtn(true);
        var response = await ReportRequest(reqData);
        if (response && response.status == "true") {
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success("Successfully submit your report", toasterOption);
            setdescription("");
            Set_reportBtn(false);
            window.$("#report_modal").modal("hide");
        } else {
            Set_reportBtn(false);
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error("Oops something went wrong.!", toasterOption);
        }
    }
    async function cancelReport() {
        setdescription("");
        window.$("#report").modal("hide");
        Set_ValidateError({});
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            class: "modal report primary_modal",
            id: "social",
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
                                    children: "Share link"
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
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "social_icons_section",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            class: "fab fa-facebook"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            class: "fab fa-twitter"
                                        })
                                    })
                                ]
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