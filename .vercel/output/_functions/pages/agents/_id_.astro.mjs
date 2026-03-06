import { c as createComponent, a as createAstro, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CqvDRsrL.mjs';
import 'piccolore';
import { g as getOffresByAgentId, $ as $$Layout } from '../../chunks/backend_CCTd2ZZY.mjs';
import { $ as $$OffreCard } from '../../chunks/OffreCard_B_kPhnpQ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const offres = await getOffresByAgentId(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Offres de l'agent" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Offres de l'agent</h1> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> ${offres.length > 0 ? offres.map((offre) => renderTemplate`${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })}`) : renderTemplate`<p>Cet agent n'a pas encore d'offres.</p>`} </div> ` })}`;
}, "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/agents/[id].astro", void 0);

const $$file = "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/agents/[id].astro";
const $$url = "/agents/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
