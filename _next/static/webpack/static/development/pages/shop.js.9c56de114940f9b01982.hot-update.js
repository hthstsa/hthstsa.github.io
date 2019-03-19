webpackHotUpdate("static/development/pages/shop.js",{

/***/ "./pages/shop.js":
/*!***********************!*\
  !*** ./pages/shop.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shop; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_shop_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/shop_item */ "./components/shop_item.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/cart */ "./components/cart.js");
/* harmony import */ var _design_brief__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./design-brief */ "./pages/design-brief.js");








var _jsxFileName = "/home/kusti8/Documents/Github/webmaster2019/pages/shop.js";








var items = [{
  name: "Basic T shirt",
  price: 25.5,
  id: 1,
  picture: "/static/t-shirt.jpg"
}, {
  name: "Basic T shirt",
  price: 25.5,
  id: 1,
  picture: "/static/t-shirt.jpg"
}, {
  name: "Basic T shirt",
  price: 25.5,
  id: 1,
  picture: "/static/t-shirt.jpg"
}, {
  name: "Basic T shirt",
  price: 25.5,
  id: 1,
  picture: "/static/t-shirt.jpg"
}, {
  name: "Basic T shirt",
  price: 25.5,
  id: 1,
  picture: "/static/t-shirt.jpg"
}, {
  name: "Basic T shirt",
  price: 25.5,
  id: 1,
  picture: "/static/t-shirt.jpg"
}, {
  name: "Basic T shirt",
  price: 25.5,
  id: 1,
  picture: "/static/t-shirt.jpg"
}, {
  name: "Basic T shirt",
  price: 25.5,
  id: 1,
  picture: "/static/t-shirt.jpg"
}, {
  name: "Captcha! World Tour",
  price: 99.99,
  id: 1,
  picture: "/static/guitar.jpg"
}];
var GridItems = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "shop__GridItems",
  componentId: "sc-1fs52y9-0"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));grid-gap:30px;max-width:960px;margin:0 auto 30px;margin-top:70px;"]);
var FloatingCart = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "shop__FloatingCart",
  componentId: "sc-1fs52y9-1"
})(["position:fixed;top:0;right:", ";width:450px;height:100%;background-color:#1b1a20;box-sizing:border-box;transition:right 0.2s;"], function (props) {
  return props.open ? "0px" : "-450px";
});
var TitleHead = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div.withConfig({
  displayName: "shop__TitleHead",
  componentId: "sc-1fs52y9-2"
})(["margin:0px;background-color:black;color:white;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;height:250px;font-size:60px;letter-spacing:0.6em;font-family:Raleway;"]);

