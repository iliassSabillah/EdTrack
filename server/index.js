const express = require('express');
const webpack = require('webpack');
const path = require('path');
const config = require('../webpack.config.dev');
const open = require('open');
const models = require('./models');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = require('./routes');

/* eslint-disable no-console */

const port = process.env.PORT || 2017;
const app = express();
const compiler = webpack(config);

printErrors =(summary, errors)=> {
	console.log(summary);
	errors.forEach(err => {
		console.log(err.message || err);
	});
};
compiler.run((err, stats) => {
	if (err) {
		printErrors('Failed to compile.', [err]);
		process.exit(1);
	}

	if (stats.compilation.errors.length) {
		printErrors('Failed to compile.', stats.compilation.errors);
		process.exit(1);
	}

	if (process.env.CI && stats.compilation.warnings.length) {
		printErrors(
			'Failed to compile. When process.env.CI = true, warnings are treated as failures. Most CI servers set this automatically.',
			stats.compilation.warnings
		);
		process.exit(1);
	}
});

//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({extended: true}));

//return images from backend storage
app.get('/image/:img', (req, res) => {
	let userId = req.params.userId;
	let img = req.params.img;
  res.sendFile(path.join(__dirname, `images/${img}`));
});

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


models.sequelize.sync().then(() => {
	/**
	 * Listen on provided port, on all network interfaces.
	 */

if(!module.parent){
    app.listen(port, (err) => {
		if (err) {
			console.log(err);
		}
		else {
			console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
		}
		});
	}
});

app.use("/api", router);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/index.html'));
});

module.exports = app;
