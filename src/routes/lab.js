import '../App.css';
import Header from "../header"
import Footer from '../footer';
import { useParams, useNavigate } from "react-router-dom"
import React, {useState, useEffect} from 'react';
import { OptionButton } from '../components/App';
import fb from "../fb.js"
import { getDatabase, ref, get, child } from "firebase/database";

const dbRef = ref(getDatabase());

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
    
    return <section id="mapfactor" className='mapFactor closet' style={style} onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode();
    }}>
        <p id='closetNum'>{props.closetNum}</p>
        <p id='closetContent'>{props.closetContent}</p>
    </section>
}

//relative
function LabMap(props){
    const [List, SetList] = useState([]);
    useEffect(() => {
        get(child(dbRef, `equipment/${props.floor}/${props.labname}/detail`)).then((snapshot) => {
            if (snapshot.exists()) {
                SetList(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, []);
    if (List.length === 0){
        return <section id='labmap'></section>
    }
    else{
        let closet_arr = List['closet_container'];
        let closet_container;
        let closet_container_data = [];
        let closetNumber
        const navigate = props.navigate
        if(List['startingNo'] != null ){
            closetNumber = List['startingNo'];
        } else{
            closetNumber = 1
        }
        for (let i = 1; i < closet_arr.length; i++){
            closet_container = closet_arr[i];
    
            for (let j = 0; j < closet_container['data'].length; j++){
                closet_container['data'][j]['data']['closetNum'] = closetNumber;
                closetNumber++;
            }
            if (closet_container != null){
                closet_container_data[i] = closet_container['data'].map((closet) => {
                    if (closet != null){
                        const closetIndex = closet_container['data'].indexOf(closet)
                        const names = []
                        for(let k = 0; k < closet['data'].length; k++){
                            names.push(closet['data'][k]['name'])
                        }
                        return( 
                        <MapFactor 
                            width={closet['option']['width']} 
                            height={closet['option']['height']} 
                            closetNum={closet['data']['closetNum']} 
                            closetContent={names.slice(0,2).toString().replace(/,/g, '\n')} 
                            onChangeMode={()=>{ navigate(`/closet?labName=${encodeURIComponent(props.labname)}&floor=${encodeURIComponent(props.floor)}&closetNum=${closet['data']['closetNum']}&i=${i}&j=${closetIndex}`)
                        }}></MapFactor>)
                    }
                })
                }
                
        }
    
        return <section id="labmap">
            {List['closet_container'].map(function(closet_container, idx){
                if (closet_container != null){
                    return (<MapContainer xpos={closet_container['option']['xpos']} ypos={closet_container['option']['ypos']} width={closet_container['option']['width']} height={closet_container['option']['height']} direction={closet_container['option']['direction']} wrap={closet_container['option']['wrap']}>
                        {closet_container_data[idx]}
                    </MapContainer>)
                }
            })}
        </section>
    }
    
}

function LabContent(props){
    const queryParameters = new URLSearchParams(window.location.search)
    const labName = queryParameters.get("labName")
    const floor = queryParameters.get("floor")
    const navigate = props.navigate
    return <div id="inlab">
        <section id="labname">
            <p>{labName}</p>
            <OptionButton text = "뒤로가기" button_id='labToMainButton' background_color='white' width='5.5em' height='2em' fontsize ='17px' to={-1}></OptionButton>
            <OptionButton text = "메인으로" button_id='labToMainButton' background_color='yellow' width='5.5em' height='2em' fontsize ='17px' to='/map'></OptionButton>
        </section>
        <LabMap labname={labName} floor={floor} navigate={navigate}></LabMap>
    </div>
}

function Lab(){
    const navigate = useNavigate()
    return <div id="r">
    <Header mode='lab' navigate={navigate}></Header>
    <LabContent navigate={navigate}/>
    <Footer></Footer>
  </div>
}

export default React.memo(Lab)