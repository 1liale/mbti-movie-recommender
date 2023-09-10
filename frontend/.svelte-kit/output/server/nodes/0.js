import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.4de15772.js","_app/immutable/chunks/scheduler.794c0693.js","_app/immutable/chunks/index.3b3c90b9.js","_app/immutable/chunks/modal.store.0151f9f6.js","_app/immutable/chunks/index.628a68f3.js","_app/immutable/chunks/Span.267819e3.js","_app/immutable/chunks/logo.12b0bff4.js","_app/immutable/chunks/stores.1ed47919.js","_app/immutable/chunks/singletons.dfbae371.js"];
export const stylesheets = ["_app/immutable/assets/0.9c7c478f.css"];
export const fonts = [];
