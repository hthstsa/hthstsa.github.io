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
})(["width:100%;height:100vh;padding-top:80px;font-family:\"Raleway\";font-weight:900;font-size:6vmax;text-align:center;color:#fff;background-color:#000;display:inline-block;position:relative;&:before{content:\"\";background-image:url(\"/static/officer-background.jpeg\");background-size:cover;opacity:0.5;top:0;left:0;bottom:0;right:0;position:absolute;z-index:1;}@media only screen and (max-width:700px){padding-top:60px;}@media screen and (min-width:1300px){font-size:78px;}"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "officers__Container",
  componentId: "sc-1g14sza-1"
})(["margin-top:30px;margin-bottom:200px;margin-left:auto;margin-right:auto;width:30%;height:auto box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);opacity:1;z-index:2;@media only screen and (max-width:700px){height:auto;width:75%;}"]);
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
})(["position:relative !important;width:calc(100% - 60px) !important;margin-left:30px;margin-right:30px;margin-top:30px;height:auto !important;&:before{content:\"\";display:block;padding-top:100% !important;}"]);
var OfficerName = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "officers__OfficerName",
  componentId: "sc-1g14sza-5"
})(["font-family:\"Raleway\";font-size:6vmax;font-weight:400;text-align:center;padding-top:20px;"]);
var OfficerBio = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].p.withConfig({
  displayName: "officers__OfficerBio",
  componentId: "sc-1g14sza-6"
})(["font-family:\"Raleway\";font-weight:400;font-size:2.5vmax;text-align:center;margin:20px;"]);

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
          lineNumber: 109
        },
        __self: this
      }, "Officers", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ActivitiesContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_10___default.a, {
        dots: false,
        infinite: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerAvatar, {
        src: "/static/meeting.jpeg",
        classes: {
          img: "avatar"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerName, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerBio, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "This is a bio.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerAvatar, {
        src: "/static/meeting.jpeg",
        classes: {
          img: "avatar"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerName, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerBio, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "This is a bio.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerAvatar, {
        src: "/static/meeting.jpeg",
        classes: {
          img: "avatar"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerName, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerBio, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "This is a bio."))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3630422949",
        __self: this
      }, ".slick-slider{height:100%;opacity:1;z-index:2;box-shadow:0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);}.slick-track,.slick-list{height:100%;}.slick-slide{background-color:#fafafa;}.slick-slide>div{height:100%;width:100%;}.avatar{display:block;position:absolute;top:50%;left:50%;min-height:100%;min-width:100%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2t1c3RpOC9Eb2N1bWVudHMvR2l0aHViL3dlYm1hc3RlcjIwMTkvY29tcG9uZW50cy9vZmZpY2Vycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0STJCLEFBR3lCLEFBUUEsQUFHYSxBQUdiLEFBSUUsWUFqQkosQUFRWixBQU1hLEVBSU8sUUFqQlIsQ0FjWixFQUpBLE9BUmlDLEFBZ0J2QixRQUNDLFNBQ08sZ0JBQ0QsZUFDaUIsb0JBbkJsQyxxRkFvQkEiLCJmaWxlIjoiL2hvbWUva3VzdGk4L0RvY3VtZW50cy9HaXRodWIvd2VibWFzdGVyMjAxOS9jb21wb25lbnRzL29mZmljZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIjtcblxuY29uc3QgVG90YWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiA2dm1heDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9vZmZpY2VyLWJhY2tncm91bmQuanBlZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzAwcHgpIHtcbiAgICBmb250LXNpemU6IDc4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IGF1dG9cbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDI7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuYDtcblxuY29uc3QgQWN0aXZpdGllc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBjb2xvcjogIzAwMDtcbmA7XG5cbmNvbnN0IE9mZmljZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHNwYWNlLWFyb3VuZDtcbmA7XG5cbmNvbnN0IE9mZmljZXJBdmF0YXIgPSBzdHlsZWQoQXZhdGFyKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy10b3A6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuYDtcblxuY29uc3QgT2ZmaWNlck5hbWUgPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogXCJSYWxld2F5XCI7XG4gIGZvbnQtc2l6ZTogNnZtYXg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG5gO1xuXG5jb25zdCBPZmZpY2VyQmlvID0gc3R5bGVkLnBgXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyLjV2bWF4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9mZmljZXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdGFiOiAwXG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRvdGFsQ29udGFpbmVyPlxuICAgICAgICBPZmZpY2Vyc1xuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxBY3Rpdml0aWVzQ29udGFpbmVyPlxuICAgICAgICAgICAgPFNsaWRlciBkb3RzPXtmYWxzZX0gaW5maW5pdGU+XG4gICAgICAgICAgICAgIDxPZmZpY2VyQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxPZmZpY2VyQXZhdGFyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL21lZXRpbmcuanBlZ1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IGltZzogXCJhdmF0YXJcIiB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPE9mZmljZXJOYW1lPk5hbWU8L09mZmljZXJOYW1lPlxuICAgICAgICAgICAgICAgIDxPZmZpY2VyQmlvPlRoaXMgaXMgYSBiaW8uPC9PZmZpY2VyQmlvPlxuICAgICAgICAgICAgICA8L09mZmljZXJDb250YWluZXI+XG4gICAgICAgICAgICAgIDxPZmZpY2VyQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxPZmZpY2VyQXZhdGFyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL21lZXRpbmcuanBlZ1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IGltZzogXCJhdmF0YXJcIiB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPE9mZmljZXJOYW1lPk5hbWU8L09mZmljZXJOYW1lPlxuICAgICAgICAgICAgICAgIDxPZmZpY2VyQmlvPlRoaXMgaXMgYSBiaW8uPC9PZmZpY2VyQmlvPlxuICAgICAgICAgICAgICA8L09mZmljZXJDb250YWluZXI+XG4gICAgICAgICAgICAgIDxPZmZpY2VyQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxPZmZpY2VyQXZhdGFyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL21lZXRpbmcuanBlZ1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IGltZzogXCJhdmF0YXJcIiB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPE9mZmljZXJOYW1lPk5hbWU8L09mZmljZXJOYW1lPlxuICAgICAgICAgICAgICAgIDxPZmZpY2VyQmlvPlRoaXMgaXMgYSBiaW8uPC9PZmZpY2VyQmlvPlxuICAgICAgICAgICAgICA8L09mZmljZXJDb250YWluZXI+XG4gICAgICAgICAgICA8L1NsaWRlcj5cbiAgICAgICAgICA8L0FjdGl2aXRpZXNDb250YWluZXI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC5zbGljay1zbGlkZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLFxuICAgICAgICAgICAgICAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNsaWNrLXRyYWNrLFxuICAgICAgICAgIC5zbGljay1saXN0IHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNsaWNrLXNsaWRlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGljay1zbGlkZSA+IGRpdiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9Ub3RhbENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/kusti8/Documents/Github/webmaster2019/components/officers.js */"));
    }
  }]);

  return Officers;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=tsa.js.86246e26b30b9d733660.hot-update.js.map