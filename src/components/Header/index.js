import * as C from './styles';
import { useNavigate, Link } from 'react-router-dom';

export const Header = () => {

  const navigate = useNavigate(); 

  const toThePage = ()  => {
    console.log()
  } 

  return ( 
  <C.Container>
    
    <nav>
      <span onClick={()=> navigate('/')}>Home</span>
      <span onClick={()=> navigate('/planets')}>Planets</span> 
      <span onClick={()=> navigate('/films')}>Films</span>
      <span onClick={()=> navigate('/species')}>Species</span>
      <span onClick={()=> navigate('/vehicles')}>Vehicles</span>
      <span onClick={()=> navigate('/starships')}>Starships</span>
    </nav>
     <hr/>
    </C.Container>
  
  )
}