import {ADD_ITEM_TO_LIST, DELETE_ITEM_FROM_LIST, UPDATE_ITEM_IN_THE_LIST} from '../constant';

const listItem = (action) => {
  let {productCode, price} = action;

  return{
    productCode,
    price,
    count:1
  }
}

const removeByProductCode = (state=[], productCode) =>{
  const itemList = state.filter(item => item.productCode !== productCode);
  return itemList;
}

const checkItemExists = (state=[], productCode) =>{
  const itemList = state.filter(item => item.productCode == productCode);
  return (itemList.length > 0);
}

const updateByProductCode = (state=[], productCode, type) =>{
  const itemList = state.slice();
  const itemUpdated = type === "INC" ? 1 : -1;
  var i;
  for( i=0; i < itemList.length;i++){
    if (itemList[i].productCode === productCode)
    {
      itemList[i].count = itemList[i].count + itemUpdated;
      if (itemList[i].count < 0)
      {
        itemList[i].count=0;
      }
      break;
    }
  }

  return itemList;
}

const listOperations = (state=[], action) => {
  let itemList = null;



  switch (action.type){
    case ADD_ITEM_TO_LIST:
      const itemExist = checkItemExists(state, action.productCode);
      if (itemExist){
        itemList = updateByProductCode(state, action.productCode, "INC");
      }
      else {
        itemList = [...state, listItem(action)];
      }
      return itemList;
    case DELETE_ITEM_FROM_LIST:
      itemList = removeByProductCode(state, action.productCode);
      return itemList;
    case UPDATE_ITEM_IN_THE_LIST:

      itemList = updateByProductCode(state, action.productCode, action.operType);
      return itemList;
    default:
      return state;
  }
}


export default listOperations;
