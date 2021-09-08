
import './App.css';
import Layout from './components/layout/layout';
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from './components/initialPage/dashboard';

function App() {
  return (
    <div className="App">
      <Router>
          <Dashboard />
      </Router>
    </div>
  );
}

export default App;
