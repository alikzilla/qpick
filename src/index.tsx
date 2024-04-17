import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux';
import Item from './pages/Homepage/item/Item';

export type RootState = typeof defaultState;

const ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART" = "ADD_ITEM_TO_CART";
const ADD_COUNT: "ADD_COUNT" = "ADD_COUNT";
const REMOVE_COUNT: "REMOVE_COUNT" = "REMOVE_COUNT";
const REMOVE_ITEM_ALL: "REMOVE_ITEM_ALL" = "REMOVE_ITEM_ALL";

export interface IItem {
  index: number;
  img: string;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  count: number;
}

interface DefaultState {
  items: IItem[]
}

const defaultState: DefaultState = {
  items: []
};

export const addItemToCart = (item: IItem) => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
})

export const addCount = (index: number) => ({
  type: ADD_COUNT,
  payload: index,
});

export const removeCount = (index: number) => ({
  type: REMOVE_COUNT,
  payload: index,
});

export const removeItemAll = (index: number) => ({
  type: REMOVE_ITEM_ALL,
  payload: index,
})

type Actions = ReturnType<typeof addCount> | ReturnType<typeof removeCount> | ReturnType<typeof addItemToCart> | ReturnType<typeof removeItemAll>
 
const reducer = (state: DefaultState = defaultState, action: Actions): DefaultState => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      state.items = [...state.items, action.payload];

      return state;
    case ADD_COUNT:
      state = {
        items: [...state.items.map((item) => {
            if (item.index === action.payload) {
              item.count += 1;
            }
            return item;
          })]
        }

      console.log(action.payload)
      console.log(state)
      return state;
    case REMOVE_COUNT:
      const element = state.items.find((item) => item.index === action.payload);
      let newArray: IItem[] = [];
      if (element && element.count > 1) {
        newArray = state.items.map((item) => {
          if (item.index === action.payload) {
            item.count -= 1;
          }
          return item;
        });
      } else if (element && element.count === 1) {
        newArray = state.items.filter((item) => item.index !== action.payload);
      }

      state = {
        items: newArray
      };

      return state;

    case REMOVE_ITEM_ALL: 
      state = {
        items: state.items.filter((item) => item.index !== action.payload)
      }

      return state;
    default:
      return state;
  } 
};

const store = createStore(reducer);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
)
