import * as C from './styles';
import { Theme } from '../../components/Theme';


export const People = () => {

  fetch(`https://swapi.dev/api/people`) 
      .then(res => res.json())
      .then(res => {
         console.log(res)         
      
      })
  
  return(
    <Theme>
      <C.Container>
        <h1>People</h1>
      
      </C.Container>
    </Theme>
  )
}