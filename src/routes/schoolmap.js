import '../App.css';
import Header from "../header"
import Footer from '../footer';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

const StyledLab = styled.section`
    width: ${props => Number(props.width)*5}%;
    height: ${props => 100*(Number(props.height)/3)}%;
    `

function Lab(props){
    
    // char: lab, blank, stair, etc
    if (props.char === "lab"){
        return <StyledLab width={props.width} height={props.height} className={`${props.char} mapFactor`} onClick={()=>{
            console.log(props.floor);
            window.location.replace(`/lab/?labName=${encodeURIComponent(props.labName)}&floor=${encodeURIComponent(props.floor)}`)
        }}>{props.labName}</StyledLab>
    }
    else{
        return <StyledLab width={props.width} height={props.height} className={`${props.char} mapFactor`}>{props.labName}</StyledLab>
    }
}


function FloorMap(props){
    const floormap_list = [
        0,
        {
            fmapTop:[
                {labName:"계단", char: 'stair', width: '2', height: '2'},
                {labName:"첨단기기 실험실", char: 'lab', width: '3', height: '2'},
                {labName:"공공기기 실험실", char: 'lab', width: '2', height: '2'},
                {labName:"발명 공작실", char: 'lab', width: '2', height: '2'},
                {labName:"탁구대", char: 'etc', width: '7', height: '2'},
                {labName:"계단", char: 'stair', width: '2', height: '2'},
                {labName:"", char: 'blank', width: '2', height: '2'}
            ],
            fmapEnd:[
                {labName:"설비 관리실", char: 'etc', width: '1', height: '2'},
                {labName:"박막 제조실", char: 'lab', width: '2', height: '2'},
                {labName:"광학 실험실", char: 'lab', width: '2', height: '2'},
                {labName:"체육 단련실", char: 'etc', width: '3', height: '2'},
                {labName:"화장실", char: 'etc', width: '2', height: '2'},
                {labName:"", char: 'blank', width: '1', height: '3'},
                {labName:"급식실", char: 'etc', width: '6', height: '2'},
                {labName:"시청각실", char: 'etc', width: '3', height: '2'}
            ],
            corridor_width: '20'
        },
        {
            fmapTop:[
                {labName:"계단", char: 'stair', width: '2', height: '2'},
                {labName:"과학 연구실(2)", char: 'etc', width: '2', height: '2'},
                {labName:"생물 준비실", char: 'lab', width: '2', height: '2'},
                {labName:"생물 실험실", char: 'lab', width: '2', height: '2'},
                {labName:"배양실", char: 'lab', width: '1', height: '2'},
                {labName:"", char: 'blank', width: '4', height: '2'},
                {labName:"계단", char: 'stair', width: '3', height: '2'},
                {labName:"일반 교사동 통로", char: 'etc', width: '2', height: '3'},
                {labName:"계단", char: 'stair', width: '2', height: '2'},
                
            ],
            fmapEnd:[
                {labName:"시약실", char: 'lab', width: '1', height: '2'},
                {labName:"화학 실험실", char: 'lab', width: '3', height: '2'},
                {labName:"화학 준비실", char: 'lab', width: '2', height: '2'},
                {labName:"강의실", char: 'etc', width: '2', height: '2'},
                {labName:"화장실", char: 'etc', width: '2', height: '2'},
                {labName:"기숙사 통로", char: 'etc', width: '2', height: '3'},
                {labName:"3학년 독서동", char: 'etc', width: '2', height: '2'},
                {labName:"2학년 독서동", char: 'etc', width: '2', height: '2'},
                {labName:"1학년 독서동", char: 'etc', width: '2', height: '2'},
                {labName:"도서관", char: 'etc', width: '2', height: '2'}
            ],
            corridor_width: '20'
        },
        {
            fmapTop:[
                {labName:"계단", char: 'stair', width: '2', height: '2'},
                {labName:"과학 연구실(1)", char: 'etc', width: '2', height: '2'},
                {labName:"물리 준비실(2)", char: 'lab', width: '2', height: '2'},
                {labName:"물리 실험실", char: 'lab', width: '2', height: '2'},
                {labName:"물리 준비실(1)", char: 'lab', width: '2', height: '2'},
                {labName:"일반 교사동 통로", char: 'etc', width: '2', height: '3'},
                {labName:"계단", char: 'stair', width: '2', height: '2'},
                {labName:"자판기", char: 'etc', width: '2', height: '2'},
                {labName:"계단", char: 'stair', width: '2', height: '2'},
                
            ],
            fmapEnd:[
                {labName:"박편실", char: 'lab', width: '1', height: '2'},
                {labName:"지구과학 실험실", char: 'lab', width: '3', height: '2'},
                {labName:"지구과학 준비실", char: 'lab', width: '2', height: '2'},
                {labName:"강의실", char: 'etc', width: '2', height: '2'},
                {labName:"화장실", char: 'etc', width: '2', height: '2'},
                {labName:"", char: 'blank', width: '2', height: '2'},
                {labName:"English Cafe", char: 'etc', width: '4', height: '2'}
            ],
            corridor_width: '16'
        },
        {
            fmapTop:[
                {labName:"계단", char: 'stair', width: '2', height: '2'},
                {labName:"음악 감상실", char: 'etc', width: '2', height: '2'},
                {labName:"입학 관리실", char: 'etc', width: '2', height: '2'},
                {labName:"컴퓨터 준비실", char: 'etc', width: '2', height: '2'},
                {labName:"컴퓨터실", char: 'etc', width: '3', height: '2'},
                {labName:"일반 교사동 통로", char: 'etc', width: '2', height: '3'},
                {labName:"계단", char: 'stair', width: '2', height: '2'}
            ],
            fmapEnd:[
                {labName:"음악실", char: 'etc', width: '2', height: '2'},
                {labName:"음악 준비실", char: 'etc', width: '1', height: '2'},
                {labName:"미술 준비실", char: 'etc', width: '2', height: '2'},
                {labName:"미술실", char: 'etc', width: '3', height: '2'},
                {labName:"화장실", char: 'etc', width: '2', height: '2'},
                {labName:"", char: 'blank', width: '2', height: '2'},
                {labName:"코스모스", char: 'etc', width: '2', height: '2'}
            ],
            corridor_width: '15'
        }
    ]

    return <section id={`floormap${props.floor}`}>
        <section id='floormapTop'>
            { (floormap_list[props.floor].fmapTop).map(function(labObj){
                return (<Lab char={labObj.char} width={labObj.width} height={labObj.height} labName={labObj.labName} floor={props.floor}></Lab>)
            })}
        </section>
        <Lab char='etc' width={floormap_list[props.floor].corridor_width} height='3'></Lab>
        <section id='floormapEnd'>
            { (floormap_list[props.floor].fmapEnd).map(function(labObj){
                return (<Lab char={labObj.char} width={labObj.width} height={labObj.height} labName={labObj.labName} floor={props.floor}></Lab>)
            })}
        </section>
    </section>
}

