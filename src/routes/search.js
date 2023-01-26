import '../App.css';
import Header from "../header"
import Footer from '../footer';

function SearchContent(){
    return <div>
        search
    </div>
}

function Search(){
    return <div id="r">
    <Header></Header>
    <SearchContent />
    <Footer></Footer>
  </div>
}

export default Search