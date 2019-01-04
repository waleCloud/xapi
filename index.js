/**
 * @author Wale Ayandiran
 * This is the entry point of the application, this handles the necessary basic configuration such as
 * router setup, import modules, etc
 */

import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import { } from  'dotenv/config';

import routes from './app/routes';

const app = express();

app.use(logger('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(routes);

/**
 * Catch any other routes aside from the defined and send a 404 not found status and message
 */
app.get('*', (req, res) => res.status(404).send({
    success: false,
    data: {
      message: '404 not found',
    },
  }));

const server = app.listen(process.env.PORT || 9000, () => {
    console.log(`Listening on port ${server.address().port}`);
});

export default app;
