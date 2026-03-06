import { c as createComponent, r as renderTemplate } from '../chunks/astro/server_CqvDRsrL.mjs';
import 'piccolore';
import 'clsx';
import PocketBase from 'pocketbase';
export { renderers } from '../renderers.mjs';

async function getArtistes() {
  let artistes = await pb.collection("artists").getFullList({
    expand: "events"
  });
  return artistes;
}
async function allArtists() {
  try {
    let artists = await pb.collection("artists").getFullList();
    return artists;
  } catch (error) {
    console.error("error allArtists: ", error);
    return null;
  }
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  new PocketBase("http://127.0.0.1:8090");
  await allArtists();
  return renderTemplate``;
}, "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/artistes/index.astro", void 0);

const $$file = "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/artistes/index.astro";
const $$url = "/artistes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    allArtists,
    default: $$Index,
    file: $$file,
    getArtistes,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
