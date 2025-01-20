//dom1.js

//element(tag) vs. node
document.addEventListener('DOMContentLoaded', function () {
  let container = document.querySelector('#container');
  console.dir(container.children);


  document.querySelector('botton').addEventListener('click', function () {
    container.children[3].style.display = 'block';
    // document.querySelector('#detail>ul').innerHTML += '<li>가공법 : 워시드</li>';
    let item = document.createElement('li'); //Element 생성
    let txt = document.createTextNode('가공법: 워시드'); // TextNode 생성
    item.appendChild(txt); //추가 qnah.appendChild(자식)
    console.log(item);
    document.querySelector('detail>ul').appendChild(item);
  })
})