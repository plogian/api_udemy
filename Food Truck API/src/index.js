import http from 'http';		//lets us create a server
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';		//let's us interface with MongoDB
import config from './config';
import routes from './routes';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

let app = express();
app.server = http.createServer(app);

// middleware
// parse application - > allows us to parse JSON in a request
app.use(bodyParser.json({
	limit: config.bodyLimit
}));

// passport config
app.use(passport.initialize());
let Account = require("./model/account");
passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
},
	Account.authenticate(),
));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// api routes v1 -- Add /api for nginx routing
app.use('/api/v1', routes);

app.server.listen(config.port);

console.log(`Started on port ${app.server.address().port}`);

export default app;