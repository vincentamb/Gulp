var gulp = require('gulp'), 
minifyCSS = require('gulp-minify-css');
 var uglify = require('gulp-uglify');
 var del = require('del');
 var rename = require('gulp-rename');
 var watch = require('gulp-watch');
 var plumber = require('gulp-plumber');



gulp.task('style', function() {
 return gulp
 .src('css/style.css')
 .pipe(plumber())
 .pipe(minifyCSS())
 .pipe(rename({suffix: '.min'})) 
 .pipe(gulp.dest('assets'));
 });

gulp.task('script', function() {
 return gulp
 .src('js/script.js')
 .pipe(plumber())
 .pipe(uglify())
 .pipe(rename({suffix: '.min'}))
 .pipe(gulp.dest('assets'));
 });

gulp.task('delete', function() {
	del(['assets/*'], function (err){
		console.log('Files deleted');
		});
});

gulp.task('watch', function(){
	gulp.watch('css/style.css', ['style']);
	gulp.watch('js/script.js', ['script']);
	});


gulp.task('default', ['delete','style', 'script', 'watch']);
