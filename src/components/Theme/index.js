import * as C from './styles';
import { ReactNode } from 'react';
import { Header } from '../Header';

export const Theme = ({children}) => {
  return(
    <C.Container>
      
        <Header />
        
          <C.Page>
            {children}
          </C.Page>
        
     
    </C.Container>
  )
}