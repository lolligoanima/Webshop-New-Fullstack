import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Column } from "./components/Column";
import { Row } from "./components/Row";
import { SiteHeader } from "./components/SiteHeader";
import { sampleProductsList } from "./assets/sampleProducts";
import { ProductCard } from "./components/ProductCard";
import { Main } from "./Pages/Main";
import { CheckOut } from "./Pages/Checkout";


function App() {
  return (
    <Router>
    <Column>
      <SiteHeader />
      <Routes>
        <Route path="/" element={< Main />} />
        <Route path="/check-out" element={< CheckOut />} />
      </Routes>
    </Column>
    </Router>
  );
}

export default App;
