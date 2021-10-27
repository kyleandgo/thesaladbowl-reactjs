import "./App.css";
import "./style.css";
import Topbar from "./components/Topbar";
import Banner from "./components/Banner";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Order from "./components/Order";

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Route exact path="/">
          <Banner />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
      </div>
    </Router>
  );
}

export default App;
