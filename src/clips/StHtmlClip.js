/**
 * StHtmlClip extends StClip
 *     Create a clip with an HTML node element.
 * 
 * @authors   EZaca,
 * @license   MIT License
 * @copyright (c) 2016 EZaca
 */

function StHtmlClip(parent)
{
    // Inherited
    this.scene = parent;
    this.movie = (this.scene != undefined)?(this.scene.movie):(undefined);

    return this;
}

/// @extends StClip
StHtmlClip.prototype = new StClip();
StHtmlClip.prototype.constructor = StHtmlClip;