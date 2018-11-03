var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var gulp_sass = require('gulp-sass')

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
  return gulp.src(['./phpschool/css/style2.scss'])
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


gulp.task('default', function() {
  return runSequence(
    'server',
    'sass',
    'watch'
  );
})
