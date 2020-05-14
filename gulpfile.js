var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.+(scss|sass)')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
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

gulp.task('start', gulp.parallel('sass', 'browserSync', 'sass:watch'))

