(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PostList"] = factory();
	else
		root["PostList"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack://PostList/./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return arrayLikeToArray(arr);\n}\n\nmodule.exports = _arrayWithoutHoles;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack://PostList/./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack://PostList/./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack://PostList/./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack://PostList/./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack://PostList/./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableSpread;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack://PostList/./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack://PostList/./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack://PostList/./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/style.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./src/style.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \":root {\\r\\n  --light-gray: #f4f4f4;\\r\\n  --green: #a0fa37;\\r\\n  --green-darker: #89e224;\\r\\n}\\r\\n\\r\\n.vz-postlist-tool {\\r\\n  background-color: var(--light-gray);\\r\\n  border-radius: 4px;\\r\\n  padding: 16px;\\r\\n  margin: 16px -8px;\\r\\n}\\r\\n\\r\\n.vz-postlist-tool__list__post {\\r\\n    }\\r\\n\\r\\n.vz-postlist-tool__select-post-button {\\r\\n    background-color: var(--green);\\r\\n    padding: 8px 20px;\\r\\n    border-radius: 4px;\\r\\n    outline: none;\\r\\n    border: none;\\r\\n    display: block;\\r\\n    margin: 0 auto;\\r\\n    transition: all 0.3s ease-in-out;\\r\\n  }\\r\\n\\r\\n.vz-postlist-tool__select-post-button:hover {\\r\\n      background-color: var(--green-darker);\\r\\n    }\\r\\n\\r\\n.vz-postlist-tool__remove-post-button {\\r\\n  }\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://PostList/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://PostList/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://PostList/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: makeElement, makePostElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeElement\", function() { return makeElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makePostElement\", function() { return makePostElement; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n\n// helpers function\nvar makeElement = function make(tagName) {\n  var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var el = document.createElement(tagName);\n\n  if (Array.isArray(classNames)) {\n    var _el$classList;\n\n    (_el$classList = el.classList).add.apply(_el$classList, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(classNames));\n  } else if (classNames) {\n    el.classList.add(classNames);\n  }\n\n  for (var attrName in attributes) {\n    el[attrName] = attributes[attrName];\n  }\n\n  return el;\n};\nvar makePostElement = function make(tagName) {\n  var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var el = document.createElement(tagName);\n\n  if (Array.isArray(classNames)) {\n    var _el$classList2;\n\n    (_el$classList2 = el.classList).add.apply(_el$classList2, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(classNames));\n  } else if (classNames) {\n    el.classList.add(classNames);\n  }\n\n  for (var attrName in attributes) {\n    el[attrName] = attributes[attrName];\n  }\n\n  return el;\n};\n\n//# sourceURL=webpack://PostList/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostList; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _svg_article_line_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg/article-line.svg */ \"./src/svg/article-line.svg\");\n/* harmony import */ var _svg_article_line_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svg_article_line_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ \"./src/service.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n // implement Tool API: https://editorjs.io/tools-api\n\nvar PostList = /*#__PURE__*/function () {\n  function PostList(_ref) {\n    var _this = this;\n\n    var data = _ref.data,\n        config = _ref.config,\n        api = _ref.api,\n        readOnly = _ref.readOnly;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PostList);\n\n    this.api = api;\n    this.readOnly = readOnly;\n    this.config = _objectSpread(_objectSpread({}, config), {}, {\n      onSelectPost: config.onSelectPost || function () {}\n    });\n    this.service = new _service__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n      config: this.config,\n      onSelect: function onSelect(data) {\n        _this.onSelect(data);\n      }\n    });\n    this.ui = new _ui__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n      api: api,\n      readOnly: readOnly,\n      config: this.config,\n      onSelectPost: function onSelectPost() {\n        _this.service.selectPost();\n      },\n      onRemovePost: function onRemovePost() {\n        _this.onRemove();\n      }\n    });\n    this.data = {\n      posts: data.posts || [],\n      style: data.style || \"center\"\n    };\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PostList, [{\n    key: \"render\",\n    value: function render() {\n      return this.ui.render(this.data);\n    }\n  }, {\n    key: \"save\",\n    value: function save() {\n      return this.data;\n    }\n  }, {\n    key: \"onSelect\",\n    value: function onSelect(post) {\n      this._updatePosts(post, \"select\");\n    }\n  }, {\n    key: \"onRemove\",\n    value: function onRemove(post) {\n      this._updatePosts(post, \"remove\");\n    }\n  }, {\n    key: \"_updatePosts\",\n    value: function _updatePosts(post, action) {\n      if (post && action === \"select\") {\n        this.data.posts.push(post);\n        this.ui.updatePosts(this.data.posts);\n      }\n\n      if (post && action === \"remove\") {\n        this.data.posts.push(post);\n        this.ui.updatePosts(this.data.posts);\n      }\n    }\n  }], [{\n    key: \"toolbox\",\n    get: function get() {\n      return {\n        icon: _svg_article_line_svg__WEBPACK_IMPORTED_MODULE_3___default.a,\n        title: \"PostList\"\n      };\n    }\n  }, {\n    key: \"isReadOnlySupported\",\n    get: function get() {\n      return true;\n    }\n  }]);\n\n  return PostList;\n}();\n\n\n\n//# sourceURL=webpack://PostList/./src/index.js?");

/***/ }),

