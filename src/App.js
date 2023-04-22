import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import DetailPage from './features/Todo/pages/DetailPage';
import NotFound from './components/NotFound/index';
import { useEffect } from 'react';
import productApi from './api/categoryApi';
import CounterFeature from './features/Counter';
import Header from './components/Header/index';


function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10
      }
      const productList = await productApi.getAll(params);
      console.log(productList)
    }


    fetchProducts();
  }, []);
  return (
    <div className="App">
      <Header></Header>

      {/* <p><Link to="/todos">TODO</Link></p>
      <p><Link to="/albums">ALBUM</Link></p> */}

      

      {/* <Route path="/todos" component={TodoFeature}></Route>
      <Route path="/albums" component={AlbumFeature}></Route> */}

      <Switch>
        <Route path="/" component={CounterFeature} exact></Route>
        <Route path="/todos" component={TodoFeature} exact></Route>
        <Route path="/albums" component={AlbumFeature} exact></Route>

        <Route component={NotFound}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
