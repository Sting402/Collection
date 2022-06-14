// /src/components.js

// import React from 'react';
import { Link } from 'react-router-dom';

import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';


 function BasicBreadcrumbs() {
  return (
    <div >
      <Breadcrumbs className="breadcrumb">
        <Link to ="/Waterfallgrid">
          Collection
        </Link>
        <Link to ="/PDetails">
          Details
        </Link>
      </Breadcrumbs>
    </div>
  );
}
export default BasicBreadcrumbs











// const Navbar = () => {
//   return (
      

    
    // <nav className="breadcrumb">
    //     <ul>
    //       <li>
    //         <Link className="nav-link" to="/Waterfallgrid">
    //           Collection
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="nav-link" to="/PDetails">

    //           Details
    //         </Link>
    //       </li>
    //     </ul>
    // </nav>
//   );
// };

// export { Navbar };