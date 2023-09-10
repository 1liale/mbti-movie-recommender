import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.e5d52a36.js","_app/immutable/chunks/scheduler.794c0693.js","_app/immutable/chunks/index.3b3c90b9.js","_app/immutable/chunks/modal.store.0151f9f6.js","_app/immutable/chunks/index.628a68f3.js","_app/immutable/chunks/Popper.a1eb2852.js","_app/immutable/chunks/logo.12b0bff4.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/2.85214208.css"];
export const fonts = [];
