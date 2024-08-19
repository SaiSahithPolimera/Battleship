/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/battlesBackdrop.jpg */ \"./src/images/battlesBackdrop.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n#mainContainer {\n  display: grid;\n  gap: 12px;\n  width: 100%;\n  align-items: center;\n  grid-template-columns: 1fr 1.7fr 0.1fr;\n}\n\n#soundButtonContainer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#soundButtonContainer img {\n  width: 50%;\n  padding: 12px;\n  margin-bottom: 12px;\n  margin-right: 12px;\n}\n#soundButtonContainer img:hover {\n  cursor: pointer;\n}\n#titleContainer {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n#battleShip {\n  opacity: 0.9;\n  width: 10%;\n  height: 40%;\n  border-radius: 25px;\n  box-shadow: 5px 8px 37px 38px rgba(0, 0, 0, 0.92);\n}\n\n#headingImg {\n  width: 30%;\n  height: 100%;\n}\n\n#gameBoard div {\n  display: flex;\n}\n\ndiv[id^=\"cell\"] {\n  border: 2px solid rgb(255, 255, 255);\n}\n\n#real,\n#computer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 25px;\n  justify-content: center;\n}\n\n#shipContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 250px;\n  width: 850px;\n  justify-content: center;\n  border: 1px solid #ccc;\n  gap: 12px;\n  padding: 25px 0px 25px 0px;\n}\n\n#shipContainer img#\\\\33 {\n  width: 16%;\n  height: 52px;\n}\n#shipContainer img#\\\\34 {\n  width: 26%;\n}\n#shipContainer img#\\\\35 {\n  width: 36%;\n}\n#shipContainer img#\\\\36 {\n  width: 32%;\n}\n#gameBoard img#\\\\33 {\n  width: 280%;\n}\n#gameBoard img#\\\\34 {\n  width: 410%;\n}\n#gameBoard img#\\\\35 {\n  width: auto;\n}\n#gameBoard img#\\\\36 {\n  width: 410%;\n}\n\n#gameBoardContainer {\n  padding: 25px;\n  display: grid;\n  grid-template-columns: 1fr 0.1fr 1fr;\n  align-items: center;\n  box-sizing: border-box;\n  justify-content: center;\n}\n\nimg.hide {\n  display: none;\n}\n\n.drag-over {\n  background-color: #bf300e;\n}\n\n#playerIndicator {\n  color: white;\n  font-size: 1.9rem;\n}\n\n#attackButton,\n#attackButton img {\n  border-radius: 50%;\n  border: none;\n  padding: 0;\n}\n\n#attackButton img {\n  width: 150px;\n  height: 150px;\n}\n\n#attackButton:hover {\n  cursor: pointer;\n  transform: scale(1.2);\n  transition: ease-in 0.4s;\n  box-shadow: 5px 5px 19px 17px #832208;\n}\n\n#playerContainer {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  height: 100%;\n  justify-items: center;\n  padding: 14px;\n}\n\n#statusContainer {\n  width: 400px;\n  align-self: center;\n  border: 4px solid black;\n  padding: 12px;\n}\n\n#statusIndicator {\n  border: 4px solid rgb(55, 2, 2);\n  padding: 25px;\ntext-align: center;\n  color: white;\n  font-size: 1.5rem;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://code/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://code/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://code/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://code/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://code/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://code/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://code/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://code/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://code/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://code/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://code/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/board.js":
/*!*********************************!*\
  !*** ./src/components/board.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   board: () => (/* binding */ board),\n/* harmony export */   isGameOver: () => (/* binding */ isGameOver)\n/* harmony export */ });\n/* harmony import */ var _images_attack_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/attack.jpg */ \"./src/images/attack.jpg\");\n/* harmony import */ var _images_water_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/water.png */ \"./src/images/water.png\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ \"./src/components/controller.js\");\n/* harmony import */ var _shipContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipContainer */ \"./src/components/shipContainer.js\");\n/* harmony import */ var _audio_blast_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../audio/blast.mp3 */ \"./src/audio/blast.mp3\");\n\n\n\n\n\n\nlet userGameBoard = null;\nlet isGameOver = false;\nconst board = (playerId) => {\n  const gameBoard = document.createElement(\"div\");\n  const audio = document.createElement(\"audio\");\n  const source = document.createElement(\"source\");\n  source.src = _audio_blast_mp3__WEBPACK_IMPORTED_MODULE_4__;\n  if (playerId === \"real\") {\n    userGameBoard = gameBoard;\n  }\n  source.type = \"audio/mpeg\";\n  audio.appendChild(source);\n  gameBoard.appendChild(audio);\n  gameBoard.id = \"gameBoard\";\n  let rowCount = 10;\n  let colCount = 10;\n  const userAttack = (image, rowCounter, colCounter, cell) => {\n    {\n      const statusIndicator = document.getElementById(\"statusIndicator\");\n      if (cell.hasChildNodes() === true) {\n        (0,_controller__WEBPACK_IMPORTED_MODULE_2__.typeText)(statusIndicator, \"Cannot attack same position twice!\", 100);\n        return;\n      }\n      if (_controller__WEBPACK_IMPORTED_MODULE_2__.computerBoard.receiveAttack(rowCounter, colCounter) === true) {\n        image.src = _images_attack_jpg__WEBPACK_IMPORTED_MODULE_0__;\n        cell.appendChild(image);\n        (0,_controller__WEBPACK_IMPORTED_MODULE_2__.typeText)(statusIndicator, \"💥 You attacked enemy ship!\", 100);\n        audio.play();\n      } else {\n        (0,_controller__WEBPACK_IMPORTED_MODULE_2__.typeText)(statusIndicator, \"It's a miss!\", 100);\n        image.src = _images_water_png__WEBPACK_IMPORTED_MODULE_1__;\n        cell.appendChild(image);\n      }\n      image.draggable = false;\n      if (playerId === \"real\") {\n        (0,_controller__WEBPACK_IMPORTED_MODULE_2__.typeText)(statusIndicator, \"Only enemy can attack your fleet\", 100);\n        return;\n      }\n    }\n  };\n\n  const launchComputerAttack = (rowCounter, colCounter) => {\n    const attackedCell = document.getElementById(\n      \"cell\" + rowCounter + colCounter,\n    );\n    const image = document.createElement(\"img\");\n    userGameBoard.querySelectorAll(\".droppable\").forEach((cell) => {\n      if (cell.id === attackedCell.id) {\n        if (cell.hasChildNodes() === true) {\n          return;\n        }\n        if (_shipContainer__WEBPACK_IMPORTED_MODULE_3__.userBoard.receiveAttack(rowCounter, colCounter) === true) {\n          image.src = _images_attack_jpg__WEBPACK_IMPORTED_MODULE_0__;\n          cell.appendChild(image);\n          (0,_controller__WEBPACK_IMPORTED_MODULE_2__.typeText)(statusIndicator, \"💥 Enemy attacked your ship!\", 100);\n          audio.play();\n        } else {\n          (0,_controller__WEBPACK_IMPORTED_MODULE_2__.typeText)(statusIndicator, \"Enemy missed!\", 100);\n          image.src = _images_water_png__WEBPACK_IMPORTED_MODULE_1__;\n          cell.appendChild(image);\n        }\n      }\n      image.draggable = false;\n    });\n  };\n\n  for (let rowCounter = 0; rowCounter < rowCount; rowCounter++) {\n    const row = document.createElement(\"div\");\n    for (let colCounter = 0; colCounter < colCount; colCounter++) {\n      const cell = document.createElement(\"div\");\n      cell.id = \"cell\" + rowCounter + colCounter;\n      const image = document.createElement(\"img\");\n      cell.className = playerId;\n      cell.addEventListener(\"click\", () => {\n        if (isGameOver === true) {\n          alert(\"Game over! Restart to play new game\");\n        }\n        const statusIndicator = document.getElementById(\"statusIndicator\");\n        const computerShipContainer =\n          document.getElementById(\"computer\").lastChild;\n        const userShipContainer = document.getElementById(\"real\").lastChild;\n        if (\n          computerShipContainer.hasChildNodes() ||\n          userShipContainer.hasChildNodes()\n        ) {\n          (0,_controller__WEBPACK_IMPORTED_MODULE_2__.typeText)(\n            statusIndicator,\n            \"Attacks can be launched only after placing all ships!\",\n            100,\n          );\n          return;\n        }\n        if (playerId === \"computer\") {\n          const coordinates = (0,_controller__WEBPACK_IMPORTED_MODULE_2__.generateCoordinates)();\n          userAttack(image, rowCounter, colCounter, cell);\n          launchComputerAttack(\n            coordinates.rowPosition,\n            coordinates.colPosition,\n          );\n        }\n        if (_controller__WEBPACK_IMPORTED_MODULE_2__.computerBoard.report() === true) {\n          (0,_controller__WEBPACK_IMPORTED_MODULE_2__.typeText)(statusIndicator, \"You won the game!\", 100);\n          isGameOver = true;\n        }\n        if (_shipContainer__WEBPACK_IMPORTED_MODULE_3__.userBoard.report() === true) {\n          (0,_controller__WEBPACK_IMPORTED_MODULE_2__.typeText)(statusIndicator, \"Enemy won the game!\", 100);\n          isGameOver = true;\n        }\n      });\n      if (playerId === \"computer\") {\n        // pass\n      } else {\n        cell.classList.add(\"droppable\");\n      }\n      cell.style.width = \"55px\";\n      cell.style.height = \"55px\";\n      row.appendChild(cell);\n    }\n    gameBoard.appendChild(row);\n  }\n  return gameBoard;\n};\n\n\n\n\n//# sourceURL=webpack://code/./src/components/board.js?");

