//export const makeRequest = (urlParam) => {
//  return fetch(`https://swapi.dev/api/${urlParam}`)
//}

const SWApiBase = 'https://swapi.dev/api/';

const basicFetch = async (endpoint)=> {
  const req = await fetch(`${SWApiBase}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'people',
        title: 'People',
        items: await basicFetch(`people`)
      },
      {
        slug: 'planets',
        title: 'Planets',
        items: await basicFetch(`planets`)
      },
      {
        slug: 'films',
        title: 'Films',
        items: await basicFetch(`films`)
      },
      {
        slug: 'species',
        title: 'Species',
        items: await basicFetch(`species`)
      },
      {
        slug: 'vehicles',
        title: 'Vehicles',
        items: await basicFetch(`vehicles`)
      },
      {
        slug: 'starships',
        title: 'Starships',
        items: await basicFetch(`starships`)
      },
    ];
  }
}