import { Application, Assets, Text, Graphics, Texture, Sprite, Loader } from "pixi.js";

export const GameInit = async () => {
    console.log('gameInit');
    const app = new Application();

    await app.init({
        width: 800,
        height: 600,
        transparent: true,
        backgroundColor: 0x6495ed
    });

    document.body.appendChild(app.canvas);
    // const imgUrl = 'https://faas-image.amap.com/shaolin/images/G20/CP_LOGO/cp_flash@3x.png?t=1703488480000';
    const imgUrl = '/guaiwu.webp';
    // 加载图片，并在加载完毕后执行`onImageLoaded`函数
    // Loader.shared.add('https://i.imgur.com/IaUrttj.png').load(onImageLoaded);
    await Assets.load(imgUrl);
    
    let sprite = Sprite.from(imgUrl);
    app.stage.addChild(sprite);

    // Add a ticker callback to move the sprite back and forth
    let elapsed = 0.0;
    app.ticker.add((ticker) => {
        elapsed += ticker.deltaTime;
        sprite.y = 100.0 + Math.cos(elapsed/50.0) * 100.0;
    });
}

export const GameInit2 = async () => {
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
        sloganBg.position.set(Math.random() * 10, Math.random() * 10);

    }, 2000)
}