/***/ }),

/***/ "./src/components/controller.js":
/*!**************************************!*\
  !*** ./src/components/controller.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerBoard: () => (/* binding */ computerBoard),\n/* harmony export */   controller: () => (/* binding */ controller),\n/* harmony export */   generateCoordinates: () => (/* binding */ generateCoordinates),\n/* harmony export */   typeText: () => (/* binding */ typeText)\n/* harmony export */ });\n/* harmony import */ var _utils_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/player */ \"./src/utils/player.js\");\n/* harmony import */ var _utils_player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_player__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/components/board.js\");\n/* harmony import */ var _shipContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipContainer */ \"./src/components/shipContainer.js\");\n/* harmony import */ var _images_attackButton_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/attackButton.jpg */ \"./src/images/attackButton.jpg\");\n/* harmony import */ var _utils_gameBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/gameBoard */ \"./src/utils/gameBoard.js\");\n/* harmony import */ var _utils_gameBoard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_gameBoard__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst computerBoard = _utils_gameBoard__WEBPACK_IMPORTED_MODULE_4___default()();\ncomputerBoard.initializeBoard();\nlet shipCount = 0;\nconst controller = () => {\n  const players = _utils_player__WEBPACK_IMPORTED_MODULE_0___default()();\n  const mainContainer = document.createElement(\"div\");\n  const attackButtonContainer = document.createElement(\"div\");\n  const playerContainer = document.createElement(\"div\");\n  playerContainer.id = \"playerContainer\";\n  attackButtonContainer.id = \"attackButtonContainer\";\n  const statusContainer = document.createElement(\"div\");\n  statusContainer.id = \"statusContainer\";\n  const statusIndicator = document.createElement(\"div\");\n  statusIndicator.id = \"statusIndicator\";\n  statusIndicator.textContent = \"\";\n  statusContainer.appendChild(statusIndicator);\n  const attackButton = document.createElement(\"button\");\n  attackButton.id = \"attackButton\";\n  const buttonBackground = document.createElement(\"img\");\n  buttonBackground.src = _images_attackButton_jpg__WEBPACK_IMPORTED_MODULE_3__;\n  attackButton.appendChild(buttonBackground);\n  attackButtonContainer.appendChild(attackButton);\n  let message = \"\";\n  mainContainer.id = \"gameBoardContainer\";\n  playerContainer.appendChild(statusContainer);\n  playerContainer.appendChild(attackButtonContainer);\n  players.forEach((player) => {\n    const playerIndicator = document.createElement(\"div\");\n    const playerInterface = document.createElement(\"div\");\n    playerIndicator.id = \"playerIndicator\";\n    playerInterface.id = player.type;\n    if (player.type === \"computer\") {\n      message = \"Enemy Waters\";\n    } else {\n      message = \"Your waters\";\n    }\n    playerIndicator.textContent = message;\n    playerInterface.appendChild(playerIndicator);\n    playerInterface.appendChild((0,_board__WEBPACK_IMPORTED_MODULE_1__.board)(player.type));\n    playerInterface.appendChild((0,_shipContainer__WEBPACK_IMPORTED_MODULE_2__.shipContainer)(player.type));\n    mainContainer.appendChild(playerInterface);\n    if (player.type !== \"computer\") {\n      mainContainer.appendChild(playerContainer);\n    }\n  });\n\n  document.addEventListener(\"DOMContentLoaded\", () => {\n    typeText(\n      statusIndicator,\n      \"Place your ships and press attack button to start..\",\n      100,\n    );\n    let placedShips = [];\n    const computerShips = document.querySelectorAll(\"#shipContainer .computer\");\n    const computerShipContainer = document.getElementById(\"computer\").lastChild;\n    let interval = setInterval(() => {\n      if (shipCount === 4) {\n        clearInterval(interval);\n        typeText(statusIndicator, \"Enemy placed the ships!\", 100);\n      }\n      let coordinates = generateCoordinates();\n      if (!placedShips.includes(coordinates.shipIndex)) {\n        if (\n          computerBoard.placeShip(\n            coordinates.rowPosition + 1,\n            coordinates.colPosition + 1,\n            coordinates.shipIndex + 1,\n            coordinates.axis,\n          ) === true\n        ) {\n          placedShips.push(coordinates.shipIndex);\n          computerShipContainer.removeChild(\n            computerShips[coordinates.shipIndex],\n          );\n\n          shipCount++;\n        }\n      }\n    }, 1000);\n  });\n\n  attackButton.addEventListener(\"click\", attack);\n  return mainContainer;\n};\n\nlet timeOutID;\n\nconst attack = () => {\n  {\n    if (_board__WEBPACK_IMPORTED_MODULE_1__.isGameOver === true) {\n      window.location.reload();\n    }\n    const realPlayer = document.getElementById(\"real\");\n    if (realPlayer.lastChild.hasChildNodes()) {\n      //\n      typeText(statusIndicator, \"\", 0);\n      typeText(\n        statusIndicator,\n        \"You need to place all ships before attacking!\",\n        100,\n      );\n    } else {\n      if (shipCount === 4) {\n        typeText(\n          statusIndicator,\n          \"Ready to attack! click on enemy cells to launch your missiles\",\n          100,\n        );\n      } else {\n        typeText(\n          statusIndicator,\n          \"Please wait until enemy finishes placing ships\",\n          100,\n        );\n      }\n    }\n  }\n};\n\nconst typeText = (element, text, speed) => {\n  if (timeOutID !== undefined) {\n    clearTimeout(timeOutID);\n  }\n\n  element.textContent = \"\";\n  let index = 0;\n  function type() {\n    if (index < text.length) {\n      element.textContent += text.charAt(index);\n      index++;\n      timeOutID = setTimeout(type, speed);\n    }\n  }\n  type();\n};\n\nconst generateCoordinates = () => {\n  let axis = 1;\n  let rowPosition = Math.floor(Math.random() * 10);\n  let colPosition = Math.floor(Math.random() * 10);\n  let shipIndex = Math.floor(Math.random() * 4);\n  return { rowPosition, colPosition, shipIndex, axis };\n};\n\n\n\n\n//# sourceURL=webpack://code/./src/components/controller.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   header: () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _images_battleshipImage_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/battleshipImage.png */ \"./src/images/battleshipImage.png\");\n/* harmony import */ var _images_heading_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/heading.png */ \"./src/images/heading.png\");\n/* harmony import */ var _audio_gameTheme_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio/gameTheme.mp3 */ \"./src/audio/gameTheme.mp3\");\n\n\n\n\nconst header = () => {\n  const section = document.createElement(\"section\");\n  section.id = \"header\";\n  const div = document.createElement(\"div\");\n  div.id = \"mainContainer\";\n  const emptyContainer = document.createElement(\"div\");\n  const titleContainer = document.createElement(\"div\");\n  titleContainer.id = \"titleContainer\";\n  const battleshipImg = document.createElement(\"img\");\n  battleshipImg.src = _images_battleshipImage_png__WEBPACK_IMPORTED_MODULE_0__;\n  battleshipImg.id = \"battleShip\";\n  const headingImg = document.createElement(\"img\");\n  headingImg.src = _images_heading_png__WEBPACK_IMPORTED_MODULE_1__;\n  headingImg.draggable = false;\n  headingImg.style.pointerEvents = \"none\";\n  battleshipImg.style.pointerEvents = \"none\";\n  headingImg.id = \"headingImg\";\n  const soundButtonContainer = document.createElement(\"div\");\n  soundButtonContainer.id = \"soundButtonContainer\";\n  const soundButton = document.createElement(\"img\");\n  const audio = document.createElement(\"audio\");\n  const source = document.createElement(\"source\");\n  source.src = _audio_gameTheme_mp3__WEBPACK_IMPORTED_MODULE_2__;\n  source.type = \"audio/mpeg\";\n  audio.appendChild(source);\n  audio.id = \"gameAudio\";\n  audio.autoplay = true;\n  let toggle = true;\n  soundButton.id = \"soundButton\";\n  soundButton.src =\n    \"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='white' fill-rule='evenodd' d='M18.97 6.97a.75.75 0 0 1 1.06 0l-.53.53l.53-.53h.001l.001.002l.003.002l.007.007l.02.02l.062.069c.05.057.12.138.201.241A6.87 6.87 0 0 1 21.75 11.5a6.87 6.87 0 0 1-1.425 4.189a5 5 0 0 1-.264.31l-.02.02l-.006.007l-.003.002v.001h-.001l-.51-.508l.51.51a.75.75 0 1 1-1.061-1.061l.53.53l-.53-.53h-.001v.001l-.002.001l.005-.005l.033-.036q.048-.052.139-.167a5.37 5.37 0 0 0 .448-5.843a5 5 0 0 0-.448-.685a3 3 0 0 0-.172-.203l-.005-.005a.75.75 0 0 1 .003-1.058m-5.933-3.574c1.163-.767 2.713.068 2.713 1.461v14.286c0 1.394-1.55 2.228-2.713 1.461l-6-3.955a.25.25 0 0 0-.137-.042H4a2.75 2.75 0 0 1-2.75-2.75v-3.714A2.75 2.75 0 0 1 4 7.393h2.9a.25.25 0 0 0 .138-.041z' clip-rule='evenodd'/%3E%3C/svg%3E\";\n  soundButtonContainer.appendChild(soundButton);\n  soundButton.addEventListener(\"click\", () => {\n    if (!toggle) {\n      soundButton.src =\n        \"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='white' fill-rule='evenodd' d='M18.97 6.97a.75.75 0 0 1 1.06 0l-.53.53l.53-.53h.001l.001.002l.003.002l.007.007l.02.02l.062.069c.05.057.12.138.201.241A6.87 6.87 0 0 1 21.75 11.5a6.87 6.87 0 0 1-1.425 4.189a5 5 0 0 1-.264.31l-.02.02l-.006.007l-.003.002v.001h-.001l-.51-.508l.51.51a.75.75 0 1 1-1.061-1.061l.53.53l-.53-.53h-.001v.001l-.002.001l.005-.005l.033-.036q.048-.052.139-.167a5.37 5.37 0 0 0 .448-5.843a5 5 0 0 0-.448-.685a3 3 0 0 0-.172-.203l-.005-.005a.75.75 0 0 1 .003-1.058m-5.933-3.574c1.163-.767 2.713.068 2.713 1.461v14.286c0 1.394-1.55 2.228-2.713 1.461l-6-3.955a.25.25 0 0 0-.137-.042H4a2.75 2.75 0 0 1-2.75-2.75v-3.714A2.75 2.75 0 0 1 4 7.393h2.9a.25.25 0 0 0 .138-.041z' clip-rule='evenodd'/%3E%3C/svg%3E\";\n\n      audio.play();\n      toggle = true;\n    } else {\n      soundButton.src =\n        \"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='white' fill-rule='evenodd' d='M17.47 9.47a.75.75 0 0 1 1.06 0L20 10.94l1.47-1.47a.75.75 0 0 1 1.06 1.06L21.061 12l1.47 1.47a.75.75 0 0 1-1.061 1.06L20 13.06l-1.47 1.47a.75.75 0 0 1-1.06-1.06L18.94 12l-1.47-1.47a.75.75 0 0 1 0-1.06m-4.433-6.074c1.163-.767 2.713.068 2.713 1.461v14.286c0 1.394-1.55 2.228-2.713 1.461l-6-3.955a.25.25 0 0 0-.137-.042H4a2.75 2.75 0 0 1-2.75-2.75v-3.714A2.75 2.75 0 0 1 4 7.393h2.9a.25.25 0 0 0 .138-.041z' clip-rule='evenodd'/%3E%3C/svg%3E\";\n      audio.pause();\n      toggle = false;\n    }\n  });\n  div.appendChild(emptyContainer);\n  titleContainer.appendChild(battleshipImg);\n  titleContainer.appendChild(headingImg);\n  div.appendChild(titleContainer);\n  div.appendChild(soundButtonContainer);\n  section.appendChild(div);\n  section.appendChild(audio);\n  document.addEventListener(\"DOMContentLoaded\", () => {\n    audio.play();\n  });\n  return section;\n};\n\n\n\n\n//# sourceURL=webpack://code/./src/components/header.js?");

