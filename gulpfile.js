/* ======================================================================================= Modules */
    // gulp本体
    var gulp     = require('gulp');
    // WindowsOS対応
    var windows  = require('gulp-util');
    // ファイル変更監視
    var watch    = require('gulp-watch');
    // Babelコンパイル
    var babel    = require('gulp-babel');
    // gulp.error発生時処理を止めない
    var plumber  = require('gulp-plumber');
    // gulp.error発生時デスクトップ通知を行う
    var notify   = require('gulp-notify');
    // JS圧縮
    var uglify   = require('gulp-uglify');
    // JS結合
    var concat   = require('gulp-concat');
    // 変更ファイルのみ発火
    var changed  = require('gulp-changed');
    // Sassコンパイル
    var sass     = require('gulp-sass');
    // CSS圧縮
    var minify   = require('gulp-minify-css');
    // 画像圧縮
    var imageMin = require('gulp-imagemin');

/* ======================================================================================= Tasks */

gulp.task('babel', function() {
    gulp.src('./src/**/*.es6')
        .pipe(changed('./dist'))
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
    gulp.src('./src/**/*.js')
        .pipe(changed('./dist'))
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('html', function() {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function() {
    gulp.src('./src/**/*.scss')
        .pipe(changed('./dist'))
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(minify())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('css', function() {
    gulp.src('./src/**/*.css')
        .pipe(changed('./dist'))
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(concat('main.css'))
        .pipe(minify())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('jpg', function() {
    gulp.src('./src/**/*.jpg')
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(imageMin())
        .pipe(gulp.dest('./dist'));
});

gulp.task('jpeg', function() {
    gulp.src('./src/**/*.jpeg')
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(imageMin())
        .pipe(gulp.dest('./dist'));
});

gulp.task('png', function() {
    gulp.src('./src/**/*.png')
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(imageMin())
        .pipe(gulp.dest('./dist'));
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

    //png
    watch('./src/**/*.png', function(event) {
        gulp.start(['png']);
    });

});

/* ======================================================================================= Default */
gulp.task('default', ['watch']);
