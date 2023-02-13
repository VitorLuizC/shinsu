import { Route, BrowserRouter } from 'react-router-dom';
import Logo from './pages/logo/App';
import SolarSystem from './pages/solar-system/App';
import Clock from './pages/clock/App';
import Bubbles from './pages/bubbles/App';
import Breakout from './pages/breakout/Breakout';

function App() {
  return (
    <BrowserRouter>
      <Route path="/logo" component={Logo} />
      <Route path="/bubbles" component={Bubbles} />
      <Route path="/solar-system" component={SolarSystem} />
      <Route path="/clock" component={Clock} />
      <Route path="/breakout" component={Breakout} />
      {/* <Redirect exact to="/logo" from="/" /> */}
    </BrowserRouter>
  );
}

export default App