/***/ }),

/***/ "./src/components/shipContainer.js":
/*!*****************************************!*\
  !*** ./src/components/shipContainer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shipContainer: () => (/* binding */ shipContainer),\n/* harmony export */   userBoard: () => (/* binding */ userBoard)\n/* harmony export */ });\n/* harmony import */ var _images_Turnout_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/Turnout.jpg */ \"./src/images/Turnout.jpg\");\n/* harmony import */ var _images_Lier_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Lier.jpg */ \"./src/images/Lier.jpg\");\n/* harmony import */ var _images_Zinnia_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Zinnia.jpg */ \"./src/images/Zinnia.jpg\");\n/* harmony import */ var _images_Wielingen_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Wielingen.jpg */ \"./src/images/Wielingen.jpg\");\n/* harmony import */ var _utils_gameBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/gameBoard */ \"./src/utils/gameBoard.js\");\n/* harmony import */ var _utils_gameBoard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_gameBoard__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst fixID = (id, length) => {\n  const match = id.match(/cell(\\d+)/);\n  if (!match) {\n    console.error(\"Invalid ID format:\", id);\n    return id;\n  }\n  const cellNumber = Number(match[1].charAt(1));\n  const difference = cellNumber - length;\n\n  return \"cell\" + match[1].charAt(0) + (cellNumber - (cellNumber - difference));\n};\n\nconst userBoard = _utils_gameBoard__WEBPACK_IMPORTED_MODULE_4___default()();\n\nconst appendShip = (ship) => {\n  const shipContainer = document.getElementById(\"shipContainer\");\n  ship.classList.remove(\"hide\");\n  shipContainer.appendChild(ship);\n};\n\nconst showMessage = (message) => {\n  alert(message);\n  return;\n};\n\nconst shipContainer = (playerID) => {\n  const shipContainer = document.createElement(\"div\");\n  userBoard.initializeBoard();\n  userBoard.getBoard();\n  shipContainer.className = playerID;\n  shipContainer.id = \"shipContainer\";\n  const ships = [\n    { length: 3, path: _images_Turnout_jpg__WEBPACK_IMPORTED_MODULE_0__, name: \"Turnout\" },\n    { length: 4, path: _images_Lier_jpg__WEBPACK_IMPORTED_MODULE_1__, name: \"Lier\" },\n    { length: 5, path: _images_Zinnia_jpg__WEBPACK_IMPORTED_MODULE_2__, name: \"Zinnia\" },\n    { length: 6, path: _images_Wielingen_jpg__WEBPACK_IMPORTED_MODULE_3__, name: \"Wielingen\" },\n  ];\n\n  let currentShipIndex = null;\n\n  ships.forEach((ship, index) => {\n    const shipImage = document.createElement(\"img\");\n    shipImage.src = ship.path;\n    shipImage.id = ship.length;\n    shipImage.className = playerID;\n    shipContainer.appendChild(shipImage);\n    if (playerID !== \"computer\") {\n      shipImage.addEventListener(\"dragstart\", dragStart);\n\n      function dragStart(e) {\n        currentShipIndex = index;\n        e.dataTransfer.setData(\"text/plain\", e.target.id);\n      }\n    } else {\n      shipImage.draggable = false;\n    }\n  });\n\n  if (playerID !== \"computer\") {\n    document.addEventListener(\"DOMContentLoaded\", (e) => {\n      const cells = document.querySelectorAll(\".droppable\");\n      cells.forEach((cell) => {\n        cell.addEventListener(\"dragover\", dragOver);\n        cell.addEventListener(\"dragenter\", dragEnter);\n        cell.addEventListener(\"dragleave\", dragLeave);\n        cell.addEventListener(\"drop\", drop);\n\n        function dragEnter(e) {\n          e.preventDefault();\n          e.target.classList.add(\"drag-over\");\n        }\n\n        function dragOver(e) {\n          e.preventDefault();\n          e.target.classList.add(\"drag-over\");\n        }\n\n        function dragLeave(e) {\n          e.target.classList.remove(\"drag-over\");\n        }\n\n        function drop(e) {\n          e.preventDefault();\n          const targetCell = e.target;\n          let RowPos, columnPos;\n          const id = e.dataTransfer.getData(\"text/plain\");\n          const ship = document.getElementById(id);\n          try {\n            RowPos = Number(targetCell.id.split(\"cell\")[1].charAt(0));\n            columnPos = Number(targetCell.id.split(\"cell\")[1].charAt(1));\n          } catch (err) {\n            showMessage(\"Invalid Positioning ❌\");\n            shipContainer.appendChild(ship);\n            console.error(\"Error extracting row and column positions:\", err);\n            appendShip(ship);\n            return;\n          }\n          if (\n            userBoard.placeShip(\n              RowPos + 1,\n              columnPos + 1,\n              currentShipIndex + 1,\n              1,\n            ) === true\n          ) {\n\n            if (ship.parentNode) {\n              ship.parentNode.removeChild(ship);\n            }\n            e.target.classList.remove(\"drag-over\");\n\n            const columnPosition = Number(\n              targetCell.id.split(\"cell\")[1].charAt(1),\n            );\n            if (columnPosition + Number(id) > 10) {\n              const fixedID = fixID(targetCell.id, id);\n              const fixedPosition = document.getElementById(fixedID);              \n              fixedPosition.appendChild(ship);\n            } else {\n              \n              targetCell.appendChild(ship);\n            }\n\n            ship.classList.remove(\"hide\");\n          }\n          if (\n            userBoard.placeShip(\n              RowPos + 1,\n              columnPos + 1,\n              currentShipIndex + 1,\n              1,\n            ) === false\n          ) {\n            showMessage(\"Invalid Positioning ❌\");\n            const cell = document.getElementById(targetCell.id);\n            cell.classList.remove(\"drag-over\");\n            appendShip(ship);\n            return;\n          }\n        }\n      });\n    });\n  }\n  return shipContainer;\n};\n\n\n\n\n//# sourceURL=webpack://code/./src/components/shipContainer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/controller */ \"./src/components/controller.js\");\n\n\n\n\ndocument.body.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_1__.header)());\ndocument.body.appendChild((0,_components_controller__WEBPACK_IMPORTED_MODULE_2__.controller)());\n\n\n//# sourceURL=webpack://code/./src/index.js?");

