'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTooltip = require('react-tooltip');

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationDot = function (_React$Component) {
  _inherits(NotificationDot, _React$Component);

  function NotificationDot() {
    _classCallCheck(this, NotificationDot);

    return _possibleConstructorReturn(this, (NotificationDot.__proto__ || Object.getPrototypeOf(NotificationDot)).apply(this, arguments));
  }

  _createClass(NotificationDot, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _reactTooltip2.default.rebuild();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          style = _props.style,
          textStyle = _props.textStyle,
          tooltip = _props.tooltip;

      return _react2.default.createElement(
        'div',
        _extends({ className: 'notification-dot', style: style }, this.getTooltipProps(tooltip)),
        _react2.default.createElement(
          'p',
          { style: textStyle },
          text
        )
      );
    }
  }, {
    key: 'getTooltipProps',
    value: function getTooltipProps(tooltip) {
      return {
        'data-tip': tooltip,
        'data-place': 'top',
        'data-type': 'error'
      };
    }
  }]);

  return NotificationDot;
}(_react2.default.Component);

exports.default = NotificationDot;