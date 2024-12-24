
import "./App.css";
import Navbar from "./Components/Navbar";
import Functionbar from "./Components/Functionbar";
import CardList from "./Components/CardList";
import Registration from "./Components/Registration"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";


function App() {
  return (
    <>
      <Navbar />
      <Functionbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
