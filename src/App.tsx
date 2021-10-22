import 'context';
import { Route, BrowserRouter } from 'react-router-dom';
import Logo from 'animations/logo/App';
import SolarSystem from 'animations/solar-system/App';
import Order from 'experiments/order/Order';
import Clock from 'animations/clock/App';
import Bubbles from 'animations/bubbles/App';

function App() {
  return (
    <BrowserRouter>
      <Route path="/animations/logo" component={Logo} />
      <Route path="/animations/bubbles" component={Bubbles} />
      <Route path="/animations/solar-system" component={SolarSystem} />
      <Route path="/animations/clock" component={Clock} />
      <Route path="/experiments/order" component={Order} />
    </BrowserRouter>
  );
}

export default App;
