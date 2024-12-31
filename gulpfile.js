const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass')(require('sass'));

// Tarea para compilar los archivos Sass y moverlos a la carpeta dist
gulp.task('sass', function() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Tarea para mover archivos JS a la carpeta dist
gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'));
});

// Tarea para mover el HTML a la carpeta dist
gulp.task('html', function() {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'));
});

// Tarea para iniciar el servidor
gulp.task('serve', function() {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 8080,
    middleware: function (connect, opt) {
      return [
        function (req, res, next) {
          if (req.url === '/') {
            req.url = '/index.html'; // Redirigir a index.html
          }
          next();
        }
      ];
    }
  });
});

// Tarea predeterminada
gulp.task('default', gulp.series('html', 'sass', 'scripts', 'serve'));
