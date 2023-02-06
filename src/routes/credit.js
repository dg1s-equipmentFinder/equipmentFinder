import '../App.css';
import Header from "../header"
import Footer from '../footer';

function CreditContent(){
    return <div id='credit'>
        <h2 id="kloppCreditTitle">TEAM KLOPP</h2>
        <div id="kloppCreditPeople">
            <h3>TEAM LEADER</h3>
            <span>이형석 <a href="https://www.instagram.com/asorlie_/" rel="noreferrer" target='_blank'><img id='ico' alt="INSTAGRAM" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" /></a></span>
            <h3>DEVELOPER</h3>
            <span>오민건 <a href="https://www.instagram.com/xo_.un/" rel="noreferrer" target='_blank'><img id='ico' alt="INSTAGRAM" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" /></a></span> <br />
            <span>김용환 <a href="https://www.instagram.com/djd_goldragon/" rel="noreferrer" target='_blank'><img id='ico' alt="INSTAGRAM "src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" /></a></span> <br />
            <span>빅정후 <a href="https://www.instagram.com/hoguma.i/" rel="noreferrer" target='_blank'><img id='ico' alt="INSTAGRAM" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" /></a></span>
            <h3>UI/UX DESIGNER</h3>
            <span>박준혁 <a href="https://www.instagram.com/xracemix_/" rel="noreferrer" target='_blank'><img id='ico' alt="INSTAGRAM" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" /></a></span>
            <br />
            <span>문의 : <a href="mailto:teamklopp2023@gmail.com">teamklopp2023@gmail.com</a></span> 
        </div>
        <h2 id="scienceCreditTitle">대구일과학고등학교 과학부</h2>
        <div id="scienceCreditPeople">
            <h3>DEVELOPER</h3>
            <span>김준희 <a href="https://www.instagram.com/juuxnee/" rel="noreferrer" target='_blank'><img id='ico' alt="INSTAGRAM" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" /></a></span> <br />
            <span>남도균 <a href="https://www.instagram.com/cxmpxgnx_/" rel="noreferrer" target='_blank'><img id='ico' alt="INSTAGRAM" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" /></a></span> <br />
            <span>김승민 <a href="https://www.instagram.com/s.__.min.k/" rel="noreferrer" target='_blank'><img id='ico' alt="INSTAGRAM" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" /></a></span> <br />
            <h3>DATABASE ADMINISTRATOR</h3>
        </div>
    </div>
}

function Credit(){
    return <div id="r">
    <Header mode='credit'></Header>
    <CreditContent />
    <Footer></Footer>
  </div>
}
export default Credit