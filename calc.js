(function() {
  'use strict';
  
  const btn = document.getElementById('test');
  const maxEdit = document.getElementById('max-ave');
  const minEdit = document.getElementById('min-ave');
  const todayBtn = document.getElementById('today');
  const dateEdit = document.getElementById('startDate');

  let maxData = document.getElementsByClassName("mor-max");
  let minData = document.getElementsByClassName("mor-min");
  let day = document.getElementsByClassName("day");
  const lenMax = maxData.length;
  const lenMin = minData.length;

  for (let i=0; i<lenMax; i++) {
    maxData[i].onchange = calcMax;
    // maxData[i].addEventListener('change', calc);
  }
  for (let i=0; i<lenMin; i++) {
    minData[i].onchange = calcMin;
    // maxData[i].addEventListener('change', calc);
  }
  btn.onclick = calc;


  todayBtn.onclick = function() {
    let today = new Date();
    dateEdit.value = month_day(today);

    // onchange呼ばれないので自前でコール
    updateDate();
  };

  dateEdit.onchange = updateDate;
  
  function updateDate() {
    let today = new Date();

    // today.getFullYear() + "/" + dateEdit.value
    today = new Date(`${today.getFullYear()}/${dateEdit.value}`);
    
    for (let i=0; i<day.length; i++) {
      today.setDate(today.getDate() + 1);
      day[i].innerHTML = month_day(today);
    }
  }

  function month_day(date) {
    return `${date.getMonth()+1}/${date.getDate()}`;
  }

  function calc() {
    calcMax();
    calcMin();
  }
  function calcMax() {
    calcData(maxData, maxEdit);
  }

  function calcMin() { 
    calcData(minData, minEdit);
  }

  function calcData(data, output) {
    // 
    // alert("ここで平均値を出す");
    let num = 0;
    let sum = 0;
    
    for (let i=0; i<data.length; i++) {
      if (!isNaN(data[i].value)       // 文字列(maxData[i].value)が数字かどうか
                                      // isNaNは文字列が非数ならtrueを返す
                                      // ので、!をつけて数字ならtrueを返す
                                      // ただし、空文字は数字扱いにされる 
       && data[i].value.length > 0) { // ↑が空文字だと抜けてくるので、文字列の長さを見て、0より大きければ
                                      // 空文字じゃないので、それ以降の処理をする
        sum += parseInt(data[i].value);
        num++;
      }
    }

    // 0割防止
    if (num === 0) {

    }
    else {
      output.innerHTML = sum / num;
    }
  }



})();