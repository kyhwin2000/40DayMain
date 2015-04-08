var gulp 		= require('gulp'),
	uglify 		= require('gulp-uglify'),
	plumber		= require('gulp-plumber'),
	browserSync	= require('browser-sync'),
	filter		= require('gulp-filter'),
	compass		= require('gulp-compass'),
	minifyCSS	= require('gulp-minify-css'),
	reload		= browserSync.reload;

gulp.task('uglify', function() {
	return gulp.src('src/js/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('assets/js'));
});

gulp.task('compass', function() {
	return gulp.src('src/scss/*.scss')
		.pipe(plumber({
			errorHandler: function (error) {
				console.log(error.message);
				this.emit('end');
			}
		}))
		.pipe(compass({
			config_file: 'config.rb',
			css: 'assets/css',
			sass: 'src/scss'
		}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('assets/css'))
		.pipe(filter('assets/css/*.css'));
});

gulp.task('browser-sync', function() {
	browserSync({
		proxy: "localhost:8888"
	});
});

gulp.task('watch', function() {
	gulp.watch('src/js/*.js', ['uglify', browserSync.reload]);
	gulp.watch('src/scss/*', ['compass', browserSync.reload]);
});

gulp.task('default', ['uglify', 'compass', 'browser-sync', 'watch']);