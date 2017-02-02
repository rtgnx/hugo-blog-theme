'use strict';

const gulp = require('gulp')
const sass =  require('gulp-sass');
const watch = require('gulp-watch')
const webpack = require('gulp-webpack')



gulp.task('sass', function() {
    return gulp.src('./assets/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
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

gulp.task('default', ['sass', 'js', 'copyfonts']);



gulp.task('copyfonts', function() {
    gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}')
        .pipe(gulp.dest('./static/fonts/'));

    gulp.src('./node_modules/bootstrap/fonts/*.{ttf,woff,woff2,svg}')
        .pipe(gulp.dest('./static/fonts/bootstrap/'));

    gulp.src('./node_modules/foundation-icons/*.{ttf,woff,woff2,svg}')
        .pipe(gulp.dest('./static/fonts/'));
});
