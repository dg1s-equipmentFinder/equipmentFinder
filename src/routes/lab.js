import '../App.css';
import Header from "../header"
import Footer from '../footer';


function LabContent(){
    return <div>
        lab
    </div>
}

function Lab(){
    return <div id="r">
    <Header mode='lab'></Header>
    <LabContent />
    <Footer></Footer>
  </div>
}

export default Lab