import '../App.css';
import React, {useState, useEffect} from 'react';
import AppRouter from './Router.js';

import fb from "../fb.js"
import { useNavigate } from 'react-router';

//헤더, closet 등등에 사용하는 버튼
function OptionButton(props){
  const sizestyle = {
    width: props.width,
    height: props.height,
    fontSize: props.fontsize
  }
  const navigate = useNavigate()
  const url = props.to
  return <form id={props.button_id} onSubmit={(event)=>{
    event.preventDefault()
    navigate(url)
  }}>
      <button type='submit' style={sizestyle} id='optionbuttontxt' class={`${props.background_color}button`}>{props.text}</button>
    </form>

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
  return (
    <AppRouter></AppRouter>
    )
}

export {App, OptionButton};
