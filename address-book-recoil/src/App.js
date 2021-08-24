import './App.css';
import React from 'react';
import { RecoilRoot } from 'recoil';

import MemberSearch from './component/memberSearch';
import MemberList from './component/memberList';
import MemberDetail from './component/memberDetail';

function App() {
  return (
    <div class="container">
      <h1 class="subject">Members-Recoil</h1>
      <div class="contact-wrap">
        {/* RecoilRoot로 감싸줘야 상태관리 가능. Redux의 Provider 같은 느낌 */}
        <RecoilRoot>
          <div class="col left">
            {/* Member 검색 */}
            <MemberSearch />
            {/* Member 리스트 */}
            <MemberList />
          </div>
          {/* Member 상세 정보 */}
          <MemberDetail />
        </RecoilRoot>
      </div>
    </div>
  );
}

export default App;
