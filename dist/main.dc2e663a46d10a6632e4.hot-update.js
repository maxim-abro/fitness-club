/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatefitness_club"]("main",{

/***/ "./src/modules/gift.js":
/*!*****************************!*\
  !*** ./src/modules/gift.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar gift = function gift() {\n  var fixedGift = document.querySelector('.fixed-gift>img');\n\n  if (window.location.pathname == '/index.html' || window.location.pathname == '/' || window.location.pathname == '/#') {\n    fixedGift.addEventListener('click', function () {\n      var gift = document.querySelector('#gift');\n      gift.style.display = 'block';\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gift);\n\n//# sourceURL=webpack://fitness-club/./src/modules/gift.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d852cace84fd0058ee86")
/******/ })();
/******/ 
/******/ }
);