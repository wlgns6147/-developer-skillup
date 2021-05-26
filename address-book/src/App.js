import './App.css';
import React, { useState } from 'react';
import MemberList from './component/memberList';
import MemberDetail from './component/memberDetail';

function App() {

  // 선택한 Member 저장 변수
  const [selectedList, setSelectedList] = useState();
  // 검색어 저장 변수
  const [searchValue, setSearchValue] = useState();
  // Member 클릭 이벤트
  const selectedMember = (selectedList) => {
    setSelectedList(selectedList);
  };
  // 검색어 변경 이벤트
  const searchValueChange = (searchValue) => {
    // 검색어 입력시 검색어 저장
    setSearchValue(searchValue);
    // 검색시 상세정보 초기화
    setSelectedList();
  };

  return (
    <div class="container">
      <h1 class="subject">Members</h1>
      <div class="contact-wrap">
        <MemberList searchValue={searchValue} searchValueChange={searchValueChange} selectedMember={selectedMember} />
        <MemberDetail selectedList={selectedList} />
      </div>
    </div>
  );
}

export default App;
