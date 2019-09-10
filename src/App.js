import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import './App.css';
import rootReducer  from './reducers/index';

const store = createStore(rootReducer)

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
