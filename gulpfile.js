var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var inject = require('gulp-inject');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var rev = require('gulp-rev');
var rimraf = require('rimraf');

var jsFiles = [
  '_layout/js/jquery-2.1.1.min.js',
  '_layout/js/viewport/jquery.viewport.js',
  '_layout/js/easing/jquery.easing.1.3.js',
  '_layout/js/simpleplaceholder/jquery.simpleplaceholder.js',
  '_layout/js/animations/animate.js',
  '_layout/js/revolutionslider/js/jquery.themepunch.tools.min.js',
  '_layout/js/revolutionslider/js/jquery.themepunch.revolution.min.js',
  '_layout/js/bxslider/jquery.bxslider.min.js',
  '_layout/js/parallax/jquery.parallax.min.js',
  '_layout/js/easytabs/jquery.easytabs.min.js',
  '_layout/js/jqueryvalidate/jquery.validate.min.js',
  '_layout/js/jqueryform/jquery.form.min.js',
  '_layout/js/scrollspy/scrollspy.min.js',
  '_layout/js/plugins.js',
  '_layout/js/scripts.js'
];

gulp.task('inject', function() {
  gulp.src('./index.html')
    .pipe(inject(gulp.src(jsFiles)))
    .pipe(gulp.dest('./'));
});

gulp.task('clean', function(cb) {
  rimraf('assets/', cb);
});

gulp.task('js', ['clean'], function() {
  gulp.src(jsFiles)
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(rev())
    .pipe(gulp.dest('assets/'));
});

gulp.task('inject-min', function() {
  gulp.src('./index.html')
    .pipe(inject(gulp.src('assets/*.js')))
    .pipe(gulp.dest('./'));
});

gulp.task('serve', function() {
  connect.server({
    livereload: true
  });
});
