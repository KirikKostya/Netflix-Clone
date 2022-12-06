import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MyFavorite } from './DATA/MY_FAVORITE';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const reducer = (state = MyFavorite, action)=>{
  switch (action.type) {
    case 'ADD_FAVORITE_FILM':
      return {...state, MyFavoriteFilms: [...state.MyFavoriteFilms, action.payload]}
    case 'REMOVE_FAVORITE_FILM':
        return {...state, MyFavoriteFilms: state.MyFavoriteFilms.filter(film => film.id !== action.payload)}
    case 'ADD_FAVORITE_SERIES':
      return {...state, MyFavoriteSeries: [...state.MyFavoriteSeries, action.payload]}
    case 'REMOVE_FAVORITE_SERIES':
      return {...state, MyFavoriteSeries: state.MyFavoriteSeries.filter(film => film.id !== action.payload)}
    default:
      return state
  }
}
const store = createStore(reducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
