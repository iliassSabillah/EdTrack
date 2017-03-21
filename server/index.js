const express = require('express');
const path = require('path');
const models = require('./models');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = require('./routes');

/* eslint-disable no-console */

const port = process.env.PORT || 2017;
const app = express();

//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({extended: true}));

//return images from backend storage
app.get('/image/:img', (req, res) => {
	let userId = req.params.userId;
	let img = req.params.img;
  res.sendFile(path.join(__dirname, `images/${img}`));
});

models.sequelize.sync().then(() => {
	/**
	 * Listen on provided port, on all network interfaces.
	 */

// if(!module.parent){
    app.listen(port, (err) => {
		if (err) {
			console.log(err);
		}
		else {
			console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
		}
		});
	// }
});

app.use("/api", router);

app.use(express.static(path.join(__dirname, "../dist")));


app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/index.html'));
});

module.exports = app;
