import './sass/styles';
import 'bootstrap/dist/css/bootstrap.min.css';


import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
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
