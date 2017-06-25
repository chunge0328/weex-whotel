// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fetchdata__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fetchdata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__fetchdata__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var modal = weex.requireModule('modal');
//    const share = weex.requireModule('share')
const events = weex.requireModule('events');

/* harmony default export */ __webpack_exports__["default"] = ({

    //getter & setter
    computed: {},

    methods: {

        fetchListData(userid) {

            __WEBPACK_IMPORTED_MODULE_0__fetchdata___default.a.collection(userid).then(response => {

                this.listData = response;
            });
        },

        cellClick(e) {

            //                events.openHotelDetailFromSavePage(e.target.attr.item)


            //                share.share("share href","share title")

            //                console.log('share')


            //                const item = e.Brief
            //
            //                modal.toast({
            //                    message: "test",
            //                    duration: 0.3
            //                })
        }

    },

    // 属性
    data() {

        return {
            imageList: [{ src: 'http://p1.zmjiudian.com/116YLS711uz_theme' }, { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }],

            listData: {}
        };
    },

    //生命周期钩子

    beforeCreate() {},

    created() {

        //请求数据
        //获取userid
        //            this.fetchListData("4706587")
        modal.alert({
            message: "testa",
            duration: 3
        });

        //            events.getUserIDCallBack((userid) => {
        //
        //                this.fetchListData(userid)
        //
        //            })


        //            console.log('will show toast')
    }

});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "hotelname": {
    "color": "#666666"
  },
  "hoteldes": {
    "color": "#999999"
  },
  "textarea": {
    "margin": 10
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list"]
  }, [_c('refresh'), _vm._m(0), _vm._l((_vm.listData.Hotels), function(item) {
    return _c('cell', {
      appendAsTree: true,
      attrs: {
        "item": item,
        "append": "tree"
      },
      on: {
        "click": _vm.cellClick
      }
    }, [_c('div', {
      staticClass: ["item"]
    }, [_c('div', {
      staticClass: ["imgcontainer"],
      staticStyle: {
        margin: "auto"
      }
    }, [_c('image', {
      staticStyle: {
        height: "400px",
        width: "750px"
      },
      attrs: {
        "resize": "cover",
        "src": item.Picture
      }
    })]), _c('div', {
      staticClass: ["textarea"]
    }, [_c('text', {
      staticClass: ["hotelname"]
    }, [_vm._v(_vm._s(item.Name))]), _c('text', {
      staticClass: ["hoteldes"]
    }, [_vm._v(_vm._s(item.Brief))])])])])
  })], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticStyle: {
      fontSize: "80px"
    }
  }, [_vm._v("hello android ~")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Created by ShangLvInc. on 2017/6/22.
 */

var stream = weex.requireModule('stream');

/*

 POST
 Collect/GetPageCollectHotellist
 http://api.zmjiudian.com/api/
 {
 userid: 4512657
 start: 0
 count: 10
 }
 * */

module.exports = {

    collection(userid) {

        return new Promise((resolve, reject) => {
            stream.fetch({

                method: 'POST',
                url: 'http://api.zmjiudian.com/api/Collect/GetPageCollectHotellist',
                type: 'json',
                body: "userid=" + userid + "&start=0&count=10",
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded'
                }

            }, ret => {
                //回调
                resolve(ret.data);
            });
        });
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(0)

/* template */
var __vue_template__ = __webpack_require__(2)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/Documents/WEEX/weex-whotel/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4a1ea7b7"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })
/******/ ]);