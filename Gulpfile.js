var gulp = require ('gulp'),
less = require ('gulp-less'),
sass = require ('gulp-sass'),
minifyCSS = require ('gulp-minify-css'),
jslint = require('gulp-jslint'),
concat = require ('gulp-concat'),
uglify = require ('gulp-uglify'),
imagemin = require('gulp-imagemin'),
watch = require ('gulp-watch');


/*Caminhos dase pastas, theme-name deve ser substituído pelo nome do tema*/
var themeName = 'theme-name';
var src = 'src/'+themeName;
var dist = 'build/wp-content/themes/'+themeName;

/*Variaveis de arquivos*/
var sassFiles = [
    src+'/css/base/buttons.scss',
    src+'/css/base/tipografia.scss',
    src+'/css/base/variaveis.scss',
    src+'/css/layout/home.scss',
    src+'/css/layout/pages.scss',
    src+'/css/layout/single.scss',
];
var cssFiles = [
    src+'/css/theme-name.css',
    'node_modules/normalize.css/normalize.css'
];
var jsFiles = [
    'bower_components/jquery/jquery.js',
    src+'/js/scripts.js'
];
var copyFiles = [

];

/*CSS*/
gulp.task('css', function(){
    gulp.src(cssFiles)
    .pipe(minifyCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('temp/css/build'));

    gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles-concat.css'))
    .pipe(minifyCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('temp/css/build'));

    gulp.src('temp/css/build/*.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest(dist));
});

/*JS*/
gulp.task('js', function(){
    gulp.src(jsFiles)
    .pipe(jslint({
        node: true,
        evil: true,
        nomen: true,
        global: [],
        predef: []
    }))
    .pipe(concat('scripts.js'))
    .pipe(uglify({mangle:false}))
    .pipe(gulp.dest(dist+'/js'));
});

/*Watch*/
gulp.task('watch', function(){
    gulp.watch(jsFiles, ['js']);
});

gulp.task('default', ['css', 'js', 'watch']);
