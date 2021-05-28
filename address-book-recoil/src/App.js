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
        <RecoilRoot>
          <div class="col left">
            <MemberSearch />
            <MemberList />
          </div>
          <MemberDetail />
        </RecoilRoot>
      </div>
    </div>
  );
}

export default App;
