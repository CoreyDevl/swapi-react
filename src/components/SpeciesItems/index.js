import * as C from './styles';
import React, {useState, useEffect} from 'react';
 


export const SpeciesItems = (item) => {

  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <C.Container>
    
 <section>
 <h1 onClick={()=>setIsOpen(!isOpen)}>{item.items.name} </h1>
 </section>
 { isOpen &&
<div  id="allInfo">
<p><strong>Average Height:</strong> {item.items.average_height}</p>
<p><strong>Average Lifespan:</strong> {item.items.average_lifespan}</p>
<p><strong>Classification:</strong> {item.items.classification}</p>
<p><strong>Designation:</strong> {item.items.designation}</p>
<p><strong>Eye Colors:</strong> {item.items.eye_colors}</p>
<p><strong>Skin Colors:</strong> {item.items.skin_colors}</p>
<p><strong>Hair_Colors:</strong> {item.items.hair_colors}</p>
<p><strong>Homeworld:</strong> {item.items.homeworld}</p>
<p><strong>Language:</strong> {item.items.language}</p>
<p><strong>People:</strong> {item.items.people}</p>
<p><strong>Films:</strong> {item.items.films}</p>
  </div>
 }
 <hr />
    </C.Container>
  )
}