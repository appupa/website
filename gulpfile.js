var gulp = require('gulp');

var ghPages = require('gulp-gh-pages');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var rimraf = require('rimraf');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');

gulp.task('clean', function(cb) {
  rimraf('./dist/', cb);
});

gulp.task('copy-repo', ['clean'], function() {
  return gulp.src('repo/**/*', {
      base: './repo'
    })
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', ['clean'], function() {
  var sources = ['projects/**/*', 'assets/**/*', 'rs-plugin/**/*'];
  return gulp.src(sources, {
      base: './'
    })
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('dist-index', ['clean'], function() {
  var assets = useref.assets();

  return gulp.src('index.html')
    .pipe(assets)
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(rev())
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(revReplace({
      replaceInExtensions: ['.html']
    }))
    .pipe(gulpif('*.html', minifyHtml()))
    .pipe(gulp.dest('dist'));

});

gulp.task('dist', ['copy', 'copy-repo', 'dist-index'], function() {});

gulp.task('deploy', ['dist'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      origin: 'git@github.com:appupa/appupa.github.io.git',
      branch: 'master'
    }));
});
