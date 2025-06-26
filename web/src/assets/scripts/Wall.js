import { AcGameObject } from "./AcGameObject";

export class Wall extends AcGameObject{
    constructor(r, c, gamemap){
        super();//继承一个基类一定要先调用基类的构造函数

        this.r = r;
        this.c = c;
        this.gamemap = gamemap;
        this.color = "#B37226";
    }

    update(){
        this.render();
    }

    render(){
        const L = this.gamemap.L;
        const ctx = this.gamemap.ctx;

        ctx.fillStyle = this.color;
        ctx.fillRect(this.c * L, this.r * L, L, L);
    }
}