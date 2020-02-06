webpack-sandbox
===============

1. Execute `npx webpack`
2. Edit files under `/src`
3. Watch them automatically re-build at lightning speed
4. Run your bundles with `node inspect /dist/*.js`
5. Debug your node JS with Chromium at `chrome://inspect`

When you start debugging you should see minified code. Step into the code one
time and it will be mapped to it's source for tracing.

To debug on remote systems:
```
node --inspect-brk=0.0.0.0:9229 <filename>.js
```
Then set your local Chromium to scan the IP of the system by configuring a new
IP (e.g. for docker it's 172.17.0.2:9229). When the debug session appears,
connect to it.

If you are debugging a remote system which does not have the map file, use a
simple web server (e.g. `hostdir`) to host the contents of `/dist`, then right
click inside of the uglified JS in chromium and select `Add source map`. Enter
`http://localhost:8000/<filename>.js.map` and step into the code.
