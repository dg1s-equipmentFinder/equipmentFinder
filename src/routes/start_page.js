import '../App.css';
import Header from "../header"
import Footer from '../footer';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

function StartPage(){
    const navigate = useNavigate()
    const [time, setTime] = useState(true);

    useEffect(() =>{
        let timer = setTimeout(() => {setTime(!time)}, 2000)
    })

    if (time === false){
        navigate('/map')
    }
    return <div id="startPage">
        하잉
    </div>
}

export default StartPage