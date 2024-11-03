# node-express-app
A quick tour of Node and Express

Minimal web server app with templating and static files

The bootstrap module was installed:
```
npm install bootstrap
```

The handlebars template files are in the `./views` directory.
The `minimal_app.ts` was changed to serve static files from the `resources` directory:
```
app.use(express.static(path.join(__dirname, 'resources')))
```

`bootstrap.css` was copied to `resources\css`:
```
cp ./node_modules/bootstrap/dist/css/bootstrap.min.css ./resources/css
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
```

Note that the font type has changed.