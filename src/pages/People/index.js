import * as C from './styles';
import React, { useEffect, useState } from 'react';
import makeRequest from '../../makeRequest';
import { Theme } from '../../components/Theme';
import { ListItem } from '../../components/ListItem';

export const People = () => {

  const [starList, setStarList] = useState([]);

  useEffect(()=>{
   const loadAll = async () => {
    //pegando a listagem global 
    let list = await makeRequest.getHomeList();
    console.log(list)
    setStarList(list);
   }

   loadAll();
 },[])
  
  return(
    <Theme>
      <C.Container>
        <h1>People</h1>
        <section>
          {starList.map((item, key)=>(
            
            <ListItem key={key} title={item.title} items={item.items}/>

          ))}
        </section>
      </C.Container>
    </Theme>
  )
}