/***/ }),

/***/ "./src/utils/gameBoard.js":
/*!********************************!*\
  !*** ./src/utils/gameBoard.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ships = __webpack_require__(/*! ./ship */ \"./src/utils/ship.js\");\n\nconst gameBoard = () => {\n  let board = [];\n  const ships = Ships();\n  const initializeBoard = () => {\n    board = [];\n    let rowSize = 10;\n    let colSize = 10;\n    for (let rowIndex = 0; rowIndex < rowSize; rowIndex++) {\n      let row = [];\n      for (let colIndex = 0; colIndex < colSize; colIndex++) {\n        row.push(\"\");\n      }\n      board.push(row);\n    }\n  };\n\n  const placeShip = (rowPosition, colPosition, shipIndex, axis = 1) => {\n    if (\n      rowPosition === undefined ||\n      colPosition === undefined ||\n      shipIndex === undefined\n    ) {\n      return false;\n    }\n\n    const ship = ships[shipIndex - 1];\n    let indicator = 0;\n\n    const checkForOverlap = (row, col, length, axis) => {\n      for (let postionCounter = 0; postionCounter < length; postionCounter++) {\n        const r = axis === 0 ? row + postionCounter : row;\n        const c = axis === 1 ? col + postionCounter : col;\n        if (board[r][c] !== \"\" && board[r][c] !== shipIndex.toString()) {\n          return false;\n        }\n      }\n      return true;\n    };\n\n    const clearOldPosition = (row, col, length, axis) => {\n      for (let postionCounter = 0; postionCounter < length; postionCounter++) {\n        const r = axis === 0 ? row + postionCounter : row;\n        const c = axis === 1 ? col + postionCounter : col;\n        if (board[r][c] === shipIndex.toString()) {\n          board[r][c] = \"\";\n        }\n      }\n    };\n\n    if (!checkForOverlap(rowPosition - 1, colPosition - 1, ship.length, axis)) {\n      return false;\n    }\n\n    clearOldPosition(rowPosition - 1, colPosition - 1, ship.length, axis);\n\n    for (\n      let postionCounter = 0;\n      postionCounter < ship.length;\n      postionCounter++\n    ) {\n      const r = axis === 0 ? rowPosition - 1 + postionCounter : rowPosition - 1;\n      const c = axis === 1 ? colPosition - 1 + postionCounter : colPosition - 1;\n      board[r][c] = shipIndex.toString();\n      indicator++;\n    }\n\n    return ship.length === indicator;\n  };\n\n  const receiveAttack = (rowPos, colPos) => {\n    const board = getBoard();\n    const cell = board[rowPos][colPos];\n    if (board[rowPos][colPos] === \"A\") {\n      return \"Cannot attack twice in same position\";\n    }\n    board[rowPos][colPos] = \"A\";\n    if (cell === \"1\" || cell === \"2\" || cell === \"3\" || cell === \"4\") {\n      const shipIndex = Number(cell) - 1;\n      ships[shipIndex].hit();\n      return true;\n    } else {\n      return false;\n    }\n  };\n\n  const report = () => {\n    let sunkShipCount = 0;\n    ships.forEach((ship) => {\n      if (ship.isSunk() === true) {\n        sunkShipCount++;\n      }\n    });\n    return sunkShipCount === ships.length;\n  };\n\n  const getBoard = () => {\n    if (board.length === 0) {\n      initializeBoard();\n    }\n    return board;\n  };\n  return { initializeBoard, getBoard, placeShip, receiveAttack, report };\n};\n\nmodule.exports = gameBoard;\n\n\n//# sourceURL=webpack://code/./src/utils/gameBoard.js?");

