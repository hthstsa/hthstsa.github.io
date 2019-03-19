webpackHotUpdate("static/development/pages/shop.js",{

/***/ "./components/music.js":
/*!*****************************!*\
  !*** ./components/music.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Music; });
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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");







var _jsxFileName = "/home/kusti8/Documents/Github/webmaster2019/components/music.js";



var Container = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "music__Container",
  componentId: "sc-1e13pm4-0"
})(["height:100%;width:100%;position:absolute;top:0;left:0;z-index:5;background-color:#fff;transform:", ";transition:transform 0.7s;transition-timing-function:cubic-bezier(0.86,0.01,0.77,0.78);"], function (props) {
  return props.modalOpen ? "translateX(0)" : "translateX(-100%)";
});
var AlbumContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "music__AlbumContainer",
  componentId: "sc-1e13pm4-1"
})(["height:100%;width:54%;background-color:#f4f4f4;float:left;display:flex;justify-content:center;align-items:center;@media only screen and (max-width:768px){width:100%;height:50%;}background-size:contain;background-position:center center;background-repeat:no-repeat;background-image:url(\"https://images-na.ssl-images-amazon.com/images/I/91KM9OX5V6L._SX450_.jpg\");"]);
var Songs = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "music__Songs",
  componentId: "sc-1e13pm4-2"
})(["height:100%;width:46%;background-color:#fff;float:right;display:flex;flex-direction:row;justify-content:center;margin-top:50px;@media only screen and (max-width:768px){width:100%;}"]);
var SongContent = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "music__SongContent",
  componentId: "sc-1e13pm4-3"
})(["width:100%;padding:20% 20%;font-family:\"Raleway\";@media only screen and (max-width:768px){padding:10% 20%;}"]);
var SongsList = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].ul.withConfig({
  displayName: "music__SongsList",
  componentId: "sc-1e13pm4-4"
})(["text-align:left;margin:0;padding:0;list-style-type:none;outline:none;"]);
var Song = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].li.withConfig({
  displayName: "music__Song",
  componentId: "sc-1e13pm4-5"
})(["text-align:left;display:inline-block;border-top:1px solid #bebebe;width:100%;padding:17px 0 17px 0;margin:-3px;&:hover{background-color:#dee0e2;}"]);
var SongName = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span.withConfig({
  displayName: "music__SongName",
  componentId: "sc-1e13pm4-6"
})(["width:58%;float:left;color:#4d4d4e;"]);
var SongLength = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span.withConfig({
  displayName: "music__SongLength",
  componentId: "sc-1e13pm4-7"
})(["width:8.3%;float:right;text-align:right;padding-right:0.5em;color:#4d4d4e;"]);
var PlayPause = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"]).withConfig({
  displayName: "music__PlayPause",
  componentId: "sc-1e13pm4-8"
})(["width:8.3%;float:left;padding-left:0.5em;padding-right:1em;margin-top:0.1em;outline:0;"]);
var Cancel = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].img.withConfig({
  displayName: "music__Cancel",
  componentId: "sc-1e13pm4-9"
})(["width:25px;height:auto;position:absolute;right:30px;top:30px;"]);
var songs = [{
  name: "Test Song",
  url: "https://sample-videos.com/audio/mp3/crowd-cheering.mp3",
  length: "3:20",
  id: 1
}, {
  name: "Test Song",
  url: "https://sample-videos.com/audio/mp3/crowd-cheering.mp3",
  length: "3:20",
  id: 2
}, {
  name: "Test Song",
  url: "https://sample-videos.com/audio/mp3/crowd-cheering.mp3",
  length: "3:20",
  id: 3
}];

var Music =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Music, _Component);

  function Music() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Music);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Music)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      open: false,
      playing: 0
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Music, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (window.location.href.includes("#music")) {
        this.setState({
          open: true
        });
      }

      console.log("Mounted");

      window.onhashchange = function () {
        if (window.location.href.includes("#music")) {
          _this2.setState({
            open: true
          });
        }
      };

      this.audio = new Audio();
      this.audio.addEventListener("ended", function () {
        _this2.setState({
          playing: false
        });
      });
    }
  }, {
    key: "toggleSong",
    value: function toggleSong(song) {
      if (this.state.playing !== song.id) {
        this.audio.src = song.url;
        this.audio.play();
        this.setState({
          playing: song.id
        });
      } else {
        this.audio.pause();
        this.setState({
          playing: 0
        });
      }
    }
  }, {
    key: "closeWindow",
    value: function closeWindow() {
      this.setState({
        open: false
      });
      window.history.back();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, {
        modalOpen: this.state.open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(AlbumContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Songs, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SongContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SongsList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, songs.map(function (song) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Song, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PlayPause, {
          icon: song.id == _this3.state.playing ? "pause" : "play",
          onClick: function onClick() {
            return _this3.toggleSong(song);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SongName, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }, song.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SongLength, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, song.length));
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Cancel, {
        src: "/static/cancel.svg",
        onClick: function onClick() {
          return _this3.closeWindow();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }));
    }
  }]);

  return Music;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=shop.js.03b7e7945295f7b1d804.hot-update.js.map