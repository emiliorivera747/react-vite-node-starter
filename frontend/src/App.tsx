import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntakeForm from "@/pages/intake-form/IntakeForm";
import Home from "@/pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/intake-form" element={<IntakeForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