/***/ "./src/service.js":
/*!************************!*\
  !*** ./src/service.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Service; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar fakeData = [{\n  status: \"public\",\n  postFormat: \"normal\",\n  _id: \"605d8767d41ab0f3e448a5d9\",\n  altPseudonym: \"Ngọc Châu\",\n  uniqueId: \"5be6a7890c048\",\n  title: 'Đáp trả video bị quay lén, Decao và bạn gái tin đồn tung \"hint\" hẹn hò',\n  createdAt: \"2021-03-26T07:04:07.434Z\",\n  updatedAt: \"2021-05-12T09:16:19.439Z\",\n  __v: 0,\n  author: {\n    confirmed: true,\n    blocked: false,\n    ownedCategories: [\"5fa3a205dbc9b3001188000c\"],\n    _id: \"5fa8a9cc94acf10011b9d3b4\",\n    username: \"ctvsbiz\",\n    email: \"ctvsbiz@viezone.vn\",\n    displayName: \"CTV Social Biz\",\n    provider: \"local\",\n    createdAt: \"2020-11-09T02:30:36.140Z\",\n    updatedAt: \"2021-05-20T03:07:31.654Z\",\n    __v: 0,\n    cmsRole: \"5fa3adfcdbc9b3001188001e\",\n    lastLogin: \"2021-05-20T03:07:31.649Z\",\n    id: \"5fa8a9cc94acf10011b9d3b4\"\n  },\n  category: {\n    hidden: false,\n    children: [],\n    _id: \"5faa057dbc506f0011ee41d6\",\n    title: \"Instagram Star\",\n    slug: \"instagram-star\",\n    idxTitle: \"instagram star\",\n    createdAt: \"2020-11-10T03:14:05.000Z\",\n    updatedAt: \"2020-11-10T03:14:05.004Z\",\n    __v: 0,\n    id: \"5faa057dbc506f0011ee41d6\"\n  },\n  cover: null,\n  designer: null,\n  photographer: null,\n  pseudonym: null,\n  seoThumbnail: null,\n  serie: null,\n  thumbnail: {\n    _id: \"605d90bad41ab03ff548a5fe\",\n    name: \"1616744630709.jpeg\",\n    hash: \"1616744630709_4d4455321d\",\n    ext: \".jpeg\",\n    mime: \"image/jpeg\",\n    size: 127.22,\n    width: 1200,\n    height: 675,\n    url: \"https://media.viezone.vn/prod/2021/3/26/1616744630709_4d4455321d.jpeg\",\n    formats: {\n      thumbnail: {\n        name: \"thumbnail_1616744630709.jpeg\",\n        hash: \"thumbnail_1616744630709_4d4455321d\",\n        ext: \".jpeg\",\n        mime: \"image/jpeg\",\n        width: 245,\n        height: 138,\n        size: 8.76,\n        path: \"prod/2021/3/26\",\n        url: \"https://media.viezone.vn/prod/2021/3/26/thumbnail_1616744630709_4d4455321d.jpeg\"\n      },\n      large: {\n        name: \"large_1616744630709.jpeg\",\n        hash: \"large_1616744630709_4d4455321d\",\n        ext: \".jpeg\",\n        mime: \"image/jpeg\",\n        width: 1000,\n        height: 563,\n        size: 96.62,\n        path: \"prod/2021/3/26\",\n        url: \"https://media.viezone.vn/prod/2021/3/26/large_1616744630709_4d4455321d.jpeg\"\n      },\n      medium: {\n        name: \"medium_1616744630709.jpeg\",\n        hash: \"medium_1616744630709_4d4455321d\",\n        ext: \".jpeg\",\n        mime: \"image/jpeg\",\n        width: 750,\n        height: 422,\n        size: 59.76,\n        path: \"prod/2021/3/26\",\n        url: \"https://media.viezone.vn/prod/2021/3/26/medium_1616744630709_4d4455321d.jpeg\"\n      },\n      small: {\n        name: \"small_1616744630709.jpeg\",\n        hash: \"small_1616744630709_4d4455321d\",\n        ext: \".jpeg\",\n        mime: \"image/jpeg\",\n        width: 500,\n        height: 281,\n        size: 29.25,\n        path: \"prod/2021/3/26\",\n        url: \"https://media.viezone.vn/prod/2021/3/26/small_1616744630709_4d4455321d.jpeg\"\n      }\n    },\n    provider: \"viezone-s3\",\n    related: [\"605d8767d41ab0f3e448a5d9\"],\n    createdAt: \"2021-03-26T07:43:54.381Z\",\n    updatedAt: \"2021-03-26T07:43:56.839Z\",\n    __v: 0,\n    id: \"605d90bad41ab03ff548a5fe\"\n  },\n  vCover: null,\n  videoEditor: null,\n  lockBy: null,\n  publishedAt: \"2021-03-26T09:15:24.000Z\",\n  royalty: {\n    _id: \"607ea0b3d41ab000d048b81c\",\n    author: {\n      userType: \"author\",\n      rate: null,\n      royalty: 0,\n      bonus: 0,\n      userRole: \"ctv\",\n      _id: \"607ea0b3d41ab0bd9648b81d\",\n      slug: \"tin-xao\",\n      title: \"Tin xào\",\n      __v: 0,\n      user: {\n        confirmed: true,\n        blocked: false,\n        ownedCategories: [\"5fa3a205dbc9b3001188000c\"],\n        _id: \"5fa8a9cc94acf10011b9d3b4\",\n        username: \"ctvsbiz\",\n        email: \"ctvsbiz@viezone.vn\",\n        displayName: \"CTV Social Biz\",\n        provider: \"local\",\n        createdAt: \"2020-11-09T02:30:36.140Z\",\n        updatedAt: \"2021-05-20T03:07:31.654Z\",\n        __v: 0,\n        cmsRole: \"5fa3adfcdbc9b3001188001e\",\n        lastLogin: \"2021-05-20T03:07:31.649Z\",\n        id: \"5fa8a9cc94acf10011b9d3b4\"\n      },\n      rateOptions: {\n        normalUser: [{\n          rate: \"Fixed\",\n          royalty: 20000\n        }],\n        ctv: [{\n          rate: \"Fixed\",\n          royalty: 20000\n        }]\n      },\n      id: \"607ea0b3d41ab0bd9648b81d\"\n    },\n    photographers: [],\n    videos: [],\n    createdAt: \"2021-04-20T09:36:51.669Z\",\n    updatedAt: \"2021-05-11T04:42:46.913Z\",\n    __v: 2,\n    post: \"605d8767d41ab0f3e448a5d9\",\n    note: \"\",\n    id: \"607ea0b3d41ab000d048b81c\"\n  },\n  id: \"605d8767d41ab0f3e448a5d9\"\n}, {\n  status: \"public\",\n  postFormat: \"normal\",\n  _id: \"60939af014e705001106420b\",\n  altPseudonym: \"Mí\",\n  title: \"Màn tiêu tiền không ai ngờ trong khoảnh khắc không-được-xài-tiền của Khánh Vân tại Mỹ\",\n  uniqueId: \"2ZxFRc4MUPqw\",\n  createdAt: \"2021-05-06T07:29:52.364Z\",\n  updatedAt: \"2021-05-07T06:55:32.781Z\",\n  __v: 0,\n  author: {\n    confirmed: true,\n    blocked: false,\n    ownedCategories: [\"5fa3a1abdbc9b30011880009\"],\n    _id: \"5fa8a92194acf10011b9d3b1\",\n    username: \"ctvgiaitri\",\n    email: \"ctvgiaitri@viezone.vn\",\n    displayName: \"CTV Giải Trí\",\n    provider: \"local\",\n    createdAt: \"2020-11-09T02:27:45.917Z\",\n    updatedAt: \"2021-05-19T12:41:22.854Z\",\n    __v: 0,\n    cmsRole: \"5fa3adfcdbc9b3001188001e\",\n    lastLogin: \"2021-05-19T12:41:22.848Z\",\n    id: \"5fa8a92194acf10011b9d3b1\"\n  },\n  category: {\n    hidden: false,\n    children: [],\n    _id: \"5ffd3e62059099001197510b\",\n    title: \"Star Zone\",\n    slug: \"star-zone\",\n    idxTitle: \"star zone\",\n    createdAt: \"2021-01-12T06:14:58.884Z\",\n    updatedAt: \"2021-01-13T03:55:54.844Z\",\n    __v: 0,\n    id: \"5ffd3e62059099001197510b\"\n  },\n  designer: null,\n  photographer: null,\n  pseudonym: null,\n  serie: null,\n  thumbnail: {\n    _id: \"6093a35f14e70500110642ad\",\n    name: \"kv-1112222.gif\",\n    hash: \"kv_1112222_fc1e182212\",\n    ext: \".gif\",\n    mime: \"image/gif\",\n    size: 16941.04,\n    url: \"https://media.viezone.vn/prod/2021/5/6/kv_1112222_fc1e182212.gif\",\n    provider: \"viezone-s3\",\n    width: 1200,\n    height: 675,\n    related: [\"60939af014e705001106420b\", \"60939af014e705001106420b\", \"60939af014e705001106420b\"],\n    createdAt: \"2021-05-06T08:05:51.408Z\",\n    updatedAt: \"2021-05-06T08:06:10.451Z\",\n    __v: 0,\n    id: \"6093a35f14e70500110642ad\"\n  },\n  videoEditor: null,\n  lockBy: null,\n  publishedAt: \"2021-05-07T06:45:18.686Z\",\n  royalty: {\n    _id: \"6094e46414e70500110646a7\",\n    author: null,\n    photographers: [],\n    videos: [],\n    createdAt: \"2021-05-07T06:55:32.739Z\",\n    updatedAt: \"2021-05-07T06:55:32.797Z\",\n    __v: 0,\n    post: \"60939af014e705001106420b\",\n    id: \"6094e46414e70500110646a7\"\n  },\n  id: \"60939af014e705001106420b\"\n}];\n\nvar fakeAddItem = function fakeAddItem() {\n  return new Promise(function (resolve, reject) {\n    setTimeout(function () {\n      var post = fakeData[0];\n      resolve(post);\n    }, 300);\n  });\n};\n\nvar Service = /*#__PURE__*/function () {\n  function Service(_ref) {\n    var config = _ref.config,\n        onSelect = _ref.onSelect;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Service);\n\n    this.config = config;\n    this.onSelect = onSelect;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Service, [{\n    key: \"selectPost\",\n    value: function selectPost() {\n      var _this = this;\n\n      fakeAddItem().then(function (data) {\n        _this.onSelect(data);\n      });\n    }\n  }]);\n\n  return Service;\n}();\n\n\n\n//# sourceURL=webpack://PostList/./src/service.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/src??ref--5-2!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://PostList/./src/style.css?");

/***/ }),

