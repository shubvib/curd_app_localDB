import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/create">Create</Link>
            </li>
            <li>
              <Link to="/update">Update</Link>
            </li>
            <li>
              <Link to="/read">Read</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </>
    </div>
  );
}
