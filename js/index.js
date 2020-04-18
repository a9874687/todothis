//指定DOM元素
var list = document.querySelector('.list')
var sendData = document.querySelector('.send');
var data = JSON.parse(localStorage.getItem('listData')) || [];

//監聽與資料更新
sendData.addEventListener('click', addData);
list.addEventListener('click',toggleList);
updateList(data);

//點擊新增一筆，並同步更新網頁與 localstorage
function addData(e){
    e.preventDefault();
    var txt = document.querySelector('.textClass').value;
    var todo ={
        content: txt
    };
    data.push(todo);
    updateList(data);    
    localStorage.setItem('listData',JSON.stringify(data));
}

//updateList更新
function updateList(item) {
    str = '';
    var len = item.length;
    for (var i = 0; len > i; i++) {
      str += '<li><a href="#" data-index=' + i + ' />刪除</a> <span>' + item[i].content + '</span></li>';
    }
    list.innerHTML = str;
  }

  // 刪除代辦事項
  function toggleList(e) {
    e.preventDefault();
    if(e.target.nodeName !== 'A'){return};
    var index = e.target.dataset.index;
    data.splice(index, 1);
    localStorage.setItem('listData', JSON.stringify(data));
    updateList(data);
  }