import '../App.css';
import Header from "../header"
import Footer from '../footer';
import loading from '../spinner.svg'
import dg1sico from '../dg1s_logo.png'
import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

function StartPage(){
    const navigate = useNavigate()
    const [time, setTime] = useState(true);

    useEffect(() =>{
        // let timer = setTimeout(() => {setTime(!time)}, 2000)
    })

    if (time === false){
        navigate('/map')
    }
    return <div id="startPage">
        <div id="loadingMsg"><img id='dg1s_logoimg' alt="DG1Sico" src={dg1sico} /><span id="loadingTxt">대구일과학고등학교 기자재 지도</span></div>
        <img src={loading} alt="loading spiner"></img>
    </div>
}

export default StartPage