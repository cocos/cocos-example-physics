
                    'use strict';
                    cc._RF.push(module, '8cb100FMc9H5JOfQn7EUJNZ', 'third-person-camera');
// third-person-camera

                "use strict";

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

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

var ThirdPersonCamera = (_dec = cc._decorator.ccclass(), _dec2 = cc._decorator.property(cc.Node), _dec3 = cc._decorator.property(Number), _dec4 = cc._decorator.property(Number), _dec5 = cc._decorator.property(Number), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_cc$Component) {
  _inherits(ThirdPersonCamera, _cc$Component);

  function ThirdPersonCamera() {
    var _this;

    _classCallCheck(this, ThirdPersonCamera);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ThirdPersonCamera).call(this));

    _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_assertThisInitialized(_this)));

    _initializerDefineProperty(_this, "distance", _descriptor2, _assertThisInitialized(_assertThisInitialized(_this)));

    _initializerDefineProperty(_this, "minDistance", _descriptor3, _assertThisInitialized(_assertThisInitialized(_this)));

    _initializerDefineProperty(_this, "maxDistance", _descriptor4, _assertThisInitialized(_assertThisInitialized(_this)));

    _this._lbtnDown = false;
    _this._rbtnDown = false;
    _this._keyStates = new Array(128);

    _this._keyStates.fill(false);

    _this._viewDir = new cc.Vec3(1, 1, 1);
    cc.vmath.vec3.normalize(_this._viewDir, _this._viewDir);
    _this._viewVector = new cc.Vec3(0, 0, 0);
    return _this;
  }

  _createClass(ThirdPersonCamera, [{
    key: "start",
    value: function start() {
      var _this2 = this;

      cc.eventManager.setEnabled(true);
      var mouseListener = cc.EventListener.create({
        event: cc.EventListener.MOUSE,
        onMouseDown: function onMouseDown() {
          return _this2._mouseDownHandler.apply(_this2, arguments);
        },
        onMouseMove: function onMouseMove() {
          return _this2._mouseMoveHandler.apply(_this2, arguments);
        },
        onMouseUp: function onMouseUp() {
          return _this2._mouseUpHandler.apply(_this2, arguments);
        },
        onMouseScroll: function onMouseScroll() {
          return _this2._mouseWheelHandler.apply(_this2, arguments);
        }
      });
      cc.eventManager.addListener(mouseListener, 1);
      var keyListener = cc.EventListener.create({
        event: cc.EventListener.KEYBOARD,
        onKeyPressed: function onKeyPressed() {
          return _this2._keyDownHandler.apply(_this2, arguments);
        },
        onKeyReleased: function onKeyReleased() {
          return _this2._keyUpHandler.apply(_this2, arguments);
        }
      });
      cc.eventManager.addListener(keyListener, 1);
    }
  }, {
    key: "update",
    value: function update(dt) {
      if (!this.target) {
        return;
      }

      cc.vmath.vec3.scale(this._viewVector, this._viewDir, this.distance);
      var targetPosition = this.target.getPosition();
      var cameraPosition = new cc.Vec3();
      cc.vmath.vec3.add(cameraPosition, targetPosition, this._viewVector);
      this.node.setPosition(cameraPosition);
      this.node.lookAt(targetPosition);
    }
  }, {
    key: "_setDistance",
    value: function _setDistance(value) {
      this.distance = cc.vmath.clamp(value, this.minDistance, this.maxDistance);
    }
  }, {
    key: "_mouseWheelHandler",
    value: function _mouseWheelHandler(event) {
      var delta = event._scrollY / 120; // forward to screen is positive

      this._setDistance(this.distance - delta);
    }
  }, {
    key: "_mouseDownHandler",
    value: function _mouseDownHandler(event) {
      if (event._button === 0) {
        this._lbtnDown = true;
      } else if (event._button === 1) {
        this._mbtnDown = true;
      } else if (event._button === 2) {
        cc.game.canvas.requestPointerLock();
        this._rbtnDown = true;
      }
    }
  }, {
    key: "_mouseUpHandler",
    value: function _mouseUpHandler(event) {
      if (event._button === 0) {
        this._lbtnDown = false;
      } else if (event._button === 1) {
        this._mbtnDown = false;
      } else if (event._button === 2) {
        document.exitPointerLock();
        this._rbtnDown = false;
      }
    }
  }, {
    key: "_mouseMoveHandler",
    value: function _mouseMoveHandler(event) {
      var dx = event.movementX;
      var dy = -event.movementY;

      if (dx !== 0) {
        if (this._lbtnDown) {
          this._rotateSelfHorizon(dx / 5);
        }
      }

      if (dy !== 0) {
        if (this._rbtnDown) {
          this._rotateSelfVertical(dy / 5);
        }
      }
    }
  }, {
    key: "_keyDownHandler",
    value: function _keyDownHandler(keycode) {
      if (keycode < this._keyStates.length) {
        this._keyStates[keycode] = true;
      }
    }
  }, {
    key: "_keyUpHandler",
    value: function _keyUpHandler(keycode) {
      if (keycode < this._keyStates.length) {
        this._keyStates[keycode] = false;
      }
    }
  }, {
    key: "_rotateSelfHorizon",
    value: function _rotateSelfHorizon(delta) {
      var up = cc.v3(0, 1, 0);

      this._rotate(-delta / 360.0 * 3.14159265, up);
    }
  }, {
    key: "_rotateSelfVertical",
    value: function _rotateSelfVertical(delta) {
      var up = cc.v3(0, 1, 0);
      var right = new cc.Vec3();
      cc.vmath.vec3.cross(right, this._viewDir, up);
      cc.vmath.vec3.normalize(right, right);

      this._rotate(-delta / 360.0 * 3.14159265, right);
    }
  }, {
    key: "_rotate",
    value: function _rotate(angle, axis) {
      var rotation = cc.vmath.quat.create();
      cc.vmath.quat.rotateAround(rotation, rotation, axis, angle);
      cc.vmath.vec3.transformQuat(this._viewDir, this._viewDir, rotation);
    }
  }, {
    key: "_getForward",
    value: function _getForward() {
      return this._getDirection(0, 0, -1);
    }
  }, {
    key: "_getRight",
    value: function _getRight() {
      return this._getDirection(1, 0, 0);
    }
  }, {
    key: "_getUp",
    value: function _getUp() {
      return this._getDirection(0, 1, 0);
    }
  }, {
    key: "_getDirection",
    value: function _getDirection(x, y, z) {
      var result = cc.v3(x, y, z);
      cc.vmath.vec3.transformQuat(result, result, this.node.getRotation());
      return result;
    }
  }]);

  return ThirdPersonCamera;
}(cc.Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "distance", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 100;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "minDistance", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 10;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "maxDistance", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 200;
  }
})), _class2)) || _class);
cc._RF.pop();
