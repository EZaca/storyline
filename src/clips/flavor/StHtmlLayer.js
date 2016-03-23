/**
 * class StHtmlLayer extends StLayer * class StHtmlLayer
 * 
 * @authors EZaca,
 * @generator node genclass.js
 * @license MIT License
 * @copyright (c) 2016 Storyline
 */

function StHtmlLayer()
{
    // Inherit base fields

    StLayer.apply(this,arguments);

    // Initialize fields
    this.parentElement = undefined;
    this.nodeElement = undefined;
    
    return this;
}

/// @extends StLayer
StHtmlLayer.prototype = new StLayer();
StHtmlLayer.prototype.constructor = StHtmlLayer;

StHtmlLayer.prototype.doStart = function()
{
    // TODO: Insert code here
};

StHtmlLayer.prototype.doFinish = function()
{
    // TODO: Insert code here
};

