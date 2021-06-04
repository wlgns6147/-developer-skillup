import "./App.css";
import { RecoilRoot } from "recoil";

import MemberSearch from "./component/memberSearch";
import MemberList from "./component/memberList";
import MemberDetail from "./component/memberDetail";

function App() {
  return (
    <div className="container">
      <h1 className="subject">Members-Recoil-TypeScript</h1>
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
