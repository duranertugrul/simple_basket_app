import React, { Component } from 'react';
import {UpdateItemInTheList} from '../actions';
import {connect} from 'react-redux';


class BasketList extends Component {
  constructor(props) {
		super(props);


	}

  increaseQuantity=(itemCode)=>{

    this.props.UpdateItemInTheList(itemCode, "INC");
  }

  decreaseQuantity=(itemCode)=>{
    this.props.UpdateItemInTheList(itemCode, "DEC");
  }

  render(){

    const orderList = this.props.orderList;
    let i=0;
    let totalAmount = 0;
    if (orderList){

      for( i=0; i <orderList.length;i++){

        totalAmount += orderList[i].price * orderList[i].count;
      }

    }

    let orderListDetail = orderList && orderList.map((orderItem) =>
        <div>
          <div >{orderItem.productCode} - {orderItem.price} TRY</div>
          <table>
              <tr>
                <td><div className="item-count" >{orderItem.count}&nbsp;&nbsp;</div></td>
                <td>
                  <table>
                    <tr>
                      <td><button  className="arrow-button"   onClick={() => this.increaseQuantity(orderItem.productCode)}>+</button></td>
                    </tr>
                    <tr>
                      <td><button   className="arrow-button"  onClick={() => this.decreaseQuantity(orderItem.productCode)}>-</button></td>
                    </tr>
                  </table>
                </td>
              </tr>
           </table>
        </div>
  			);




    return (
        <div>
          <hr/>
  				<table>
            <tr>
              <td valign='top' className='left-menu'>
                Sepet
              </td>
            </tr>

  					<tr>
  						<td valign='top' className='left-menu'>
                {orderList ? orderListDetail : 'Sepetimizde ürün bulunmamaktadır.' }
  						</td>
  					</tr>
            <tr>
              <td valign='top' className='left-menu'>
                {orderList ? 'Toplam Tutar :' + totalAmount + ' TRY': ''  }
              </td>
            </tr>
  				</table>
        </div>
				);
  }
}

function mapStateToProps(state){
    console.log('in mapStateToProps, state :', state);
    return {
      orderList:state
    }
}

export default connect(mapStateToProps, {UpdateItemInTheList})(BasketList);
