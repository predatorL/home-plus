import { Application, Text, Graphics, Sprite, Loader } from "pixi.js";

export const GameInit = async () => {
    // Create the application
    const app = new Application();

    await app.init({ 
        width: 800, 
        height: 600,
        transparent: true,
        backgroundColor: 0x6495ed
     });

    // Add the view to the DOM
    document.body.appendChild(app.canvas);
    
    // 创建文本成员
    const slogan = new Text({
        text: 'Hello PixiJS!',
        style: {
            fill: 0xffffff,
            fontSize: 32,
        }
    });
    slogan.position.set(20, 20);
    // 创建图形成员
    const sloganBg = new Graphics()
    .rect(0, 0, slogan.width + 20, slogan.height + 20, 10);
    sloganBg.fill({
        color: 'red',
        alpha: 0.5
    });
    sloganBg.position.set(10, 10);

    app.stage.addChild(slogan, sloganBg);
    setInterval(() => {
        slogan.text = Math.random().toString(36).substring(2);
        sloganBg.position.set(Math.random() * 10, Math.random() *10);

    }, 2000)
}