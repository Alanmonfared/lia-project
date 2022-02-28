import React, { FC, useState } from "react";
import "./App.css";
import GlobalStyle from "./Components/global/Global.style";
import Login from "./Components/user/Login";
import Home from "./Components/home/Home";
import Live from "./Components/live/Live";
import Jackpots from "./Components/jackpots/Jackpots";
import Casino from "./Components/casino/Casino";
import Favorite from "./Components/favorite/Favorite";
import Leojackpot from "./Components/leojackpot/Leojackpot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/nav/Navbar";
import { ThemeProvider } from "styled-components";
import { ContextProvider } from "./Contexts/GlobalState";
import Footer from "../src/Components/footer/Footer";
import Register from "./Components/user/Register";
import GameDetails from "./Contexts/GameDetails";
import NotFound from "./NotFound";

const theme = {
  colors: {
    navbar: "black",
    active: "orange",
  },
};

const App: FC = () => {
  return (
      <ContextProvider>
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
              <Route path="/game-details/:id" element={<GameDetails />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
          </Router>
        </ThemeProvider>
      </ContextProvider>
  );
};

export default App;
