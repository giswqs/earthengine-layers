(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "SY+S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToDOM", function() { return renderToDOM; });
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6kNP");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8npG");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pJf4");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("kD0k");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wcNg");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _deck_gl_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("yYqN");
/* harmony import */ var _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("NGNH");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("UP1k");
/* harmony import */ var _google_earthengine__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("RtaV");
/* harmony import */ var _google_earthengine__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_google_earthengine__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("v5MB");
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Add a EE-enabled Google Client id here (or inject it with e.g. a webpack environment plugin)
var EE_CLIENT_ID="562875810552-5mut6fkiukje0cbbvg5cd9vdmdb8u6dh.apps.googleusercontent.com";// eslint-disable-line
var MAPBOX_TOKEN="pk.eyJ1Ijoia3lsZWJhcnJvbiIsImEiOiJjazJieGNtd2MwNmRrM25sY3BsdXVwaGhiIn0.CUixqH36Knh0ra_TaG5aug";// eslint-disable-line
var INITIAL_VIEW_STATE={longitude:-53,latitude:36,zoom:3,pitch:0,bearing:0};var FUEL_COLOR_MAPPING_VECTOR={Coal:[0,0,0],Oil:[89,55,4],Gas:[188,128,189],Hydro:[5,101,166],Nuclear:[227,26,28],Solar:[255,127,0],Waste:[106,61,154],Wind:[92,162,209],Geothermal:[253,191,111],Biomass:[34,154,0]};var App=/*#__PURE__*/function(_React$Component){_inheritsLoose(App,_React$Component);function App(props){var _this;_this=_React$Component.call(this,props)||this;_this.state={eeObject:null,hoveredObject:null};_this._onHover=_this._onHover.bind(_assertThisInitialized(_this));_this._renderTooltip=_this._renderTooltip.bind(_assertThisInitialized(_this));_this.loginProvider=new _shared__WEBPACK_IMPORTED_MODULE_11__[/* GoogleLoginProvider */ "b"]({scopes:['https://www.googleapis.com/auth/earthengine'],clientId:EE_CLIENT_ID,onLoginChange:_this._onLoginSuccess.bind(_assertThisInitialized(_this))});return _this;}var _proto=App.prototype;_proto._onLoginSuccess=/*#__PURE__*/function(){var _onLoginSuccess2=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(user,loginProvider){var eeObject;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_8__[/* EarthEngineLayer */ "a"].initializeEEApi({clientId:EE_CLIENT_ID});case 2:eeObject=_google_earthengine__WEBPACK_IMPORTED_MODULE_10___default.a.FeatureCollection('WRI/GPPD/power_plants');this.setState({eeObject:eeObject});case 4:case"end":return _context.stop();}}},_callee,this);}));function _onLoginSuccess(_x,_x2){return _onLoginSuccess2.apply(this,arguments);}return _onLoginSuccess;}();_proto._renderTooltip=function _renderTooltip(){var hoveredObject=this.state.hoveredObject;return hoveredObject&&{html:"<div className=\"tooltip\">\n          <div>\n            <b>Name</b>\n          </div>\n          <div>\n            <div>"+hoveredObject.properties.name+"</div>\n          </div>\n          <div>\n            <b>Fuel Type</b>\n          </div>\n          <div>\n            <div>"+hoveredObject.properties.fuel1+"</div>\n          </div>\n          <div>\n            <b>Capacity (MW)</b>\n          </div>\n          <div>"+Math.round(hoveredObject.properties.capacitymw)+"</div>\n        </div>"};};_proto._onHover=function _onHover(_ref){var x=_ref.x,y=_ref.y,object=_ref.object;this.setState({x:x,y:y,hoveredObject:object});};_proto.render=function render(){var eeObject=this.state.eeObject;var _this$props$mapStyle=this.props.mapStyle,mapStyle=_this$props$mapStyle===void 0?'mapbox://styles/mapbox/dark-v9':_this$props$mapStyle;var layers=eeObject&&new _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_8__[/* EarthEngineLayer */ "a"]({eeObject:eeObject,getRadius:function getRadius(f){return Math.pow(f.properties.capacitymw,1.35);},getFillColor:function getFillColor(f){return FUEL_COLOR_MAPPING_VECTOR[f.properties.fuel1];},selectors:['fuel1','capacitymw','name'],asVector:true,lineWidthMinPixels:0.5,pointRadiusMinPixels:2,opacity:0.4,id:'fuel',pickable:true,onHover:this._onHover});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{style:{position:'relative',height:'100%'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_deck_gl_react__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],{controller:true,initialViewState:INITIAL_VIEW_STATE,layers:layers,getTooltip:this._renderTooltip},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_9__[/* StaticMap */ "a"],{reuseMaps:true,mapStyle:mapStyle,preventStyleDiffing:true,mapboxApiAccessToken:MAPBOX_TOKEN}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_11__[/* GoogleLoginPane */ "a"],{loginProvider:this.loginProvider}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_11__[/* InfoBox */ "c"],{title:"FeatureCollection"},"The",' ',/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a",{href:"https://developers.google.com/earth-engine/datasets/catalog/WRI_GPPD_power_plants"},"Global Power Plant Database"),' ',"displayed using an ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("code",null,"ee.FeatureCollection")," object.")));};return App;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);function renderToDOM(container){return Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["render"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(App,null),container);}

/***/ })

}]);