var Shop =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Shop, _Component);

  function Shop() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Shop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Shop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      enabled: true,
      cart: []
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Shop, [{
    key: "addToCart",
    value: function addToCart(item) {
      var cart = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.state.cart);

      for (var i = 0; i < cart.length; i++) {
        if (item.id === cart[i].id) {
          cart[i].quantity++;
          this.setState({
            cart: cart
          });
          return;
        }
      }

      cart.push({
        quantity: 1,
        id: item.id,
        name: item.name,
        price: item.price,
        picture: item.picture,
        size: "M"
      });
      this.setState({
        cart: cart
      });
    }
  }, {
    key: "removeProduct",
    value: function removeProduct(product) {
      var cart = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.state.cart);

      for (var i = 0; i < cart.length; i++) {
        if (product.id === cart[i].id) {
          cart.splice(i, 1);
          this.setState({
            cart: cart
          });
          return;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100vw",
          overflowY: "hidden"
        },
        className: "jsx-1802206478",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Raleway:400,800",
        rel: "stylesheet",
        className: "jsx-1802206478",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-1802206478",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        maxSize: 1000,
        fullPageApi: function fullPageApi(val) {
          return _this2.setState({
            enabled: val
          });
        },
        items: _design_brief__WEBPACK_IMPORTED_MODULE_15__["headerItems"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_cart__WEBPACK_IMPORTED_MODULE_14__["default"], {
        cartProducts: this.state.cart,
        removeProduct: function removeProduct(product) {
          return _this2.removeProduct(product);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(GridItems, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, items.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_shop_item__WEBPACK_IMPORTED_MODULE_10__["default"], {
          item: item,
          addToCart: function addToCart(item) {
            return _this2.addToCart(item);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1802206478",
        __self: this
      }, "body{margin:0px;background-color:#111111;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2t1c3RpOC9Eb2N1bWVudHMvR2l0aHViL3dlYm1hc3RlcjIwMTkvcGFnZXMvc2hvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSzJCLEFBR3dCLFdBQ2MseUJBQzNCIiwiZmlsZSI6Ii9ob21lL2t1c3RpOC9Eb2N1bWVudHMvR2l0aHViL3dlYm1hc3RlcjIwMTkvcGFnZXMvc2hvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTaG9wSXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG9wX2l0ZW1cIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydFwiO1xuaW1wb3J0IHsgaGVhZGVySXRlbXMgfSBmcm9tIFwiLi9kZXNpZ24tYnJpZWZcIjtcblxuY29uc3QgaXRlbXMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkJhc2ljIFQgc2hpcnRcIixcbiAgICBwcmljZTogMjUuNSxcbiAgICBpZDogMSxcbiAgICBwaWN0dXJlOiBcIi9zdGF0aWMvdC1zaGlydC5qcGdcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJCYXNpYyBUIHNoaXJ0XCIsXG4gICAgcHJpY2U6IDI1LjUsXG4gICAgaWQ6IDEsXG4gICAgcGljdHVyZTogXCIvc3RhdGljL3Qtc2hpcnQuanBnXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQmFzaWMgVCBzaGlydFwiLFxuICAgIHByaWNlOiAyNS41LFxuICAgIGlkOiAxLFxuICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90LXNoaXJ0LmpwZ1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJhc2ljIFQgc2hpcnRcIixcbiAgICBwcmljZTogMjUuNSxcbiAgICBpZDogMSxcbiAgICBwaWN0dXJlOiBcIi9zdGF0aWMvdC1zaGlydC5qcGdcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJCYXNpYyBUIHNoaXJ0XCIsXG4gICAgcHJpY2U6IDI1LjUsXG4gICAgaWQ6IDEsXG4gICAgcGljdHVyZTogXCIvc3RhdGljL3Qtc2hpcnQuanBnXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQmFzaWMgVCBzaGlydFwiLFxuICAgIHByaWNlOiAyNS41LFxuICAgIGlkOiAxLFxuICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90LXNoaXJ0LmpwZ1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJhc2ljIFQgc2hpcnRcIixcbiAgICBwcmljZTogMjUuNSxcbiAgICBpZDogMSxcbiAgICBwaWN0dXJlOiBcIi9zdGF0aWMvdC1zaGlydC5qcGdcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJCYXNpYyBUIHNoaXJ0XCIsXG4gICAgcHJpY2U6IDI1LjUsXG4gICAgaWQ6IDEsXG4gICAgcGljdHVyZTogXCIvc3RhdGljL3Qtc2hpcnQuanBnXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ2FwdGNoYSEgV29ybGQgVG91clwiLFxuICAgIHByaWNlOiA5OS45OSxcbiAgICBpZDogMSxcbiAgICBwaWN0dXJlOiBcIi9zdGF0aWMvZ3VpdGFyLmpwZ1wiXG4gIH1cbl07XG5cbmNvbnN0IEdyaWRJdGVtcyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDMwcHg7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDMwcHg7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG5gO1xuXG5jb25zdCBGbG9hdGluZ0NhcnQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLm9wZW4gPyBcIjBweFwiIDogXCItNDUwcHhcIil9O1xuICB3aWR0aDogNDUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWEyMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICB0cmFuc2l0aW9uOiByaWdodCAwLjJzO1xuYDtcblxuY29uc3QgVGl0bGVIZWFkID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjUwcHg7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICBmb250LWZhbWlseTogUmFsZXdheTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3AgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIGNhcnQ6IFtdXG4gIH07XG4gIGFkZFRvQ2FydChpdGVtKSB7XG4gICAgY29uc3QgY2FydCA9IFsuLi50aGlzLnN0YXRlLmNhcnRdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGl0ZW0uaWQgPT09IGNhcnRbaV0uaWQpIHtcbiAgICAgICAgY2FydFtpXS5xdWFudGl0eSsrO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2FydCB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBjYXJ0LnB1c2goe1xuICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICBpZDogaXRlbS5pZCxcbiAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgIHByaWNlOiBpdGVtLnByaWNlLFxuICAgICAgcGljdHVyZTogaXRlbS5waWN0dXJlLFxuICAgICAgc2l6ZTogXCJNXCJcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2FydCB9KTtcbiAgfVxuICByZW1vdmVQcm9kdWN0KHByb2R1Y3QpIHtcbiAgICBsZXQgY2FydCA9IFsuLi50aGlzLnN0YXRlLmNhcnRdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2R1Y3QuaWQgPT09IGNhcnRbaV0uaWQpIHtcbiAgICAgICAgY2FydC5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0IH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiwgd2lkdGg6IFwiMTAwdndcIiwgb3ZlcmZsb3dZOiBcImhpZGRlblwiIH19PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjQwMCw4MDBcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBtYXhTaXplPXsxMDAwfVxuICAgICAgICAgIGZ1bGxQYWdlQXBpPXt2YWwgPT4gdGhpcy5zZXRTdGF0ZSh7IGVuYWJsZWQ6IHZhbCB9KX1cbiAgICAgICAgICBpdGVtcz17aGVhZGVySXRlbXN9XG4gICAgICAgIC8+XG4gICAgICAgIDxDYXJ0XG4gICAgICAgICAgY2FydFByb2R1Y3RzPXt0aGlzLnN0YXRlLmNhcnR9XG4gICAgICAgICAgcmVtb3ZlUHJvZHVjdD17cHJvZHVjdCA9PiB0aGlzLnJlbW92ZVByb2R1Y3QocHJvZHVjdCl9XG4gICAgICAgIC8+XG4gICAgICAgIDxHcmlkSXRlbXM+XG4gICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxTaG9wSXRlbSBpdGVtPXtpdGVtfSBhZGRUb0NhcnQ9e2l0ZW0gPT4gdGhpcy5hZGRUb0NhcnQoaXRlbSl9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZEl0ZW1zPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/kusti8/Documents/Github/webmaster2019/pages/shop.js */"));
    }
  }]);

  return Shop;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ })

})
//# sourceMappingURL=shop.js.9c56de114940f9b01982.hot-update.js.map