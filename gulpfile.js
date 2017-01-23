const gulp = require('gulp');
const gutil = require('gulp-util');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

function swallowError (error) {
	console.log(error.toString());
	this.emit('end');
}


function buildJs() {
	return browserify({
		entries: './src/index.js',
		debug: true
	})
	.transform(babelify, { 
		presets: ["es2015", "react"],
		plugins: ["react-css-modules"]
	})
	.bundle()
	.on('error', swallowError)
	.pipe(source('index.js'))
	.pipe(gulp.dest('./build'));
}

gulp.task('default', () => {
	return buildJs();
});