const gulp = require('gulp'); // Gulp core package
const path = require('path'); // Gulp path package
const fs = require('fs');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const data = require('gulp-data');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const imagemin = require('gulp-imagemin');

const srcPath = 'src/'; // Path to source files
const distPath = 'dist/'; // Path to distribution files


gulp.task('template', function() {
  const srcFile = srcPath + 'index.hbs';
  const jsonFile = srcPath + 'data/test.json';
  return gulp
    .src(srcFile)
    .pipe(data(function(file) {
      return JSON.parse(fs.readFileSync(jsonFile));
    }))
    .pipe(handlebars())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('dist'))
});

gulp.task('styles', () => {
  const styleFile = srcPath + 'sass/styles.scss';
  const autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
  };
  return gulp
    .src(styleFile)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(distPath + 'css'))
});

gulp.task('scripts', function() {
  const jsFile = srcPath + 'js/scripts.js';
  return gulp
    .src(jsFile)
    .pipe(minify())
    .pipe(gulp.dest(distPath + 'js'))
});

gulp.task('images', () => {
  const imageFiles = srcPath + 'images/*';
  return gulp
    .src(imageFiles)
    .pipe(imagemin())
    .pipe(gulp.dest(distPath + 'images'))
});


// Default task is executed upon execution of gulp
gulp.task('default', gulp.series(['template', 'styles', 'scripts', 'images']));