import { BrowserRouter, Route, Routes } from "react-router-dom";

import Todo from "./todo/todo";
import Moviesnu from "./moviesnu/moviesnu";
import Calculator from "./calculator/calculator";
import MainDashboard from "./dashboard/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="/calc" element={<Calculator />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/moviesnu" element={<Moviesnu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
