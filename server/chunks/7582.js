exports.id = 7582;
exports.ids = [7582];
exports.modules = {

/***/ 7582:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditProfile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1662);
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1268);
/* harmony import */ var _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(471);
/* harmony import */ var _assets_images_background_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1974);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3365);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6679);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6103);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9648);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3590);
/* harmony import */ var react_phone_number_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8680);
/* harmony import */ var react_phone_number_input_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(483);
/* harmony import */ var react_phone_number_input_style_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_phone_number_input_style_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _actions_toastAlert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5184);
/* harmony import */ var _helper_walletconnect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2213);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9041);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _actions_v1_user__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7416);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header_js__WEBPACK_IMPORTED_MODULE_2__, _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__, _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_11__, react_toastify__WEBPACK_IMPORTED_MODULE_12__, react_phone_number_input__WEBPACK_IMPORTED_MODULE_13__, _actions_toastAlert__WEBPACK_IMPORTED_MODULE_15__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_16__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_20__]);
([_components_Header_js__WEBPACK_IMPORTED_MODULE_2__, _components_Footer_js__WEBPACK_IMPORTED_MODULE_3__, _separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_11__, react_toastify__WEBPACK_IMPORTED_MODULE_12__, react_phone_number_input__WEBPACK_IMPORTED_MODULE_13__, _actions_toastAlert__WEBPACK_IMPORTED_MODULE_15__, _helper_walletconnect__WEBPACK_IMPORTED_MODULE_16__, _actions_v1_user__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].toasterOption */ .Z.toasterOption;
// Scroll to Top
function ScrollToTopOnMount() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.scrollTo(0, 0);
    }, []);
    return null;
}
function EditProfile() {
    const [UserAccountAddr, Set_UserAccountAddr] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [AddressUserDetails, Set_AddressUserDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [Accounts, Set_Accounts] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [UserAccountBal, Set_UserAccountBal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [WalletConnected, Set_WalletConnected] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("false");
    const [TokenFile, setTokenFile] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [TokenFilePreReader1, setTokenFilePreReader1] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [TokenFilePreReader, setTokenFilePreReader] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [coverFilePreReader, setcoverFilePreReader] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    var imageUrl = _lib_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Back_URL */ .Z.Back_URL + "cover/5.jpg";
    const [TokenFilePreUrl, setTokenFilePreUrl] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(imageUrl);
    const [coverststate, setcoverstate] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("no");
    const [mobile, setphoneNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [email, setemail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [validateError, setValidateError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [emailstatus, setemailstatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("no");
    const [Loaderstatus, Set_Loaderstatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        AfterWalletConnected();
    }, []);
    async function AfterWalletConnected() {
        var currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_20__/* .getCurAddr */ .my)();
        // console.log(currAddr,"========fromedit")
        // if(currAddr && currAddr!=null && currAddr!=undefined && currAddr!=""){
        //   Set_Loaderstatus(true);
        //   try {
        //     var ReqData = { addr: currAddr };
        //     var Resp = await AddressUserDetails_GetOrSave_Action(ReqData);
        //     if (Resp && Resp.data && Resp.data.data) {
        //       setemail(Resp.data.data.User.email);
        //       setphoneNumber(Resp.data.data.User.mobile);
        //       setTokenFilePreUrl(
        //         config.Back_URL + "cover/" + Resp.data.data.User.coverimage
        //       );
        //     }
        //   } catch (err) {}
        // }else{
        // }
        if (currAddr && currAddr != null && currAddr != undefined && currAddr != "") {
            Set_Loaderstatus(true);
            try {
                var ReqData = {
                    addr: currAddr
                };
                var Resp = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_20__/* .AddressUserDetails_GetOrSave_Action */ .Et)(ReqData);
                if (Resp && Resp.data && Resp.data.data) {
                    console.log(Resp.data.data, "Resp.data.data");
                    setemail(Resp.data.data.User.email);
                    setphoneNumber(Resp.data.data.User.mobile);
                    console.log(Resp.data.data.User.coverimage, Resp.data.data.User.length, "======TokenFilePreUrlTokenFilePreUrl");
                    if (Resp.data.data.User && Resp.data.data.User.coverimage && Resp.data.data.User.coverimage != null && Resp.data.data.User.coverimage != undefined && Resp.data.data.User.coverimage != "") {
                        console.log(_lib_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Back_URL */ .Z.Back_URL + "cover/" + Resp.data.data.User.coverimage, "=====TokenFilePreUrlTokenFilePreUrl");
                        setTokenFilePreUrl(_lib_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Back_URL */ .Z.Back_URL + "cover/" + Resp.data.data.User.coverimage);
                        setcoverstate("yes");
                    } else {
                        setTokenFilePreUrl(_lib_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Back_URL */ .Z.Back_URL + "cover/" + 5 + ".jpg");
                        setcoverstate("yes");
                    }
                }
            } catch (err) {}
        }
    }
    const selectFileChange = async (e)=>{
        if (e.target && e.target.files) {
            var reader = new FileReader();
            var file = e.target.files[0];
            var fileName = file.name;
            var fileNameExt = fileName.substr(fileName.lastIndexOf(".") + 1);
            const fileSize = file.size / 1024 / 1024;
            console.log(reader, file, fileName, "fhejhbef");
            if (fileSize > 30) {
                react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("File size exceeds 30 MB", toasterOption);
                jquery__WEBPACK_IMPORTED_MODULE_7___default()("input[name='image']").val("");
                return false;
            } else {
                setTokenFile(file);
                var url = reader.readAsDataURL(file);
                reader.onloadend = (async function(e) {
                    if (reader.result) {
                        setTokenFilePreUrl(reader.result);
                    }
                }).bind(this);
                var currAddr = "";
                currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_20__/* .getCurAddr */ .my)();
                var formData = new FormData();
                if (file) {
                    formData.append("CoverImage", file);
                }
                formData.append("addr", currAddr);
                var Resp = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_20__/* .imageupdate */ .IO)(formData);
                if (Resp && Resp.data && Resp.data.data) {
                    (0,_actions_toastAlert__WEBPACK_IMPORTED_MODULE_15__/* .toastAlert */ .x)("success", "Cover Updated Successfully", "success");
                    setTimeout(()=>{
                        window.location.reload(false);
                    }, 1000);
                }
            }
        }
    };
    const selectprofileFileChange = async (e)=>{
        console.log(e.target, "ee");
        if (e.target && e.target.files) {
            var reader = new FileReader();
            var file = e.target.files[0];
            var fileName = file.name;
            var fileNameExt = fileName.substr(fileName.lastIndexOf(".") + 1);
            const fileSize = file.size / 1024 / 1024;
            if (fileSize > 10) {
                react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("File size exceeds 10 MB", toasterOption);
                jquery__WEBPACK_IMPORTED_MODULE_7___default()("input[name='image']").val("");
                return false;
            } else {
                setTokenFile(file);
                var url = reader.readAsDataURL(file);
                reader.onloadend = (async function(e) {
                    if (reader.result) {
                        setTokenFilePreReader(reader.result);
                    }
                }).bind(this);
            }
        }
    };
    const inputChange = (e)=>{
        if (typeof e.target.value != "undefined") {
            var value = e.target.value;
            //setemail(value)
            AddressUserDetails[e.target.name] = value;
            Set_AddressUserDetails(AddressUserDetails);
        } else {
        //setemail("")
        }
    };
    async function verifyemail() {
        function isValidEmail(email) {
            return /\S+@\S+\.\S+/.test(email);
        }
        if (isValidEmail(AddressUserDetails.email)) {
            // validateError.email = "Invalid Email";
            // toast.error("Invalid Email")
            var currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_20__/* .getCurAddr */ .my)();
            if (currAddr) {
                if (emailstatus == "pending" && AddressUserDetails.otp && AddressUserDetails.otp != null && AddressUserDetails.otp != undefined && AddressUserDetails.otp != "") {
                    var data = {
                        email: AddressUserDetails.email,
                        addr: currAddr,
                        otp: AddressUserDetails.otp
                    };
                    var Resp = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_20__/* .verifyotp */ .r)(data);
                    if (Resp && Resp.data && Resp.data.data && Resp.data.data.otpverified) {
                        setemailstatus("success");
                        AddressUserDetails["otpverified"] = Resp.data.data.otpverified;
                        Set_AddressUserDetails(AddressUserDetails);
                        window.location.reload();
                    }
                } else if (emailstatus == "no") {
                    var data = {
                        email: AddressUserDetails.email,
                        addr: currAddr
                    };
                    var Resp = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_20__/* .verifymail */ .aX)(data);
                    console.log("iminininverify", Resp);
                    if (Resp && Resp.data && Resp.data.data && Resp.data.data.email) {
                        AddressUserDetails["otpverified"] = Resp.data.data.otpverified;
                        setemailstatus("pending");
                        Set_AddressUserDetails(AddressUserDetails);
                    }
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Verify Email to Proceed Further", toasterOption);
                    return false;
                }
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Please Connect Wallet To Proceed Further", toasterOption);
            }
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Invalid Email", toasterOption);
        }
    }
    const Uservalidation = (chk)=>{
        if (chk) {
            var validateError = {};
            if (AddressUserDetails && AddressUserDetails.email == "" || AddressUserDetails.email == undefined) {
                validateError.email = "E-mail field is required";
            }
            function isValidEmail(email) {
                return /\S+@\S+\.\S+/.test(email);
            }
            if (!isValidEmail(AddressUserDetails.email)) {
                validateError.email = "Invalid Email";
            }
            // if(mobile==""||mobile==undefined){
            //   validateError.mobile = "Mobile number field is required";
            // }
            function isValidString(email) {
                return /[^a-zA-Z ]/g.test(email);
            }
            if (isValidString(AddressUserDetails.name)) {
                validateError.name = "Special Charactar & numbers not allowed";
            }
            if (AddressUserDetails.name == "" || AddressUserDetails.name == undefined) {
                validateError.name = "Name field is required";
            }
            function isValidLink(link) {
                return /\s/g.test(link);
            }
            if (isValidLink(AddressUserDetails.facebook)) {
                validateError.facebook = "Space not accepted link field";
            }
            if (isValidLink(AddressUserDetails.youtube)) {
                validateError.youtube = "Space not accepted link field";
            }
            if (isValidLink(AddressUserDetails.instagram)) {
                validateError.instagram = "Space not accepted link field";
            }
            if (isValidLink(AddressUserDetails.twitter)) {
                validateError.twitter = "Space not accepted link field";
            }
            if (isValidLink(AddressUserDetails.personalsite)) {
                validateError.personalsite = "Space not accepted link field";
            }
            setValidateError(validateError);
            return validateError;
        }
    };
    const FormSubmit = async ()=>{
        var mydata = await (0,_helper_walletconnect__WEBPACK_IMPORTED_MODULE_16__/* .getmylog */ .I)();
        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_8___default())(mydata && mydata.provider && mydata.provider != null && mydata.provider != undefined && mydata.provider != "" ? mydata.provider : window.ethereum);
        console.log("=====================adfter");
        var currAddr = await web3.eth.getAccounts();
        //var currAddr = await getCurAddr();
        if (currAddr) {
            var errors = await Uservalidation(true);
            console.log(errors, "--------------errors");
            var errorsSize = Object.keys(errors).length;
            if (errorsSize != 0) {
                console.log(errorsSize, "Wewr");
            } else {
                // if (AddressUserDetails.otpverified == true) {
                //var web3 = new Web3(window.ethereum);
                web3.eth.personal.sign(`Your profile is being updated`, currAddr[0].toLowerCase(), `Your profile is being updated`).then(async ()=>{
                    var formData = new FormData();
                    if (TokenFile) {
                        formData.append("Image", TokenFile);
                    }
                    formData.append("addr", currAddr[0].toLowerCase());
                    formData.append("name", AddressUserDetails.name ? AddressUserDetails.name : "");
                    formData.append("personalsite", AddressUserDetails.personalsite ? AddressUserDetails.personalsite : "");
                    formData.append("customurl", AddressUserDetails.customurl ? AddressUserDetails.customurl : "");
                    formData.append("email", AddressUserDetails.email ? AddressUserDetails.email : "");
                    formData.append("bio", AddressUserDetails.bio ? AddressUserDetails.bio : "");
                    formData.append("twitter", AddressUserDetails.twitter ? AddressUserDetails.twitter : "");
                    setphoneNumber(AddressUserDetails.mobile);
                    formData.append("youtube", AddressUserDetails.youtube ? AddressUserDetails.youtube : "");
                    formData.append("facebook", AddressUserDetails.facebook ? AddressUserDetails.facebook : "");
                    formData.append("instagram", AddressUserDetails.instagram ? AddressUserDetails.instagram : "");
                    formData.append("mobile", AddressUserDetails.mobile ? AddressUserDetails.mobile : "");
                    //formData.append('mobile', mobile);
                    var Resp = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_20__/* .UserProfile_Update_Action */ .DB)(formData);
                    if (Resp && Resp.data && Resp.data.toast && Resp.data.toast.type && Resp.data.toast.type == "success") {
                        window.location.reload(false);
                    } else {
                        react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error(Resp.data.toast.msg, toasterOption);
                    }
                });
            // } else if (
            //   emailstatus == "pending" &&
            //   AddressUserDetails.otp &&
            //   AddressUserDetails.otp != null &&
            //   AddressUserDetails.otp != undefined &&
            //   AddressUserDetails.otp != ""
            // ) {
            // } else if (emailstatus == "no") {
            //   var data = {
            //     email: AddressUserDetails.email,
            //     addr: currAddr,
            //   };
            //   var Resp = await verifymail(data);
            //   if (
            //     Resp &&
            //     Resp.data &&
            //     Resp.data.data &&
            //     Resp.data.data.secretcode
            //   ) {
            //     setemailstatus("pending");
            //   }
            // } else {
            //   toast.error("Verify Email to Proceed Further", toasterOption);
            //   return false;
            // }
            }
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Connect Your Wallet to Proceed Further", toasterOption);
        }
    };
    async function submitmail() {
        if (AddressUserDetails.email != "" && AddressUserDetails.email != undefined) {
            var currAddr = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_20__/* .getCurAddr */ .my)();
            var data = {
                email: AddressUserDetails.email,
                useraddress: currAddr
            };
            var Resp = await (0,_actions_v1_user__WEBPACK_IMPORTED_MODULE_20__/* .verificationuser */ .Mb)(data);
            if (Resp && Resp.result && Resp.result.message == "Updated Successfully") {
                react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success("Request Submitted Successfully", toasterOption);
            }
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error("Invalid Mail Id", toasterOption);
        }
    }
    var imageUrl = _lib_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Back_URL */ .Z.Back_URL + "cover/5.jpeg";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "wrapper",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_17__.Helmet, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Nilwire - Edit Profile"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ScrollToTopOnMount, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_separate_Connect_Wallet__WEBPACK_IMPORTED_MODULE_4__["default"], {
                Set_UserAccountAddr: Set_UserAccountAddr,
                Set_UserAccountBal: Set_UserAccountBal,
                Set_WalletConnected: Set_WalletConnected,
                Set_AddressUserDetails: Set_AddressUserDetails,
                AddressUserDetails: AddressUserDetails,
                Set_Accounts: Set_Accounts,
                WalletConnected: WalletConnected,
                AfterWalletConnected: AfterWalletConnected
            }),
            localStorage.getItem("nilwireMetamask") ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "no-bottom no-top",
                id: "content",
                children: [
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
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                        className: "editProfilePageSection pt30 pb30",
                        "aria-label": "section",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row wow fadeIn form-border",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-lg-7 offset-lg-1",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: "primary_label",
                                                children: [
                                                    "Upload profile photo ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-muted",
                                                        children: "(Optional)"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                class: "d-create-file",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        id: "file_name",
                                                        children: "PNG, JPG, GIF, WEBP. Max 10 MB."
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "uploadCustomFile",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "button",
                                                                id: "get_file",
                                                                class: "btn-main",
                                                                value: "Browse"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "file",
                                                                id: "photo",
                                                                required: "true",
                                                                name: "image",
                                                                class: "btn-main",
                                                                onChange: selectprofileFileChange
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                class: "spacer-single"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-row row",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: "primary_label",
                                                                htmlFor: "name",
                                                                children: [
                                                                    "Display name ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-muted",
                                                                        children: "(Required)"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                placeholder: "Enter your display name",
                                                                type: "text",
                                                                className: "form-control primary_inp",
                                                                name: "name",
                                                                id: "name",
                                                                onChange: inputChange,
                                                                defaultValue: AddressUserDetails.name
                                                            }),
                                                            validateError.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-danger",
                                                                children: validateError.name
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: "primary_label",
                                                                htmlFor: "desccription",
                                                                children: [
                                                                    "Custom URL ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-muted",
                                                                        children: "(Optional)"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "input-group",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        class: "input-group-prepend",
                                                                        children: `${_lib_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Front_URL */ .Z.Front_URL}/user/`
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "text",
                                                                        className: "form-control primary_inp mb-0",
                                                                        id: "customurl",
                                                                        name: "customurl",
                                                                        onChange: inputChange,
                                                                        defaultValue: AddressUserDetails && AddressUserDetails.customurl ? AddressUserDetails.customurl : ""
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-row row",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: "primary_label",
                                                                htmlFor: "name",
                                                                children: [
                                                                    "Personal site or portfolio link ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-muted",
                                                                        children: "(Optional)"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                className: "form-control primary_inp",
                                                                id: "personalsite",
                                                                name: "personalsite",
                                                                onChange: inputChange,
                                                                defaultValue: AddressUserDetails && AddressUserDetails.personalsite ? AddressUserDetails.personalsite : ""
                                                            }),
                                                            validateError.personalsite && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-danger",
                                                                children: validateError.personalsite
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: "primary_label",
                                                                htmlFor: "desccription",
                                                                children: [
                                                                    "Email ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-muted",
                                                                        children: "(Required)"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "input-group",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "text",
                                                                        className: "form-control primary_inp mb-0",
                                                                        id: "email",
                                                                        name: "email",
                                                                        onChange: inputChange,
                                                                        defaultValue: AddressUserDetails.email
                                                                    }),
                                                                    emailstatus != "success" && AddressUserDetails && !AddressUserDetails.otpverified ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "input-group-append px-0",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            type: "button",
                                                                            className: "btn-main m-0 px-3",
                                                                            onClick: ()=>verifyemail(),
                                                                            children: "Verify email"
                                                                        })
                                                                    }) : emailstatus != "success" && !AddressUserDetails && !AddressUserDetails.otpverified && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "input-group-append px-0",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            type: "button",
                                                                            className: "btn-main m-0 px-3",
                                                                            onClick: ()=>verifyemail(),
                                                                            children: "Verify email"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "input-group mt-3",
                                                                children: [
                                                                    emailstatus == "pending" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "text",
                                                                        className: "form-control primary_inp mb-0",
                                                                        id: "otp",
                                                                        name: "otp",
                                                                        onChange: inputChange
                                                                    }),
                                                                    emailstatus == "pending" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "input-group-append px-0",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            type: "button",
                                                                            className: "btn-main m-0 px-3",
                                                                            onClick: ()=>verifyemail(),
                                                                            children: "Verify OTP"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            validateError.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-danger",
                                                                children: validateError.email
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-row row",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: "primary_label",
                                                                htmlFor: "name",
                                                                children: [
                                                                    "Bio ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-muted",
                                                                        children: "(Optional)"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                class: "form-control primary_inp",
                                                                onChange: inputChange,
                                                                id: "bio",
                                                                name: "bio",
                                                                placeholder: "Tell us about yourself in brief",
                                                                rows: "3",
                                                                defaultValue: AddressUserDetails && AddressUserDetails.bio ? AddressUserDetails.bio : ""
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: "primary_label",
                                                                htmlFor: "name",
                                                                children: [
                                                                    "Mobile number ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-muted",
                                                                        children: "(Optional)"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                placeholder: "ex: +1 123-456-7890",
                                                                type: "number",
                                                                className: "form-control primary_inp",
                                                                id: "mobile",
                                                                name: "mobile",
                                                                onChange: inputChange,
                                                                defaultValue: AddressUserDetails && AddressUserDetails.mobile ? AddressUserDetails.mobile : ""
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "form-row row mt-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-group col-md-6",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                        children: [
                                                            "Social media links ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-muted",
                                                                children: "(Optional)"
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-row row",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                placeholder: "Twitter",
                                                                type: "text",
                                                                className: "form-control primary_inp",
                                                                id: "twitter",
                                                                name: "twitter",
                                                                onChange: inputChange,
                                                                defaultValue: AddressUserDetails && AddressUserDetails.twitter ? AddressUserDetails.twitter : ""
                                                            }),
                                                            validateError.twitter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-danger",
                                                                children: validateError.twitter
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                placeholder: "Youtube",
                                                                type: "text",
                                                                className: "form-control primary_inp",
                                                                id: "youtube",
                                                                name: "youtube",
                                                                onChange: inputChange,
                                                                defaultValue: AddressUserDetails && AddressUserDetails.youtube ? AddressUserDetails.youtube : ""
                                                            }),
                                                            validateError.youtube && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-danger",
                                                                children: validateError.youtube
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-row row",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                placeholder: "Facebook",
                                                                type: "text",
                                                                className: "form-control primary_inp",
                                                                id: "facebook",
                                                                name: "facebook",
                                                                onChange: inputChange,
                                                                defaultValue: AddressUserDetails && AddressUserDetails.facebook ? AddressUserDetails.facebook : ""
                                                            }),
                                                            validateError.facebook && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-danger",
                                                                children: validateError.facebook
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                placeholder: "Instagram",
                                                                type: "text",
                                                                className: "form-control primary_inp",
                                                                id: "instagram",
                                                                name: "instagram",
                                                                onChange: inputChange,
                                                                defaultValue: AddressUserDetails && AddressUserDetails.instagram ? AddressUserDetails.instagram : ""
                                                            }),
                                                            validateError.instagram && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-danger",
                                                                children: validateError.instagram
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-3",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "createPreview profileImgPreview",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: "primary_label",
                                                    children: "Profile image preview"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    class: "nft__item",
                                                    children: TokenFilePreReader != "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: TokenFilePreReader != "" ? TokenFilePreReader : __webpack_require__(4546),
                                                        id: "get_file_2",
                                                        class: "lazy nft__item_preview",
                                                        alt: ""
                                                    }) : AddressUserDetails && AddressUserDetails.image && AddressUserDetails.image != "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: _lib_config__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Back_URL */ .Z.Back_URL + "profile/" + AddressUserDetails.image,
                                                        id: "get_file_2",
                                                        class: "lazy nft__item_preview",
                                                        alt: ""
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: TokenFilePreReader != "" ? TokenFilePreReader : __webpack_require__(4546),
                                                        id: "get_file_2",
                                                        class: "lazy nft__item_preview",
                                                        alt: ""
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-11 offset-lg-1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-3 mb-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                onClick: ()=>FormSubmit(),
                                                className: "btn-main",
                                                children: "Update Profile"
                                            })
                                        })
                                    }),
                                    email != "" && email != undefined && mobile != "" && mobile != undefined && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-lg-11 offset-lg-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mb-0",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: "primary_label",
                                                    htmlFor: "desccription",
                                                    children: "Verification"
                                                })
                                            }),
                                            AddressUserDetails && AddressUserDetails.verificationstatus != "inprocess" && AddressUserDetails.emailverified != true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-0",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    onClick: ()=>submitmail(),
                                                    className: "btn-main",
                                                    children: "Request Verification"
                                                })
                                            }),
                                            AddressUserDetails && AddressUserDetails.emailverified == true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                className: "btn-main",
                                                children: "Verified"
                                            }),
                                            AddressUserDetails && AddressUserDetails.verificationstatus == "inprocess" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                className: "btn-main",
                                                children: "Verification Pending"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-muted mt-2",
                                                children: "Get your profile verified for more visibility and gain trust on our marketplace."
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "loader_section_",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    children: [
                        "Please Connect Wallet To Proceed Further ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        " ",
                        !localStorage.getItem("nilwireMetamask") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
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

/***/ }),

/***/ 483:
/***/ (() => {



/***/ })

};
;