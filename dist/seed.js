"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("reflect-metadata");

var _typeorm = require("typeorm");

var _Post = require("./entity/Post");

(0, _typeorm.createConnection)().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    var manager, posts;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            manager = connection.manager;
            _context.next = 3;
            return manager.find(_Post.Post);

          case 3:
            posts = _context.sent;

            if (!(posts.length === 0)) {
              _context.next = 8;
              break;
            }

            _context.next = 7;
            return manager.save([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (v) {
              return new _Post.Post({
                title: "Post ".concat(v),
                content: "\u8FD9\u662F\u6211\u7684\u7B2C".concat(v, "\u7BC7\u535A\u5BA2")
              });
            }));

          case 7:
            console.log("posts\u6570\u636E\u586B\u5145\u5B8C\u6210!");

          case 8:
            connection.close();

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}())["catch"](function (error) {
  return console.log(error);
});