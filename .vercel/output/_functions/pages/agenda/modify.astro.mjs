import { c as createComponent, a as createAstro, r as renderTemplate } from '../../chunks/astro/server_CqvDRsrL.mjs';
import 'piccolore';
import 'clsx';
import PocketBase from 'pocketbase';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getOneEvent(id) {
  try {
    const event = await pb.collection("events").getOne(id);
    event.img = pb.files.getURL(event, event.imgUrl);
    event.formattedDate = formatDate(event.date);
    return event;
  } catch (error) {
    return null;
  }
}
const $$Modify = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Modify;
  new PocketBase("http://127.0.0.1:8090");
  const { id } = Astro2.params;
  let event = await getOneEvent(id);
  if (!event) {
    console.error(`Event with id ${id} not found`);
    return Astro2.redirect("/agenda");
  }
  return renderTemplate``;
}, "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/agenda/modify.astro", void 0);

const $$file = "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/agenda/modify.astro";
const $$url = "/agenda/modify";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Modify,
    file: $$file,
    getOneEvent,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
