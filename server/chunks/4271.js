"use strict";
exports.id = 4271;
exports.ids = [4271];
exports.modules = {

/***/ 3451:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ah": () => (/* binding */ getwhitelist),
/* harmony export */   "Ay": () => (/* binding */ AddLikeAction),
/* harmony export */   "C9": () => (/* binding */ ipfsImageHashGet),
/* harmony export */   "DJ": () => (/* binding */ getapprove),
/* harmony export */   "EK": () => (/* binding */ getDetailsCollections),
/* harmony export */   "EU": () => (/* binding */ getterms),
/* harmony export */   "EY": () => (/* binding */ CollectiblesList),
/* harmony export */   "MB": () => (/* binding */ GetCategoryAction),
/* harmony export */   "MY": () => (/* binding */ GetLikeDataAction),
/* harmony export */   "Ni": () => (/* binding */ Collection_Create),
/* harmony export */   "Nn": () => (/* binding */ GetUserCollection),
/* harmony export */   "Pt": () => (/* binding */ TokenAddItemAction),
/* harmony export */   "Uj": () => (/* binding */ getowncollections),
/* harmony export */   "Um": () => (/* binding */ BidApply_ApproveAction),
/* harmony export */   "VO": () => (/* binding */ CreateTokenValidationAction),
/* harmony export */   "VX": () => (/* binding */ getreportcategory),
/* harmony export */   "W9": () => (/* binding */ CollectiblesList_Home),
/* harmony export */   "Wr": () => (/* binding */ getHotCollections),
/* harmony export */   "Ww": () => (/* binding */ CollectiblesList_Favorities),
/* harmony export */   "Xr": () => (/* binding */ PurchaseNow_Complete_Action),
/* harmony export */   "ZR": () => (/* binding */ CancelBid_Action),
/* harmony export */   "Zt": () => (/* binding */ getprivacy),
/* harmony export */   "aK": () => (/* binding */ addapprove),
/* harmony export */   "bH": () => (/* binding */ headerSearch),
/* harmony export */   "dO": () => (/* binding */ TokenAddOwnerAction),
/* harmony export */   "gt": () => (/* binding */ Collection_Validate),
/* harmony export */   "ip": () => (/* binding */ getbannercollection),
/* harmony export */   "jN": () => (/* binding */ getabout),
/* harmony export */   "j_": () => (/* binding */ MinMaxChange_update_Action),
/* harmony export */   "lE": () => (/* binding */ getallcollections),
/* harmony export */   "o8": () => (/* binding */ CollectiblesList_MyItems),
/* harmony export */   "oi": () => (/* binding */ ipfsmetadatafunciton),
/* harmony export */   "pQ": () => (/* binding */ TokenPriceChange_update_Action),
/* harmony export */   "py": () => (/* binding */ BurnField),
/* harmony export */   "t3": () => (/* binding */ GetCollections),
/* harmony export */   "u7": () => (/* binding */ TokenCounts_Get_Detail_Action),
/* harmony export */   "uO": () => (/* binding */ acceptBId_Action),
/* harmony export */   "vX": () => (/* binding */ getTopsellers),
/* harmony export */   "zl": () => (/* binding */ ReportRequest)
/* harmony export */ });
/* unused harmony exports ToastShow, getcmsdetails, getsettinglist, Bidding_Detail_Action, getBuyerSeller, TokenCount_Get_Action, CreateCollectionValidationAction, gettop3lsit, CollectiblesList_All, CollectiblesList_Follow, activityUpdate */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6103);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, react_toastify__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].toasterOption */ .Z.toasterOption;
const ToastShow = async (data)=>{
    if (data.toast && data.toast.type && data.toast.msg) {
        if (data.toast.type == "success") {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(data.toast.msg, toasterOption);
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(data.toast.msg, toasterOption);
        }
    }
};
const headerSearch = async (data)=>{
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/headerSearch`,
            data: data
        });
        return {
            loading: false,
            data: respData.data
        };
    } catch (err) {
        return {
            loading: false,
            error: err
        };
    }
};
const getreportcategory = async (payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/getreportcategory`,
            data: payload
        });
        ToastShow(Resp.data);
        return {
            data: Resp.data
        };
    } catch (err) {}
};
const addapprove = async (data)=>{
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/addapprove`,
            data: data
        });
        return {
            loading: false,
            data: respData.data
        };
    } catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        };
    }
};
const getapprove = async (data)=>{
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/getapprove`,
            data: data
        });
        return {
            loading: false,
            data: respData
        };
    } catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        };
    }
};
const GetCollections = async (data)=>{
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/collection/GetCollections`,
            data: data
        });
        return {
            loading: false,
            data: respData.data
        };
    } catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        };
    }
};
const getDetailsCollections = async (data)=>{
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/collection/getDetailsCollections`,
            data: data
        });
        return {
            loading: false,
            data: respData.data
        };
    } catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        };
    }
};
const getTopsellers = async (data)=>{
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/collection/getTopsellers`,
            data: data
        });
        return {
            loading: false,
            data: respData.data
        };
    } catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        };
    }
};
const GetUserCollection = async (data)=>{
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/collection/GetUserCollection`,
            data: data
        });
        return {
            loading: false,
            data: respData.data
        };
    } catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        };
    }
};
const getHotCollections = async (data)=>{
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/collection/getHotCollections`,
            data: data
        });
        return {
            loading: false,
            data: respData.data
        };
    } catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        };
    }
};
const getterms = async (data)=>{
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Back_URL */ .Z.Back_URL}api/token/getterms`,
            data
        });
        return {
            loading: true,
            result: respData
        };
    } catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        };
    }
};
const getabout = async (data)=>{
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Back_URL */ .Z.Back_URL}api/token/getabout`,
            data
        });
        return {
            loading: true,
            result: respData
        };
    } catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        };
    }
};
const getprivacy = async (data)=>{
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Back_URL */ .Z.Back_URL}api/token/getprivacy`,
            data
        });
        return {
            loading: true,
            result: respData
        };
    } catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        };
    }
};
const Collection_Create = async (Payload)=>{
    var bodyFormData = new FormData();
    bodyFormData.append("useraddress", Payload.useraddress);
    bodyFormData.append("newcontract", Payload.newcontract);
    bodyFormData.append("collectionname", Payload.collectionname);
    bodyFormData.append("collectionsymbol", Payload.collectionsymbol);
    bodyFormData.append("collectiondescription", Payload.collectiondescription);
    bodyFormData.append("imageUser", Payload.imageUser);
    bodyFormData.append("type", Payload.type);
    bodyFormData.append("url", Payload.url);
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/collection/create`,
            data: bodyFormData
        });
        return {
            data: respData.data
        };
    } catch (err) {
        return {
            error: err.response.data
        };
    }
};
const Collection_Validate = async (Payload)=>{
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/collection/validate`,
            data: Payload
        });
        return {
            error: respData.errors,
            status: respData.status
        };
    } catch (err) {
        return {
            error: err.response.data
        };
    }
};
const getcmsdetails = async (data)=>{
    try {
        let respData = await axios({
            method: "get",
            url: `${config.vUrl}/token/getcmsdetails`
        });
        return {
            loading: false,
            result: respData.data
        };
    } catch (err) {
        return {
            loading: false,
            error: err
        };
    }
};
const getowncollections = async (payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/getmycollection`,
            data: payload
        });
        ToastShow(Resp.data);
        return {
            data: Resp.data
        };
    } catch (err) {}
};
const getallcollections = async (payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/getlistcollection`,
            data: payload
        });
        ToastShow(Resp.data);
        return {
            data: Resp.data
        };
    } catch (err) {}
};
const CancelBid_Action = async (payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/bid/cancel`,
            data: payload
        });
        ToastShow(Resp.data);
        return {
            data: Resp.data
        };
    } catch (err) {}
};
const acceptBId_Action = async (payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/bid/accept`,
            data: payload
        });
        ToastShow(Resp.data);
        return {
            data: Resp.data
        };
    } catch (err) {}
};
const getbannercollection = async (data)=>{
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "get",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/gettopcollections`,
            headers: {
                Authorization: localStorage.admin_token
            }
        });
        return {
            loading: false,
            result: respData.data
        };
    } catch (err) {
        var sendErr = "";
        if (err) {
            sendErr = err;
            if (err.response) {
                sendErr = err.response;
                if (err.response.data) {
                    sendErr = err.response.data;
                    if (err.response.data.errors) {
                        sendErr = err.response.data.errors;
                    }
                }
            }
        }
        return {
            loading: false,
            error: sendErr
        };
    }
};
const getsettinglist = async (data)=>{
    try {
        let respData = await axios({
            method: "get",
            url: `${config.Back_URL}v2/getsettings`,
            headers: {
                Authorization: localStorage.admin_token
            },
            data
        });
        return {
            loading: false,
            result: respData.data
        };
    } catch (err) {
        var sendErr = "";
        if (err) {
            sendErr = err;
            if (err.response) {
                sendErr = err.response;
                if (err.response.data) {
                    sendErr = err.response.data;
                    if (err.response.data.errors) {
                        sendErr = err.response.data.errors;
                    }
                }
            }
        }
        return {
            loading: false,
            error: sendErr
        };
    }
};
const Bidding_Detail_Action = async (payload)=>{
    try {
        let Resp = await axios({
            method: "post",
            url: `${config.vUrl}/token/bid/bidtotalamount`,
            data: payload
        });
        ToastShow(Resp.data);
        return {
            data: Resp.data
        };
    } catch (err) {}
};
const BidApply_ApproveAction = async (payload)=>{
    try {
        let resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/bid/apply`,
            data: payload
        });
        return {
            data: resp.data
        };
    } catch (err) {}
};
const ReportRequest = async (data)=>{
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/submit-report`,
            data: data
        });
        return {
            loading: false,
            status: respData.data.status
        };
    } catch (err) {
        return {
            loading: false,
            error: err
        };
    }
};
const getwhitelist = async (payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/getwhitelist`,
            data: payload
        });
        ToastShow(Resp.data);
        return {
            data: Resp.data
        };
    } catch (err) {}
};
const TokenCounts_Get_Detail_Action = async (payload)=>{
    try {
        let resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/tokenCounts`,
            data: payload
        });
        return {
            data: resp.data
        };
    } catch (err) {}
};
const getBuyerSeller = async (data)=>{
    try {
        let resp = await axios({
            method: "post",
            url: `${config.vUrl}/token/getBuyerSeller`,
            data: data
        });
        return {
            data: resp.data
        };
    } catch (err) {}
};
const PurchaseNow_Complete_Action = async (payload)=>{
    try {
        let resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/purchase/complete`,
            data: payload
        });
        return {
            data: resp.data
        };
    } catch (err) {}
};
const MinMaxChange_update_Action = async (payload)=>{
    try {
        let resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/minmax/change`,
            data: payload
        });
        return {
            data: resp.data
        };
    } catch (err) {}
};
const TokenPriceChange_update_Action = async (payload)=>{
    try {
        let resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/price/change`,
            data: payload
        });
        return {
            data: resp.data
        };
    } catch (err) {}
};
const TokenCount_Get_Action = async (payload)=>{
    try {
        let resp = await axios({
            method: "get",
            url: `${config.vUrl}/token/count/get`,
            data: payload
        });
        return {
            data: resp.data
        };
    } catch (err) {}
};
const TokenAddItemAction = async (payload)=>{
    try {
        var formData = new FormData();
        if (payload.Image) {
            formData.append("Image", payload.Image);
        }
        if (payload.position) {
            formData.append("position", payload.position);
        }
        if (payload.ipfsimage) {
            formData.append("ipfshash", payload.ipfsimage);
        }
        if (payload.Name) {
            formData.append("Name", payload.Name);
        }
        if (payload.Count) {
            formData.append("Count", payload.Count);
        }
        if (payload.Description) {
            formData.append("Description", payload.Description);
        }
        if (payload.Price) {
            formData.append("Price", payload.Price);
        }
        if (payload.MaximumBid) {
            formData.append("MaximumBid", payload.MaximumBid);
        }
        if (payload.TokenPrice) {
            formData.append("TokenPrice", payload.TokenPrice);
        }
        if (payload.Royalities) {
            formData.append("Royalities", payload.Royalities);
        }
        if (payload.Category_label) {
            formData.append("Category_label", payload.Category_label);
        }
        if (payload.Bid) {
            formData.append("Bid", payload.Bid);
        }
        if (payload.Properties) {
            formData.append("Properties", payload.Properties);
        }
        if (payload.Owner) {
            formData.append("Owner", payload.Owner);
        }
        if (payload.Creator) {
            formData.append("Creator", payload.Creator);
        }
        if (payload.CategoryId) {
            formData.append("CategoryId", payload.CategoryId);
        }
        if (payload.Quantity) {
            formData.append("Quantity", payload.Quantity);
        }
        if (payload.Balance) {
            formData.append("Balance", payload.Balance);
        }
        if (payload.ContractAddress) {
            formData.append("ContractAddress", payload.ContractAddress);
        }
        if (payload.Status) {
            formData.append("Status", payload.Status);
        }
        if (payload.HashValue) {
            formData.append("HashValue", payload.HashValue);
        }
        if (payload.Type) {
            formData.append("Type", payload.Type);
        }
        if (payload.MinimumBid) {
            formData.append("MinimumBid", payload.MinimumBid);
        }
        if (payload.EndClocktime) {
            formData.append("EndClocktime", payload.EndClocktime);
        }
        if (payload.Clocktime) {
            formData.append("Clocktime", payload.Clocktime);
        }
        if (payload.UnLockcontent) {
            formData.append("UnLockcontent", payload.UnLockcontent);
        }
        if (payload.PutOnSale) {
            formData.append("PutOnSale", payload.PutOnSale);
        }
        if (payload.PutOnSaleType) {
            formData.append("PutOnSaleType", payload.PutOnSaleType);
        }
        if (payload.currencyName) {
            formData.append("currencyName", payload.currencyName);
        }
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/add/item`,
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: formData
        });
        return {
            data: respData.data
        };
    } catch (err) {
        return {
            error: err
        };
    }
};
const TokenAddOwnerAction = async (payload)=>{
    try {
        var SendData = {};
        if (payload.Count) {
            SendData.Count = payload.Count;
        }
        if (payload.Price) {
            SendData.Price = payload.Price;
        }
        if (payload.TokenPrice) {
            SendData.TokenPrice = payload.TokenPrice;
        }
        if (payload.Owner) {
            SendData.Owner = payload.Owner;
        }
        if (payload.Balance) {
            SendData.Balance = payload.Balance;
        }
        if (payload.Quantity) {
            SendData.Quantity = payload.Quantity;
        }
        if (payload.ContractAddress) {
            SendData.ContractAddress = payload.ContractAddress;
        }
        if (payload.Type) {
            SendData.Type = payload.Type;
        }
        if (payload.HashValue) {
            SendData.HashValue = payload.HashValue;
        }
        if (payload.biddingtoken) {
            SendData.biddingtoken = payload.biddingtoken;
        }
        if (payload.Status) {
            SendData.Status = payload.Status;
        }
        if (payload.currencyName) {
            SendData.currencyName = payload.currencyName;
        }
        let resp1Data = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/add/owner`,
            data: SendData
        });
        return {
            data: resp1Data.data
        };
    } catch (err) {
        return {
        };
    }
};
const CreateTokenValidationAction = async (payload)=>{
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/add/item/validation`,
            data: payload
        });
        return {
            data: respData.data
        };
    } catch (err) {}
};
const CreateCollectionValidationAction = async (payload)=>{
    try {
        let respData = await axios({
            method: "post",
            url: `${config.vUrl}/token/add/collectionitem/validation`,
            data: payload
        });
        return {
            data: respData.data
        };
    } catch (err) {}
};
const gettop3lsit = async ()=>{
    try {
        let respData = await axios({
            method: "get",
            url: `${config.vUrl}/token/token/top3list`
        });
        return {
            data: respData.data
        };
    } catch (err) {}
};
const GetCategoryAction = async (payload)=>{
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "get",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/category/list`,
            data: payload
        });
        return {
            data: respData.data
        };
    } catch (err) {}
};
const GetLikeDataAction = async (payload)=>{
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/like/list`,
            data: payload
        });
        return {
            data: respData.data
        };
    } catch (err) {}
};
const AddLikeAction = async (payload)=>{
    try {
        let resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/like`,
            data: payload
        });
        return {
            data: resp.data
        };
    } catch (err) {}
};
const CollectiblesList_MyItems = async (payload)=>{
    try {
        let resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/collectibles/list/myitems`,
            data: payload
        });
        return {
            data: resp.data
        };
    } catch (err) {}
};
const CollectiblesList = async (payload)=>{
    try {
        let resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/collectibles/list/collection`,
            data: payload
        });
        return {
            data: resp.data
        };
    } catch (err) {}
};
const CollectiblesList_Home = async (payload)=>{
    try {
        let resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/collectibles/list/home`,
            data: payload
        });
        return {
            data: resp.data
        };
    } catch (err) {}
};
const CollectiblesList_Favorities = async (payload)=>{
    try {
        let resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/collectibles/list/myfavorities`,
            data: payload
        });
        return {
            data: resp.data
        };
    } catch (err) {}
};
const CollectiblesList_All = async (payload)=>{
    try {
        let resp = await axios({
            method: "post",
            url: `${config.vUrl}/token/collectibles/list/allimages`,
            data: payload
        });
        return {
            data: resp.data
        };
    } catch (err) {}
};
const CollectiblesList_Follow = async (payload)=>{
    try {
        let resp = await axios({
            method: "post",
            url: `${config.vUrl}/token/collectibles/list/follow`,
            data: payload
        });
        return {
            data: resp.data
        };
    } catch (err) {}
};
async function activityUpdate(data) {
    try {
        let checkAddr = await axios({
            method: "post",
            url: `${config.vUrl}/token/test/activityUpdate`,
            data: data
        });
        return {
            data: checkAddr.data
        };
    } catch (err) {
        return {
        };
    }
}
const BurnField = async (data)=>{
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/BurnField`,
            data: data
        });
        return {
            loading: false
        };
    } catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        };
    }
};
const ipfsmetadatafunciton = async (payload)=>{
    var formData = new FormData();
    // if(payload.Image) { formData.append('Image', payload.Image); }
    if (payload.name) {
        formData.append("name", payload.name);
    }
    if (payload.image) {
        formData.append("image", payload.image);
    }
    if (payload.tokenId) {
        formData.append("tokenId", payload.tokenId);
    }
    // if(payload.description) { formData.append('description', payload.description); }
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/ipfsmetadata`,
            data: formData
        });
        return {
            data: respData.data
        };
    } catch (err) {
        return {
        };
    }
};
const ipfsImageHashGet = async (payload)=>{
    var formData = new FormData();
    if (payload.Image) {
        formData.append("Image", payload.Image);
    }
    if (payload.TokenName) {
        formData.append("name", payload.TokenName);
    }
    if (payload.tokenid) {
        formData.append("tokenid", payload.tokenid);
    }
    try {
        let respData = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/token/ipfsImageHashGet`,
            data: formData
        });
        return {
            data: respData.data
        };
    } catch (err) {
        return {
        };
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7416:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C5": () => (/* binding */ Requestsubscribe),
/* harmony export */   "DB": () => (/* binding */ UserProfile_Update_Action),
/* harmony export */   "Et": () => (/* binding */ AddressUserDetails_GetOrSave_Action),
/* harmony export */   "IF": () => (/* binding */ HistoryActivity_List_Action),
/* harmony export */   "IO": () => (/* binding */ imageupdate),
/* harmony export */   "J_": () => (/* binding */ collectionimageupdate),
/* harmony export */   "K3": () => (/* binding */ getActivity),
/* harmony export */   "Mb": () => (/* binding */ verificationuser),
/* harmony export */   "PF": () => (/* binding */ ParamAccountAddr_Detail_Get),
/* harmony export */   "UD": () => (/* binding */ halfAddrShow),
/* harmony export */   "WN": () => (/* binding */ User_Followers_List_Action),
/* harmony export */   "aX": () => (/* binding */ verifymail),
/* harmony export */   "l1": () => (/* binding */ User_Follow_Get_Action),
/* harmony export */   "lA": () => (/* binding */ FollowChange_Action),
/* harmony export */   "my": () => (/* binding */ getCurAddr),
/* harmony export */   "nN": () => (/* binding */ User_Following_List_Action),
/* harmony export */   "pJ": () => (/* binding */ changeReceiptStatus_Action),
/* harmony export */   "r": () => (/* binding */ verifyotp)
/* harmony export */ });
/* unused harmony exports ToastShow, getfaq, getWallet, newslettersAdd, PutOnSale_Action, User_FollowList_Get_Action, Topbuyer_List_Action, Topseller_List_Action, Collectibles_Get_Action, Activity_List_Action, Activity_View_Action */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6103);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6679);
/* harmony import */ var _metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_metamask_legacy_web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4137);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, react_toastify__WEBPACK_IMPORTED_MODULE_4__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, react_toastify__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.configure();
let toasterOption = _lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].toasterOption */ .Z.toasterOption;
const halfAddrShow = (addr)=>{
    if (addr) {
        return addr.substring(0, 5) + "...." + addr.slice(addr.length - 5);
    } else {
        return "";
    }
};
const getCurAddr = async ()=>{
    var currAddr = "";
    // if (window.ethereum) {
    //   var web3 = new Web3(window.ethereum);
    //   if (window.web3 && window.web3.eth && window.web3.eth.defaultAccount) {
    //     var accVal = await web3.eth.getAccounts();
    //     if(accVal[0]) {
    //       currAddr = accVal[0];
    //     }
    //     currAddr = window.web3.eth.defaultAccount;
    //     currAddr = currAddr.toString();
    //     return currAddr;
    //   }
    // }
    if (localStorage.getItem("nilwireMetamask") && localStorage.getItem("nilwireMetamask") != null && localStorage.getItem("nilwireMetamask") != undefined && localStorage.getItem("nilwireMetamask") != "") {
        if (localStorage.getItem("walltype") && localStorage.getItem("walltype") != null && localStorage.getItem("walltype") != undefined && localStorage.getItem("walltype") != "" && localStorage.getItem("walltype") == "trust") {
            var provider = new (_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_5___default())({
                rpc: {
                    [_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].livechainid */ .Z.livechainid]: _lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].liverpcUrls */ .Z.liverpcUrls
                },
                chainId: _lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].livechainid */ .Z.livechainid
            });
            provider.on("connect", ()=>{});
            await provider.enable();
            let web3 = new (web3__WEBPACK_IMPORTED_MODULE_2___default())(provider);
            var network = await web3.eth.net.getId();
            var result = await web3.eth.getAccounts();
            if (_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].livechainid */ .Z.livechainid == network) {
                localStorage.setItem("walltype", "trust");
                localStorage.setItem("nilddsbashyujsd", "yes");
                localStorage.setItem("nilwireMetamask", result[0].toLowerCase());
                localStorage.setItem("nilwireMetamaskAddr", result[0].toLowerCase());
                var setacc = result[0].toLowerCase();
                var data = {
                    address: result[0].toLowerCase(),
                    provider: provider
                };
                return result[0].toLowerCase();
            } else {
                await provider.disconnect();
            }
        } else {
            if (window.ethereum) {
                var web3 = new (web3__WEBPACK_IMPORTED_MODULE_2___default())(window.ethereum);
                try {
                    if (typeof web3 !== "undefined") {
                        await window.ethereum.enable();
                        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_2___default())(window.web3.currentProvider);
                        if (window.web3.currentProvider.isMetaMask === true) {
                            if (window.web3 && window.web3.eth && window.web3.eth.defaultAccount) {
                                if (window.web3.currentProvider.networkVersion == _lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].networkVersion */ .Z.networkVersion) {
                                    var result = await web3.eth.getAccounts();
                                    var data = {
                                        address: result[0].toLowerCase()
                                    };
                                    var myaddress = result[0].toLowerCase().toString();
                                    return myaddress;
                                }
                            }
                        }
                    }
                } catch (err) {}
            }
        }
    }
};
const getActivity = async (data)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/user/getActivity`,
            data: data
        });
        return Resp;
    } catch (err) {
        return {
        };
    }
};
const imageupdate = async (Payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/user/imageupdate`,
            data: Payload
        });
        return Resp;
    } catch (err) {
        return {};
    }
};
const collectionimageupdate = async (Payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/user/collectionimageupdate`,
            data: Payload
        });
        return Resp;
    } catch (err) {
        return {};
    }
};
const ToastShow = async (data)=>{
    if (data.toast && data.toast.type && data.toast.msg) {
        if (data.toast.type == "success") {
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(data.toast.msg, toasterOption);
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(data.toast.msg, toasterOption);
        }
    }
};
const ParamAccountAddr_Detail_Get = async (Payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/user/address/details/get`,
            data: Payload
        });
        return Resp;
    } catch (err) {
        return {
        };
    }
};
const verificationuser = async (payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/user/verificationuser`,
            data: payload
        });
        ToastShow(Resp.data);
        return {
            result: Resp.data
        };
    } catch (err) {
        return {
        };
    }
};
const getfaq = async (payload)=>{
    try {
        let resp = await axios({
            method: "get",
            url: `${config.vUrl}/user/getfaq`
        });
        return {
            result: resp.data.data
        };
    } catch (err) {}
};
const getWallet = async (payload)=>{
    try {
        let Resp = await axios({
            method: "post",
            url: `${config.vUrl}/user/getwallet`,
            data: payload
        });
        ToastShow(Resp.data);
        return {
            result: Resp.data
        };
    } catch (err) {}
};
const FollowChange_Action = async (Payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/user/follow/change`,
            data: Payload
        });
        return Resp;
    } catch (err) {
        return {
        };
    }
};
const newslettersAdd = async (Payload)=>{
    try {
        let Resp = await axios({
            method: "post",
            url: `${config.vUrl}/user/newsletter`,
            data: Payload
        });
        ToastShow(Resp.data);
        return Resp;
    } catch (err) {
        return {
        };
    }
};
const PutOnSale_Action = async (Payload)=>{};
const UserProfile_Update_Action = async (Payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/user/profileupdate`,
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: Payload
        });
        ToastShow(Resp.data);
        return Resp;
    } catch (err) {
        return err;
    }
};
const verifyotp = async (Payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/user/verifyotp`,
            data: Payload
        });
        ToastShow(Resp.data);
        return Resp;
    } catch (err) {
        return err;
    }
};
const verifymail = async (Payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/user/verifymail`,
            data: Payload
        });
        ToastShow(Resp.data);
        return Resp;
    } catch (err) {
        return err;
    }
};
const User_FollowList_Get_Action = async (Payload)=>{
    try {
        let Resp = await axios({
            method: "post",
            url: `${config.vUrl}/user/follow/list/`,
            data: Payload
        });
        return Resp;
    } catch (err) {
        return {
        };
    }
};
const User_Follow_Get_Action = async (Payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/user/follow/get-follow/`,
            data: Payload
        });
        return Resp;
    } catch (err) {
        return {
        };
    }
};
const Topbuyer_List_Action = async (Payload)=>{
    try {
        let Resp = await axios({
            method: "post",
            url: `${config.vUrl}/user/top-buyer-list/`,
            data: Payload
        });
        return Resp;
    } catch (err) {
        return {
        };
    }
};
const Topseller_List_Action = async (Payload)=>{
    try {
        let Resp = await axios({
            method: "post",
            url: `${config.vUrl}/user/top-seller-list/`,
            data: Payload
        });
        return Resp;
    } catch (err) {
        return {
        };
    }
};
const Collectibles_Get_Action = async (Payload)=>{
    try {
        let Resp = await axios({
            method: "post",
            url: `${config.vUrl}/user/collectibles`,
            data: Payload
        });
        return Resp;
    } catch (err) {
        return {
        };
    }
};
const changeReceiptStatus_Action = async (Payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/user/changereceiptstatus`,
            data: Payload
        });
        return {
            data: Resp
        };
    } catch (err) {
        return {
        };
    }
};
const AddressUserDetails_GetOrSave_Action = async (Payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/user/address/details/getorsave`,
            data: Payload
        });
        return {
            data: Resp
        };
    } catch (err) {
        return {
            error: err.response.data
        };
    }
};
// by muthu
const User_Following_List_Action = async (Payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/user/follow/following-list/`,
            data: Payload
        });
        return Resp;
    } catch (err) {
        return {
        };
    }
};
const Activity_List_Action = async (Payload)=>{
    try {
        let Resp = await axios({
            method: "post",
            url: `${config.vUrl}/user/activitylist/`,
            data: Payload
        });
        return Resp;
    } catch (err) {
        return {
        };
    }
};
const Activity_View_Action = async (Payload)=>{
    try {
        let Resp = await axios({
            method: "post",
            url: `${config.vUrl}/user/viewactivitylist/`,
            data: Payload
        });
        return Resp;
    } catch (err) {
        return {
        };
    }
};
const Requestsubscribe = async (Payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/user/newslettersub/`,
            data: Payload
        });
        return Resp;
    } catch (err) {
        return {
            error: err.response.data
        };
    }
};
const HistoryActivity_List_Action = async (Payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/user/histotylist/`,
            data: Payload
        });
        return Resp;
    } catch (err) {
        return {
        };
    }
};
const User_Followers_List_Action = async (Payload)=>{
    try {
        let Resp = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            method: "post",
            url: `${_lib_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vUrl */ .Z.vUrl}/user/follow/followers-list/`,
            data: Payload
        });
        return Resp;
    } catch (err) {
        return {
        };
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;