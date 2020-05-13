import compression from 'compression';
import { config } from 'dotenv';
import cors from 'cors';
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import errorHandler from './middleware/errorHandler';
import swaggerDocs from '../docs/buildforsdg-team-012.json';

config();

const app = express();

app.use(compression());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
if (['development', 'staging', 'production'].includes(process.env.NODE_ENV)) {
  app.use(morgan('dev'));
}

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (_, response) => {
  response.status(200).json({
    status: 'success',
    message: 'welcome to "BuildForSDG 2020"'
  });
});

app.all('*', (_, response) => {
  response.status(404).json({
    status: 'error',
    error: 'resource not found'
  });
});

app.use(errorHandler);

export default app;
