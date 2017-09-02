import React from 'react';
//import Button from 'coreui/lib/components/Button';
import Button from 'react-bootstrap/lib/Button';
import MenuItems from './MenuItems';


const Navbar = () =>(
  <div>
    <nav className = "navbar">
      <div className = "row nav-row">
        <div className = "col-xs-6 col-sm-6 col-md-9 col-lg-9">
          <div className = "nav-header">Nicholas Hotel</div>
        </div>
      </div>
    </nav>
    <aside className="off-canvas off-canvas-left" id="off-canvas-demo">
      <nav className = "sidebar-nav">
        <Button className="off-canvas-close" data-toggle="off-canvas" data-target="#off-canvas-demo">
          <span className="icon icon-close"></span>
        </Button>
        <MenuItems/>
      </nav>
    </aside>
    <nav className = "navbar-vertical">
      <MenuItems/>
    </nav>
  </div>
)

export default Navbar;
