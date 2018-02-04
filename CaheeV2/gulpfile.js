// var gulp = require('gulp'),
//     scss = require('gulp-scss');
// gulp.task('scss', function () {
//     var postcss = require('gulp-postcss'),
//         autoprefixer = require('autoprefixer'),
//         uglifycss = require('gulp-uglifycss'),
//         concatCss = require('gulp-concat-css');
//     return gulp
//         .src('source/styles/*.scss')
//         .pipe(scss("dest"))
//         .pipe(postcss([autoprefixer()]))
//         .pipe(concatCss("main.css"))
//         .pipe(uglifycss())
//         .pipe(gulp.dest("dest"));
// });
// gulp.task('watch', function () {
//     gulp.watch('source/styles/*.scss', ['scss']);
// });
// gulp.task('default', ['scss']);

var gulp = require('gulp'),
    uncss = require('gulp-uncss'),
    concat = require('gulp-concat'),
    nano = require('gulp-cssnano'),
    scss = require('gulp-scss');
gulp.task('scss', function () {
    var postcss = require('gulp-postcss'),
        autoprefixer = require('autoprefixer'),
        uglifycss = require('gulp-uglifycss'),
        concatCss = require('gulp-concat-css');
    return gulp
        .src('source/styles/**/*.scss')
        .pipe(scss())
        .pipe(postcss([autoprefixer()]))
        .pipe(concatCss("main.css"))
        .pipe(uglifycss())
        .pipe(uncss({html: ['index.html', 'posts/**/*.html', 'http://example.com']}))
        .pipe(nano())
        // .pipe(gulp.dest('./out'))
        .pipe(gulp.dest("dest"));


});
gulp.task('watch', function () {
    gulp.watch('source/styles/*.scss', ['scss']);

});
gulp.task('js', function () {
    var sourcemaps = require("gulp-sourcemaps"),
        uglify = require('gulp-uglify'),
        concat = require("gulp-concat-js");
    return gulp
        .src('source/js/*.js')
        // .pipe(uglify())
        // .rename('main-min.js')
        .pipe(sourcemaps.init())
        // .pipe(concat({
        //     "target": "main.min.js", // Name to concatenate to
        //     "entry": "./main.js" // Entrypoint for the application, main module
        //                          // The `./` part is important! The path is relative to
        //                          // whatever gulp decides is the base-path, in this
        //                          // example that is `./lib`
        // }))
        .pipe(sourcemaps.write())
        .pipe(uglify())
        .pipe(gulp.dest('dest'));

});
// var uglify = require('gulp-uglify'),
//

gulp.task('default', ['scss']);
gulp.task('default', ['js']);
