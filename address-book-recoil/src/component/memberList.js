import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedList, searchMemberList } from '../atom/atom'

export default function MemberList() {

    // 선택한 Member 저장 변수
    const setSel = useSetRecoilState(selectedList);
    // 검색한 Member 저장 변수
    const list = useRecoilValue(searchMemberList);

    // Member 클릭 이벤트
    const selectedMember = (sel) => {
        setSel(sel);
    };

    return (
        <div class="contact-list">
            <ul>
                {list.map((list) => (
                    <li key={list.id}>
                        <button type="button" onClick={() => selectedMember(list)}>{list.name}</button>
                    </li>
                ))}
            </ul>
        </div >
    );
}