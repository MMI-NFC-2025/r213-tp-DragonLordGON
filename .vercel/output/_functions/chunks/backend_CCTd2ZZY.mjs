import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as createAstro, n as renderHead, b as renderComponent, o as renderSlot } from './astro/server_CqvDRsrL.mjs';
import 'piccolore';
import 'clsx';
/* empty css                        */
import PocketBase from 'pocketbase';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="w-full h-64 static bottom-0 bg-amber-500"> <a href="/">Accueil</a> <a>|</a> <a href="/offres">Offres </a> <a>(ceci est un footer)</a> <img class="overflow-hidden h-32 w-32" src="https://e7.pngegg.com/pngimages/88/948/png-clipart-shoe-shoes-brown-leather-thumbnail.png" alt="footer"> </nav>`;
}, "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/components/Footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-amber-500 p-4 flex justify-between items-center"> <div class="font-bold"> <a class="bg-yellow-600 p-2 rounded text-black" href="/">Accueil</a> <a class="bg-yellow-600 p-2 rounded text-black" href="/offres">Offres</a> </div> </nav>`;
}, "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { titre } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><title> ${titre} </title>${renderHead()}</head> <body class="bg-amber-50"> ${renderComponent($$result, "Header", $$Header, {})} <main class="justify-center items-center m-70 text-gray-800 font-bold"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/TzapM/Documents/GitHub/r213-tp-DragonLordGON/src/layouts/Layout.astro", void 0);

const pb = new PocketBase('http://127.0.0.1:8090') ;
const db = pb;


//Q11
async function OneID(id) {
    return await pb.collection('maison').getOne(id);
}

//Q12
async function allMaisonsFavori(){
    return await pb.collection('maison').getFullList({filter: 'favorited = true'});
}

//Q14
async function bysurface(x){
    return await pb.collection('maison').getFullList({filter: `Superficie > ${x}`});
}




async function getOffres() {
    try {
        let data = await db.collection('maison').getFullList({
            sort: '-created',
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des maisons', error);
        return [];
    }
}

async function getImageUrl(record, recordImage) {
    return db.files.getURL(record, recordImage);
}

async function addOffre(house) {
    try {
        await db.collection('maison').create(house);
        return {
            success: true,
            message: 'Offre ajoutée avec succès'
        };
    } catch (error) {
        console.error('Erreur lors de l\'ajout :', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant la maison'
        };
    }
}

async function getAgents() {
    try {
        return await db.collection('agent').getFullList();
    } catch (error) {
        console.error('Erreur lors de la récupération des agents :', error);
        return [];
    }
}

async function getOffresByAgentId(id) {
    try {
        return await db.collection('maison').getFullList({
            filter: `agent = "${id}"`,
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des offres de l\'agent :', error);
        return [];
    }
}

async function filterByPrix(min, max) {
    try {
        return await db.collection('maison').getFullList({
            filter: `prix >= ${min} && prix <= ${max}`,
            sort: '-created',
        });
    } catch (error) {
        console.error("Erreur filtrage :", error);
        return [];
    }
}

export { $$Layout as $, OneID as O, getAgents as a, addOffre as b, bysurface as c, getOffres as d, allMaisonsFavori as e, filterByPrix as f, getOffresByAgentId as g, getImageUrl as h };
