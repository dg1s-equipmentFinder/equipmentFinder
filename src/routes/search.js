import '../App.css';
import Header, { Form } from "../header"
import Footer from '../footer';
import { json, useActionData, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import { db, firebaseConfig } from "../fb"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child, query, orderByChild, orderByValue, onValue, orderByKey, startAt, endAt } from "firebase/database";
const jsondata = require('../data/roomdata_sample.json')

function getdata(keyword) {
    const search = keyword.toString()
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app)
    const Ref = query(ref(database, 'samplesearchkey'), orderByValue(), startAt(search), endAt(search + '\uf8ff'));
    /*const starCountRef = ref(database, 'searchsample/');*/
    onValue(Ref, (snapshot) => {
        const data = snapshot.val();
        const totaldata = Object.keys(data).map((key) => {
            return jsondata[key]
        });
        return (data)
    });


    return
}

function SearchContent() {
    const initialdata = {
        's1': [1, 2, 3, 4],
        's2': [1, 2, 3, 4],
        's3': [1, 2, 3, 4],
        's4': [1, 2, 3, 4],

    }
    const [data, setdata] = useState(initialdata)
    const queryParameters = new URLSearchParams(window.location.search)
    const keyword = queryParameters.get("keyword")
    const search = keyword.toString()
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app)
    const Ref = query(ref(database, 'samplesearchkey'), orderByValue(), startAt(search), endAt(search + '\uf8ff'));
    /*const starCountRef = ref(database, 'searchsample/');*/
    onValue(Ref, (snapshot) => {
        if (snapshot.exists) {
            const data = snapshot.val();
            const roomdict = {}
            const urldict={}
            const totaldata = Object.keys(data).map((key) => {
                const product = jsondata[key]
                const rooms = Object.keys(roomdict)
                if (product['roomtitle'] in rooms) {
                    roomdict[product['roomtitle']].add(product['productitle'])
                } else {
                    roomdict[product['roomtitle']] = [product['productitle']]
                }
                setdata(roomdict)
            }); 
        }
    }, {
        onlyOnce: true
      })
    const roomtitle = Object.keys(data) // [s1, s2, s3, s4]

    return (
        <div class="search_mainBox">
            <div class="mainBox_div borderBot h10">
                <input type="text" id="searchText" class="no-outline" placeholder="기자재를 검색해주세요." ></input>
            </div>
            <div class="mainBox_div h90">
                {/* {for (i in roomtitle){
                    return fuc(i)
            }} */}
                {roomtitle.map((value) => {
                    return <section class="room_title">{value}
                        {data[value].map((value) => {
                            return <section class="sub_title"><button onClick={()=>console.log(value)}>{value}</button></section>
                        })}
                    </section>
                })}
                {/* <section class="room_title">title1
                {['s_title1', 's_title2','stitle_3'].map((value)=>{
                return <section class="sub_title">{value}</section>})}
            </section>
            <div class="room_title">s_title
                {['s_title1', 's_title2',].map((value)=>{
                return <div class="sub_title">{value}</div>})}
            </div>
            <div class="room_title">title3
                {['s_title1', 's_title2',].map((value)=>{
                return <div class="sub_title">{value}</div>})}
            </div>
            <div class="room_title">title4
                {['s_title1', 's_title2',].map((value)=>{
                return <div class="sub_title">{value}</div>})}
            </div> */}

            </div>
            {/* search/{keyword} */}
        </div>)
}



function Search() {
    const navigate = useNavigate()
    return <div id="r">

        <Header mode='search' navigate={navigate}></Header>
        <SearchContent />
        <Footer></Footer>
    </div>
}

export default React.memo(Search)