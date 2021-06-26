import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Produtos from './Produtos';
import Produto from './ProdutosDetalhe';
import Servicos from './Servicos';
import Servico from './ServicosDetalhe';
import Cadastro from './Cadastro';
import Login from './Login';
import Pagina404 from './404';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cadastro">
              <Cadastro />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/produtos">
              <Produtos />
            </Route>
            <Route path="/produtos/:id">
              <Produto />
            </Route>
            <Route exact path="/servicos">
              <Servicos />
            </Route>
            <Route path="/servicos/:id">
              <Servico />
            </Route>
            <Route>
              <Pagina404 />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
