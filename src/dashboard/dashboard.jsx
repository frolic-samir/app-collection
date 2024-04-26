import { NavLink } from "react-router-dom";

import "./dashboard.css";

const MainDashboard = () => {
  return (
    <>
      <div className="main-dashboard">
        <div className="link-container">
          <NavLink className="link" to="calc">
            Calculator
          </NavLink>

          <NavLink className="link" to="todo">
            ToDo
          </NavLink>

          <NavLink className="link" to="moviesnu">
            Netflix-clone
          </NavLink>
        </div>
      </div>
      <footer className="footer">Work with Sam &copy;2020</footer>
    </>
  );
};

export default MainDashboard;
