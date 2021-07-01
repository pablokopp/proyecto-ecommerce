import './App.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

//Componentes
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer greeting='Bienvenido!'/>
        </Route>
        <Route path="/item/:id">
          <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
