import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
