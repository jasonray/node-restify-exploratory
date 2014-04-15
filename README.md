Purpose
=======
This project is simply to experiment with building a web service using node.js.  Don't look to get any value by viewing this.  None.

The project uses:
- `restify` for handling the http listener and routing
- `negotiator` for content negotiation
- `bunyan` for logging


Install
=======
Install node:
```
brew install node
```


Install node dependencies (including formidable)
```
npm install 
```

Usage
=====
To run, run `node` with app.js:
```
node app.js
```

Logging
-------
This application formats logging using `bunyan` with json formatted output.  To pretty print the output, use the `bunyan` CLI:
```
node app.js | node_modules/.bin/bunyan
```

Hello
-----
The `hello` service returns a simple hello world phrase.

A simple usage of it would be:
```
> curl -i http://127.0.0.1:8888/hello?q=q
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 13
Date: Tue, 15 Apr 2014 11:52:09 GMT
Connection: keep-alive

"hello world"
```

The `hello` service implements content negotiation, and returns different format based upon the negotatied format.

```
jayray> curl -i -H 'Accept: application/json' http://127.0.0.1:8888/hello?q=q
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 48
Date: Tue, 15 Apr 2014 11:57:03 GMT
Connection: keep-alive

{"message":"hello world","h2":"default","q":"q"}
```

Pause
-----
The `pause` service waits for a specified amount of time, then returns an `HTTP 200`.  Useful for performance testing to see the effect of having lots of calls that seem to take a period of time to return.

```
curl -i http://127.0.0.1:8888/pause?duration=3000
```
