import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductListing from "./component/ProductListing";
import ProductDetails from "./component/ProductDetails";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
