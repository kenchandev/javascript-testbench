var gulp = require('gulp');                 //  skeleton for build process
var gutil = require('gulp-util');           //  responsible for constant logging (debugging)
var source = require('vinyl-source-stream'); //  handling / throwing text files from one process to another
var browserify = require('browserify');     //  determines what code is dependent on other code (figures out order)
var watchify = require('watchify');         //  automatically reruns gulpfile.js when changes are made to code
var reactify = require('reactify');         //  convert all JSX to JS

//  Immediately runs 'default' task
gulp.task('default', function(){
  //  create a bundler (runs browserify on codebase)
  var bundler = watchify(browserify({ //  pass key configuration options.
    entries: ['./src/app.jsx'], //  entries: starting point of application. First file browserify looks into to determine how it will include all these files (will utilize require statements).
    transform: [reactify],       //  transform: tells browserify to compile JSX to JS via reactify module while figuring out dependencies
    extensions: ['.jsx'],        //  extensions: files browserify needs to look at
    debug: true,
    cache: [],
    packageCache: {},
    fullPaths: true
  }));

  function build(file){
    if(file)  gutil.log('Recompiling ' + file);
    return bundler
              .bundle()         //  Bundler, do your thing
              .on('error', gutil.log.bind(gutil, 'Browserify Error'))   //  If there's ever an error during bundling, log it to console (i.e.: require that makes no sense)
              .pipe(source('main.js'))    //  after bundler has run and all files are converted and put in order, put the new contents into a single file
              .pipe(gulp.dest('./'));     //  place the file into the current working directory
  };

  build();  //  Tells bundler what to do.
  bundler.on('update', build)   //  Whenever a change is made to a .jsx file, rerun build.
});