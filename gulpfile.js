var gulp = require('gulp');
var babel = require('gulp-babel');
var react = require('gulp-react');

var sass = require('gulp-sass');

gulp.task('css', () => gulp.src('./src/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./lib/')));

gulp.task('js', () => gulp.src('./src/**/*.js')
  .pipe(babel())
  .pipe(react({ harmony: false, es6module: true }))
  .pipe(gulp.dest('./lib/')));

gulp.task('watch', () => {
  gulp.watch('./src/**/*.scss', ['css']);
  gulp.watch('./src/**/*.js', ['js'])
});

gulp.task('default', ['css', 'js']);
