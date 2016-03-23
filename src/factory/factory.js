clipFlavorStock = [];
layerFlavorStock = [];

function registerClipFlavor(name,constructor)
{
    clipFlavorStock[name] = constructor;
}

function registerLayerFlavor(name,constructor)
{
    layerFlavorStock[name] = constructor;
}