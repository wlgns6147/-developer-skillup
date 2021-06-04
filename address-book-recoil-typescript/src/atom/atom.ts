import { atom } from "recoil";
import Members from "../members";
import { IMembers } from "../interface/imembers";

// 선택한 Member 저장 변수
export const selectedList = atom<IMembers | undefined>({
  key: "selectedList",
  default: undefined,
});

// 검색어 저장 변수
export const searchValue = atom<string>({
  key: "searchValue",
  default: "",
});

// 검색한 Member 저장 변수
export const searchMemberList = atom<IMembers[]>({
  key: "searchMemberList",
  default: Members,
});

// Members Data
export const members = atom<IMembers[]>({
  key: "members",
  default: Members,
});
