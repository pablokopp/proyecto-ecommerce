import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Context
import { CartProvider } from "./contexts/CartContext";
//Componentes
import Navbar from "./components/Navbar/Navbar";

//Views
import { Home } from "./views/Home";
import { QuienesSomos } from "./views/QuienesSomos";
import { Detail } from "./views/Detail";
import { Category } from "./views/Category";
import { CartView } from "./views/CartView";
import { CheckoutView } from "./views/CheckoutView";

function App() {
  return (
    <CartProvider>
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
          <Route path="/cart">
            <CartView />
          </Route>
          <Route path="/checkout">
            <CheckoutView />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
