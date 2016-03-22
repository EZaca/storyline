/**
 * StHtmlFlavor extends StLibraryItem
 *     Generates a StHtmlClip movie clip.
 * 
 * @authors   EZaca,
 * @license   MIT License
 * @copyright (c) 2016 EZaca
 */

function StHtmlFlavor(parent)
{
    // Inherited
    this.movie = parent;

    return this;
}

/// @extends StLibraryItem
StHtmlFlavor.prototype = new StLibraryItem();
StHtmlFlavor.prototype.constructor = StHtmlFlavor;