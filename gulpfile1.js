var gulp = require('gulp');
var runSequence = require('run-sequence');
var gulp_sass = require('gulp-sass')
var ejs = require("gulp-ejs");
var rename = require("gulp-rename");


gulp.task('sass', function(){
  gulp.src('responsive/src/sass/style.scss')
  .pipe(gulp_sass({outputStyle:'expanded'}))
  .pipe(gulp.dest('responsive'));
});

gulp.task('ejs', function(){
  gulp.src('responsive/src/ejs/layout.ejs')
    .pipe(ejs()) // 拡張子の指定
	.pipe(rename({extname:'.html',basename:"index"}))
  .pipe(gulp.dest('responsive/'));
});

gulp.task('sample_task', function(){
  console.log('sample_task');
});

gulp.task('default', function() {
  return runSequence(
    'sass',
    'ejs'
  );
})
