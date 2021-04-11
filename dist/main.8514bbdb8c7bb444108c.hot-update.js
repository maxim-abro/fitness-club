/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatefitness_club"]("main",{

/***/ "./src/modules/mainSlider.js":
/*!***********************************!*\
  !*** ./src/modules/mainSlider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar mainSlider = function mainSlider() {\n  var main = document.querySelector('.main-slider'),\n      slides = main.querySelectorAll('.slide');\n  var currentSlide = 0;\n  setInterval(function () {\n    if (currentSlide == 4) {\n      slides[currentSlide].style.display = 'none';\n      slides[0].removeAttribute('style');\n      currentSlide = 0;\n    } else {\n      slides[currentSlide].style.display = 'none';\n      slides[currentSlide + 1].removeAttribute('style');\n      currentSlide++;\n    }\n  }, 4000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainSlider);\n\n//# sourceURL=webpack://fitness-club/./src/modules/mainSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5c0e98c53eb9064b068d")
/******/ })();
/******/ 
/******/ }
);