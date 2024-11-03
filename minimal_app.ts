import express from 'express';

const app = express();

import * as Index from "./routes/index";
import * as Login from "./routes/login";

app.use('/', Index.router);
app.use('/', Login.router);

import config from "config";

enum ConfigOptions {
    PORT = 'port'
}

let port = 3000;

if (config.has(ConfigOptions.PORT)) {
    port = config.get(ConfigOptions.PORT);
}
else {
    console.log(`no port config found, using default port ${port}`);
}

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
