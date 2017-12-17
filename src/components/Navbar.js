import {Menu} from 'semantic-ui-react';
import React from 'react';
import {withRouter} from "react-router-dom";

class Navbar extends React.Component{
  constructor(props) {
    super(props);
  }

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => (
    this.setState({ activeItem: name })

  )

  render () {
    const { activeItem } = this.state;
    return (
      <div className = "menu">
      <Menu secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={() => this.setState({ activeItem: "home" })} href="#title" />
        <Menu.Item name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick} href = "#projects"/>
        <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
      </Menu>
      </div>
    )

  }

}

export default withRouter(Navbar);
