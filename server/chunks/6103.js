"use strict";
exports.id = 6103;
exports.ids = [6103];
exports.modules = {

/***/ 6103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let EnvName = "demo";
let Front_URL = "";
let Back_URL = "";
let v1Url = "";
let limit = "20";
let limitMax = "3000";
let fee = 2500000000000000000;
let decimalvalues = 1000000000000000000;
let toFixed = 8;
let IPFS_IMG = "https://ipfs.io/ipfs";
const singleType = 721;
const multipleType = 1155;
var providercon = null;
let networkVersion = "";
let currencySymbol = "ETH";
let tokenSymbol = "WETH";
let owntokenSymbol = "NIL";
let livechainid = "";
let liverpcUrls = "";
let adminAddress = "";
let singleContract = "";
let multipleContract = "";
let tokenAddress = "";
let esctokenAddr = "";
let defaultCollectionSingle = "";
let defaultCollectionMultiple = "";
let userContract721 = "";
let userContract1155 = "";
let toasterOption = {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
};
if (EnvName === "production") {
    Front_URL = "https://nilwirenft.io";
    Back_URL = "https://api.nilwirenft.io/";
    v1Url = "https://api.nilwirenft.io/api";
    IPFS_IMG = "https://ipfs.io/ipfs";
    liverpcUrls = "https://mainnet.infura.io/v3/dbac4db8a1a0427f923bc7de0faf8dd6";
    livechainid = 1;
    adminAddress = "0x80Aa595c83430288E3A75F4D03bE15b72385420F";
    singleContract = "0xc0eCb515891f21628F8e4B7696241B7A59A3CEE7";
    multipleContract = "0x28D9E10E464ed5AB1F4fb28e1B2B909bC928896d";
    tokenAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
    esctokenAddr = "";
    defaultCollectionSingle = "0x3FA55515a9d724c555fB688b19743e0f6CcE16F9";
    defaultCollectionMultiple = "0xCf1fe57fe7e1fdA2a440910C1954FCC11e28C87f";
    networkVersion = "1";
} else if (EnvName === "demo") {
    Front_URL = "https://nilwire.wealwin.com";
    Back_URL = "https://nilwireapi.wealwin.com/";
    v1Url = "https://nilwireapi.wealwin.com/api";
    IPFS_IMG = "https://ipfs.io/ipfs";
    liverpcUrls = "https://ropsten.infura.io/v3/";
    livechainid = 5;
    adminAddress = "0x80Aa595c83430288E3A75F4D03bE15b72385420F";
    singleContract = "0x93310d33c44e5BE5bF208B89cA00096613f887cF";
    multipleContract = "0x5D500Ee1a10AF9310560F75a66Cf885C96089A43";
    tokenAddress = "0xc163759d44b2b3ca9e5d79af2413f9ba79fe5173";
    esctokenAddr = "0xA0bed61Bf0a2EF83101A096827763dA928004533";
    defaultCollectionSingle = "0xAfb835983028a11353BA2e27E7DFA83A7806Ca0f";
    defaultCollectionMultiple = "0xbAEEd7491ffF9Cc8d7bB0Ae059acF63DAf654d82";
    networkVersion = "5";
} else {
    Front_URL = "http://localhost:3000";
    Back_URL = "http://localhost:2053/";
    v1Url = "http://localhost:2053/api";
    IPFS_IMG = "https://ipfs.io/ipfs";
    liverpcUrls = "https://ropsten.infura.io/v3/";
    livechainid = 5;
    adminAddress = "0x80Aa595c83430288E3A75F4D03bE15b72385420F";
    singleContract = "0x93310d33c44e5BE5bF208B89cA00096613f887cF";
    multipleContract = "0x5D500Ee1a10AF9310560F75a66Cf885C96089A43";
    tokenAddress = "0xc163759d44b2b3ca9e5d79af2413f9ba79fe5173";
    esctokenAddr = "0xA0bed61Bf0a2EF83101A096827763dA928004533";
    defaultCollectionSingle = "0xAfb835983028a11353BA2e27E7DFA83A7806Ca0f";
    defaultCollectionMultiple = "0xbAEEd7491ffF9Cc8d7bB0Ae059acF63DAf654d82";
    networkVersion = "5";
}
let key = {
    Front_URL: Front_URL,
    Back_URL: Back_URL,
    vUrl: v1Url,
    decimalvalues: decimalvalues,
    toFixed: toFixed,
    networkVersion: networkVersion,
    currencySymbol: currencySymbol,
    tokenSymbol: tokenSymbol,
    toasterOption: toasterOption,
    limit: limit,
    limitMax: limitMax,
    singleContract: singleContract,
    multipleContract: multipleContract,
    tokenAddress: tokenAddress,
    userContract721: userContract721,
    userContract1155: userContract1155,
    adminAddress: adminAddress,
    singleType: singleType,
    multipleType: multipleType,
    IPFS_IMG: IPFS_IMG,
    providercon: providercon,
    owntokenSymbol: owntokenSymbol,
    esctokenAddr: esctokenAddr,
    fee: fee,
    defaultCollectionSingle: defaultCollectionSingle,
    defaultCollectionMultiple: defaultCollectionMultiple,
    liverpcUrls: liverpcUrls,
    livechainid: livechainid
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (key);


/***/ })

};
;