import { c as createComponent, a as createAstro, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CqvDRsrL.mjs';
import 'piccolore';
import { b as addOffre, $ as $$Layout } from '../../chunks/backend_CCTd2ZZY.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  let message = "";
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const response = await addOffre(formData);
      message = response.message;
    } catch (error) {
      message = "Erreur lors de l'envoi du formulaire.";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ajouter une offre" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-8 max-w-lg mx-auto"> <h1 class="text-2xl font-bold mb-4">Ajouter une offre</h1> ${message && renderTemplate`<p class="mb-4 p-3 bg-blue-100 text-blue-800 rounded">${message}</p>`} <form action="/offres/add" method="POST" enctype="multipart/form-data" class="flex flex-col gap-4"> <input type="text" name="nomMaison" placeholder="Nom de la maison" required class="w-full p-2 border border-gray-300 rounded-md"> <input type="number" name="prix" placeholder="Prix" class="w-full p-2 border border-gray-300 rounded-md"> <input type="number" name="nbSdb" placeholder="Nombre de salles de bain" class="w-full p-2 border border-gray-300 rounded-md"> <input type="number" name="nbChambres" placeholder="Nombre de chambres" class="w-full p-2 border border-gray-300 rounded-md"> <input type="number" name="surface" placeholder="Superficie" class="w-full p-2 border border-gray-300 rounded-md"> <input type="file" name="image" class="w-full"> <button type="submit" class="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition">
Ajouter
</button> </form> </div> ` })}`;
}, "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/offres/add.astro", void 0);

const $$file = "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/offres/add.astro";
const $$url = "/offres/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Add,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
