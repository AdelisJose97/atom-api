import express, {Request, Response} from 'express';
var cors = require('cors')
import taskRoutes from './routes/tasks';
import usersRoutes from './routes/users';
import 'dotenv/config';


const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use('/tasks', taskRoutes);
app.use('/users', usersRoutes);

app.listen(port, () => {
  console.log(`Server running at port => ${port}`);
});
