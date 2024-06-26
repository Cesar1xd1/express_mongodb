"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTablaA = exports.renderIndexA = exports.postEditA = exports.insertarAuto = exports.getEditA = exports.deleteAuto = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Auto = _interopRequireDefault(require("../models/Auto"));
var renderIndexA = exports.renderIndexA = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var autos;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _Auto["default"].find().lean();
        case 2:
          autos = _context.sent;
          res.render('index', {
            autos: autos
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function renderIndexA(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var renderTablaA = exports.renderTablaA = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var autos;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _Auto["default"].find().lean();
        case 2:
          autos = _context2.sent;
          res.render('tabla', {
            autos: autos
          });
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function renderTablaA(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//ALTA
var insertarAuto = exports.insertarAuto = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var auto, autoadd;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          auto = (0, _Auto["default"])(req.body);
          _context3.next = 4;
          return auto.save();
        case 4:
          autoadd = _context3.sent;
          res.redirect('/tabla');
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function insertarAuto(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//BAJAS
var deleteAuto = exports.deleteAuto = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return _Auto["default"].findByIdAndDelete(id);
        case 3:
          res.redirect('/tabla');
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function deleteAuto(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//CAMBIO
var getEditA = exports.getEditA = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var auto;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _Auto["default"].findById(req.params.id).lean();
        case 3:
          auto = _context5.sent;
          res.render('edit', {
            auto: auto
          });
          _context5.next = 10;
          break;
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0.message);
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function getEditA(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var postEditA = exports.postEditA = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _context6.next = 3;
          return _Auto["default"].findByIdAndUpdate(id, req.body);
        case 3:
          res.redirect('/tabla');
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function postEditA(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();