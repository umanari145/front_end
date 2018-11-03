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

const compile_sass = function(){
  console.log('sass execute')
  return gulp.src(['./phpschool/css/style2.scss'])
      .pipe(gulp_sass({outputStyle:'expanded'}))
      .pipe(gulp.dest('./phpschool/css'))
}
gulp.task('sass', compile_sass)


gulp.task('watch', function() {
  gulp.watch('./phpschool/**/*', function(){
    compile_sass()
    browserReload()
  })
});


gulp.task('default', function() {
  return runSequence(
    'server',
    'watch'
  );
})
