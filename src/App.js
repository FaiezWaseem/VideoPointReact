import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/Darkmode.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import Watch from './pages/Video'
import Auth from './pages/Auth'
function App() {
  document.addEventListener( "contextmenu", function(e) {
    e.preventDefault()
  });
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route index exact element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/watch/:video_Key/" exact element={<Watch />} />
        </Routes>
        <Routes>
          <Route path="/Authentication/:userName/" exact element={<Auth />} />
        </Routes>
        <Routes>
          <Route path="/Authentication/" exact element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
