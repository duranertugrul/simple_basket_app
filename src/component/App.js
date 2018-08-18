import React, { Component } from 'react';
import {connect} from 'react-redux';
import {AddItemToList, DeleteItemFromList} from '../actions';
import '../App.css';

import LeftMenu from './LeftMenu';
import ContentOfProducts from './ContentOfProducts';
import BasketList from './BasketList.js'
import productList from './sample.json';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedCategory : null,
      productList : null,
      orderList: null
		};
	}

  setCategory = (selectedItem) => {
    const productArray =	 productList.ProductList.filter(function(pl){
    														return (pl.Categories === selectedItem);});

    this.setState({
      selectedCategory :selectedItem
    });
  };

	render() {
    const menuCategories = ['Çorba Çeşitleri', 'Ara Sıcaklar', 'Kebaplar', 'İçecekler','Tatlılar'];
    let selectedCategory = this.state.selectedCategory;

    if (selectedCategory == null)
    {
       selectedCategory = menuCategories[0];
    }

    const productArray =	 productList.ProductList.filter(function(pl){
    														return (pl.Categories === selectedCategory);});

		return (
				<table>
					<tr>
						<td valign='top' className='left-menu'><LeftMenu menuCategories ={menuCategories}
                  onMenuItemClicked = {this.setCategory}/>
                  <BasketList />
						</td>
						<td valign='top'><ContentOfProducts productList = {productArray} />
						</td>
					</tr>
				</table>
				);
	}
}

export default App;
