import { atom, selector } from 'recoil';
import { IMembers } from '../interface/imembers';
import ApiService from '../components/apiService';

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

// 추가/수정/삭제 버튼 클릭 시 화면전환
export const changeScreen = atom<'clear' | 'edit' | 'add' | 'info'>({
  key: 'changeScreen',
  default: 'clear',
});

export const apiDataSelector = selector({
  key: 'apiDataSelector',
  get: async ({ get }) => {
    const searchText = get(searchValue);
    get(trigger);
    let list = await ApiService.fetchUsers();
    return list.filter((contact) => contact.name.includes(searchText));
  },
});

export const trigger = atom<number>({
  key: 'trigger',
  default: 0,
});
