import React, { Component } from 'react';
import { GridView, LocalDataProvider } from 'realgrid';
// import { columns, fields, rows } from './data/realgrid-data';
import { columns, fields, rows } from './data/his-data';
import './App.css';

class App extends Component {
  /*
  그리드 설치 && start : yarn add realgrid && yarn start
  localhost      라이선스 등록(head) : <script>var realGrid2Lic = 'upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYm9cY8amGDkiMnVeQKUHJDjW2y71jtk+wteqHQ1mRMIXzEcGIrzZpzzNTakk0yR9UcO/hzNodVsIiqQNVtxmmYt';</script>
  lululala.co.kr 라이선스 등록(body) : <script type="text/javascript" src="https://static.wehago.com/realgrid2/realgrid-lic.js"></script>
  도메인 연결 : 터미널에서 sudo vi /private/etc/hosts -> ::1 밑에 127.0.0.1		www.lululala.co.kr  추가

  <그리드 개념>
  - GridView : 눈에 보이는 부분 담당하는 객체
  - DataProvider : 그리드의 데이터 관리 객체
  - DataField : 데이터 저장하는 논리적인 장소 담당 객체
  - DataColumn : 그리드 내 셀들 관리

  중요: gird 는 높이를 수동으로 잡아줘야함!!
  <div id="realgrid" style={{ height: 500 }}></div>

  fields : header 에 대한 명세
  columns : 컬럼 안에 들어가는 내용에 대한 명세
  rows : 실제 데이터들
  */

  componentDidMount() {
    this.dataProvider = new LocalDataProvider(false);
    this.gridView = new GridView('realgrid');
    this.gridView.setDataSource(this.dataProvider);

    this.dataProvider.setFields(fields);
    this.gridView.setColumns(columns);
    this.dataProvider.setRows(rows);

    // 그리드 정렬
    // this.gridView.orderBy(
    //   ['FullName', 'Age'],
    //   ['ascending', 'descending'],
    //   ['insensitive', 'insensitive']
    // );

    // singleRow = 선택된 Row
    this.gridView.displayOptions.selectionStyle = 'singleRow';

    this.gridView.setOptions({
      display: {
        fitStyle: 'evenFill',
        rowHeight: 40,
      }
    });

    // 풋터
    this.gridView.setFooters({
      visible: false,
    });

    // 상태바
    this.gridView.setStateBar({
      visible: false,
    });

    // 체크바
    this.gridView.setCheckBar({
      visible: false,
    });
  }

  render() {
    const style = {
      width: '40%',
      height: '500px'
    };

    return (
      <div className="App">
        <h2>RealGrid2 React Sample</h2>
        <div id="realgrid" style={style}></div>
      </div>
    );
  }
}

export default App;