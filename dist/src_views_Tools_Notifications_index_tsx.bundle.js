"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdapp_template_polygon"] = self["webpackChunkdapp_template_polygon"] || []).push([["src_views_Tools_Notifications_index_tsx"],{

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

/***/ "./src/config/constants/toasts.ts":
/*!****************************************!*\
  !*** ./src/config/constants/toasts.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TOAST_MESSAGES\": function() { return /* binding */ TOAST_MESSAGES; }\n/* harmony export */ });\n/* harmony import */ var types_toasts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! types/toasts */ \"./src/types/toasts.ts\");\n\nconst TOAST_MESSAGES = {\n    [types_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_ID.DEFAULT_ERROR_MESSAGE]: \"Something went wrong\",\n    // Wallet Connection\n    [types_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_ID.UNLOCK_WALLET_MSG]: \"Unlock your wallet to connect\",\n    [types_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_ID.CONNECT_WALLET_ERROR_MSG]: \"Error connecting to your wallet\",\n    // Regular/Custom Transactions\n    [types_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_ID.SIGN_TX_MSG]: \"Please sign the transaction\",\n    [types_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_ID.TX_REJECTED_MSG]: \"Transaction rejected\",\n    [types_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_ID.TX_EXECUTED_MSG]: \"Transaction successfully executed\",\n    [types_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_ID.TX_CANCELLATION_EXECUTED_MSG]: \"Rejection successfully submitted\",\n    [types_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_ID.TX_FAILED_MSG]: \"Transaction failed\",\n    [types_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_ID.TX_PENDING_MSG]: \"Transaction pending\",\n    [types_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_ID.TX_STILL_PENDING_MSG]: \"Transaction still pending. Consider resubmitting with a higher gas price.\",\n    [types_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_ID.TX_WAITING_CONFIRMATION_MSG]: \"A transaction requires your confirmation\",\n    [types_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_ID.TX_CONFIRMATION_EXECUTED_MSG]: \"Confirmation transaction was successful\",\n    [types_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_ID.TX_CONFIRMATION_FAILED_MSG]: \"Confirmation transaction failed\",\n};\n\n\n//# sourceURL=webpack://dapp-template-polygon/./src/config/constants/toasts.ts?");

/***/ }),

