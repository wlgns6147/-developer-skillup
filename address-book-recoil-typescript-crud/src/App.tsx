import './css/App.css';
import { RecoilRoot } from 'recoil';

import MemberSearch from './components/memberSearch';
import MemberList from './components/memberList';
import MemberDetail from './components/memberDetail';

function App() {
  return (
    <div className="container">
      <h1 className="subject">Members-Recoil-TypeScript-Crud</h1>
      <div className="contact-wrap">
        <RecoilRoot>
          <div className="col left">
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
