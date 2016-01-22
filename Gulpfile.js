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
var dist = 'build/wp-content/'+themeName;

/*Variaveis de arquivos*/
var cssFiles = [
    src+'/css/style.scss',
    src+'/css/components/buttons.scss',
    src+'/css/components/forms.scss',
    src+'/css/header.scss',
    src+'/css/base.scss',
    src+'/css/sidebar.scss',
    src+'/css/content.scss',
    src+'/css/footer.scss'
];
var jsFiles = [
    'bower_components/jquery/jquery.js',
    src+'/js/scripts.js'
];
var copyFiles = [

];

/*CSS*/
gulp.task('normalizeCSS', function(){
    gulp.src('node_modules/normalize.css/normalize.css')
    .pipe(gulp.dest(dist));
});
gulp.task('css', function(){
    gulp.src(cssFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(minifyCSS({compatibility: 'ie8'}))
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
    .pipe(gulp.dest(dist));
});

/*Watch*/
gulp.task('watch', function(){
    gulp.watch(sassFiles, ['css']);
    gulp.watch(jsFiles, ['js']);
});

gulp.task('default', ['css', 'js', 'watch']);
