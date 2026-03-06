import { c as createComponent, a as createAstro, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderScript } from './astro/server_CqvDRsrL.mjs';
import 'piccolore';
import { h as getImageUrl } from './backend_CCTd2ZZY.mjs';
import { $ as $$Image } from './_astro_assets_DpKhX01h.mjs';

const $$Astro$1 = createAstro();
const $$PbImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PbImage;
  const { record, recordImage } = Astro2.props;
  const imageURL = await getImageUrl(record, recordImage);
  console.log(imageURL);
  return renderTemplate`${imageURL && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": imageURL, "alt": record.nomMaison || "Image", "width": 400, "height": 400 })}`}`;
}, "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/components/PbImage.astro", void 0);

const $$Astro = createAstro();
const $$OffreCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OffreCard;
  const { offre } = Astro2.props;
  console.log(offre);
  return renderTemplate`${maybeRenderHead()}<div class="offre relative border p-4 rounded-lg shadow-md"> <h2 class="text-xl font-bold">${offre.nomMaison}</h2> <p>${offre.prix}€</p> ${renderComponent($$result, "PbImage", $$PbImage, { "record": offre, "recordImage": offre.Image })} <a${addAttribute(`/offres/${offre.id}`, "href")} class="block mt-2 text-blue-500 hover:underline">Voir plus</a> <button class="favoriteButton absolute bottom-0 left-0 p-2 text-white rounded-br-lg"${addAttribute(JSON.stringify(offre), "data-offre")}> <img id="favorite-icon"${addAttribute(offre.favori ? "/favorite_filled.png" : "/favorite.png", "src")} alt="Favorite Icon" class="w-6 h-6"> </button> </div> ${renderScript($$result, "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/components/OffreCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/components/OffreCard.astro", void 0);

export { $$OffreCard as $ };
