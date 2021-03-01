import {
  ShoppinAction,
  ShoppingActionTypes
} from "../actions/shopping.actions";
import { ShoppingItem } from "../models/shopping-item.model";

const initialState: Array<ShoppingItem> = [
  {
    id: "123",
    name: "diet coke"
  },
  {
    id: "124",
    name: "fries"
  },
  {
    id: "125",
    name: "ginger"
  }
];

export function ShoppingReducer(
  state: Array<ShoppingItem> = initialState,
  action: ShoppinAction
) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      console.log(action.type, action.payload);
      return [...state, action.payload];
    case ShoppingActionTypes.DELETE_ITEM:
      console.log(action.type, action.payload);
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
