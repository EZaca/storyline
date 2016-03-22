/**
 * StHtmlScene extends StScene
 *     Generates a scene which clear an HTML stage to the actors play.
 * 
 * @authors   EZaca,
 * @license   MIT License
 * @copyright (c) 2016 EZaca
 */

function StHtmlScene(parent)
{
    // Inherited
    this.movie = parent;

    return this;
}

/// @extends StScene
StHtmlScene.prototype = new StScene();
StHtmlScene.prototype.constructor = StHtmlScene;