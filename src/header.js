import {Link} from "react-router-dom";
import styled from 'styled-components';
import {OptionButton} from "./components/App"

function ToSearchLink(){
    let keyword = encodeURIComponent(document.getElementById('searchText').value);
    window.location.replace(`/search?keyword=${keyword}`)
}

function Form(){
  return  <section id="search">
            <form id="searchBar" onSubmit={(event)=>{
                event.preventDefault();
                ToSearchLink();
                }}>
                <input type="text" id="searchText" class="no-outline" placeholder="검색하기..." ></input>
                <button class="searchIco no-outline" type="submit">
                    <svg viewBox="4 4 30 30">
                        <path id="searchIco" d="M 33.26780319213867 29.7327709197998 L 26.9214916229248 23.38645553588867 C 28.23275566101074 21.41018295288086 29.0002613067627 19.04390907287598 29.0002613067627 16.50013160705566 C 29.0002613067627 9.607558250427246 23.39270401000977 3.999999523162842 16.50013160705566 3.999999523162842 C 9.607558250427246 3.999999523162842 3.999999523162842 9.607558250427246 3.999999523162842 16.50013160705566 C 3.999999523162842 23.39270401000977 9.607558250427246 29.0002613067627 16.50013160705566 29.0002613067627 C 19.04390907287598 29.0002613067627 21.41018295288086 28.23275566101074 23.38645362854004 26.9214916229248 L 29.73276901245117 33.26780319213867 C 30.7077808380127 34.24406433105469 32.29279327392578 34.24406433105469 33.26780319213867 33.26780319213867 C 34.24406433105469 32.29154205322266 34.24406433105469 30.70903205871582 33.26780319213867 29.7327709197998 Z M 7.750038623809814 16.50013160705566 C 7.750038623809814 11.67508029937744 11.67508029937744 7.750038623809814 16.50013160705566 7.750038623809814 C 21.32518196105957 7.750038623809814 25.25022506713867 11.67508029937744 25.25022506713867 16.50013160705566 C 25.25022506713867 21.32518196105957 21.32518196105957 25.25022506713867 16.50013160705566 25.25022506713867 C 11.67507934570312 25.25022506713867 7.750038623809814 21.32518196105957 7.750038623809814 16.50013160705566 Z">
                        </path>
                    </svg>
                </button>
            </form>
  </section>
}

function Header(props) {
  let isSearch;
  let modetxt;
    if (props.mode ==='schoolmap'){
      modetxt='대구일과학고등학교 기자재 지도';
      isSearch = true;
    }
    if (props.mode ==='search'){
      modetxt='대구일과학고등학교 기자재 검색';
    }
    if (props.mode ==='credit'){
      modetxt='제작자 소개';
    }
    if (props.mode === 'lab'){
      modetxt = "대구일과학고등학교 기자재 지도";
      isSearch = true;
    }
    if (props.mode === 'closet'){
      modetxt = "대구일과학고등학교 기자재 지도";
    }

    return (
      <>
        <header id='header'>
          <section id="title">{modetxt}</section>
          <section></section>
          {isSearch ? <Form></Form> : <OptionButton text="메인으로" button_id='mainbutton' background_color='white' width='15vh' height='6.5vh' fontsize='17px'></OptionButton>}
      </header>
      <hr id='line'></hr>
      </>
      
      );
  }
  
export default Header

