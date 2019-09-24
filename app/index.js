/**
 * @author Wale Ayandiran
 * This is the entry point of the application, this handles the necessary basic configuration such as
 * router setup, import modules, etc
 */

import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import routes from './routes';

const app = express();

app.use(logger('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', routes);

app.get('/', (req, res) => res.status(200).json({
  status: 'success',
  message: 'docs here',
}));

/**
 * Catch any other routes aside from the defined and send a 404 not found status and message
 */
app.get('*', (req, res) => res.status(404).json({
    status: 'error',
    message: '404 not found',
  }));

const server = app.listen(process.env.PORT || 9000, () => {
    console.log(`Listening on port ${server.address().port}`);
});

export default app;
