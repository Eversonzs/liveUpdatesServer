import express from 'express';
import timeout from 'connect-timeout';
import morganLogger from 'morgan';
import { urlencoded, json } from "body-parser";
import SETTINGS from './settings';
import cors from 'cors';

const app = express();

const { PORT } = SETTINGS;

app.use(
    cors({
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods',
        'Access-Control-Request-Headers',
        'Accept',
      ],
    })
);

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(timeout('3000s'));
app.use(morganLogger('dev'));

app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT}`);
});

app.use((req, res) => {
  res.status(200).json({ message: `Server is running on port ${PORT}` });
});

export default app;
