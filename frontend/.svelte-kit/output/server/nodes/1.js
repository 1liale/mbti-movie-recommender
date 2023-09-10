

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.48529167.js","_app/immutable/chunks/scheduler.794c0693.js","_app/immutable/chunks/index.3b3c90b9.js","_app/immutable/chunks/stores.1ed47919.js","_app/immutable/chunks/singletons.dfbae371.js","_app/immutable/chunks/index.628a68f3.js"];
export const stylesheets = [];
export const fonts = [];
