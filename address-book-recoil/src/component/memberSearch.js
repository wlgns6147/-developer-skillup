import React from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { members, selectedList, searchValue, searchMemberList } from '../atom/atom'

export default function MemberSearch() {

    // 검색어 입력시 검색어 저장
    const [search, setSearch] = useRecoilState(searchValue)
    // 검색한 Member 저장 변수
    const setSearchList = useSetRecoilState(searchMemberList);
    // members.js
    const list = useRecoilValue(members);
    // 검색시 상세정보 초기화
    const resetDetail = useResetRecoilState(selectedList);

    // 검색어 변경 이벤트
    const searchValueChange = (inputText) => {
        // 검색어 입력시 검색어 저장
        setSearch(inputText);
        // 검색시 상세정보 초기화
        resetDetail();
        // 검색한 MemberList 저장
        setSearchList(list.filter((list) => list.name.includes(inputText)));
    };

    return (
        <div className="search-box">
            <input
                value={search}
                type="text"
                className="inp-sch"
                placeholder="검색어를 입력하세요."
                onChange={(e) => searchValueChange(e.target.value)}
            />
        </div>
    );
};