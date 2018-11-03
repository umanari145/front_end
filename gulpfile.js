var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var gulp_sass = require('gulp-sass')
var ejs = require("gulp-ejs");
var rename = require("gulp-rename");

gulp.task('server', function() {
  browserSync.init({
      server: './phpschool'
  });
});

const browserReload = function() {
  browserSync.reload()
}

const compileSass = function(){
  console.log('sass execute')
  return gulp.src(['./phpschool/css/style.scss'])
      .pipe(gulp_sass({outputStyle:'expanded'}))
      .pipe(gulp.dest('./phpschool/css'))
}
gulp.task('sass', compileSass)


gulp.task('watch', function() {
  gulp.watch('./phpschool/**/*', function(){
    compileSass()
    browserReload()
  })
});


/**
 * responsive用
 */
gulp.task('responsive', function(){

  gulp.src('responsive/src/sass/style.scss')
  .pipe(gulp_sass({outputStyle:'expanded'}))
  .pipe(gulp.dest('responsive'))

  gulp.src('responsive/src/ejs/layout.ejs')
    .pipe(ejs()) // 拡張子の指定
	.pipe(rename({extname:'.html',basename:"index"}))
  .pipe(gulp.dest('responsive/'));
});



gulp.task('default', function() {
  return runSequence(
    'server',
    'sass',
    'watch'
  );
})
