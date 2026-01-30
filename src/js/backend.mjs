import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

import PocketBase from 'pocketbase';
const db = new PocketBase('http://127.0.0.1:8090');

export async function allMaisons() {
const records = await pb.collection('maison').getFullList() ;
return records ;
}


//Q11
export async function OneID(id) {
    return await pb.collection('maison').getOne(id);
}

//Q12
export async function allMaisonsFavori(){
    return await pb.collection('maison').getFullList({filter: 'favorited = true'});
}

//Q13
export async function allMaisonsSorted(){
    return await pb.collection('Maison').getFullList({sort: '-created'});
}

//Q14
export async function bysurface(x){
    return await pb.collection('maison').getFullList({filter: `Superficie > ${x}`});
}

//Q15
export async function surfaceORprice(s,p){
    return await pb.collection('maison').getFullList({filter: `Superficie > ${s} || Prix <= ${p}`});
}

//Q19
export async function AgentIDfromMaison(id){
    const record = await pb.collection('maison').getOne(id);
    const agentID = record.Agent ;
    return await pb.collection('agent').getOne(agentID);
}




export async function getOffres() {
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

export async function getImageUrl(record, recordImage) {
    return db.files.getURL(record, recordImage);
}
