

import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";

// User pages

import Home from "./Pages/Home";
import AllBooks from "./Pages/AllBooks";
import Alone from "./Pages/Alone";
import About from "./Pages/About";
import Baiography from "./Pages/Baiography";
import Think from "./Pages/Think";
import Books from "./Pages/Books";
import Brain from "./Pages/Brain";
import EnglishMindBook from "./Pages/EnglishMindBook";
import HindiMotivational11 from "./Pages/HindiMotivational11";
import LongBook from "./Pages/LongBook";
import Manipulation from "./Pages/Manipulation";
import MindControl from "./Pages/MindControl";
import Motivation from "./Pages/Motivation";
import Psychology from "./Pages/Psychology";
import AboutMind from "./Pages/AboutMind";

// Authentication
import UserRegister from "./Component/UserRegister";
import UserLogin from "./Component/UserLogin";

// Admin
import AdminBooks from "./Component/AdminBooks";
import AdminRegister from "./Component/AdminRegister";
import AdminLogin from "./Component/AdminLogin";


// Protection
import ProtectedRoute from "./Component/ProtectedRoute";
import ProtectedUserRoute from "./Component/ProtectedUserRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* =========================
            PUBLIC USER ROUTES
        ========================= */}

        <Route
          path="/login"
          element={<UserLogin />}
        />

        <Route
          path="/register"
          element={<UserRegister />}
        />


        {/* =========================
            PUBLIC ADMIN LOGIN
        ========================= */}
<Route
  path="/admin/register"
  element={<AdminRegister />}
/>

<Route
  path="/admin/login"
  element={<AdminLogin />}
/>


        {/* =========================
            PROTECTED USER ROUTES
        ========================= */}

        <Route
          path="/"
          element={
            <ProtectedUserRoute>
              <Home />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/AllBooks"
          element={
            <ProtectedUserRoute>
              <AllBooks />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/Alone"
          element={
            <ProtectedUserRoute>
              <Alone />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/About"
          element={
            <ProtectedUserRoute>
              <About />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/Baiography"
          element={
            <ProtectedUserRoute>
              <Baiography />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/Think"
          element={
            <ProtectedUserRoute>
              <Think />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/Books"
          element={
            <ProtectedUserRoute>
              <Books />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/Brain"
          element={
            <ProtectedUserRoute>
              <Brain />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/EnglishMindBook"
          element={
            <ProtectedUserRoute>
              <EnglishMindBook />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/HindiMotivational11"
          element={
            <ProtectedUserRoute>
              <HindiMotivational11 />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/LongBook"
          element={
            <ProtectedUserRoute>
              <LongBook />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/Manipulation"
          element={
            <ProtectedUserRoute>
              <Manipulation />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/MindControl"
          element={
            <ProtectedUserRoute>
              <MindControl />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/Motivation"
          element={
            <ProtectedUserRoute>
              <Motivation />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/Psychology"
          element={
            <ProtectedUserRoute>
              <Psychology />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/AboutMind"
          element={
            <ProtectedUserRoute>
              <AboutMind />
            </ProtectedUserRoute>
          }
        />


        {/* =========================
            PROTECTED ADMIN ROUTE
        ========================= */}

        <Route
          path="/admin/books"
          element={
            <ProtectedRoute>
              <AdminBooks />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;