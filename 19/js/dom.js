//dom.js
// Document object model
//let myPicture = {name: "해와달",width:200, height:300} => property(속성)
//<img src = "small.jpg">=> attribute(속성)
document.addEventListener('DOMContentLoaded', attrChangeFunc); //함수이름만 넣어야한다.

function attrChangeFunc(e) {
  console.log(e);


  // 대상선택.
  document.querySelectorAll('div#small-pic>img').forEach(function (item) {
    console.log(item);
    //img 이벤트 등록.
    item.addEventListener('mouseover', function (e) {
      console.log(e.target.src);
      document.querySelector('#prod-pic>Img').src = e.target.src; //이미지가 바뀜
    })
  });
  //button 대상 선택.
  document.querySelector('#desc button').addEventListener('click', function () {
    let itemName = document.querySelector('#desc>ul>li:nth-of-type(1)>span').innerText;
    let price = document.querySelector('#desc>ul>li:nth-of-type(2)>input').value;
    let logis = document.querySelector('#desc>ul>li:nth-of-type(3)>input').value;
  
    // console.log(itemName, price, logis);
    alert(`${itemName}(결제금액: ${parseInt(price)+parseInt(logis)}원)`);
  });

}

//요소의 값을 변경.
function domChangeFunc() {

  let heading = document.querySelector('#heading');
  heading.onclick = function () {
    heading.innerText = "추천! 오늘의 커피";
    document.getElementById('cup').src = "images/coffee-blue.jpg";
  }
  console.log(heading);


  let detail = document.querySelector('#detail>ul');
  detail.innerHTML = '<li>사과</li><li>바나나</li>';
  console.log();
  // console.log(detail.innerHTML);
  // console.log(detail.textContent);
}

//Dom 요소의 선택.
function domFunc() {
  let targetItem = document.getElementById('container'); //id 값으로 선택.
  targetItem = document.querySelector('#container')[0]; //small이라는 요소를 다 가져옴. HTMLCollection ([배열])

  targetItem = document.getElementsByClassName('small');
  for (let i = 0; i < targetItem.length; i++) {
    console.log(targetItem[i].src);
  }
  targetItem = document.querySelectorAll('small'); //NodeList([배열])
  targetItem.forEach(function (item) {
    item.style.borderColor = 'red';
    item.style.borderWidth = '3px';
    item.style.borderStyle = 'solid';
  });
  targetItem = document.getElementsByTagName('img'); //HTMLCollection([배열])
  targetItem = document.querySelectorAll('img'); //NodeList
  console.log(targetItem);
} // end of domFunc();