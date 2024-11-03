# node-express-app
A quick tour of Node and Express

Minimal web server app with router

See the files in the `routes` directory, and the `minimal_app.ts`

After cloning this repository, install node.js modules:
```
npm install
```

Run the minimal app:
```
# Compile TypeScript files to JavaScript
npx tsc

# Run the Express web server minimal_app
node minimal_app
```

Test it in a browser, using the following urls:
```
localhost:3000
=> Index module processed /
localhost:3000/login
=> Login module processed /login
localhost:3000/log
=> Cannot GET /log
```