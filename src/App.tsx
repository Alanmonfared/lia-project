import React, { FC, useState } from "react";
import "./App.css";
import GlobalStyle from "./Components/global/Global.style";
import Login from "./Components/login/Login";
import Home from "./Components/home/Home";
import Live from "./Components/live/Live";
import Jackpots from "./Components/jackpots/Jackpots";
import Casino from "./Components/casino/Casino";
import Favorite from "./Components/favorite/Favorite";
import Leojackpot from "./Components/leojackpot/Leojackpot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/nav/Navbar";
import { ThemeProvider } from "styled-components";
import { ContextProviderProps } from "./Contexts/GlobalState";
import Footer from "../src/Components/footer/Footer";
import Register from "./Components/register/Register";

const theme = {
  colors: {
    navbar: "black",
    active: "orange",
  },
};

const App: FC = () => {
  return (
    <ContextProviderProps>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login">
              <Route index element={<Login />} />
              <Route path=":id" element={<Login />} />
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="/live" element={<Live />} />
            <Route path="/jackpots" element={<Jackpots />} />
            <Route path="/casino" element={<Casino />} />
            <Route path="/leojackpot" element={<Leojackpot />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </ContextProviderProps>
  );
};

export default App;
