import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { JsonApiLink } from "apollo-link-json-api";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const jsonApiLink = new JsonApiLink({
  uri: "http://jsonapiplayground.reyesoft.com",
});

const client = new ApolloClient({
  link: jsonApiLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
