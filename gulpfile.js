'use strict';

const { src, dest } = require('gulp');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const fileInclude = require('gulp-file-include');
const del = require('del');
const htmlBeautify = require('gulp-html-beautify');
const scss = require('gulp-sass');
const autopreFixer = require('gulp-autoprefixer');
const groupMedia = require('gulp-group-css-media-queries');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const webpackStream = require('webpack-stream');

const sourceFolder = 'src/';
const buildFolder = 'dist/';

const path = {
	build: {
		html: buildFolder,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		img: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
	},
	src: {
		html: [`${sourceFolder}/*.html`, `!${sourceFolder}/_*.html`],
		css: `${sourceFolder}scss/style.scss`,
		js: `${sourceFolder}js/index.js`,
		img: `${sourceFolder}img/**/*.{jpg,png,svg,gif,ico,webp}`,
		fonts: `${sourceFolder}fonts/**/*.{eot,woff,woff2,ttf,svg}`,
	},
	watch: {
		html: `${sourceFolder}**/*.html`,
		css: `${sourceFolder}scss/**/*.scss`,
		js: `${sourceFolder}js/**/*.js`,
		img: `${sourceFolder}img/**/*.{jpg,png,svg,gif,ico,webp}`,
		fonts: `${sourceFolder}fonts/**/*.{eot,woff,woff2,ttf,svg}`,
	},
	clean: `./${buildFolder}`,
};

const serve = () => {
	browserSync.init({
		server: {
			baseDir: `./${buildFolder}/`,
		},
		port: 3000,
		notify: true,
	});
};

const html = () => {
	return src(path.src.html)
		.pipe(fileInclude())
		.pipe(
			htmlBeautify({
				indent_size: 2,
			}),
		)
		.pipe(dest(path.build.html))
		.pipe(browserSync.stream());
};

const css = () => {
	return src(path.src.css)
		.pipe(
			scss({
				outputStyle: 'expanded',
			}),
		)
		.pipe(
			autopreFixer({
				overrideBrowserslist: ['last 5 versions'],
				cascade: true,
			}),
		)
		.pipe(groupMedia())
		.pipe(dest(path.build.css))
		.pipe(cleanCss())
		.pipe(
			rename({
				suffix: '.min',
				extname: '.css',
			}),
		)
		.pipe(dest(path.build.css))
		.pipe(browserSync.stream());
};

const images = () => {
	return src(path.src.img)
		.pipe(
			imagemin([
				imagemin.gifsicle({ interlaced: true }),
				imagemin.mozjpeg({ quality: 95, progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 }),
				imagemin.svgo({
					plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
				}),
			]),
		)
		.pipe(dest(path.build.img))
		.pipe(browserSync.stream());
};

const fonts = () => {
	return src(path.src.fonts).pipe(dest(path.build.fonts)).pipe(browserSync.stream());
};

const js = () => {
	return src(path.src.js)
		.pipe(
			webpackStream({
				mode: 'development',
				output: {
					filename: 'index.js',
				},
				module: {
					rules: [
						{
							test: /\.(js)$/,
							exclude: /(node_modules)/,
							loader: 'babel-loader',
							query: {
								presets: ['@babel/preset-env'],
								plugins: [['@babel/transform-runtime']],
							},
						},
					],
				},
			}),
		)
		.pipe(dest(path.build.js))
		.pipe(browserSync.stream());
};

const jsProd = () => {
	return src(path.src.js)
		.pipe(
			webpackStream({
				mode: 'production',
				output: {
					filename: 'index.js',
				},
				module: {
					rules: [
						{
							test: /\.(js)$/,
							exclude: /(node_modules)/,
							loader: 'babel-loader',
							query: {
								presets: ['@babel/preset-env'],
								plugins: [['@babel/transform-runtime']],
							},
						},
					],
				},
			}),
		)
		.pipe(dest(path.build.js))
		.pipe(browserSync.stream());
};

const clean = () => {
	return del(path.clean);
};

const watchFiles = () => {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.css], css);
	gulp.watch([path.watch.img], images);
	gulp.watch([path.watch.fonts], fonts);
	gulp.watch([path.watch.js], jsProd);
};

const build = gulp.series(clean, gulp.parallel(html, css, images, fonts, jsProd));
const watch = gulp.parallel(build, watchFiles, serve);

exports.html = html;
exports.css = css;
exports.images = images;
exports.fonts = fonts;
exports.js = js;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;
