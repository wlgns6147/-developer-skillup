import { RecoilRoot } from 'recoil';
import MemberSearch from '../components/memberSearch';
import MemberList from '../components/memberList';
import MemberDetail from '../components/memberDetail';

export default function Home() {
  return (
    <div className="container">
      <h1 className="subject">Members-Next.js</h1>
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
