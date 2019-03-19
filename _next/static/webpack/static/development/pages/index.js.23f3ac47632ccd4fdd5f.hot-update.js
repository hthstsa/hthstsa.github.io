webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/competitions.js":
/*!************************************!*\
  !*** ./components/competitions.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Competitions; });
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
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/Tab/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/home/kusti8/Documents/Github/webmaster2019/components/competitions.js";




var TotalContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "competitions__TotalContainer",
  componentId: "sc-1qiw1xu-0"
})(["width:100%;height:100%;display:flex;justify-content:center;padding-top:80px;font-family:\"Raleway\";font-weight:900;font-size:6vmax;color:#fff;background-color:#000;@media screen and (min-width:1460px){font-size:87px;}&:before{content:\"\";background-image:url(\"/static/conference.jpg\");background-size:cover;opacity:0.5;top:0;left:0;bottom:0;right:0;position:absolute;z-index:1;}@media only screen and (max-width:700px){padding-top:60px;}"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "competitions__Container",
  componentId: "sc-1qiw1xu-1"
})(["position:absolute;margin:auto;top:0;right:0;left:0;bottom:0;width:50%;height:50%;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);opacity:1;z-index:2;@media only screen and (max-width:700px){height:65%;width:75%;}"]);
var ActivitiesContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "competitions__ActivitiesContainer",
  componentId: "sc-1qiw1xu-2"
})(["width:100%;height:100%;float:left;background-color:#fafafa;color:#000;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h1.withConfig({
  displayName: "competitions__Title",
  componentId: "sc-1qiw1xu-3"
})(["font-family:\"Raleway\";font-weight:400;font-size:3vmax;margin-left:40px;margin-top:40px;@media screen and (min-width:1460px){font-size:44px;}"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p.withConfig({
  displayName: "competitions__Content",
  componentId: "sc-1qiw1xu-4"
})(["font-family:\"Raleway\";font-weight:400;font-size:2vmax;margin-left:40px;margin-right:40px;margin-top:20px;@media screen and (min-width:1460px){font-size:29px;}"]);
var RightImage = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].img.withConfig({
  displayName: "competitions__RightImage",
  componentId: "sc-1qiw1xu-5"
})(["margin:5%;max-width:90%;max-height:90%;"]);
var LeftContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "competitions__LeftContainer",
  componentId: "sc-1qiw1xu-6"
})(["float:left;width:50%;@media only screen and (max-width:700px){width:100%;height:50%;}"]);
var RightContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "competitions__RightContainer",
  componentId: "sc-1qiw1xu-7"
})(["float:right;width:50%;@media only screen and (max-width:700px){width:100%;height:50%;}"]);

var StateConference = function StateConference(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LeftContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "State Conference"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac mi quis lectus gravida aliquam sit amet eu lorem.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RightContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RightImage, {
    src: "/static/meeting.jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  })));
};

var NationalConference = function NationalConference(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LeftContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "National Conference"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac mi quis lectus gravida aliquam sit amet eu lorem.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RightContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RightImage, {
    src: "/static/meeting.jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })));
};

var Competitions =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Competitions, _Component);

  function Competitions() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Competitions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Competitions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      tab: 0
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Competitions, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TotalContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "Competitions", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ActivitiesContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9___default.a, {
        value: this.state.tab,
        onChange: function onChange(event, value) {
          return _this2.setState({
            tab: value
          });
        },
        variant: "scrollable",
        scrollButtons: "auto",
        id: "scroller",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10___default.a, {
        label: "State Conference",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10___default.a, {
        label: "National Conference",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      })), this.state.tab == 0 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StateConference, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), this.state.tab == 1 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NationalConference, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }))));
    }
  }]);

  return Competitions;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.23f3ac47632ccd4fdd5f.hot-update.js.map