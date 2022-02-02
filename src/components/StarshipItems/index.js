import * as C from './styles';
import React, {useState, useEffect} from 'react';
 


export const StarshipItems = (item) => {

  const [isOpen, setIsOpen] = useState(false)
 
  
  return (
    <C.Container>
    
 <section>
 <h1 onClick={()=>setIsOpen(!isOpen)}>{item.items.name} </h1>
 </section>
 { isOpen &&
<div  id="allInfo">
<p><strong>Cost in Credits:</strong> {item.items.cost_in_credits}</p>
<p><strong>Cargo Capacity:</strong> {item.items.cargo_capacity}</p>
<p><strong>Consumables:</strong> {item.items.consumables}</p>
<p><strong>Crew:</strong> {item.items.crew}</p>
<p><strong>Hyperdrive Rating:</strong> {item.items.hyperdrive_rating}</p>
<p><strong>Length:</strong> {item.items.length}</p>
<p><strong>Manufacturer:</strong> {item.items.manufacturer}</p>
<p><strong>Max Atmosphering Speed:</strong> {item.items.max_atmosphering_speed}</p>
<p><strong>Model:</strong> {item.items.model}</p>
<p><strong>Passengers:</strong> {item.items.passengers}</p>
<p><strong>Pilots:</strong> {item.items.pilots}</p>
<p><strong>Starship Class:</strong> {item.items.starship_class}</p>
<p><strong>Films:</strong> {item.items.films}</p>
<p><strong>MGLT:</strong> {item.items.MGLT}</p>
  </div>
 }
 <hr />
    </C.Container>
  )
}