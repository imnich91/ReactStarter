//
// Dependencies
//

import gulp from 'gulp';
import del from 'del';
import rename from 'gulp-rename';
import insert from 'gulp-insert';
import browserSync from 'browser-sync';
import webpackStream from 'webpack-stream';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import pump from 'pump';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { exec } from 'child_process';
import theo from 'theo';
import awspublish from 'gulp-awspublish';
import AWS from 'aws-sdk';
import styleLint from 'gulp-stylelint';
import eslint from 'gulp-eslint';


//
// Local variables
//

const strings = {
  VERSION_COMMENT: '/*! Apollo JS v1.3.3 */',
  VERSION: '1.3.3'
};

const path = {
  SCSS_SRC_ALL: 'scss/**/*.scss',
  SCSS_SRC_MAIN: 'scss/apollo.scss',
  CSS_DEST: 'dist/css/',
  JS_SRC_ALL: 'js/**/*.js',
  JS_SRC_MAIN: 'js/apollo.js',
  JS_DEST: 'dist/js/',
  DOCS_PAGE_SRC_ALL: 'docs/**/*.html',
  DOCS_DATA: 'docs/_data/**/*',
  DOCS_SCSS_SRC_ALL: 'docs/_scss/**/*.scss',
  DOCS_SCSS_SRC_MAIN: 'docs/_scss/docs.scss',
  DOCS_JS_SRC_ALL: 'docs/_js/**/*.js',
  DOCS_JS_SRC_MAIN: 'docs/_js/docs.js',
  THEO_SRC_ALL: 'theo/**/*'
};


//
// Development server
//

gulp.task( 'server', () => {
  browserSync.init({
    server: 'dist',
    ghostMode: false
  });
});


//
// Watch files
//

gulp.task( 'watch', () => {
  gulp.watch( path.SCSS_SRC_ALL, [ 'apollo-styles' ]);
  gulp.watch( path.JS_SRC_ALL, [ 'apollo-scripts' ]);
  gulp.watch( path.DOCS_PAGE_SRC_ALL, [ 'docs' ]);
  gulp.watch( path.DOCS_DATA, [ 'docs' ]);
  gulp.watch( path.DOCS_SCSS_SRC_ALL, [ 'docs-styles' ]);
  gulp.watch( path.DOCS_JS_SRC_ALL, [ 'docs-scripts' ]);
  gulp.watch( path.THEO_SRC_ALL, [ 'theo' ]);
});


//
// JS Linting
//

gulp.task( 'lint-apollo-scripts', () => {
  gulp.src( path.JS_SRC_ALL )
    .pipe( eslint())
    .pipe( eslint.format());
});

gulp.task( 'lint-docs-scripts', () => {
  gulp.src( path.DOCS_JS_SRC_ALL )
    .pipe( eslint())
    .pipe( eslint.format());
});


//
// Apollo JS bundle
//

gulp.task( 'apollo-scripts', ( callback ) => {
  pump([
    gulp.src( path.JS_SRC_MAIN ),
    webpackStream({
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader' }
        ]
      },
      output: {
        filename: 'apollo.js'
      }
    }),
    gulp.dest( path.JS_DEST ),
    uglify(),
    insert.prepend( strings.VERSION_COMMENT ),
    rename({
      suffix: '.min'
    }),
    gulp.dest( path.JS_DEST ),
    browserSync.stream()
  ],
  callback
 );
});


//
// Docs JS bundle
//

gulp.task( 'docs-scripts', ( callback ) => {
  pump([
    gulp.src( path.DOCS_JS_SRC_MAIN ),
    webpackStream({
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader' }
        ]
      },
      output: {
        filename: 'docs.js'
      }
    }),
    gulp.dest( path.JS_DEST ),
    uglify(),
    rename({
      suffix: '.min'
    }),
    gulp.dest( path.JS_DEST ),
    browserSync.stream()
  ],
  callback
 );
});


//
// SCSS linting
//

gulp.task( 'lint-apollo-styles', () => {
  const lint = gulp.src( path.SCSS_SRC_ALL )
    .pipe( styleLint({
      reporters: [
        { formatter: 'string', console: true }
      ]
    }));
  return lint;
});

gulp.task( 'lint-docs-styles', () => {
  const lint = gulp.src( path.DOCS_SCSS_SRC_ALL )
    .pipe( styleLint({
      reporters: [
        { formatter: 'string', console: true }
      ]
    }));
  return lint;
});


//
// SCSS compilation
//

gulp.task( 'apollo-styles', () => {
  gulp.src( path.SCSS_SRC_MAIN )
    .pipe( sass({
      includePaths: [ 'node_modules' ],
      outputStyle: 'expanded'
    }).on( 'error', sass.logError ))
    .pipe( postcss([
      autoprefixer({
        browsers: [ 'last 2 versions' ]
      })
    ]))
    .pipe( gulp.dest( path.CSS_DEST ))
    .pipe( browserSync.stream())
    .pipe( postcss([ cssnano() ]))
    .pipe( rename({
      suffix: '.min'
    }))
    .pipe( gulp.dest( path.CSS_DEST ))
    .pipe( browserSync.stream());
});