/***/ "./src/contexts/notifications/notificationBuilder.tsx":
/*!************************************************************!*\
  !*** ./src/contexts/notifications/notificationBuilder.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TOAST_TX_WAITING_CONFIRMATION\": function() { return /* binding */ TOAST_TX_WAITING_CONFIRMATION; },\n/* harmony export */   \"TOAST_TX_CONFIRMATION_EXECUTED\": function() { return /* binding */ TOAST_TX_CONFIRMATION_EXECUTED; },\n/* harmony export */   \"TOAST_TX_CONFIRMATION_FAILED\": function() { return /* binding */ TOAST_TX_CONFIRMATION_FAILED; },\n/* harmony export */   \"TOAST_TX_PENDING\": function() { return /* binding */ TOAST_TX_PENDING; },\n/* harmony export */   \"TOAST_TX_STILL_PENDING\": function() { return /* binding */ TOAST_TX_STILL_PENDING; },\n/* harmony export */   \"TOAST_TX_FAILED\": function() { return /* binding */ TOAST_TX_FAILED; },\n/* harmony export */   \"TOAST_TX_EXECUTED\": function() { return /* binding */ TOAST_TX_EXECUTED; },\n/* harmony export */   \"TX_TOASTS\": function() { return /* binding */ TX_TOASTS; }\n/* harmony export */ });\n/* harmony import */ var config_constants_toasts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config/constants/toasts */ \"./src/config/constants/toasts.ts\");\n/* harmony import */ var types_toasts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! types/toasts */ \"./src/types/toasts.ts\");\n\n\nconst TOAST_TX_WAITING_CONFIRMATION = {\n    key: types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_WAITING_CONFIRMATION_MSG,\n    message: config_constants_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_MESSAGES[types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_WAITING_CONFIRMATION_MSG],\n    type: \"loading\",\n};\nconst TOAST_TX_CONFIRMATION_EXECUTED = {\n    key: types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_CONFIRMATION_EXECUTED_MSG,\n    message: config_constants_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_MESSAGES[types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_CONFIRMATION_EXECUTED_MSG],\n    type: \"success\",\n};\nconst TOAST_TX_CONFIRMATION_FAILED = {\n    key: types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_CONFIRMATION_FAILED_MSG,\n    message: config_constants_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_MESSAGES[types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_CONFIRMATION_FAILED_MSG],\n    type: \"error\",\n};\nconst TOAST_TX_PENDING = {\n    key: types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_PENDING_MSG,\n    message: config_constants_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_MESSAGES[types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_PENDING_MSG],\n    type: \"loading\",\n};\nconst TOAST_TX_STILL_PENDING = {\n    key: types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_STILL_PENDING_MSG,\n    message: config_constants_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_MESSAGES[types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_STILL_PENDING_MSG],\n    type: \"loading\",\n};\nconst TOAST_TX_FAILED = {\n    key: types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_FAILED_MSG,\n    message: config_constants_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_MESSAGES[types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_FAILED_MSG],\n    type: \"error\",\n};\nconst TOAST_TX_EXECUTED = {\n    key: types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_EXECUTED_MSG,\n    message: config_constants_toasts__WEBPACK_IMPORTED_MODULE_0__.TOAST_MESSAGES[types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_EXECUTED_MSG],\n    type: \"success\",\n};\nconst TX_TOASTS = {\n    [types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_WAITING_CONFIRMATION_MSG]: TOAST_TX_WAITING_CONFIRMATION,\n    [types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_CONFIRMATION_EXECUTED_MSG]: TOAST_TX_CONFIRMATION_EXECUTED,\n    [types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_CONFIRMATION_FAILED_MSG]: TOAST_TX_CONFIRMATION_FAILED,\n    [types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_PENDING_MSG]: TOAST_TX_PENDING,\n    [types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_STILL_PENDING_MSG]: TOAST_TX_STILL_PENDING,\n    [types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_EXECUTED_MSG]: TOAST_TX_EXECUTED,\n    [types_toasts__WEBPACK_IMPORTED_MODULE_1__.TOAST_ID.TX_FAILED_MSG]: TOAST_TX_FAILED,\n};\n\n\n//# sourceURL=webpack://dapp-template-polygon/./src/contexts/notifications/notificationBuilder.tsx?");

/***/ }),

