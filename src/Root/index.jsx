import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/Home";

const Root = () => {
  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </React.Fragment>
  );
};

export default Root;