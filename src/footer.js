import {Link} from "react-router-dom";

function Footer(props) {
    return(
    <footer id='footer'>
          <div id="copyright">&copy; {new Date().getFullYear} KLOPP, all rights reserved.</div>
          <div> </div>
          <p id="creditTxt"><Link to="/credit"> 제작자 소개</Link></p>
      </footer>);
  }

export default Footer