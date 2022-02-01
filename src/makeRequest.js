import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
 


//"https://swapi.dev/api/people"
 

const SWApiBase = 'https://swapi.dev/api/';

//const SWApiBase2 = `https://swapi.dev/api/${who}/?page=${pNum}`;


const basicFetch = async (endpoint)=> {
  const req = await fetch(`${SWApiBase}${endpoint}`);
  const json = await req.json();
  return json;
}
 
//'https://swapi.dev/api/people/?page=2'



export default {

  nextPage: async (props) => {
    return [
      {
        title: 'People',
        items: await basicFetch(`people/?page=2`)
      }   
    ]
    },
 

  getPeople: async () => {
    return [
      {
        title: 'People',
        items: await basicFetch(`people`)
      }
    ]
    },

  getPlanets: async () => {
        return [ 
      {
        slug: 'planets',
        title: 'Planets',
        items: await basicFetch(`planets`)
        
      }
    ]
    },
    getFilms: async () => {
      return [ 
      {
        slug: 'films',
        title: 'Films',
        items: await basicFetch(`films`)
      }
    ]
    },
    getSpecies: async () => {
      return [ 
      {
        slug: 'species',
        title: 'Species',
        items: await basicFetch(`species`)
      }
    ]
  },

      getVehicles: async () => {
        return [ 
      {
        slug: 'vehicles',
        title: 'Vehicles',
        items: await basicFetch(`vehicles`)
      }
    ]
  },
  getStarships: async () => {
    return [ 
      {
        slug: 'starships',
        title: 'Starships',
        items: await basicFetch(`starships`)
      }
    ]
  }
}