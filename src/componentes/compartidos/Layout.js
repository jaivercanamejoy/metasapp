import React from 'react';
import Encabezado from './Encabezado';
import Pie from './Pie';
import Principal from './Principal';
import { Outlet } from 'react-router-dom';

function Layout() {
    return ( 
        <React.Fragment>
        <Encabezado></Encabezado>
        <Principal>
            <Outlet></Outlet>
        </Principal>
        <Pie></Pie>
        </React.Fragment>
     );
}

export default Layout;