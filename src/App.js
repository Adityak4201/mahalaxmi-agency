import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import LoanProcessing from "./pages/LoanProcessing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/partners" component={Partners} />
          <Route path="/loan-processing" component={LoanProcessing} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
