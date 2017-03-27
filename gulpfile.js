var gulp = require('gulp');
var babel = require('gulp-babel');
var react = require('gulp-react');

gulp.task('transform', () => {
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(react({ harmony: false, es6module: true }))
    .pipe(gulp.dest('./lib/'));
});

gulp.task('default', ['transform']);
