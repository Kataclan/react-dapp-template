"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdapp_template_polygon"] = self["webpackChunkdapp_template_polygon"] || []).push([["src_views_Home_index_tsx"],{

/***/ "./src/config/abis/index.ts":
/*!**********************************!*\
  !*** ./src/config/abis/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"abis\": function() { return /* binding */ abis; }\n/* harmony export */ });\nconst abis = {\n    TestDB: (__webpack_require__(/*! ./TestDB.json */ \"./src/config/abis/TestDB.json\").abi),\n};\n\n\n//# sourceURL=webpack://dapp-template-polygon/./src/config/abis/index.ts?");

/***/ }),

/***/ "./src/config/constants/contract-addresses.ts":
/*!****************************************************!*\
  !*** ./src/config/constants/contract-addresses.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst contracts = {\n    TestDB: {\n        80001: \"0xbdbca96560d1f855c06ccfd54b660ac88d628628\",\n    },\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (contracts);\n\n\n//# sourceURL=webpack://dapp-template-polygon/./src/config/constants/contract-addresses.ts?");

/***/ }),

/***/ "./src/utils/contracts.ts":
/*!********************************!*\
  !*** ./src/utils/contracts.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getContractAddress\": function() { return /* binding */ getContractAddress; },\n/* harmony export */   \"getTestDBContract\": function() { return /* binding */ getTestDBContract; }\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/@ethersproject/providers/lib.esm/json-rpc-provider.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/@ethersproject/contracts/lib.esm/index.js\");\n/* harmony import */ var config_abis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config/abis */ \"./src/config/abis/index.ts\");\n/* harmony import */ var config_constants_contract_addresses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config/constants/contract-addresses */ \"./src/config/constants/contract-addresses.ts\");\n/* harmony import */ var _getRpcNodeUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getRpcNodeUrl */ \"./src/utils/getRpcNodeUrl.ts\");\n/* harmony import */ var contexts_config_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! contexts/config/global */ \"./src/contexts/config/global.ts\");\n\n\n\n\n\nconst getContractAddress = (contractName) => {\n    return config_constants_contract_addresses__WEBPACK_IMPORTED_MODULE_1__[\"default\"][contractName][(0,contexts_config_global__WEBPACK_IMPORTED_MODULE_3__._getChainId)()];\n};\nconst getContract = (abi, address, signer) => {\n    const signerOrProvider = signer !== null && signer !== void 0 ? signer : new ethers__WEBPACK_IMPORTED_MODULE_4__.JsonRpcProvider((0,_getRpcNodeUrl__WEBPACK_IMPORTED_MODULE_2__.getRpcNodeUrl)());\n    return new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(address, abi, signerOrProvider);\n};\nconst getTestDBContract = (signer) => {\n    return getContract(config_abis__WEBPACK_IMPORTED_MODULE_0__.abis.TestDB, getContractAddress(\"TestDB\"), signer);\n};\n\n\n//# sourceURL=webpack://dapp-template-polygon/./src/utils/contracts.ts?");

/***/ }),

/***/ "./src/utils/getRpcNodeUrl.ts":
/*!************************************!*\
  !*** ./src/utils/getRpcNodeUrl.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nodes\": function() { return /* binding */ nodes; },\n/* harmony export */   \"getRpcNodeUrl\": function() { return /* binding */ getRpcNodeUrl; }\n/* harmony export */ });\n/* harmony import */ var lodash_sample__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/sample */ \"./node_modules/lodash/sample.js\");\n/* harmony import */ var lodash_sample__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_sample__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _env_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env-constants */ \"./src/utils/env-constants.ts\");\n\n\nif (_env_constants__WEBPACK_IMPORTED_MODULE_1__.APP_ENV !== \"production\" && !(_env_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_MUMBAI_RPC || _env_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_POLYGON_RPC)) {\n    throw Error(\"At least 1 RPC URL has to be defined\");\n}\nconst nodes = [_env_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_MUMBAI_RPC];\nconst getRpcNodeUrl = () => {\n    if (_env_constants__WEBPACK_IMPORTED_MODULE_1__.APP_ENV === \"production\") {\n        return _env_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_POLYGON_RPC;\n    }\n    return lodash_sample__WEBPACK_IMPORTED_MODULE_0___default()(nodes);\n};\n\n\n//# sourceURL=webpack://dapp-template-polygon/./src/utils/getRpcNodeUrl.ts?");

/***/ }),

/***/ "./src/views/Home/index.tsx":
/*!**********************************!*\
  !*** ./src/views/Home/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var config_abis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config/abis */ \"./src/config/abis/index.ts\");\n/* harmony import */ var contexts_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/config */ \"./src/contexts/config/index.tsx\");\n/* harmony import */ var contexts_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! contexts/provider */ \"./src/contexts/provider/index.tsx\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/@ethersproject/contracts/lib.esm/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js\");\n/* harmony import */ var contexts_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contexts/block */ \"./src/contexts/block/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var utils_contracts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/contracts */ \"./src/utils/contracts.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\n\nconst Home = () => {\n    const { chainId } = (0,contexts_config__WEBPACK_IMPORTED_MODULE_2__.useConfig)();\n    const { props, staticProvider, provider } = (0,contexts_provider__WEBPACK_IMPORTED_MODULE_3__.useProvider)();\n    const { block } = (0,contexts_block__WEBPACK_IMPORTED_MODULE_4__.useBlock)();\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const fetchNumber = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((provider) => __awaiter(void 0, void 0, void 0, function* () {\n        if (provider) {\n            const contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.Contract((0,utils_contracts__WEBPACK_IMPORTED_MODULE_6__.getContractAddress)(\"TestDB\"), config_abis__WEBPACK_IMPORTED_MODULE_1__.abis.TestDB, provider || staticProvider);\n            const values = yield contract.retrieve();\n            setNumber(ethers__WEBPACK_IMPORTED_MODULE_8__.BigNumber.from(values.number).toNumber());\n        }\n    }), []);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {\n        fetchNumber(provider || staticProvider);\n    });\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", Object.assign({ className: \"w-full h-full flex flex-col items-center justify-center\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", { children: [\"Config chainId: \", chainId] }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", { children: [\"Web3 Provider: \", (props === null || props === void 0 ? void 0 : props.name) || \"Not available\"] }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", { children: [\"Web3 Provider Block: \", block] }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", { children: [\"Web3 Provider network: \", (props === null || props === void 0 ? void 0 : props.network) || \"Not available\"] }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", { children: [\"Web3 Provider account: \", props === null || props === void 0 ? void 0 : props.account, \" \"] }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", { children: [\"Contract value: \", typeof number !== undefined ? number : \"loading\"] }, void 0)] }), void 0));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n\n//# sourceURL=webpack://dapp-template-polygon/./src/views/Home/index.tsx?");

/***/ }),

/***/ "./src/config/abis/TestDB.json":
/*!*************************************!*\
  !*** ./src/config/abis/TestDB.json ***!
  \*************************************/
/***/ (function(module) {

eval("module.exports = JSON.parse('{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"num\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"retrieve\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"number\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"storeAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"num\",\"type\":\"uint256\"}],\"name\":\"storeNumber\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]}');\n\n//# sourceURL=webpack://dapp-template-polygon/./src/config/abis/TestDB.json?");

/***/ })

}]);