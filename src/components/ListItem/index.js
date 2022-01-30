import * as C from './styles';
import React from 'react';


export const ListItem = (item) => {
  const dataPeople = item.items.items.results;
 
  return (
    <C.Container>
    
 <section>
 {dataPeople.map((item, key) =>(
   <p key= {key}>{item.name}</p>
 ))}
 </section>
    </C.Container>
  )
}