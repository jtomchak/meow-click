# meow-click

1. ```cd into our meow project```
2. initalize a new npm project with ```npm init -y```
3. check that you have a package.json. (what's the package.json.lock?)
4. install jquery with ```npm install jquery```
  * if you get errors, **YOU ARE LIKELY NOT IN YOUR PROJECT FOLDER**
5. Add jquery from file path in our index.html. remember the file path ? "./node_modules" 
```html
<script src="./node_modules/jquery/dist/jquery.min.js"></script>
```
6. Replace your window.onload with 
```js
$(document).ready(function(){
//---> all code here. 
} )
```
7. Add a file to the root of your project called .gitignore with one entry ```/node_modules```


8. Install ways just locally
*  ```npm install  webpack -g ``` Globally
*  ```npm install webpack --save-dev``` for dev dependencilskdjfoeijsdf
* ```npm install webpack``` normal town


9. import jquery into our meow.js file
```js
import $ from 'jquery'
```

10. Now you _should_ be able to run webpack and have it _bundle_ your js and jquery together
cmd ```./node_modules/.bin/webpack meow.js dist/bundle.js```

Windows
cmd ```"./node_modules/.bin/webpack meow.js dist/bundle.js"```

```cmd
Hash: 43792813c6740e3c7540
Version: webpack 3.8.1
Time: 259ms
    Asset    Size  Chunks                    Chunk Names
bundle.js  272 kB       0  [emitted]  [big]  main
   [0] ./meow.js 1.06 kB {0} [built]
    + 1 hidden module
```


11. webpack.cofig.js
```js
const path = require("path");

module.exports = {
  entry: "./meow.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

12. cmd ```./node_modules/.bin/webpack --config webpack.config.js```

13. Can't be writing that a bunch of times over and over. so in package.json. 
We want to add a new script called 'build' and tell it 'webpack'
```js
 "scripts": {
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

13. move our index.html file into our dist folder. we are done touching it
