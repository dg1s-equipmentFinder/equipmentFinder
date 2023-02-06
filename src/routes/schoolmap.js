import '../App.css';
import Header from "../header"
import Footer from '../footer';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components'


function Lab(props){
    const StyledLab = styled.section`
    width: ${Number(props.width)*5}%;
    height: ${100*(Number(props.height)/3)}%;
    `
    // char: lab, blank, stair, etc
    if (props.char === "lab"){
        return <StyledLab className={`${props.char} mapLab`} onClick={()=>{
            window.location.replace(`/lab/${props.labName}`)
        }}>{props.labName}</StyledLab>
    }
    else{
        return <StyledLab className={`${props.char} mapLab`}>{props.labName}</StyledLab>
    }
}

function FloorMap(props){
    if (props.floor===1){
        return <section id='map1'>
            <section id='mapTop'>
                <Lab char="stair" width='2' height='2' labName="계단"></Lab>
                <Lab char='lab' width='3' height='2' labName="첨단기기 실험실"></Lab>
                <Lab char='lab' width='2' height='2' labName="공공기기 실험실"></Lab>
                <Lab char='lab' width='2' height='2' labName="발명 공작실"></Lab>
                <Lab char='etc' width='7' height='2' labName="탁구대"></Lab>
                <Lab char='stair' width='2' height='2' labName="계단"></Lab>
                <Lab char='blank' width='2' height='2' labName=""></Lab>
            </section>
            <Lab char='etc' width='20' height='3'></Lab>
            <section id='mapEnd'>
                <Lab char='etc' width='1' height='2' labName="설비 관리실"></Lab>
                <Lab char='lab' width='2' height='2' labName="박막 제조실"></Lab>
                <Lab char='lab' width='2' height='2' labName="광학 실험실"></Lab>
                <Lab char='etc' width='3' height='2' labName="체육 단련실"></Lab>
                <Lab char='etc' width='2' height='2' labName="화장실"></Lab>
                <Lab char='blank' width='1' height='3' labName=""></Lab>
                <Lab char='etc' width='6' height='2' labName="급식실"></Lab>
                <Lab char='etc' width='3' height='2' labName="시청각실"></Lab>
            </section>
        </section>
    }
    else if(props.floor===2){
        return <section id='map2'>
            <section id='mapTop'>
                <Lab char="stair" width='2' height='2' labName="계단"></Lab>
                <Lab char='etc' width='2' height='2' labName="과학 연구실(2)"></Lab>
                <Lab char='lab' width='2' height='2' labName="생물 준비실"></Lab>
                <Lab char='lab' width='2' height='2' labName="생물 실험실"></Lab>
                <Lab char='lab' width='1' height='2' labName="배양실"></Lab>
                <Lab char='blank' width='4' height='2' labName=""></Lab>
                <Lab char='stair' width='3' height='2' labName="계단"></Lab>
                <Lab char='etc' width='2' height='3' labName="일반 교사동 통로"></Lab>
                <Lab char="stair" width='2' height='2' labName="계단"></Lab>
            </section>
            <Lab char='etc' width='20' height='3'></Lab>
            <section id='mapEnd'>
                <Lab char='lab' width='1' height='2' labName="시약실"></Lab>
                <Lab char='lab' width='3' height='2' labName="화학 실험실"></Lab>
                <Lab char='lab' width='2' height='2' labName="화학 준비실"></Lab>
                <Lab char='etc' width='2' height='2' labName="강의실"></Lab>
                <Lab char='etc' width='2' height='2' labName="화장실"></Lab>
                <Lab char='etc' width='2' height='3' labName="기숙사 통로"></Lab>
                <Lab char='etc' width='2' height='2' labName="3학년 독서동"></Lab>
                <Lab char='etc' width='2' height='2' labName="2학년 독서동"></Lab>
                <Lab char='etc' width='2' height='2' labName="1학년 독서동"></Lab>
                <Lab char='etc' width='2' height='2' labName="도서관"></Lab>
            </section>
        </section>        
    }
    else if(props.floor===3){
        return <section id='map3'>
        <section id='mapTop'>
            <Lab char="stair" width='2' height='2' labName="계단"></Lab>
            <Lab char='etc' width='2' height='2' labName="과학 연구실(1)"></Lab>
            <Lab char='lab' width='2' height='2' labName="물리 준비실(2)"></Lab>
            <Lab char='lab' width='2' height='2' labName="물리 실험실"></Lab>
            <Lab char='lab' width='2' height='2' labName="물리 준비실(1)"></Lab>
            <Lab char='etc' width='2' height='3' labName="일반 교사동 통로"></Lab>
            <Lab char='stair' width='2' height='2' labName="계단"></Lab>
            <Lab char='etc' width='2' height='2' labName="자판기"></Lab>
            <Lab char="stair" width='2' height='2' labName="계단"></Lab>
        </section>
        <Lab char='etc' width='16' height='3'></Lab>
        <section id='mapEnd'>
            <Lab char='lab' width='1' height='2' labName="박편실"></Lab>
            <Lab char='lab' width='3' height='2' labName="지구과학 실험실"></Lab>
            <Lab char='lab' width='2' height='2' labName="지구과학 준비실"></Lab>
            <Lab char='etc' width='2' height='2' labName="강의실"></Lab>
            <Lab char='etc' width='2' height='2' labName="화장실"></Lab>
            <Lab char='blank' width='2' height='2' labName=""></Lab>
            <Lab char='etc' width='4' height='2' labName="English Cafe"></Lab>
        </section> 
    </section>
    }
    else{
        return <section id='map4'>
        <section id='mapTop'>
            <Lab char="stair" width='2' height='2' labName="계단"></Lab>
            <Lab char='etc' width='2' height='2' labName="음악 감상실"></Lab>
            <Lab char='etc' width='2' height='2' labName="입학 관리실"></Lab>
            <Lab char='etc' width='2' height='2' labName="컴퓨터 준비실"></Lab>
            <Lab char='etc' width='3' height='2' labName="컴퓨터실"></Lab>
            <Lab char='etc' width='2' height='3' labName="일반 교사동 통로"></Lab>
            <Lab char='stair' width='2' height='2' labName="계단"></Lab>
        </section>
        <Lab char='etc' width='15' height='3'></Lab>
        <section id='mapEnd'>
            <Lab char='etc' width='2' height='2' labName="음악실"></Lab>
            <Lab char='etc' width='1' height='2' labName="음악 준비실"></Lab>
            <Lab char='etc' width='2' height='2' labName="미술 준비실"></Lab>
            <Lab char='etc' width='3' height='2' labName="미술실"></Lab>
            <Lab char='etc' width='2' height='2' labName="화장실"></Lab>
            <Lab char='blank' width='2' height='2' labName=""></Lab>
            <Lab char='etc' width='2' height='2' labName="코스모스"></Lab>
        </section> 
    </section>
    }
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