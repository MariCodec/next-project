"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import { CharactersList } from "./CharactersList";
import React from "react";

// import "./globals.css";

const HomePage: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <CharactersList />
      </div>
    </Provider>
  );
};

export default HomePage;
