(() => {
var exports = {};
exports.id = 2756;
exports.ids = [2756,6602,3380,7320,7458,4912];
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

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 8130:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");

/***/ }),

/***/ 8308:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 3365:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ 6679:
/***/ ((module) => {

"use strict";
module.exports = require("@metamask/legacy-web3");

/***/ }),

/***/ 4137:
/***/ ((module) => {

"use strict";
module.exports = require("@walletconnect/web3-provider");

/***/ }),

/***/ 2947:
/***/ ((module) => {

"use strict";
module.exports = require("jquery");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2791:
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet");

/***/ }),

/***/ 9041:
/***/ ((module) => {

"use strict";
module.exports = require("react-loading");

/***/ }),

/***/ 4661:
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8519:
/***/ ((module) => {

"use strict";
module.exports = require("web3");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 8680:
/***/ ((module) => {

"use strict";
module.exports = import("react-phone-number-input");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6103,4271,2213,30,4164,2997,471,1122,7582], () => (__webpack_exec__(7582)));
module.exports = __webpack_exports__;

})();