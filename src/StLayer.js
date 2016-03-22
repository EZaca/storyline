/**
 * StLayer class
 *     The layer belongs to one scene and hold movie clips as children.
 *     Its main purpose is to group movie clips objects.
 * 
 * @authors   EZaca,
 * @license   MIT License
 * @copyright (c) 2016 EZaca
 */

function StLayer(parent)
{
    // Read-only
    this.scene = parent;
    this.visible = true;
    this.enabled = true;

    return this;
}