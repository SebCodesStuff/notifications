'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfiniteScroll = function InfiniteScroll(props) {
  var action = props.action,
      page = props.page,
      lastPage = props.lastPage,
      loadingBuffer = props.loadingBuffer;

  return _react2.default.createElement(
    'div',
    { className: props.className, onScroll: function onScroll(e) {
        return _onScroll(e, action, page, lastPage, loadingBuffer);
      } },
    props.children
  );
};

var _onScroll = function _onScroll(e, action, page, lastPage, loadingBuffer) {
  var bottom = e.target.clientHeight + e.target.scrollTop > e.target.scrollHeight - loadingBuffer;
  if (bottom && page <= lastPage) {
    action();
  }
};

exports.default = InfiniteScroll;