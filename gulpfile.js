var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var del = require('del');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.+(scss|sass)')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('clean', function () {
    return del(['app/css']);
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app/'
        },
    })
})


gulp.task('sass:watch', function () {
    gulp.watch('app/sass/**/*.+(scss|sass)', gulp.task('sass'))
});

gulp.task('start', gulp.series('clean', gulp.parallel('sass', 'browserSync', 'sass:watch')));

