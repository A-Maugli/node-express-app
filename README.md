# node-express-app
A quick tour of Node and Express

Minimal web server app with config

The config module was installed, using the following commands:
```
npm install config
npm install @types/config --save-dev
```

The configuration is in file `./config/default.json` 
The `minimal_app.ts` was also changed, to read the configuration.

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
=> Site can't be reached
localhost:9999
=> Index module processed /
```