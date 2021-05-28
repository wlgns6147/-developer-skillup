import { atom } from 'recoil';
import Members from '../members';

// 선택한 Member 저장 변수
export const selectedList = atom({
    key: 'selectedList',
    default: ''
});

// 검색어 저장 변수
export const searchValue = atom({
    key: 'searchValue',
    default: ''
});

// 검색한 Member 저장 변수
export const searchMemberList = atom({
    key: 'searchMemberList',
    default: Members
});

// Members Data
export const members = atom({
    key: 'members',
    default: Members
});