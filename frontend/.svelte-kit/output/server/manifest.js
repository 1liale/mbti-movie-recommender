export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","robots.txt"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.512a3242.js","app":"_app/immutable/entry/app.b4b2bc2b.js","imports":["_app/immutable/entry/start.512a3242.js","_app/immutable/chunks/scheduler.794c0693.js","_app/immutable/chunks/singletons.dfbae371.js","_app/immutable/chunks/index.628a68f3.js","_app/immutable/entry/app.b4b2bc2b.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.794c0693.js","_app/immutable/chunks/index.3b3c90b9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/browse",
				pattern: /^\/browse\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
