/**
 * class StScene
 * 
 * @authors EZaca,
 * @generator node genclass.js
 * @license MIT License
 * @copyright (c) 2016 Storyline
 */

function StScene()
{
    // Initialize fields
    this.maxFrames = 1;
    this.loops = 1;
    this.movie = undefined;
    this.currentFrame = 0;
    this.currentLoop = 0;
    this.layers = [];
    this.onDraw = undefined;
    this.onFinish = undefined;
    this.onStart = undefined;
    this.onTick = undefined;
    
    return this;
}

StScene.prototype.newLayer = function(layerFlavorName, initCallback)
{
    // TODO: Insert code here
};

StScene.prototype.gotoFrame = function(frameNum)
{
    // TODO: Insert code here
};

StScene.prototype.gotoAndPlay = function(frameNum)
{
    // TODO: Insert code here
};

StScene.prototype.gotoAndStop = function(frameNum)
{
    // TODO: Insert code here
};

StScene.prototype.doDraw = function()
{
    if (this.onDraw instanceof Function)
        this.onDraw();
};

StScene.prototype.doFinish = function()
{
    if (this.onFinish instanceof Function)
        this.onFinish();
};

StScene.prototype.doStart = function()
{
    if (this.onStart instanceof Function)
        this.onStart();
};

StScene.prototype.doTick = function()
{
    if (this.onTick instanceof Function)
        this.onTick();
};

