/**
 * class StMovie
 * 
 * @authors EZaca,
 * @generator node genclass.js
 * @license MIT License
 * @copyright (c) 2016 Storyline
 */

function StMovie()
{
    // Initialize fields
    this.autoPlay = false;
    this.tickInterval = 50;
    this.tickCheckOverlay = false;
    this.timer = undefined;
    this.playing = false;
    this.library = [];
    this.scenes = [];
    this.currentScene = undefined;
    this._tickRunning = false;
    this.onDraw = undefined;
    this.onPlay = undefined;
    this.onSceneChanged = undefined;
    this.onStop = undefined;
    this.onTick = undefined;
    
    return this;
}

StMovie.prototype.setTickInterval = function(value)
{
    item.tickInterval = value;
};

StMovie.prototype.addToLibrary = function(clipFlavorName, initCallback)
{
    // TODO: Insert code here
};

StMovie.prototype.newScene = function(initCallback)
{
    // TODO: Insert code here
};

StMovie.prototype.setFPS = function(fps)
{
    // TODO: Insert code here
};

StMovie.prototype.run = function()
{
    // TODO: Insert code here
};

StMovie.prototype.play = function()
{
    // TODO: Insert code here
};

StMovie.prototype.stop = function()
{
    // TODO: Insert code here
};

StMovie.prototype.tick = function()
{
    // TODO: Insert code here
};

StMovie.prototype.gotoScene = function(sceneName, frameNum)
{
    // TODO: Insert code here
};

StMovie.prototype.gotoAndPlay = function(sceneName, frameNum)
{
    // TODO: Insert code here
};

StMovie.prototype.gotoAndStop = function(sceneName, frameNum)
{
    // TODO: Insert code here
};

StMovie.prototype.doDraw = function()
{
    if (this.onDraw instanceof Function)
        this.onDraw();
};

StMovie.prototype.doPlay = function()
{
    if (this.onPlay instanceof Function)
        this.onPlay();
};

StMovie.prototype.doSceneChanged = function()
{
    if (this.onSceneChanged instanceof Function)
        this.onSceneChanged();
};

StMovie.prototype.doStop = function()
{
    if (this.onStop instanceof Function)
        this.onStop();
};

StMovie.prototype.doTick = function()
{
    if (this.onTick instanceof Function)
        this.onTick();
};

