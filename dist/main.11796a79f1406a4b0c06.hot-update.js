/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatefitness_club"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_closePopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/closePopup */ \"./src/modules/closePopup.js\");\n/* harmony import */ var _modules_gift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/gift */ \"./src/modules/gift.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_mainSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/mainSlider */ \"./src/modules/mainSlider.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/carousel */ \"./src/modules/carousel.js\");\n/* harmony import */ var _modules_gallerySlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/gallerySlider */ \"./src/modules/gallerySlider.js\");\n/* harmony import */ var _modules_postBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/postBanner */ \"./src/modules/postBanner.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/validate */ \"./src/modules/validate.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_header__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_closePopup__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_gift__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_mainSlider__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_gallerySlider__WEBPACK_IMPORTED_MODULE_6__.default)();\n(0,_modules_postBanner__WEBPACK_IMPORTED_MODULE_7__.default)();\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_8__.default)();\n\n//# sourceURL=webpack://fitness-club/./src/index.js?");

/***/ }),

/***/ "./src/modules/validate.js":
/*!*********************************!*\
  !*** ./src/modules/validate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validate = function validate() {\n  document.addEventListener('input', function (e) {\n    var target = e.target;\n\n    if (target == target.matches('#phone')) {\n      target.value = target.value.replace('/\\D/gi', '');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://fitness-club/./src/modules/validate.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fb4eac8bbba7054c3d4d")
/******/ })();
/******/ 
/******/ }
);