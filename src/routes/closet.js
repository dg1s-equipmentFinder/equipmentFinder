import '../App.css';
import Header from "../header"
import Footer from '../footer';
import { useParams } from "react-router-dom"
import React, {useState, useEffect} from 'react';
import { OptionButton } from '../components/App';
import fb from "../fb.js"
import { getDatabase, ref, get, child } from "firebase/database";

const dbRef = ref(getDatabase());

function Get_closet_data(floor, labName, closetNumber){
    let [List, SetList] = useState([]);
    get(child(dbRef, `equipment/${floor}/${labName}/detail`)).then((snapshot) => {
        if (snapshot.exists()) {
          List = SetList(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    return List;
}

function ClosetMap(props){
    const closetInfo = Get_closet_data(props.floor, props.labName, props.closetNum)
}
function ClosetContent(){
    const queryParameters = new URLSearchParams(window.location.search)
    const labName = queryParameters.get("labName")
    const floor = queryParameters.get("floor")
    const closetNum = queryParameters.get("closetNum")
    return <div id="inlab">
       <section id="labname">
            <p>{labName} - {closetNum}</p>
        </section>
        {/* <ClosetMap floor={floor}, labName={labName}, closetNum={closetNum}/> */}
    </div>
}

function Closet(){
    return <div id="r">
    <Header mode="closet"></Header>
    <ClosetContent />
    <Footer></Footer>
  </div>
}

export default Closet