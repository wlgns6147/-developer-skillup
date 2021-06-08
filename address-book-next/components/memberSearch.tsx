import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { selectedList, searchValue, changeScreen, addMemberData } from '../data/atom';
import { IMembers } from '../interface/imembers';

function MemberSearch() {
  // 검색어 입력시 검색어 저장
  const [search, setSearch] = useRecoilState<string>(searchValue);
  // 검색시 상세정보 초기화
  const resetDetail = useResetRecoilState(selectedList);
  // 추가/수정/삭제 버튼 클릭 시 화면전환
  const setchangeScn = useSetRecoilState<string>(changeScreen);
  // 검색어 변경 이벤트
  const searchValueChange = (inputText: string) => {
    // 검색어 입력시 검색어 저장
    setSearch(inputText);
    // 검색시 상세정보 초기화
    resetDetail();
  };

  const resetData = useResetRecoilState(addMemberData);
  const onClickaddButton = () => {
    resetData();
    setchangeScn('add');
  };

  return (
    <div className="search-box">
      <input value={search} type="text" className="inp-sch" placeholder="검색어를 입력하세요." onChange={(e) => searchValueChange(e.target.value)} />{' '}
      <button className="addButton" onClick={onClickaddButton}>
        추가
      </button>
    </div>
  );
}

export default MemberSearch;
