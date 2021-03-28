const gulp = require('gulp'); // Gulp core package
const sass = require('gulp-sass'); // Package to compile scss files
const path = require('path'); // Gulp path package
const minify = require('gulp-minify');
const imagemin = require('gulp-imagemin');
const data = require('gulp-data');
const hb = require('gulp-hb');
const rename = require('gulp-rename');

const srcPath = 'src/'; // Path to our source files
const distPath = 'dist/'; // Path to your distribution files

gulp.task('templates', function() {
  return gulp.src(srcPath + 'index.hbs')
    .pipe(hb().data(srcPath + 'data/test.json'))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('dist'))
});

gulp.task('styles', () => {
  return gulp.src(srcPath + 'sass/styles.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(distPath + 'css'))
});

gulp.task('scripts', function() {
  return gulp.src(srcPath + 'js/scripts.js')
    .pipe(minify())
    .pipe(gulp.dest(distPath + 'js'))
});

gulp.task('images', () => {
  return gulp.src(srcPath + 'images/*')
    .pipe(imagemin())
    .pipe(gulp.dest(distPath + 'images'))
});


// Default task is executed upon execution of gulp
gulp.task('default', gulp.series(['templates', 'styles', 'scripts', 'images']));