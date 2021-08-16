import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/Header';
import Add from './pages/Add';
import Home from './pages/Home';
import SortedLessList from './components/linkList/SortedLessList'
import SortedMostList from './components/linkList/SortedMostList'
import "./index.css";

function App() {
  return (


    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/sortedLess">
          <SortedLessList />
        </Route>
        <Route path="/sortedMost">
          <SortedMostList />
        </Route>
        <Route />
      </Switch>
    </Router>


  );
}

export default App;
