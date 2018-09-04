'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactImageloader = require('react-imageloader');

var _reactImageloader2 = _interopRequireDefault(_reactImageloader);

var _MomentHelper = require('./MomentHelper');

var _MomentHelper2 = _interopRequireDefault(_MomentHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationMessage = function (_React$Component) {
  _inherits(NotificationMessage, _React$Component);

  function NotificationMessage() {
    _classCallCheck(this, NotificationMessage);

    return _possibleConstructorReturn(this, (NotificationMessage.__proto__ || Object.getPrototypeOf(NotificationMessage)).apply(this, arguments));
  }

  _createClass(NotificationMessage, [{
    key: 'render',
    value: function render() {
      var _props$notification = this.props.notification,
          received_at = _props$notification.received_at,
          name = _props$notification.name,
          type = _props$notification.type,
          unviewed = _props$notification.unviewed,
          likes = _props$notification.likes,
          comments = _props$notification.comments,
          id = _props$notification.notification_id;
      var _props = this.props,
          avatarUrl = _props.avatarUrl,
          screenshotUrl = _props.screenshotUrl,
          worldUrl = _props.worldUrl,
          action = _props.action;


      return _react2.default.createElement(
        _reactRouter.Link,
        { to: worldUrl, target: '_blank' },
        _react2.default.createElement(
          'div',
          { className: unviewed ? 'notification-unviewed' : 'notification-viewed' },
          _react2.default.createElement(
            'div',
            { className: 'notification-message', onClick: function onClick() {
                return action(id);
              } },
            _react2.default.createElement(
              'div',
              { className: 'notification-message-left' },
              _react2.default.createElement(
                'div',
                { className: 'notification-user-link' },
                _react2.default.createElement(_reactImageloader2.default, { imgProps: { className: 'account-dropdown-avatar notification-img' }, src: avatarUrl, wrapper: _react2.default.DOM.div,
                  preloader: this.avatarPlaceHolder })
              ),
              _react2.default.createElement(
                'div',
                { className: 'notification-message-content' },
                _react2.default.createElement(
                  'div',
                  { className: 'notification-sender-name' },
                  name + ' ',
                  _react2.default.createElement(
                    'p',
                    null,
                    type === 'like' ? this.likeCounter(likes) : this.commentCounter(comments)
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'notification-time' },
                  _MomentHelper2.default.timeFromNow(received_at)
                )
              )
            ),
            _react2.default.createElement(_reactImageloader2.default, { imgProps: { className: 'notification-img' }, src: screenshotUrl, wrapper: _react2.default.DOM.div,
              preloader: this.screenshotPlaceHolder })
          )
        )
      );
    }
  }, {
    key: 'likeCounter',
    value: function likeCounter(count) {
      var message = 'liked your scene.';
      if (count === 1) return message;else if (count === 2) return 'and ' + (count - 1) + ' other user ' + message;else return 'and ' + (count - 1) + ' others ' + message;
    }
  }, {
    key: 'commentCounter',
    value: function commentCounter(count) {
      var message = 'commented on your scene.';
      if (count === 1) return message;else if (count === 2) return message + ' You have ' + (count - 1) + ' other comment on your scene.';else return message + ' You have ' + (count - 1) + ' other comments on your scene.';
    }
  }, {
    key: 'avatarPlaceHolder',
    value: function avatarPlaceHolder(placeholderAvatarImg) {
      return _react2.default.createElement('img', { src: placeholderAvatarImg, className: 'account-dropdown-avatar' });
    }
  }, {
    key: 'screenshotPlaceHolder',
    value: function screenshotPlaceHolder(fallbackImage) {
      return _react2.default.createElement('img', { src: fallbackImage, className: 'account-dropdown-avatar' });
    }
  }]);

  return NotificationMessage;
}(_react2.default.Component);

exports.default = NotificationMessage;