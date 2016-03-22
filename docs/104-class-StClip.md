# Class StClip

    class StClip

It is the most significant item for the user. The clip represent an actor, fragment of scenario, audio or anything in the scene.

### Configurations

    var maxFrames = 1

Like the scene, the clip has no solid timeline, so it is necessary to remember how much frames the clip have itself.

Like in the Scene, when `currentFrame` exceeds the `maxFrames - 1`, the `currentFrame` is set to zero.


### Read-only Variables

    var layer

The layer, parent of the clip.

    var scene

The scene, parent of the parent layer.

    var visible

Inform if the clip is visible.

    var currentFrame

The frame being played at the moment.

The variable is updated during the tick, before the event.

### Script Methods

    function tick()

Protected function to execute a tick in the clip, updating the frame and triggering the event.

    function show()

Set the visibility to `true`, inform the change to the scene and show a clip previously hidden.

    function hide()

Set the visibility to `false`, inform the change to the scene and hide a clip previously visible.

	function relativeFrame()

Get the number of the current frame cadenced to the Scene frame.

It means the frame is synchronous to the Scene frame, but it is not the same. The `maxFrames` property define the offset.

For example, the clip have a `maxFrame` set to 3 (from 0 to 2).
When scene frame is `0`, clip frame is also `0`.
When scene frame is `1`, clip frame `1`.
When scene frame is `2`, clip frame `2`.
When scene frame is `3`, clip frame `0`.
When scene frame is `4`, clip frame `1`.
An so on...

**Caution**: you must observe the cadence by yourself. What happen if the clip have a `maxFrame` set to 3 and the Scene have the `maxFrame` set to 5 like the above example? (Hint: when the scene restart the loop, the clip will jump from the frame 1 to frame 0).

### Events

	event onCreate()

Triggered when the clip is created in the factory.

At this moment, the clip can initialize and change its properties.

	event onTick()

Triggered when the movie execute a tick.
