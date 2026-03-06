import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CqvDRsrL.mjs';
import 'piccolore';
import { a as getAgents, $ as $$Layout } from '../chunks/backend_CCTd2ZZY.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const agents = await getAgents();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Liste des agents" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Liste des agents</h1> <ul> ${agents.map((agent) => renderTemplate`<li> <a${addAttribute(`/agents/${agent.id}`, "href")}> ${agent.nom} ${agent.prenom} </a> </li>`)} </ul> ` })}`;
}, "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/agents/index.astro", void 0);

const $$file = "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/agents/index.astro";
const $$url = "/agents";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
