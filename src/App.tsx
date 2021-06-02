import './context';
import { Route, BrowserRouter } from 'react-router-dom';
import Logo from 'animations/logo/Logo';

function App() {
  return (
    <BrowserRouter>
      <Route path="/logo" component={Logo} />
    </BrowserRouter>
  );
}

export default App;
