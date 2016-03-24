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

Storyline.HTML.Clip = function(parentLayer)
{
    // Inherited
    Storyline.Clip.apply(this,arguments);
    this.type = 'html';

    // These fields are references and they will be replaced
    // as soon as the factory runs...
    this.tagName = 'DIV';
    this.element = undefined;
    this.display = 'block';
    this.settings = [];

    return this;
}
Storyline.HTML.Clip.prototype = new Storyline.Clip();
Storyline.HTML.Clip.prototype.constructor = Storyline.HTML.Clip;

Storyline.HTML.Clip.prototype.doHide = function()
{
    this.element.display = 'none';
    Storyline.Clip.prototype.doHide.apply(this,arguments);
};

Storyline.HTML.Clip.prototype.doShow = function()
{
    this.element.display = this.display;
    Storyline.Clip.prototype.doShow.apply(this,arguments);
};

Storyline.HTML.Clip.prototype.doFinish = function()
{
    Storyline.Clip.prototype.doFinish.apply(this,arguments);
    this.element.remove();
};

Storyline.HTML.Clip.prototype.doStart = function()
{
    Storyline.Clip.prototype.doStart.apply(this,arguments);

    if (! this.element)
    {
        this.element = document.createElement(this.tagName);
        
        if ((this.name != '') && (this.name != undefined))
            this.element.id = this.name;

        for (var i in this.settings)
            this.element[i] = this.settings[i];
    }
    this.layer.parentNode.appendChild(this.element);
    this.updateVisibility();
};
