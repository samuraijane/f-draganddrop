//var gulp = require('gulp'),
//    sass = require('gulp-sass'),
//    livereload = require('gulp-livereload');


//gulp.task('heartbeat', function() {
//  console.log('Gulp is working');
//});
//
//gulp.task('sass', function(){
//  return gulp.src('app/_/css/zasu.scss')
//    .pipe(sass())
//    .pipe(gulp.dest('app/_/css'))
//    .pipe(livereload());
//});
//
//gulp.task('watch', function(){
//  livereload.listen();
//  gulp.watch('app/_/css/zasu.scss', ['sass']); 
////  gulp.watch('app/index.html');
//});


var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');

gulp.task('sass', function() {
  gulp.src('app/_/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/_/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('app/_/css/*.scss', ['sass']);
});