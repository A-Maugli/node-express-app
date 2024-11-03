# node-express-app
A quick tour of Node and Express

Express Setup
```
# Initialize a new node.js project with default settings, creating a package.json file 
npm init -y

# Install the Express framework, which is needed to run a web server 
npm install express

# Install Express Typscript declarations
npm install @types/express --save-dev

# Install TypScript compiler
npm install typescript --save-dev

# Initialize TypeScript configuration, creating a tsconfig.json file
npx tsc --init
```

Create a minimal web server app
```
# Create a minimal web server app, using the Express framework
nano minimal_app.ts
import express from 'express';

const app = express();

app.get("/", 
    (
        req: express.Request,
        res: express.Response
    ) => {
        console.log(`request URL: ${req.url}`);
        res.send(`Hello Express`);
    }
)

app.listen(3000, () => {
    console.log(`listening on port 3000`);
})
CTRL/X

# Compile TypeScript files to JavaScript
npx tsc

# Run the Express web server minimal_app
node minimal_app
```