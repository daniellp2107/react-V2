import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from "@apollo/client";
import {setContext} from 'apollo-link-context';

const httpLink = createHttpLink ({
  uri:'http://localhost:4000/',
});

const authLink = setContext ((_,{headers})=>{
  const token = localStorage.getItem('token');
  return{
    headers:{
      ...headers,
      miPropioHeader:"¡Hola!",
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const client = new ApolloClient({
  connectToDevTools:true,
  // uri: "http://localhost:4000",
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
