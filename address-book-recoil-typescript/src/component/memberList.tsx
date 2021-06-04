import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedList, searchMemberList } from "../atom/atom";
import { IMembers } from "../interface/imembers";

function MemberList() {
  // 선택한 Member 저장 변수
  const setSel = useSetRecoilState<IMembers | undefined>(selectedList);
  // 검색한 Member 저장 변수
  const list = useRecoilValue<IMembers[]>(searchMemberList);

  // Member 클릭 이벤트
  const selectedMember = (sel: IMembers) => {
    setSel(sel);
  };

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
      </ul>
    </div>
  );
}

export default MemberList;
