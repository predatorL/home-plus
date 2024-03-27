import { Application, Assets, Text, Graphics, Texture, Sprite, Loader } from "pixi.js";
const initConfig = {
    width: 800,
    height: 600,
    transparent: true,
    backgroundColor: 0x6495ed
}

const imgUrl = '/guaiwu.webp';
const iconUrl = '/icon1.jpg';


const array = [1, 2, 3, 4, 5];

export const GameInit = async () => {
    console.log('gameInit');
    const app = new Application();

    await app.init(initConfig);

    // 资源加载
    await Assets.load(imgUrl);
    await Assets.load(iconUrl);
    const spriteArray = array.map(item => {
        const _sprite = Sprite.from(imgUrl);
        _sprite.width  = 50;
        _sprite.height = 50;
        return _sprite;
    });
    spriteArray.forEach((item, i) => {
        item.x += i * 100;
        app.stage.addChild(item);
    });
    // app.stage.addChild(spriteArray);

    // Add a ticker callback to move the sprite back and forth
    let elapsed = 0.0;
    app.ticker.add((ticker) => {
        elapsed += ticker.deltaTime;
        console.log(spriteArray[0].y)
        spriteArray.forEach((item, i) => {
            if (item.y > 600) {
                item.y = 0;
            } else {
                // item.y += item.y + 0.005 * (i + 1);
                // item.y += item.y + 1;
            }
        });
        // sprite.y = 100.0 + Math.cos(elapsed/50.0) * 100.0;
    });


    document.body.appendChild(app.canvas);
}
