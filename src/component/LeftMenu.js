import React, { Component } from 'react';

class LeftMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
                    menuCategories:this.props.menuCategories,
                    onMenuItemClicked: this.props.onMenuItemClicked
                  };
  }


  handleClick(menu) {
    this.state.onMenuItemClicked(menu);
  }

  render(){
    const menuHeaders = this.state.menuCategories;
  	const menuList = menuHeaders.map((menu) =>
        <div className="left-menu-item" onClick = {() => this.handleClick(menu)}>{menu}</div>
  			);

  	return (
      <div>
        <div className="left-menu-header">Kategoriler</div>
  		  <div>{menuList}</div>
      </div>
  	);
  }
}

export default LeftMenu;
