import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import { Link, NavLink, Route } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      Header

      <p><Link to="/todos">TODO</Link></p>
      <p><Link to="/albums">ALBUM</Link></p>

      <p><NavLink to="/todos" activeClassName="active-name">TODO</NavLink></p>
      <p><NavLink to="/albums">ALBUM</NavLink></p>

      <Route path="/todos" component={TodoFeature}></Route>
      <Route path="/albums" component={AlbumFeature}></Route>
      Footer
    </div>
  );
}

export default App;
