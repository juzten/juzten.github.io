var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

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

// gulp.task('less', function () {
//   return gulp.src('app/assets/less/*.less')
//     .pipe(less({
//       paths: [ path.join(__dirname, 'less', 'includes') ]
//     }))
//     .pipe(gulp.dest('app/assets/css/styles.csss'));
// });
