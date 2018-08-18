import React, { Component } from 'react';
import {connect} from 'react-redux';
import {AddItemToList} from '../actions';


class ContentOfProducts extends Component {
  constructor(props) {
      super(props);
  }

  AddToBasketClicked(productCode, price) {
    this.props.AddItemToList(productCode, price);
  }

  render(){
    const productList = this.props.productList;
  	const productDetailList = productList.map((menu) =>
                      <div className="track">
                        <table>
            							<tr>
            							  <td><img className="track-img"
                                src={require('../img/' + menu.Logo)}
                                onClick = {() => this.AddToBasketClicked(menu.ProductCode, menu.Price)} />
                            </td>
            							</tr>
            							<tr>
            							  <td><p className="tract-text">{menu.ProductCode}</p></td>
            							</tr>
            							<tr>
            							  <td><p className="tract-text">{menu.Price} TRY </p></td>
            							</tr>
                        </table>
                      </div>
                    );
  	return (
  		<div>{productDetailList}</div>
  	);
  }
}

function mapStateToProps(state){
    return {
      itemList:state
    }
}

export default connect(mapStateToProps, {AddItemToList})(ContentOfProducts);
