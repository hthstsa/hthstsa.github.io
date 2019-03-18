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
})(["margin-top:30px;margin-bottom:200px;margin-left:auto;margin-right:auto;position:relative;width:30vw;height:50vw;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);opacity:1;z-index:2;@media only screen and (max-width:700px){height:auto;width:75%;}@media only screen and (min-width:67vh){height:67vw;width:40vw;}"]);
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
          lineNumber: 114
        },
        __self: this
      }, "Officers", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ActivitiesContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_10___default.a, {
        dots: false,
        infinite: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerAvatar, {
        src: "/static/meeting.jpeg",
        classes: {
          img: "avatar"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerName, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerBio, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "This is a bio.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerAvatar, {
        src: "/static/meeting.jpeg",
        classes: {
          img: "avatar"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerName, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerBio, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "This is a bio.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerAvatar, {
        src: "/static/meeting.jpeg",
        classes: {
          img: "avatar"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerName, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OfficerBio, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "This is a bio."))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3630422949",
        __self: this
      }, ".slick-slider{height:100%;opacity:1;z-index:2;box-shadow:0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);}.slick-track,.slick-list{height:100%;}.slick-slide{background-color:#fafafa;}.slick-slide>div{height:100%;width:100%;}.avatar{display:block;position:absolute;top:50%;left:50%;min-height:100%;min-width:100%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2t1c3RpOC9Eb2N1bWVudHMvR2l0aHViL3dlYm1hc3RlcjIwMTkvY29tcG9uZW50cy9vZmZpY2Vycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSjJCLEFBR3lCLEFBUUEsQUFHYSxBQUdiLEFBSUUsWUFqQkosQUFRWixBQU1hLEVBSU8sUUFqQlIsQ0FjWixFQUpBLE9BUmlDLEFBZ0J2QixRQUNDLFNBQ08sZ0JBQ0QsZUFDaUIsb0JBbkJsQyxxRkFvQkEiLCJmaWxlIjoiL2hvbWUva3VzdGk4L0RvY3VtZW50cy9HaXRodWIvd2VibWFzdGVyMjAxOS9jb21wb25lbnRzL29mZmljZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIjtcblxuY29uc3QgVG90YWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiA2dm1heDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9vZmZpY2VyLWJhY2tncm91bmQuanBlZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzAwcHgpIHtcbiAgICBmb250LXNpemU6IDc4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMHZ3O1xuICBoZWlnaHQ6IDUwdnc7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAyO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2N3ZoKSB7XG4gICAgaGVpZ2h0OiA2N3Z3O1xuICAgIHdpZHRoOiA0MHZ3O1xuICB9XG5gO1xuXG5jb25zdCBBY3Rpdml0aWVzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGNvbG9yOiAjMDAwO1xuYDtcblxuY29uc3QgT2ZmaWNlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3BhY2UtYXJvdW5kO1xuYDtcblxuY29uc3QgT2ZmaWNlckF2YXRhciA9IHN0eWxlZChBdmF0YXIpYFxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLXRvcDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5gO1xuXG5jb25zdCBPZmZpY2VyTmFtZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcbiAgZm9udC1zaXplOiA2dm1heDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbmA7XG5cbmNvbnN0IE9mZmljZXJCaW8gPSBzdHlsZWQucGBcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIuNXZtYXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2ZmaWNlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB0YWI6IDBcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VG90YWxDb250YWluZXI+XG4gICAgICAgIE9mZmljZXJzXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEFjdGl2aXRpZXNDb250YWluZXI+XG4gICAgICAgICAgICA8U2xpZGVyIGRvdHM9e2ZhbHNlfSBpbmZpbml0ZT5cbiAgICAgICAgICAgICAgPE9mZmljZXJDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPE9mZmljZXJBdmF0YXJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvbWVldGluZy5qcGVnXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgaW1nOiBcImF2YXRhclwiIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8T2ZmaWNlck5hbWU+TmFtZTwvT2ZmaWNlck5hbWU+XG4gICAgICAgICAgICAgICAgPE9mZmljZXJCaW8+VGhpcyBpcyBhIGJpby48L09mZmljZXJCaW8+XG4gICAgICAgICAgICAgIDwvT2ZmaWNlckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPE9mZmljZXJDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPE9mZmljZXJBdmF0YXJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvbWVldGluZy5qcGVnXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgaW1nOiBcImF2YXRhclwiIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8T2ZmaWNlck5hbWU+TmFtZTwvT2ZmaWNlck5hbWU+XG4gICAgICAgICAgICAgICAgPE9mZmljZXJCaW8+VGhpcyBpcyBhIGJpby48L09mZmljZXJCaW8+XG4gICAgICAgICAgICAgIDwvT2ZmaWNlckNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPE9mZmljZXJDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPE9mZmljZXJBdmF0YXJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvbWVldGluZy5qcGVnXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgaW1nOiBcImF2YXRhclwiIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8T2ZmaWNlck5hbWU+TmFtZTwvT2ZmaWNlck5hbWU+XG4gICAgICAgICAgICAgICAgPE9mZmljZXJCaW8+VGhpcyBpcyBhIGJpby48L09mZmljZXJCaW8+XG4gICAgICAgICAgICAgIDwvT2ZmaWNlckNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvU2xpZGVyPlxuICAgICAgICAgIDwvQWN0aXZpdGllc0NvbnRhaW5lcj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLnNsaWNrLXNsaWRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksXG4gICAgICAgICAgICAgIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpY2stdHJhY2ssXG4gICAgICAgICAgLnNsaWNrLWxpc3Qge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpY2stc2xpZGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNsaWNrLXNsaWRlID4gZGl2IHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1RvdGFsQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/kusti8/Documents/Github/webmaster2019/components/officers.js */"));
    }
  }]);

  return Officers;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=tsa.js.64021470ff5a831a0455.hot-update.js.map