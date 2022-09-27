import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddJob from "./pages/AddJob/AppForm";
import TrackerContainer from "./pages/TrackerContainer/TrackerContainer";
import Application from "./pages/TrackerContainer/Application/Application";
import Homepage from "./pages/Homepage/Homepage";
import NavBar from "./pages/Navbar";
import Footer from "./pages/Footer";
import UpdateJob from "./pages/UpdateJob/UpdateJob";
import 'bulma/css/bulma.min.css';
import '@mui/material'
import '@mui/icons-material'

import { useState } from 'react'

// import { AuthContext } from './utils/helpers'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
// https://www.apollographql.com/docs/react/api/link/apollo-link-context/
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Main" element={<TrackerContainer />}>
          <Route path="Application/:_id" element={<Application />} />
        </Route>
        <Route path="/AppForm" element={<AddJob />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/UpdateJob" element={<UpdateJob />} />
      </Routes>
      <Footer />
    </Router>
  </ApolloProvider>
);

export default App;
