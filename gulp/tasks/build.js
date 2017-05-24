var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browsersync = require('browser-sync').create();

gulp.task('previewDist', function() {
	browsersync.init({
		
		notify: false,
		server: {
			baseDir: "docs"	
		}
	});
});


// delete dist folder on every build
gulp.task('deleteDistFolder', ['icons'], function() {
	return del('./docs');
})

// Copy general files
// First line - include everything in app
// Then exclude - either because already covered in another task (within this file) OR
// not required e.g. temp
gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
	var pathsToCopy = [
		'./app/**/*',
		'!./app/**/*.html',
		'!./app/assets/images/**',
		'!./app/assets/styles/**',
		'!./app/temp',
		'!./app/temp/**'
	]
	return gulp.src(pathsToCopy)
	.pipe(gulp.dest('./docs'));

});

// copy and compress image files from app to dist
gulp.task('optimizeImages', ['deleteDistFolder'], function() {
	return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/*-i.jpg','!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
	gulp.start('usemin');
});

// process the comments in html file and move the required css and js files to dist
gulp.task('usemin', ['styles', 'scripts'], function() {
	return gulp.src('./app/**/*.html')
		.pipe(usemin({
			css: [function() {return rev()}, function() { return cssnano()}],
			js: [function() {return rev()}, function() {return uglify()}]
		}))
		.pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);