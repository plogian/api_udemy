import http from 'http';		//let's us create a server
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';		//let's us interface with MongoDB
import config from './config';
import routes from './routes';

let app = express();
app.server = http.createServer(app);

// middleware
// parse application - > allows us to parse JSON in a request
app.use(bodyParser.json({
	limit: config.bodyLimit
}));

// passport config

// api routes v1
app.use('/v1', routes);

app.server.listen(config.port);

console.log(`Started on port ${app.server.address().port}`);

export default app;