'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationDot = function NotificationDot(props) {
  var text = props.text,
      style = props.style,
      textStyle = props.textStyle,
      tooltip = props.tooltip;


  var getToolTip = {
    'data-tip': tooltip,
    'data-place': 'top',
    'data-type': 'error'
  };

  return _react2.default.createElement(
    'div',
    _extends({ className: 'notification-dot', style: style }, getToolTip),
    _react2.default.createElement(
      'p',
      _extends({ style: textStyle }, getToolTip),
      text
    )
  );
};

exports.default = NotificationDot;