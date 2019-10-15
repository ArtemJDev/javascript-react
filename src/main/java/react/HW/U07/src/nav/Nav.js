import React from '../../node_modules/react';
import './Nav.css';

class Nav extends React.Component {
  render() {
      let nav = this.props.nav;
  return (
   <nav>
       <ul>
       {Object.keys(nav).map(elem => {
           return <li> <a href="{nav[elem]}">{elem}</a></li>;
       })}
       </ul>
       {/* Hello from Nav + {nav.map(elem => {
           return <li>{elem}</li>;
       })} */}
   </nav>
  );
}
}

export default Nav;
