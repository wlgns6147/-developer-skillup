import { useRecoilValue } from "recoil";
import { selectedList } from "../data/atom";
import { IMembers } from "../interface/imembers";

function MemberDetail() {
  // 선택한 Member 저장 변수
  const selectedData = useRecoilValue<IMembers | undefined>(selectedList);

  return (
    <div className="col right">
      <div className="details">
        {selectedData ? (
          <ul className="info">
            <li>이름: {selectedData.name}</li>
            <li>부서: {selectedData.dept}</li>
            <li>휴대폰: {selectedData.phone}</li>
            <li>메일: {selectedData.mail}</li>
          </ul>
        ) : (
          <p className="emptyset">정보가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default MemberDetail;
