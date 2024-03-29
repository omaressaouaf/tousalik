(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_components_categories_CategoriesList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/categories/CategoriesList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/categories/CategoriesList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ "./resources/js/admin/helpers.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dtTable: null,
      selectedItems: [],
      allSelected: false
    };
  },
  watch: {
    selectedItems: function selectedItems() {
      this.allSelected = this.selectedItems.length === this.allCategories.length ? true : false;
    }
  },
  computed: _objectSpread({
    getIsLoading: function getIsLoading() {
      return this.isLoading["get"];
    },
    postIsLoading: function postIsLoading() {
      return this.isLoading["post"];
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)("categories", ["allCategories", "isLoading"])),
  methods: _objectSpread({
    selectOrUnSelectAll: function selectOrUnSelectAll() {
      var _this = this;

      if (this.allSelected) {
        this.selectedItems = [];
      } else {
        this.allCategories.forEach(function (category) {
          _this.selectedItems.push(category.id);
        });
      }
    },
    prepareBulkDeleteCategories: function prepareBulkDeleteCategories() {
      var _this2 = this;

      if (!this.selectedItems.length) {
        this.$toast.error("Aucun élément n'a été sélectionné");
        return;
      }

      (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.fireConfirmation)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.bulkDeleteCategories(_this2.selectedItems);

              case 2:
                _this2.selectedItems = [];

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)("categories", ["fetchCategories", "deleteCategory", "bulkDeleteCategories"])),
  beforeUpdate: function beforeUpdate() {
    if (this.dtTable) {
      this.dtTable.destroy();
    }
  },
  updated: function updated() {
    this.dtTable = $("#dataTable").DataTable({
      order: [[0, "desc"]],
      pageLength: 5
    });
  },
  created: function created() {
    this.fetchCategories();
  }
});

/***/ }),

/***/ "./resources/js/admin/components/categories/CategoriesList.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/admin/components/categories/CategoriesList.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CategoriesList_vue_vue_type_template_id_e1e8055c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoriesList.vue?vue&type=template&id=e1e8055c& */ "./resources/js/admin/components/categories/CategoriesList.vue?vue&type=template&id=e1e8055c&");
/* harmony import */ var _CategoriesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoriesList.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/categories/CategoriesList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CategoriesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CategoriesList_vue_vue_type_template_id_e1e8055c___WEBPACK_IMPORTED_MODULE_0__.render,
  _CategoriesList_vue_vue_type_template_id_e1e8055c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/categories/CategoriesList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/categories/CategoriesList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/admin/components/categories/CategoriesList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategoriesList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/categories/CategoriesList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/admin/components/categories/CategoriesList.vue?vue&type=template&id=e1e8055c&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/admin/components/categories/CategoriesList.vue?vue&type=template&id=e1e8055c& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesList_vue_vue_type_template_id_e1e8055c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesList_vue_vue_type_template_id_e1e8055c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesList_vue_vue_type_template_id_e1e8055c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategoriesList.vue?vue&type=template&id=e1e8055c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/categories/CategoriesList.vue?vue&type=template&id=e1e8055c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/categories/CategoriesList.vue?vue&type=template&id=e1e8055c&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/categories/CategoriesList.vue?vue&type=template&id=e1e8055c& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c("the-breadcrumb", [
        _c("li", { staticClass: "breadcrumb-item active" }, [
          _vm._v("Catégories")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card card-sticker shadow mb-4 mt-5" }, [
        _c(
          "div",
          { staticClass: "d-flex", attrs: { id: "card-header-wrapper" } },
          [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "ml-auto align-self-center p-3" },
              [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-black mr-2",
                    attrs: { disabled: _vm.postIsLoading },
                    on: { click: _vm.prepareBulkDeleteCategories }
                  },
                  [
                    _vm.postIsLoading
                      ? _c("span", [
                          _c("i", {
                            staticClass: "fa fa-circle-notch fa-spin"
                          }),
                          _vm._v(" En cours\n          ")
                        ])
                      : _c("span", [
                          _c("i", { staticClass: "fa fa-dumpster" }),
                          _vm._v(" Suppression ")
                        ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  { attrs: { to: { name: "categories.create" } } },
                  [
                    _c("button", { staticClass: "btn btn-orange mr-2" }, [
                      _c("i", { staticClass: "fa fa-plus-circle" }),
                      _vm._v(" "),
                      _c("span", [_vm._v(" Ajouter Catégorie")])
                    ])
                  ]
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              {
                staticClass: "table table-striped table-hover",
                attrs: { id: "dataTable", width: "100%", cellspacing: "0" }
              },
              [
                _c("thead", [
                  _c("tr", [
                    _c("th", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.allSelected,
                            expression: "allSelected"
                          }
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(_vm.allSelected)
                            ? _vm._i(_vm.allSelected, null) > -1
                            : _vm.allSelected
                        },
                        on: {
                          click: _vm.selectOrUnSelectAll,
                          change: function($event) {
                            var $$a = _vm.allSelected,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 && (_vm.allSelected = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (_vm.allSelected = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.allSelected = $$c
                            }
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("th", [_vm._v("ID")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Nom")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Slug")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("N. de Produits")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Créé le")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Actions")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm.getIsLoading
                      ? _c("tr", [
                          _c(
                            "td",
                            {
                              staticClass: "text-center",
                              attrs: { colspan: "6" }
                            },
                            [
                              _c(
                                "loading",
                                {
                                  attrs: {
                                    color: "#2B51C4",
                                    active: _vm.getIsLoading,
                                    "is-full-page": false
                                  },
                                  on: {
                                    "update:active": function($event) {
                                      _vm.getIsLoading = $event
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "h5",
                                    { attrs: { slot: "after" }, slot: "after" },
                                    [_vm._v("Loading")]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      : _vm._l(_vm.allCategories, function(category) {
                          return _c("tr", { key: category.id }, [
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.selectedItems,
                                    expression: "selectedItems"
                                  }
                                ],
                                attrs: { type: "checkbox" },
                                domProps: {
                                  value: category.id,
                                  checked: Array.isArray(_vm.selectedItems)
                                    ? _vm._i(_vm.selectedItems, category.id) >
                                      -1
                                    : _vm.selectedItems
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = _vm.selectedItems,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = category.id,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.selectedItems = $$a.concat([
                                            $$v
                                          ]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.selectedItems = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.selectedItems = $$c
                                    }
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(category.id))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(category.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(category.slug))]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "span",
                                {
                                  staticClass: "badge",
                                  class: [
                                    category.products_count
                                      ? "badge-success"
                                      : "badge-danger"
                                  ]
                                },
                                [_vm._v(_vm._s(category.products_count))]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  _vm._f("formatedDate")(category.created_at)
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "mr-4",
                                    attrs: {
                                      to: {
                                        name: "categories.edit",
                                        params: { id: category.id }
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-pen text-success"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.deleteCategory(category.id)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-trash text-danger"
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        })
                  ],
                  2
                )
              ]
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header card-header-sticker bg-primary text-center" },
      [
        _c("h6", { staticClass: "font-weight-bold text-white" }, [
          _c("i", { staticClass: "fa fa-clipboard-list fa-2x" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h1", { staticClass: "h4 mt-4 text-gray-800" }, [
        _vm._v("Tableau des Catégories")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);