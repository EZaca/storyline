# Class StMovie

	class StMovie

The movie class is the top most-important class. It manages the scenes and control the time.

The movie can be a movie, a game, an animation, an interactive presentation or anything which needs scenes and actors working in synchrony.

### Configurations

	var tickInterval = 50

Configure the interval between one tick and another. The [FPS] can be given by `1000 / interval` and the right interval can be calculated dividing `1000 / fps`.

    var tickOverlap = true

Configure if the event should ignore or take care of overlap. When set to `true` no providence is taken. When set to `false`, every tick will check if the other event has finished.

It avoid nasty results in slow machines, but take time to set the control variable and test the condition.

### Read-only Variables

    var scenes[]

Array of scenes created in the movie. The name the scene is used as index and points to the `StScene` object.

    var library[]

Array of library items. Each item have a name and represent the abstraction to create a new `StClip` based in the item.

    var currentScene

The current scene being played in the movie. The variable holds the scene instance itself.

**Note:** only one scene is played at time. There is scenario to play two or more scene simultaneously in the same movie.

    var timer

Private variable for the timer (in Javascript it is the Interval handler).

### Private variables

	var _tickRunning

Private `boolean` value. Check if the tick event have finished to avoid overlap.

### Methods

    function play()

Start the ticks creating a new interval handler.

    function stop()

Stop the ticks by killing the timer.

    function tick()

Execute a new tick in the current scene and objects.

This method is used by the timer to update the scene.

    function playScene(sceneName)

Swap the current scene for the new scene given by the name.

The method finish the current scene and starts the given one, triggering the related events.

### Events

    event onPlay()

Triggered when the movie start the ticks.

    event onSceneChanged()

Triggered when the movie change the scene being played.

    event onTick()

Triggered when the movie execute an interval tick.

    event onStop()

Triggered when the movie stop the ticks.

<!-- References -->
[FPS]:<https://en.wikipedia.org/wiki/Frame_rate> "Frames Per Second"