gulp.task( 'docs-styles', () => {
  gulp.src( path.DOCS_SCSS_SRC_MAIN )
    .pipe( sass({
      includePaths: [ 'node_modules' ],
      outputStyle: 'expanded'
    }).on( 'error', sass.logError ))
    .pipe( postcss([
      autoprefixer({
        browsers: [ 'last 2 versions' ]
      })
    ]))
    .pipe( gulp.dest( path.CSS_DEST ))
    .pipe( browserSync.stream());
});


//
// Documentation static site generator
//

gulp.task( 'docs', [ 'jekyll' ], () => {
  gulp.src( 'docs-temp/**/*' )
    .pipe( gulp.dest( 'dist' ))
    .pipe( browserSync.stream());
});


gulp.task( 'jekyll', ( gulpCallBack ) => {
  exec( 'jekyll build', ( err ) => {
    gulpCallBack( err );
  });
});


//
// Theo transformations
//

gulp.task( 'clean:theo', () => {
  del([
    'scss/_props/*.scss',
    'docs/_data/*.json'
  ]);
});

gulp.task( 'theo-colors-scss', [ 'clean:theo' ], () => {
  gulp.src( 'theo/_palette.json' )
    .pipe( theo.plugins.transform( 'raw' ))
    .pipe( theo.plugins.format( 'scss' ))
    .pipe( gulp.dest( 'scss/_props' ));
});

gulp.task( 'theo-colors-json', [ 'clean:theo' ], () => {
  gulp.src( 'theo/_palette.json' )
    .pipe( theo.plugins.transform( 'raw' ))
    .pipe( theo.plugins.format( 'ios.json' ))
    .pipe( rename( '_palette.json' )) // overwrite ios renaming scheme
    .pipe( gulp.dest( 'docs/_data' ));
});

gulp.task( 'theo-icons-scss', [ 'clean:theo' ], () => {
  gulp.src( 'theo/_icons.json' )
    .pipe( theo.plugins.transform( 'raw' ))
    .pipe( theo.plugins.format( 'map.scss' ))
    .pipe( gulp.dest( 'scss/_props' ));
});

gulp.task( 'theo-icons-json', [ 'clean:theo' ], () => {
  gulp.src( 'theo/_icons.json' )
    .pipe( theo.plugins.transform( 'raw' ))
    .pipe( theo.plugins.format( 'json' ))
    .pipe( gulp.dest( 'docs/_data' ));
});


//
// Publish to CDN
//

gulp.task( 'publish-css', () => {
  const publisher = awspublish.create({
    region: 'us-west-2', // US West Oregon
    params: {
      Bucket: `nexxus-marketing-staticcontent/design/css/${ strings.VERSION }`
    },
    signatureVersion: 'v3',
    credentials: new AWS.SharedIniFileCredentials({ profile: 'default' })
  });

  return gulp.src( './dist/css/apollo*.css' )
    .pipe( publisher.publish());
});

gulp.task( 'publish-js', () => {
  const publisher = awspublish.create({
    region: 'us-west-2', // US West Oregon
    params: {
      Bucket: `nexxus-marketing-staticcontent/design/js/${ strings.VERSION }`
    },
    signatureVersion: 'v3',
    credentials: new AWS.SharedIniFileCredentials({ profile: 'default' })
  });

  return gulp.src( './dist/js/apollo*.js' )
    .pipe( publisher.publish());
});

gulp.task( 'publish-docs', () => {
  const publisher = awspublish.create({
    region: 'us-west-2', // US West Oregon
    params: {
      Bucket: 'design.imshealth.com/resources/interfaces/components/'
    },
    signatureVersion: 'v3',
    credentials: new AWS.SharedIniFileCredentials({ profile: 'drb-docs' })
  });

  return gulp.src( './dist/*.html' )
    .pipe( publisher.publish());
});


//
// Tag and publish to npm
//

gulp.task( 'publish-tags', () => {
  function handleErrors( err, stdout, stderr ) {
    if ( err ) {
      process.stdout.write( err );
      return;
    }
    process.stdout.write( stdout );
    process.stdout.write( stderr );
  }

  const command = `git tag v${ strings.VERSION }
                   git push --tags
                   npm publish`;

  exec( command, ( err, stdout, stderr ) => {
    handleErrors( err, stdout, stderr );
  });
});


//
// Conglomerate tasks
//

gulp.task( 'lint-styles', [ 'lint-apollo-styles', 'lint-docs-styles' ]);
gulp.task( 'lint-scripts', [ 'lint-apollo-scripts', 'lint-docs-scripts' ]);
gulp.task( 'lint', [ 'lint-scripts', 'lint-styles' ]);
gulp.task( 'theo', [ 'clean:theo', 'theo-colors-scss', 'theo-colors-json', 'theo-icons-scss', 'theo-icons-json' ]);
gulp.task( 'publish', [ 'publish-css', 'publish-js', 'publish-tags' ]);
gulp.task( 'default', [ 'apollo-styles', 'apollo-scripts', 'docs-styles', 'docs-scripts', 'docs', 'lint' ]);
gulp.task( 'serve', [ 'default', 'server', 'watch' ]);
