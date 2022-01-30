import * as C from './styles';
import { useEffect, useState } from 'react';
import makeRequest from '../../makeRequest';

export const ItemInfo = () => {

  const [starList, setStarList] = useState([]);
  

  useEffect(()=>{
   const loadAll = async () => {
    //pegando lista de People
    let list = await makeRequest.getPeople();
    setStarList(list);

   }

   loadAll();
 },[])

  return(
    <C.Container>
     <p>asdsa</p>
    
    </C.Container>
  )

}