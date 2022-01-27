import * as C from './styles';
import { Theme } from '../../components/Theme';


export const People = () => {

function makeRequest(urlParam) {
    return fetch(`https://swapi.dev/api/${urlParam}`) 
} 


  return(
    <Theme>
      <C.Container>
        <h1>People</h1>
      
      </C.Container>
    </Theme>
  )
}