import '../App.css';
import Header from "../header"
import Footer from '../footer';
import { useParams } from "react-router-dom"
import React, {useState, useEffect} from 'react';
import { OptionButton } from '../components/App';
import fb from "../fb.js"
import { getDatabase, ref, get, child } from "firebase/database";

const dbRef = ref(getDatabase());

function Get_closet_data(){
    const queryParameters = new URLSearchParams(window.location.search)
    const labName = queryParameters.get("labName")
    const floor = queryParameters.get("floor")
    const i = queryParameters.get("i")
    const j = queryParameters.get("j")

    let [List, SetList] = useState([]);
    get(child(dbRef, `equipment/${floor}/${labName}/detail/closet_container/${i}/data/${j}/data`)).then((snapshot) => {
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

function ClosetFactor(props){
  const style = {
    width: `calc(${props.width} * 100%)`,
    height: `calc(${props.height}* 100%)`,
  }

  return <section id="equipmentfactor" className='mapFactor closet' style={style} onClick={(event)=>{
    event.preventDefault();
    props.onChangeMode();
  }}>
    <p id='closetContent'>{props.name}</p>
  </section>
}

function ClosetMap(){
  const closetInfo = Get_closet_data()
  let res = []
  for(let i = 0; i < closetInfo.length ; i++){
    const name = closetInfo[i]["name"]
    const height = closetInfo[i]["height"]
    const width = closetInfo[i]["width"]
    res.push(<ClosetFactor width={width} height={height} name={name} onChangeMode={()=>{window.location.replace(`/explain?equipmentname=${name}`)}}/>)
  }
  return <div id="closetmap">
    <div id='equipmentcontainer'>
  {res}
  </div>
  </div>
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
        <ClosetMap />
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