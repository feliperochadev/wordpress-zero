var gulp = require ('gulp'),
less = require ('gulp-less'),
sass = require ('gulp-sass'),
minifyCSS = require ('gulp-minify-css'),
jslint = require('gulp-jslint'),
concat = require ('gulp-concat'),
uglify = require ('gulp-uglify'),
imagemin = require('gulp-imagemin'),
watch = require ('gulp-watch');


/*Caminhos das pastas, theme-name deve ser substituído pelo nome do tema*/
var themeName = 'wordpress-zero';
var src = 'src';
var dist = 'www/wp-content/themes/'+themeName;

var jsFiles = [
    'bower_components/jquery/dist/jquery.js',
    src+'/js/scripts.js'
];
var copyFiles = [
    src+'/*.php',
    src+'/*.png'
];

/*CSS*/
gulp.task('css', function(){
    gulp.src(src+'/css/config.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(minifyCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(dist));

    gulp.src(src+'/css/admin/login.css')
    pipe(gulp.dest(dist+'/admin/css'));
});

/*JS*/
gulp.task('js', function(){
    gulp.src(jsFiles)
    .pipe(concat('scripts.js'))
    .pipe(uglify({mangle:false}))
    .pipe(gulp.dest(dist+'/js'));
});

/*Cópia de arquivos*/
gulp.task('copia', function(){
    gulp.src(copyFiles)
    .pipe(gulp.dest(dist));
});
/*Watch*/
gulp.task('watch', function(){
    gulp.watch(jsFiles, ['js']);
    gulp.watch(src+'/css/**/**', ['css']);
    gulp.watch(copyFiles, ['copia']);
});

gulp.task('default', ['css', 'js', 'copia', 'watch']);
