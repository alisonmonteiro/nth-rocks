var gulp = require('gulp'),
    pg = require('gulp-load-plugins')();

var css = function (files, name) {
    return gulp.src(files)
        .pipe(pg.sourcemaps.init())
        .pipe(pg.concat(name + '.css'))
        .pipe(pg.sass({
            precision: 10,
            onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe(pg.autoprefixer())
        .pipe(pg.sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'))
};

gulp.task('styles', function () {
    return css([
        './src/nth-rocks.scss'
    ], 'nth-rocks').pipe(pg.size({title: 'styles'}));
});

gulp.task('watch', ['default'], function () {
    gulp.watch('./src/*', ['styles']);
});

gulp.task('default', ['styles']);