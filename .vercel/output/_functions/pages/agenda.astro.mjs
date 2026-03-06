import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_CqvDRsrL.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Agenda = createComponent(($$result, $$props, $$slots) => {
  const events = [
    {
      title: "Conf\xE9rence sur les astres",
      date: "Lundi 12 Juillet",
      favori: true
    },
    {
      title: "Atelier sur les \xE9toiles",
      date: "Mardi 13 Juillet",
      favori: false
    }
  ];
  return renderTemplate`${events.map((event) => renderTemplate`${maybeRenderHead()}<ul><li>${event.title} - ${event.date}</li></ul>`)}<!-- <Layout title="Agenda">
    <h1>Event Agenda</h1>
    <ul>
        {
            events.map((ev) => (
                <EventCard event={ev} />
            ))
        }
    </ul>
</Layout> --><!-- TODO -->`;
}, "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/agenda.astro", void 0);

const $$file = "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/pages/agenda.astro";
const $$url = "/agenda";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Agenda,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
