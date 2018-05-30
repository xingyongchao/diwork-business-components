// dependency
var fs = require("fs");
var path = require("path");
var ora = require('ora')
var rm = require('rimraf')
var chalk = require('chalk')
// gulp & gulp plugin
var gulp = require("gulp");
var babel = require("gulp-babel");
var es3ify = require("gulp-es3ify");
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css')


var spinner = ora('building for production...')

var makeAlias = function(obj) {
  var result = [];
  Object.keys(obj).forEach(function(key) {
    var cell = {
      src: key,
      expose: obj[key]
    };
    result.push(cell);
  })
  return result;
};

var babelPresets = [
  ["env",{ "modules" : false }],
  "react",
  "es2015",
  "stage-0",
]

var babelPlugins = [
  "add-module-exports",
  "transform-object-rest-spread",
  "transform-decorators-legacy",
  [
    "css-modules-transform",
    {
      generateScopedName: '[local]__[name]___[hash:base64:5]',
      ignore: "./node_modules/",
      extractCss: {
        dir: "./dist/",
        relativeRoot: "./src/",
        filename: "[path]/[name].css"
      },
      keepImport: true
    },
  ],
  [
    "module-alias",
    makeAlias({
      
    })
  ]
];

gulp.task("clean", function (cb) {
  spinner.start()
  rm(path.join(__dirname, '../dist'), err => {
    if (err) {
      cb(err)
    }
    cb()
  })
});
gulp.task("fonts", ["clean"], function () {
  return gulp
    .src([
      './src/**/*.eot',
      './src/**/*.svg',
      './src/**/*.ttf',
      './src/**/*.woff'
    ])
    .pipe(gulp.dest('dist'))
});
gulp.task("css",["clean"],function(){
  gulp.src([path.join(process.cwd(),"./src/**/*.css")])
  .pipe(minifyCSS())
  .pipe(gulp.dest("dist"))
})
gulp.task("build", ["clean", "fonts","css"], function () {
  debugger;
  return gulp
    .src([
      path.join(process.cwd(), "./src/**/*.js"),
    ])
    .pipe(
      babel({
        presets: babelPresets,
        plugins: babelPlugins,
      })
    )
    .pipe(es3ify()).pipe(uglify())
    .pipe(gulp.dest("dist"))
    .on("end", function () {
      spinner.stop()
      console.log(chalk.cyan('  Build complete.\n'))
    })
});


gulp.start('build');