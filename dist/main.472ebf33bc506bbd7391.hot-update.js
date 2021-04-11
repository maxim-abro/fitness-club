/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatefitness_club"]("main",{

/***/ "./src/modules/gallerySlider.js":
/*!**************************************!*\
  !*** ./src/modules/gallerySlider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar gallerySlider = function gallerySlider() {\n  var slide = document.querySelectorAll('.gallery-slider>.slide');\n  console.log(slide);\n  var curretSlide = 0,\n      interval;\n\n  var play = function play() {\n    slide.forEach(function (item, index) {\n      if (index == curretSlide) {\n        item.removeAttribute('style');\n      } else {\n        item.style.display = 'none';\n      }\n    });\n\n    if (curretSlide >= 4) {\n      curretSlide = 0;\n    } else {\n      curretSlide++;\n    }\n  };\n\n  var startPlay = function startPlay() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(play, time);\n  };\n\n  startPlay();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallerySlider);\n\n//# sourceURL=webpack://fitness-club/./src/modules/gallerySlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("14641fd77546bb31d0b2")
/******/ })();
/******/ 
/******/ }
);