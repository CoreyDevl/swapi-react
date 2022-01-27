import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { People } from './pages/People';
import { Planets } from './pages/Planets';
import { Films } from './pages/Films';
import { Species } from './pages/Species';
import { Vehicles } from './pages/Vehicles';
import { Starships } from './pages/Starships';



export const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<People />} /> 
      <Route path="/planets" element={<Planets />} />
      <Route path="/films" element={<Films />} />
      <Route path="/species" element={<Species />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/starships" element={<Starships />} />

    </Routes>
    
    </BrowserRouter>
  );
}