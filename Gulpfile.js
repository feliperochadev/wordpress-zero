var gulp = require ('gulp'),
less = require ('gulp-less'),
sass = require ('gulp-sass'),
concat = require ('gulp-concat'),
minifyCSS = require ('gulp-minify-css'),
uglify = require ('gulp-uglify'),
imagemin = require('gulp-imagemin'),
watch = require ('gulp-watch');

/*Caminhos dos arquivos e pastas, theme-name deve ser substituído pelo nome do tema*/
var themeName = 'theme-name';
var src = 'src/'+themeName;
var dist = 'build/wp-content/'+themeName;

gulp.task('default', ['css', 'js', 'watch']);
