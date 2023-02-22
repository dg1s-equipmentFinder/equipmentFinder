import '../App.css';
import Header from "../header"
import Footer from '../footer';
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import React from 'react';



function SearchContent(){
    const queryParameters = new URLSearchParams(window.location.search)
    const keyword = queryParameters.get("keyword")
    return <div>
        search/{keyword}
    </div>
}

function Search(){
    const navigate = useNavigate()
    return <div id="r">
    <Header mode='search' navigate={navigate}></Header>
    <SearchContent />
    <Footer></Footer>
  </div>
}

export default React.memo(Search)