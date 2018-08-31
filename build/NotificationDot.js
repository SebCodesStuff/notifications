'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationDot = function NotificationDot(props) {
  var show = props.show,
      style = props.style;

  return _react2.default.createElement('div', { className: show ? 'show-notification' : 'hide-notification', style: style });
};

exports.default = NotificationDot;