import '../App.css';
import Header from "../header"
import Footer from '../footer';
import React from 'react';


function ExplainContent(){
    return <div>
        explain
    </div>
}

function Explain(){
    return <div id="r">
    <Header></Header>
    <ExplainContent />
    <Footer></Footer>
  </div>
}

export default Explain