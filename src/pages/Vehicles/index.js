import * as C from './styles';
import React, { useEffect, useState } from 'react';
import { Theme } from '../../components/Theme';
import { VehiclesItems } from '../../components/VehiclesItems';

import axios from 'axios';
 


export const Vehicles = () => {
 
  
  let urlParam = `https://swapi.dev/api/vehicles`;

  const [starList, setStarList] = useState([]);
  const [SWAPIBase, setSWAPIBase] = useState(urlParam) 
  const [prvPage, setPrevPage] = useState(urlParam)
  const [nxtPage, setNextPage] = useState(urlParam)
  const [counter, setCounter] = useState('')

  useEffect(()=>{ 
    setTimeout(()=>{

      const loadAll = async() => {
        
        axios.get(SWAPIBase)
        .then(list => {
          
          setStarList(list.data.results);
          setNextPage(list.data.next);
          setPrevPage(list.data.previous);
          setCounter(list.data.count);
          
        })
      }
      loadAll();
    }, 2000)
},[SWAPIBase])


 const nextPage=( )=>{
   
  setSWAPIBase(nxtPage)

 }
 const prevPage=()=>{
   
  setSWAPIBase(prvPage)
 }
  return(
    <Theme>
      { starList.length >0 &&
      <C.Container>
      <h1>Vehicles</h1>
       
      <p><strong>Total:</strong> {counter}</p>
        {prvPage !== null && 
        <button onClick={prevPage}>prev</button>
      }
      {nxtPage !== null && 
      <button onClick={nextPage}>next</button>
      }
        <section>
        {starList.map((item, key, i)=>( 
            
           <VehiclesItems key={key} items={item} /> 
          ))}  
        </section>
        {prvPage !== null && 
        <button onClick={prevPage}>prev</button>
      }
      {nxtPage !== null && 
      <button onClick={nextPage}>next</button>
      }
      </C.Container>
      }

      {starList.length <=0 &&
    <div className="loading">
      <h2>(  LOADING  )</h2>
      <img  src="https://recomendacao.reedalcantara.com.br/client/config/feicon/2021/loading.gif" alt="carregando"/>

    </div>
    }
    </Theme>
  )
}