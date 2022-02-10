import React, { FC, useState } from "react";

import "./App.css";
import GlobalStyle from "./Components/global/Global.style";
import Login from "./Components/login/Login";
import Home from "./Components/home/Home";
import Slots from "./Components/live/Live";
import Sport from "./Components/jackpots/Jackpots";
import Casino from "./Components/casino/Casino";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/nav/Navbar";
import { ThemeProvider } from "styled-components";
import Test  from './View/Test'
import  AppProvider  from './Contexts/GlobalState'




// import DataFetch from "./Components/DataFetch";
// import GamesContext, { GamesContextProvider } from "./Contexts/favorite";
// import Footer from "./Components/footer/Footer";

const theme = {
  colors: {
    navbar: "black",
  },
};

const App: FC = () => {
 

  return (
    <ThemeProvider theme={theme}>
      <AppProvider >
        <div>
          <Router>
            <>
              <GlobalStyle />
              <Navbar />
              <Test/>
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
              </Routes>
            </>
          </Router>
        </div>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
