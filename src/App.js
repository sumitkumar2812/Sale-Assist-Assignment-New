import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import Electronics from "./components/Electronics"
import Women from "./components/Women"
import Jewelery from "./components/Jewelery"
import Navbar from "./components/Navbar"
import './App.css'


function App() {
  return (
    <Router>
      <div>
      <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/electronic" component={Electronics}/>
            <Route path="/women" component={Women}/>
            <Route path="/jewelery" component={Jewelery}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
