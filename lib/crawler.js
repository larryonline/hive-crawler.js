'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _validate = require('validate.io');

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*jslint esversion:6 */

/**
 * 爬虫负责下载资源
 */
var Crawler = function (_EventEmitter) {
    _inherits(Crawler, _EventEmitter);

    function Crawler() {
        _classCallCheck(this, Crawler);

        var _this = _possibleConstructorReturn(this, (Crawler.__proto__ || Object.getPrototypeOf(Crawler)).call(this));

        _this.overlord = null;
        return _this;
    }

    _createClass(Crawler, [{
        key: 'request',
        value: function request() {
            var _this2 = this;

            var a = arguments;
            if (1 == a.length && _validate2.default.isURI(a[0])) {
                _superagent2.default.get(a[0]).then(function (res) {
                    _this2.emit('response', null, res);
                }).catch(function (err) {
                    _this2.emit('error', err);
                });
            } else {
                throw new Error('invalid arguments: ' + arguments);
            }
        }
    }]);

    return Crawler;
}(_events2.default);

exports.default = Crawler;