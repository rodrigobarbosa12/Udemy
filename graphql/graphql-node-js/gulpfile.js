const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');

gulp.task('scripts', ['static'], () => {
    const tsProject = ts.createProject('tsconfig.json');
    const tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('static',  ['clean'], () => {
    return gulp.src(['src/**/*.json'])
    .pipe(gulp.dest('dist'));
});

gulp.task('clean',() => {
    return gulp.src('dist')
    .pipe(clean());
});

gulp.task('build', ['clean', 'static', 'scripts']);

gulp.task('watch', ['build'], () => {
    return gulp.watch(['src/**/*.ts',  'src/**/*.json'], ['build'])
});

gulp.task('default', ['watch'])