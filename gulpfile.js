'use strict';

const gulp = require('gulp')
const watch = require('gulp-watch')
const webpack = require('gulp-webpack')
const cssConcat = require('gulp-concat-css');

gulp.task('css', function() {
  return gulp.src('./assets/css/*.css')
    .pipe(cssConcat('./app.css', { rebaseUrls: false}))
    .pipe(gulp.dest('./static/css/'));
});


gulp.task('js', function() {
  return gulp.src('./assets/js/main.js')
    .pipe(webpack({
      output: {
        filename: 'all.js',
      }
    })).pipe(gulp.dest('./static/js/'));
});

gulp.task('default', ['css', 'js']);
