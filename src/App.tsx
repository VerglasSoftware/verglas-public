import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import People from "@/pages/People";
import Outreach from "@/pages/Outreach";
import Press from "@/pages/Press";
import Post from "@/pages/Post";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/people" element={<People />} />
      <Route path="/outreach" element={<Outreach />} />
      <Route path="/press" element={<Press />} />
      <Route path="/press/:date/:slug" element={<Post />} />
    </Routes>
  );
}

export default App;
