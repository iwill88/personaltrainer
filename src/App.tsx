import "./index.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCredentials } from "./redux/slices/authSlice";
import Home from "./pages/Home";
import EbooksPage from "./pages/EbooksPage";
import EbooksDetail from "./pages/EbooksDetail";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import PlanesPage from "./pages/PlanesPage";
import P404 from "./pages/page404/P404";
import CartPage from "./pages/CartPage/CartPage";

function App() {
  const dispatch = useDispatch();
  // const user = JSON.parse(localStorage.getItem("user") || "{}");

  // useEffect(() => {
  //   dispatch(setCredentials(user));
  // }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/ebooks" element={<EbooksPage />} />
          <Route path="/ebooks/:ebookId" element={<EbooksDetail />} />
          <Route path="/planes/:planId" element={<PlanesPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<P404 />}></Route>
      </Routes>
    </>
  );
}

export default App;