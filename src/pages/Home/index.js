import * as C from './styles';
import React, { useEffect, useState } from 'react';
import { Theme } from '../../components/Theme';
import axios from 'axios'; 


export const Home = () => {
 
  
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
      
      <C.Container>
      <h1>HOME PAGE</h1>
       
       
      </C.Container>
      

      {document.length <=0 &&
    <div className="loading">
      <h2>(  LOADING  )</h2>
      <img  src="https://recomendacao.reedalcantara.com.br/client/config/feicon/2021/loading.gif" alt="carregando"/>
    </div>
    }
    </Theme>
  )
}