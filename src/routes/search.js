import '../App.css';
import Header, { Form } from "../header"
import Footer from '../footer';
import { json, useActionData, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import { db, firebaseConfig } from "../fb"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child, query, orderByChild, orderByValue, onValue, orderByKey, startAt, endAt, equalTo } from "firebase/database";

function SearchContent(props) {
    const initialdata = {
    }
    const [data, setdata] = useState(initialdata)
    const queryParameters = new URLSearchParams(window.location.search)
    const keyword = queryParameters.get("keyword")
    const search = keyword.toString()
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app)
    // const Ref = query(ref(database, 'samplesearchkey'), orderByValue(), startAt(search), endAt(search + '\uf8ff'));
    const Ref = query(ref(database, 'searchdb/'), orderByKey(),startAt(search), endAt(search+'\uf8ff'));
    /*const starCountRef = ref(database, 'searchsample/',startAt(search), endAt(search + '\uf8ff'));*/
    onValue(Ref, (snapshot) => {
        if (snapshot.exists) {
            const data = snapshot.val();
            if(data!=null){
                const roomdict = {}
                //Object.keys(data) [key1, key2, key3] key=itemname
                const totaldata = Object.keys(data).map((key) => {//기자제의 종류에 따라 실행하는부분
                    const product = data[key]//한 종류의 기자제가 들어있는 방들의 리스트 [room1, roomm2...]
                    product.map((roominfo)=>{
                        //버튼을 눌렀을 때 필요한 정보들 이곳에 추가
                        roominfo['item_name'] = key
                        //lab_name별로 itemdict를 분리해서 저장
                        if(roomdict[roominfo['lab_name']] != undefined){    //[{labname:생물 준비실...}, {}]      
                            roomdict[roominfo['lab_name']].push(roominfo) 
                        }else{
                            roomdict[roominfo['lab_name']] = [roominfo]
                        }   
                    })
                    
                }); 

                // 실험실 별로 중복되는 기저제 제거하는 부분
                Object.keys(roomdict).map((roomkey) => {
                    let itemdict = {}
                    roomdict[roomkey].map((item)=>{
                        itemdict[item['item_name']]=item
                    })
                    let itemlist=[]
                    Object.keys(itemdict).map((item) => {
                        if(itemlist.length<11){
                            itemlist.push(itemdict[item])
                        }
                        
                    })
                    roomdict[roomkey] = itemlist
                })
                setdata(roomdict)

            }else{
                setdata(initialdata)
            }
            
        }
    }, {
        onlyOnce: true
      })
    const roomtitle = Object.keys(data) // [s1, s2, s3, s4]
    const navigate = props.navigate
    const onClickitemButton=(value)=>{
        console.log(value)
        navigate(`/closet?labName=${encodeURIComponent(value['lab_name'])}&floor=${encodeURIComponent(value['floor'])}&closetNum=${encodeURIComponent(value['closet_num'])}&i=${encodeURIComponent(value['container_num(i)'])}&j=${encodeURIComponent(value['closet_order_in_container(j)'])}`)
    }
    //http://localhost:3000/closet?labName=%EC%83%9D%EB%AC%BC%20%EC%A4%80%EB%B9%84%EC%8B%A4&floor=2&closetNum=20&i=2&j=4
    //http://localhost:3000/lab?labName=%EC%83%9D%EB%AC%BC%20%EC%A4%80%EB%B9%84%EC%8B%A4&floor=2&closetNum=4&i=4&j=3
    return (
        <div class="search_mainBox">
            <div class="mainBox_div borderBot h10" >
                <form id="searchBar" onSubmit={(event)=>{
                    event.preventDefault();
                    let keyword = encodeURIComponent(document.getElementById('searchText').value);
                    navigate(`/search?keyword=${keyword}`)
                    }}>
                    <input type="text" id="searchText" class="no-outline" placeholder="기자재를 검색해주세요." ></input>
                    <button class="searchIco no-outline" type="submit" >
                        <svg viewBox="4 4 30 30">
                            <path id="searchIco" d="M 33.26780319213867 29.7327709197998 L 26.9214916229248 23.38645553588867 C 28.23275566101074 21.41018295288086 29.0002613067627 19.04390907287598 29.0002613067627 16.50013160705566 C 29.0002613067627 9.607558250427246 23.39270401000977 3.999999523162842 16.50013160705566 3.999999523162842 C 9.607558250427246 3.999999523162842 3.999999523162842 9.607558250427246 3.999999523162842 16.50013160705566 C 3.999999523162842 23.39270401000977 9.607558250427246 29.0002613067627 16.50013160705566 29.0002613067627 C 19.04390907287598 29.0002613067627 21.41018295288086 28.23275566101074 23.38645362854004 26.9214916229248 L 29.73276901245117 33.26780319213867 C 30.7077808380127 34.24406433105469 32.29279327392578 34.24406433105469 33.26780319213867 33.26780319213867 C 34.24406433105469 32.29154205322266 34.24406433105469 30.70903205871582 33.26780319213867 29.7327709197998 Z M 7.750038623809814 16.50013160705566 C 7.750038623809814 11.67508029937744 11.67508029937744 7.750038623809814 16.50013160705566 7.750038623809814 C 21.32518196105957 7.750038623809814 25.25022506713867 11.67508029937744 25.25022506713867 16.50013160705566 C 25.25022506713867 21.32518196105957 21.32518196105957 25.25022506713867 16.50013160705566 25.25022506713867 C 11.67507934570312 25.25022506713867 7.750038623809814 21.32518196105957 7.750038623809814 16.50013160705566 Z">
                            </path>
                        </svg>
                    </button>
                </form>
                
            </div>
            <div class="mainBox_div h90">
                {/* {for (i in roomtitle){
                    return fuc(i)
            }} */}
                {roomtitle.length!=0? roomtitle.map((title) => {
                    return <section class="room_title" style={{paddingTop:20}}>{title}
                        {data[title].map((item) => {
                            return <section class="sub_title">
                                <button class="itembtn" onClick={()=>onClickitemButton(item)}>
                                    {item['item_name']}
                                </button>
                            </section>
                        })}
                    </section >
                }):<div style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'80px'}}>
                    <p style={{fontSize:'30px',lineHeight:'36px'}}>죄송합니다. 찾으시는 물품이 존재하지 않습니다.</p>
                    <p style={{fontSize:'20px',color:'#919191'}}>정확한 검색어를 입력해주세요.</p>
                </div>
                }
            </div>
        </div>)
}



function Search() {
    const navigate = useNavigate()
    return <div id="r">

        <Header mode='search' navigate={navigate}></Header>
        <SearchContent navigate={navigate} />
        <Footer></Footer>
    </div>
}

export default React.memo(Search)