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

Storyline.HTML.ClipFactory = function(parent)
{
    // Inherited
    Storyline.ClipFactory.apply(this,arguments);
    this.type = 'html';

    // Fields
    this.tagName = 'DIV';
    this.display = 'block';
    this.settings = {};
    
    return this;
}
Storyline.HTML.ClipFactory.prototype = new Storyline.ClipFactory();
Storyline.HTML.ClipFactory.prototype.constructor = Storyline.HTML.ClipFactory;
Storyline.registerClipFactory('html',Storyline.HTML.ClipFactory);

Storyline.HTML.ClipFactory.prototype.doCreate = function(parentLayer, initCallback)
{
    if (parentLayer.type != 'html')
        throw new Error('The layer type of the HTML clip is invalid (clip=html; layer='+parentLayer.type+')');

    var instance = new Storyline.HTML.Clip(parentLayer);
    instance.tagName = this.tagName;
    instance.display = this.display;

    for(var i in this.settings)
        instance.settings[i] = this.settings[i];

    initCallback.apply(instance,[]);

    return instance;
};