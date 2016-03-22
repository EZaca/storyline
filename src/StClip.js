/**
 * StClip class abstract
 *     A clip is a fragment that compose a scene. They are grouped in layers.
 *     The movie clip belongs to one layer. The instances use events to interact
 *     with other instances and methods to manage themselves.
 *
 *     This class is the base of all clip types.
 * 
 * @authors   EZaca,
 * @license   MIT License
 * @copyright (c) 2016 EZaca
 */

function StClip(parent)
{
    // Configurables
    this.maxFrames = 1;

    // Read-only
    this.scene = parent;
    this.movie = (this.scene != undefined)?(this.scene.movie):(undefined);
    this.visible = true;
    this.currentFrame = 0;

    return this;
}