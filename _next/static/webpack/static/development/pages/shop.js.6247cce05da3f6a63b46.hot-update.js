webpackHotUpdate("static/development/pages/shop.js",{

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
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");







var _jsxFileName = "/home/kusti8/Documents/Github/webmaster2019/components/header.js";




var LargeMenu = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "header__LargeMenu",
  componentId: "sc-1sao6py-0"
})(["display:flex;justify-content:space-around;flex-direction:row;align-items:center;height:100%;@media screen and (max-width:", "px){display:none;}width:100vw;background-color:#242526;opacity:0.7;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);z-index:2;"], function (props) {
  return props.size;
});
var SmallMenu = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(LargeMenu).withConfig({
  displayName: "header__SmallMenu",
  componentId: "sc-1sao6py-1"
})(["display:none;justify-content:space-between;@media screen and (max-width:", "px){display:flex;}z-index:2;"], function (props) {
  return props.size;
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "header__Container",
  componentId: "sc-1sao6py-2"
})(["position:fixed;top:0px;height:55px;z-index:1;"]);
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].a.withConfig({
  displayName: "header__NavItem",
  componentId: "sc-1sao6py-3"
})(["color:#f2f5f9;font-family:\"Raleway\",sans-serif;text-transform:uppercase;letter-spacing:0.4em;margin:25px;text-decoration:none;flex:1;"]);
var NavItemMain = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(NavItem).withConfig({
  displayName: "header__NavItemMain",
  componentId: "sc-1sao6py-4"
})(["font-size:23px;"]);
var MobileMenuStyle = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "header__MobileMenuStyle",
  componentId: "sc-1sao6py-5"
})(["overflow-y:auto;transition:transform 0.3s cubic-bezier(0.17,0.67,0.83,0.67);width:100vw;height:100vh;background-color:#242526;position:fixed;top:0;left:0;z-index:5;display:flex;justify-content:start;align-items:center;flex-direction:column;"]);
var MobileItemStyle = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].a.withConfig({
  displayName: "header__MobileItemStyle",
  componentId: "sc-1sao6py-6"
})(["color:#f2f5f9;text-align:center;width:100%;font-size:300%;margin:40px;font-family:\"Raleway\",sans-serif;font-weight:800;text-decoration:none;"]);
var MobileMenu = Object(react_pose__WEBPACK_IMPORTED_MODULE_10__["default"])(MobileMenuStyle)({
  visible: {
    x: 0,
    y: "0vh",
    delayChildren: 600,
    staggerChildren: 100
  },
  hidden: {
    x: 0,
    y: "100vh"
  },
  initialPose: "hidden"
});
var MobileItem = Object(react_pose__WEBPACK_IMPORTED_MODULE_10__["default"])(MobileItemStyle)({
  visible: {
    y: 0,
    transition: "easeIn"
  },
  hidden: {
    y: "100vh"
  }
});

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
      }); //this.props.fullPageApi(!val);
    }
  }, {
    key: "getMainItem",
    value: function getMainItem() {
      for (var i = 0; i < this.props.items.length; i++) {
        if (this.props.items[i].main) {
          return this.props.items[i];
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LargeMenu, {
        size: 980,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, this.props.items.map(function (item) {
        if (item.main) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NavItemMain, {
            key: item.id,
            href: item.link,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          }, item.title);
        } else {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NavItem, {
            key: item.id,
            href: item.link,
            onClick: item.onClick,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            },
            __self: this
          }, item.title);
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SmallMenu, {
        size: 980,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NavItemMain, {
        href: this.getMainItem().link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, this.getMainItem().title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_hamburger__WEBPACK_IMPORTED_MODULE_9__["default"], {
        smallMenuOpen: this.state.smallMenuOpen,
        setOpen: function setOpen(val) {
          return _this2.openCloseMenu(val);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MobileMenu, {
        id: "mobile-menu",
        pose: this.state.smallMenuOpen ? "visible" : "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, this.props.items.map(function (item) {
        return !item.main && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MobileItem, {
          key: item.id,
          href: item.link,
          onClick: function onClick() {
            return _this2.openCloseMenu(false);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, item.title);
      }))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=shop.js.6247cce05da3f6a63b46.hot-update.js.map