import * as C from './styles';
import React, {useState, useEffect} from 'react';
 


export const PlanetItems = (item) => {

  const [isOpen, setIsOpen] = useState(false)
  
  
  return (
    <C.Container>
    
 <section>
 <h1 onClick={()=>setIsOpen(!isOpen)}>{item.items.name} </h1>
 </section>
 { isOpen &&
<div  id="allInfo">
<p><strong>Climate:</strong> {item.items.climate}</p>
<p><strong>Diameter:</strong> {item.items.diameter}</p>
<p><strong>Gravity:</strong> {item.items.gravity}</p>
<p><strong>Orbital Period:</strong> {item.items.orbital_period}</p>
<p><strong>Population:</strong> {item.items.population}</p>
<p><strong>Residents:</strong> {item.items.residents}</p>
<p><strong>Rotation Period:</strong> {item.items.rotation_period}</p>
<p><strong>Surface Water:</strong> {item.items.surface_water}</p>
<p><strong>Terrain:</strong> {item.items.terrain}</p>
  </div>
 }
 <hr />
    </C.Container>
  )
}