import { c as createComponent, a as createAstro, e as renderScript, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CqvDRsrL.mjs';
import 'piccolore';
import { d as getOffres, f as filterByPrix, $ as $$Layout } from '../chunks/backend_CCTd2ZZY.mjs';
import { $ as $$OffreCard } from '../chunks/OffreCard_B_kPhnpQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const offres = await getOffres();
  console.log(offres);
  let Offres = [];
  let message = "";
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const minPrix = parseInt(data.get("minPrix"));
    const maxPrix = parseInt(data.get("maxPrix"));
    if (minPrix >= 0 && maxPrix > minPrix) {
      Offres = await filterByPrix(minPrix, maxPrix);
      message = Offres.length === 0 ? `Pas d'offres entre ${minPrix}\u20AC et ${maxPrix}\u20AC` : `Liste des offres entre ${minPrix}\u20AC et ${maxPrix}\u20AC`;
    } else {
      message = "Veuillez entrer des valeurs valides pour le prix.";
      Offres = await getOffres();
    }
  } else {
    Offres = await getOffres();
  }
  return renderTemplate`${renderScript($$result, "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/offres/index.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "Layout", $$Layout, { "titre": "Offres" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>offres</h1> <form action="/offres" method="POST" class="mb-8 flex gap-4 items-end bg-gray-50 p-4 rounded-lg"> <div> <label class="block text-sm">Prix Min</label> <input type="number" name="minPrix" placeholder="0" class="border p-2 rounded"> </div> <div> <label class="block text-sm">Prix Max</label> <input type="number" name="maxPrix" placeholder="1000000" class="border p-2 rounded"> </div> <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
Filtrer par prix
</button> <a href="/offres" class="text-sm text-gray-500 underline mb-2">Réinitialiser</a> </form> ${message && renderTemplate`<p class="mb-4 font-semibold">${message}</p>`}<a href="offres/surface/80">surface</a> <br> <button id="favori-button" class="bg-slate-600 rounded-lg text-white p-2">Afficher les favoris</button> <br>  <ul> ${Offres.map((offre) => renderTemplate`${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })}`)} </ul> ` })}`;
}, "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/offres/index.astro", void 0);

const $$file = "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/offres/index.astro";
const $$url = "/offres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Index,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
