import { Route, BrowserRouter } from 'react-router-dom';
import Logo from 'animations/logo/Logo';
import SolarSystem from 'animations/solar-system/SolarSystem';
import Order from 'experiments/order/Order';
import Clock from 'animations/clock/Clock';

function App() {
  return (
    <BrowserRouter>
      <Route path="/animations/logo" component={Logo} />
      <Route path="/animations/solar-system" component={SolarSystem} />
      <Route path="/animations/clock" component={Clock} />
      <Route path="/experiments/order" component={Order} />
    </BrowserRouter>
  );
}

export default App;
