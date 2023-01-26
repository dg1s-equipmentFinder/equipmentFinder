import '../App.css';
import Header from "../header"
import Footer from '../footer';


function ClosetContent(){
    return <div>
        closet
    </div>
}

function Closet(){
    return <div id="r">
    <Header></Header>
    <ClosetContent />
    <Footer></Footer>
  </div>
}

export default Closet