/**
 * class Storyline.ClipFactory
 * class StClipFactory
 * 
 * @authors EZaca,
 * @generator node genclass.js
 * @license MIT License
 * @copyright (c) 2016 Storyline
 */

if (typeof Storyline === "undefined")
    throw new Error('Storyline is required');

Storyline.ClipFactory = function(parent)
{
    // Initialize fields
    this.theater = parent;
    this.type = '_base';
    this.name = undefined;
    
    return this;
}

Storyline.registerClipFactory('_base',Storyline.ClipFactory);
if (typeof StClipFactory === "undefined")
    StClipFactory = Storyline.ClipFactory;

Storyline.ClipFactory.prototype.create = function(parentLayer, initCallback)
{
    var instance = this.doCreate(parentLayer, initCallback);
    if (instance == undefined)
        throw new StorylineError('No Clip was returned from the ClipFactory "'+this.name+'" ('+this.type+')');
    return instance;
};

Storyline.ClipFactory.prototype.doCreate = function(parentLayer, initCallback)
{
    // Empty, you should not inherit
    return {};
};