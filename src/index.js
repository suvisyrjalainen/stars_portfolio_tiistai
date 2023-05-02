import React from 'react';
import ReactDOM from 'react-dom/client';
import Omakuva from "./omakuva.js"
import Header from "./header.js"

import "./style.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Cv from "./pages/cv";
import Contact from "./pages/contact";
import NoPage from "./pages/noPage";


const myPage = <div>
<Header/>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cv" element={<Cv />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myPage);
