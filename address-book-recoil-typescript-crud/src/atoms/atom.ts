import { atom } from 'recoil';
import Members from './members';
import { IMembers } from '../types/imembers';

// 선택한 Member 저장 변수
export const selectedList = atom<IMembers | undefined>({
  key: 'selectedList',
  default: undefined,
});

// Member 추가를 위한 input값 저장 변수
export const addMemberData = atom<IMembers | undefined>({
  key: 'addMemberData',
  default: {
    id: 0,
    name: '',
    dept: '',
    phone: '',
    mail: '',
  },
});

// 검색어 저장 변수
export const searchValue = atom<string>({
  key: 'searchValue',
  default: '',
});

// 검색한 Member 저장 변수 (2021.08.25 selector 대신 추가)
export const searchMemberList = atom<IMembers[]>({
  key: 'searchMemberList',
  default: Members,
});

// Members Data (2021.08.25 굳이 Recoil로 선언 안하고 화면에서 바로 Members 사용)
export const members = atom<IMembers[]>({
  key: 'members',
  default: Members,
});

// Members Selector (2021.08.25 searchMemberList로 대체)
// export const memberListSelector = selector<IMembers[]>({
//   key: 'memberListSelector',
//   get: ({ get }) => {
//     const searchText = get(searchValue);
//     const list = get(members);
//     return list.filter((contact) => contact.name.includes(searchText));
//   },
// });

// 추가/수정/삭제 버튼 클릭 시 화면전환 (2021.08.24 TypeScript 버전업으로 에러가 나는 듯?)
// export const changeScreen = atom<'detail' | 'edit' | 'add'>({
export const changeScreen = atom<string>({
  key: 'changeScreen',
  default: 'detail',
});
