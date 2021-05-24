import "./app.css";
import React, { useState } from "react";

function App() {
  // valuebox = 계산 값
  const [valuebox, setValuebox] = useState([0]);
  // inputbox = 입력 값
  const [inputbox, setInputbox] = useState(0);
  // 현재 위치 표시 index
  const [index, setIndex] = useState(0);
  // inputbox 값 변경 이벤트
  const onChange = (e) => {
    setInputbox(e.target.value);
  };
  // 버튼 클릭 이벤트
  const onClick = (type) => {
    if (type === "add" || type === "sub") {

      console.log("valuebox=" + valuebox);
      console.log("inputbox=" + inputbox);
      console.log("index=" + index);


      const indexValue = valuebox[index];
      const tempArr = valuebox.splice(0, index + 1);

      if (type === "add") {
        tempArr.push(indexValue + Number(inputbox));
      }
      else {
        tempArr.push(indexValue - Number(inputbox));
      }
      setValuebox(tempArr);
      setIndex(index + 1);
      setInputbox(0);
    }
    else if (type === "undo") {
      setIndex(index - 1);
    }
    else if (type === "redo") {
      setIndex(index + 1);
    }
  };

  return (
    <div className="container">
      <div id="valuebox" className="counter">
        {valuebox[index]}
      </div>
      <input id="inputbox" type="number" className="input" value={inputbox} onChange={onChange} />
      <div className="btnGroup">
        <button id="undoButton" className="btn" disabled={index === 0} onClick={() => onClick("undo")}>
          Undo
        </button>
        <button id="addButton" className="btn" onClick={() => onClick("add")}>
          +
        </button>
        <button id="subButton" className="btn" onClick={() => onClick("sub")}>
          -
        </button>
        <button id="redoButton" className="btn" disabled={index >= valuebox.length - 1} onClick={() => onClick("redo")}>
          Redo
        </button>
      </div>
    </div>
  );
}

export default App;
