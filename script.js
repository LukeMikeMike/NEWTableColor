var tableDiv = document.querySelector('#tableDiv');
var table = document.createElement('table');
var x = 0
var y = 0


function buildTable(rows, cols){
  for (var i = 0; i < rows; i++){
    var row = table.insertRow(-1)
    for (var c = 0; c < cols; c++){
      var column = row.insertCell(-1);
      column.textContent = i *100;
    }
    tableDiv.appendChild(table);
  }
}


buildTable(20,20);
colorMe();

function colorMe(){
table.addEventListener('mousedown', function(event){
  var cell = event.target;
  if (cell.nodeName != 'TABLE')
  cell.classList.toggle('blue');
})
}

document.addEventListener('keydown', function readKey(event){
var key = event.keyCode;
console.log(key);



if (key === 38){
y += -1;
color(x,y);
console.log(x,y)
}

if (key === 40){
y += 1
console.log(x,y)
color(x,y)
}

if (key === 39){
x += 1
console.log(x,y)
color(x,y)
}

if (key === 37){
x += -1
console.log(x,y)
color(x,y)
}


})



function color(x,y){
 var cols = document.getElementsByTagName('table')[0].rows;
console.log(cols);
var blueCell = document.querySelector('.blue');
if (blueCell){
  blueCell.classList.remove('blue');
}

cols[y].cells[x].classList.add('blue');
// cols[0].insertCell(-1);
//  var colsq = document.querySelectorAll('tr');
//  var black = document.querySelector('.blue');
//   console.log(black);
//  if (black){
//    black.classList.remove('blue');
//  }
  // colsq[y].classList.add('blue');
  //console.log(cols);
  //console.log(colsq);
}







// var tableWrapper = document.getElementById('table-wrapper');
// var table = document.createElement("table");

// table.border = "1";

// for (var j = 1; j <= 3; j++) {
//   var row = table.insertRow(-1);
//   for (var k = 1; k <= 3; k++) {
//     var cell = row.insertCell(-1);
//     cell.innerHTML = 'Przykladowy <br>teskt';
//   }
// }
// tableWrapper.appendChild(table);

// // http://jsbin.com/gunaxih

// table.addEventListener('mousedown', function(event) {
//   var cell = event.target;
//   console.log(cell.nodeName);

//   // warunek na usunięcie błedu tabeli na czerwono
//   if (cell.nodeName != 'TABLE'){

//   //removeElemClass(cell);  
//   cell.classList.toggle('red');
//   }
// });



// // function test(className){
// //     var checkkClassName = 
// //     return
// // }

// function removeElemClass() {
//   // 1 sposob jest lepszy, jesli mam jeden element
// //   var elemRed = document.querySelector('td.red');
// //   if (elemRed) {
// //     elemRed.classList.remove('red');
// //   }
//   // 2 sposob dla kilku elemntow
  
//   //sposob na usuniecei powyżęj trzech
//         // var elemRed = document.querySelectorAll('td.red');
//         //   if (elemRed.length > 3){
//         //   for (var i = 0; i < elemRed.length; i++) {
//         //     elemRed[i].classList.remove('red');
//         //   }
//             //   }
// }

// window.addEventListener('keydown', function(event){
//     console.log(event.keyCode);
// });