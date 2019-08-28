webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
var _jsxFileName = "/Users/Vanu/planner/pages/home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var PostLink = function PostLink(props) {
  return (//dynamic pages
    __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(props.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, props.id)))
  );
}; //pass data as query string parameter


function Home() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Planner"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(PostLink, {
    id: "Breakfast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(PostLink, {
    id: "Lunch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(PostLink, {
    id: "Snack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(PostLink, {
    id: "Dinner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=home.js.18eaf29d87ee76bf7d1d.hot-update.js.map