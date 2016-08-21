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

/*Variaveis de arquivos*/
var sassFiles = [
    src+'/css/config.scss',
    src+'/css/base/normalize.scss',
    src+'/css/base/variaveis.scss',
    src+'/css/base/tipografia.scss',
    src+'/css/base/buttons.scss',
    src+'/css/layout/home.scss',
    src+'/css/layout/pages.scss',
    src+'/css/layout/single.scss'
];
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
    gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(minifyCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(dist));
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
    gulp.watch(sassFiles, ['css']);
    gulp.watch(copyFiles, ['copia']);
});

gulp.task('default', ['css', 'js', 'copia', 'watch']);
