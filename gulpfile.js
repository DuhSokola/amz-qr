var path = {
    theme:  'www/assets/style/',
    sass:   'sass',
    css:    'css',
    js:     'js',
    img:    'img'
};

var gulp          = require('gulp'),
    util          = require('gulp-util'),
    sass          = require('gulp-sass'),
    globbing      = require('gulp-css-globbing'),
    postcss       = require('gulp-postcss'),
    autoprefixer  = require('autoprefixer'),
    browserSync   = require('browser-sync'),
    csswring      = require('csswring'),
    sourcemaps    = require('gulp-sourcemaps'),
    duration      = require('gulp-duration'),
    filter        = require('gulp-filter'),
    reload        = browserSync.reload,
    debug         = require('gulp-debug');


/* Set paths */
path.sass   = path.theme + path.sass;
path.css    = path.theme + path.css;
path.js     = path.theme + path.js;
path.img    = path.theme + path.img;


/**
 * Combined Tasks
 */
gulp.task('serve',['inject', 'browserSync']);
gulp.task('inject',['injectBower','injectSources']);


/**
 * Build Distribution
 */
var useref = require('gulp-useref');


/**
 * Dependency Injection
 */
var inject = require('gulp-inject'),
    wiredep = require('wiredep');

gulp.task('injectBower', function () {
  wiredep({
    src: './www/index.html',
    directory: './www/externals/bower_components/',
    bowerJson: require('./bower.json'),
    devDependencies: false
  });
});

gulp.task('injectSources', function () {
  var target = gulp.src('./www/index.html');

  return target.pipe(inject(gulp.src(
      [
        'app/**/*.js',
        'app/**/*.css',
        'assets/style/**/*.css',
        '!externals/bower_components/**/*.css',
        '!externals/bower_components/**/*.js'
      ],
      {
        read: false,
        cwd: 'www'
      })
  )).pipe(gulp.dest('./www'));
});

/**
 * Server with BrowserSync
 */
var browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'www'
    }
  });
  gulp.watch(['app/**/*.js','app/**/*.html', 'assets/**/*.css','assets/**/*.shelpcss', 'externals/**/*.js', 'externals/**/*.html','*.html'], {cwd: 'www'}, reload);
});


/* Gulp browserSync init task*/
gulp.task('amazee-browser-sync', function() {
  var vghostmode = false;
  var vopen = false;

  if(util.env.ghostmode) {
    var vghostmode = true;
  }
  if(util.env.open) {
    var vopen = true;
  }

  return browserSync.init(null, {
    server: {
      baseDir: 'www'
    },
    startPath: "",
    files: path.css + '/*.css',
    open: vopen,
    notify: false,
    logConnections: true,
    reloadOnRestart: true,
    ghostMode: {
      clicks: vghostmode,
      forms: vghostmode,
      scroll: vghostmode
    }
  });
});

/* Gulp SASS task with browserSync*/
gulp.task('amazee-sass', function () {
  var processors = [
    autoprefixer({browsers: ['last 10 versions', 'ie 9']})
  ];
  gulp.src(path.sass + '/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(globbing({ extensions: ['.scss'] }))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(duration('SASS compilation finished'))
    .pipe(postcss(processors))
    .pipe(duration('postCSS finished'))
    .pipe(sourcemaps.write('./map'))
    .pipe(duration('created sourcemap files'))
    .pipe(gulp.dest('./' + path.css))
    .pipe(filter([path.css + '/**/*.css']))
    .pipe(browserSync.reload({stream: true}))
    .pipe(filter([path.css + '/**/*.css']))
    .pipe(duration('moved all files to /css folder'));
});

/* Gulp SASS prod compile task*/
gulp.task('amazee-sass-build', function () {
  var processors = [
    autoprefixer({browsers: ['last 10 versions', 'ie 9']}),
    csswring
  ];
  gulp.src(path.sass + '/**/*.scss')
    .pipe(globbing({ extensions: ['.scss'] }))
    .pipe(sass.sync().on('error', sass.logError).on('error', process.exit.bind(process, 1)))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./' + path.css));
});


/* Gulp compile dev task*/
gulp.task('compile', ['amazee-sass']);


/* Gulp build prod task*/
gulp.task('build', ['amazee-sass-build']);


/* Gulp browserSync init task*/
gulp.task('watch', ['amazee-browser-sync'], function () {
    gulp.watch(path.sass + '/**/*.scss', ['amazee-sass']);
    gulp.watch(path.js + '/**/*.js').on('change', reload);
    gulp.watch("*.html").on('change', reload);
});


/* Default task*/
gulp.task('default', ['watch']);

