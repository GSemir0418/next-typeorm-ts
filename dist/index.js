"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("reflect-metadata");

var _typeorm = require("typeorm");

var _Post = require("./entity/Post");

(0, _typeorm.createConnection)().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    var manager, posts, p, posts2;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // 在connection中取出manager
            manager = connection.manager;
            _context.next = 3;
            return manager.find(_Post.Post);

          case 3:
            posts = _context.sent;
            // 第一次查找全部Post数据应该为空
            console.log(posts);
            p = new _Post.Post();
            p.title = "Post 1";
            p.content = "我的第一篇博客"; // 保存p对象

            _context.next = 10;
            return manager.save(p);

          case 10:
            _context.next = 12;
            return manager.find(_Post.Post);

          case 12:
            posts2 = _context.sent;
            // 应该有我们新增的一条数据
            console.log(posts2); // 最后要关闭连接

            connection.close();

          case 15:
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