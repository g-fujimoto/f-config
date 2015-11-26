var gulp      = require('gulp');
var sass      = require('gulp-sass');
var cssNext   = require('gulp-cssnext');
var webserver = require('gulp-webserver');
var plumber   = require('gulp-plumber');
var notify    = require('gulp-notify');

gulp.task('sass', function() {
    return gulp.src('./scss/*.scss')
               .pipe(plumber({
                   errorHandler: notify.onError('Error: <%= error.message %>')
               }))
               .pipe(sass({outputStyle: 'expanded'}))
               .pipe(gulp.dest('./app/css'));
});

gulp.task('webserver', function() {
    return gulp.src('./app')
               .pipe(webserver());
});

gulp.task('watch', ['sass'], function() {
    return gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('default', ['watch', 'webserver']);
