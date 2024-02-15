// //const gulp = require("gulp");
// //const debug = require("debug");
import gulp from 'gulp';
import debug from 'gulp-debug';
import babel from 'gulp-babel';

gulp.task("build", () => {
    return gulp.src("src/**/*.?(m)js")
        .pipe(debug())
        .pipe(babel(
            {
                "presets": ["@babel/preset-env"]
            }
        ))
        .on("error", (err) => {
            console.log(`Babel error: ${err}`)
        })
        .pipe(gulp.dest(".compiled"))

});

gulp.task("default", gulp.series("build", (cb) => {
    console.log("Run default");
    cb();
}));