/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Andrew on 9/12/2016.
	 */
	"use strict";
	__webpack_require__(1);
	var Game = __webpack_require__(5);
	new Game();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body {\r\n    background: #062305;\r\n}\r\n\r\n#ctn {\r\n    width: 512px;\r\n    height: 700px;\r\n    margin-left: auto ;\r\n    margin-right: auto ;\r\n}\r\n\r\n#spinNumber {\r\n    padding: 10px 10px;\r\n    margin: 8px 0;\r\n    box-sizing: border-box;\r\n    background-color: #f6f599;\r\n    border: 2px solid #a4ab64;\r\n    border-radius: 4px;\r\n    -webkit-border-radius: 4px;\r\n    -moz-border-radius: 4px;\r\n    width: 80px;\r\n    color: #091f0f;\r\n    font-size: 35px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n#spinBtn {\r\n    background-color: #6ca753;\r\n    width: 80px;\r\n    border: 2px solid #a4ab64;\r\n    border-radius: 4px;\r\n    padding: 12px 5px;\r\n    color: #FFFFBC;\r\n    font-size: 25px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n#spinBtn:hover {\r\n    background-color: #7fb64e;\r\n}\r\n\r\n#spinBtn:focus {\r\n    outline:0;\r\n}\r\n\r\n#spinNumber:focus {\r\n    outline:0;\r\n}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Andrew on 9/12/2016.
	 */
	"use strict";
	var Spinner = __webpack_require__(6);
	var Game = (function () {
	    function Game() {
	        this._spinner = new Spinner('res/zoom_wheel.png');
	        var self = this;
	        var button = document.getElementById("spinBtn");
	        var textField = document.getElementById("spinNumber");
	        button.addEventListener('click', function () {
	            var spinNumber = parseInt(textField.value);
	            if (isNaN(spinNumber) || spinNumber < 0 || spinNumber > 36) {
	                alert("Invalid number!");
	            }
	            else {
	                if (self._spinner.isSpinNow()) {
	                    alert("Please wait...");
	                    return;
	                }
	                self._spinner.spin(spinNumber);
	            }
	        });
	    }
	    return Game;
	}());
	module.exports = Game;


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Created by Andrew on 9/12/2016.
	 */
	"use strict";
	var Spinner = (function () {
	    function Spinner(src) {
	        this._fps = 60;
	        this._interval = 1000 / this._fps;
	        this._canvas = document.getElementById('canvas');
	        this._context = this._canvas.getContext('2d');
	        this._endInterval = Date.now();
	        this._dt = 0;
	        this._counter = 0;
	        this._angleToRotate = 0;
	        this._speed = 1;
	        this._maxSpeed = 5;
	        this._minSpeed = 0.3;
	        this._img = new Image();
	        this._img.src = src;
	        this._numbers = [
	            0, 32, 15, 19, 4, 21,
	            2, 25, 17, 34, 6, 27,
	            13, 36, 11, 30, 8, 23,
	            10, 5, 24, 16, 33, 1,
	            20, 14, 31, 9, 22, 18,
	            29, 7, 28, 12, 35, 3, 26];
	        this._isSpin = false;
	        this._temp = 0;
	        this._context.globalCompositeOperation = 'destination-over';
	        var self = this;
	        window.requestAnimationFrame(function () { self.draw(); });
	    }
	    Spinner.prototype.draw = function () {
	        var self = this;
	        window.requestAnimationFrame(function () { self.draw(); });
	        this._startInterval = Date.now();
	        this._deltaInterval = this._startInterval - this._endInterval;
	        if (this._deltaInterval > this._interval) {
	            this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
	            this._context.fillStyle = "#A3AA63";
	            this._context.beginPath();
	            this._context.moveTo(this._canvas.width / 2 - 12, 0);
	            this._context.lineTo(this._canvas.width / 2 + 12, 0);
	            this._context.lineTo(this._canvas.width / 2, 30);
	            this._context.fill();
	            this._context.save();
	            this._context.translate(this._canvas.width / 2, this._canvas.height / 2);
	            this._context.rotate(this._counter * Math.PI / 180);
	            this._context.drawImage(this._img, -this._canvas.width / 2, -this._canvas.height / 2);
	            this._context.restore();
	            if (this._angleToRotate > 0) {
	                this._dt++;
	                this.updateSpeed();
	                this._counter -= this._speed;
	                this._angleToRotate -= this._speed;
	                this._isSpin = true;
	            }
	            else {
	                this._angleToRotate = 0;
	                this._isSpin = false;
	            }
	            this._endInterval = this._startInterval - (this._deltaInterval % this._interval);
	        }
	    };
	    ;
	    Spinner.prototype.updateSpeed = function () {
	        if (this._angleToRotate <= 360)
	            if (this._speed > this._minSpeed)
	                this._speed -= .035;
	    };
	    Spinner.prototype.spin = function (number) {
	        var step = 360 / this._numbers.length;
	        var index = this._numbers.indexOf(number);
	        if (index == -1)
	            return;
	        var dirtySpinValue = (Math.random() * 3 + 2 | 0) * 360;
	        this._angleToRotate = (this._counter < 0 ? this._counter % 360 + 360 : this._counter % 360) + index * step + dirtySpinValue;
	        this._temp = this._angleToRotate;
	        this._speed = this._maxSpeed;
	        this._dt = 0;
	    };
	    Spinner.prototype.isSpinNow = function () {
	        return this._isSpin;
	    };
	    return Spinner;
	}());
	module.exports = Spinner;


/***/ }
/******/ ]);