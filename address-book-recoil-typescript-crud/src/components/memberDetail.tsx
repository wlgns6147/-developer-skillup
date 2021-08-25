import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { selectedList, members, changeScreen, addMemberData, searchValue, searchMemberList } from '../atoms/atom';
import { IMembers } from '../types/imembers';
import { editData, addData, deleteData } from '../atoms/members';

function MemberDetail() {
  // 선택한 Member 저장 변수
  const [selectedData, setSelectedData] = useRecoilState<IMembers | undefined>(selectedList);
  // 삭제시 상세정보 초기화
  const resetDetail = useResetRecoilState(selectedList);
  // members.js
  const setList = useSetRecoilState<IMembers[]>(members);
  // 추가/수정/삭제 버튼 클릭 시 화면전환
  const [changeScn, setchangeScn] = useRecoilState<string>(changeScreen);
  // input값 처리
  const [inputValues, setInputValues] = useRecoilState<IMembers | undefined>(addMemberData);
  // 검색어 입력시 검색어 저장
  const [search, setSearch] = useRecoilState<string>(searchValue);
  const setSearchList = useSetRecoilState<IMembers[]>(searchMemberList);

  const inputChange = (name: string, inputText: string, changeScn: string) => {
    if (changeScn === 'edit') {
      setSelectedData({
        ...selectedData!,
        [name]: inputText,
      });
    } else if (changeScn === 'add') {
      setInputValues({ ...inputValues!, [name]: inputText });
    }
  };

  // 정보 삭제 이벤트
  const deleteList = (id: number, name: string) => {
    alert(name + '님을 삭제하였습니다.');
    // 검색시 상세정보 초기화
    resetDetail();
    // 필터링으로 선택 id 삭제 후 List 세팅
    let temp = deleteData(id);
    setList(temp);
    // Detail 화면 초기화
    setchangeScn('detail');
    // 검색목록 업데이트
    setSearchList(temp);
    // 검색어 초기화
    setSearch('');
  };

  // 저장 버튼 클릭 이벤트
  const onClicksaveButton = (text: string) => {
    let temp: any;
    if (text === 'edit') {
      temp = editData(selectedData!.id, selectedData!.name, selectedData!.dept, selectedData!.phone, selectedData!.mail);
      alert('수정 완료.');
    } else if (text === 'add') {
      temp = addData(inputValues!.name, inputValues!.dept, inputValues!.phone, inputValues!.mail);
      alert('추가되었습니다.');
    }
    // 수정/추가 후 List 세팅
    setList(temp);
    // Detail 화면 초기화
    setchangeScn('detail');
    // 검색목록 업데이트
    setSearchList(temp);
    // 검색어 초기화
    setSearch('');
  };

  return (
    <div className="col right">
      <div className="details">
        {changeScn === 'add' ? (
          <ul className="edit">
            <li>
              이름 : <input name="name" value={inputValues?.name} onChange={(e) => inputChange(e.target.name, e.target.value, 'add')} />
            </li>
            <li>
              부서 : <input name="dept" value={inputValues?.dept} onChange={(e) => inputChange(e.target.name, e.target.value, 'add')} />
            </li>
            <li>
              휴대폰 : <input name="phone" value={inputValues?.phone} onChange={(e) => inputChange(e.target.name, e.target.value, 'add')} />
            </li>
            <li>
              메일 : <input name="mail" value={inputValues?.mail} onChange={(e) => inputChange(e.target.name, e.target.value, 'add')} />
            </li>
            <button className="saveButton" onClick={() => onClicksaveButton('add')}>
              저장
            </button>
          </ul>
        ) : selectedData ? (
          changeScn === 'edit' ? (
            <ul className="edit">
              <li>
                이름 : <input name="name" value={selectedData.name} onChange={(e) => inputChange(e.target.name, e.target.value, 'edit')} />
              </li>
              <li>
                부서 : <input name="dept" value={selectedData.dept} onChange={(e) => inputChange(e.target.name, e.target.value, 'edit')} />
              </li>
              <li>
                휴대폰 :<input name="phone" value={selectedData.phone} onChange={(e) => inputChange(e.target.name, e.target.value, 'edit')} />
              </li>
              <li>
                메일 : <input name="mail" value={selectedData.mail} onChange={(e) => inputChange(e.target.name, e.target.value, 'edit')} />
              </li>
              <button className="saveButton" onClick={() => onClicksaveButton('edit')}>
                저장
              </button>
            </ul>
          ) : (
            <ul className="info">
              <li>이름: {selectedData.name}</li>
              <li>부서: {selectedData.dept}</li>
              <li>휴대폰: {selectedData.phone}</li>
              <li>메일: {selectedData.mail}</li>
              <li className="divide_Line">---------------------------------</li>
              <button className="delButton" onClick={() => deleteList(selectedData.id, selectedData.name)}>
                삭제
              </button>
              <button className="editButton" onClick={() => setchangeScn('edit')}>
                수정
              </button>
            </ul>
          )
        ) : (
          <p className="emptyset">정보가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default MemberDetail;
