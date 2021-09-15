import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact to="/" component={Home} />
          <Route to="/about" component={About} />
          <Route to="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