/***/ }),

/***/ "./src/utils/player.js":
/*!*****************************!*\
  !*** ./src/utils/player.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const gameBoard = __webpack_require__(/*! ./gameBoard */ \"./src/utils/gameBoard.js\");\n\nconst gbd = gameBoard();\n\nconst player = () => {\n  return [\n    {\n      type: \"real\",\n      GameBoard: gbd.getBoard(),\n    },\n    {\n      type: \"computer\",\n      GameBoard: gbd.getBoard(),\n    },\n  ];\n};\n\nmodule.exports = player;\n\n\n//# sourceURL=webpack://code/./src/utils/player.js?");

/***/ }),

/***/ "./src/utils/ship.js":
/*!***************************!*\
  !*** ./src/utils/ship.js ***!
  \***************************/
/***/ ((module) => {

eval("const Ships = () => {\n  return [\n    {\n      name: \"Turn Out\",\n      length: 3,\n      sunk: false,\n      hitCount: 0,\n      hit: function () {\n        this.hitCount += 1;\n      },\n      isSunk: function () {\n        if (this.hitCount === this.length) {\n          this.sunk = true;\n          return this.sunk;\n        } else {\n          return this.sunk;\n        }\n      },\n    },\n    {\n      name: \"Lier\",\n      length: 4,\n      sunk: false,\n      hitCount: 0,\n      hit: function () {\n        this.hitCount += 1;\n      },\n      isSunk: function () {\n        if (this.hitCount === this.length) {\n          this.sunk = true;\n          return this.sunk;\n        } else {\n          return this.sunk;\n        }\n      },\n    },\n    {\n      name: \"Zinnia\",\n      length: 5,\n      sunk: false,\n      hitCount: 0,\n      hit: function () {\n        this.hitCount += 1;\n      },\n      isSunk: function () {\n        if (this.hitCount === this.length) {\n          this.sunk = true;\n          return this.sunk;\n        } else {\n          return this.sunk;\n        }\n      },\n    },\n    {\n      name: \"Wielingen\",\n      length: 6,\n      sunk: false,\n      hitCount: 0,\n      hit: function () {\n        this.hitCount += 1;\n      },\n      isSunk: function () {\n        if (this.hitCount === this.length) {\n          this.sunk = true;\n          return this.sunk;\n        } else {\n          return this.sunk;\n        }\n      },\n    },\n  ];\n};\n\nmodule.exports = Ships;\n\n\n//# sourceURL=webpack://code/./src/utils/ship.js?");

/***/ }),

