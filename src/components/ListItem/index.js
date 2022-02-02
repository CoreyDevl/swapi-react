import * as C from './styles';
import React, {useState, useEffect} from 'react';
import { SpecieAnalizer } from '../SpecieAnalizer.js';


export const ListItem = (item) => {

  const [isOpen, setIsOpen] = useState(false)
  const [especies, setSpecies] = useState([]);
   
  
 useEffect(()=>{
   
   setSpecies(item.items.species)
   console.log(especies.toString())
 
 },[])
 
  return (
    <C.Container>
    
 <section>
 <h1 onClick={()=>setIsOpen(!isOpen)}>{item.items.name} </h1>
 </section>
 { isOpen &&
<div  id="allInfo">
<p><strong>Specie:</strong></p>  
<p><strong>Height:</strong> {item.items.height}</p>
<p><strong>Birth Year:</strong> {item.items.birth_year}</p>
<p><strong>Eye Color:</strong> {item.items.eye_color}</p>
<p><strong>Gender:</strong> {item.items.gender}</p>
<p><strong>Hair Color:</strong> {item.items.hair_color}</p>
<p><strong>Homeworld:</strong> {item.items.homeworld}</p>
<p><strong>Mass:</strong> {item.items.mass}</p>
<p><strong>Skin Color:</strong> {item.items.skin_color}</p>
<p><strong>Starships:</strong> {item.items.starships}</p>
<p><strong>Vehicles:</strong> {item.items.vehicles}</p>
 </div>
 }
 <hr />
    </C.Container>
  )
}