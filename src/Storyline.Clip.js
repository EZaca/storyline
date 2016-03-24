/**
 * class Storyline.Clip
 * class StClip
 * 
 * @authors EZaca,
 * @generator node genclass.js
 * @license MIT License
 * @copyright (c) 2016 Storyline
 */

if (typeof Storyline === "undefined")
    throw new Error('Storyline is required');

Storyline.Clip = function(parentLayer)
{
    // Initialize fields
    this.type = '_base';
    this.maxFrames = 1;
    this.visible = true;
    this.currentFrame = 0;
    this.layer = parentLayer;
    if (parentLayer != undefined)
        this.scene = parentLayer.scene;
    if (parentLayer != undefined)
        this.theater = parentLayer.theater;
    this.onDraw = undefined;
    this.onHide = undefined;
    this.onShow = undefined;
    this.onFinish = undefined;
    this.onStart = undefined;
    this.onTick = undefined;
    
    return this;
}

if (typeof StClip === "undefined")
    StClip = Storyline.Clip;

Storyline.Clip.prototype.relFrame = function()
{
    // TODO: Insert code here
};

Storyline.Clip.prototype.show = function()
{
    if (this.scene === this.theater.currentScene)
        this.doShow();
    this.visible = true;
};

Storyline.Clip.prototype.hide = function()
{
    if (this.scene === this.theater.currentScene)
        this.doHide();
    this.visible = false;
};

Storyline.Clip.prototype.updateVisibility = function()
{
    if (this.visible)
        this.doShow();
    else
        this.doHide();
};

Storyline.Clip.prototype.doDraw = function()
{
    if (this.onDraw instanceof Function)
        this.onDraw();
};

Storyline.Clip.prototype.doHide = function()
{
    this.visible = false;
    if (this.onHide instanceof Function)
        this.onHide();
};

Storyline.Clip.prototype.doShow = function()
{
    this.visible = true;
    if (this.onShow instanceof Function)
        this.onShow();
};

Storyline.Clip.prototype.doFinish = function()
{
    if (this.onFinish instanceof Function)
        this.onFinish();
};

Storyline.Clip.prototype.doStart = function()
{
    if (this.visible)
        this.doStartVisible();
    else
        this.doStartHidden();

    if (this.onStart instanceof Function)
        this.onStart();
};

Storyline.Clip.prototype.doStartVisible = function()
{
    // Empty and inheritable
};

Storyline.Clip.prototype.doStartHidden = function()
{
    // Empty and inheritable
};

Storyline.Clip.prototype.doTick = function()
{
    if (this.onTick instanceof Function)
        this.onTick();
};