/***/ "./src/audio/blast.mp3":
/*!*****************************!*\
  !*** ./src/audio/blast.mp3 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"487767dafc5bab0c3275.mp3\";\n\n//# sourceURL=webpack://code/./src/audio/blast.mp3?");

/***/ }),

/***/ "./src/audio/gameTheme.mp3":
/*!*********************************!*\
  !*** ./src/audio/gameTheme.mp3 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"51da4a83d7976e751392.mp3\";\n\n//# sourceURL=webpack://code/./src/audio/gameTheme.mp3?");

/***/ }),

/***/ "./src/images/Lier.jpg":
/*!*****************************!*\
  !*** ./src/images/Lier.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9f889eb6d81ff8f29785.jpg\";\n\n//# sourceURL=webpack://code/./src/images/Lier.jpg?");

/***/ }),

/***/ "./src/images/Turnout.jpg":
/*!********************************!*\
  !*** ./src/images/Turnout.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3ab438d202502885efb0.jpg\";\n\n//# sourceURL=webpack://code/./src/images/Turnout.jpg?");

/***/ }),

/***/ "./src/images/Wielingen.jpg":
/*!**********************************!*\
  !*** ./src/images/Wielingen.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9140fa7e774faf98a6a8.jpg\";\n\n//# sourceURL=webpack://code/./src/images/Wielingen.jpg?");

/***/ }),

