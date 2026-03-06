import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CqvDRsrL.mjs';
import 'piccolore';
import { e as allMaisonsFavori, $ as $$Layout } from '../chunks/backend_CCTd2ZZY.mjs';
import { $ as $$OffreCard } from '../chunks/OffreCard_B_kPhnpQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const favoris = await allMaisonsFavori();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Accueil" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Accueil</h1> <h2>Bienvenue sur mon site !</h2> <section> <h3 class="text-2xl font-bold my-4">Mes maisons favorites</h3> <div class="flex overflow-x-auto gap-4 p-4 scrollbar-hide"> ${favoris.length > 0 ? favoris.map((offre) => renderTemplate`<div class="flex-none w-80"> ${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })} </div>`) : renderTemplate`<p>Aucune maison favorite pour le moment.</p>`} </div> </section> ` })}`;
}, "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/index.astro", void 0);

const $$file = "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
