webpackHotUpdate("static/development/pages/tsa.js",{

/***/ "./components/activities.js":
/*!**********************************!*\
  !*** ./components/activities.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Activities; });
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







var _jsxFileName = "/home/kusti8/Documents/Github/webmaster2019/components/activities.js";




var TotalContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "activities__TotalContainer",
  componentId: "sc-71p1bp-0"
})(["width:100%;height:100%;display:flex;justify-content:center;padding-top:80px;font-family:\"Raleway\";font-weight:900;font-size:6vmax;color:#fff;background-color:#000;&:before{content:\"\";background-image:url(\"/static/laptop-working.jpg\");background-size:cover;opacity:0.5;top:0;left:0;bottom:0;right:0;position:absolute;z-index:1;}@media only screen and (max-width:700px){padding-top:60px;}"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "activities__Container",
  componentId: "sc-71p1bp-1"
})(["position:absolute;margin:auto;top:0;right:0;left:0;bottom:0;width:50%;height:50%;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);opacity:1;z-index:2;@media only screen and (max-width:700px){height:65%;width:75%;}"]);
var ActivitiesContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "activities__ActivitiesContainer",
  componentId: "sc-71p1bp-2"
})(["width:100%;height:100%;float:left;background-color:#fafafa;color:#000;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h1.withConfig({
  displayName: "activities__Title",
  componentId: "sc-71p1bp-3"
})(["font-family:\"Raleway\";font-weight:400;font-size:2vmax;margin-left:40px;margin-top:40px;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p.withConfig({
  displayName: "activities__Content",
  componentId: "sc-71p1bp-4"
})(["font-family:\"Raleway\";font-weight:400;font-size:20px;margin-left:40px;margin-top:20px;"]);
var RightImage = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].img.withConfig({
  displayName: "activities__RightImage",
  componentId: "sc-71p1bp-5"
})(["margin:5%;max-width:90%;max-height:90%;"]);
var LeftContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "activities__LeftContainer",
  componentId: "sc-71p1bp-6"
})(["float:left;width:50%;@media only screen and (max-width:700px){width:100%;height:50%;}"]);
var RightContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "activities__RightContainer",
  componentId: "sc-71p1bp-7"
})(["float:right;width:50%;@media only screen and (max-width:700px){width:100%;height:50%;}"]);

var GeneralMeetings = function GeneralMeetings(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LeftContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "General Meetings"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac mi quis lectus gravida aliquam sit amet eu lorem.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RightContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RightImage, {
    src: "/static/meeting.jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })));
};

var LeadershipConference = function LeadershipConference(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LeftContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Leadership Conference"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac mi quis lectus gravida aliquam sit amet eu lorem.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RightContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RightImage, {
    src: "/static/meeting.jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })));
};

var CheckIns = function CheckIns(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LeftContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Check Ins"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac mi quis lectus gravida aliquam sit amet eu lorem.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RightContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RightImage, {
    src: "/static/meeting.jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  })));
};

var RelayForLife = function RelayForLife(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LeftContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Relay For Life"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac mi quis lectus gravida aliquam sit amet eu lorem.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RightContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RightImage, {
    src: "/static/meeting.jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  })));
};

var EndOfYear = function EndOfYear(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LeftContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "End of Year Wrap Up"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac mi quis lectus gravida aliquam sit amet eu lorem.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RightContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RightImage, {
    src: "/static/meeting.jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  })));
};

var Activities =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Activities, _Component);

  function Activities() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Activities);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Activities)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      tab: 0
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Activities, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TotalContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "Activities", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ActivitiesContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
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
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10___default.a, {
        label: "General Meetings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10___default.a, {
        label: "Leadership Conference",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10___default.a, {
        label: "Check-Ins",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10___default.a, {
        label: "Relay For Life",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10___default.a, {
        label: "End of Year Wrap Up",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      })), this.state.tab == 0 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GeneralMeetings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }), this.state.tab == 1 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LeadershipConference, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), this.state.tab == 2 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CheckIns, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }), this.state.tab == 3 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RelayForLife, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }), this.state.tab == 4 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(EndOfYear, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }))));
    }
  }]);

  return Activities;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=tsa.js.55623a4f73f27c137742.hot-update.js.map