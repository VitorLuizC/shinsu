import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Logo from './pages/logo/App';
import SolarSystem from './pages/solar-system/App';
import Clock from './pages/clock/App';
import Bubbles from './pages/bubbles/App';
import Breakout from './pages/breakout/Breakout';
import './context';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/logo" element={<Logo />} />
        <Route path="/bubbles" element={<Bubbles />} />
        <Route path="/solar-system" element={<SolarSystem />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/breakout" element={<Breakout />} />
        {/* <Redirect exact to="/logo" from="/" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
