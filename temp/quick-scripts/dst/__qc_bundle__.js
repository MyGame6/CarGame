
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/CarControl');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/CarControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxDYXJDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBb0dDO1FBakdHLFFBQUUsR0FBa0IsSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBa0IsSUFBSSxDQUFDO1FBRTNCLFVBQUksR0FBa0IsSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBa0IsSUFBSSxDQUFDO1FBRTVCLFNBQUcsR0FBa0IsSUFBSSxDQUFDO1FBRTFCLEtBQUs7UUFDTCxRQUFFLEdBQVUsRUFBRSxDQUFDO1FBQ2YsS0FBSztRQUNMLFdBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsTUFBTTtRQUNOLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsT0FBTztRQUNQLFlBQU0sR0FBYSxJQUFJLENBQUM7O0lBK0U1QixDQUFDO0lBN0VHLGVBQWU7SUFFZiwwQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsU0FBUztRQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsU0FBUztRQUNULEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLE9BQU87UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2pELE9BQU87UUFDUCxJQUFJ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b3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJDb250cm9sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICB1cDpjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBkb3duOmNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGxlZnQ6Y2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcmlnaHQ6Y2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgZGllOmNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICAvLyDooYDph49cclxuICAgIGhwOm51bWJlciA9IDEwO1xyXG4gICAgLy8g6YCf5bqmXHJcbiAgICBzcGVlZDogbnVtYmVyID0gNTA7XHJcbiAgICAvLyDovpPlhaXovbRcclxuICAgIHZlcnRpY2FsOiBudW1iZXIgPSAwO1xyXG4gICAgaG9yaXpvbnRhbDogbnVtYmVyID0gMDtcclxuICAgIC8vIOeyvueBtee7hOS7tlxyXG4gICAgc3ByaXRlOmNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXQoKTtcclxuICAgICAgICAvLyDojrflj5bnsr7ngbXnu4Tku7ZcclxuICAgICAgICB0aGlzLnNwcml0ZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgLy8g5byA5ZCv56Kw5pKe55uR5ZCsXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICAvLyDmsLTlubPmlrnlkJFcclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkICogZHQgKiB0aGlzLmhvcml6b250YWw7XHJcbiAgICAgICAgLy8g5Z6C55u05pa55ZCRXHJcbiAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZCAqIGR0ICogdGhpcy52ZXJ0aWNhbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDnorDmkp7nm5HlkKxcclxuICAgIG9uQ29sbGlzaW9uRW50ZXIoKXtcclxuICAgICAgICAvLyDnorDkuIrlsLHmrbvkuqFcclxuICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZGllO1xyXG4gICAgICAgIC8vIOeisOS4iuaOieihgFxyXG4gICAgICAgIHRoaXMuaHAgLT0gNTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCgpIHtcclxuICAgICAgICAvLyDmjInplK5cclxuICAgICAgICAvLyDmjInkuItcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDliKTmlq3mmK/lkKblt7Lnu4/mrbvkuqFcclxuICAgICAgICAgICAgaWYodGhpcy5ocCA8PSAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsID0gMDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkudykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tIHcgLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgLy8g5LiK55qE5Zu+54mHXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMudXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLSBzIC0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZG93bjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuYSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tIGEgLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLmQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLSBkIC0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyDmiqzotbdcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLncgJiYgdGhpcy52ZXJ0aWNhbCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXAtLS0tLS0tLS0tLSB3IC0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkucyAmJiB0aGlzLnZlcnRpY2FsID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXAtLS0tLS0tLS0tLSBzIC0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuYSAmJiB0aGlzLmhvcml6b250YWwgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cC0tLS0tLS0tLS0tIGEgLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLmQgJiYgdGhpcy5ob3Jpem9udGFsID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cC0tLS0tLS0tLS0tIGQgLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
