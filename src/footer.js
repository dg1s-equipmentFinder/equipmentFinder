import {Link} from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

function Auth(props) {
 return <p id="auth" onClick={(event)=>{
  event.preventDefault();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}}>로그인</p>
}

function Footer(props) {
    return(
    <footer id='footer'>
          <div id="copyright">&copy; {new Date().getFullYear} KLOPP, all rights reserved.</div>
          <div> </div>
          <p id="creditTxt"><Link to="/credit"> 제작자 소개</Link></p>
          <Auth></Auth>
      </footer>);
  }

export default Footer