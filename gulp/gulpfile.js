//===
// IMPORTS
//===
const {src, dest, parallel, series, watch} = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-dart-sass');
const sourcemaps = require('gulp-sourcemaps');
const bourbon    = require('bourbon').includePaths;

//===
// TASKS
//===
function cleanDist() {
  return src(['assets/css/style.*'], { allowEmpty: true })
    .pipe(clean());
}


// Compile SASS + sourcemaps
function sassCompile() {
  return src(["assets/sass/style.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed',  includePaths: bourbon }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('assets/css'));
}

//watchtask
function watchTask(){
  watch('assets/sass/**/*.scss', {interval: 1000, usePolling: true}, sassCompile); 
}

//===
// Run
//===

// Default: 'gulp'
const build = series(
  cleanDist,
  parallel(sassCompile),
  watchTask
);
exports.default = build;
