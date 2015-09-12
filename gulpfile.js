'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('./src/less/main.less')
  .pipe(less())
  .pipe(gulp.dest('./src/stylesheets'));
});

gulp.task('watch', function watch() {
  gulp.watch(['src/less/**.less'], ['less']);
});
