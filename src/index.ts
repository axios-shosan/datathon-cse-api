import express, { Express, Response, Request } from 'express';
import { config } from 'dotenv'; // import env variables
import registrationRoutes from './modules/registrations/registrations.routes';

config();
const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(registrationRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('hello');
});

app.listen(PORT, () => console.log(`app running on port ${PORT}`));
