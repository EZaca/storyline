/**
 * StMovie class
 *     The class is intended to hold information about all the document being
 *     created. The movie has a library of movie clips which can be created
 *     during the scene initialization or on-the-fly.
 *     The movie also have a list of scenes and properties related to cadence.
 * 
 * @authors   EZaca,
 * @license   MIT License
 * @copyright (c) 2016 EZaca
 */

function StMovie()
{
    // Configurables
    this.tickInterval = 50;
    this.tickOverlap = true;

    // Read-only
    this.library = [];
    this.scenes = [];
    this.currentScene = null;
    this.timer = null;

    return this;
}
