import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedList, changeScreen, searchMemberList } from '../atoms/atom';
import { IMembers } from '../types/imembers';

function MemberList() {
  // 선택한 Member 저장 변수
  const setSel = useSetRecoilState<IMembers | undefined>(selectedList);
  // 검색한 Member 저장 변수
  const list = useRecoilValue<IMembers[]>(searchMemberList);
  // 추가/수정/삭제 버튼 클릭 시 화면전환
  const setchangeScn = useSetRecoilState<string>(changeScreen);

  // Member 클릭 이벤트
  const selectedMember = (sel: IMembers) => {
    setSel(sel);
    setchangeScn('detail');
  };

  // 2021.08.25 searchMemberList로 대체
  // const selector = useRecoilValue<IMembers[]>(memberListSelector);

  return (
    <div className="contact-list">
      <ul>
        {list.map((list) => (
          <li key={list.id}>
            <button type="button" onClick={() => selectedMember(list)}>
              {list.name}
            </button>
          </li>
        ))}
        {/* 2021.08.25 searchMemberList로 대체 */}
        {/* {selector.map((list) => (
          <li key={list.id}>
            <button type="button" onClick={() => selectedMember(list)}>
              {list.name}
            </button>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default MemberList;
