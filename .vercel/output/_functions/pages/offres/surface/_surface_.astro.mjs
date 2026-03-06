import { c as createComponent, a as createAstro, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CqvDRsrL.mjs';
import 'piccolore';
import { c as bysurface, $ as $$Layout } from '../../../chunks/backend_CCTd2ZZY.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$surface = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$surface;
  const { surface } = Astro2.params;
  const offre = (await bysurface(surface))[0];
  return renderTemplate`${offre && renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": offre.nomMaison }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<h2>${offre.nomMaison}</h2><ul><li>${offre.adresse}</li><li>${offre.prix}€</li><li>${offre.surface}m²</li></ul>` })}`}`;
}, "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/offres/surface/[surface].astro", void 0);

const $$file = "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/offres/surface/[surface].astro";
const $$url = "/offres/surface/[surface]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$surface,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
