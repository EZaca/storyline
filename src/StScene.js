/**
 * StScene class abstract
 *     The class is intended to hold information about the current scene and its
 *     events. The scene is child of one StMovie and have StLayer's as children.
 *
 *     This class is the base of all scene types.
 * 
 * @authors   EZaca,
 * @license   MIT License
 * @copyright (c) 2016 EZaca
 */

function StScene(parent)
{
    // Configurables
    this.maxFrames = 1;

    // Read-only
    this.movie = parent;
    this.layers = [];
    this.baseLayer = null;
    this.currentFrame = 0;

    return this;
}