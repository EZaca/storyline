# Class StScene

	class StScene

The Scene is only below of the Movie in the hierarchy. It holds an entire scene, like a theater act.

The Scene has a main timeline. When it start, is the function of the scene to call the actors and object by creating them. Also, the Scene can take final actions by setting variables, removing objects or anything needed.

### Configurations

    var maxFrames

As the scene has no material timeline, it is necessary to remember how much frames the scene have.

When `currentFrame` exceeds the `maxFrames - 1`, the `currentFrame` is set to zero, generating a loop for those clips which are based in the scene timeline.

### Read-only Variables

    var movie

The movie parent of the scene.

    var layers[]

An array of layers. The array hold the `StLayer`'s objects.

    var baseLayer

Every scene should have a layer. The base layer is the first one, created automatically. Simple scenes doesn't need to care about layers, only the complex ones.

    var currentFrame

The frame being played in the moment. The variable is updated in the movie tick.

### Preparation Methods

    function newClip(libraryItemName[, name][, args])

Create a new `StClip` instance from its factory in the base layer.

If you want to create a clip in some specific layer, refer to the layer and its `newClip` method.

    function newLayer(name)

Creates a new layer.

Used when creating the movie structure.

### Script Methods

    function getClip(clipName)

Get a created clip by name. Search the item in every layer until find the first correspondence.

### Events

    event onStart()

Triggered when the scene is started.

At this moment, the user should create every clip present in the scene (actors, scenario, audio). It **does not** include clips generated on-the-fly, like an uncertain number of enemies in a game.

    event onClipChanged(StClip)

Triggered when some clip change the position or visibility.

The first argument is the clip instance.

    event onTick()

Triggered when the movie executes a tick.

    event onFinish()

Triggered when the scene is finished.

At this point, the scene can set some variable to next scene or delete itself waiting the garbage collector to free the memory, if the developer wants that.
