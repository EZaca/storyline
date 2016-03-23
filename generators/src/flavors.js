// @doc ../docs/classes/
// @authors EZaca,



// @src ../src/layers/flavor/

class StHtmlLayerFlavor extends StLayerFlavor
    function create(initCallback)



// @src ../src/layers/

class StHtmlLayer extends StLayer
    var parentElement = undefined
    var nodeElement = undefined
    function doStart()
    function doFinish()





// @src ../src/clips/flavor/

class StHtmlTagClipFlavor extends StClipFlavor
    function create(layer, initCallback)



// @src ../src/clips/

class StHtmlTagClip extends StMovieClip
    var nodeElement = undefined
    function doStart()
    function doFinish()
    function doShow()
    function doHide()