/***/ "./src/svg/article-line.svg":
/*!**********************************!*\
  !*** ./src/svg/article-line.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\" width=\\\"24\\\" height=\\\"24\\\"><path fill=\\\"none\\\" d=\\\"M0 0h24v24H0z\\\"></path><path d=\\\"M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z\\\"></path></svg>\"\n\n//# sourceURL=webpack://PostList/./src/svg/article-line.svg?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UI; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\n // return element for tool\n\nvar UI = /*#__PURE__*/function () {\n  function UI(_ref) {\n    var api = _ref.api,\n        config = _ref.config,\n        onSelectPost = _ref.onSelectPost,\n        readOnly = _ref.readOnly;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UI);\n\n    this.api = api;\n    this.config = config;\n    this.onSelectPost = onSelectPost;\n    this.onRemovePost = onRemovePost;\n    this.readOnly = readOnly;\n    this.nodes = {\n      wrapper: Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"makeElement\"])(\"div\", [this.CSS.baseClass, this.CSS.wrapper]),\n      // imageContainer: makeElement(\"div\", [this.CSS.imageContainer]),\n      // imageEl: undefined,\n      // imagePreloader: makeElement(\"div\", this.CSS.imagePreloader),\n      // caption: makeElement(\"div\", [this.CSS.input, this.CSS.caption], {\n      //   contentEditable: !this.readOnly,\n      // }),\n      listContainer: Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"makeElement\"])(\"div\", [this.CSS.listContainer]),\n      post: undefined,\n      selectPostButton: this._createSelectPostButton()\n    };\n    /**\r\n     * Create base structure\r\n     *  <wrapper>\r\n     *    <image-container>\r\n     *      <image-preloader />\r\n     *    </image-container>\r\n     *    <caption />\r\n     *    <select-file-button />\r\n     *  </wrapper>\r\n     */\n    // create base structure\n    // <wrapper>\n    //   <post></post>\n    //   <post></post>\n    //   <select-post-button></select-post-button>\n    // </wrapper>\n    // this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder;\n    // this.nodes.listContainer.appendChild(this.nodes.post);\n\n    this.nodes.wrapper.appendChild(this.nodes.listContainer);\n    this.nodes.wrapper.appendChild(this.nodes.selectPostButton);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UI, [{\n    key: \"CSS\",\n    get: function get() {\n      return {\n        baseClass: this.api.styles.block,\n        loading: this.api.styles.loader,\n        input: this.api.styles.input,\n        button: this.api.styles.button,\n\n        /**\r\n         * Tool's classes\r\n         */\n        imageContainer: \"image-tool__image\",\n        imagePreloader: \"image-tool__image-preloader\",\n        imageEl: \"image-tool__image-picture\",\n        caption: \"image-tool__caption\",\n        wrapper: \"vz-postlist-tool\",\n        listContainer: \"vz-postlist-tool__list\",\n        post: \"vz-postlist-tool__list__post\",\n        selectPostButton: \"vz-postlist-tool__select-post-button\",\n        removeBtn: \"vz-postlist-tool__remove-post-button\"\n      };\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return this.nodes.wrapper;\n    }\n  }, {\n    key: \"updatePosts\",\n    value: function updatePosts(posts) {}\n  }, {\n    key: \"_createSelectPostButton\",\n    value: function _createSelectPostButton() {\n      var _this = this;\n\n      var button = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"makeElement\"])(\"button\", [this.CSS.selectPostButton]);\n      button.innerHTML = this.config.buttonContent || \"\".concat(this.api.i18n.t(\"Select Post\"));\n      button.addEventListener(\"click\", function () {\n        _this.onSelectPost();\n      });\n      return button;\n    }\n  }]);\n\n  return UI;\n}();\n\n\n\n//# sourceURL=webpack://PostList/./src/ui.js?");

/***/ })

/******/ })["default"];
});