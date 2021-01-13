import bodyParser from 'body-parser';
import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';

// import getLogger from './controllers/logger';
import * as swaggerDocument from './swagger.json';

const ip = '0.0.0.0';
const port = 3321;
// const logger = getLogger('server');

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, ip, () => {
  console.log('Server started on 3321');
});
