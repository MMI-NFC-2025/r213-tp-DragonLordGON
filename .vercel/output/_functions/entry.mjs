import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B3SlN4SU.mjs';
import { manifest } from './manifest_DWq8H4d0.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/agenda/add.astro.mjs');
const _page2 = () => import('./pages/agenda/modify.astro.mjs');
const _page3 = () => import('./pages/agenda.astro.mjs');
const _page4 = () => import('./pages/agents/_id_.astro.mjs');
const _page5 = () => import('./pages/agents.astro.mjs');
const _page6 = () => import('./pages/artistes/_id_.astro.mjs');
const _page7 = () => import('./pages/artistes.astro.mjs');
const _page8 = () => import('./pages/offres/add.astro.mjs');
const _page9 = () => import('./pages/offres/surface/_surface_.astro.mjs');
const _page10 = () => import('./pages/offres/_id_.astro.mjs');
const _page11 = () => import('./pages/offres.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/agenda/add.astro", _page1],
    ["src/pages/agenda/modify.astro", _page2],
    ["src/pages/agenda.astro", _page3],
    ["src/pages/agents/[id].astro", _page4],
    ["src/pages/agents/index.astro", _page5],
    ["src/pages/artistes/[id].astro", _page6],
    ["src/pages/artistes/index.astro", _page7],
    ["src/pages/offres/add.astro", _page8],
    ["src/pages/offres/surface/[surface].astro", _page9],
    ["src/pages/offres/[id].astro", _page10],
    ["src/pages/offres/index.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ace93d7a-5671-4a10-a7ac-4c2a4c4fa1c7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
