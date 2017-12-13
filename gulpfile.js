'use strict';

var gulp = require('gulp');

// --------------- SCSS -----------------

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
var px2rem = require('gulp-px2rem');
var px2remOptions = {replace: true};
var postCssOptions = {map: true};

gulp.task('sass', function () {
 return gulp.src('./src/styles/main.scss')
   .pipe(sourcemaps.init())
   .pipe(sass().on('error', sass.logError))
  //  .pipe(px2rem(px2remOptions, postCssOptions))
   .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('./build/assets/styles'));
});

// ---------------- PUG -------------------

var pug = require('gulp-pug');
var plumber = require('gulp-plumber');

gulp.task('pug', function buildHTML() {
  return gulp.src('./src/templates/pages/*.pug')
  .pipe(plumber())
  .pipe(pug({
    pretty: true 
  }))
  .pipe(gulp.dest('./build/'));
});

// --------------- IMAGES -----------------

var tinypng = require('gulp-tinypng-compress');

gulp.task('tinypng', function () {
	gulp.src('./src/images/**/*.{png,jpg,jpeg}')
		.pipe(tinypng({
			key: 'l24fUOu4hXFd9vBdrobEB8nfVjpyHHpm',
			sigFile: 'images/.tinypng-sigs',
			log: true
		}))
		.pipe(gulp.dest('./build/assets/images'));
});

// ------------- SVG SPRITE ---------------

var svgSprite = require("gulp-svg-sprites");

gulp.task('svgSprite', function () {
   return gulp.src('src/icons/*.svg')
       .pipe(svgSprite({mode: "symbols"}))
       .pipe(gulp.dest("build/assets/icons"));
});

// ---------- FONTS just copy -------------

gulp.task('copyFonts', ()=>{
    return gulp.src('src/fonts/*.woff?')
        .pipe(gulp.dest('build/assets/fonts'));
});

// ----------- BROWSER SYNC ---------------

var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });
});

gulp.watch('./build').on('change', browserSync.reload);

// -------------- WEBPACK -----------------

var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('webpack', function() {
  return gulp.src('src/scripts/*.js')
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(gulp.dest('build/assets/scripts'));
});

// --------------- WATCH ------------------

gulp.task('watch', function () {
 gulp.watch('./src/styles/**/*.scss', gulp.series('sass'));
 gulp.watch('./src/templates/**/*.pug', gulp.series('pug'));
 gulp.watch('./src/images/**/*.{png,jpg,jpeg}', gulp.series('tinypng'));
 gulp.watch('./src/scripts/**/*.js', gulp.series('webpack'));
 gulp.watch('./src/icons/*.svg', gulp.series('svgSprite'));
 gulp.watch('src/fonts/*.{woff, woff2}', gulp.series('copyFonts'));
});

// ---------------- DEFAULT ----------------

gulp.task('start', gulp.parallel('sass', 'pug', 'webpack', 'svgSprite', 'copyFonts'));

gulp.task('default', gulp.parallel('watch', 'browser-sync'));