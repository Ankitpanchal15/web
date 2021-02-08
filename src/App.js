import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Component/Home';
import Service from './Component/Service';
import Expertises from './Component/Expertises';
import Blog from './Component/Blog';
import Contact from './Component/Contact';




function App() {
 
  return (
      <>
     <BrowserRouter>
        <Header /> 
       
        <Switch>
          <Route exact  path="/" component={Home}  />           
          <Route path="/service" component={Service} />
          <Route path="/expertises" component={Expertises} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} /> 
          </Switch>
        
        <Footer />
    </BrowserRouter>
      </>
  )
}

export default App;
