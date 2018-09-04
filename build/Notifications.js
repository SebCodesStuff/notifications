'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NotificationMessage = require('./NotificationMessage');

var _NotificationMessage2 = _interopRequireDefault(_NotificationMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notifications = function (_React$Component) {
  _inherits(Notifications, _React$Component);

  function Notifications() {
    _classCallCheck(this, Notifications);

    return _possibleConstructorReturn(this, (Notifications.__proto__ || Object.getPrototypeOf(Notifications)).apply(this, arguments));
  }

  _createClass(Notifications, [{
    key: 'render',
    value: function render() {
      var notifications = this.props.notifications;

      return _react2.default.createElement(
        'div',
        null,
        notifications.length ? this.hasMessages(notifications) : this.emptyInbox()
      );
    }
  }, {
    key: 'hasMessages',
    value: function hasMessages(notifications) {
      var markAllAction = this.props.markAllAction;

      return _react2.default.createElement(
        'div',
        { className: 'notification-dropdown' },
        _react2.default.createElement(
          'div',
          { className: 'notifications-mark-all-as-read', onClick: function onClick() {
              return markAllAction();
            } },
          'Mark All as Read'
        ),
        _react2.default.createElement(
          'div',
          { className: 'notification-message-container' },
          this.messages(notifications)
        )
      );
    }
  }, {
    key: 'messages',
    value: function messages(notifications) {
      var _this2 = this;

      return notifications.map(function (notification) {
        var avatar = notification.avatar,
            screenshot = notification.screenshot,
            userUuid = notification.user_uuid,
            worldUuid = notification.world_uuid;
        var _props = _this2.props,
            worldCdn = _props.worldCdn,
            placeholderAvatarImg = _props.placeholderAvatarImg,
            fallbackImage = _props.fallbackImage,
            worldUrl = _props.worldUrl,
            viewAction = _props.viewAction;

        var avUrl = avatar ? worldCdn + '/v1/users/' + userUuid + '/' + avatar : placeholderAvatarImg;
        var scrUrl = screenshot ? worldCdn + '/v1/worlds/' + worldUuid + '/' + screenshot : fallbackImage;
        return _react2.default.createElement(_NotificationMessage2.default, {
          key: notification.id,
          avatarUrl: avUrl,
          screenshotUrl: scrUrl,
          notification: notification,
          placeholderAvatarImg: placeholderAvatarImg,
          fallbackImage: fallbackImage,
          worldUrl: worldUrl,
          viewAction: viewAction });
      });
    }
  }, {
    key: 'emptyInbox',
    value: function emptyInbox() {
      return _react2.default.createElement(
        'div',
        { className: 'notifications-empty' },
        'Sorry you have no notifications to show'
      );
    }
  }]);

  return Notifications;
}(_react2.default.Component);

exports.default = Notifications;