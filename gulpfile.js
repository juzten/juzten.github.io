var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var gulpIf = require('gulp-if');


gulp.task('hello', function() {
  console.log('Hello Zell');
});

var jsFiles = 'assets/js/*.js',
    jsDest = 'assets/js';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        // .pipe(concat('main.js'))
        // .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

// gulp.task('styles', function(){
//   return gulp.src('app/*.html')
//     // Minifies only if it's a CSS file
//     .pipe(gulpIf('assets/css/*.css', cssnano()))
//     .pipe(gulp.dest('dist'))
// });

gulp.task('styles', function() {
    return gulp.src('assets/css/*.css')
        .pipe(rename('styles.min.js'))
        .pipe(cssnano())
        .pipe(gulp.dest('assets/css'));
});

// gulp.task('less', function () {
//   return gulp.src('app/assets/less/*.less')
//     .pipe(less({
//       paths: [ path.join(__dirname, 'less', 'includes') ]
//     }))
//     .pipe(gulp.dest('app/assets/css/styles.csss'));
// });
