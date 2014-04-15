Install
-------
Install node:
```
brew install node
```


Install node dependencies (including formidable)
```
npm install 
```

Usage
-----
To run, run `node` with app.js:
```
node app.js
```

Logging
=======
This application formats logging using `bunyan` with json formatted output.  To pretty print the output, use the `bunyan` CLI:
```
node app.js | node_modules/.bin/bunyan
```


Pause
=====
The `pause` service waits for a specified amount of time, then returns an `HTTP 200`.  Useful for performance testing to see the effect of having lots of calls that seem to take a period of time to return.

```
curl -i http://127.0.0.1:8888/pause?duration=3000
```
