import gulp from 'gulp';
import babel from 'gulp-babel';
import watch from 'gulp-watch';
import connect from 'gulp-connect';

const path = {
    dist: "dist/",
    src: "src/"
};

gulp.task('connect', () => {
    connect.server({
        root: 'dist',
        port: 8001,
        livereload: true
    });
});

gulp.task('stream', () => {
    gulp.src(path.src+'**/*.js')
        .pipe(watch(path.src+'**/*.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(path.dist))
        .pipe(connect.reload());
});

gulp.task('default', ['stream', 'connect']);


