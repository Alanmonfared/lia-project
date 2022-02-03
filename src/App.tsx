import React, { FC } from "react";

import "./App.css";
import GlobalStyle from "./Components/global/Global.style";
import Login from "./Components/login/Login";
import Help from "./Components/help/Help";
import Home from "./Components/home/Home";
import Slots from "./Components/slots/Slots";
import Sport from "./Components/sport/Sport";
import Casino from "./Components/casino/Casino";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/nav/Navbar";
import { ThemeProvider } from "styled-components";
import DataFetch from './Components/DataFetch'
// import Footer from "./Components/footer/Footer";

const theme = {
  colors: {
    navbar: "black",
  },
};

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <>
            <GlobalStyle />
            <Navbar />
            
            
            
            
            
            {/* <Footer /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" >
                    <Route index element={<Login />}  />
                    <Route path=":id" element={<Login />} />
              </Route>
              <Route path="/Help" element={<Help />} />
              <Route path="/Slots" element={<Slots />} />
              <Route path="/Sport" element={<Sport />} />
              <Route path="/Casino" element={<Casino />} />
            </Routes>
          </>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
