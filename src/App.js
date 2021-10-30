// import logo from './logo.svg';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
