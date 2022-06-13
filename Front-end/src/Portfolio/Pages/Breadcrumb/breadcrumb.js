// /src/components.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="breadcrumb">
        <ul>
          <li>
            <Link className="nav-link" to="/Waterfallgrid">
              Collection
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/PDetails">
              Details
            </Link>
          </li>
        </ul>
    </nav>
  );
};

export { Navbar };