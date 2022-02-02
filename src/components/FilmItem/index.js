import * as C from './styles';
import React, {useState, useEffect} from 'react';
 


export const FilmItem = (item) => {

  const [isOpen, setIsOpen] = useState(false)
  
  
  return (
    <C.Container>
    
 <section>
 <h1 onClick={()=>setIsOpen(!isOpen)}>{item.items.title} </h1>
 </section>
 { isOpen &&
<div  id="allInfo">
<p><strong>Characters:</strong> {item.items.characters}</p>
<p><strong>Creation:</strong> {item.items.created}</p>
<p><strong>Director:</strong> {item.items.director}</p>
<p><strong>Producer:</strong> {item.items.producer}</p>
<p><strong>Episode id:</strong> {item.items.episode_id}</p>
<p><strong>Release Date:</strong> {item.items.release_date}</p>
<p><strong>Species:</strong> ...</p>
<p><strong>Starships:</strong> {item.items.starships}</p>
<p><strong>Vehicles:</strong> {item.items.vehicles}</p>
<p><strong>Opening crawl:</strong> ...</p>
  </div>
 }
 <hr />
    </C.Container>
  )
}