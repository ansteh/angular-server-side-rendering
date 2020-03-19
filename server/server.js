const express        = require('express');
const app            = express();

const bodyParser     = require('body-parser');
const cors           = require('cors');

const path           = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiUrl = '/api';
const router = express.Router();

router.get('/test', (req, res) => {
	res.json({ test: true })
});

app.use(`${apiUrl}`, router);

const server = require('http').Server(app);

const port = 3000;

server.listen(port, () => { console.log(`listening on *:${port}`); });
