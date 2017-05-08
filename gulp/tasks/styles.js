var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
pxtorem = require('postcss-pxtorem'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([
    	cssImport, 
    	mixins, 
    	pxtorem({
            replace: true,
            /*
            If you change replace to 'false' it will generate
            a pixel fallback for older browsers
        	*/
            propList: ['*']
            /*
				Using the '*' means that every pixel value (except for min and
				max width in a media query) will be converted to rems
            */
        }), 
        cssvars, 
        nested, 
        hexrgba,
        autoprefixer])
    )
    
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});