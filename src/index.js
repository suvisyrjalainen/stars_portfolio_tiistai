import React from 'react';
import ReactDOM from 'react-dom/client';
import Omakuva from "./omakuva.js"
import Header from "./header.js"
import Element from "./element.js"
import "./style.css"


const myPage = <div>
<Header/>
<Element projekti="Testiprojekti"
image="https://cdn.pixabay.com/photo/2020/03/21/14/45/moon-4954228_1280.jpg"
text="Tämä on minun tekeleeni vähän väsyneenä"
link="https://unity.com/"/>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myPage);
