import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <nav className="navbar navbar-dark bg-primary fixed-bottom">
      <Link className="navbar-brand" to="/">
        &copy; {new Date().getFullYear()}  Makozi
      </Link>
    </nav>
  );
}
