import '../App.css';
import React, {useState, useEffect} from 'react';
import Lab from '../routes/lab.js'
import Explain from '../routes/explain.js'
import SchoolMap from '../routes/schoolmap.js'
import Search from '../routes/search.js'
import Credit from '../routes/credit.js';
import Comment from '../routes/comment.js'

import { ref, set, get, child } from "firebase/database";
import { getDownloadURL, ref as sref } from "firebase/storage"



function Context(props) {
  // main page
  if (props.mode === "MAP"){
    return <SchoolMap></SchoolMap>
  } else if (props.mode === "SEARCH"){ // map에서 검색버튼 누르면 search로 넘어감
    return <Search></Search>
  } else if (props.mode === "EXPLAIN"){ // lab 또는 search에서 기자재 선택 시 explain으로 넘어감
    return <Explain></Explain>
  } else if (props.mode === "LAB"){ // map에서 실험실 누르면 lab으로 넘어감
    return <Lab></Lab>
  } else if (props.mode === "CREDIT"){ //제작자 소개 누르면 credit으로 넘어감
    return <Credit></Credit>
  }
}

function Header(props) {
  return (
    <header id='header'>
        <h1 id="title" onClick={event=>{
          props.onChangeMode();
        }}>대구일과학고등학교 기자재 지도</h1>
        <div></div>
        <form id="search">
            <div id="searchBar">
                <input type="text" id="searchText" class="no-outline" placeholder="검색하기..." ></input>
                <button class="searchIco no-outline" type="submit">
                  <svg viewBox="4 4 30 30">
                      <path id="searchIco" d="M 33.26780319213867 29.7327709197998 L 26.9214916229248 23.38645553588867 C 28.23275566101074 21.41018295288086 29.0002613067627 19.04390907287598 29.0002613067627 16.50013160705566 C 29.0002613067627 9.607558250427246 23.39270401000977 3.999999523162842 16.50013160705566 3.999999523162842 C 9.607558250427246 3.999999523162842 3.999999523162842 9.607558250427246 3.999999523162842 16.50013160705566 C 3.999999523162842 23.39270401000977 9.607558250427246 29.0002613067627 16.50013160705566 29.0002613067627 C 19.04390907287598 29.0002613067627 21.41018295288086 28.23275566101074 23.38645362854004 26.9214916229248 L 29.73276901245117 33.26780319213867 C 30.7077808380127 34.24406433105469 32.29279327392578 34.24406433105469 33.26780319213867 33.26780319213867 C 34.24406433105469 32.29154205322266 34.24406433105469 30.70903205871582 33.26780319213867 29.7327709197998 Z M 7.750038623809814 16.50013160705566 C 7.750038623809814 11.67508029937744 11.67508029937744 7.750038623809814 16.50013160705566 7.750038623809814 C 21.32518196105957 7.750038623809814 25.25022506713867 11.67508029937744 25.25022506713867 16.50013160705566 C 25.25022506713867 21.32518196105957 21.32518196105957 25.25022506713867 16.50013160705566 25.25022506713867 C 11.67507934570312 25.25022506713867 7.750038623809814 21.32518196105957 7.750038623809814 16.50013160705566 Z">
                      </path>
                  </svg>
                </button>
            </div>
        </form>
        <div id="headerLine"></div>
    </header>);
}

function Footer(props) {
  return(
  <footer id='footer'>
        <div id="copyright">Ⓒ2023 KLOPP, all rights reserved.</div>
        <div> </div>
        <div id="creditTxt" onClick={(event)=>{
          props.onChangeMode();
        }}>제작자 소개</div>
    </footer>);
}

function App() {
  // rtdb 업로드
  /*const labList = {
    1: {3:'hu'},
    2: {4:'jj'},
    3: {5:222},
    4: {1:'77'}
  }
  const reference = ref(db, 'equipment/1')
  set(reference, labList);*/

  // rtdb 불러오기
  /*const reference = ref(db)
  let list = {}
  get(child(reference, '/')).then((snapshot) => {
    if (snapshot.exists()) {
      list['equipment'] = snapshot.val()['equipment']
    } else {
      console.log("No data available");
    }
  })
  console.log(list)*/

  // storage 이미지 불러오기
  /*const dbRef = ref(db)
  const [imgLink, setImgLink] = useState(null)
  get(child(dbRef, '/equipment/1/공공기기 실험실/comment')).then((snapshot) => {
    if (snapshot.exists()){
      const Pos = snapshot.val()
      const imgPos = sref(storage, Pos)
      const url = getDownloadURL(imgPos)
      url.then((result)=>{
        setImgLink(result)
      })
    }
  })*/
  const [mode, setMode] = useState("MAP")

  return (
    <div id="r">
      <Header mode={mode} onChangeMode={()=>{
        setMode("MAP")
      }}></Header>
      <Context mode={mode}></Context>
      <Footer mode={mode} onChangeMode={()=>{
        setMode("CREDIT")
      }}></Footer>
    </div>
  );
}

export default App;
