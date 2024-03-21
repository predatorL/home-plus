import { Application, Assets, Text, Graphics, Texture, Sprite, Loader } from "pixi.js";
const initConfig = {
    width: 800,
    height: 600,
    transparent: true,
    backgroundColor: 0x6495ed
}

export const GameInit = async () => {
    console.log('gameInit');
    const app = new Application();

    await app.init(initConfig);

    // 资源加载
    const imgUrl = '/guaiwu.webp';
    await Assets.load(imgUrl);
    let sprite = Sprite.from(imgUrl);
    app.stage.addChild(sprite);

    // Add a ticker callback to move the sprite back and forth
    let elapsed = 0.0;
    app.ticker.add((ticker) => {
        elapsed += ticker.deltaTime;
        sprite.y = 100.0 + Math.cos(elapsed/50.0) * 100.0;
    });


    document.body.appendChild(app.canvas);
}
