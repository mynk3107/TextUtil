import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [abc, setAbc] = useState("Enable Dark Mode")

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Enabled Dark Mode", "success");
      setAbc("Disable Dark Mode");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Enabled Light Mode", "success");
      setAbc("Enable Dark Mode");
    }

  }
  return (

    <>
      <Router>
        <Navbar home="Home" about="About" mode={mode} toggleMode={toggleMode} abc={abc} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