/***/ "./src/hooks/useConfirmTransaction.ts":
/*!********************************************!*\
  !*** ./src/hooks/useConfirmTransaction.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var contexts_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contexts/notifications */ \"./src/contexts/notifications/index.tsx\");\n/* harmony import */ var utils_hooks_useSetState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/hooks/useSetState */ \"./src/utils/hooks/useSetState.ts\");\n/* harmony import */ var config_constants_toasts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config/constants/toasts */ \"./src/config/constants/toasts.ts\");\n/* harmony import */ var types_toasts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! types/toasts */ \"./src/types/toasts.ts\");\n/* harmony import */ var contexts_notifications_notificationBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! contexts/notifications/notificationBuilder */ \"./src/contexts/notifications/notificationBuilder.tsx\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\nconst initialState = {\n    status: \"idle\",\n};\nconst useTransactionLifecycle = ({ contractMethod, onConfirmWaiting = lodash__WEBPACK_IMPORTED_MODULE_0__.noop, onConfirmRejected = lodash__WEBPACK_IMPORTED_MODULE_0__.noop, onConfirmed = lodash__WEBPACK_IMPORTED_MODULE_0__.noop, onExecuted = lodash__WEBPACK_IMPORTED_MODULE_0__.noop, onExecutionFailed = lodash__WEBPACK_IMPORTED_MODULE_0__.noop, waitingConfirmationMessage = config_constants_toasts__WEBPACK_IMPORTED_MODULE_3__.TOAST_MESSAGES[types_toasts__WEBPACK_IMPORTED_MODULE_4__.TOAST_ID.TX_WAITING_CONFIRMATION_MSG], confirmedMessage = config_constants_toasts__WEBPACK_IMPORTED_MODULE_3__.TOAST_MESSAGES[types_toasts__WEBPACK_IMPORTED_MODULE_4__.TOAST_ID.TX_CONFIRMATION_EXECUTED_MSG], pendingMessage = config_constants_toasts__WEBPACK_IMPORTED_MODULE_3__.TOAST_MESSAGES[types_toasts__WEBPACK_IMPORTED_MODULE_4__.TOAST_ID.TX_PENDING_MSG], stillPendingMessage = config_constants_toasts__WEBPACK_IMPORTED_MODULE_3__.TOAST_MESSAGES[types_toasts__WEBPACK_IMPORTED_MODULE_4__.TOAST_ID.TX_STILL_PENDING_MSG], executedSuccessMessage = config_constants_toasts__WEBPACK_IMPORTED_MODULE_3__.TOAST_MESSAGES[types_toasts__WEBPACK_IMPORTED_MODULE_4__.TOAST_ID.TX_EXECUTED_MSG], errorExecutingMessage = config_constants_toasts__WEBPACK_IMPORTED_MODULE_3__.TOAST_MESSAGES[types_toasts__WEBPACK_IMPORTED_MODULE_4__.TOAST_ID.TX_FAILED_MSG], errorConfirmingMessage = config_constants_toasts__WEBPACK_IMPORTED_MODULE_3__.TOAST_MESSAGES[types_toasts__WEBPACK_IMPORTED_MODULE_4__.TOAST_ID.TX_CONFIRMATION_FAILED_MSG], }) => {\n    const [state, dispatch] = (0,utils_hooks_useSetState__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(initialState);\n    const { enqueueToast, enqueueAndRemove, removeToast } = (0,contexts_notifications__WEBPACK_IMPORTED_MODULE_1__.useNotifications)();\n    return {\n        status: state.status,\n        execute: () => {\n            // Show waiting confirmation\n            enqueueToast(Object.assign(Object.assign({}, contexts_notifications_notificationBuilder__WEBPACK_IMPORTED_MODULE_5__.TOAST_TX_WAITING_CONFIRMATION), { message: waitingConfirmationMessage }));\n            // Call waiting callback\n            onConfirmWaiting();\n            // Call contract method\n            contractMethod()\n                // If confirmed\n                .then((tx) => __awaiter(void 0, void 0, void 0, function* () {\n                // Show confirmation message and hide confirming\n                enqueueAndRemove(Object.assign(Object.assign({}, contexts_notifications_notificationBuilder__WEBPACK_IMPORTED_MODULE_5__.TOAST_TX_CONFIRMATION_EXECUTED), { message: confirmedMessage }), types_toasts__WEBPACK_IMPORTED_MODULE_4__.TOAST_ID.TX_WAITING_CONFIRMATION_MSG);\n                // Call confirmed callback\n                onConfirmed();\n                // Show tx pending message\n                enqueueToast(Object.assign(Object.assign({}, contexts_notifications_notificationBuilder__WEBPACK_IMPORTED_MODULE_5__.TOAST_TX_PENDING), { message: pendingMessage }));\n                // Get tx receipt\n                const receipt = yield tx.wait();\n                console.log(\"TX RECEIPT:\", receipt);\n                // If status === OK enqueue confirmation executed\n                if (receipt.status) {\n                    enqueueAndRemove(Object.assign(Object.assign({}, contexts_notifications_notificationBuilder__WEBPACK_IMPORTED_MODULE_5__.TOAST_TX_CONFIRMATION_EXECUTED), { message: executedSuccessMessage }), types_toasts__WEBPACK_IMPORTED_MODULE_4__.TOAST_ID.TX_PENDING_MSG);\n                    onExecuted();\n                }\n                else {\n                    enqueueAndRemove(Object.assign(Object.assign({}, contexts_notifications_notificationBuilder__WEBPACK_IMPORTED_MODULE_5__.TOAST_TX_FAILED), { message: errorExecutingMessage }), types_toasts__WEBPACK_IMPORTED_MODULE_4__.TOAST_ID.TX_PENDING_MSG);\n                    onExecutionFailed();\n                }\n            }))\n                // Users rejects the\n                .catch(() => {\n                enqueueAndRemove(Object.assign(Object.assign({}, contexts_notifications_notificationBuilder__WEBPACK_IMPORTED_MODULE_5__.TOAST_TX_CONFIRMATION_FAILED), { message: errorConfirmingMessage }), types_toasts__WEBPACK_IMPORTED_MODULE_4__.TOAST_ID.TX_WAITING_CONFIRMATION_MSG);\n                onConfirmRejected();\n            });\n        },\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useTransactionLifecycle);\n\n\n//# sourceURL=webpack://dapp-template-polygon/./src/hooks/useConfirmTransaction.ts?");

