/**
 * class Storyline.Scene
 * class StScene
 * 
 * @authors EZaca,
 * @generator node genclass.js
 * @license MIT License
 * @copyright (c) 2016 Storyline
 */

if (typeof Storyline === "undefined")
    throw new Error('Storyline is required');

Storyline.Scene = function(parent)
{
    // Initialize fields
    this.id = undefined;
    this.maxFrames = 1;
    this.loops = 1;
    this.theater = parent;
    this.currentFrame = 0;
    this.currentLoop = 0;
    this.layers = [];
    this.onDraw = undefined;
    this.onFinish = undefined;
    this.onStart = undefined;
    this.onTick = undefined;
    
    return this;
}

if (typeof StScene === "undefined")
    StScene = Storyline.Scene;

Storyline.Scene.prototype.newLayer = function(layerTypeName, initCallback)
{
    var constructor = Storyline.layerType[layerTypeName];
    if (constructor == undefined)
        throw new StorylineError('Layer type "'+layerTypeName+'" not found');

    var layer = new constructor(this);
    this.layers.push(layer);

    if (initCallback instanceof Function)
        initCallback.apply(layer, []);

    if ((layer.name != '') && (layer.name != undefined) && (! this.layers[layer.name]))
    {
        if (Number(layer.name) == layer.name)
            throw new StorylineError('Layers must not have a numeric name');
        this.layers[layer.name] = layer;
    }

    if (this === this.theater.currentScene)
        layer.doStart();

    return layer;
};

Storyline.Scene.prototype.setFrame = function(frameNum)
{
    this.currentFrame = frameNum;
};

Storyline.Scene.prototype.gotoFrame = function(frameNum)
{
    if (frameNum >= this.maxFrames)
        frameNum = this.maxFrames-1;
    else
    if (frameNum < 0)
        frameNum = 0;

    this.setFrame(frameNum);
};

Storyline.Scene.prototype.gotoAndPlay = function(frameNum)
{
    this.theater._stopTimer();
    this.gotoFrame(frameNum);
    this.theater.play();
};

Storyline.Scene.prototype.gotoAndStop = function(frameNum)
{
    this.gotoFrame(frameNum);
    this.theater.stop();
};

Storyline.Scene.prototype.doDraw = function()
{
    if (this.onDraw instanceof Function)
        this.onDraw();

    for (var i=0; i<this.layers.length; i++)
    {
        this.layers[i].doDraw();
    }
};

Storyline.Scene.prototype.doFinish = function()
{
    for (var i=0; i<this.layers.length; i++)
    {
        this.layers[i].doFinish();
    }

    if (this.onFinish instanceof Function)
        this.onFinish();
};

Storyline.Scene.prototype.doStart = function()
{
    this.currentFrame = 0;
    this.currentLoop = 0;
    if (this.onStart instanceof Function)
        this.onStart();

    for (var i=0; i<this.layers.length; i++)
    {
        this.layers[i].doStart();
    }
};

Storyline.Scene.prototype.doTick = function()
{
    var frame = this.currentFrame;
    frame++;
    if (frame >= this.maxFrames)
    {
        frame = 0;
        this.currentLoop++;
        if (this.currentLoop >= this.loops)
        {
            this.theater.nextScene();
        } else
            this.setFrame(0);
    } else
        this.setFrame(frame);

    if (this.onTick instanceof Function)
        this.onTick();

    for (var i=0; i<this.layers.length; i++)
    {
        this.layers[i].doTick();
    }
};