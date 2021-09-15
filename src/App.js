import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import LoanProcessing from "./pages/LoanProcessing";
import GoldLoan from "./pages/GoldLoan";
import AgriLoan from "./pages/AgriLoan";
import BusinessLoan from "./pages/BusinessLoan";
import CommPropLoan from "./pages/CommPropLoan";
import EduLoan from "./pages/EduLoan";
import HomeLoan from "./pages/GoldLoan";
import LoanAgnstProp from "./pages/LoanAgnstProp";
import PersonalLoan from "./pages/PersonalLoan";
import VehicleLoan from "./pages/VehicleLoan";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/query" />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/partners" component={Partners} />
          <Route path="/loan-processing" component={LoanProcessing} />
          <Route path="/gold-loan" component={GoldLoan} />
          <Route path="/agri-loan" component={AgriLoan} />
          <Route path="/business-loan" component={BusinessLoan} />
          <Route path="/commercial-loan" component={CommPropLoan} />
          <Route path="/education-loan" component={EduLoan} />
          <Route path="/home-loan" component={HomeLoan} />
          <Route path="/loan-against-property" component={LoanAgnstProp} />
          <Route path="/personal-loan" component={PersonalLoan} />
          <Route path="/vehicle-loan" component={VehicleLoan} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
