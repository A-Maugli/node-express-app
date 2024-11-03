# node-express-app
A quick tour of Node and Express

* First, a minimal Web server app was created, see tag `minimal_app`
* Then routing was added, see tag `routing`
* For configuration setting, see tag `config`
* Then templating was shown, using Handlebars tempale engine, see tag `templating`
* Static file serving was then shown, see tag `static_files`

Now comes form handling.

`routes/login.ts` was modified, to use a template:
```
        res.render('login', {
            title: 'Express Login'
        });
```

`views/login.hbs` was created. The template uses a HTML form

The body-parser node module was installed:
```
npm install body-parser
```

`minimal_app.ts` was modified to parse POST results coming from the
HTML form of the login:
```
import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
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
=> listening on port 9999
```

Test it in a browser, using the following url:
```
localhost:9999/login
Username: test
Password: pw
Press buton "Login"
```

Exprected result in the node.js terminal:
```
=> req.body.username : test
```