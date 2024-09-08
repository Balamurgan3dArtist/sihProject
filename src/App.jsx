import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidenavbar } from "./components/Sidenavbar";
import { Home } from "./components/Home"; // Ensure correct case (Home instead of home)
import { Search } from "./components/Search";
import Product_detail from "./components/Product_detail"; // Use default import
import { Community } from "./components/Community";
import { Profile } from "./components/Profile";
import { Addproduct } from "./components/Addproduct";
import { Product } from "./components/Product";
import { Analytics } from "./components/Analytics";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidenavbar />
        <div className="ml-5 flex-1 p-4 overflow-y-auto h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Addproduct" element={<Addproduct />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/product/:productId" element={<Product_detail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