/***/ }),

/***/ "./src/hooks/useContract.ts":
/*!**********************************!*\
  !*** ./src/hooks/useContract.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useTestDBContract\": function() { return /* binding */ useTestDBContract; }\n/* harmony export */ });\n/* harmony import */ var contexts_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! contexts/provider */ \"./src/contexts/provider/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var utils_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/contracts */ \"./src/utils/contracts.ts\");\n\n\n\nconst useTestDBContract = () => {\n    const web3Provider = (0,contexts_provider__WEBPACK_IMPORTED_MODULE_0__.useWeb3Provider)();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,utils_contracts__WEBPACK_IMPORTED_MODULE_2__.getTestDBContract)(web3Provider === null || web3Provider === void 0 ? void 0 : web3Provider.getSigner()), [web3Provider]);\n};\n\n\n//# sourceURL=webpack://dapp-template-polygon/./src/hooks/useContract.ts?");

/***/ }),

/***/ "./src/types/toasts.ts":
/*!*****************************!*\
  !*** ./src/types/toasts.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SUCCESS\": function() { return /* binding */ SUCCESS; },\n/* harmony export */   \"ERROR\": function() { return /* binding */ ERROR; },\n/* harmony export */   \"WARNING\": function() { return /* binding */ WARNING; },\n/* harmony export */   \"INFO\": function() { return /* binding */ INFO; },\n/* harmony export */   \"shortDuration\": function() { return /* binding */ shortDuration; },\n/* harmony export */   \"longDuration\": function() { return /* binding */ longDuration; },\n/* harmony export */   \"TOAST_ID\": function() { return /* binding */ TOAST_ID; }\n/* harmony export */ });\nconst SUCCESS = \"success\";\nconst ERROR = \"error\";\nconst WARNING = \"warning\";\nconst INFO = \"info\";\nconst shortDuration = 5000;\nconst longDuration = 10000;\nvar TOAST_ID;\n(function (TOAST_ID) {\n    TOAST_ID[TOAST_ID[\"DEFAULT_ERROR_MESSAGE\"] = 0] = \"DEFAULT_ERROR_MESSAGE\";\n    TOAST_ID[TOAST_ID[\"UNLOCK_WALLET_MSG\"] = 1] = \"UNLOCK_WALLET_MSG\";\n    TOAST_ID[TOAST_ID[\"CONNECT_WALLET_ERROR_MSG\"] = 2] = \"CONNECT_WALLET_ERROR_MSG\";\n    TOAST_ID[TOAST_ID[\"SIGN_TX_MSG\"] = 3] = \"SIGN_TX_MSG\";\n    TOAST_ID[TOAST_ID[\"TX_REJECTED_MSG\"] = 4] = \"TX_REJECTED_MSG\";\n    TOAST_ID[TOAST_ID[\"TX_EXECUTED_MSG\"] = 5] = \"TX_EXECUTED_MSG\";\n    TOAST_ID[TOAST_ID[\"TX_CANCELLATION_EXECUTED_MSG\"] = 6] = \"TX_CANCELLATION_EXECUTED_MSG\";\n    TOAST_ID[TOAST_ID[\"TX_FAILED_MSG\"] = 7] = \"TX_FAILED_MSG\";\n    TOAST_ID[TOAST_ID[\"TX_PENDING_MSG\"] = 8] = \"TX_PENDING_MSG\";\n    TOAST_ID[TOAST_ID[\"TX_STILL_PENDING_MSG\"] = 9] = \"TX_STILL_PENDING_MSG\";\n    TOAST_ID[TOAST_ID[\"TX_WAITING_CONFIRMATION_MSG\"] = 10] = \"TX_WAITING_CONFIRMATION_MSG\";\n    TOAST_ID[TOAST_ID[\"TX_CONFIRMATION_EXECUTED_MSG\"] = 11] = \"TX_CONFIRMATION_EXECUTED_MSG\";\n    TOAST_ID[TOAST_ID[\"TX_CONFIRMATION_FAILED_MSG\"] = 12] = \"TX_CONFIRMATION_FAILED_MSG\";\n})(TOAST_ID || (TOAST_ID = {}));\n\n\n//# sourceURL=webpack://dapp-template-polygon/./src/types/toasts.ts?");

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

