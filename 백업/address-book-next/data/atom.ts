import { atom, selector } from 'recoil';
import Members from './members';
import { IMembers } from '../interface/imembers';

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

// Members Data
export const members = atom<IMembers[]>({
  key: 'members',
  default: Members,
});

// Members Selector
export const memberListSelector = selector<IMembers[]>({
  key: 'memberListSelector',
  get: ({ get }) => {
    const searchText = get(searchValue);
    const list = get(members);
    return list.filter((list) => list.name.includes(searchText));
  },
});

// 추가/수정/삭제 버튼 클릭 시 화면전환
export const changeScreen = atom<'detail' | 'edit' | 'add'>({
  key: 'changeScreen',
  default: 'detail',
});
