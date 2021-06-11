import { useRecoilState } from 'recoil';
import { selectedList, changeScreen, addMemberData, trigger } from '../data/atom';
import { IMembers } from '../interface/imembers';
import ApiService from './apiService';

function MemberDetail() {
  // 선택한 Member 저장 변수
  const [selectedData, setSelectedData] = useRecoilState<IMembers | undefined>(selectedList);
  // 추가/수정/삭제 버튼 클릭 시 화면전환
  const [changeScn, setchangeScn] = useRecoilState<string>(changeScreen);
  // input값 처리
  const [inputValues, setInputValues] = useRecoilState<IMembers | undefined>(addMemberData);

  const [refreshTrigger, setRefreshTrigger] = useRecoilState<number>(trigger);

  const refresh = () => {
    setRefreshTrigger(refreshTrigger + 1);
  };

  const inputChange = (name: string, inputText: string, changeScn: string) => {
    if (changeScn === 'edit') {
      setSelectedData({
        ...selectedData,
        [name]: inputText,
      });
    } else if (changeScn === 'add') {
      setInputValues({ ...inputValues, [name]: inputText });
    }
  };

  // 정보 삭제 이벤트
  const deleteList = async (userID, name) => {
    await ApiService.deleteUser(userID)
      .then((res) => {
        alert(name + '님을 삭제하였습니다.');
      })
      .catch((err) => {
        console.log('삭제 에러', err);
      });
    refresh();
  };

  // 저장 버튼 클릭 이벤트
  const onClicksaveButton = (text: string) => {
    if (text === 'add') {
      let user = {
        name: inputValues.name,
        dept: inputValues.dept,
        phone: inputValues.phone,
        mail: inputValues.mail,
      };
      ApiService.addUser(user)
        .then((res) => {
          refresh();
          alert('등록되었습니다.');
          setchangeScn('clear');
        })
        .catch((err) => {
          console.log('등록 에러', err);
        });
    } else if (text === 'edit') {
      let user = {
        id: selectedData.id,
        name: selectedData.name,
        dept: selectedData.dept,
        phone: selectedData.phone,
        mail: selectedData.mail,
      };
      ApiService.editUser(user)
        .then((res) => {
          refresh();
          alert('수정 완료.');
          setchangeScn('info');
        })
        .catch((err) => {
          console.log('정보 수정 에러', err);
        });
    }
  };

  return (
    <div className="col right">
      <div className="details">
        {changeScn === 'add' ? (
          <ul className="edit">
            <li>
              이름 : <input name="name" value={inputValues.name} onChange={(e) => inputChange(e.target.name, e.target.value, 'add')} />
            </li>
            <li>
              부서 : <input name="dept" value={inputValues.dept} onChange={(e) => inputChange(e.target.name, e.target.value, 'add')} />
            </li>
            <li>
              휴대폰 : <input name="phone" value={inputValues.phone} onChange={(e) => inputChange(e.target.name, e.target.value, 'add')} />
            </li>
            <li>
              메일 : <input name="mail" value={inputValues.mail} onChange={(e) => inputChange(e.target.name, e.target.value, 'add')} />
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
            changeScn === 'info' && (
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
          )
        ) : (
          <p className="emptyset">정보가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default MemberDetail;
