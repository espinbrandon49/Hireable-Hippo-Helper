import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TrackerContainer from "./components/TrackerContainer";
import "./App.css";

import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => <TrackerContainer />;

export default App;
