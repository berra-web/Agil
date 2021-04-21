import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Nav/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import FooterBottom from './components/Footer/FooterBottom';
import Jose from './pages/Jose';
import Behrad from './pages/Behrad';
import Mudassar from './pages/Mudassar';
import Simon from './pages/Simon';
import Rubin from './pages/Rubin';
import AgilGrupp from './components/Agil-Grupp';



function App() {
  return (
    <Router>
        <Header />
        <div className='App'>
        <Switch>
          <Route path='/Behrad' exact component={Behrad}/>
          <Route path='/Jose' component={Jose}/>
          <Route path='/Mudassar' component={Mudassar}/>
          <Route path='/Rubin' component={Rubin}/>
          <Route path='/Simon' component={Simon}/>
        </Switch>
        <AgilGrupp />
        <Footer />
        <FooterBottom/>
        </div>
      </Router>
  );
}

export default App;
