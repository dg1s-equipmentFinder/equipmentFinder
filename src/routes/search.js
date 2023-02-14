import '../App.css';
import Header from "../header"
import Footer from '../footer';
import { useParams } from "react-router-dom"



function SearchContent(){
    const {searchVal} = useParams()
    return <div>
        search/{searchVal}
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