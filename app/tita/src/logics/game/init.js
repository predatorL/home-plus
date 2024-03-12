import { Application, Sprite } from "pixi.js";

export const GameInit = async () => {
    // Create the application
    const app = new Application();

    await app.init({ width: 800, height: 600 });

    // Add the view to the DOM
    document.body.appendChild(app.canvas);

    // ex, add display objects
    app.stage.addChild(Sprite.from('/vite.svg'));
}