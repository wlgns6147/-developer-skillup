import './App.css';
import React, { useState } from 'react';

import MemberSearch from './component/memberSearch';
import MemberList from './component/memberList';
import MemberDetail from './component/memberDetail';
import Members from './members';

function App() {
  // 선택한 Member 저장 변수
  const [selectedList, setSelectedList] = useState();
  // 검색어 저장 변수
  const [searchValue, setSearchValue] = useState();
  // 검색한 Member 저장 변수
  const [searchMemberList, setSearchMemberList] = useState(Members);

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
    memberSearch(searchValue);
  };

  // Member 검색 이벤트
  const memberSearch = (searchValue) => {
    setSearchMemberList(Members.filter((list) => list.name.includes(searchValue)));
  };

  return (
    <div class="container">
      <h1 class="subject">Members</h1>
      <div class="contact-wrap">
        <div class="col left">
          {/* Member 검색 */}
          <MemberSearch searchValue={searchValue} searchValueChange={searchValueChange} />
          {/* Member 리스트 */}
          <MemberList selectedMember={selectedMember} searchMemberList={searchMemberList} />
        </div>
        {/* Member 상세 정보 */}
        <MemberDetail selectedList={selectedList} />
      </div>
    </div>
  );
}

export default App;
