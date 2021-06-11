import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { selectedList, changeScreen, apiDataSelector } from '../data/atom';
import { IMembers } from '../interface/imembers';

function MemberList() {
  const selector = useRecoilValueLoadable<IMembers[]>(apiDataSelector);
  // 선택한 Member 저장 변수
  const setSel = useSetRecoilState<IMembers | undefined>(selectedList);
  // 추가/수정/삭제 버튼 클릭 시 화면전환
  const setchangeScn = useSetRecoilState<string>(changeScreen);
  // Member 클릭 이벤트
  const selectedMember = (sel: IMembers) => {
    setSel(sel);
    setchangeScn('info');
  };

  return (
    <div className="contact-list">
      <ul>
        {selector.state === 'hasValue' &&
          selector.contents.map((list) => (
            <li key={list.id}>
              <button type="button" onClick={() => selectedMember(list)}>
                {list.name}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MemberList;
