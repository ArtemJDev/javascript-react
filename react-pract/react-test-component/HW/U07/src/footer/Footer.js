import React from '../../node_modules/react';

class Footer extends React.Component {
  render() {
  return (
      <footer>
            <h2>{this.props.title}</h2>
            <nav>
                <p>Phones : <b>{(this.props.cont).join(",  ")}</b></p>
                <p>Adress : <b>{(this.props.adress).join(",  ")}</b></p>
        </nav>
      </footer>
   

  );
}
}

export default Footer;
