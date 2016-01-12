var gulp = require('gulp');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
 
gulp.task('default', function () {
	return gulp.src('views/images/*.jpg')
		.pipe(imageminJpegRecompress({loops: 3})())
		.pipe(gulp.dest('views/build/images'));
});