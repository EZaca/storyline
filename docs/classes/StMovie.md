# StMovie

## Field autoPlay

    Field: autoPlay
    Default: false
    Getter: autoPlay
    Visibility: public

Description...

## Field tickInterval

    Field: tickInterval
    Default: 50
    Getter: tickInterval
    Setter: setTickInterval(value)
    Visibility: public

Description...

## Field tickCheckOverlay

    Field: tickCheckOverlay
    Default: false
    Getter: tickCheckOverlay
    Visibility: public

Description...

## Field timer

    Field: timer
    Default: undefined
    Getter: timer
    Visibility: public

Description...

## Field playing

    Field: playing
    Default: false
    Getter: playing
    Visibility: public

Description...

## Field library

    Field: library
    Default: []
    Getter: library
    Visibility: public

Description...

## Field scenes

    Field: scenes
    Default: []
    Getter: scenes
    Visibility: public

Description...

## Field currentScene

    Field: currentScene
    Default: undefined
    Getter: currentScene
    Visibility: public

Description...

## Field _tickRunning

    Field: _tickRunning
    Default: false
    Getter: _tickRunning
    Visibility: protected

Description...

## Method addToLibrary

    public

Description...

### Parameters

    clipFlavorName
    initCallback (default undefined)

### Return value

This method does not return.

## Method newScene

    public

Description...

### Parameters

    initCallback

### Return value

This method does not return.

## Method setFPS

    public

Description...

### Parameters

    fps

### Return value

This method does not return.

## Method run

    public

Description...

### Parameters

This method has no parameter.

### Return value

This method does not return.

## Method play

    public

Description...

### Parameters

This method has no parameter.

### Return value

This method does not return.

## Method stop

    public

Description...

### Parameters

This method has no parameter.

### Return value

This method does not return.

## Method tick

    public

Description...

### Parameters

This method has no parameter.

### Return value

This method does not return.

## Method gotoScene

    public

Description...

### Parameters

    sceneName
    frameNum (default 0)

### Return value

This method does not return.

## Method gotoAndPlay

    public

Description...

### Parameters

    sceneName
    frameNum (default 0)

### Return value

This method does not return.

## Method gotoAndStop

    public

Description...

### Parameters

    sceneName
    frameNum (default 0)

### Return value

This method does not return.

## Event onDraw

Description...

### Caller

    doDraw()

### Callback parameters

This event receives no parameter.

### Return value

The event does not expect a return.

## Event onPlay

Description...

### Caller

    doPlay()

### Callback parameters

This event receives no parameter.

### Return value

The event does not expect a return.

## Event onSceneChanged

Description...

### Caller

    doSceneChanged()

### Callback parameters

This event receives no parameter.

### Return value

The event does not expect a return.

## Event onStop

Description...

### Caller

    doStop()

### Callback parameters

This event receives no parameter.

### Return value

The event does not expect a return.

## Event onTick

Description...

### Caller

    doTick()

### Callback parameters

This event receives no parameter.

### Return value

The event does not expect a return.

