/* ======================================================================================= Modules */
    var gulp     = require('gulp');
    var util     = require('gulp-util');
    var watch    = require('gulp-watch');
    var babel    = require('gulp-babel');
    var plumber  = require('gulp-plumber');
    var uglify   = require('gulp-uglify');
    var concat   = require('gulp-concat');
    var changed  = require('gulp-changed');
    var sass     = require('gulp-sass');
    var minify   = require('gulp-minify-css');
    var imageMin = require('gulp-imagemin');

/* ======================================================================================= Tasks */

gulp.task('babel', function() {
    gulp.src('./src/**/*.es6')
        .pipe(changed('./www'))
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./www'));
});

gulp.task('js', function() {
    gulp.src('./src/**/*.js')
        .pipe(changed('./www'))
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./www'));
});

gulp.task('html', function() {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./www'));
});

gulp.task('sass', function() {
    gulp.src('./src/**/*.scss')
        .pipe(changed('./www'))
        .pipe(plumber())
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest('./www'));
});

gulp.task('css', function() {
    gulp.src('./src/**/*.css')
        .pipe(changed('./www'))
        .pipe(plumber())
        .pipe(minify())
        .pipe(gulp.dest('./www'));
});

gulp.task('jpg', function() {
    gulp.src('./src/**/*.jpg')
        .pipe(plumber())
        .pipe(changed())
        .pipe(imageMin())
        .pipe(gulp.dest('./www'));
});

gulp.task('jpeg', function() {
    gulp.src('./src/**/*.jpeg')
        .pipe(plumber())
        .pipe(changed())
        .pipe(imageMin())
        .pipe(gulp.dest('./www'));
});

/* ======================================================================================= Watch */

gulp.task('watch', function() {

    //Babel
    watch('./src/**/*.es6', function(event) {
        gulp.start(['babel']);
    });

    //HTML
    watch('./src/**/*.html', function(event) {
        gulp.start(['html']);
    });

    //CSS
    watch('./src/**/*.css', function(event) {
        gulp.start(['css']);
    });

    //Sass
    watch('./src/**/*.scss', function(event) {
        gulp.start(['sass']);
    });

    //jpg
    watch('./src/**/*.jpg', function(event) {
        gulp.start(['jpg']);
    });

    //jpeg
    watch('./src/**/*.jpeg', function(event) {
        gulp.start(['jpeg']);
    });

});

/* ======================================================================================= Default */
gulp.task('default', ['watch']);
