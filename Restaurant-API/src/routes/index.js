import express from 'express';
import config from '../config';   // up one folder, then to config
import middleware from '../middleware';
import initializeDB from '../db';
import restaurant from '../controller/restaurant';

let router = express();

//connect to db
initializeDB(db => {

	//internal middleware
	router.use(middleware({config, db}));
	
	// api routes v1 (/v1)
	router.use('/restaurant', restaurant({config, db}));

});


export default router;