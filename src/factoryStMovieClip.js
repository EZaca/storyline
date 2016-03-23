/**
 * class StMovieClip
 * 
 * @authors EZaca,
 * @generator node genclass.js
 * @license MIT License
 * @copyright (c) 2016 Storyline
 */

function StMovieClip()
{
    // Initialize fields
    this.maxFrames = 1;
    this.visible = true;
    this.movie = undefined;
    this.scene = undefined;
    this.layer = undefined;
    this.currentFrame = 0;
    this.onDraw = undefined;
    this.onHide = undefined;
    this.onShow = undefined;
    this.onFinish = undefined;
    this.onStart = undefined;
    this.onTick = undefined;
    
    return this;
}

StMovieClip.prototype.relFrame = function()
{
    // TODO: Insert code here
};

StMovieClip.prototype.show = function()
{
    // TODO: Insert code here
};

StMovieClip.prototype.hide = function()
{
    // TODO: Insert code here
};

StMovieClip.prototype.doDraw = function()
{
    if (this.onDraw instanceof Function)
        this.onDraw();
};

StMovieClip.prototype.doHide = function()
{
    if (this.onHide instanceof Function)
        this.onHide();
};

StMovieClip.prototype.doShow = function()
{
    if (this.onShow instanceof Function)
        this.onShow();
};

StMovieClip.prototype.doFinish = function()
{
    if (this.onFinish instanceof Function)
        this.onFinish();
};

StMovieClip.prototype.doStart = function()
{
    if (this.onStart instanceof Function)
        this.onStart();
};

StMovieClip.prototype.doTick = function()
{
    if (this.onTick instanceof Function)
        this.onTick();
};

