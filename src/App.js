import "./App.css";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="main">
      <h2>React CURD Application</h2>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Nav/>} />
          <Route path="create" element={<Create />} />
          <Route path="read" element={<Read />} />
          <Route path="update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
