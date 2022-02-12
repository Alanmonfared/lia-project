import React, { FC, useState } from "react";
import "./App.css";
import GlobalStyle from "./Components/global/Global.style";
import Login from "./Components/login/Login";
import Home from "./Components/home/Home";
import Slots from "./Components/live/Live";
import Sport from "./Components/jackpots/Jackpots";
import Casino from "./Components/casino/Casino";
import Favorite from './Components/favorite/Favorite'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/nav/Navbar";
import { ThemeProvider } from "styled-components";
import { ContextProviderProps } from "./Contexts/GlobalState";

const theme = {
  colors: {
    navbar: "black",
  },
};

const App: FC = () => {
  return (
    <ContextProviderProps>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Navbar />

          {/* <Footer /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login">
              <Route index element={<Login />} />
              <Route path=":id" element={<Login />} />
            </Route>
            <Route path="/Slots" element={<Slots />} />
            <Route path="/Sport" element={<Sport />} />
            <Route path="/Casino" element={<Casino />} />
            <Route path="/favorite" element={<Favorite    />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ContextProviderProps>
  );
};

export default App;
