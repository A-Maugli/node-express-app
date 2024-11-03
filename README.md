# node-express-app
A quick tour of Node and Express

* First, a minimal Web server app was created, see tag `minimal_app`
* Then routing was added, see tag `minimal_app_with_routing`
* For configuration setting, see tag `minimal_app_with_config`
* Then templating was shown, using Handlebars template engine, see tag `templating`
* Static file serving was then shown, see tag `static_files`
* For form handling, see tag `forms1`

Now, session handling and redirection will be added.

## Session handling 

Add `express-session` module and TypeScript declarations:
```
npm install express-session
npm install @types/express-session
```

add to `minimal_app.ts` the following:
```
import expressSession from 'express-session';

app.use(expressSession(
    {
        secret: 'asdfghjkl',
        resave: false,
        saveUninitialized: true,
    }
));
```

modify `routes/login.ts` to store `username` in session:
```
router.post(`/login`,
    (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        console.log(`req.body.username : ${req.body.username}`);
        if (req.body.username?.length > 0) {
            console.log(`found body.name`);
            (<ISessionData>req.session).username =
                req.body.username;
            res.redirect(`/`);
        } else {
            res.render(`login`, {
                title: `Express Login`,
                errorMessage: `Please enter a username and password`
            })
        }

    });
 ```

Add ISessionData interface to `routes/sessionData.ts`:
```
import session from "express-session";

export interface ISessionData
    extends session.Session {
    username: string;
}
```

Modify `views/index.hbs` to display the logged in user:
```
{{#if username}}
<p>User {{username}} logged in.
    {{else}}
<p>Click <a href="/login">here to login</a></p>
{{/if}}
```

Modify `routes/index.ts` to read `username` from session data:
```
    username: (<ISessionData>req.session).username
```

## After checkout

Install node.js modules:
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
localhost:9999/
=> Welcome to the Express App
=> Click here to login
Username: test
Password: pw
Press buton "Login"
=> Welcome to the Express App
=> User test logged in.
```

Note: This Express sample web server doesn't check the password.
