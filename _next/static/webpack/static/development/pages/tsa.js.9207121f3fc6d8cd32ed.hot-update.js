webpackHotUpdate("static/development/pages/tsa.js",{

/***/ "./components/officers.js":
/*!********************************!*\
  !*** ./components/officers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Officers; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/home/kusti8/Documents/Github/webmaster2019/components/officers.js";





var TotalContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "officers__TotalContainer",
  componentId: "sc-1g14sza-0"
})(["width:100%;height:100vh;padding-top:80px;font-family:\"Raleway\";font-weight:900;font-size:70px;text-align:center;color:#fff;background-color:#000;display:inline-block;position:relative;&:before{content:\"\";background-image:url(\"/static/laptop-working.jpg\");background-size:cover;opacity:0.5;top:0;left:0;bottom:0;right:0;position:absolute;z-index:1;}@media only screen and (max-width:700px){padding-top:60px;font-size:40px;}"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "officers__Container",
  componentId: "sc-1g14sza-1"
})(["margin-top:30px;margin-bottom:200px;margin-left:auto;margin-right:auto;width:75%;height:calc(100% - 230px);max-width:400px;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);opacity:1;z-index:2;@media only screen and (max-width:700px){height:65%;width:75%;}"]);
var ActivitiesContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "officers__ActivitiesContainer",
  componentId: "sc-1g14sza-2"
})(["width:100%;height:100%;float:left;background-color:#fafafa;color:#000;"]);
var OfficerContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "officers__OfficerContainer",
  componentId: "sc-1g14sza-3"
})(["height:100%;width:100%;display:flex;justify-content:center;align-items:space-around;"]);
var OfficerAvatar = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_11___default.a).withConfig({
  displayName: "officers__OfficerAvatar",
  componentId: "sc-1g14sza-4"
})(["display:block;margin:30px;height:350px !important;width:auto !important;"]);
var OfficerName = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h1.withConfig({
  displayName: "officers__OfficerName",
  componentId: "sc-1g14sza-5"
})(["font-family:\"Raleway\";font-size:40px;text-align:center;"]);
var OfficerBio = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].p.withConfig({
  displayName: "officers__OfficerBio",
  componentId: "sc-1g14sza-6"
})(["font-family:\"Raleway\";font-weight:400;font-size:20px;text-align:center;margin:20px;"]);

var Officers =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Officers, _Component);

  function Officers() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Officers);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Officers)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      tab: 0
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Officers, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TotalContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Officers", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ActivitiesContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_10___default.a, {
        dots: false,
        infinite: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerAvatar, {
        src: "/static/meeting.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerName, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerBio, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "This is a bio.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerAvatar, {
        src: "/static/meeting.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerName, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerBio, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "This is a bio.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerAvatar, {
        src: "/static/meeting.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerName, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerBio, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "This is a bio."))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2351437833",
        __self: this
      }, ".slick-slider{height:100%;opacity:1;z-index:2;box-shadow:0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);}.slick-track,.slick-list{height:100%;}.slick-slide{background-color:#fafafa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2t1c3RpOC9Eb2N1bWVudHMvR2l0aHViL3dlYm1hc3RlcjIwMTkvY29tcG9uZW50cy9vZmZpY2Vycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SDJCLEFBR3lCLEFBUUEsQUFHYSxZQVZmLEFBUVosVUFQWSxHQVVaLE9BUmlDLG9FQUNqQyIsImZpbGUiOiIvaG9tZS9rdXN0aTgvRG9jdW1lbnRzL0dpdGh1Yi93ZWJtYXN0ZXIyMDE5L2NvbXBvbmVudHMvb2ZmaWNlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiO1xuXG5jb25zdCBUb3RhbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nLXRvcDogODBweDtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDcwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvbGFwdG9wLXdvcmtpbmcuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNzUlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIzMHB4KTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDI7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICBoZWlnaHQ6IDY1JTtcbiAgICB3aWR0aDogNzUlO1xuICB9XG5gO1xuXG5jb25zdCBBY3Rpdml0aWVzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGNvbG9yOiAjMDAwO1xuYDtcblxuY29uc3QgT2ZmaWNlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3BhY2UtYXJvdW5kO1xuYDtcblxuY29uc3QgT2ZmaWNlckF2YXRhciA9IHN0eWxlZChBdmF0YXIpYFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAzMHB4O1xuICBoZWlnaHQ6IDM1MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG5gO1xuXG5jb25zdCBPZmZpY2VyTmFtZSA9IHN0eWxlZC5oMWBcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmNvbnN0IE9mZmljZXJCaW8gPSBzdHlsZWQucGBcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2ZmaWNlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB0YWI6IDBcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VG90YWxDb250YWluZXI+XG4gICAgICAgIE9mZmljZXJzXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEFjdGl2aXRpZXNDb250YWluZXI+XG4gICAgICAgICAgICA8U2xpZGVyIGRvdHM9e2ZhbHNlfSBpbmZpbml0ZT5cbiAgICAgICAgICAgICAgPE9mZmljZXJDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPE9mZmljZXJBdmF0YXIgc3JjPVwiL3N0YXRpYy9tZWV0aW5nLmpwZWdcIiAvPlxuICAgICAgICAgICAgICAgIDxPZmZpY2VyTmFtZT5OYW1lPC9PZmZpY2VyTmFtZT5cbiAgICAgICAgICAgICAgICA8T2ZmaWNlckJpbz5UaGlzIGlzIGEgYmlvLjwvT2ZmaWNlckJpbz5cbiAgICAgICAgICAgICAgPC9PZmZpY2VyQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8T2ZmaWNlckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8T2ZmaWNlckF2YXRhciBzcmM9XCIvc3RhdGljL21lZXRpbmcuanBlZ1wiIC8+XG4gICAgICAgICAgICAgICAgPE9mZmljZXJOYW1lPk5hbWU8L09mZmljZXJOYW1lPlxuICAgICAgICAgICAgICAgIDxPZmZpY2VyQmlvPlRoaXMgaXMgYSBiaW8uPC9PZmZpY2VyQmlvPlxuICAgICAgICAgICAgICA8L09mZmljZXJDb250YWluZXI+XG4gICAgICAgICAgICAgIDxPZmZpY2VyQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxPZmZpY2VyQXZhdGFyIHNyYz1cIi9zdGF0aWMvbWVldGluZy5qcGVnXCIgLz5cbiAgICAgICAgICAgICAgICA8T2ZmaWNlck5hbWU+TmFtZTwvT2ZmaWNlck5hbWU+XG4gICAgICAgICAgICAgICAgPE9mZmljZXJCaW8+VGhpcyBpcyBhIGJpby48L09mZmljZXJCaW8+XG4gICAgICAgICAgICAgIDwvT2ZmaWNlckNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvU2xpZGVyPlxuICAgICAgICAgIDwvQWN0aXZpdGllc0NvbnRhaW5lcj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLnNsaWNrLXNsaWRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksXG4gICAgICAgICAgICAgIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpY2stdHJhY2ssXG4gICAgICAgICAgLnNsaWNrLWxpc3Qge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpY2stc2xpZGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvVG90YWxDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/kusti8/Documents/Github/webmaster2019/components/officers.js */"));
    }
  }]);

  return Officers;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=tsa.js.9207121f3fc6d8cd32ed.hot-update.js.map