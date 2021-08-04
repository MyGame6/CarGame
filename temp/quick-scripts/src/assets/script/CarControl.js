"use strict";
cc._RF.push(module, '1968aeVP9NKM42F5H4DNPQi', 'CarControl');
// script/CarControl.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CarControl = /** @class */ (function (_super) {
    __extends(CarControl, _super);
    function CarControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.up = null;
        _this.down = null;
        _this.left = null;
        _this.right = null;
        _this.die = null;
        // 血量
        _this.hp = 10;
        // 速度
        _this.speed = 50;
        // 输入轴
        _this.vertical = 0;
        _this.horizontal = 0;
        // 精灵组件
        _this.sprite = null;
        return _this;
    }
    // onLoad () {}
    CarControl.prototype.start = function () {
        this.input();
        // 获取精灵组件
        this.sprite = this.getComponent(cc.Sprite);
        // 开启碰撞监听
        cc.director.getCollisionManager().enabled = true;
    };
    CarControl.prototype.update = function (dt) {
        // 水平方向
        this.node.x += this.speed * dt * this.horizontal;
        // 垂直方向
        this.node.y += this.speed * dt * this.vertical;
    };
    // 碰撞监听
    CarControl.prototype.onCollisionEnter = function () {
        // 碰上就死亡
        this.sprite.spriteFrame = this.die;
        // 碰上掉血
        this.hp -= 5;
    };
    CarControl.prototype.input = function () {
        var _this = this;
        // 按键
        // 按下
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
            // 判断是否已经死亡
            if (_this.hp <= 0) {
                _this.vertical = 0;
                _this.horizontal = 0;
                return;
            }
            if (event.keyCode == cc.macro.KEY.w) {
                console.log('----------- w -----------');
                _this.vertical = 1;
                // 上的图片
                _this.sprite.spriteFrame = _this.up;
            }
            if (event.keyCode == cc.macro.KEY.s) {
                console.log('----------- s -----------');
                _this.vertical = -1;
                _this.sprite.spriteFrame = _this.down;
            }
            if (event.keyCode == cc.macro.KEY.a) {
                console.log('----------- a -----------');
                _this.horizontal = -1;
                _this.sprite.spriteFrame = _this.left;
            }
            if (event.keyCode == cc.macro.KEY.d) {
                console.log('----------- d -----------');
                _this.horizontal = 1;
                _this.sprite.spriteFrame = _this.right;
            }
        });
        // 抬起
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function (event) {
            if (event.keyCode == cc.macro.KEY.w && _this.vertical == 1) {
                console.log('up----------- w -----------');
                _this.vertical = 0;
            }
            if (event.keyCode == cc.macro.KEY.s && _this.vertical == -1) {
                console.log('up----------- s -----------');
                _this.vertical = 0;
            }
            if (event.keyCode == cc.macro.KEY.a && _this.horizontal == -1) {
                console.log('up----------- a -----------');
                _this.horizontal = 0;
            }
            if (event.keyCode == cc.macro.KEY.d && _this.horizontal == 1) {
                console.log('up----------- d -----------');
                _this.horizontal = 0;
            }
        });
    };
    __decorate([
        property(cc.SpriteFrame)
    ], CarControl.prototype, "up", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CarControl.prototype, "down", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CarControl.prototype, "left", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CarControl.prototype, "right", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CarControl.prototype, "die", void 0);
    CarControl = __decorate([
        ccclass
    ], CarControl);
    return CarControl;
}(cc.Component));
exports.default = CarControl;

cc._RF.pop();