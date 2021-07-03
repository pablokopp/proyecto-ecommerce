import './App.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

//Componentes
import Navbar from './components/Navbar/Navbar';

//Views
import { Home } from './views/Home';
import { QuienesSomos } from './views/QuienesSomos';
import { Detail } from './views/Detail';
import { Category } from './views/Category';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category/:categoryName">
          <Category />
        </Route>
        <Route path="/item/:id">
          <Detail />
        </Route>
        <Route path="/quienesSomos">
          <QuienesSomos />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
