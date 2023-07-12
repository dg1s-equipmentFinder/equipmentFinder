// routes들 중에 explain을 하면 그걸 router.js에서 받고
// app.js으로 주고 index.js로 모으고 index.html로 주는거임.

import '../App.css';
import Header from "../header"
import Footer from '../footer';
import { useNavigate } from 'react-router';
import React, {useState, useEffect} from 'react';
import { OptionButton } from '../components/App';
import {db} from "../fb.js";
import { getDatabase, ref, get, child } from "firebase/database";

const dbRef = ref(db);

//absolute -> 퍼센트로 위치 지정
function MapContainer(props){
    //wrap, wrap-reverse:줄넘어감   row, column:가로배치, 세로배치
    const style = {
        width: props.width,
        height: props.height,
        left: props.xpos,
        top: props.ypos,
        flexDirection: props.direction,
        flexWrap:props.wrap
    }
    return <div id="mapcontainer" style={style}>
        {props.children}
    </div>
}

//MapContainer에 대해 퍼센트로
function MapFactor(props){
    const style = {
        width: `calc(${props.width} * 100%)`,
        height: `calc(${props.height}* 100%)`,
    }
}

function ExplainMap(props){
    const [List, SetList] = useState([]);

    useEffect(() => {
        console.log(props.explainname)
        get(child(dbRef, `searchdb/${props.explainname}/description`)).then((snapshot) => {
            if (snapshot.exists()) {
                SetList(snapshot.val());
                console.log(List)
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, []);
    if (List.length === 0){
        return <section id='explainmap'></section>
    }
    else{
        let description = List['text']
    
        return <section id="explainmap">
            <p>{description}</p>
        </section>
    }
}


function ExplainContent(props){
    const queryParameters = new URLSearchParams(window.location.search)
    const explainName = queryParameters.get("equipmentname")
    const floor = queryParameters.get("floor")
    const navigate = props.navigate
    return <div id="inexplain">
        <section id="explainname">
            <p></p>
            <OptionButton text = "뒤로가기" button_id='explainToMainButton' background_color='white' width='5.5em' height='2em' fontsize ='17px' to={-1}></OptionButton>
            <OptionButton text = "메인으로" button_id='explainToMainButton' background_color='yellow' width='5.5em' height='2em' fontsize ='17px' to='/map'></OptionButton>
        </section>
        <ExplainMap explainname={explainName} floor={floor} navigate={navigate}></ExplainMap>
    </div>
}

function Explain(){
    const navigate = useNavigate()
    return <div id="r">
    <Header mode = "explain" navigate={navigate}></Header>
    <ExplainContent />
    <Footer></Footer>
  </div>
}

export default React.memo(Explain)