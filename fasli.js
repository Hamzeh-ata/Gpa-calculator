var btnAdd = document.getElementById("addButton");
var btnremove = document.getElementById("removeButton");
var calcbutton = document.getElementById("calc");
var gradeText = document.getElementById("grade");
var checkBox = document.getElementsByClassName("checkbox");
let table = document.querySelector("table");
var tablenum = 4;
var tableCourse = 4;
var temp = 4;
var selectedValue = 0;
const calcElement = document.querySelector(".gauge__body");
btnAdd.addEventListener("click", addrow);

btnremove.addEventListener("click", deleteFunction);

function meter(gauge, value) {
  if (value == 4) {
    gauge.querySelector(".gauge__fill").style.transform = `rotate(${0.5}turn)`;
  } else if (value <= 0) {
    gauge.querySelector(".gauge__fill").style.transform = `rotate(${0.0}turn)`;
  } else if (value >= 1 && value < 1.5) {
    gauge.querySelector(".gauge__fill").style.transform = `rotate(${0.1}turn)`;
  } else if (value > 1.5 && value < 2) {
    gauge.querySelector(".gauge__fill").style.transform = `rotate(${0.15}turn)`;
  } else if (value == 2) {
    gauge.querySelector(".gauge__fill").style.transform = `rotate(${0.25}turn)`;
  } else if (value > 2 && value < 3) {
    gauge.querySelector(".gauge__fill").style.transform = `rotate(${0.29}turn)`;
  } else if (value > 2.5 && value < 2.9) {
    gauge.querySelector(".gauge__fill").style.transform = `rotate(${0.3}turn)`;
  } else if (value == 3) {
    gauge.querySelector(".gauge__fill").style.transform = `rotate(${0.35}turn)`;
  } else if (value > 3 && value < 3.5) {
    gauge.querySelector(".gauge__fill").style.transform = `rotate(${0.37}turn)`;
  } else if (value >= 3.5 && value < 4) {
    gauge.querySelector(".gauge__fill").style.transform = `rotate(${0.38}turn)`;
  } else if (value > 3.5 && value < 4) {
    gauge.querySelector(".gauge__fill").style.transform = `rotate(${0.4}turn)`;
  }
}

function get_grade() {
  var gpa = 0;
  var tempf = 0;
  var hours = 0;
  for (var i = 0; i < temp; i++) {
    gpa = document.getElementsByClassName("grade")[i].value;
    selectedValue = document.getElementsByClassName("select_hours")[i].value;

    if (document.getElementsByClassName("grade")[i].value.length == 0) {
      gpa = document.getElementsByClassName("grade")[i] = 0;
      selectedValue = document.getElementsByClassName("select_hours")[i] = 0;
    }

    if (document.getElementsByClassName("select_hours")[i].value.length == 0) {
      selectedValue = document.getElementsByClassName("select_hours")[i] = 0;
    }

    if (document.getElementsByClassName("select_hours")[i].value == 0) {
      gpa = document.getElementsByClassName("grade")[i] = 0;
    }
    if ((check = document.getElementsByClassName("checkbox")[i].checked)) {
      selectedValue = document.getElementsByClassName("select_hours")[i] = 0;
    }

    hours += parseInt(selectedValue);

    tempf += parseInt(selectedValue) * parseFloat(gpa);

    var finalGrade = tempf / hours;

    if (hours == 0 && tempf == 0) {
      finalGrade = 0;
    }
  }

  gradeText.innerHTML = finalGrade.toFixed(2);
  meter(calcElement, finalGrade);
}
function addrow() {
  ++tablenum;
  ++tableCourse;

  if (temp < 7) {
    ++temp;

    /*let template = `
            
            <tr id="newRows">
               <td>
               ${temp}
               </td>
               <td>${temp + " مادة"}</td>
               <td>
                      <select  class="select_hours" onchange="get_grade()" id="hours" style="width: 85%; align-items: center; height: 30px;">
                         <option value="0">0</option>
                         <option value="1">1</option>
                         <option value="2">2</option>
                         <option value="3">3</option>
                         <option value="4">4</option>
                         <option value="5">5</option>
                         <option value="6">6</option>
                              </select> </td>
          <td ><input class="grade"  onkeyup="get_grade()"  type="text" maxlength="100" style="width: 85%; "> </input></td>
          <td> <input class="checkbox" type="checkbox" onclick="get_grade()" style="width: 100px; height: 20px;"</input></td>
              </tr> 
          
         `*/
    //table.innerHTML +=template;
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = `<td>
${temp}
</td>`;
    cell2.innerHTML = `<td>${temp + " مادة"}</td>`;
    cell3.innerHTML = ` <select  class="select_hours" onchange="get_grade()" id="hours" style="width: 85%; align-items: center; height: 30px;">
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
     </select>`;
    cell4.innerHTML = `<td ><input class="grade"  onkeyup="get_grade()"  type="text" maxlength="100" style="width: 85%;   "> </input></td>`;

    cell5.innerHTML = ` <td> <input class="checkbox" type="checkbox" onclick="get_grade()" style="width: 100px; height: 20px; cursor: pointer;"</input></td>`;
  } else if (temp >= 7) {
    alert("لا يمكنك اضافة مادة اخرى");
    temp = 7;
  }
}
function deleteFunction() {
  if (temp > 3) {
    table.deleteRow(temp);
    --temp;
    --tablenum;
    --tableCourse;
  } else if (temp <= 3) {
    alert("لا يمكنك حذف مادة اخرى");
  }
  get_grade();
}
