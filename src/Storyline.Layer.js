/**
 * class Storyline.Layer
 * class StLayer
 * 
 * @authors EZaca,
 * @generator node genclass.js
 * @license MIT License
 * @copyright (c) 2016 Storyline
 */

if (typeof Storyline === "undefined")
    throw new Error('Storyline is required');

Storyline.Layer = function(parent)
{
    // Initialize fields
    this.type = '_base';
    this.clips = [];
    this.scene = parent;
    if (parent != undefined)
        this.theater = parent.theater;
    this.onDraw = undefined;
    this.onFinish = undefined;
    this.onStart = undefined;
    this.onTick = undefined;
    
    return this;
}

Storyline.registerLayerType('_base',Storyline.Layer);
if (typeof StLayer === "undefined")
    StLayer = Storyline.Layer;

Storyline.Layer.prototype.newClip = function(libraryItem, initCallback)
{
    if (this.theater.library[libraryItem] == undefined)
        throw new StorylineError('Library item "'+libraryItem+'" not found');

    var factory = this.theater.library[libraryItem];

    if (initCallback instanceof Function)
    {
        var clip = factory.create(this, initCallback);
    } else
    if (initCallback != undefined)
    {
        var clip = factory.create(this, function(){});
        this.name = String(initCallback);
    } else
        var clip = factory.create(this, function(){});

    this.clips.push(clip);
    if (clip.name != '')
    {
        if (this.clips[clip.name] != undefined)
            throw new StorylineError('Clip "'+libraryItem+'" already exists');
        this.clips[clip.name] = clip;
    }

    if (this.theater.currentScene === this.scene)
        clip.doStart();

    return clip;
};

Storyline.Layer.prototype.doDraw = function()
{
    if (this.onDraw instanceof Function)
        this.onDraw();

    for (var i=0; i<this.clips.length; i++)
        this.clips[i].doDraw();
};

Storyline.Layer.prototype.doFinish = function()
{
    if (this.onFinish instanceof Function)
        this.onFinish();

    for (var i=0; i<this.clips.length; i++)
        this.clips[i].doFinish();
};

Storyline.Layer.prototype.doStart = function()
{
    if (this.onStart instanceof Function)
        this.onStart();

    for (var i=0; i<this.clips.length; i++)
        this.clips[i].doStart();
};

Storyline.Layer.prototype.doTick = function()
{
    if (this.onTick instanceof Function)
        this.onTick();

    for (var i=0; i<this.clips.length; i++)
        this.clips[i].doTick();
};

