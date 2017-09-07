import React, { Component, PropTypes } from 'react'
import { Menu, Segment, Label } from 'semantic-ui-react'

export default class Header extends Component {

  constructor(props) {
      super(props);
      this.state = {
        activeItem : "Accueil"
      };
      this.handleItemClick = this.handleItemClick.bind(this);
    }

  handleItemClick(e){
    this.setState({activeItem : e.target.text});
    this.props.setRouter(e.target.text);
  }

  render() {
    const { activeItem } = this.state
    return (
      <Menu attached='top' pointing size='large' inverted>
        <Menu.Item name='OlivierLB' disabled/>
        <Menu.Item name='Accueil' active={activeItem === 'Accueil'} onClick={this.handleItemClick}/>
        <Menu.Item name='Github' active={activeItem === 'Github'} onClick={this.handleItemClick}/>
        <Menu.Item name='Réalisations'active={activeItem === 'Realisations'} onClick={this.handleItemClick}/>
        <Menu.Menu position='right'>
          <Menu.Item icon={'privacy'} name='Login'active={activeItem === 'Login'} onClick={this.handleItemClick}/>
        </Menu.Menu>
      </Menu>
    );
  }
}

Header.propTypes = {
  setRouter: PropTypes.func
}
