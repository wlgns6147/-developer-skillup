import "./app.css";
import React, { useState } from "react";

function App() {
  // valuebox = 계산 값
  const [valuebox, setValuebox] = useState(0);
  // inputbox = 입력 값
  const [inputbox, setInputbox] = useState(0);
  // 현재 위치 표시 index
  const [index, setIndex] = useState(0);
  // undo, redo를 위한 배열
  const [arr, setArr] = useState([0]);
  // inputbox 값 변경 이벤트
  const onChange = (e) => {
    setInputbox(e.target.value);
  };
  // 버튼 클릭 이벤트
  const onClick = (type) => {
    if (type === "add" || type === "sub") {
      if (inputbox == '' || inputbox == null) {
        return;
      }
      else {
        if (type === "add") {
          setValuebox(Number(valuebox) + Number(inputbox));
        }
        else {
          setValuebox(Number(valuebox) - Number(inputbox));
        }

        if (arr.length > 1 && arr.length > index) {
          for (var i = arr.length; i > index + 1; i--) {
            arr.pop();
          }
        }

        // arr 배열 값 추가
        arr.push(Number(valuebox) + Number(inputbox));
        setIndex(index + 1);
      }
      setInputbox('');
    }
    else if (type === "undo") {
      if (index >= 1) {
        setValuebox(arr[index - 1]);
        setIndex(index - 1);
      }
    }
    else if (type === "redo") {
      if (index < arr.length - 1) {
        setValuebox(arr[index + 1]);
        setIndex(index + 1);
      }
    }
    console.log("valuebox = " + valuebox);
    console.log("inputbox = " + inputbox);
    console.log("index = " + index);
    console.log("arr = " + arr);
    console.log("==================");
  };

  return (
    <div className="container">
      <div id="valuebox" className="counter">
        {valuebox}
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
        <button id="redoButton" className="btn" disabled={index >= arr.length - 1} onClick={() => onClick("redo")}>
          Redo
        </button>
      </div>
    </div>
  );
}

export default App;
