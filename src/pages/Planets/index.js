import * as C from './styles';
import React, { useEffect, useState } from 'react';
import { Theme } from '../../components/Theme';
import { PlanetItems } from '../../components/PlanetItems';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
 


export const Planets = () => {
 
  
  let urlParam = `https://swapi.dev/api/planets`;

  const [starList, setStarList] = useState([]);
  const [SWAPIBase, setSWAPIBase] = useState(urlParam) 
  const [prvPage, setPrevPage] = useState(urlParam)
  const [nxtPage, setNextPage] = useState(urlParam)
  const [counter, setCounter] = useState('')

  useEffect(()=>{ 
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
},[SWAPIBase])


 const nextPage=( )=>{
   
  setSWAPIBase(nxtPage)

 }
 const prevPage=()=>{
   
  setSWAPIBase(prvPage)
 }
  return(
    <Theme>
      <C.Container>
      <h1>Planets</h1>
       
      <p><strong>Total:</strong> {counter}</p>
        {prvPage !== null && 
        <button onClick={prevPage}>prev</button>
      }
      {nxtPage !== null && 
      <button onClick={nextPage}>next</button>
      }
        <section>
        {starList.map((item, key, i)=>( 
            
           <PlanetItems key={key} items={item} /> 
          ))}  
        </section>
        {prvPage !== null && 
        <button onClick={prevPage}>prev</button>
      }
      {nxtPage !== null && 
      <button onClick={nextPage}>next</button>
      }
      </C.Container>
    </Theme>
  )
}