import BottomLinks from "./components/BottomLinks";
import Footer from "./components/Footer";
import MidSection from "./components/MidSection";
import Navbar from "./components/Navbar";
import TopSection from "./components/TopSection";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <TopSection />
          <MidSection />
        </main>
        <Footer />
        <BottomLinks />
      </div>
    </Router>
  );
}

export default App;
