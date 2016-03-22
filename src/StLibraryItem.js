/**
 * StLibraryItem class abstract
 *     Library items are the flavor to build a new movie clip. It is capable of
 *     build and config a StClip descendant into the scene.
 *
 *     This class is the base of all flavor types.
 * 
 * @authors   EZaca,
 * @license   MIT License
 * @copyright (c) 2016 EZaca
 */

function StLibraryItem(parent)
{
    // Read-only
    this.movie = parent;

    return this;
}