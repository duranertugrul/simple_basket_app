import React, { Component } from 'react';
import './App.css';
import LeftMenu from './LeftMenu';
import ContentOfProducts from './ContentOfProducts';
import BasketList from './BasketList.js'
import productList from './sample.json';


function checkItemtExistsInBasket(productCode,  orderList){
  if (orderList){
    let newArray =  orderList.slice();
    let i;
    for( i=0; i <newArray.length;i++){
      if (newArray[i].productCode === productCode)
      {
        newArray[i].count++;
        return newArray;
      }
    }
  }
  return false;
}

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


  increaseQuantity = (productCode)=>{
    let updatedArray =  this.state.orderList.slice();
    let i;

    for( i=0; i < updatedArray.length;i++){
      if (updatedArray[i].productCode === productCode)
      {
        updatedArray[i].count++;
        break;
      }
    }

    this.setState({
      orderList : updatedArray
    });
  }

  decreaseQuantity = (productCode)=>{
    let updatedArray =  this.state.orderList.slice();
    let i;

    for( i=0; i < updatedArray.length;i++){
      if (updatedArray[i].productCode === productCode)
      {
        updatedArray[i].count--;
        if (updatedArray[i].count < 0)
        {
          updatedArray[i].count=0;
        }
        break;
      }
    }

    this.setState({
      orderList : updatedArray
    });
  }

  addToBasket = (productCode, price) =>{

    let newArray = this.state.orderList ? this.state.orderList.slice() : [];
    let newItem = {productCode, price, count: 1};
    let updatedArray = checkItemtExistsInBasket(productCode, this.state.orderList);

    if (updatedArray)
    {
        this.setState({
          orderList : updatedArray
        });
    }
    else {
      newArray.push(newItem);
      this.setState({
        orderList : newArray
      });
    }
  }

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
                  onMenuItemClicked= {this.setCategory}/>
                  <BasketList orderList={this.state.orderList}
                        onIncreaseQuantity = {this.increaseQuantity}
                        onDecreaseQuantity = {this.decreaseQuantity}
                              on />
						</td>
						<td valign='top'><ContentOfProducts productList = {productArray}
                            onAddToBasketClicked= {this.addToBasket}/>
						</td>
					</tr>
				</table>
				);
	}
}

export default App;
