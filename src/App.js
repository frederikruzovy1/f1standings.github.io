import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <div className="container">
          <Dashboard />
        </div>
      </header>
    </div>
  );
}

export default App;
