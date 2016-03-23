# Features for a near future

### Custom events

An `onCustomEvent` event for every component and a `broadcast` method for parents to broadcast custom events.

For example, a clip broadcast in the scene that all the clips should shake and the "shake" audio should play in given moment.

### Frame flow control

Methods like `next`, `prev`, `goto` and `gotoAndPlay` (yes, like Flash) to control the flow of frames.

For example, a clip is a button that move to the next page of a book (in the next frame).

### Freeze scenes, freeze clips

Allow to `freeze` and `unfreeze` the timeline of a scene or movie clip.

An idea is to allow a layer to freeze a fake timeline. For that, the method `relativeFrame()` must check if the layer is frozen (and what is the frame) before get the current frame from the scene.

### Frame label

An array linking names and frames in the Scene to allow reference by name.

For example, the tick is stopped, the Scene is "menu". The first frame is the "splash", the second is the "mainmenu" and the third is "settings".

### Export and import movie clips

Allow the scene to export its clips to be reused in other scenes.

The reuse is done when the scene, on start, request the clip from another scene using the scene and clip names.

Another approach is to export by registering that clip in the entire movie, so anyone can get it and changing the scene name doesn't brake anything.

For example, the actor in the "Choose player" screen is the same when the game starts. So, why recreate it risking forget something?

### Scene loops and auto-terminated

*This item is being developed.*

Allow the scene to configure a variable of loops. If the variable is 1 the scene is executed once. If it is 0 executes forever. If it is 2 or more it executes that amount of times.

The default is 1, which means *no loop*.

The begin of the scene is the moment `currentFrame` reach 0. The end of that scene is the moment `currentFrame` reach `maxFrames` (one frame after the last frame), before reset the counter.

For example, the first scene is the intro. It will execute 1 time. After that, the flow go to "menu" scene, which stop the timer. When the game is started it jumps into the "game" scene which repeat forever until the player lose or win the game.