function ChangeButton(priorFloor, curFloor, setFloor){
    const activedButton = document.querySelector(`#button${priorFloor}`);
    activedButton.classList.remove("active");
    setFloor(curFloor)
    const currentButton = document.querySelector(`#button${curFloor}`);
    currentButton.classList.add("active");
}

function SchoolMap(){
    const [floor, setFloor] = useState(1);

    return <div id='schoolmap'>
        <section id="floor">{`${floor}F`}</section>
        <FloorMap floor={floor}></FloorMap>
        <section id="buttonbox">
            <button id="button1" class="floorbutton no-outline active" onClick={()=>{
                ChangeButton(floor, 1, setFloor);
            }}>1F</button>
            <button id="button2" class="floorbutton no-outline" onClick={()=>{
                ChangeButton(floor, 2, setFloor);
            }}>2F</button>
            <button id="button3" class="floorbutton no-outline" onClick={()=>{
                ChangeButton(floor, 3, setFloor);
            }}>3F</button>
            <button id="button4" class="floorbutton no-outline" onClick={()=>{
                ChangeButton(floor, 4, setFloor);
            }}>4F</button>
        </section>
    </div>
}
function Map(){
    return <div id="r">
    <Header mode='schoolmap'></Header>
    <SchoolMap />
    <Footer></Footer>
  </div>
}
export default Map