import * as C from './styles';
import React, { useEffect, useState } from 'react';
import { Theme } from '../../components/Theme';
import { FilmItem } from '../../components/FilmItem';

import axios from 'axios';
 


export const Films = () => {
 
  
  let urlParam = `https://swapi.dev/api/films`;

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


  
  return(
    <Theme>
      { starList.length >0 &&
      <C.Container>
      <h1>Films</h1>
       
      <p><strong>Total:</strong> {counter}</p>
 
        <section>
        {starList.map((item, key, i)=>( 
            
           <FilmItem key={key} items={item} /> 
          ))}  
        </section>
    
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