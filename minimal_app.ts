import express from 'express';

const app = express();

import * as Index from "./routes/index";
import * as Login from "./routes/login";

app.use('/', Index.router);
app.use('/', Login.router);

app.listen(3000, () => {
    console.log(`listening on port 3000`);
})