/***/ "./src/images/Zinnia.jpg":
/*!*******************************!*\
  !*** ./src/images/Zinnia.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5e89b7f17aeaa895ad13.jpg\";\n\n//# sourceURL=webpack://code/./src/images/Zinnia.jpg?");

/***/ }),

/***/ "./src/images/attack.jpg":
/*!*******************************!*\
  !*** ./src/images/attack.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d77c5ee7ee5d7f2c5f40.jpg\";\n\n//# sourceURL=webpack://code/./src/images/attack.jpg?");

/***/ }),

/***/ "./src/images/attackButton.jpg":
/*!*************************************!*\
  !*** ./src/images/attackButton.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"43c2381cf7229a5563c3.jpg\";\n\n//# sourceURL=webpack://code/./src/images/attackButton.jpg?");

/***/ }),

/***/ "./src/images/battlesBackdrop.jpg":
/*!****************************************!*\
  !*** ./src/images/battlesBackdrop.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c71611ff7266a84cdb85.jpg\";\n\n//# sourceURL=webpack://code/./src/images/battlesBackdrop.jpg?");

/***/ }),

/***/ "./src/images/battleshipImage.png":
/*!****************************************!*\
  !*** ./src/images/battleshipImage.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c81c065921dbb574ff2d.png\";\n\n//# sourceURL=webpack://code/./src/images/battleshipImage.png?");

/***/ }),

/***/ "./src/images/heading.png":
/*!********************************!*\
  !*** ./src/images/heading.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b90906911573c5bd78c9.png\";\n\n//# sourceURL=webpack://code/./src/images/heading.png?");

/***/ }),

/***/ "./src/images/water.png":
/*!******************************!*\
  !*** ./src/images/water.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"abd6a19b5af13703989c.png\";\n\n//# sourceURL=webpack://code/./src/images/water.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;