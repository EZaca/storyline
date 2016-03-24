if (typeof Storyline === "undefined")
    throw new Error('Storyline is required');

Storyline.clipFactory = {};
Storyline.layerType = {};

Storyline.registerClipFactory = function(name, func)
{
    if (Storyline.clipFactory[name] != undefined)
        throw new Error('ClipFactory class "'+name+'" was previously registered');
    Storyline.clipFactory[name] = func;
};

Storyline.registerLayerType = function(name, func)
{
    if (Storyline.layerType[name] != undefined)
        throw new Error('Layer type "'+name+'" was previously registered');
    Storyline.layerType[name] = func;
};