import '../App.css';
import Header from "../header"
import Footer from '../footer';
import React from 'react';
import { useNavigate } from 'react-router';


function ExplainContent(){
    return <div>
        explain
    </div>
}

function Explain(){
    const navigate = useNavigate()
    return <div id="r">
    <Header navigate={navigate}></Header>
    <ExplainContent />
    <Footer></Footer>
  </div>
}

export default Explain