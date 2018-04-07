var vueify = require('gulp-vueify');

gulp.task('vueify', function () {
  return gulp.src('app/vue_src/**/*.vue')
    .pipe(vueify())
    .pipe(gulp.dest('./public'));
});
