import './App.css';
import React, { useState } from 'react';
import MemberList from './component/memberList';
import MemberInfo from './component/memberInfo';
import MemberSearch from './component/memberSearch';
import Members from './members';

function App() {

  // 선택한 Member
  const [selectedList, setSelectedList] = useState();
  // 검색창에 입력한 값 저장
  const [searchValue, setSearchValue] = useState();
  // 검색창 변경 이벤트
  const searchValueChange = (searchValue) => {
    setSearchValue(searchValue);
    setSelectedList(null);
  }

  return (
    <div class="container">
      <h1 class="subject">Members</h1>
      <div class="contact-wrap">
        <div class="col left">
          <MemberSearch value={searchValue} searchValueChange={searchValueChange} />
          <div class="contact-list">
            <ul>
              {Members.filter((list) => !searchValue || list.name.includes(searchValue)).map((list) => (
                <li key={list.id}>
                  <button type="button" onClick={() => setSelectedList(list)} className={list === selectedList ? "selected" : ""}>{list.name}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div class="col right">
          <div class="details">
            {selectedList ? (
              <ul class="info">
                <li>이름: {selectedList.name}</li>
                <li>부서: {selectedList.dept}</li>
                <li>휴대폰: {selectedList.phone}</li>
                <li>메일: {selectedList.mail}</li>
              </ul>
            ) : (
              <p class="emptyset">정보가 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
