const gulp = require('gulp'),
    cleanCss = require('gulp-clean-css'),
    concat = require('gulp-concat');

gulp.task('minify-css', () => {
    return gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css','src/css/main.css'])
    .pipe(cleanCss())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/style/'));
});