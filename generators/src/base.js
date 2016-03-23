// @doc ../docs/classes/
// @src ../src/
// @authors EZaca,

class StMovie
    var autoPlay = false
    var tickInterval = 50 setter
    var tickCheckOverlay = false

    var timer = undefined
    var playing = false
    var library = []
    var scenes = []
    var currentScene = undefined
    var _tickRunning = false

    function addToLibrary(clipFlavorName, initCallback=undefined)
    function newScene(initCallback)
    function setFPS(fps)
    function run()

    function play()
    function stop()
    function tick()
    function gotoScene(sceneName, frameNum=0)
    function gotoAndPlay(sceneName, frameNum=0)
    function gotoAndStop(sceneName, frameNum=0)

    event onDraw()
    event onPlay()
    event onSceneChanged()
    event onStop()
    event onTick()





class StScene
    var maxFrames = 1
    var loops = 1

    var movie = undefined
    var currentFrame = 0
    var currentLoop = 0
    var layers = []

    function newLayer(layerFlavorName, initCallback=undefined)

    function gotoFrame(frameNum)
    function gotoAndPlay(frameNum)
    function gotoAndStop(frameNum)

    event onDraw()
    event onFinish()
    event onStart()
    event onTick()





class StLayer
    var clips = []
    var scene = undefined

    function newClip(libraryItem, initCallback=undefined)

    event onDraw()
    event onFinish()
    event onStart()
    event onTick()





class StMovieClip
    var maxFrames = 1
    var visible = true

    var movie = undefined
    var scene = undefined
    var layer = undefined
    var currentFrame = 0

    function relFrame()
    function show()
    function hide()

    event onDraw()
    event onHide()
    event onShow()
    event onFinish()
    event onStart()
    event onTick()





// @src ../src/factory

class StClipFlavor
    var movie = undefined
    function create(layer, initCallback)


class StLayerFlavor
    function create(initCallback)