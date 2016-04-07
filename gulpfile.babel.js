import gulp from 'gulp';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import watch from 'gulp-watch';


/* Environment Path */
const path = {
    dist: "dist/",
    src: "src/",
    js: function() { return this.src + "js/" },
    BuildJs: function() { return this.dist + "js/" },
};

// concat js files
gulp.task('concat', () => {
    return gulp.src(path.js() + '**/*.js')
        .pipe(concat({ path: 'new.js', stat: { mode: 666 }}))
        .pipe(gulp.dest(path.BuildJs()));
});

gulp.task('compress', () => {
    return gulp.src(path.js() + '**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(path.BuildJs()));
});


// watch changes
gulp.task('watch', () => {
    //gulp.watch( path.js() + '**/*.js', ['compress']);
    gulp.watch( path.js() + '**/*.js', ['concat']);
});

gulp.task('stream', () => {
    gulp.src('src/**/*.js')
        .pipe(watch('src/**/*.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/'))
});


// Default Task
gulp.task('default', ['stream']);


