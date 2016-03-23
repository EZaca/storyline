/**
 * class StLayer
 * 
 * @authors EZaca,
 * @generator node genclass.js
 * @license MIT License
 * @copyright (c) 2016 Storyline
 */

function StLayer()
{
    // Initialize fields
    this.clips = [];
    this.scene = undefined;
    this.onDraw = undefined;
    this.onFinish = undefined;
    this.onStart = undefined;
    this.onTick = undefined;
    
    return this;
}

StLayer.prototype.newClip = function(libraryItem, initCallback)
{
    // TODO: Insert code here
};

StLayer.prototype.doDraw = function()
{
    if (this.onDraw instanceof Function)
        this.onDraw();
};

StLayer.prototype.doFinish = function()
{
    if (this.onFinish instanceof Function)
        this.onFinish();
};

StLayer.prototype.doStart = function()
{
    if (this.onStart instanceof Function)
        this.onStart();
};

StLayer.prototype.doTick = function()
{
    if (this.onTick instanceof Function)
        this.onTick();
};

