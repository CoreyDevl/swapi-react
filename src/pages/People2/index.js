import * as C from './styles';
import React, { useEffect, useState } from 'react';
import makeRequest from '../../makeRequest';
import { Theme } from '../../components/Theme';
import { ListItem2 } from '../../components/ListItem';
import { Link, useParams } from 'react-router-dom';
 


export const People = () => {
  
  const [starList, setStarList] = useState([]);
  const [cleanList, setCleanList] = useState([]);
  

useEffect(()=>{
  const loadAll = async () => {
    //pegando a listagem global 
    const list = await makeRequest.getPeople();
    
    let cleanList = list[0].items;
   
    setStarList(list);
    setCleanList(cleanList);
    
  }
  loadAll();
},[])


 const nextPage=( )=>{
   

 }
 const prevPage=()=>{
 }
  return(
    <Theme>
      <C.Container>
      <h1>People</h1>
       
      <p>Total: {cleanList.count}</p>
        {cleanList.next !== null && 
        <Link to="/people2">next</Link>
        }
        {cleanList.previous !== null && 
        <Link to="/">prev</Link>
        }
        <section>
          {starList.map((item, key)=>(
            
            <ListItem key={key} items={item} />

          ))}
        </section>
      </C.Container>
    </Theme>
  )
}