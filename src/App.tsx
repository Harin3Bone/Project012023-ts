import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

//Page
import HomePage from "pages/HomePage";
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";
import ErrorPage from "pages/ErrorPage";

//Components
import Navbar from "components/Navbar";


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<HomePage />} caseSensitive />
        </Route>
        <Route
          path='/signin'
          element={<SignInPage/>}
          caseSensitive
        />
        <Route
          path='/signup'
          element={<SignUpPage/>}
          caseSensitive
        />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
