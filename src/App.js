import './sass/styles';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';


import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";
import Footer from "./components/layout/Footer";

library.add(fab);

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header className="App-header">
        <NavBar/>
        <div className="container">
          <Dashboard />
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
