import '../App.css';
import Header from "../header"
import Footer from '../footer';
import { useLocation, useSearchParams } from "react-router-dom"



function SearchContent(){
    const queryParameters = new URLSearchParams(window.location.search)
    const keyword = queryParameters.get("keyword")
    return <div>
        search/{keyword}
    </div>
}

function Search(){
    return <div id="r">
    <Header mode='search'></Header>
    <SearchContent />
    <Footer></Footer>
  </div>
}

export default Search