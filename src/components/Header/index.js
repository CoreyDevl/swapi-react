import * as C from './styles';
import { Link } from 'react-router-dom';

export const Header = () => {

   


  return ( 
  <C.Container>
    
    <nav>
      <Link id="navbar" to="/" >Home</Link>
      <Link id="navbar" to="/planets">Planets</Link> 
      <Link id="navbar" to="/films">Films</Link>
      <Link id="navbar" to="/species">Species</Link>
      <Link id="navbar" to="/vehicles">Vehicles</Link>
      <Link id="navbar" to="/starships">Starships</Link>
    </nav>
     <hr/>
    </C.Container>
  
  )
}