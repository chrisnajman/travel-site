var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del'),
svg2png = require('gulp-svg2png');

// Create the Sprite CSS file and name the sprite
var config = {
	mode: {
		css: {
			variables: {
				replaceSvgWithPng: function() {
					return function(sprite,render) {
						return render(sprite).split('.svg').join('.png');
					}
				}
			},
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}

// Delete any existing sprite/sprites folders to avoid
// generate duplicate (and redundant) sprite svg files if we e.g. 
// delete or add a new svg icon in app/assets/images/icons
gulp.task('beginClean', function() {
	return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

// Generate the sprite
gulp.task('createSprite', ['beginClean'], function() {
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/temp/sprite/'));
});

// Create a png copy of the svg sprite for older browsers
gulp.task('createPngCopy', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/*.svg')
		.pipe(svg2png())
		.pipe(gulp.dest('./app/temp/sprite/css'));
});

// Copy the sprite and move it to app/assets/images/sprites/
gulp.task('copySpriteGraphic', ['createPngCopy'], function() {
	return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
		.pipe(gulp.dest('./app/assets/images/sprites'));
});

// Move and rename the Sprite CSS file to app/assets/styles/modules 
// so it can be @imported via
// app/assets/styles/styles.css
gulp.task('copySpriteCSS', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./app/assets/styles/modules'));
});

// Once all tasks are completed delete temp/app/sprite folder
gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
	return del ('./app/temp/sprite');
});

// Combine all tasks into a single task: gulp icons
gulp.task('icons', [
	'beginClean', 
	'createSprite',
	'createPngCopy',
	'copySpriteGraphic', 
	'copySpriteCSS', 
	'endClean'
]);
