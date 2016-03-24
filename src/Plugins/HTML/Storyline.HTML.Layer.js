/**
 * @authors EZaca,
 * @generator node genclass.js
 * @license MIT License
 * @copyright (c) 2016 Storyline
 */

if (typeof Storyline === "undefined")
    throw new Error('Storyline is required');

if (typeof Storyline.HTML === "undefined")
    throw new Error('HTML plugin is required');

Storyline.HTML.Layer = function(parent)
{
    // Inherited
    Storyline.Layer.apply(this,arguments);

    // Fields
    this.type = 'html';
    this.parentNode = undefined;

    return this;
};
Storyline.HTML.Layer.prototype = new Storyline.Layer();
Storyline.HTML.Layer.prototype.constructor = Storyline.HTML.Layer;
Storyline.registerLayerType('html',Storyline.HTML.Layer);

Storyline.HTML.Layer.prototype.doStart = function()
{
    this.parentNode = document.createElement('DIV');
    document.body.appendChild(this.parentNode);

    // Inherited
    Storyline.Layer.prototype.doStart.apply(this, arguments);
};

Storyline.HTML.Layer.prototype.doFinish = function()
{
    // Inherited
    Storyline.Layer.prototype.doFinish.apply(this, arguments);

    this.parentNode.remove();
};