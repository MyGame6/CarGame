
const {ccclass, property} = cc._decorator;

@ccclass
export default class CarControl extends cc.Component {

    @property(cc.SpriteFrame)
    up:cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    down:cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    left:cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    right:cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    die:cc.SpriteFrame = null;

    // 血量
    hp:number = 10;
    // 速度
    speed: number = 50;
    // 输入轴
    vertical: number = 0;
    horizontal: number = 0;
    // 精灵组件
    sprite:cc.Sprite = null;

    // onLoad () {}

    start () {
        this.input();
        // 获取精灵组件
        this.sprite = this.getComponent(cc.Sprite);
        // 开启碰撞监听
        cc.director.getCollisionManager().enabled = true;
    }

    update (dt) {
        // 水平方向
        this.node.x += this.speed * dt * this.horizontal;
        // 垂直方向
        this.node.y += this.speed * dt * this.vertical;
    }

    // 碰撞监听
    onCollisionEnter(){
        // 碰上就死亡
        this.sprite.spriteFrame = this.die;
        // 碰上掉血
        this.hp -= 5;
    }

    input() {
        // 按键
        // 按下
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, (event) => {
            // 判断是否已经死亡
            if(this.hp <= 0){
                this.vertical = 0;
                this.horizontal = 0;
                return;
            }
            if (event.keyCode == cc.macro.KEY.w) {
                console.log('----------- w -----------');
                this.vertical = 1;
                // 上的图片
                this.sprite.spriteFrame = this.up;
            }
            if (event.keyCode == cc.macro.KEY.s) {
                console.log('----------- s -----------');
                this.vertical = -1;
                this.sprite.spriteFrame = this.down;
            }
            if (event.keyCode == cc.macro.KEY.a) {
                console.log('----------- a -----------');
                this.horizontal = -1;
                this.sprite.spriteFrame = this.left;
            }
            if (event.keyCode == cc.macro.KEY.d) {
                console.log('----------- d -----------');
                this.horizontal = 1;
                this.sprite.spriteFrame = this.right;
            }
        })
        // 抬起
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, (event) => {
            if (event.keyCode == cc.macro.KEY.w && this.vertical == 1) {
                console.log('up----------- w -----------');
                this.vertical = 0;
            }
            if (event.keyCode == cc.macro.KEY.s && this.vertical == -1) {
                console.log('up----------- s -----------');
                this.vertical = 0;
            }
            if (event.keyCode == cc.macro.KEY.a && this.horizontal == -1) {
                console.log('up----------- a -----------');
                this.horizontal = 0;
            }
            if (event.keyCode == cc.macro.KEY.d && this.horizontal == 1) {
                console.log('up----------- d -----------');
                this.horizontal = 0;
            }
        })
    }
}
