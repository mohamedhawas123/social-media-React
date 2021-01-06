import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import { applyMiddleware, combineReducers, compose ,createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './store/reducers/user'
import dataReducer from './store/reducers/data'


const rootReducers= combineReducers({
  user: userReducer,
  data: dataReducer

  
})

const composeEnahances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnahances(applyMiddleware(thunk)))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
  
)

ReactDOM.render(app,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
