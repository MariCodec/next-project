"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import { CharactersList } from "./CharactersList";
import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";

const HomePage: React.FC = () => {
  return (
    <ProtectedRoute>
      <Provider store={store}>
        <div className="app">
          <CharactersList />
        </div>
      </Provider>
    </ProtectedRoute>
  );
};

export default HomePage;
