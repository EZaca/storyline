if (typeof StorylineError !== "undefined")
    console.warn('Caution: a previously registered StorylineError will be replaced');

StorylineError = function(message)
{
    this.name = 'StorylineError';
    this.message = message;
}
StorylineError.prototype = new Error();
StorylineError.prototype.constructor = StorylineError;
