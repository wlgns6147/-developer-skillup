interface IPatient {
  id: number; //id
  state: string; //상태
  time: string; //시간
  name: string; //이름
  regNum: string; //등록번호
  sex: string; //성별
  callIcon: string; //호출아이콘
}

export type { IPatient };
