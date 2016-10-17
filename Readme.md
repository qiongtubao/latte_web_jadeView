
# latte_web_jadeView 

1.latte_webServer4 index.js  
```js
server.doSlave(function() {
	server.web.addView("jade", require("../index"));
});
```

2.web/index.js
```js
res.sendView("jade", "./XXXX.jade", {});
```