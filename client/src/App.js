import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@mui/material'
import '@mui/icons-material'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddJob from "./pages/MainComponent/AddJob/AppForm";
import TrackerContainer from "./pages/TrackerContainer";
import 'bulma/css/bulma.min.css';
import HippoStats from "./pages/MainComponent/HippoStats/HippoStats";
import Application from "./pages/MainComponent/Application/Application";
import Homepage from "./pages/Homepage/Homepage";

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
      <>
        <Routes>
          <Route path="/Main" element={<TrackerContainer />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/AppForm" element={<AddJob />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/Main/Application" element={<Application />} />
          <Route path="/Main/HippoStats" element={<HippoStats />} />
          <Route path="/Main/Application/:_id" element={<TrackerContainer />} />
        </Routes>
      </>
    </Router>
  </ApolloProvider>
);

export default App;
