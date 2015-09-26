# ES6 Gulp Test Setup

This is an example Gulp workflow for getting started playing with ES6. Created by Grant Skinner, gskinner.com.

It will transpile your ES6 using both Babel and Traceur, while preserving
your original ES6 code to test in various browsers directly.

## Setup:

- install NPM if you haven't already
- execute `npm install` from the command prompt / terminal in the `es6gulp` directory
	
## Available tasks:
To run a task simply execute `npm theTaskName` in the `es6gulp` directory.

- `transpile` runs both transpilers on js in the `es6/js` directory, and places the results in the `babel/js` and `traceur/js` directories
- `copyHTML` copies any `.html` files in the `es6` directory to the `babel` and `traceur` directories. Injects the runtime library for Traceur.
- `default` runs the `transpile` and `copyHTML` tasks
- `watch` runs `default` then watches for changes to js and html files, and runs the appropriate task
- `clean` deletes the contents of the `traceur` and `babel` directories

Licensed under the MIT open source license. Feel free to modify the tasks as needed.