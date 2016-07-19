var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
  return browserify({
    entries: './src/app.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform('babelify', {presets: ['es2015', 'react']})
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('public/js'));
});

gulp.task('watch', function () {
  gulp.watch('./src/*.jsx', ['build']);
});

// gulp.task('default', ['build']);
