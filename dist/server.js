/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./I18n.ts":
/*!*****************!*\
  !*** ./I18n.ts ***!
  \*****************/
/*! exports provided: appWithTranslation, useTranslation, withTranslation, i18n, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appWithTranslation", function() { return appWithTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTranslation", function() { return useTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTranslation", function() { return withTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-i18next */ "next-i18next");
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var i18next_http_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next-http-backend */ "i18next-http-backend");
/* harmony import */ var i18next_http_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(i18next_http_backend__WEBPACK_IMPORTED_MODULE_1__);


const NextI18NextInstance = new next_i18next__WEBPACK_IMPORTED_MODULE_0___default.a({
    defaultLanguage: 'tw',
    defaultNS: 'translations',
    otherLanguages: ['en'],
    serverLanguageDetection: true,
    preload: ['tw'],
    use: [i18next_http_backend__WEBPACK_IMPORTED_MODULE_1___default.a],
    backend: {
        loadPath: 'https://sesameee.github.io/locales/{{lng}}/{{ns}}.json',
        parse: JSON.parse,
    }
});
const { appWithTranslation, useTranslation, withTranslation, i18n } = NextI18NextInstance;
i18n.changeLanguage('tw');
/* harmony default export */ __webpack_exports__["default"] = (NextI18NextInstance);


/***/ }),

/***/ "./server/server.ts":
/*!**************************!*\
  !*** ./server/server.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next */ "next");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-i18next/middleware */ "next-i18next/middleware");
/* harmony import */ var next_i18next_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next_middleware__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../I18n */ "./I18n.ts");




const port = process.env.PORT || 3000;
const app = next__WEBPACK_IMPORTED_MODULE_1___default()({ dev: "development" !== 'production' });
const handle = app.getRequestHandler();
(async () => {
    await app.prepare();
    const server = express__WEBPACK_IMPORTED_MODULE_0___default()();
    await _I18n__WEBPACK_IMPORTED_MODULE_3__["default"].initPromise;
    server.use(next_i18next_middleware__WEBPACK_IMPORTED_MODULE_2___default()(_I18n__WEBPACK_IMPORTED_MODULE_3__["default"]));
    server.get('*', (req, res) => handle(req, res));
    await server.listen(port);
    console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "i18next-http-backend":
/*!***************************************!*\
  !*** external "i18next-http-backend" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next-http-backend");

/***/ }),

/***/ "next":
/*!***********************!*\
  !*** external "next" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "next-i18next/middleware":
/*!******************************************!*\
  !*** external "next-i18next/middleware" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next/middleware");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map