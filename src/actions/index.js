import {ADD_ITEM_TO_LIST, DELETE_ITEM_FROM_LIST, UPDATE_ITEM_IN_THE_LIST} from '../constant';

export const AddItemToList = (productCode, price) =>{
  const action = {
    type:ADD_ITEM_TO_LIST,
    productCode,
    price
  }

  console.log(action);
  return action;
}

export const UpdateItemInTheList = (productCode, operType) =>{
  const action = {
    type: UPDATE_ITEM_IN_THE_LIST,
    productCode,
    operType
  }

  return action;
}


export const DeleteItemFromList = (productCode) =>{
  const action = {
    type:DELETE_ITEM_FROM_LIST,
    productCode
  }

  console.log(action);
  return action;
}
