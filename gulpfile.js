var gulp = require("gulp");
var babel = require("gulp-babel");
var traceur = require("gulp-traceur");
var sourcemaps = require("gulp-sourcemaps");
var replace = require("gulp-replace");
var changed = require("gulp-changed");
var del = require("del");

var HTML_GLOB = "es6/*.html", JS_GLOB="es6/js/*.js";
var TRACEUR_RUNTIME = '$1\t<script src="js/traceur-runtime.js"></script>$&';

gulp.task("default", ["copyHTML", "transpile"]);

gulp.task("watch", ["default"], function() {
	gulp.watch(HTML_GLOB, ["copyHTML"]);
	gulp.watch(JS_GLOB, ["transpile"]);
});

gulp.task("copyHTML", function() {
	gulp.src(HTML_GLOB)
		.pipe(changed("babel"))
		.pipe(gulp.dest("babel"))
		.pipe(replace(/(\s*)<\/head>/i,TRACEUR_RUNTIME))
		.pipe(gulp.dest("traceur"));
});

gulp.task("transpile", function() {
	gulp.src(JS_GLOB)
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("babel/js"));
		
	gulp.src(JS_GLOB)
		.pipe(sourcemaps.init())
		.pipe(traceur())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("traceur/js"));
	
	gulp.src(traceur.RUNTIME_PATH).pipe(gulp.dest("traceur/js"));
});

gulp.task("clean", function() {
	return del(["traceur/*", "babel/*"]);
});