import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost'

/*
Provider will serve as the component bridge between the Redux store and our entire app, 
so we are going to wrap the App component with this component provided to us from the react-redux library.
*/
import {Provider} from 'react-redux'
import rootReducer from './Redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// will add graphql to this url internally
// need to move this to action? 
const client = new ApolloClient({
  uri: 'http://localhost:4000/'
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)


// pass client to apollo provider -> 
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <Provider store = {store}>
      <App />
    </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

//erviceWorker.unregister();