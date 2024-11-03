# node-express-app
A quick tour of Node and Express

Minimal web server app with templating

The handlebars template engine was installed, using the following command:
```
npm install hbs
```

The handlebars template files are in the `./views` directory.
The `minimal_app.ts` was changed to register the template library and the 
template engine:
```
import * as path from "path";
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
```

The `routes/index.ts` was also modified, to render the `index.hbs` template:
```
res.render('index', 
            {
                welcomeMsg: 'Welcome to the Express App',
            }
        )
```

After cloning this repository, install node.js modules:
```
npm install
```

Compile TypeScript files to JavaScript
```
npx tsc
```

Run the Express web server app
```
node minimal_app
```

Test it in a browser, using the following urls:
```
localhost:9999
=> Welcome to the Express App
=> (title: localhost:9999)
localhost:9999/login
=> Login module processed /login
=> (title: localhost:9999/login)
localhost:9999/log
=> Cannot GET /log
=> (title: Error)
```