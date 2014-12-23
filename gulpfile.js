var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');

gulp.task('js', function() {
  gulp.src('js/')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/'));
});
