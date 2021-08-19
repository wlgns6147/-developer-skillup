import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedList } from '../atom/atom'

// Member 상세 정보
const MemberDetail = () => {
    // 선택한 Member 저장 변수
    const selectedData = useRecoilValue(selectedList);

    return (
        <div class="col right">
            <div class="details">
                {selectedData ? (
                    <ul class="info">
                        <li>이름: {selectedData.name}</li>
                        <li>부서: {selectedData.dept}</li>
                        <li>휴대폰: {selectedData.phone}</li>
                        <li>메일: {selectedData.mail}</li>
                    </ul>
                ) : (
                    <p class="emptyset">정보가 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default MemberDetail;