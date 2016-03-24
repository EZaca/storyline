/**
 * class StTheater
 * class Storyline.Theater
 * 
 * @authors EZaca
 * @generator node genclass.js
 * @license MIT License
 * @copyright (c) 2016 Storyline
 */

if (typeof Storyline === "undefined")
    throw new Error('Storyline is required');

Storyline.Theater = function(initCallback)
{
    // Initialize fields
    this.autoPlay = false;
    this.tickInterval = 50;
    this.tickCheckOverlay = false;
    this.timer = undefined;
    this.playing = false;
    this.library = {};
    this.scenes = [];
    this.currentScene = undefined;
    this._tickRunning = false;
    this.onDraw = undefined;
    this.onPlay = undefined;
    this.onSceneChanged = undefined;
    this.onStop = undefined;
    this.onTick = undefined;
    
    if (initCallback instanceof Function)
    {
        initCallback.apply(this,[]);
    }

    return this;
}

if (typeof StTheater === "undefined")
    StTheater = Storyline.Theater;

Storyline.Theater.prototype.setTickInterval = function(value)
{
    item.tickInterval = value;
};

Storyline.Theater.prototype.addToLibrary = function(name, clipFactoryName, initCallback)
{
    if (Storyline.clipFactory[clipFactoryName] == undefined)
        throw new StorylineError('Clip class "'+clipFactoryName+'" not found');

    var constructor = Storyline.clipFactory[clipFactoryName];
    var factory = new constructor(this);
    factory.name = name;

    if (initCallback instanceof Function);
        initCallback.apply(factory,[]);

    if (this.library[factory.name] != undefined)
        throw new StorylineError('Library item "'+factory.name+'" already exists');

    this.library[factory.name] = factory;

    return factory;
};

Storyline.Theater.prototype.newScene = function(initCallback)
{
    var scene = new StScene(this);
    this.scenes.push(scene);
    scene.id = this.scenes.length-1;

    if (initCallback instanceof Function)
    {
        scene.name = initCallback.name;
        initCallback.apply(scene,[]);
    }

    if (scene.name != '')
    {
        if (this.scenes[scene.name] != undefined)
            throw new StorylineError('The scene "'+scene.name+'" is reserved or already exists');
        this.scenes[scene.name] = scene;
    }

    return scene;
};

Storyline.Theater.prototype.setFPS = function(fps)
{
    this.tickInterval = Math.round(1000 / fps);
};

Storyline.Theater.prototype.run = function()
{
    if (this.scenes.length <= 0)
        throw new StorylineError('The Theater must have at least one scene before play');

    if (this.autoPlay)
        this.gotoAndPlay(0);
    else
        this.gotoScene(0);
};

Storyline.Theater.prototype._startTimer = function()
{
    this.playing = true;
    this.timer = setInterval(this._timerCallback, this.tickInterval, this);
}

Storyline.Theater.prototype._stopTimer = function()
{
    this.playing = false;
    if (this.timer != undefined)
    {
        clearInterval(this.timer);
        this.timer = undefined;
    }
}

Storyline.Theater.prototype._timerCallback = function(theater)
{
    if (theater.tickCheckOverlay)
    {
        if (theater._tickRunning)
            return;
        theater._tickRunning = true;
    }

    theater.tick();

    if (theater.tickCheckOverlay)
        theater._tickRunning = false;
}

Storyline.Theater.prototype.play = function()
{
    var wasPlaying = this.playing;
    this._startTimer();

    if (! wasPlaying)
        this.doPlay();
};

Storyline.Theater.prototype.stop = function()
{
    var wasPlaying = this.playing;
    this._stopTimer();

    if (wasPlaying)
        this.doStop();
};

Storyline.Theater.prototype.tick = function()
{
    this.doTick();
    this.doDraw();
};

Storyline.Theater.prototype.gotoScene = function(sceneName, frameNum)
{
    var wasPlaying = this.playing;
    this._stopTimer();
    if (this.currentScene != undefined)
        this.currentScene.doFinish();

    if (this.scenes[sceneName] == undefined)
        throw new StorylineError('Scene "'+sceneName+'" not found');
    this.currentScene = this.scenes[sceneName];
    this.currentScene.doStart();

    if (frameNum != undefined)
        this.currentScene.setFrame(frameNum);

    if (wasPlaying)
        this._startTimer();
};

Storyline.Theater.prototype.nextScene = function()
{
    if (this.currentScene == undefined)
        this.gotoScene(0);
    else
    {
        var id = this.currentScene.id + 1;
        if (this.scenes[id] != undefined)
            this.gotoScene(id);
        else
            this.gotoScene(0);
    }
}

Storyline.Theater.prototype.prevScene = function()
{
    if (this.currentScene == undefined)
        this.gotoScene(0);
    else
    {
        var id = this.currentScene.id - 1;
        if (this.scenes[id] != undefined)
            this.gotoScene(id);
        else
            this.gotoScene(this.scenes.length-1);
    }
}

Storyline.Theater.prototype.gotoAndPlay = function(sceneName, frameNum)
{
    this._stopTimer();
    this.gotoScene(scene,frameNum);
    this.play();
};

Storyline.Theater.prototype.gotoAndStop = function(sceneName, frameNum)
{
    this._stopTimer();
    this.gotoScene(scene,frameNum);
    this.stop();
};

Storyline.Theater.prototype.doDraw = function()
{
    if (this.onDraw instanceof Function)
        this.onDraw();
};

Storyline.Theater.prototype.doPlay = function()
{
    if (this.onPlay instanceof Function)
        this.onPlay();
};

Storyline.Theater.prototype.doSceneChanged = function()
{
    if (this.onSceneChanged instanceof Function)
        this.onSceneChanged();
};

Storyline.Theater.prototype.doStop = function()
{
    if (this.onStop instanceof Function)
        this.onStop();
};

Storyline.Theater.prototype.doTick = function()
{
    if (this.onTick instanceof Function)
        this.onTick();
};