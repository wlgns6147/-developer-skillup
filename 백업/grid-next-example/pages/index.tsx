import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { ApiService } from '../components/apiService';

const gridMainInfo = {
  name: 'base',
  fields: [
    {
      fieldName: '상태',
    },
    {
      fieldName: '시간',
    },
    {
      fieldName: '이름',
    },
    {
      fieldName: '등록번호',
    },
    {
      fieldName: '성별',
    },
    {
      fieldName: '나이',
    },
    {
      fieldName: '호출',
    },
  ],
  columns: [
    {
      name: '상태',
      fieldName: '상태', //fileds 에 정의한 필드네임과 매칭
      header: '상태',
      width: '150',
    },
    {
      name: '시간',
      fieldName: '시간',
      header: '시간',
      width: '150',
    },
    {
      name: '이름',
      fieldName: '이름',
      header: '이름',
      width: '150',
    },
    {
      name: '등록번호',
      fieldName: '등록번호',
      header: '등록번호',
      width: '230',
      numberFormat: '0',
    },
    {
      name: '성별',
      fieldName: '성별',
      header: '성별',
      width: '150',
    },
    {
      name: '나이',
      fieldName: '나이',
      header: '나이',
      width: '130',
      numberFormat: '0',
    },
    {
      name: '호출',
      fieldName: '호출',
      header: '호출',
      width: '200',
      renderer: {
        type: 'image',
        imageHeight: 32,
        imageWidth: 32,
        imageMap: {
          call: './icon/call.png',
          doctor: './icon/doctor.png',
        },
      },
    },
  ],
};

const data = [
  {
    상태: '진료 중',
    시간: '15:32',
    이름: '김더존',
    등록번호: '1711020',
    성별: 'F',
    나이: '19',
    호출: 'doctor',
  },
  {
    상태: '대기',
    시간: '15:34',
    이름: '김더존',
    등록번호: '1711021',
    성별: 'M',
    나이: '24',
    호출: 'call',
  },
  {
    상태: '대기',
    시간: '15:42',
    이름: '김더존',
    등록번호: '1711022',
    성별: 'M',
    나이: '42',
    호출: 'call',
  },
  {
    상태: '보류',
    시간: '15:43',
    이름: '김더존',
    등록번호: '1711023',
    성별: 'F',
    나이: '15',
    호출: 'call',
  },
  {
    상태: '보류',
    시간: '15:52',
    이름: '김더존',
    등록번호: '1711024',
    성별: 'M',
    나이: '33',
    호출: 'call',
  },
];

const Grid = dynamic(() => import('../components/Grid'), { ssr: false });

export default function Home() {
  useEffect(() => {
    console.log('useEffect()');
  });

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <script type="text/javascript" src="https://static.wehago.com/realgrid2/realgrid-lic.js"></script>
        <link type="text/css" rel="stylesheet" href="https://static.wehago.com/realgrid2/realgrid-style.css"></link>
      </Head>
      <br />
      <div>Grid Base Example</div>
      <br />
      <p>
        1. setFooters() = 풋터 visible
        <br />
        2. setStateBar() = 상태바 visible
        <br />
        3. setCheckBar() = 체크바 visible
        <br />
        4. setOptions() = 그리드 style
      </p>

      <RecoilRoot>
        <div>
          <div style={{ height: '400px', width: '50%' }}>
            <Grid
              gridSetting={gridMainInfo}
              data={data}
              bind={(grid) => {
                grid.gridView.onCurrentChanged = (grid, newIndex) => {
                  console.log('current changed:', newIndex);
                };
                grid.gridView.setFooters({ visible: false });
                grid.gridView.setStateBar({ visible: false });
                grid.gridView.setCheckBar({ visible: false });
                grid.gridView.setOptions({ display: { fitStyle: 'evenFill', rowHeight: 40 } });
              }}
            />
          </div>
        </div>
      </RecoilRoot>
    </div>
  );
}
