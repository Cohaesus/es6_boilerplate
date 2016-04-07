import gulp from 'gulp';
import babel from 'gulp-babel';
import watch from 'gulp-watch';

const path = {
    dist: "dist/",
    src: "src/"
};

gulp.task('stream', () => {
    gulp.src(path.src+'**/*.js')
        .pipe(watch(path.src+'**/*.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(path.dist))
});

gulp.task('default', ['stream']);


