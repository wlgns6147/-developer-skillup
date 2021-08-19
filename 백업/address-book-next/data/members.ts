// import { IMembers } from '../interface/imembers';

// let members: IMembers[] = [
let members = [
  {
    id: 1,
    name: '박시현',
    dept: '헬스케어솔루션사업본부',
    phone: '010-1111-1111',
    mail: '박시현@wehago.com',
  },
  {
    id: 2,
    name: '윤서영',
    dept: '헬스케어솔루션사업본부',
    phone: '010-2222-2222',
    mail: '윤서영@wehago.com',
  },
  {
    id: 3,
    name: '이종현',
    dept: '헬스케어솔루션사업본부',
    phone: '010-3333-3333',
    mail: '이종현@wehago.com',
  },
  {
    id: 4,
    name: '임도희',
    dept: '플랫폼사업부문',
    phone: '010-4444-4444',
    mail: '임도희@wehago.com',
  },
  {
    id: 5,
    name: '조민상',
    dept: '플랫폼사업부문',
    phone: '010-5555-5555',
    mail: '조민상@wehago.com',
  },
];

export const deleteData = (id: number) => {
  members = members.filter((list) => list.id !== id);
  return members;
};

export const editData = (id: number, name: string, dept: string, phone: string, mail: string) => {
  members = deleteData(id);
  members = [
    ...members,
    {
      id,
      name,
      dept,
      phone,
      mail,
    },
  ];
  return members;
};

export const addData = (name: string, dept: string, phone: string, mail: string) => {
  members = [
    ...members,
    {
      id: addDataID,
      name,
      dept,
      phone,
      mail,
    },
  ];
  addDataID++;
  return members;
};

let addDataID = 6;

export default members;
