'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _leafletCordova = require('leaflet-cordova');

var _latlngList = require('./latlngList');

var _latlngList2 = _interopRequireDefault(_latlngList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react.PropTypes.oneOfType([_react.PropTypes.instanceOf(_leafletCordova.LatLngBounds), _latlngList2.default]);