webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hamburger */ "./components/hamburger.js");







var _jsxFileName = "/home/kusti8/Documents/Github/webmaster2019/components/header.js";



var LargeMenu = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "header__LargeMenu",
  componentId: "sc-1sao6py-0"
})(["display:flex;justify-content:space-around;flex-direction:row;align-items:center;height:100%;@media screen and (max-width:", "px){display:none;}width:100vw;background-color:#242526;opacity:0.8;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);"], function (props) {
  return props.size;
});
var SmallMenu = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(LargeMenu).withConfig({
  displayName: "header__SmallMenu",
  componentId: "sc-1sao6py-1"
})(["display:none;justify-content:space-between;@media screen and (max-width:", "px){display:flex;}"], function (props) {
  return props.size;
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "header__Container",
  componentId: "sc-1sao6py-2"
})(["position:fixed;top:0px;height:55px;"]);
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "header__NavItem",
  componentId: "sc-1sao6py-3"
})(["color:#f2f5f9;font-family:'Raleway',sans-serif;text-transform:uppercase;letter-spacing:0.4em;margin:25px;"]);
var MobileMenu = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "header__MobileMenu",
  componentId: "sc-1sao6py-4"
})(["transition:transform 1s cubic-bezier(0.17,0.67,0.83,0.67);width:100vw;height:100vh;background-color:#242526;position:fixed;top:0;left:0;z-index:5;"]);
var MobileMenuHide = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(MobileMenu).withConfig({
  displayName: "header__MobileMenuHide",
  componentId: "sc-1sao6py-5"
})(["transform:translate3d(-100vh,0,0);"]);
var MobileMenuShow = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(MobileMenu).withConfig({
  displayName: "header__MobileMenuShow",
  componentId: "sc-1sao6py-6"
})(["transform:translate3d(0vw,0,0);overflow:hidden;"]);

var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      smallMenuOpen: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "openCloseMenu",
    value: function openCloseMenu(val) {
      this.setState({
        smallMenuOpen: val
      });

      if (val) {}
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LargeMenu, {
        size: 750,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Hello"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Main"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "You")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SmallMenu, {
        size: 750,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Main"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_hamburger__WEBPACK_IMPORTED_MODULE_9__["default"], {
        smallMenuOpen: this.state.smallMenuOpen,
        setOpen: function setOpen(val) {
          return _this2.openCloseMenu(val);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), this.state.smallMenuOpen ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MobileMenuShow, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MobileMenuHide, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.c534b9b5070dcf7369c1.hot-update.js.map