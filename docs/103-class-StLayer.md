# Class StLayer

    class StLayer

The layer belongs to the scene. All layers are executed together.

In simpler scenes the user does not need to both about layers, but just use the `baseLayer`. In complex scenes it can be used to group movie clips.

### Read-only Variables

    var scene

The scene, parent of the layer.

    var visible

Inform whether the layer is visible or not. When it is `false`, the layer is not rendered.

    var enabled

Inform whether the layer is enabled or not. When it is `false` the layer is completely ignored and no render, event or tick is performed.

### Preparation Methods

    function newClip(libraryItemName[, name][, args])

Create a new clip in the layer from the movie factory.

### Script Methods

    function getClip(clipName)

Find a clip in the layer by its name.

    function show()

Set the visibility to `true`, inform the change to the scene and show the previously hidden layer.

    function hide()

Set the visibility to `false`, inform the change to the scene and hide an entire layer previously visible.

	function enable()

Re-enable a layer and inform the change.

	function disable()

Disable a layer and inform the change. Disabled layers are completely ignored. See the `enabled` property to understand all the implications.