/***/ "./src/views/Tools/Notifications/index.tsx":
/*!*************************************************!*\
  !*** ./src/views/Tools/Notifications/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/@ethersproject/contracts/lib.esm/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ \"./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js\");\n/* harmony import */ var config_abis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config/abis */ \"./src/config/abis/index.ts\");\n/* harmony import */ var contexts_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! contexts/provider */ \"./src/contexts/provider/index.tsx\");\n/* harmony import */ var hooks_useConfirmTransaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hooks/useConfirmTransaction */ \"./src/hooks/useConfirmTransaction.ts\");\n/* harmony import */ var utils_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/contracts */ \"./src/utils/contracts.ts\");\n/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Button */ \"./src/components/Button/index.tsx\");\n/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hooks/useContract */ \"./src/hooks/useContract.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\n\n\nconst Notifications = () => {\n    const { provider, props, staticProvider } = (0,contexts_provider__WEBPACK_IMPORTED_MODULE_3__.useProvider)();\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const _contract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_7__.useTestDBContract)();\n    const [pendingTx, setPendingTx] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const startTx = () => setPendingTx(true);\n    const cancelTx = () => setPendingTx(false);\n    const { execute } = (0,hooks_useConfirmTransaction__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n        contractMethod: () => {\n            console.log(_contract);\n            return _contract.storeNumber(2);\n        },\n        waitingConfirmationMessage: \"Please confirm the tx\",\n        onConfirmWaiting: startTx,\n        onConfirmRejected: () => {\n            console.log(\"Confirm rejected\");\n            cancelTx();\n        },\n        onExecutionFailed: cancelTx,\n        onExecuted: cancelTx,\n    });\n    const fetchNumber = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((provider) => __awaiter(void 0, void 0, void 0, function* () {\n        if (provider) {\n            const contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.Contract((0,utils_contracts__WEBPACK_IMPORTED_MODULE_5__.getContractAddress)(\"TestDB\"), config_abis__WEBPACK_IMPORTED_MODULE_2__.abis.TestDB, provider || staticProvider);\n            const values = yield contract.retrieve();\n            setNumber(ethers__WEBPACK_IMPORTED_MODULE_9__.BigNumber.from(values.number).toNumber());\n        }\n    }), []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        fetchNumber(provider || staticProvider);\n    });\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", Object.assign({ className: \"w-full h-full flex flex-col items-center justify-center\" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object.assign({ disabled: !props.account || pendingTx, onClick: execute }, { children: pendingTx ? \"WAITING\" : \"UPDATE\" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", Object.assign({ className: \"text-lg\" }, { children: [\"VALUE: \", number] }), void 0)] }), void 0));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notifications);\n\n\n//# sourceURL=webpack://dapp-template-polygon/./src/views/Tools/Notifications/index.tsx?");

/***/ }),

/***/ "./src/config/abis/TestDB.json":
/*!*************************************!*\
  !*** ./src/config/abis/TestDB.json ***!
  \*************************************/
/***/ (function(module) {

eval("module.exports = JSON.parse('{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"num\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"retrieve\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"number\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"storeAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"num\",\"type\":\"uint256\"}],\"name\":\"storeNumber\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]}');\n\n//# sourceURL=webpack://dapp-template-polygon/./src/config/abis/TestDB.json?");

/***/ })

}]);