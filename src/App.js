import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import './App.css';
import rootReducer  from './reducers/index';

const store = createStore(
  rootReducer, applyMiddleware(thunk)
)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Container />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
