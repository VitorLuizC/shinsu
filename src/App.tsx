import { Route, BrowserRouter } from 'react-router-dom';
import Logo from 'animations/logo/Logo';
import Order from 'experiments/order/Order';

function App() {
  return (
    <BrowserRouter>
      <Route path="/logo" component={Logo} />
      <Route path="/experiments/order" component={Order} />
    </BrowserRouter>
  );
}

export default App;
