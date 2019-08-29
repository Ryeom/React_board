import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import configure from './store/configure';
import './styles/bootstrap4-neon-glow.css'
import './styles/bootstrap4-neon-glow.min.css'
const store = configure();
//store.subscribe(()=>{console.log(`ㅎㅇㅎㅇ`,store.getState())})
const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
