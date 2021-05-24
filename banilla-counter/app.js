// undo, redo를 위한 배열
const arr = Array('0');
// 현재 위치 표시 index
var index = 0;

function onload() {
  var undoButton = document.getElementById("undoButton");
  var addButton = document.getElementById("addButton");
  var subButton = document.getElementById("subButton");
  var redoButton = document.getElementById("redoButton");

  // undoButton.onclick = handleClick('arr');
  // addButton.onclick = handleClick();
  // subButton.onclick = handleClick('sub');
  // redoButton.onclick = handleClick('redo');
}

// input에 숫자를 입력하고 + 버튼을 클릭하면 결과값에 입력한 숫자 만큼 더해지고 input의 값은 없어진다.
// input에 숫자를 입력하고 - 버튼을 클릭하면 결과값에 입력한 숫자 만큼 빼지고 input의 값은 없어진다.
// input에 유효하지 않은 숫자를 입력하고 +, - 버튼을 클릭하면 동작은 무시 되되고 input의 값은 없어진다.(정수만 입력할 수 있다.)

// undo를 클릭하면 이전 값으로 돌아간다. undo 버튼을 클릭해도 이전 인풋값은 유지 된다.
// redo를 클릭하면 이후 값으로 되돌린다. redo 버튼을 클릭해도 이전 인풋값은 유지 된다.
// undo와 redo는 동작이 가능할때만 활성화 상태가 된다.

// input에 유효한 숫자를 입력하고 +, - 버튼을 클릭했을때 이후 값들은 없어지고 Redo 버튼은 비활성화된다.
// -> 1 입력 후 + : 결과값 1
// -> 2 입력 후 + : 결과값 3
// -> 3 입력 후 + : " 결과값 6
// -> arr 버튼 : 결과값 3
// -> 4 입력 후 + : 결과값 7
// -> undo 버튼 : 결과값 3 -> redo 버튼 활성화
// -> undo 버튼 : 결과값 1
// -> undo 버튼 : 결과갑 0 -> undo 버튼 비활성화
// -> redo 버튼 : 결과갑 1 -> undo 버튼 활성화

function handleClick(event) {
  // valuebox = 계산 값
  const valuebox = Number(document.getElementById('valuebox').innerText);
  // inputbox = 입력 값
  const inputbox = Number(document.getElementById('inputbox').value);

  // +/- 버튼 클릭 이벤트
  if (event == 'add' || event == 'sub') {
    // 입력값이 공백/null인경우 게산 값 0으로 표시
    if (inputbox == '' || inputbox == null) {
      return;
    }
    else {
      document.getElementById('undoButton').disabled = false;
      // 입력값 있는 경우 계산 값 + 입력 값
      if (event == 'add') {
        document.getElementById('valuebox').innerText = Number(valuebox + inputbox);
      }
      // 입력값 있는 경우 계산 값 - 입력 값
      else {
        document.getElementById('valuebox').innerText = Number(valuebox - inputbox);
      }

      if (arr.length > 1 && arr.length > index) {
        for (var i = arr.length; i > index + 1; i--) {
          arr.pop();
        }
      }

      // arr 배열 값 추가
      arr.push(document.getElementById('valuebox').innerText);
      ++index;
    }
    // 계산 후 inputbox 클리어
    document.getElementById('inputbox').value = '';
    document.getElementById('redoButton').disabled = true;
  }

  // undo 버튼 클릭 이벤트
  else if (event == 'undo') {
    console.log("arr = " + arr);
    document.getElementById('redoButton').disabled = false;

    if (index >= 1) {
      document.getElementById('valuebox').innerText = arr[index - 1];
      --index;
      if (index == 0) {
        document.getElementById('undoButton').disabled = true;
      }
    }
  }

  // redo 버튼 클릭 이벤트
  else if (event == 'redo') {
    console.log("arr = " + arr);
    document.getElementById('undoButton').disabled = false;

    if (index < arr.length - 1) {
      document.getElementById('valuebox').innerText = arr[index + 1];
      ++index;
      if (index == arr.length - 1) {
        document.getElementById('redoButton').disabled = true;
      }
    }
  }
}