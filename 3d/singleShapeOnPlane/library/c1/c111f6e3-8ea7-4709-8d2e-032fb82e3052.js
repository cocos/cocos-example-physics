
                    'use strict';
                    cc._RF.push(module, 'c111fbjjqdHCY0uAy+4LjBS', 'scene-obj');
// scene-obj

                "use strict";

var _dec, _dec2, _class, _class2, _descriptor, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

var SceneLoadObj = (_dec = cc._decorator.ccclass(), _dec2 = cc._decorator.property(Number), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_cc$Component) {
  _inherits(SceneLoadObj, _cc$Component);

  function SceneLoadObj() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SceneLoadObj);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SceneLoadObj)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _initializerDefineProperty(_this, "objectCount", _descriptor, _assertThisInitialized(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(SceneLoadObj, [{
    key: "start",
    value: function start() {
      var scene = this.node.parent;
      var sphereAsset = scene.getChildByName('Sphere').getComponent(cc.ModelComponent).mesh;
      var boxAsset = scene.getChildByName('Box').getComponent(cc.ModelComponent).mesh;
      var ground = scene.getChildByName('Ground');
      var groundCollider = ground.getComponent('cc.ColliderComponentBase');
      var groundRigid = ground.getComponent('cc.RigidBodyComponent');
      groundRigid.material = new cc.PhysicsMaterial();
    }
  }]);

  return SceneLoadObj;
}(cc.Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "objectCount", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 3;
  }
})), _class2)) || _class);
cc._RF.pop();
