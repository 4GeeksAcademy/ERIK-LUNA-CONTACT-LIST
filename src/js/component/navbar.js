import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="ml-auto">
        <Link to="/addcontact"> {/* Cambia la ruta a la que corresponda */}
          <button className="btn btn-warning">Add new Contact</button>
        </Link>
      </div>
    </nav>
  );
};
