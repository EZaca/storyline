
# Introduction

The Storyline project is a framework where the user can build a complex flow of animation. The flow is based in the style of theaters. The storyteller have its peace of art divided into scenes and each scene have the actors, scenarios and effects.

The approach divide the many chapter of an story in small pieces and allow user to take control over the stage.

### Justification

The framework was started thinking about the lack of a clear and objective way to implement an animation. No matter what kind of animation, if it is a movie, a game, an anime, an interactive book, a piece of theater.

Normally the libraries expectes the user to insert some fragment of code in its own code merging both, or expects the user to take time and understand some complicated structure. This framework tries to provide a clear and incremental curve of learning.

### Objective

The framework has the objective to handle anything composed by a main story that can be divided into one or more scenes and have visual actors and scenarios.

The objective includes, but do not limit to, movies, animations, games, multi-page websites.

# How Storyline works

The Storyline isn't a library that brings some code inside other code. Instead, it is a framework that expects the user build something inside it taking help of thirds like ThreeJS, Canvas or a self-implementation to compose the scene.

The workflow can be described as the following:

1. The user creates a movie.
2. The user creates some sprites and scene objects (library items).
3. The user attach the library items to the movie.
4. The user creates a scene in the movie.
5. In the start event of the scene (before opening the curtains), the user create the movie clips from the library.
6. The user handle the events...

That's all.

### File structure

The framework does not care about files, but the objects and scripts being executed. So, the file organization is decided by you. You can create one big file or separate the code into folders.

But the framework is not so cruel and recommend some organization for the project.

**One file for the movie.** The movie file will include the creation of the `StMovie` and the callback to attach all library items and scenes. So, it will all occur in the movie file.

**One directory for library items.** Each item of the library go in one file and the directory is ordered into a list or files or a structure of sub-directories.

**One directory for scenes.** A list of files or structure of sub-directories containing the scene files. Each file contain one scene with all its events. This include the creation of layers and actors.

It is recommended to put the assets (images, sounds, etc.) in a separated folder.
